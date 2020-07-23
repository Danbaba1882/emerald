import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarOComponent } from './navbar-o/navbar-o.component';
import { HttpClientModule} from '@angular/common/http';
import { SeoComponent } from './seo/seo.component';
import { SmmComponent } from './smm/smm.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { MappsComponent } from './mapps/mapps.component';
import { EmailmComponent } from './emailm/emailm.component';
import { WebComponent } from './web/web.component';
import { SmsComponent } from './sms/sms.component';
import { OrgComponent } from './org/org.component';
import { EthereumComponent } from './ethereum/ethereum.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ServicesComponent,
    AdmindashboardComponent,
    ContactComponent,
    ProjectComponent,
    FooterComponent,
    NavbarOComponent,
    SeoComponent,
    SmmComponent,
    EcommerceComponent,
    MappsComponent,
    EmailmComponent,
    WebComponent,
    SmsComponent,
    OrgComponent,
    EthereumComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'project', component: ProjectComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about', component: AboutComponent },
      { path: 'admin', component: AdmindashboardComponent },
      { path: 'services/organisations-and-cooperate-websites', component: OrgComponent },
      { path: 'services/businesses-and-ecommerce-websites', component: WebComponent },
      { path: 'services/email-marketing', component: EmailmComponent },
      { path: 'services/social-media-marketing', component: SmmComponent },
      { path: 'services/search-engine-optimisation', component: SeoComponent },
      { path: 'services/mobile-and-progressive-web-applications', component: MappsComponent },
      { path: 'services/school-websites-and-management-systems', component: SmsComponent },
      { path: 'services/blockchain-apps-and-smart-contracts', component: EthereumComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
