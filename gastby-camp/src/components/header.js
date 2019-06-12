/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';


// import './header.module.scss';
import headerStyles from './header.module.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query{
      site{
        siteMetadata{
          title
        }
      }
    }
  `);
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Home</Link></p>
          </li>
          <li>
            <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">About</Link></p>
          </li>
          <li>
            <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></p>
          </li>
          <li>
            <p><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link></p>

          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;
