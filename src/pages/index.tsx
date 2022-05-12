import type { NextPage } from "next";
import { Header } from "../components/Header";
import { MenuMobile } from "../components/MenuMobile";
import { HomePage } from "../components/HomePage";
import { Stats } from "../components/Stats";
import { About } from "../components/About";
import { Separator } from "../components/Separator";
import NextHead from "../components/NextHead";
import { HeaderProvider } from "../contexts/HeaderContext";
import { Skills } from "../components/Skills";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { useContext } from "react";
import { PageContext } from "../contexts/PageContext";
import { Portfolio } from "../components/Portfolio";
import { ProfileProvider } from "../contexts/ProfileContext";

const Home: NextPage = () => {
    return (
        <>
            <NextHead
                title="Portfolio Bruno Guerra - Desenvolvedor Frontend, ReactJS, NextJS, NodeJS"
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
