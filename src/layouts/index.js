import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header.js';

import '../styles/main.scss';

const Layout = ({ data, children }) =>
  <div>
    <Header 
      siteUrl={data.site.siteMetadata.siteUrl} 
      siteName={data.site.siteMetadata.siteName} 
    />
    {children()}
  </div>;

Layout.propTypes = {
  children: PropTypes.any,
};

export const query = graphql`
  query SiteMetaDataQuery {
    site {
      siteMetadata {
        siteUrl,
        siteName
      }
    }
  }
`;

export default Layout;
