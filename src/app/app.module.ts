import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';;
import { AppComponent } from './app.component';
import { ContentChoicesComponent }  from './contentChoices.component';
import { DragAndDropModule } from 'angular-draggable-droppable';
@NgModule({
  declarations: [
    AppComponent,
    ContentChoicesComponent
  ],
  imports: [
    DragAndDropModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  //providers: [InMemoryDataService1],
  bootstrap: [AppComponent]
})
export class AppModule { }
