import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProvider } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { UserJobService } from './services/usersjobs.service';
import { UserComponent } from './components/user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecursosService } from './services/recursos.service';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, UserComponent, LoginComponent],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule, NgbModule],
  providers: [appRoutingProvider, AuthService, UserJobService, RecursosService],

  bootstrap: [AppComponent],
})
export class AppModule {}
