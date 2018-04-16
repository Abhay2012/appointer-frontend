import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { SideBarModule } from "./components/sidebar/sidebar.module";

export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { velocity: 0.1, threshold: 1 }
  }
}

@NgModule({
  imports: [BrowserModule,
    SideBarModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: "login",
        loadChildren: 'app/components/login-signup/login-signup.module#LoginSignUpModule'
      },
      {
        path: "profile",
        loadChildren: 'app/components/profile/profile.module#ProfileModule'
      },
      {
        path: "home",
        loadChildren: 'app/components/home/home.module#HomeModule'
      },
      {
        path: "feedback",
        loadChildren: 'app/components/feedback/feedback.module#FeedbackModule'
      },
      {
        path: "messaging",
        loadChildren: 'app/components/messaging/messaging.module#MessagingModule'
      },
      {
        path : "chat",
        loadChildren : 'app/components/chat/chat.module#ChatModule'
      }

      
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig
  }] // use our custom hammerjs config
})

export class AppModule { }