import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import * as native from 'ionic-native';

@Component({
	selector: 'page-native',
	templateUrl: 'native.html'
})
export class NativePage {

	constructor(public navCtrl: NavController) {

	}

	onLog(event) {
		console.log("onLog()...");
	}
	onVibration(event) {
		console.log("onVibration(1000)...");
		native.Vibration.vibrate(1000);
	}
	onToast(event) {
		console.log("onToast()...");
		native.Toast.showShortBottom("onToast()...").subscribe();
	}
	onLight(event) {
		console.log("onLight()...");
		native.Flashlight.toggle();
	}


}
