import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../model/customer/customer';
import {TokenStorageService} from "../../../service/token-storage.service";
// import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {
  // imageForm: FormGroup;
  customerForm: FormGroup;
  id: string;
  customer: Customer;
  message = '';

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.initFormEdit();
    this.id = this.tokenStorageService.getUser().idCustomer;
    this.customerService.getCustomerById(this.id).subscribe(data => {
      console.log(data);
      this.customer = data;
      // this.imageForm.setValue(this.customer.image);
      // console.log(this.imageForm);
      this.customerForm.setValue(this.customer);
    });
  }

  // findCustomerByid(): void {
  //   this.customerService.findById(this.customerForm.value);
  // }

  updateCustomer(): void {
    this.customerService.update(this.id, this.customerForm.value).subscribe(value => {
        this.message = 'đã thay đổi thông tin thành công';
      },
      error => {
        this.message = 'Xảy ra lỗi, không thể thay đổi thông tin';
      });
  }


  initFormEdit() {
    this.customerForm = new FormGroup({
      // id: new FormControl(''),
      id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl('', [Validators.required,
        Validators.pattern('^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼ" +\n' +
          '            "ÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+(\\\\s[a-zA-Zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợở" +\n' +
          '            "ỡùúụủũưừứựửữỳýỵỷỹđÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ]+)*$')]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(0|(\\(84\\)\\+))+([9][0-1][0-9]{7})$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      // appUserId: new FormControl('', [Validators.required])
      // image: new FormGroup({
      //   url: new FormControl(''),
      //   id: new FormControl('')
      // })
      // có nó nên không show infor dc
    });
  }
}
