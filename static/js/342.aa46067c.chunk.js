"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[342],{342:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});var t=s(43),a=s(213),l=s(579);const d=()=>{const[e,r]=(0,t.useState)([]);(0,t.useEffect)((()=>{s()}),[]);const s=async()=>{try{const e=await a.A.get("https://edu-backend-2.onrender.com/api/admin/users",{withCredentials:!0});r(e.data)}catch(e){console.error("\u274c Error Fetching Users:",e)}};return(0,l.jsxs)("div",{className:"p-5 bg-white shadow-lg rounded-lg",children:[(0,l.jsx)("h1",{className:"text-3xl font-bold mb-6 text-blue-700 text-center",children:"\ud83d\udc65 User Management"}),(0,l.jsx)("div",{className:"overflow-x-auto",children:(0,l.jsxs)("table",{className:"w-full border-collapse border border-gray-300 shadow-md rounded-lg",children:[(0,l.jsx)("thead",{className:"bg-blue-500 text-white",children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{className:"p-3 border",children:"Name"}),(0,l.jsx)("th",{className:"p-3 border",children:"Email"}),(0,l.jsx)("th",{className:"p-3 border",children:"Role"}),(0,l.jsx)("th",{className:"p-3 border",children:"Action"})]})}),(0,l.jsx)("tbody",{children:e.length>0?e.map((s=>(0,l.jsxs)("tr",{className:"text-center hover:bg-gray-100 transition",children:[(0,l.jsx)("td",{className:"p-3 border",children:s.name}),(0,l.jsx)("td",{className:"p-3 border text-gray-700",children:s.email}),(0,l.jsx)("td",{className:"p-3 border",children:(0,l.jsx)("span",{className:"px-3 py-1 rounded-full text-white font-semibold "+("admin"===s.role?"bg-green-500":"bg-gray-500"),children:s.role})}),(0,l.jsx)("td",{className:"p-3 border",children:(0,l.jsx)("button",{onClick:()=>(async s=>{try{await a.A.delete(`https://edu-backend-2.onrender.com/api/admin/users/${s}`,{withCredentials:!0}),r(e.filter((e=>e._id!==s)))}catch(t){console.error("\u274c Error Deleting User:",t)}})(s._id),className:"bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition",children:"Delete"})})]},s._id))):(0,l.jsx)("tr",{children:(0,l.jsx)("td",{colSpan:"4",className:"text-gray-500 text-center p-4",children:"No users available."})})})]})})]})}}}]);
//# sourceMappingURL=342.aa46067c.chunk.js.map