import{s as i,j as o,L as e}from"./index-7520cba2.js";const n=i.button`
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
`,r=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,p=i.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,c=i.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,x=()=>{const a=["../images/Психолог/1.JPG","../images/Психолог/2.JPG","../images/Психолог/3.JPG","../images/Психолог/4.JPG","../images/Психолог/5.JPG","../images/Психолог/6.JPG","../images/Психолог/7.JPG","../images/Психолог/8.JPG","../images/Психолог/9.JPG"];return o.jsxs(c,{children:[o.jsx(e,{to:"/psychologist",children:o.jsx(n,{type:"button",children:"Go back"})}),o.jsx(r,{children:a.map((s,t)=>o.jsx(p,{src:s,alt:`Image ${t}`},t))})]})};export{x as default};
