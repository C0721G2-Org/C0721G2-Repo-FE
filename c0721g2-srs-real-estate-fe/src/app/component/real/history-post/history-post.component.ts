import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {RealService} from '../../../service/real.service';
import {Subscription} from 'rxjs';
import {RealEstateNew} from '../../../model/real/real-estate-new';

@Component({
  selector: 'app-history-post',
  templateUrl: './history-post.component.html',
  styleUrls: ['./history-post.component.scss']
})
export class HistoryPostComponent implements OnInit {
  private subscription: Subscription;
  realEstate: RealEstateNew;
  realEstateNews: RealEstateNew[];
  customerId: string;
  public formSearch: FormGroup;

  constructor(
    // tslint:disable-next-line:variable-name
    private _formBuilder: FormBuilder,
    public  realService: RealService,
    public activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   this.customerId = paramMap.get('id');
    // });
    this.customerId = 'KH-0002';
    this.realService.findHistoryPostBySearchFieldId(this.customerId, '', '', '').subscribe(data => {
        this.realEstateNews = data['content'];
        console.log(this.realEstateNews);
      }
    );
    this.formSearch = this._formBuilder.group({
      title: [''],
      kindOfNew: [''],
      realOfType: [''],
    });
  }

  onSearch(searchInfo) {
    console.log(this.formSearch.value);
    this.realService.findHistoryPostBySearchFieldId(
      this.customerId,
      this.formSearch.value.title,
      this.formSearch.value.kindOfNew,
      this.formSearch.value.realOfType)
      .subscribe(data => {
          this.realEstateNews = data['content'];
          console.log(this.realEstateNews);
          console.log(data);
        }
      );
  }
}
