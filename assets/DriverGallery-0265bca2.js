import{s as o,j as i,L as s}from"./index-52dd73eb.js";const r=o.button`
  text-decoration: none;
  margin: 0 6px;
  color: white;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #1677ff;
  border-radius: 2px;
  box-shadow: 0 2px 0 rgb(5 145 255 / 10%);
  padding: 2px 8px;
  background-color: #1677ff;
  font-weight: 400;
  font-size: 18px;

  &:hover,
  &:focus {
    opacity: 0.8;
    background-color: white;
    color: #1677ff;
  }
`,p=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,n=o.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,g=o.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,x=()=>{const a=["../images/Водії/1.jpg","../images/Водії/2.jpg","../images/Водії/3.jpg","../images/Водії/4.jpg","../images/Водії/5.jpg","../images/Водії/6.jpg","../images/Водії/7.jpg","../images/Водії/8.jpg","../images/Водії/9.jpg"];return i.jsxs(g,{children:[i.jsx(s,{to:"/driver",children:i.jsx(r,{type:"button",children:"Go back"})}),i.jsx(p,{children:a.map((e,t)=>i.jsx(n,{src:e,alt:`Image ${t}`},t))})]})};export{x as default};
