import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {QuestionComponent} from './question.component';
import {QuestionsComponent} from './questions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,QuestionComponent,QuestionsComponent
  ],
  imports: [
    BrowserModule,MatSliderModule,MatInputModule,MatCardModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,HttpClientModule,MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
