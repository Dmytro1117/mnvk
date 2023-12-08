import{s as o,j as i,L as e}from"./index-f8a3e2cf.js";const n=o.button`
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
`,g=o.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,p=o.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,x=()=>{const s=["../images/Психолог/1.JPG","../images/Психолог/2.JPG","../images/Психолог/3.JPG","../images/Психолог/4.JPG","../images/Психолог/5.JPG","../images/Психолог/6.JPG","../images/Психолог/7.JPG","../images/Психолог/8.JPG","../images/Психолог/9.JPG","../images/Психолог/10.JPG","../images/Психолог/11.JPG","../images/Психолог/12.JPG","../images/Психолог/13.JPG"];return i.jsxs(p,{children:[i.jsx(e,{to:"/psychologist",children:i.jsx(n,{type:"button",children:"Go back"})}),i.jsx(r,{children:s.map((t,a)=>i.jsx(g,{src:t,alt:`Image ${a}`},a))})]})};export{x as default};
