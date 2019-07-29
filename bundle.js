var app=function(n){"use strict";function a(){}function e(n){return n()}function t(){return Object.create(null)}function r(n){n.forEach(e)}function i(n){return"function"==typeof n}function o(n,a){return n!=n?a==a:n!==a||n&&"object"==typeof n||"function"==typeof n}function l(n,a){n.appendChild(a)}function c(n,a,e){n.insertBefore(a,e||null)}function u(n){n.parentNode.removeChild(n)}function s(n,a){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(a)}function d(n){return document.createElement(n)}function f(n){return document.createTextNode(n)}function m(){return f(" ")}function g(){return f("")}function p(n,a,e){null==e?n.removeAttribute(a):n.setAttribute(a,e)}let h;function S(n){h=n}const M=[],A=[],v=[],C=[],b=Promise.resolve();let $=!1;function T(n){v.push(n)}function G(){const n=new Set;do{for(;M.length;){const n=M.shift();S(n),I(n.$$)}for(;A.length;)A.pop()();for(let a=0;a<v.length;a+=1){const e=v[a];n.has(e)||(e(),n.add(e))}v.length=0}while(M.length);for(;C.length;)C.pop()();$=!1}function I(n){n.fragment&&(n.update(n.dirty),r(n.before_update),n.fragment.p(n.dirty,n.ctx),n.dirty=null,n.after_update.forEach(T))}const y=new Set;let B;function N(){B={r:0,c:[],p:B}}function L(){B.r||r(B.c),B=B.p}function E(n,a){n&&n.i&&(y.delete(n),n.i(a))}function P(n,a,e,t){if(n&&n.o){if(y.has(n))return;y.add(n),B.c.push(()=>{y.delete(n),t&&(e&&n.d(1),t())}),n.o(a)}}function R(n,a,t){const{fragment:o,on_mount:l,on_destroy:c,after_update:u}=n.$$;o.m(a,t),T(()=>{const a=l.map(e).filter(i);c?c.push(...a):r(a),n.$$.on_mount=[]}),u.forEach(T)}function w(n,a){n.$$.fragment&&(r(n.$$.on_destroy),n.$$.fragment.d(a),n.$$.on_destroy=n.$$.fragment=null,n.$$.ctx={})}function O(n,a){n.$$.dirty||(M.push(n),$||($=!0,b.then(G)),n.$$.dirty=t()),n.$$.dirty[a]=!0}function K(n,e,i,o,l,c){const u=h;S(n);const s=e.props||{},d=n.$$={fragment:null,ctx:null,props:c,update:a,not_equal:l,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:t(),dirty:null};let f=!1;d.ctx=i?i(n,s,(a,e)=>{d.ctx&&l(d.ctx[a],d.ctx[a]=e)&&(d.bound[a]&&d.bound[a](e),f&&O(n,a))}):s,d.update(),f=!0,r(d.before_update),d.fragment=o(d.ctx),e.target&&(e.hydrate?d.fragment.l(function(n){return Array.from(n.childNodes)}(e.target)):d.fragment.c(),e.intro&&E(n.$$.fragment),R(n,e.target,e.anchor),G()),S(u)}class F{$destroy(){w(this,1),this.$destroy=a}$on(n,a){const e=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return e.push(a),()=>{const n=e.indexOf(a);-1!==n&&e.splice(n,1)}}$set(){}}function U(n){var e;return{c(){p(e=d("i"),"class",n.normalizedFlag()+" flag svelte-1lrjpyi")},m(n,a){c(n,e,a)},p:a,i:a,o:a,d(n){n&&u(e)}}}function H(n,a,e){let{code:t="",name:r="",alias:i=""}=a;return n.$set=n=>{"code"in n&&e("code",t=n.code),"name"in n&&e("name",r=n.name),"alias"in n&&e("alias",i=n.alias)},{code:t,name:r,alias:i,normalizedFlag:function(){return t&&2===t.length?t:r?r.toLowerCase().replace(".",""):i?i.toLowerCase():"error"}}}class k extends F{constructor(n){super(),K(this,n,H,U,o,["code","name","alias"])}}function D(n,a,e){const t=Object.create(n);return t.code=a[e][0],t.country=a[e][1],t}function V(n){var a,e=new k({props:{code:n.code.toLowerCase()}});return{c(){e.$$.fragment.c()},m(n,t){R(e,n,t),a=!0},p(n,a){var t={};n.iso&&(t.code=a.code.toLowerCase()),e.$set(t)},i(n){a||(E(e.$$.fragment,n),a=!0)},o(n){P(e.$$.fragment,n),a=!1},d(n){w(e,n)}}}function x(n){for(var a,e,t=Object.entries(n.iso),r=[],i=0;i<t.length;i+=1)r[i]=V(D(n,t,i));const o=n=>P(r[n],1,1,()=>{r[n]=null});return{c(){for(var n=0;n<r.length;n+=1)r[n].c();a=g()},m(n,t){for(var i=0;i<r.length;i+=1)r[i].m(n,t);c(n,a,t),e=!0},p(n,e){if(n.iso){t=Object.entries(e.iso);for(var i=0;i<t.length;i+=1){const o=D(e,t,i);r[i]?(r[i].p(n,o),E(r[i],1)):(r[i]=V(o),r[i].c(),E(r[i],1),r[i].m(a.parentNode,a))}for(N(),i=t.length;i<r.length;i+=1)o(i);L()}},i(n){if(!e){for(var a=0;a<t.length;a+=1)E(r[a]);e=!0}},o(n){r=r.filter(Boolean);for(let n=0;n<r.length;n+=1)P(r[n]);e=!1},d(n){s(r,n),n&&u(a)}}}function j(n){return{iso:{AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AG:"Antigua And Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia And Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, Democratic Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"Cote D'Ivoire",HR:"Croatia",CU:"Cuba",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island & Mcdonald Islands",VA:"Holy See (Vatican City State)",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic Of",IQ:"Iraq",IE:"Ireland",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KR:"Korea",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libyan Arab Jamahiriya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States Of",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Reunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",SH:"Saint Helena",KN:"Saint Kitts And Nevis",LC:"Saint Lucia",PM:"Saint Pierre And Miquelon",VC:"Saint Vincent And Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome And Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia And Sandwich Isl.",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard And Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad And Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks And Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S.",WF:"Wallis And Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"}}}class Z extends F{constructor(n){super(),K(this,n,j,x,o,[])}}function _(n,a,e){const t=Object.create(n);return t.name=a[e][0],t.comp=a[e][1],t}function z(n,a,e){const t=Object.create(n);return t.group=a[e][0],t.val=a[e][1],t}function J(n){for(var a,e,t,r,i,o,f=Object.entries(n.menu),g=[],h=0;h<f.length;h+=1)g[h]=q(z(n,f,h));var S=n.component;if(S)var M=new S({});return{c(){a=d("div"),e=d("div"),t=d("div");for(var n=0;n<g.length;n+=1)g[n].c();r=m(),i=d("div"),M&&M.$$.fragment.c(),p(t,"class","ui vertical menu inverted large fluid"),p(e,"class","four wide column"),p(i,"class","twelve wide column"),p(a,"class","ui grid")},m(n,u){c(n,a,u),l(a,e),l(e,t);for(var s=0;s<g.length;s+=1)g[s].m(t,null);l(a,r),l(a,i),M&&R(M,i,null),o=!0},p(n,a){if(n.menu||n.toTitleCase){f=Object.entries(a.menu);for(var e=0;e<f.length;e+=1){const r=z(a,f,e);g[e]?g[e].p(n,r):(g[e]=q(r),g[e].c(),g[e].m(t,null))}for(;e<g.length;e+=1)g[e].d(1);g.length=f.length}if(S!==(S=a.component)){if(M){N();const n=M;P(n.$$.fragment,1,0,()=>{w(n,1)}),L()}S?((M=new S({})).$$.fragment.c(),E(M.$$.fragment,1),R(M,i,null)):M=null}},i(n){o||(M&&E(M.$$.fragment,n),o=!0)},o(n){M&&P(M.$$.fragment,n),o=!1},d(n){n&&u(a),s(g,n),M&&w(M)}}}function W(n){var e;return{c(){(e=d("div")).innerHTML='<div class="ui text red large elastic inverted loader">Under Construction</div>',p(e,"class","ui active dimmer")},m(n,a){c(n,e,a)},p:a,i:a,o:a,d(n){n&&u(e)}}}function Y(n){var a,e,t,r=X(n.name);function i(){return n.click_handler(n)}return{c(){var n,o,l,c;a=d("a"),e=f(r),p(a,"class","item"),o="click",l=i,(n=a).addEventListener(o,l,c),t=()=>n.removeEventListener(o,l,c)},m(n,t){c(n,a,t),l(a,e)},p(a,e){n=e},d(n){n&&u(a),t()}}}function q(n){for(var a,e,t,r,i,o,g=X(n.group),h=Object.entries(n.val),S=[],M=0;M<h.length;M+=1)S[M]=Y(_(n,h,M));return{c(){a=d("div"),e=d("div"),t=f(g),r=m(),i=d("div");for(var n=0;n<S.length;n+=1)S[n].c();o=m(),p(e,"class","header"),p(i,"class","menu"),p(a,"class","item")},m(n,u){c(n,a,u),l(a,e),l(e,t),l(a,r),l(a,i);for(var s=0;s<S.length;s+=1)S[s].m(i,null);l(a,o)},p(n,a){if(n.toTitleCase||n.menu){h=Object.entries(a.val);for(var e=0;e<h.length;e+=1){const t=_(a,h,e);S[e]?S[e].p(n,t):(S[e]=Y(t),S[e].c(),S[e].m(i,null))}for(;e<S.length;e+=1)S[e].d(1);S.length=h.length}},d(n){n&&u(a),s(S,n)}}}function Q(n){var a,e,t,r,i=[W,J],o=[];function l(n){return n.production?0:1}return a=l(n),e=o[a]=i[a](n),{c(){e.c(),t=g()},m(n,e){o[a].m(n,e),c(n,t,e),r=!0},p(n,r){var c=a;(a=l(r))===c?o[a].p(n,r):(N(),P(o[c],1,1,()=>{o[c]=null}),L(),(e=o[a])||(e=o[a]=i[a](r)).c(),E(e,1),e.m(t.parentNode,t))},i(n){r||(E(e),r=!0)},o(n){P(e),r=!1},d(n){o[a].d(n),n&&u(t)}}}function X(n){return n.replace(/\w\S*/g,function(n){return n.charAt(0).toUpperCase()+n.substr(1).toLowerCase()})}function nn(n,a,e){let{production:t=!1}=a,r=Z,i={elements:{flag:Z}};return n.$set=n=>{"production"in n&&e("production",t=n.production)},{production:t,component:r,menu:i,click_handler:function({comp:n}){const a=r=n;return e("component",r),a}}}const an=new class extends F{constructor(n){super(),K(this,n,nn,Q,o,["production"])}}({target:document.body,props:{production:!0}});return n.VERSION="0.0.1-alpha.4",n.default=an,n}({});
//# sourceMappingURL=bundle.js.map
