import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { SinglePage } from '../pages/single/single';
import { MasterPage } from '../pages/master/master'; import { DetailPage } from '../pages/master/detail/detail';
import { TabsPage } from '../pages/tabs/tabs'; 	import { HomePage } from '../pages/tabs/home/home';
												import { ContactPage } from '../pages/tabs/contact/contact';
												import { AboutPage } from '../pages/tabs/about/about';

import { NativePage } from '../pages/native/native';

@NgModule({
	declarations: [
		MyApp,
		SinglePage,
		MasterPage,	DetailPage,
		TabsPage, HomePage,	ContactPage, AboutPage,

		NativePage
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
	],
	providers: []
})
export class AppModule { }
