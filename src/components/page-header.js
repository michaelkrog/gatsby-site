import React from 'react'
import Link from 'gatsby-link'
import { Layout } from 'antd';

const { Header } = Layout;

const PageHeader = ({ siteTitle }) => (
  <div>
    <Header>{siteTitle}</Header>
  </div>
)

export default PageHeader
