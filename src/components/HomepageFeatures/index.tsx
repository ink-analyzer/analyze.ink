import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  href: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Semantic Analyzer',
    href: 'https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/analyzer',
    Svg: require('@site/static/img/analyze.svg').default,
    description: (
      <>
        Parses the smart contract code, analyzes it based on ink!'s semantic rules for smart contracts and returns
        semantic information for other components to consume.
      </>
    ),
  },
  {
    title: 'Language Server',
    href: 'https://github.com/ink-analyzer/ink-analyzer/tree/master/crates/lsp-server',
    Svg: require('@site/static/img/translate.svg').default,
    description: (
      <>
        Implements the{' '}
        <a href="https://microsoft.github.io/language-server-protocol/" target="_blank">
          Language Server Protocol (LSP)
        </a>{' '}
        and acts as a backend that provides language support features to IDEs, code editors and other development tools.
        Translates requests between the Semantic Analyzer and other components.
      </>
    ),
  },
  {
    title: 'Extensions/Plugins',
    href: 'https://github.com/ink-analyzer/ink-vscode',
    Svg: require('@site/static/img/extension.svg').default,
    description: (
      <>
        Adds ink! language support to a specific IDE, code editor or development tool by communicating with the Language
        Server running as a separate process using the{' '}
        <a href="https://microsoft.github.io/language-server-protocol/" target="_blank">
          Language Server Protocol
        </a>{' '}
        via{' '}
        <a href="https://microsoft.github.io/language-server-protocol/" target="_blank">
          JSON-RPC
        </a>
        .
      </>
    ),
  },
];

function Feature({ title, href, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>
          <a href={href} target="_blank">
            {title}
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
