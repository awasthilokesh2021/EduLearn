"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[454],{454:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a(43),n=a(315),l=a(213),r=a(579);const i=()=>{const[e,t]=(0,s.useState)({name:"",email:"",password:""}),[a,i]=(0,s.useState)(""),o=(0,n.Zp)(),c=a=>{t({...e,[a.target.name]:a.target.value})};return(0,r.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:(0,r.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md w-80",children:[(0,r.jsx)("h2",{className:"text-2xl font-bold text-center mb-6 text-blue-600",children:"Sign Up"}),a&&(0,r.jsx)("p",{className:"text-center mb-4 text-red-500",children:a}),(0,r.jsxs)("form",{onSubmit:async t=>{t.preventDefault(),i("");try{await l.A.post("http://localhost:5000/api/auth/signup",e);i("\u2705 Registration Successful!"),setTimeout((()=>o("/login")),2e3)}catch(s){var a;i("\u274c "+((null===(a=s.response)||void 0===a?void 0:a.data.error)||"Something went wrong!"))}},className:"space-y-4",children:[(0,r.jsx)("input",{type:"text",name:"name",placeholder:"Full Name",value:e.name,onChange:c,className:"w-full p-3 border rounded",required:!0}),(0,r.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:c,className:"w-full p-3 border rounded",required:!0}),(0,r.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:e.password,onChange:c,className:"w-full p-3 border rounded",required:!0}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition",children:"Sign Up"})]}),(0,r.jsxs)("p",{className:"text-sm mt-3 text-center",children:["Don't have an account?",(0,r.jsx)(n.k2,{to:"/Login",className:"text-blue-600 ml-1",children:"Sign In"})]})]})})}}}]);
//# sourceMappingURL=454.cd626efb.chunk.js.map