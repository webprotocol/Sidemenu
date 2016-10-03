import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';

import { MasterPage } from '../pages/master/master';
import { DetailPage } from '../pages/master/detail/detail';

import { Page3 } from '../pages/page3/page3';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/tabs/home/home';
import { ContactPage } from '../pages/tabs/contact/contact';
import { AboutPage } from '../pages/tabs/about/about';

@NgModule({
	declarations: [
		MyApp,
		Page1,
		MasterPage,
		DetailPage,
		Page3,
		TabsPage,
		HomePage,
		ContactPage,
        AboutPage
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		Page1,
		MasterPage,
		DetailPage,
		Page3,
		TabsPage,
		HomePage,
		ContactPage,
        AboutPage
	],
	providers: []
})
export class AppModule { }
