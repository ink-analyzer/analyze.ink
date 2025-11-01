import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

import Logo from '@site/static/img/logo.svg';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Logo className={styles.logoSvg} /> {siteConfig.title}
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog/introducing-ink-analyzer">
            Read the introductory blog post - 7min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Welcome`} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            href="https://marketplace.visualstudio.com/items?itemName=ink-analyzer.ink-analyzer"
          >
            Install Visual Studio Code Extension
          </Link>
        </div>
      </main>
    </Layout>
  );
}
