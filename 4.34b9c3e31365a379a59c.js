(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{ZfHS:function(t,o,i){"use strict";i.r(o),i.d(o,"AboutMeModule",function(){return m});var n=i("ofXK"),e=i("tyNb"),c=i("fXoL"),r=i("jhN1"),s=i("QPBi"),a=i("xlun");let l=(()=>{class t{constructor(){}ngOnInit(){}handleClick(){window.open(this.redirectTo,"blank")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c.Ib({type:t,selectors:[["app-contact-icon"]],inputs:{tooltip:"tooltip",url:"url",redirectTo:"redirectTo"},decls:2,vars:3,consts:[[1,"icon-container",3,"click"],[3,"pTooltip","src","alt"]],template:function(t,o){1&t&&(c.Ub(0,"div",0),c.bc("click",function(){return o.handleClick()}),c.Pb(1,"img",1),c.Tb()),2&t&&(c.Cb(1),c.lc("pTooltip",o.tooltip)("src",o.url,c.uc)("alt",o.tooltip))},directives:[a.a],styles:[".icon-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:15%;height:120px;width:120px;transition:all .3s ease-in}.icon-container[_ngcontent-%COMP%]:hover{transform:scale(1.1);color:#fff}img[_ngcontent-%COMP%]{max-width:100%;max-height:100%;display:block}"]}),t})();function b(t,o){if(1&t&&(c.Ub(0,"div",8),c.Pb(1,"app-contact-icon",9),c.Tb()),2&t){const t=o.$implicit,i=c.fc().$implicit;c.Cb(1),c.lc("tooltip",i(t.type))("url",t.iconUrl)("redirectTo",t.redirectTo)}}function p(t,o){if(1&t&&(c.Sb(0),c.Ub(1,"div",1),c.Bc(2,b,2,3,"div",7),c.Tb(),c.Rb()),2&t){const t=c.fc(3);c.Cb(2),c.lc("ngForOf",t.contacts)}}function d(t,o){if(1&t&&(c.Sb(0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"h2"),c.Dc(4),c.Tb(),c.Tb(),c.Tb(),c.Ub(5,"div",1),c.Ub(6,"div",2),c.Ub(7,"div",3),c.Ub(8,"p"),c.Dc(9),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(10,"div",1),c.Ub(11,"div",2),c.Ub(12,"h2"),c.Dc(13),c.Tb(),c.Tb(),c.Ub(14,"div",4),c.Bc(15,p,3,1,"ng-container",0),c.Tb(),c.Ub(16,"div",2),c.Ub(17,"p"),c.Ub(18,"i",5),c.Dc(19," velasco.andrs@gmail.com"),c.Tb(),c.Tb(),c.Ub(20,"p"),c.Ub(21,"i",6),c.Dc(22," (+593) 991619600"),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Rb()),2&t){const t=o.$implicit,i=c.fc().$implicit;c.Cb(4),c.Fc("",i("about-me")," "),c.Cb(5),c.Fc(" ",t("introduction.description")," "),c.Cb(4),c.Fc("",t("contact.title")," "),c.Cb(2),c.lc("translocoRead","about.contact.options")}}function u(t,o){1&t&&(c.Sb(0),c.Bc(1,d,23,4,"ng-container",0),c.Rb()),2&t&&(c.Cb(1),c.lc("translocoRead","about"))}const f=[{component:(()=>{class t{constructor(t){this.titleService=t,this.contacts=[{type:"github",redirectTo:"https://github.com/velascoandres",iconUrl:"assets/images/logos/companies/github.svg"},{type:"linkedin",redirectTo:"https://www.linkedin.com/in/andr%C3%A9s-velasco-210303135/",iconUrl:"assets/images/logos/companies/linkedin.svg"},{type:"twitter",redirectTo:"https://twitter.com/Andres33033134",iconUrl:"assets/images/logos/companies/twitter.svg"}],this.titleService.setTitle("About me")}ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)(c.Ob(r.b))},t.\u0275cmp=c.Ib({type:t,selectors:[["app-about-me-route"]],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[1,"p-grid"],[1,"p-col-12","p-md-8"],[1,"quote","gradient-background"],[1,"p-col-12"],["aria-hidden","true",1,"fa","fa-envelope-o"],[1,"fa","fa-phone"],["class","p-col-2",4,"ngFor","ngForOf"],[1,"p-col-2"],[3,"tooltip","url","redirectTo"]],template:function(t,o){1&t&&c.Bc(0,u,2,1,"ng-container",0),2&t&&c.lc("translocoRead","sections")},directives:[s.d,n.i,l],styles:[".typewriter[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{overflow:hidden;border-right:.15em solid orange;white-space:nowrap;margin:0 auto;letter-spacing:.15em;animation:typing 3.5s steps(40),blink-caret .75s step-end infinite}@keyframes typing{0%{width:0}to{width:100%}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:orange}}"]}),t})(),path:""},{redirectTo:"",pathMatch:"full"}];let g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({imports:[[e.g.forChild(f)],e.g]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=c.Mb({type:t}),t.\u0275inj=c.Lb({providers:[{provide:s.c,useValue:"about"}],imports:[[n.b,g,s.e,a.b]]}),t})()}}]);