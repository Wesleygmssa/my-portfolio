import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    return <p>Ok google</p>;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale || "en", [
                "common",
                "home",
            ])),
        },
    };
};
