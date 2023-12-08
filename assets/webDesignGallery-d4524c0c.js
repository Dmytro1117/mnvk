import{s as e,j as i,L as s}from"./index-746acf92.js";const t=e.button`
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
`,g=e.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,b=e.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,c=e.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,n=()=>{const a=["/public/images/Web/1.jpg","/public/images/Web/2.jpg","/public/images/Web/3.jpg","/public/images/Web/4.jpg","/public/images/Web/5.jpg","/public/images/Web/6.jpg","/public/images/Web/7.jpg","/public/images/Web/8.jpg","/public/images/Web/9.jpg","/public/images/Web/10.jpg","/public/images/Web/11.jpg","/public/images/Web/12.jpg","/public/images/Web/13.jpg","/public/images/Web/14.jpg"];return i.jsxs(c,{children:[i.jsx(s,{to:"/web",children:i.jsx(t,{type:"button",children:"Go back"})}),i.jsx(g,{children:a.map((o,p)=>i.jsx(b,{src:o,alt:`Image ${p}`},p))})]})};export{n as default};
