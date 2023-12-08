import{s as a,j as i,L as s}from"./index-ceede2b6.js";const p=a.button`
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
`,t=a.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,n=a.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,r=a.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,c=()=>{const e=["/mnvk/public/images/Web/1.jpg","images/Кухар/2.jpg","images/Кухар/3.jpg","images/Кухар/4.jpg","images/Кухар/5.jpg","images/Кухар/6.jpg","images/Кухар/7.jpg","images/Кухар/8.jpg","images/Кухар/9.jpg","images/Кухар/10.jpg","images/Кухар/11.jpg","images/Кухар/12.jpg","images/Кухар/13.jpg","images/Кухар/14.jpg","images/Кухар/15.jpg","images/Кухар/16.jpg","images/Кухар/17.jpg","images/Кухар/18.jpg","images/Кухар/19.jpg"];return i.jsxs(r,{children:[i.jsx(s,{to:"/cook",children:i.jsx(p,{type:"button",children:"Go back"})}),i.jsx(t,{children:e.map((o,g)=>i.jsx(n,{src:o,alt:`Image ${g}`},g))})]})};export{c as default};
