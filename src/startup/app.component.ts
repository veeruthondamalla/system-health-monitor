import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    routes: AppRouterLink[] = [];
    title = 'Angular';
    public url: string = "";
    opened: boolean = true;
    color = 'primary';
    mode = 'determinate';
    value = 50;
  

    constructor( private activatedRoute: ActivatedRoute) {
        this.activatedRoute.url.subscribe(activeUrl =>{
            this.url=window.location.pathname;
          //  alert(this.url)
            if(this.url != "/landing"){
              return this.opened = true;
         }else{
               return this.opened = false;


             }
          });


  
    }


    ngOnInit() {
        this.loadRoutes();

       // this.opened = false;

    }

    loadRoutes(): void {
        this.routes.push(new AppRouterLink('//dashboard', 'Integration'));
        this.routes.push(new AppRouterLink('//dashboard', 'Engagement'));

        this.routes.push(new AppRouterLink('//name-matching', 'Tech Infra Utilisation'));
       // this.routes.push(new AppRouterLink('//bordereau', 'Engagement'));
    }
}

class AppRouterLink {
    constructor(link: string, name: string) {
        this.link = link;
        this.name = name;
    }

    public link: string;
    public name: string;
}

 $(function(){
     $("#cssmenu li.has-sub>a").click(function(){
        $(this).removeAttr('href');
        var element = $(this).parent('li');
        if (element.hasClass('open'))
        {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp();
        }
     else{
            element.addClass('open');
            element.children('ul').slideDown();
            element.siblings('li').children('ul').slideUp();
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp();
        }
    

});
 });