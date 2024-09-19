import type { NextPage } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { HeaderProvider } from "../contexts/HeaderContext";
import { ProfileProvider } from "../contexts/ProfileContext";

import NextHead from "../components/partials/NextHead";

import { Header } from "../components/sections/Header";
import { MenuMobile } from "../components/partials/MenuMobile";
import { HomePage } from "../components/sections/HomePage";
import { Stats } from "../components/sections/Stats";
import { About } from "../components/sections/About";
import { Separator } from "../components/partials/Separator";
import { Skills } from "../components/sections/Skills";
import { Portfolio } from "../components/sections/Portfolio";
import { Contact } from "../components/sections/Contact";
import { Footer } from "../components/sections/Footer";

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

const Home: NextPage = () => {
  return (
    <>
      <NextHead
        title="Portfolio Wesley Guerra - Desenvolvedor Frontend, ReactJS, NextJS, NodeJS"
        faviconPath="favicon.svg"
      />

      <HeaderProvider>
        <Header />
        <MenuMobile />
      </HeaderProvider>

      <ProfileProvider>
        <main>
          <HomePage />
          <Separator />
          <Stats />
          <Separator />
          <About />
          <Separator />
          <Skills />
          <Separator />
          <Portfolio />
          <Separator />
          <Contact />
          <Footer />
        </main>
      </ProfileProvider>
    </>
  );
};

export default Home;
