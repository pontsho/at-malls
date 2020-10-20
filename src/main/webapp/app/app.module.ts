import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { AtMallsSharedModule } from 'app/shared/shared.module';
import { AtMallsCoreModule } from 'app/core/core.module';
import { AtMallsAppRoutingModule } from './app-routing.module';
import { AtMallsHomeModule } from './home/home.module';
import { AtMallsEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    AtMallsSharedModule,
    AtMallsCoreModule,
    AtMallsHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    AtMallsEntityModule,
    AtMallsAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class AtMallsAppModule {}
