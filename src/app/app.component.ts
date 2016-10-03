import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { SinglePage } from '../pages/single/single';
import { MasterPage } from '../pages/master/master';
import { TabsPage } from '../pages/tabs/tabs';

import { NativePage } from '../pages/native/native';


@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	@ViewChild(Nav) nav: Nav;

	// rootPage: any = Page1;
	rootPage: any = NativePage;

	pages: Array<{ title: string, component: any }>;

	constructor(public platform: Platform) {
		this.initializeApp();

		// used for an example of ngFor and navigation
		this.pages = [
			{ title: 'Single Page',	component: SinglePage },
			{ title: 'Master Page', component: MasterPage },
			{ title: 'Tabs Page', 	component: TabsPage },

			{ title: 'Native Page', component: NativePage }
		];

	}

	initializeApp() {
		this.platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			StatusBar.styleDefault();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
