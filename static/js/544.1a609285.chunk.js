"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[544],{544:(e,s,t)=>{t.r(s),t.d(s,{default:()=>c});var r=t(43),a=t(213),l=t(579);const c=()=>{const[e,s]=(0,r.useState)([]),[t,c]=(0,r.useState)("");return(0,r.useEffect)((()=>{(async()=>{try{const e=await a.A.get("https://edu-backend-2.onrender.com/api/contact/all",{withCredentials:!0});s(e.data.contacts)}catch(e){console.error("\u274c Error fetching contacts:",e),c("Failed to fetch contact queries.")}})()}),[]),(0,l.jsxs)("div",{className:"p-5",children:[(0,l.jsx)("h2",{className:"text-2xl font-bold mb-4 text-blue-700",children:"\ud83d\udce9 Contact Queries"}),t?(0,l.jsx)("p",{className:"text-red-500 text-center",children:t}):e.length>0?(0,l.jsx)("div",{className:"overflow-x-auto bg-white shadow-lg rounded-lg",children:(0,l.jsxs)("table",{className:"w-full border-collapse border border-gray-300",children:[(0,l.jsx)("thead",{className:"bg-gray-200",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"border p-3 text-left",children:"Name"}),(0,l.jsx)("th",{className:"border p-3 text-left",children:"Email"}),(0,l.jsx)("th",{className:"border p-3 text-left hidden md:table-cell",children:"Address"}),(0,l.jsx)("th",{className:"border p-3 text-left",children:"Message"})]})}),(0,l.jsx)("tbody",{children:e.map((e=>(0,l.jsxs)("tr",{className:"border hover:bg-gray-100 transition",children:[(0,l.jsx)("td",{className:"p-3 border",children:e.name}),(0,l.jsx)("td",{className:"p-3 border",children:e.email}),(0,l.jsx)("td",{className:"p-3 border hidden md:table-cell",children:e.address}),(0,l.jsx)("td",{className:"p-3 border",children:e.message})]},e._id)))})]})}):(0,l.jsx)("p",{className:"text-gray-500 text-center",children:"No queries submitted yet."})]})}}}]);
//# sourceMappingURL=544.1a609285.chunk.js.map