// 创建angular组件三部曲：
// 1、从@angular/core组件中引入Component修饰器；
// 2、穿件一个普通的类，并使用@Component修饰它；
// 3、在@Component设置selector自定义标签和template自定义模板
import { Component } from '@angular/core';

// 其中@Component修饰器一般有以下几个配置：
// selector 一个css选择器，告诉angular在父级页面中查找my-app这个标签元素，并创建创建该组件并插入到标签中；
// template 组件自定义html模板标签;
// templateUrl 组件 HTML 模板的地址;
// styles 组件适用的自定义样式；
// styleUrls 组件需要依赖引入的css样式文件；
// directives 一个数组，模块需要以来的组件和指令；
// providers 一个数组，包含组件模块依赖所服务需要注入的依赖提供者
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'TEST'
}
