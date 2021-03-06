import Link from "next/link";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Next.js was first released as an open-source project on GitHub on
          October 25, 2016; 5 years ago.[3] It was originally developed based on
          six principles: out-of-the box functionality requiring no setup,
          JavaScript everywhere, all functions are written in JavaScript,
          automatic code-splitting and server-rendering, configurable
          data-fetching, anticipating requests, and simplifying deployment.
        </p>
        <p className={styles.text}>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
