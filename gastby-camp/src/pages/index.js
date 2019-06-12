/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => (
  <div>
    <Layout>
      <Head title="Home" />
      <h1>Hello.</h1>
      <h2>I'm Erick, a Junior Developer at The Game Agency</h2>
      <p>
        Need a developer?
        <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  </div>
);

export default IndexPage;
