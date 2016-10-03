import { Component } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { NavController } from 'ionic-angular';
import { DeviceOrientation, CompassHeading } from 'ionic-native';

@Component({
	selector: 'compass',
	templateUrl: 'compass.html'
})
export class CompassPage {

	constructor(public navCtrl: NavController, public sanitizer: DomSanitizer) {

	}

	heading: number = 10;
	sub: any;
	flag : any = false;
	rotate: SafeStyle = this.sanitizer.bypassSecurityTrustStyle("rotate(-10deg)");


	onManual() {
		console.log("onManual()...");
		DeviceOrientation.getCurrentHeading().then(
			(data: CompassHeading) => {
				console.dir(data);
				this.heading = Math.floor(data.trueHeading);
				this.rotate = this.sanitizer.bypassSecurityTrustStyle('rotate(' + -this.heading +'deg)');
			},
			(error: any) => {
				console.dir(error);
			}
		);

	}

	onStart() {
		console.log("onStart()...");
		this.flag = true;

		this.sub = DeviceOrientation.watchHeading({frequency: 100}).subscribe(
			(data: CompassHeading) => {
				console.dir(data);
				this.heading = Math.floor(data.trueHeading);
				this.rotate = this.sanitizer.bypassSecurityTrustStyle('rotate(' + -this.heading +'deg)');
			}
		);

	}
	onStop() {
		console.log("onStop()...");
		this.flag = false;

		this.sub.unsubscribe();
	}

}
