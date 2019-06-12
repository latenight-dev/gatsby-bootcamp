/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = props => (
  <div className={layoutStyles.container}>
    <div className={layoutStyles.content}>
      <Header />
      {props.children}
    </div>

    <Footer />
  </div>
);

export default Layout;