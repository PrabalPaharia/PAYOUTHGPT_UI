import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayouthVotersChatgptComponent } from './payouth-voters-chatgpt/payouth-voters-chatgpt.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { LlamaGenAIComponent } from './llama-gen-ai/llama-gen-ai.component';

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'home', component: HomeComponent },
{ path: 'demo', component: PresentationComponent  },
{ path: 'registration', component: RegistraionComponent  },
{ path: 'llama-gen-ai', component: LlamaGenAIComponent  },
{ path: 'demo/chat-with-support-bot', component: PayouthVotersChatgptComponent  }]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [
  HeaderComponent,
  HomeComponent  ,
  PresentationComponent,
  RegistraionComponent,
  HeaderComponent
]
