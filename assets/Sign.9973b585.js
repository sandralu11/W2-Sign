import{r as i,o as w,u as _,a as k,b as v,c as g,d as t,n as u}from"./index.2fee1786.js";const y={class:"h-screen pt-7"},P={class:"mx-auto mb-11 flex w-8/12 rounded-xl bg-white text-center text-primary"},S={key:0},M={class:"mb-11 space-x-6 text-center"},T={class:"mx-auto mb-11 h-52 w-11/12 rounded-xl bg-white"},$={key:1},A=t("input",{id:"file",type:"file",class:"hidden"},null,-1),B=t("label",{for:"file",class:"mx-auto mb-11 block w-11/12 rounded-xl bg-white"},[t("p",{class:"text-center leading-[200px] text-gray-400"},"\u8ACB\u9078\u64C7\u6A94\u6848")],-1),R=[A,B],I={__name:"Sign",setup(z){const a=i(!0),s=i("#000000"),l=i(null),o=i(null),d=i(!1),x=n=>{const e=l.value.getBoundingClientRect();return n.type==="mousemove"?{x:n.clientX-e.left,y:n.clientY-e.top}:{x:n.touches[0].clientX-e.left,y:n.touches[0].clientY-e.top}},f=n=>{n.preventDefault(),d.value=!0},r=()=>{d.value=!1,o.value.beginPath()},b=n=>{if(!d.value)return;const e=x(n);o.value.lineTo(e.x,e.y),o.value.stroke()};w(()=>{o.value=l.value.getContext("2d"),o.value.lineWidth=4,o.value.lineCap="round"});const p=()=>{o.value.clearRect(0,0,l.value.width,l.value.height)},h=_(),m=k(),C=()=>{const n=l.value.toDataURL("image/png");h.saveSignImg(n),m.push("/contract")};return(n,e)=>(v(),g("div",y,[t("div",P,[t("div",{onClick:e[0]||(e[0]=c=>a.value=!0),class:u([{"bg-gradient-to-b from-green-600 to-green-900 text-white":a.value},"w-1/2 rounded-xl px-4 py-2 transition"])}," \u624B\u5BEB\u7C3D\u540D ",2),t("div",{onClick:e[1]||(e[1]=c=>a.value=!1),class:u([{"bg-gradient-to-b from-green-600 to-green-900 text-white":!a.value},"w-1/2 rounded-xl px-4 py-2 transition"])}," \u532F\u5165\u7C3D\u540D\u6A94 ",2)]),a.value?(v(),g("div",S,[t("div",M,[t("button",{onClick:e[2]||(e[2]=c=>s.value="#000000"),class:u([{"ring ring-black ring-offset-4":s.value==="#000000"},"h-11 w-11 rounded-full bg-black"])},null,2),t("button",{onClick:e[3]||(e[3]=c=>s.value="#0014C7"),class:u([{"ring ring-[#0014C7] ring-offset-4":s.value==="#0014C7"},"h-11 w-11 rounded-full bg-[#0014C7]"])},null,2),t("button",{onClick:e[4]||(e[4]=c=>s.value="#CA0000"),class:u([{"ring ring-[#CA0000] ring-offset-4":s.value==="#CA0000"},"h-11 w-11 rounded-full bg-[#CA0000]"])},null,2)]),t("div",T,[t("canvas",{ref_key:"canvas",ref:l,onMousedown:f,onMouseup:r,onMouseleave:r,onMousemove:b,onTouchstart:f,onTouchend:r,onTouchcancel:r,onTouchmove:b,class:"h-full w-full"},null,544)])])):(v(),g("div",$,R)),t("div",{class:"text-center"},[t("button",{class:"btn-border mx-2",onClick:p},"\u6E05\u9664"),t("button",{class:"btn-full save mx-2",onClick:C},"\u5EFA\u7ACB\u7C3D\u540D")])]))}};export{I as default};
