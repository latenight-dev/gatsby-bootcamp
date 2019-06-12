/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => (
  <Layout>
    <Head title="About" />
    <h1>About</h1>
    <h2>Bio</h2>
    <p>
        I was raised in connecticut. Went to Uconn for college. Graduated and started working at the
        game agency

    </p>
    <p>
        Need a developer?
      <Link to="/contact">Contact me.</Link>
    </p>
  </Layout>
);

export default AboutPage;
