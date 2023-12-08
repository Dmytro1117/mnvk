import{s as p,j as i,L as t}from"./index-ceede2b6.js";const e=p.button`
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
`,g=p.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,c=p.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,l=p.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,r=()=>{const a=["/public/images/Психолог/1.jpg","/public/images/Психолог/2.jpg","/public/images/Психолог/3.jpg","/public/images/Психолог/4.jpg","/public/images/Психолог/5.jpg","/public/images/Психолог/6.jpg","/public/images/Психолог/7.jpg","/public/images/Психолог/8.jpg","/public/images/Психолог/9.jpg","/public/images/Психолог/10.jpg","/public/images/Психолог/11.jpg","/public/images/Психолог/12.jpg","/public/images/Психолог/13.jpg"];return i.jsxs(l,{children:[i.jsx(t,{to:"/psychologist",children:i.jsx(e,{type:"button",children:"Go back"})}),i.jsx(g,{children:a.map((s,o)=>i.jsx(c,{src:s,alt:`Image ${o}`},o))})]})};export{r as default};
