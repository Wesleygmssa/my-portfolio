import Link from "next/link";

// i18next
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: { locale: string }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ["common", "custom404"])),
        },
    };
}

export default function Custom404() {
    const { t } = useTranslation();

    return (
        <>
            <p>pagina não encontrada</p>
        </>
    );
}
