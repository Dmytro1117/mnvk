import{s as o,j as e,L as s}from"./index-ccbf46ad.js";const n=o.button`
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
`,r=o.div`
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
`,d=()=>{const t=["../images/Web/6.JPG","../images/Web/7.JPG","../images/Web/9.JPG","../images/Web/10.JPG","../images/Web/11.JPG","../images/Web/12.JPG","../images/Web/13.JPG","../images/Web/14.JPG"];return e.jsxs(c,{children:[e.jsx(s,{to:"/web",children:e.jsx(n,{type:"button",children:"Go back"})}),e.jsx(r,{children:t.map((a,i)=>e.jsx(p,{src:a,alt:`Image ${i}`},i))})]})};export{d as default};
