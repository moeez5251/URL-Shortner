(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1840:(e,t,l)=>{Promise.resolve().then(l.bind(l,6046))},6046:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>c});var s=l(5155),r=l(8173),a=l.n(r),n=l(2115);let o=()=>(0,s.jsxs)("div",{className:"flex items-center justify-between py-6 px-5 sm:px-14",children:[(0,s.jsxs)("div",{className:"text-3xl font-semibold bg-gradient-to-r from-[#fe006d] to-[#023eff] bg-clip-text text-transparent",children:["Linkio ",(0,s.jsx)("span",{className:"absolute z-10 text-[17px] top-4 text-blue-600 dark:text-gray-400 ",children:"\xae"})]}),(0,s.jsx)(a(),{target:"_blank",href:"https://moeez5251.netlify.app/#contact",className:"bg-[#0700ff] px-4 py-2 rounded-full font-semibold hover:shadow-[#0700ff] shadow-black transition-all shadow-md",children:"Contact Me"})]});var d=l(2484),i=l(2110);function c(){let e=new d.Kj;e.setProject("67711efb00047d73dddf");let t=new d.Lv(e),[l,r]=(0,n.useState)("0%"),[c,u]=(0,n.useState)("#4b5563"),[x,m]=(0,n.useState)("white"),[h,f]=(0,n.useState)({value:"",stat:!1}),[b,p]=(0,n.useState)(!1),[k,w]=(0,n.useState)({link:"",keyword:""}),y=async()=>{if(document.querySelector(".btn").disabled=!0,""===k.link||""===k.keyword){document.querySelector(".btn").disabled=!1;return}try{new URL(k.link)}catch(e){document.querySelector(".btn").disabled=!1,i.oR.error("Enter a valid URL",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!1,pauseOnHover:!1,draggable:!0,progress:void 0,theme:"dark",transition:i.br});return}for(let e of(await t.listDocuments("67711f37002bc5d73098","67711f42000e0f4d2733")).documents)if(e.keyword===k.keyword){document.querySelector(".btn").disabled=!1,p(!0),setTimeout(()=>{p(!1)},4e3);return}t.createDocument("67711f37002bc5d73098","67711f42000e0f4d2733",d.ID.unique(),{URL:k.link,keyword:k.keyword}).then(()=>{f({value:k.keyword,stat:!0}),w({link:"",keyword:""}),document.querySelector(".btn").disabled=!1})},g=e=>{w({...k,[e.target.name]:e.target.value})};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.N9,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!1,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",transition:i.br}),(0,s.jsx)("div",{className:"absolute -z-10  w-full h-full bg-[#e0dcff] dark:bg-[#05081f]"}),(0,s.jsx)(o,{}),(0,s.jsx)("div",{className:"sm:text-4xl text-2xl w-fit mx-auto pt-8 font-semibold bg-gradient-to-r from-[#fe006d] to-[#023eff] bg-clip-text text-transparent",children:"Shorten Your Loooong Links :) "}),(0,s.jsx)("p",{className:"sm:w-1/3 w-[80%] mt-4 text-md mx-auto text-center text-blue-800 font-bold dark:text-white dark:font-normal",children:"Linkio is an efficient and easy-to-use URL shortening service that streamlines your online experiences"}),(0,s.jsxs)("div",{className:"flex items-center sm:flex-row flex-col  justify-center gap-9  mt-4",children:[(0,s.jsx)("div",{className:"border-2 border-gray-600 w-[70%] sm:w-[30%] h-11 pl-5 rounded-full flex items-center justify-between mt-2 text-black dark:text-white ",children:(0,s.jsx)("input",{onChange:g,value:k.link,name:"link",type:"text",placeholder:"Enter Link Here",className:"bg-transparent outline-0 text-base w-full placeholder:text-black placeholder:dark:text-gray-500"})}),(0,s.jsx)("div",{className:"border-2 border-gray-600 w-[70%] sm:w-[30%] h-11 pl-5 rounded-full  flex items-center justify-between mt-2 text-black dark:text-white",children:(0,s.jsx)("input",{onChange:g,value:k.keyword,name:"keyword",type:"text",placeholder:"Enter keyword Here",className:"bg-transparent outline-0 text-base w-full placeholder:text-black placeholder:dark:text-gray-500 placeholder:font-thin"})})]}),(0,s.jsx)("div",{className:"w-full text-center",children:(0,s.jsx)("button",{onClick:y,className:"btn bg-[#0700ff] py-2 rounded-full px-4 font-semibold text-md my-10  cursor-pointer hover:shadow-[#0700ff] shadow-black transition-all shadow-md disabled:bg-[#0d0b57]",children:"Shorten Now!"})}),(0,s.jsxs)("div",{className:"flex  justify-between border-2 border-gray-600 w-52 top-1/2 rounded-full absolute  rotate-90 -right-20 sm:-right-16",children:[(0,s.jsx)("span",{style:{left:l},className:"bg-[#023eff] absolute w-1/2 h-full transition-all duration-200 -z-20 rounded-full blue-span"}),(0,s.jsxs)("div",{onClick:()=>{document.querySelector("html").classList.contains("dark")&&document.querySelector("html").classList.remove("dark"),r("0%"),m("white"),u("#4b5563")},className:"light cursor-pointer w-1/2 flex items-center gap-3 px-2 py-2",children:[(0,s.jsx)("span",{style:{color:x},className:"text-white font-semibold",children:"Light"}),(0,s.jsx)("span",{style:{color:x},className:"material-symbols-outlined text-white",children:"light_mode"})]}),(0,s.jsxs)("div",{onClick:()=>{document.querySelector("html").classList.add("dark"),r("50%"),m("#4b5563"),u("white")},className:"dark cursor-pointer w-1/2 flex items-center justify-end gap-3 px-2 py-2",children:[(0,s.jsx)("span",{style:{color:c},className:"text-gray-600 font-semibold",children:"Dark"}),(0,s.jsx)("span",{style:{color:c},className:"material-symbols-outlined",children:"dark_mode"})]})]}),b&&(0,s.jsx)("div",{className:"text-center mt-4 text-red-600",children:"Choose different keyword"}),h.stat&&(0,s.jsx)("div",{className:"w-full text-center",children:(0,s.jsxs)("h2",{className:"font-bold text-red-600 dark:text-green-400 text-lg",children:["Your Shorten Link is ",(0,s.jsx)(a(),{className:"font-normal underline text-amber-700 dark:text-yellow-400",href:"http://localhost:3000/"+h.value,children:"http://localhost:3000/"+h.value})]})})||(0,s.jsx)("span",{className:"font-bold text-xl mt-7 text-center w-full block text-red-500 dark:text-gray-500",children:"Your link Appear here"})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[138,378,441,517,358],()=>t(1840)),_N_E=e.O()}]);