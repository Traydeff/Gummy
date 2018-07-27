import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import User from './../../model/User';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  generateUser()
  {
    var user = new User("John Brown", "johhny23");

    user.key = this.generateKey();

    this.alertCtrl.create({
      title: 'New user',
      subTitle: 'Fullname: ' + user.fullName + ' | Username: ' + user.userName + ' | User key: ' + user.key,
      buttons: ['Ok']
    }).present();

    console.log(user);
  }

  generateKey()
  {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    text += new Date().getTime();
  
    return sha256(text);
  }

}
