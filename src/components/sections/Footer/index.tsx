import Link from "next/link";
import { FooterContainer } from "./styles";
import { FaLevelUpAlt } from "react-icons/fa";
import { useContext } from "react";
import { PageContext } from "../../../contexts/PageContext";
import { useTranslation } from "next-i18next";

export const Footer = () => {
    const { scrollPageTop } = useContext(PageContext);
    const { t } = useTranslation();

    return (
        <FooterContainer>
            <div className="content">
                <div className="texts">
                    <p>{t("rightsReserved")}, © 2022 Bruno Guerra.</p>
                    <div className="socials">
                        <Link
                            href={"https://www.linkedin.com/in/brunorguerra/"}
                        >
                            <a title={t("accessLinkedinTitle")}>
                                <img
                                    src="./linkedin.svg"
                                    alt="Logo do Linkedin"
                                />
                            </a>
                        </Link>
                        <Link href={"https://github.com/brunorguerra"}>
                            <a title={t("accessGithubTitle")}>
                                <img src="./github.svg" alt="Logo do Github" />
                            </a>
                        </Link>
                        <Link
                            href={"https://www.instagram.com/bruno.bernardees/"}
                        >
                            <a title={t("accessInstagramTitle")}>
                                <img
                                    src="./instagram.svg"
                                    alt="Logo do Instagram"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <button
                    className="btnTopPage"
                    onClick={scrollPageTop}
                    title={t("homeTitle")}
                >
                    <span>{t("home")}</span>
                    <FaLevelUpAlt size={30} />
                </button>
            </div>
        </FooterContainer>
    );
};
