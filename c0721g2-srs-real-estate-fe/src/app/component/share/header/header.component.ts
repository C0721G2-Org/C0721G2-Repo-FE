import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TokenStorageService} from '../../../service/token-storage.service';
import {Router} from '@angular/router';
import {LoginComponent} from '../../security/login/login.component';
import {AuthService} from '../../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: string;
  role: string;
  urlImg: string;
  isLoggedIn: boolean;

  constructor(public dialog: MatDialog,
              private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getUser()) {
      this.role = this.tokenStorageService.getUser().roles[0];
      this.username = this.tokenStorageService.getUser().username;
      this.urlImg = this.tokenStorageService.getUser().urlImg;
    }
    this.isLoggedIn = this.username != null;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '450px',
      panelClass: 'custom-dialog',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logout() {
    this.tokenStorageService.signOut();
    this.ngOnInit();
    this.router.navigate(['/real-estate-new/list']);
  }
}
