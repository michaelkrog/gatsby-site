import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Layout } from 'antd';
import PageHeader from '../components/page-header'
import './index.css'

const { Footer, Sider, Content } = Layout;

const PageLayout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />

    <Layout>
      <Sider>Sider</Sider>
      <Layout>
      <PageHeader siteTitle={data.site.siteMetadata.title} />
        <Content>
          <div
            style={{
              margin: '0 auto',
              maxWidth: 960,
              padding: '0px 1.0875rem 1.45rem',
              paddingTop: 0,
            }}
          >
            {children()}
          </div>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
    
    
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.func,
}

export default PageLayout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
