import{r as a,a as u,o as r,c as i,b as e,n as o,d as c,w as b,e as v}from"./index.0e894227.js";const x={class:"h-screen pt-7"},g={class:"mx-auto mb-11 flex w-8/12 rounded-xl bg-white text-center text-primary"},f={key:0},_={class:"mb-11 space-x-6 text-center"},m=e("div",{class:"mx-auto mb-11 h-52 w-11/12 rounded-xl bg-white"},[e("canvas",{class:"h-full w-full"})],-1),p={key:1},w=e("input",{id:"file",type:"file",class:"hidden"},null,-1),C=e("label",{for:"file",class:"mx-auto mb-11 block w-11/12 rounded-xl bg-white"},[e("p",{class:"text-center leading-[200px] text-gray-400"},"\u8ACB\u9078\u64C7\u6A94\u6848")],-1),h=[w,C],k={class:"text-center"},y=e("button",{class:"btn-border mx-2"},"\u6E05\u9664",-1),N={__name:"Sign",setup($){const s=a(!0),n=a("#000000");return(A,t)=>{const d=u("router-link");return r(),i("div",x,[e("div",g,[e("div",{onClick:t[0]||(t[0]=l=>s.value=!0),class:o([{"bg-gradient-to-b from-green-600 to-green-900 text-white":s.value},"w-1/2 rounded-xl px-4 py-2 transition"])}," \u624B\u5BEB\u7C3D\u540D ",2),e("div",{onClick:t[1]||(t[1]=l=>s.value=!1),class:o([{"bg-gradient-to-b from-green-600 to-green-900 text-white":!s.value},"w-1/2 rounded-xl px-4 py-2 transition"])}," \u532F\u5165\u7C3D\u540D\u6A94 ",2)]),s.value?(r(),i("div",f,[e("div",_,[e("button",{onClick:t[2]||(t[2]=l=>n.value="#000000"),class:o([{"ring ring-black ring-offset-4":n.value==="#000000"},"h-11 w-11 rounded-full bg-black"])},null,2),e("button",{onClick:t[3]||(t[3]=l=>n.value="#0014C7"),class:o([{"ring ring-[#0014C7] ring-offset-4":n.value==="#0014C7"},"h-11 w-11 rounded-full bg-[#0014C7]"])},null,2),e("button",{onClick:t[4]||(t[4]=l=>n.value="#CA0000"),class:o([{"ring ring-[#CA0000] ring-offset-4":n.value==="#CA0000"},"h-11 w-11 rounded-full bg-[#CA0000]"])},null,2)]),m])):(r(),i("div",p,h)),e("div",k,[y,c(d,{to:"/contract",class:"btn-full mx-2"},{default:b(()=>[v("\u5EFA\u7ACB\u7C3D\u540D")]),_:1})])])}}};export{N as default};
