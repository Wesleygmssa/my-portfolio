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

const Home: NextPage = () => {
    return (
        <>
            <NextHead />
            <HeaderProvider>
                <Header />
                <MenuMobile />
            </HeaderProvider>
            <main>
                <HomePage />
                <Separator />
                <Stats />
                <Separator />
                <About />
                <Separator />
                <Skills />
            </main>
        </>
    );
};

export default Home;
