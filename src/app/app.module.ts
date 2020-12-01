import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProvider } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { AuthService } from './services/auth.service';
import { UserJobService } from './services/usersjobs.service';
import { UserComponent } from './components/user/user.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, MenuComponent, UserComponent, JobsComponent],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule, NgbModule],
  providers: [appRoutingProvider, AuthService, UserJobService],
  bootstrap: [AppComponent],
})
export class AppModule {}
