import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
	selector: 'motion',
	templateUrl: 'motion.html'
})
export class MotionPage {

	constructor(public navCtrl: NavController) {

	}

	onManual() {
		console.log("onManual()...");
	}
    onStart() {
		console.log("onStart()...");
	}
    onStop() {
		console.log("onStop()...");
	}

}
