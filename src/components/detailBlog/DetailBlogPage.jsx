import React from 'react';
import { ScholarHubHeader } from '../ScholarHubHeader';
import DetailBlogContent from './DetailBlogContent';
import { Col, Layout, Row } from 'antd';
import DetailBlogPageSider from '../Posts/slider/DetailBlogPageSider';
import { Divider } from 'antd';
// import SingleBlog from './SingleBlog';
const DetailBlogPage = () => {
  return (
    <div>
      <ScholarHubHeader />
      <Layout style={{ marginTop: "65px", minHeight: "calc(100vh - 58px)" }}>
        <Row>
          <Col span={17}>
            <DetailBlogContent />
          </Col>
          <Col span={1}>
            <Divider type="vertical" style={{ height: '100%' }} />
          </Col>
          <Col span={6}>
            <DetailBlogPageSider />
          </Col>
        </Row>
      </Layout>

    </div>
  );
};

export default DetailBlogPage;
