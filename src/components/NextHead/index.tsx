import Head from "next/head";

type NextHeadProps = {
    title: string;
};

const NextHead = ({ title }: NextHeadProps) => {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />

            <link
                rel="shortcut icon"
                href="./assets/icons/favicon.svg"
                type="image/x-icon"
            />

            <title>{title}</title>
            <link rel="canonical" href="https://www.bruno-guerra.dev/" />
            <meta name="language" content="pt-BR" />
            <meta httpEquiv="content-language" content="pt-br" />
            <meta
                name="keywords"
                content="Bruno Guerra , portfolio Bruno Guerra, dev, bruno guerra dev,programador, programador frontend, desenvolvedor, desenvolvedor frontend, desenvolvimento web, frontend"
            />
            <meta
                name="title"
                content="Portfolio Bruno Guerra - Desenvolvedor Frontend"
            />
            <meta
                name="description"
                content="Desenvolvedor Web, Websites , WebApp, HTML, CSS, JavaScript, Jquery, NodeJS, SQL, Profissional de TI, Frontend, Desenvolvimento de Sites, Portfolio Web de Bruno Guerra"
            />
            <meta name="author" content="Bruno Guerra" />
            <meta name="creator" content="Bruno Guerra" />
            <meta name="copyright" content="© 2022 Bruno Guerra" />
            <meta name="rating" content="general" />

            <meta property="og:url" content="https://www.bruno-guerra.dev" />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content="Portfolio Bruno Guerra - Desenvolvedor Frontend"
            />
            <meta
                property="og:description"
                content="Desenvolvedor Web, Websites , WebApp, HTML, CSS, JavaScript, Jquery, NodeJS, SQL, Profissional de TI, Frontend, Desenvolvimento de Sites"
            />
            <meta property="og:image" content="" />
            <meta
                property="og:site_name"
                content="Portfolio Bruno Guerra - Desenvolvedor Frontend"
            />
        </Head>
    );
};

export default NextHead;
