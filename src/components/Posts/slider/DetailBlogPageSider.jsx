import { Tabs } from 'antd';
import React from 'react';
import TrendingBlogs from './TrendingBlogs';
import LatestBlogs from './LatestBlogs';
import PopularBlogs from './PopularBlogs';

const items: TabsProps['items'] = [
    {
  
      key: '1',
      label: 'Latest Blogs',
      children: (<LatestBlogs/>),
    },
    {
      key: '2',
      label: 'Trending Blogs',
      children: (<TrendingBlogs/>),
    },
    {
      key: '3',
      label: 'Popular Blogs',
      children: (<PopularBlogs/>),
    },
  ];

const DetailBlogPageSider = () => {
  return (
    <div style={{marginLeft:"0px",marginTop:"15px", backgroundColor:"rgb(213 231 247)"}}>
        <Tabs style={{marginLeft:"15px"}} defaultActiveKey="1" items={items} />
           </div>
  );
};

export default DetailBlogPageSider;
