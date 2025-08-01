import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    // title: 'Easy to Use',
    title: 'Comming soon...',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        {Array.from({length: 150}, () => Math.round(Math.random())).join('')}
      </>
    ),
  },
  {
    // title: 'Focus on What Matters',
    title: 'Comming soon...',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        {Array.from({length: 125}, () => Math.round(Math.random())).join('')}
      </>
    ),
  },
  {
    // title: 'Powered by React',
    title: 'Comming soon...',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        {Array.from({length: 100}, () => Math.round(Math.random())).join('')}
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
