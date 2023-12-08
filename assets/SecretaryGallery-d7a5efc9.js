import{s as o,j as t,L as r}from"./index-f8a3e2cf.js";const s=o.button`
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
`,n=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,p=o.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,c=o.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,x=()=>{const i=["../images/Секретарі/1.jpg","../images/Секретарі/2.jpg","../images/Секретарі/3.jpg","../images/Секретарі/4.jpg","../images/Секретарі/5.jpg","../images/Секретарі/4.jpg"];return t.jsxs(c,{children:[t.jsx(r,{to:"/secretary",children:t.jsx(s,{type:"button",children:"Go back"})}),t.jsx(n,{children:i.map((e,a)=>t.jsx(p,{src:e,alt:`Image ${a}`},a))})]})};export{x as default};
