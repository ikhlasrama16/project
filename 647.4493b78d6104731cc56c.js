(self.webpackChunkmy_new_app=self.webpackChunkmy_new_app||[]).push([[647],{4647:(a,t,n)=>{"use strict";n.r(t),n.d(t,{AdminModule:()=>f});var e=n(1116),i=n(5366),o=n(7112),r=n(4369),d=n(4670),s=n(3337),m=n(168),u=n(667),Z=n(7064);let l=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=i.Xpm({type:a,selectors:[["app-admin"]],decls:35,vars:8,consts:[["color","primary",1,"example-header"],["mat-icon-button","",3,"click"],[1,"uk-width-expand"],["matlisticon",""],["mat-button","","routerLink","/login"],[1,"example-container"],["mode","side","opened","",1,"sidenav-left",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],["sidenav",""],["routerLink","/admin/dashboard"],["matListIcon",""],["matLine",""],["routerLink","/admin/data-barang"],["routerLink","/admin/tambah-data"],["mode","side",1,"example-sidenav",3,"position","fixedInViewport","fixedTopGap","fixedBottomGap"],[2,"padding","20px","background-color","#2c3e50"]],template:function(a,t){if(1&a){const a=i.EpF();i.ynx(0),i.TgZ(1,"mat-toolbar",0),i.TgZ(2,"button",1),i.NdJ("click",function(){return i.CHM(a),i.MAs(14).toggle()}),i.TgZ(3,"mat-icon"),i._uU(4,"menu"),i.qZA(),i.qZA(),i.TgZ(5,"span"),i._uU(6,"Sistem Informasi Inventaris Desa"),i.qZA(),i._UZ(7,"div",2),i.TgZ(8,"mat-icon",3),i._uU(9,"admin_panel_settings"),i.qZA(),i.TgZ(10,"button",4),i._uU(11,"Logout"),i.qZA(),i.qZA(),i.TgZ(12,"mat-sidenav-container",5),i.TgZ(13,"mat-sidenav",6,7),i.TgZ(15,"mat-nav-list"),i.TgZ(16,"mat-list-item",8),i.TgZ(17,"mat-icon",9),i._uU(18,"space_dashboard"),i.qZA(),i.TgZ(19,"h3",10),i._uU(20,"Dashboard"),i.qZA(),i.qZA(),i.TgZ(21,"mat-list-item",11),i.TgZ(22,"mat-icon",9),i._uU(23,"list"),i.qZA(),i.TgZ(24,"h3",10),i._uU(25,"List Data"),i.qZA(),i.qZA(),i.TgZ(26,"mat-list-item",12),i.TgZ(27,"mat-icon",9),i._uU(28,"add"),i.qZA(),i.TgZ(29,"h3",10),i._uU(30,"Tambah Data"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i._UZ(31,"mat-sidenav",13,7),i.TgZ(33,"mat-sidenav-content",14),i._UZ(34,"router-outlet"),i.qZA(),i.qZA(),i.BQk()}2&a&&(i.xp6(13),i.Q6J("position","start")("fixedInViewport",!0)("fixedTopGap",65)("fixedBottomGap",0),i.xp6(18),i.Q6J("position","end")("fixedInViewport",!0)("fixedTopGap",60)("fixedBottomGap",0))},directives:[o.Ye,r.lW,d.Hw,s.rH,m.TM,m.JX,u.Hk,u.Tg,u.Nh,Z.X2,m.Rh,s.lC],styles:[""]}),a})(),c=(()=>{class a{constructor(){}ngOnInit(){}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=i.Xpm({type:a,selectors:[["app-dashboard"]],decls:2,vars:0,template:function(a,t){1&a&&(i.TgZ(0,"mat-toolbar"),i._uU(1,"Dashboard"),i.qZA())},directives:[o.Ye],styles:[""]}),a})();var p=n(6728),g=n(1041);let b=(()=>{class a{constructor(){this.tambahdatas=[{id:"1",nama:"Supra X",beli:"Ya",asal:"Pemerintahan",kondisi:"baik"},{id:"2",nama:"Avanza",beli:"Ya",asal:"Pemerintahan",kondisi:"baik"}]}onGet(){return this.tambahdatas}onAdd(a){this.tambahdatas.push(a)}onGetTambahData(a){return this.tambahdatas.find(t=>t.id===a)}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275prov=i.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();var h=n(2797);const A=function(a){return["/admin/tambahdata",a]};function T(a,t){if(1&a&&(i.TgZ(0,"tr"),i.TgZ(1,"td"),i._uU(2),i.qZA(),i.TgZ(3,"td"),i._uU(4),i.qZA(),i.TgZ(5,"td"),i._uU(6),i.qZA(),i.TgZ(7,"td"),i._uU(8),i.qZA(),i.TgZ(9,"td"),i._uU(10),i.qZA(),i.TgZ(11,"td",1),i.TgZ(12,"button",3),i._uU(13,"Edit"),i.qZA(),i.TgZ(14,"button",4),i._uU(15,"delete"),i.qZA(),i.qZA(),i.qZA()),2&a){const a=t.$implicit;i.xp6(2),i.Oqu(a.id),i.xp6(2),i.Oqu(a.nama),i.xp6(2),i.Oqu(a.beli),i.xp6(2),i.Oqu(a.asal),i.xp6(2),i.Oqu(a.kondisi),i.xp6(2),i.Q6J("routerLink",i.VKq(6,A,a.id))}}const q=[{path:"",component:l,children:[{path:"dashboard",component:c},{path:"data-barang",component:(()=>{class a{constructor(a){this.tambahdataService=a,this.tambahdatas=[]}ngOnInit(){this.tambahdatas=this.tambahdataService.onGet()}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(b))},a.\u0275cmp=i.Xpm({type:a,selectors:[["app-data-barang"]],decls:19,vars:1,consts:[[1,"uk-table","uk-table-middle","uk-table-divider"],["align","right"],[4,"ngFor","ngForOf"],["mat-button","","color","primary",3,"routerLink"],["mat-button","","color","warn"]],template:function(a,t){1&a&&(i.TgZ(0,"mat-card"),i.TgZ(1,"mat-card-content"),i.TgZ(2,"div"),i.TgZ(3,"table",0),i.TgZ(4,"thead"),i.TgZ(5,"th"),i._uU(6,"id"),i.qZA(),i.TgZ(7,"th"),i._uU(8,"Jenis Barang"),i.qZA(),i.TgZ(9,"th"),i._uU(10,"Dibeli Sendiri"),i.qZA(),i.TgZ(11,"th"),i._uU(12,"Asal Barang"),i.qZA(),i.TgZ(13,"th"),i._uU(14,"Konisi Barang"),i.qZA(),i.TgZ(15,"th",1),i._uU(16,"#"),i.qZA(),i.qZA(),i.TgZ(17,"tbody"),i.YNc(18,T,16,8,"tr",2),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&a&&(i.xp6(18),i.Q6J("ngForOf",t.tambahdatas))},directives:[h.a8,h.dn,e.sg,r.lW,s.rH],styles:[""]}),a})()},{path:"tambah-data",component:(()=>{class a{constructor(a,t,n){this.router=a,this.route=t,this.tambahdataService=n,this.tambahdata={id:0,nama:"",beli:"",asal:"",kondisi:""}}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.header=0==this.id?"add tambahdata":"edit tambahdata"}onSubmit(a){this.tambahdataService.onAdd({id:a.value.id,nama:a.value.nama,beli:a.value.beli,asal:a.value.asal,kondisi:a.value.kondisi}),this.router.navigateByUrl("/admin/data-barang")}}return a.\u0275fac=function(t){return new(t||a)(i.Y36(s.F0),i.Y36(s.gz),i.Y36(b))},a.\u0275cmp=i.Xpm({type:a,selectors:[["app-tambah-data"]],decls:28,vars:5,consts:[[1,"container"],[3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["type","text","name","id",1,"form-control",3,"ngModel"],["type","text","name","nama",1,"form-control",3,"ngModel"],["type","text","name","beli",1,"form-control",3,"ngModel"],["type","text","name","asal",1,"form-control",3,"ngModel"],["type","text","name","kondisi",1,"form-control",3,"ngModel"],["type","submit",1,"btn","btn-primary"]],template:function(a,t){if(1&a){const a=i.EpF();i.TgZ(0,"mat-card"),i.TgZ(1,"div",0),i.TgZ(2,"h2"),i._uU(3,"Tambah Data"),i.qZA(),i.TgZ(4,"form",1,2),i.NdJ("ngSubmit",function(){i.CHM(a);const n=i.MAs(5);return t.onSubmit(n)}),i.TgZ(6,"div",3),i.TgZ(7,"label"),i._uU(8,"Id"),i.qZA(),i._UZ(9,"input",4),i.qZA(),i.TgZ(10,"div",3),i.TgZ(11,"label"),i._uU(12,"Nama barang"),i.qZA(),i._UZ(13,"input",5),i.qZA(),i.TgZ(14,"div",3),i.TgZ(15,"label"),i._uU(16,"Dibeli sendiri"),i.qZA(),i._UZ(17,"input",6),i.qZA(),i.TgZ(18,"div",3),i.TgZ(19,"label"),i._uU(20,"Asal barang"),i.qZA(),i._UZ(21,"input",7),i.qZA(),i.TgZ(22,"div",3),i.TgZ(23,"label"),i._uU(24,"Kondisi barang"),i.qZA(),i._UZ(25,"input",8),i.qZA(),i.TgZ(26,"button",9),i._uU(27,"Save"),i.qZA(),i.qZA(),i.qZA(),i.qZA()}2&a&&(i.xp6(9),i.Q6J("ngModel",t.tambahdata.id),i.xp6(4),i.Q6J("ngModel",t.tambahdata.nama),i.xp6(4),i.Q6J("ngModel",t.tambahdata.beli),i.xp6(4),i.Q6J("ngModel",t.tambahdata.asal),i.xp6(4),i.Q6J("ngModel",t.tambahdata.kondisi))},directives:[h.a8,g._Y,g.JL,g.F,g.Fj,g.JJ,g.On],styles:[""]}),a})()}]}];let f=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=i.oAB({type:a}),a.\u0275inj=i.cJS({imports:[[e.ez,s.Bz.forChild(q),p.M,g.u5]]}),a})()}}]);