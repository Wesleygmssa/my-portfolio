import Link from "next/link";
import { FooterContainer } from "./styles";
import { FaLevelUpAlt } from "react-icons/fa";
import { useContext } from "react";
import { usePageContext } from "../../../contexts/PageContext";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { scrollToPageTop } = usePageContext();
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <div className="content">
        <div className="texts">
          <p>{t("rightsReserved")}, © 2022 Wesley Guerra.</p>
          <div className="socials">
            <Link href={"https://www.linkedin.com/in/wesleyguerra09/"}>
              <a title={t("accessLinkedinTitle")}>
                <img src="./linkedin.svg" alt="Logo do Linkedin" />
              </a>
            </Link>
            <Link href={"https://github.com/Wesleygmssa"}>
              <a title={t("accessGithubTitle")}>
                <img src="./github.svg" alt="Logo do Github" />
              </a>
            </Link>
            <Link href={"https://www.instagram.com/wguerra9/"}>
              <a title={t("accessInstagramTitle")}>
                <img src="./instagram.svg" alt="Logo do Instagram" />
              </a>
            </Link>
          </div>
        </div>
        <button
          className="btnTopPage"
          onClick={scrollToPageTop}
          title={t("homeTitle")}
        >
          <span>{t("home")}</span>
          <FaLevelUpAlt size={30} />
        </button>
      </div>
    </FooterContainer>
  );
};
