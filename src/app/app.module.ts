import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import { DetailPage } from '../pages/page2/detail/detail';
import { Page3 } from '../pages/page3/page3';

import { AboutPage } from '../pages/tabs/about/about';
import { ContactPage } from '../pages/tabs/contact/contact';
import { HomePage } from '../pages/tabs/home/home';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
	declarations: [
		MyApp,
		Page1,
		Page2,
		DetailPage,
		Page3,
        AboutPage,
		ContactPage,
		HomePage,
		TabsPage
	],
	imports: [
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		Page1,
		Page2,
		DetailPage,
		Page3,
        AboutPage,
		ContactPage,
		HomePage,
		TabsPage
	],
	providers: []
})
export class AppModule { }
