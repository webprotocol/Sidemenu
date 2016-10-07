import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { NavController } from 'ionic-angular';
import * as native from 'ionic-native';

@Component({
	selector: 'motion',
	templateUrl: 'motion.html'
})
export class MotionPage {

	constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {

	}

	mflag: boolean = false;
	aflag: boolean = false;

	x_axis: number = 0;
	y_axis: number = 0;
	z_axis: number = 9.8;
	pvalue: number = 10;

	sub: any;

	coordinate: SafeStyle = this.sanitizer.bypassSecurityTrustStyle("top:50%; left:50%");

	onManual() {
		this.mflag = true;
		console.log("onManual()...");
		native.DeviceMotion.getCurrentAcceleration().then((v:native.AccelerationData) => {
			this.x_axis = v.x;
			this.y_axis = v.y;
			this.z_axis = v.z;
			this.mflag = false;

			let top = (-this.y_axis + 9.8) * (100/19.6) - 3;
			let left = (this.x_axis + 9.8) * (100/19.6) - 3;
			this.coordinate = this.sanitizer.bypassSecurityTrustStyle("top: " + top + "%; left: " + left + "%");

			console.log("top: " + top);
			console.log("left: " + left);
		})
	}
    onStart() {
		this.aflag = true;
		console.log("onStart()...");
		this.sub = native.DeviceMotion.watchAcceleration({frequency: 100}).subscribe((v:native.AccelerationData) => {
			console.dir(v);
			this.x_axis = v.x;
			this.y_axis = v.y;
			this.z_axis = v.z;

			let top = Math.round((-this.y_axis + 9.8) * (100/19.6) - 3);
			let left = Math.round((this.x_axis + 9.8) * (100/19.6) - 3);
			this.coordinate = this.sanitizer.bypassSecurityTrustStyle("top: " + top + "%; left: " + left + "%");

			console.log("top: " + top);
			console.log("left: " + left);
		});
	}
    onStop() {
		this.aflag = false;
		console.log("onStop()...");
		this.sub.unsubscribe();
	}

}
