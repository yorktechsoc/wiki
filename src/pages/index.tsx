import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Something inteligent here">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container ">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main className='padding-vert--md'>
        {/* About */}
        <section className={styles.features}>
          <div className="container text--center">
            <h2 className='padding-horiz--md'>About the Society</h2>
            <p>Founded in 2017, Technical Theatre Society was started with the aim of providing better collaboration between societies at York, to be a gateway for students who want to get involved in running shows, and a resource for other societies to easily find technicians and hire equipment.</p>
            <p>We also give the societies the flexibility to perform in venues that aren't fitted out with permanent lighting and sound equipment, using our stock of portable equipment. </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}