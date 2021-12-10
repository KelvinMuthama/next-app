import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja List | About</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Next.js was first released as an open-source project on GitHub on
          October 25, 2016; 5 years ago.[3] It was originally developed based on
          six principles: out-of-the box functionality requiring no setup,
          JavaScript everywhere, all functions are written in JavaScript,
          automatic code-splitting and server-rendering, configurable
          data-fetching, anticipating requests, and simplifying deployment.
        </p>
        <p>
          Next.js gives you the best developer experience with all the features
          you need for production: hybrid static & server rendering, TypeScript
          support, smart bundling, route pre-fetching, and more. No config
          needed.
        </p>
      </div>
    </>
  );
};

export default About;
