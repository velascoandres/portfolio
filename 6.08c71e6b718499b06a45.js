(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Vj4q:function(e,t,n){"use strict";n.r(t),n.d(t,"EducationModule",function(){return M});var i=n("ofXK"),l=n("7zfz"),o=n("fXoL");function c(e,t){1&e&&o.Qb(0)}function a(e,t){1&e&&o.Qb(0)}const r=function(e){return{$implicit:e}};function p(e,t){if(1&e&&(o.Sb(0),o.zc(1,a,1,0,"ng-container",4),o.Rb()),2&e){const e=o.fc().$implicit,t=o.fc();o.Cb(1),o.ic("ngTemplateOutlet",t.markerTemplate)("ngTemplateOutletContext",o.kc(2,r,e))}}function s(e,t){1&e&&o.Pb(0,"div",10)}function m(e,t){1&e&&o.Pb(0,"div",11)}function f(e,t){1&e&&o.Qb(0)}function b(e,t){if(1&e&&(o.Ub(0,"div",2),o.Ub(1,"div",3),o.zc(2,c,1,0,"ng-container",4),o.Tb(),o.Ub(3,"div",5),o.zc(4,p,2,4,"ng-container",6),o.zc(5,s,1,0,"ng-template",null,7,o.Ac),o.zc(7,m,1,0,"div",8),o.Tb(),o.Ub(8,"div",9),o.zc(9,f,1,0,"ng-container",4),o.Tb(),o.Tb()),2&e){const e=t.$implicit,n=t.last,i=o.pc(6),l=o.fc();o.Cb(2),o.ic("ngTemplateOutlet",l.oppositeTemplate)("ngTemplateOutletContext",o.kc(7,r,e)),o.Cb(2),o.ic("ngIf",l.markerTemplate)("ngIfElse",i),o.Cb(3),o.ic("ngIf",!n),o.Cb(2),o.ic("ngTemplateOutlet",l.contentTemplate)("ngTemplateOutletContext",o.kc(9,r,e))}}const u=function(e,t,n,i,l,o,c){return{"p-timeline p-component":!0,"p-timeline-left":e,"p-timeline-right":t,"p-timeline-top":n,"p-timeline-bottom":i,"p-timeline-alternate":l,"p-timeline-vertical":o,"p-timeline-horizontal":c}};let d=(()=>{class e{constructor(e){this.el=e,this.align="left",this.layout="vertical"}getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this.contentTemplate=e.template;break;case"opposite":this.oppositeTemplate=e.template;break;case"marker":this.markerTemplate=e.template}})}}return e.\u0275fac=function(t){return new(t||e)(o.Ob(o.l))},e.\u0275cmp=o.Ib({type:e,selectors:[["p-timeline"]],contentQueries:function(e,t,n){if(1&e&&o.Hb(n,l.f,0),2&e){let e;o.oc(e=o.cc())&&(t.templates=e)}},inputs:{align:"align",layout:"layout",value:"value",style:"style",styleClass:"styleClass"},decls:2,vars:13,consts:[[3,"ngStyle","ngClass"],["class","p-timeline-event",4,"ngFor","ngForOf"],[1,"p-timeline-event"],[1,"p-timeline-event-opposite"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-timeline-event-separator"],[4,"ngIf","ngIfElse"],["marker",""],["class","p-timeline-event-connector",4,"ngIf"],[1,"p-timeline-event-content"],[1,"p-timeline-event-marker"],[1,"p-timeline-event-connector"]],template:function(e,t){1&e&&(o.Ub(0,"div",0),o.zc(1,b,10,11,"div",1),o.Tb()),2&e&&(o.Eb(t.styleClass),o.ic("ngStyle",t.style)("ngClass",o.nc(5,u,"left"===t.align,"right"===t.align,"top"===t.align,"bottom"===t.align,"alternate"===t.align,"vertical"===t.layout,"horizontal"===t.layout)),o.Cb(1),o.ic("ngForOf",t.value))},directives:[i.k,i.h,i.i,i.o,i.j],styles:[".p-timeline{display:flex;flex-direction:column;flex-grow:1}.p-timeline-left .p-timeline-event-opposite{text-align:right}.p-timeline-left .p-timeline-event-content{text-align:left}.p-timeline-right .p-timeline-event{flex-direction:row-reverse}.p-timeline-right .p-timeline-event-opposite{text-align:left}.p-timeline-right .p-timeline-event-content{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:row-reverse}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite{text-align:right}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-opposite,.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content{text-align:left}.p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(2n) .p-timeline-event-content{text-align:right}.p-timeline-event{display:flex;min-height:70px;position:relative}.p-timeline-event:last-child{min-height:0}.p-timeline-event-content,.p-timeline-event-opposite{flex:1;padding:0 1rem}.p-timeline-event-separator{align-items:center;display:flex;flex:0;flex-direction:column}.p-timeline-event-marker{align-self:baseline;display:flex}.p-timeline-event-connector{flex-grow:1}.p-timeline-horizontal{flex-direction:row}.p-timeline-horizontal .p-timeline-event{flex:1;flex-direction:column}.p-timeline-horizontal .p-timeline-event:last-child{flex:0}.p-timeline-horizontal .p-timeline-event-separator{flex-direction:row}.p-timeline-horizontal .p-timeline-event-connector{width:100%}.p-timeline-bottom .p-timeline-event,.p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(2n){flex-direction:column-reverse}"],encapsulation:2,changeDetection:0}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({imports:[[i.b]]}),e})(),v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({imports:[[i.b],l.g]}),e})();n("YyRF");var h=n("Q4Mo");let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({imports:[[i.b,h.b]]}),e})();var C=n("tyNb"),x=n("QPBi"),y=n("vh98");function w(e,t){if(1&e&&(o.Ub(0,"span",7),o.Pb(1,"i",8),o.Tb()),2&e){const e=t.$implicit;o.wc("background-color",e.color),o.Cb(1),o.ic("ngClass",e.icon)}}function z(e,t){if(1&e&&(o.Ub(0,"h4"),o.Bc(1),o.Tb(),o.Ub(2,"p"),o.Bc(3),o.Tb(),o.Pb(4,"app-image-loader",9),o.Ub(5,"p"),o.Bc(6),o.Tb()),2&e){const e=t.$implicit,n=o.fc().$implicit;o.Cb(1),o.Dc(" ",n(e.status)," "),o.Cb(2),o.Dc(" ",e.dates," "),o.Cb(1),o.ic("src","assets/images/logos/"+e.image),o.Cb(2),o.Dc(" ",n(e.description)," ")}}function k(e,t){if(1&e&&(o.Sb(0),o.Ub(1,"div",1),o.Ub(2,"div",2),o.Ub(3,"h2"),o.Bc(4),o.Tb(),o.Tb(),o.Tb(),o.Ub(5,"div",1),o.Ub(6,"div",2),o.Ub(7,"div",3),o.Ub(8,"p-timeline",4),o.zc(9,w,2,3,"ng-template",5),o.zc(10,z,7,4,"ng-template",6),o.Tb(),o.Tb(),o.Tb(),o.Tb(),o.Rb()),2&e){const e=o.fc().$implicit,t=o.fc();o.Cb(4),o.Dc("",e("education")," "),o.Cb(4),o.ic("value",t.events)}}function O(e,t){1&e&&(o.Sb(0),o.zc(1,k,11,2,"ng-container",0),o.Rb()),2&e&&(o.Cb(1),o.ic("translocoRead","education.schools"))}const U=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){this.events=[{status:"montufar.name",dates:"2008 - 2014",icon:l.d.BOOK,color:"#ffffff",image:"mh.png",description:"montufar.description"},{status:"poli.name",dates:"2014 - 2021",icon:l.d.PAPERCLIP,color:"#ffffff",image:"epn.png",description:"poli.description"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Ib({type:e,selectors:[["app-education-route"]],decls:1,vars:1,consts:[[4,"transloco","translocoRead"],[1,"p-grid"],[1,"p-col"],[1,"card"],["align","alternate","styleClass","customized-timeline",3,"value"],["pTemplate","marker"],["pTemplate","content"],[1,"custom-marker","p-shadow-2"],[3,"ngClass"],["styles","width: 175px",3,"src"]],template:function(e,t){1&e&&o.zc(0,O,2,1,"ng-container",0),2&e&&o.ic("translocoRead","sections")},directives:[x.d,d,l.f,i.h,y.a],styles:['.education-img[_ngcontent-%COMP%]{width:150px}h4[_ngcontent-%COMP%]{border:none}h4[_ngcontent-%COMP%]:before{content:""}']}),e})()},{redirectTo:"",pathMatch:"full"}];let P=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({imports:[[C.g.forChild(U)],C.g]}),e})();var I=n("PCNd");let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({providers:[{provide:x.c,useValue:"education"}],imports:[[i.b,P,g,I.a,v,T,x.e,I.a]]}),e})()}}]);