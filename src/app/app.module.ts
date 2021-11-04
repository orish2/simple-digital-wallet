import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BitcoinAppComponent } from './cmps/bitcoin-app/bitcoin-app.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { ContactAppComponent } from './cmps/contact-app/contact-app.component';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './pages/statistics/statistics.component';
import { FilterComponent } from './cmps/filter/filter.component';
import { FormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { ContactService } from 'src/services/contact.service';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { ContactResolverService } from 'src/services/contact-resolver.service';
import { HttpClientModule } from '@angular/common/http';
import { ContactEditComponent } from './contact-edit/contact-edit.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { MovePreviewComponent } from './cmps/move-preview/move-preview.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { UserMsgService } from 'src/services/user-msg.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BitcoinAppComponent,
    ContactListComponent,
    ContactPreviewComponent,
    AppHeaderComponent,
    ContactAppComponent,
    HomeComponent,
    StatisticsComponent,
    FilterComponent,
    ContactDetailsComponent,
    TransferFundComponent,
    ContactEditComponent,
    MoveListComponent,
    MovePreviewComponent,
    UserMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [ContactService, ContactResolverService, UserMsgService],
  bootstrap: [AppComponent]
})
export class AppModule { }
