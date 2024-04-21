import React from 'react';
import { ScholarHubHeader } from '../ScholarHubHeader';
// import { HomePageBody } from '.';
import HomePageBody from './HomePageBody';
import { Layout } from "antd";
import { Row, Col } from "antd";


const HomePage = () => {
  return (
    // <Layout >
    <div>
  <ScholarHubHeader />
  <Layout style={{fontFamily:"Stencil Std, fantasy", marginTop: "65px", minHeight: "calc(100vh - 58px)" }}>
   <HomePageBody/> 
   </Layout>
</div>
  //  </Layout>
  );
};

// const StyledInnerLayout = styled(Layout)`
//   margin: 0 0 0 8px;
//   padding-right: 8px;
//   overflow-y: auto;
//   justify-content: flex-end;
//   transition: margin 0.2s;
//   @media only screen and (max-width: 768px) {
//     margin-left: 90px;
//   }`

export default HomePage;
