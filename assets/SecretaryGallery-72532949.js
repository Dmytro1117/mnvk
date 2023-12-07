import{s as t,j as i,L as r}from"./index-b49e1329.js";const s=t.button`
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
`,p=t.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,n=t.img`
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
`,x=()=>{const a=["/public/images/Секретарі/1.jpg","/public/images/Секретарі/2.jpg","/public/images/Секретарі/3.JPG","/public/images/Секретарі/4.JPG","/public/images/Секретарі/5.jpg","/public/images/Секретарі/4.JPG"];return i.jsxs(c,{children:[i.jsx(r,{to:"/secretary",children:i.jsx(s,{type:"button",children:"Go back"})}),i.jsx(p,{children:a.map((e,o)=>i.jsx(n,{src:e,alt:`Image ${o}`},o))})]})};export{x as default};
