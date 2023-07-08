import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {
  
  constructor(private actionSheetCtrl: ActionSheetController) { }

  ngOnInit() {
  }

  onClick() {
    this.presentActionSheet();
  }

  //.actionSheetController.create
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albumnes',
      backdropDismiss:false,
      cssClass: 'my-custom-class',
    buttons: [{
      text: 'Delete',
      role: 'destructive',
      icon: 'trash-outline',
      cssClass: 'rojo',
      id: 'delete-button',
      data: {
        type: 'delete'
      },
      handler: () => {
        console.log('Delete clicked');
      }
    }, {
      text: 'Share',
      icon: 'share-outline',
      data: 10,
      handler: () => {
        console.log('Share clicked');
    }
  }, {
      text: 'Play (open modal)',
      icon: 'caret-forward-circle-outline',
      data: 'Data value',
      handler: () => {
        console.log('Play clicked');
      }
    }, {
      text: 'Favorite',
      icon: 'heart-outline',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Cancel',
      icon: 'close-outline',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();

  const { role, data } = await actionSheet.onDidDismiss();
  console.log('onDidDismiss resolved with role and data', role, data);
  }
}
