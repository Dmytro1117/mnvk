import{s as t,j as o,L as e}from"./index-f8a3e2cf.js";const n=t.button`
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
`,r=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,p=t.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,c=t.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,d=()=>{const a=["../images/Слюсар/1.jpg","../images/Слюсар/2.jpg","../images/Слюсар/3.jpg","../images/Слюсар/4.jpg"];return o.jsxs(c,{children:[o.jsx(e,{to:"/locksmith",children:o.jsx(n,{type:"button",children:"Go back"})}),o.jsx(r,{children:a.map((s,i)=>o.jsx(p,{src:s,alt:`Image ${i}`},i))})]})};export{d as default};
