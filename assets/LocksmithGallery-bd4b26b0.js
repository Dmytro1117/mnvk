import{s as i,j as o,L as e}from"./index-a77ba604.js";const p=i.button`
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
`,n=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  padding: 16px;
`,r=i.img`
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
`,x=()=>{const a=["/public/images/Слюсар/1.jpg","/public/images/Слюсар/2.jpg","/public/images/Слюсар/3.jpg","/public/images/Слюсар/4.jpg"];return o.jsxs(c,{children:[o.jsx(e,{to:"/locksmith",children:o.jsx(p,{type:"button",children:"Go back"})}),o.jsx(n,{children:a.map((s,t)=>o.jsx(r,{src:s,alt:`Image ${t}`},t))})]})};export{x as default};
