import routers from './router';
import { HomePage, ContactUsPage, ApplicationPage, SearchPage } from '../pages';
import { Page404 } from '../components';

export const routerPublic = [
	{ path: routers.home, component: HomePage },
	{ path: routers.contactus, component: ContactUsPage },
	{ path: routers.application, component: ApplicationPage },
	{ path: `${routers.search}`, component: SearchPage },
	{ path: '*', component: Page404 },
];
