import type { AppProps } from "next/app";

// i18next
import { appWithTranslation } from "next-i18next";

// Styles
import { globalStyles } from "../styles/global";

globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default appWithTranslation(MyApp);
