import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { FaqComponent } from './faq/faq.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CaseStudyComponent } from './case-study/case-study.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'case-study',
    component: CaseStudyComponent
  },
  { path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
    scrollPositionRestoration: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
