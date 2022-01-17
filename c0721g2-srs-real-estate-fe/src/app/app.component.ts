import { Component } from '@angular/core';
import {MatBottomSheet} from '@angular/material/bottom-sheet';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {BottomSheetNotifyComponent} from './component/util/bottom-sheet-notify/bottom-sheet-notify.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'srs-real-estate';

  notifyQuantity = 0;

  constructor(private _bottomSheet: MatBottomSheet, private notify: AngularFireDatabase) {
    const items: AngularFireList<any> = notify.list('/notifies');
    items.valueChanges().subscribe(
      x => {this.notifyQuantity = x.length; }
    );
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetNotifyComponent);
  }
}


