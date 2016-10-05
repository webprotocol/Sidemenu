import { Component } from '@angular/core';

import { CompassPage } from './compass/compass';
import { MotionPage } from './motion/motion';
import { NAboutPage } from './about/about';

@Component({
	templateUrl: 'nativex.html'
})
export class NativexPage {
	// this tells the tabs component which Pages
	// should be each tab's root Page
	tab1Root: any = CompassPage;
	tab2Root: any = MotionPage;
	tab3Root: any = NAboutPage;

	constructor() {

	}
}
