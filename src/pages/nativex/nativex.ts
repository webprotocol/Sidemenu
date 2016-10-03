import { Component } from '@angular/core';

import { CompassPage } from './compass/compass';
import { NAboutPage } from './about/about';
import { NContactPage } from './contact/contact';

@Component({
	templateUrl: 'nativex.html'
})
export class NativexPage {
	// this tells the tabs component which Pages
	// should be each tab's root Page
	tab1Root: any = CompassPage;
	tab2Root: any = NAboutPage;
	tab3Root: any = NContactPage;

	constructor() {

	}
}
