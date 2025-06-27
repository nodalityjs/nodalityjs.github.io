import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import CodeBlock from '@theme/CodeBlock'; // Import CodeBlock

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Nodality
        </Heading>
        <p className="hero__subtitle">
          Build declarative UIs procedurally <br />
          Combine nodes and elements to create any UI you want.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs/basics/start">
            Get Started
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/video/">
            Watch Video 🎥
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to Nodality`}
      description="Build declarative UIs procedurally. Combine nodes and elements to create any UI you want.">
      <HomepageHeader />
      <main>
        <section className={styles.installation}>
          <Heading as="h2">Installation</Heading>
          <p>The easiest way to get up and running is to use npm</p>
          <CodeBlock language="bash">{`npm create nodality@latest my-app`}</CodeBlock>
        </section>

        <section className={styles.tutorial}>
          <Heading as="h2">Tutorial</Heading>

          <Heading as="h3">Step 1: Array of Elements</Heading>
          <p>Define an array of elements you want to display in your user interface:</p>
          <CodeBlock language="javascript">{`let elements = [
  {
    type: "h1",
    text: "Hello"
  }
];`}</CodeBlock>

          <Heading as="h3">Step 2: Array of Nodes</Heading>
          <p>
            Define an array of nodes that will adjust the behavior of the element. This node adds a
            stroked text effect:
          </p>
          <CodeBlock language="javascript">{`let nodes = [
  {
    op: "blast"
  }
];`}</CodeBlock>

          <CodeBlock language="javascript">{`new Des()
  .nodes(nodes)
  .add(elements)
  .set({
    mount: "#mount",
    code: true
  });`}</CodeBlock>

          <Heading as="h3">Step 3: Result</Heading>
          <p>Mount the result of the code to the website and display it:</p>
          <CodeBlock language="javascript">{`new Text("Hello")
  .set({
    index: "0",
    fluidc: "S1",
    font: "Arial",
    stroke: { 
     op: {
      name: "blast", 
      color: "green",
      width: "1px"
       } 
      },
    })
  .render("#mount");`}</CodeBlock>

          <Heading as="h3">Use the Result</Heading>
          <CodeBlock language="html">{`<div id="#mount"></div>

<script>
let elements = [
  {
    type: "h1",
    text: "Hello"
  }
];

let nodes = [
  {
    op: "blast"
  }
];

new Des()
  .nodes(nodes)
  .add(elements)
  .set({
    mount: "#mount",
    code: true
  });
</script>`}</CodeBlock>

<iframe height="300" width="100%"
src="https://stackblitz.com/edit/stackblitz-starters-4xgawhpa?embed=1&file=index.html"></iframe>
        </section>
      </main>
    </Layout>
  );
}
