import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProvider } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { DepartamentoService } from './services/departamento.service';
import { MenuComponent } from './components/menu/menu.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [AppComponent, MenuComponent],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule],
  // providers: [appRoutingProvider, DepartamentoService],
  providers: [appRoutingProvider, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
