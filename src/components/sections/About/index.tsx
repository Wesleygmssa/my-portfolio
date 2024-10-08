import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useContext } from "react";
import { usePageContext } from "../../../contexts/PageContext";
import { TitleSection } from "../../partials/TitleSection";
import { AboutContainer } from "./styles";

export const About = () => {
  const { aboutRef } = usePageContext();
  const { t } = useTranslation();

  return (
    <AboutContainer ref={aboutRef}>
      <div className="contentAbout">
        <div className="textAbout">
          <TitleSection>{t("about")}</TitleSection>
          <p>{t("descriptionAboutMe")}</p>
          <div className="linkSocial">
            <Link href="https://github.com/Wesleygmssa">
              <a title={t("accessGithubTitle")}>
                <img src="./github.svg" alt="Logo Github" />
              </a>
            </Link>
            <Link href="https://www.instagram.com/wguerra9/">
              <a title={t("accessInstagramTitle")}>
                <img src="./instagram.svg" alt="Logo Instagram" />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/wesleyguerra09/">
              <a title={t("accessLinkedinTitle")}>
                <img src="./linkedin.svg" alt="Logo Linkedin" />
              </a>
            </Link>
          </div>
        </div>
        <div className="image">
          <img
            src="./profile.png"
            alt={t("illustrativePhoto")}
            title={t("illustrativePhoto")}
          />
        </div>
      </div>
    </AboutContainer>
  );
};
