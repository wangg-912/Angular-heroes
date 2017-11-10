import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService  } from './hero.service';

import { AppRoutingModule } from './app-routing';
@NgModule({
  // 本模块组建中有它引出其他组件的依赖类
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // 声明，试图类属于这个模块，一般视图分为三种：组件、指令和管道
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  // 服务的创建者。本模块把它们加入全局的服务表中，让它们在应用中的任何部分都可被访问到
  providers: [ HeroService ],
  // 应用的主视图，称为根组件，它是所有其它应用视图的宿主。只有根模块需要设置 bootstrap 属性中
  bootstrap: [ AppComponent ]
})
export class AppModule { }
