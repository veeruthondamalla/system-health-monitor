import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    @Output() onMenuClick = new EventEmitter<any>();
    title: any;
    today= new Date();
    url:any;
    display:any;
  
    constructor(private activatedRoute: ActivatedRoute) {
        this.activatedRoute.url.subscribe(activeUrl =>{
            this.url=window.location.pathname;
            //alert(this.url)
            if(this.url != "/landing"){
                this.display = "show";

         }else{
                this.display = "hidden";

             }
          });

        this.title = "Siva Ramakrishnan";


        }

    ngOnInit() {}

    menuClick() {
        this.onMenuClick.emit();
    }

    getburger(){
        let styles = {
            'z-index': (this.url==="/landing") ? '0' : '3',
            
          };
          return styles;
        
    }
}
