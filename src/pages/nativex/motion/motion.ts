import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import * as native from 'ionic-native';

@Component({
	selector: 'motion',
	templateUrl: 'motion.html'
})
export class MotionPage {

	constructor(public navCtrl: NavController) {

	}

	mflag: boolean = false;
	aflag: boolean = false;

	x_axis: number = 0;
	y_axis: number = 0;
	z_axis: number = 9.8;

	onManual() {
		this.mflag = true;
		console.log("onManual()...");
		native.DeviceMotion.getCurrentAcceleration().then((v:native.AccelerationData) => {
			this.x_axis = v.x;
			this.y_axis = v.y;
			this.z_axis = v.z;
			this.mflag = false;
		})
	}
    onStart() {
		// this.aflag = true;
		console.log("onStart()...");
	}
    onStop() {
		// this.aflag = false;
		console.log("onStop()...");
	}

}
