import{s as o,j as i,L as e}from"./index-a77ba604.js";const s=o.button`
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
`,c=o.img`
  width: 300px;
  height: 200px;
  object-fit: contain;
  object-position: center;
  display: flex;
  margin: 0 auto;
`,n=o.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
`,l=()=>{const t=["/public/images/Водії/1.jpg","/public/images/Водії/2.jpg","/public/images/Водії/3.jpg","/public/images/Водії/4.jpg","/public/images/Водії/5.jpg","/public/images/Водії/6.jpg","/public/images/Водії/7.jpg","/public/images/Водії/8.jpg","/public/images/Водії/9.jpg"];return i.jsxs(n,{children:[i.jsx(e,{to:"/driver",children:i.jsx(s,{type:"button",children:"Go back"})}),i.jsx(r,{children:t.map((a,p)=>i.jsx(c,{src:a,alt:`Image ${p}`},p))})]})};export{l as default};
