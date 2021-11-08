(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{66:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),s=n(17),o=n.n(s),r=n(32),i=n.n(r),l=n(34),m=n(47),d=n(78),p=n(80),j=n(79),u=n.p+"static/media/bg.9c811a51.jpg",h=n(39),b=n.n(h),g=n(40),x=n.n(g),O=n(41),f=n.n(O),N=n(42),w=n.n(N),v=n(43),y=n.n(v),k=n(44),C=n.n(k),S=n(46),T=n.n(S),L=n(45),R=n.n(L),_=n(2),F=Object(d.a)({component:{height:"500px",display:"flex",alignItems:"center",width:"94%",marginLeft:"auto",marginRight:"auto",marginTop:30,backgroundColor:"fd9663"},leftContainer:{backgroundImage:"url(".concat(u,")"),height:"100%",width:"40%",backgroundSize:"cover",borderRadius:"20px 0 0 20px"},rightContainer:{height:"100%",width:"60%",background:"linear-gradient(to right,#e74c3c,#e67e22)",borderRadius:"0 20px 20px 0"},Component:{margin:"30px 60px"},container:{display:"flex"},row:{padding:10,fontSize:20,letterSpacing:2,marginLeft:70},value:{color:"#fff"},icon:{color:"darkred",marginRight:15},error:{background:"red",color:"#fff",margin:50,padding:20},information:{marginTop:20,fontWeight:"bold"},button:{marginLeft:170}});var E=function(e){var a=e.props,n=F();return console.log("Hello world"),console.log(a),Object(_.jsx)(_.Fragment,{children:Object(_.jsxs)(p.a,{className:n.component,children:[Object(_.jsx)(p.a,{className:n.leftContainer}),Object(_.jsx)(p.a,{className:n.rightContainer,children:Object(_.jsxs)("div",{className:n.information,children:[Object(_.jsxs)(j.a,{className:n.row,children:[Object(_.jsx)(b.a,{className:n.icon}),"Location:  ",Object(_.jsxs)(p.a,{className:n.value,component:"span",children:[a.name," ",a.country," "]})]}),Object(_.jsxs)(j.a,{className:n.row,children:[Object(_.jsx)(x.a,{className:n.icon}),"Temperature:  ",Object(_.jsxs)(p.a,{className:n.value,component:"span",children:[(a.temp-273).toFixed(2),"\xb0C "]})]}),Object(_.jsxs)(j.a,{className:n.row,children:[Object(_.jsx)(f.a,{className:n.icon}),"Humidity:  ",Object(_.jsxs)(p.a,{className:n.value,component:"span",children:[a.humidity,"% "]})]}),Object(_.jsxs)(j.a,{className:n.row,children:[Object(_.jsx)(w.a,{className:n.icon}),"Sun Rise:  ",Object(_.jsxs)(p.a,{className:n.value,component:"span",children:[new Date(1e3*a.sunrise).toLocaleTimeString()," "]})]}),Object(_.jsxs)(j.a,{className:n.row,children:[Object(_.jsx)(y.a,{className:n.icon}),"Sun Set: ",Object(_.jsxs)(p.a,{className:n.value,component:"span",children:[new Date(1e3*a.sunset).toLocaleTimeString()," "]})]}),Object(_.jsxs)(j.a,{className:n.row,children:[Object(_.jsx)(C.a,{className:n.icon}),"Condition:  ",Object(_.jsxs)(p.a,{className:n.value,component:"span",children:[a.condition," "]})]}),Object(_.jsxs)(j.a,{className:n.row,children:[Object(_.jsx)(R.a,{className:n.icon}),"Max Temperature:  ",Object(_.jsxs)(p.a,{className:n.value,component:"span",children:[(a.temp_max-273).toFixed(2),"\xb0C "]})]}),Object(_.jsxs)(j.a,{className:n.row,children:[Object(_.jsx)(T.a,{className:n.icon}),"Min Temperature:  ",Object(_.jsxs)(p.a,{className:n.value,component:"span",children:[(a.temp_min-273).toFixed(2),"\xb0C "]})]})]})})]})})},I=n(81),M=Object(d.a)({button:{marginLeft:350,background:"linear-gradient(to right,#e74c3c,#e67e22)",marginTop:10,color:"white"}});var z=function(){var e=Object(t.useState)({}),a=Object(m.a)(e,2),n=a[0],c=a[1];function s(){navigator.geolocation.getCurrentPosition(function(){var e=Object(l.a)(i.a.mark((function e(a){var n,t,s,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(),console.log(),n=a.coords.latitude,t=a.coords.longitude,e.prev=4,s="7ed5494a7d851bd1c86357d5f172f5b6",console.log("https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(t,"&appid=").concat(s)),e.next=9,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(n,"&lon=").concat(t,"&appid=").concat(s),{method:"GET"}).then((function(e){return e.json()}));case 9:o=e.sent,console.log(o.weather[0].description),console.log("Returning"),c({condition:o.weather[0].description,name:o.name,humidity:o.main.humidity,temp:o.main.temp,temp_max:o.main.temp_max,temp_min:o.main.temp_min,sunrise:o.sys.sunrise,sunset:o.sys.sunset,country:o.sys.country}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(a){return e.apply(this,arguments)}}(),(function(e){console.log(e)}))}Object(t.useEffect)((function(){s()}),[]);var o=M();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(E,{props:n}),Object(_.jsx)(I.a,{className:o.button,onClick:function(){s()},children:"Refresh"})]})};o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(z,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.4053b556.chunk.js.map