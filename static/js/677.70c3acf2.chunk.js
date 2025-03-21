"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[677],{677:(s,e,a)=>{a.r(e),a.d(e,{default:()=>h});var t=a(43),l=a(213),n=a(3),d=a(579);const c=(0,t.lazy)((()=>a.e(342).then(a.bind(a,342)))),r=(0,t.lazy)((()=>a.e(827).then(a.bind(a,827)))),i=(0,t.lazy)((()=>a.e(544).then(a.bind(a,544)))),o=(0,t.lazy)((()=>a.e(298).then(a.bind(a,298)))),h=()=>{const[s,e]=(0,t.useState)(null),[a,h]=(0,t.useState)(""),[m,x]=(0,t.useState)("dashboard"),[u,b]=(0,t.useState)({totalUsers:0,totalCourses:0}),j=(0,n.d4)((s=>s.auth.role));return(0,t.useEffect)((()=>{"admin"===j&&(async()=>{try{const s=await l.A.get("http://localhost:5000/api/admin/dashboard",{withCredentials:!0});e(s.data.admin)}catch(t){var s,a;h((null===(s=t.response)||void 0===s||null===(a=s.data)||void 0===a?void 0:a.error)||"Access Denied! Only Admins can access this page.")}})()}),[j]),(0,t.useEffect)((()=>{(async()=>{try{const s=await l.A.get("http://localhost:5000/api/admin/stats",{withCredentials:!0});b({totalUsers:s.data.totalUsers||0,totalCourses:s.data.totalCourses||0})}catch(a){console.error("Error fetching stats:",a)}})()}),[]),(0,d.jsxs)("div",{className:"min-h-screen flex mt-10",children:[(0,d.jsxs)("div",{className:"w-1/4 bg-blue-900 text-white p-5",children:[(0,d.jsx)("h2",{className:"text-2xl font-bold mb-5",children:"Admin Panel"}),(0,d.jsx)("ul",{className:"space-y-3",children:["dashboard","users","courses","contacts","payments"].map((s=>(0,d.jsx)("li",{children:(0,d.jsxs)("button",{onClick:()=>x(s),className:"w-full text-left p-2 hover:bg-blue-700 "+(m===s?"bg-blue-700":""),children:["dashboard"===s&&"\ud83d\udcca Dashboard","users"===s&&"\ud83d\udc64 Manage Users","courses"===s&&"\ud83d\udcda Manage Courses","contacts"===s&&"\ud83d\udce9 Contact Queries","payments"===s&&"\ud83d\udcb3 View Payments"]})},s)))})]}),(0,d.jsx)("div",{className:"w-3/4 p-5",children:a?(0,d.jsx)("h1",{className:"text-2xl text-red-500",children:a}):(0,d.jsxs)(t.Suspense,{fallback:(0,d.jsx)("h1",{className:"text-blue-500 text-center",children:"Loading..."}),children:["dashboard"===m&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("h1",{className:"text-3xl font-bold",children:["Welcome Admin: ",(null===s||void 0===s?void 0:s.name)||"Admin"]}),(0,d.jsx)("p",{className:"mt-2 text-gray-700",children:"Manage Users, Courses, and more..."}),(0,d.jsxs)("div",{className:"grid md:grid-cols-2 gap-6 mt-6",children:[(0,d.jsxs)("div",{className:"p-4 bg-white shadow-md rounded-md",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold",children:"Total Users"}),(0,d.jsx)("p",{className:"text-2xl",children:u.totalUsers})]}),(0,d.jsxs)("div",{className:"p-4 bg-white shadow-md rounded-md",children:[(0,d.jsx)("h2",{className:"text-xl font-semibold",children:"Total Courses"}),(0,d.jsx)("p",{className:"text-2xl",children:u.totalCourses})]})]})]}),"users"===m&&(0,d.jsx)(c,{}),"courses"===m&&(0,d.jsx)(r,{}),"contacts"===m&&(0,d.jsx)(i,{}),"payments"===m&&(0,d.jsx)(o,{})]})})]})}}}]);
//# sourceMappingURL=677.70c3acf2.chunk.js.map