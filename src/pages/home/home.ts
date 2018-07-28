import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import User from './../../model/User';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private http: Http, public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  generateUser()
  {
    var user = new User("John Brown", "johhny23");

    this.alertCtrl.create({
      title: 'New user',
      subTitle: 'Fullname: ' + user.fullName + ' | Username: ' + user.userName + ' | User key: ' + user.key,
      buttons: ['Ok']
    }).present();

    console.log(user);
  }

}
