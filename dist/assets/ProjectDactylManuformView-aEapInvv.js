import{d as r,_ as i,o as a,c as l,a as e,t as f,g as o,r as h,e as b,w as n,b as s}from"./index-DYLc6BUT.js";const y=r({name:"ProjectInfoComponent",props:{projectTitle:String,githubLink:String}}),g={class:"project-info"},$={class:"summary"},w=["href"],v={class:"content-panel"};function k(t,c,d,u,p,m){return a(),l("div",g,[e("h1",null,f(t.projectTitle),1),e("div",$,[o(t.$slots,"summary",{},void 0,!0),e("a",{href:t.githubLink,target:"_blank",rel:"noopener noreferrer"},"GitHub Repository",8,w)]),e("div",v,[o(t.$slots,"detailed-description",{},void 0,!0)])])}const j=i(y,[["render",k],["__scopeId","data-v-bce825ff"]]),D=r({name:"ParentComponent",components:{ProjectInfo:j}}),I=e("p",null,[s(" Here I document my findings while building a "),e("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/search?sca_esv=6416c49529b0d5b1&sxsrf=ACQVn08YaMqSmNyxyHYJ6-tJ7vE59Xx7yw:1709590683343&q=dactyl+manuform&tbm=isch&source=lnms&sa=X&sqi=2&ved=2ahUKEwix45DL0duEAxUyN2IAHRN8D9wQ0pQJegQIDRAB&biw=1920&bih=939&dpr=1"}," Dactyl ManuForm "),s(" keyboard. All QMK code is available in the repository. ")],-1),x=e("section",null,[e("h2",null,"Major featurs:"),e("ul",null,[e("li",null,"Custom firmware using QMK"),e("li",null,"RGB keys"),e("li",null,"3D printed case with laser cut base"),e("li",null,"LED display for keyboard information")])],-1),C=e("section",null,[e("h2",null,"Parts list:"),e("ul")],-1),M=e("p",null,"This is the detailed description.",-1);function P(t,c,d,u,p,m){const _=h("ProjectInfo");return a(),l("div",null,[b(_,{projectTitle:"Dactyl Manuform",githubLink:"https://github.com/98774/qmk_firmware.git"},{summary:n(()=>[I]),"detailed-description":n(()=>[x,C,M]),_:1})])}const Q=i(D,[["render",P]]);export{Q as default};