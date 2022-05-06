import GlobalStyle from "../styles/GlobalStyle";
import type { AppProps } from "next/app";
import { PageProvider } from "../contexts/PageContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <PageProvider>
                <Component {...pageProps} />
                <GlobalStyle />
            </PageProvider>
        </>
    );
}

export default MyApp;
