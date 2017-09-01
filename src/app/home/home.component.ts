import { Component } from '@angular/core'
@Component({
    selector: "Gob",
    templateUrl: "./home.component.html",
     styleUrls: ['./home.component.css']
})
export class HomeComponent {                           
    sitename:string;
    slider1;slider2;slider3;slider4;
    templategob1;templategob2;templategob3;
    templategob4;templategob5;templategob6;
    business0;business1;business2;business3;business4;business5;
    template1;template2;template3;template4;template5;template6;template7;template8;

    facebook_logo;instagram_logo;twitter_logo; mailingwork_logo;

    phone;enquiry;sales;
    constructor()
    {
        this.sitename="MailGob";                               /* MailGob logo on left-top*/

        this.phone=">1234567890";
        this.enquiry=">info@mailgob.com";
        this.sales=">sales@mailgob.com";

        this.slider1='assets/images/slider1.png';               /* First slider images*/
        this.slider2='assets/images/slider2.png';
        this.slider3='assets/images/slider3.png';

        this.templategob1='assets/images/gobdesign1.png';      /*Image Urls displayed on home page*/
        this.templategob2='assets/images/gobdesign2.png';
        this.templategob3='assets/images/gobdesign3.png';
        this.templategob4='assets/images/gobdesign4.png';
        this.templategob5='assets/images/gobdesign5.png';
        this.templategob6='assets/images/gobdesign6.png';

        this.business1='assets/images/business0.png';     /*end-of-page slider images */
        this.business2='assets/images/business2.png';
        this.business3='assets/images/business3.png';
        this.business4='assets/images/business4.png';
        this.business5='assets/images/business5.png';

        this.template1='assets/images/template1.png';               /* Template images*/
        this.template2='assets/images/template2.png';
        this.template3='assets/images/template3.png';
        this.template4='assets/images/template4.png';              
        this.template5='assets/images/template5.png';
        this.template6='assets/images/template6.png';
        this.template7='assets/images/template7.png';
        this.template8='assets/images/template8.png';

        this.facebook_logo='assets/images/facebook_logo.png';
        this.twitter_logo='assets/images/twitter_logo.png';
        this.instagram_logo='assets/images/instagram_logo.png';
        this.mailingwork_logo='assets/images/mailingwork_logo.png';

    }
    
} 