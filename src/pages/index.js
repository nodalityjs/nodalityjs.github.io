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
          {/*<Link className="button button--secondary button--lg" to="/docs/video/">
            Watch Video 🎥
          </Link>*/}
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
          <Heading as="h2">Instalation</Heading>
          <p>The easiest way to get up and running is to use npm</p>
          <CodeBlock language="bash">{`npm create nodality@latest my-app`}</CodeBlock>
        </section>

        <section className={styles.tutorial}>
          <Heading as="h2">Get started</Heading>

          <Heading as="h3">Step 1: Array of elements</Heading>
          <p>Define an array of elements you want to display in your user interface:</p>
          <CodeBlock language="javascript">{`let elements = [
  {
    type: "h1",
    text: "Hello"
  }
];`}</CodeBlock>

          <Heading as="h3">Step 2: Array of nodes</Heading>
          <p>
            Define an array of nodes that will adjust the behavior of the element. This node adds a
            stroked text effect:
          </p>
          <CodeBlock language="javascript">{`let nodes = [
  {
    op: "blast"
  }
];`}</CodeBlock>

          <Heading as="h3">Step 3: Designer</Heading>
          <p>
            Add elements into the <code>elements</code> method and nodes array into <code>nodes</code>method, and use <code>set</code> method to mount the result of the code to the website. Use <code>code: true</code> option to also display the code of the elements.
          </p>
          <CodeBlock language="javascript">{`new Des()
  .nodes(nodes)
  .add(elements)
  .set({
    mount: "#mount",
    code: true
  });`}</CodeBlock>

          <Heading as="h3">Result</Heading>
          <p>The operations above will result in the following code. You can render this element into any <code>div</code> on your website.</p>
          <CodeBlock language="javascript">{`new Text("Hello")
  .set({
    index: "0",
    size: "S1",
    font: "Arial",
    stroke: { 
     op: {
      name: "blast", 
      color: "green",
      width: "1px"
       } 
      },
    })
  .render("#home");`}</CodeBlock>

          <Heading as="h3">Here is the complete setup:</Heading>
          <Heading as="h4">Generation part</Heading>
          <CodeBlock language="html">{`<div id="mount"></div>

<script type="module">
import {Des} from "https://www.unpkg.com/nodality@1.0.0-beta.4/dist/index.esm.js";

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

<Heading as="h4">Usage part</Heading>
<CodeBlock language="html">{`<div id="mount"></div>
<script type="module">
import {Text} from "https://www.unpkg.com/nodality@1.0.0-beta.4/dist/index.esm.js";

new Text("Hello")
  .set({
    index: "0",
    size: "S1",
    font: "Arial",
    stroke: { 
     op: {
      name: "blast", 
      color: "green",
      width: "1px"
       } 
      },
    })
  .render("#home");
  </script>`}
</CodeBlock>

<img width="900" height="auto" src="https://camo.githubusercontent.com/100a066d9bac77cebaf01c350eb6cda5d162cc02b51e98871ab9a8e04d9798ef/68747470733a2f2f6e6f64616c6974796a732e6769746875622e696f2f6173736574732f696d616765732f696d6167652d32363031633938326637343763386533393737613264353838663631653034302e706e67"></img>

<iframe loading="lazy" height="300" width="100%"
src="https://stackblitz.com/edit/stackblitz-starters-aebrgagx?embed=1&file=index.html"></iframe>
        </section>
      </main>
    </Layout>
  );
}
