import Head from "next/head";

type NextHeadProps = {
  title: string;
  faviconPath: string;
};

const NextHead = ({ title, faviconPath }: NextHeadProps) => {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      />

      <link rel="shortcut icon" href={`./${faviconPath}`} type="image/x-icon" />

      <title>{title}</title>
      <link rel="canonical" href="https://www.bruno-guerra.dev/" />
      <meta name="language" content="pt-BR" />
      <meta httpEquiv="content-language" content="pt-br" />
      <meta
        name="keywords"
        content="Wesley Guerra, portfolio Wesley Guerra, dev, bruno guerra dev,programador, programador frontend, desenvolvedor, desenvolvedor frontend, desenvolvedor backend, desenvolvimento web, frontend, backend, desenvolvedor react js, desenvolvedor next js, profissional de ti, criação de sites, desenvolvedor de sites"
      />
      <meta
        name="title"
        content="Portfolio Wesley Guerra - Desenvolvedor Frontend, ReactJS, NextJS, NodeJS"
      />
      <meta
        name="description"
        content="Desenvolvedor Web, Websites , WebApp, HTML, CSS, JavaScript, Jquery, ReactJS, NextJS, NodeJS, MySQL, MongoDB, SQL, Profissional de TI, Frontend, Desenvolvimento de Sites, Portfolio Web de Wesley Guerra"
      />
      <meta name="author" content="Wesley Guerra" />
      <meta name="creator" content="Wesley Guerra" />
      <meta name="copyright" content="© 2022 Wesley Guerra" />
      <meta name="rating" content="general" />

      <meta property="og:url" content="https://www.bruno-guerra.dev/" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Portfolio Wesley Guerra - Desenvolvedor Frontend, ReactJS, NextJS, NodeJS"
      />
      <meta
        property="og:description"
        content="Desenvolvedor Web Frontend, Websites , WebApp, HTML, CSS, JavaScript, Jquery, ReactJS, NextJS, NodeJS, MySQL, MongoDB, SQL, Profissional de TI, Frontend, Desenvolvimento de Sites"
      />
      <meta
        property="og:image"
        content="https://www.bruno-guerra.dev/application.png"
      />
      <meta
        property="og:site_name"
        content="Portfolio Wesley Guerra - Desenvolvedor Frontend"
      />
    </Head>
  );
};

export default NextHead;
