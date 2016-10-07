import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import * as native from 'ionic-native';

@Component({
	selector: 'barcode',
	templateUrl: 'barcode.html'
})
export class BarcodePage {


	// @ViewChild('map') mapElement;
	map: native.GoogleMap;

	constructor(public navCtrl: NavController) {

		this.map = new native.GoogleMap("map");
		this.map.one(native.GoogleMapsEvent.MAP_READY).then(
			() => {
				console.log("Map is ready");
			}
		);

	}

	onScan() {
		console.log("onSacn()...");
		native.BarcodeScanner.scan().then(
			(barcodeData) => {
				console.dir(barcodeData);
			}, (err) => {
				console.dir(err);
			}
		);

	}

	onMap() {
		console.log("onMap()...");
		let ionic: native.GoogleMapsLatLng = new native.GoogleMapsLatLng(43.0741904,-89.3809802);

		// create CameraPosition
		let position: native.CameraPosition = {
			target: ionic,
			zoom: 18,
			tilt: 30
		};

		// move the map's camera to position
		this.map.moveCamera(position);
	}

}
