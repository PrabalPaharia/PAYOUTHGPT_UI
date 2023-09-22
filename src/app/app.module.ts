import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routedComponents, AppRoutingModule } from './app-routing.module';
import { PayouthVotersChatgptComponent } from './payouth-voters-chatgpt/payouth-voters-chatgpt.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { LlamaGenAIComponent } from './llama-gen-ai/llama-gen-ai.component';



@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    PayouthVotersChatgptComponent,
    RegistraionComponent,
    LlamaGenAIComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
