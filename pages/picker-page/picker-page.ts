import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker';
import { Instagram } from '@ionic-native/instagram';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'picker-page.html',
})
export class PickerPage {

  picked_image: string;
  has_picked_image: boolean = false;
  caption: string;
  readonly DEFAULT_IMAGE: string = 'http://placehold.it/500x500';

  constructor(private instagram: Instagram, private imagePicker: ImagePicker) {
    this.picked_image = this.DEFAULT_IMAGE;
  }

  pickImages() {
    var options = {
      maximumImagesCount: 1,
      width: 500,
      height: 500,
      quality: 100,
      outputType: 1
    };

    this.imagePicker.getPictures(options).then((results) => {
      this.picked_image = 'data:image/jpeg;base64,' + results[0];
      this.has_picked_image = true;
    }, (err: any) => {
      console.log(err);
      this.has_picked_image = false;
    });
  }

  shareImage() {
    this.instagram.share(this.picked_image, this.caption)
      .then(() => {
        this.picked_image = this.DEFAULT_IMAGE;
        this.has_picked_image = false;
      })
      .catch((error: any) => {
        console.error(error);
      });
  }

}
