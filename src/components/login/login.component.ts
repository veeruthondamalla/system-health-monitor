import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    options: FormGroup;
    public href: string = "";

    ngOnInit() {

    }

    constructor(fb: FormBuilder, private router: Router) {
        // this.options = fb.group({
        //     color: 'primary',
        //     fontSize: [16, Validators.min(10)]
        // });
    }

    // getFontSize() {
    //     return Math.max(10, this.options.value.fontSize);
    // }

    // login() {
    //     this.router.navigate(['/dashboard']);
    // }

    title = 'healthmoniter';
    objectKeys = Object.keys;
  
    data: any = {
      "integration": [
        { 
          "id":1,
          "title": "integration status",
          "imagepath":"http://35.200.207.59/healthmo/icon-1.png",
          "url": "/dashboard"
        },
        {
          "id":2,
          "title": "data status",
          "imagepath":"http://35.200.207.59/healthmo/datastatus.png"
        },
        
      ],
      
       "engagement": [
         {
           "id":3,
           "title": "session",
         "imagepath":"http://35.200.207.59/healthmo/session.png"
        },
         {
           "id":4,
           "title": "login",
           "imagepath":"http://35.200.207.59/healthmo/login.png"
         },
         {
           "id":5,
          "title": "stickiness",
           "imagepath":"http://35.200.207.59/healthmo/stickiness.png"
         },
         {
           "id":6,
           "title": "Devices",
           "imagepath":"http://35.200.207.59/healthmo/devices.png"
         },
        
       ],
      
       "tech infra utilisation": [
         {
           "id":7,
           "title": "Memory/CPU",
           "imagepath":"http://35.200.207.59/healthmo/memory.png"
         },
         {
           "id":8,
           "title": "Disk space",
           "imagepath":"http://35.200.207.59/healthmo/diskspace.png"
         },
        
       ],
     
    }
  
  
}
