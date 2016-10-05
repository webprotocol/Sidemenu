import { NgModule }					from '@angular/core';
import { IonicApp, IonicModule } 	from 'ionic-angular';

/*
 * Template
 * 1. SinglePage
 * 2. Master/Detail Page
 * 3. TabsPage
 */
import { MyApp } 					from './app.component';
import { SinglePage } 				from '../pages/single/single';
import { MasterPage } 				from '../pages/master/master';	import { DetailPage } from '../pages/master/detail/detail';

import { TabsPage } 				from '../pages/tabs/tabs'; 		import { HomePage } from '../pages/tabs/home/home';
																	import { ContactPage } from '../pages/tabs/contact/contact';
																	import { AboutPage } from '../pages/tabs/about/about';
/*
 * Single Page Implementation
 */
import { NativePage } from '../pages/native/native';

/*
 * Tabs Page Implementation
 */
import { NativexPage } from '../pages/nativex/nativex';	import { CompassPage } from '../pages/nativex/compass/compass';
														import { MotionPage } from '../pages/nativex/motion/motion';
														import { NAboutPage } from '../pages/nativex/about/about';

@NgModule({
	declarations: [
		MyApp,
		SinglePage,
		MasterPage,	DetailPage,
		TabsPage, HomePage,	ContactPage, AboutPage,

		NativePage,
		NativexPage, CompassPage,	MotionPage, NAboutPage
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		SinglePage,
		MasterPage,	DetailPage,
		TabsPage, HomePage,	ContactPage, AboutPage,

		NativePage,
		NativexPage, CompassPage,	MotionPage, NAboutPage
	],
	providers: []
})
export class AppModule { }
