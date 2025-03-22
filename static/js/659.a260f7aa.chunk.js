"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[659],{659:(e,a,t)=>{t.r(a),t.d(a,{default:()=>i});var s=t(43),r=t(315),n=t(213),l=t(3),o=t(964),d=t(579);const i=()=>{const[e,a]=(0,s.useState)({email:"",password:""}),[t,i]=(0,s.useState)(""),c=(0,r.Zp)(),u=(0,l.wA)(),m=t=>{a({...e,[t.target.name]:t.target.value})};return(0,d.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:(0,d.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-md w-80",children:[(0,d.jsx)("h2",{className:"text-2xl font-bold text-center mb-6 text-blue-600",children:"Sign In"}),t&&(0,d.jsx)("p",{className:"text-center mb-4 text-red-500",children:t}),(0,d.jsxs)("form",{onSubmit:async a=>{a.preventDefault(),i("");try{const a=await n.A.post("https://edu-backend-2.onrender.com/api/auth/login",e,{withCredentials:!0});if(console.log("\u2705 API Response:",a.data),!a.data||!a.data.user)throw new Error("User data not found in API response!");u((0,o.gV)({user:a.data.user,role:a.data.role,token:a.data.token})),i("\u2705 Login Successful!"),setTimeout((()=>{"admin"===a.data.role?c("/admin/dashboard"):c("/profile")}),1e3)}catch(l){var t,s,r;console.error("\u274c Login Error:",(null===(t=l.response)||void 0===t?void 0:t.data)||l),i("\u274c "+((null===(s=l.response)||void 0===s||null===(r=s.data)||void 0===r?void 0:r.error)||"Invalid credentials!"))}},className:"space-y-4",children:[(0,d.jsx)("input",{type:"email",name:"email",placeholder:"Email",value:e.email,onChange:m,className:"w-full p-3 border rounded",required:!0}),(0,d.jsx)("input",{type:"password",name:"password",placeholder:"Password",value:e.password,onChange:m,className:"w-full p-3 border rounded",required:!0}),(0,d.jsx)("button",{type:"submit",className:"w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition",children:"Login"})]}),(0,d.jsxs)("p",{className:"text-sm mt-3 text-center",children:["Already have an account?",(0,d.jsx)(r.k2,{to:"/Signin",className:"text-blue-600 ml-1",children:"Sign Up"})]})]})})}}}]);
//# sourceMappingURL=659.a260f7aa.chunk.js.map