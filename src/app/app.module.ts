import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule, SymbolPaletteModule } from '@syncfusion/ej2-angular-diagrams';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    DiagramModule,
    SymbolPaletteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
