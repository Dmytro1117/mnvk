import{s as a,j as o,L as s}from"./index-76324bcb.js";const m=a.button`
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
`,p=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,t=a.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,n=a.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,c=()=>{const i=["../images/CookImag/1.jpg","../images/CookImag/2.jpg","../images/CookImag/3.jpg","../images/CookImag/4.jpg","../images/CookImag/5.jpg","../images/CookImag/6.jpg","../images/CookImag/7.jpg","../images/CookImag/8.jpg","../images/CookImag/9.jpg","../images/CookImag/10.jpg","../images/CookImag/11.jpg","../images/CookImag/12.jpg","../images/CookImag/13.jpg","../images/CookImag/14.jpg","../images/CookImag/15.jpg","../images/CookImag/16.jpg","../images/CookImag/17.jpg","../images/CookImag/18.jpg","../images/CookImag/19.jpg"];return o.jsxs(n,{children:[o.jsx(s,{to:"/cook",children:o.jsx(m,{type:"button",children:"Go back"})}),o.jsx(p,{children:i.map((e,g)=>o.jsx(t,{src:e,alt:`Image ${g}`},g))})]})};export{c as default};
