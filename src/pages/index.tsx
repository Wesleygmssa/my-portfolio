import { Text } from "components/Text";
import type { GetStaticProps } from "next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
    return <Text size="xl">Ok google</Text>;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            ...(await serverSideTranslations(locale!, ["common", "home"])),
        },
    };
};
