import React, { useState } from 'react';
import { ScholarHubHeader } from '../ScholarHubHeader';
import { CreateBlogForm } from '.';
import { Layout } from 'antd';

const CreateBlogPage = () => {

 

  return (
    <div>
     <ScholarHubHeader/>
     <Layout style={{ marginTop: "90px", minHeight: "calc(100vh - 58px)" }}>
        <CreateBlogForm/>
        </Layout>
    </div>
  );
};

export default CreateBlogPage;
