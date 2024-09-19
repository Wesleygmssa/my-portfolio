import Link from "next/link";

import React from "react";
import { useContext } from "react";

import { useTranslation } from "next-i18next";

import { HeaderContainer } from "./styles";

import { HeaderContext } from "../../../contexts/HeaderContext";
import { usePageContext } from "../../../contexts/PageContext";
import { ButtonSwitchLang } from "../../partials/ButtonSwitchLang";

import { CgMenuRight } from "react-icons/cg"; /*Menu icon*/

export const Header = () => {
  const { toggleShowMenu } = useContext(HeaderContext);
  const {
    scrollToSection,
    aboutRef,
    skillsRef,
    portfolioRef,
    contactRef,
    isVisibleHeader,
    isPageTop,
  } = usePageContext();

  const { t } = useTranslation();

  return (
    <HeaderContainer isVisibleHeader={isVisibleHeader} isPageTop={isPageTop}>
      <div className="content-header">
        <Link href={"/"}>
          <a className="homeLink">
            <h1>Wesley Guerra</h1>
          </a>
        </Link>

        <nav>
          <ul>
            <li>
              <button onClick={() => scrollToSection(aboutRef)}>
                {t("about")}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(skillsRef)}>
                {t("skills")}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(portfolioRef)}>
                {t("portfolio")}
              </button>
            </li>
            <li>
              <button onClick={() => scrollToSection(contactRef)}>
                {t("contact")}
              </button>
            </li>
          </ul>
        </nav>

        <div className="buttons-header">
          <ButtonSwitchLang />
          <button className="btn-menuMobile" onClick={toggleShowMenu}>
            <CgMenuRight fontSize={28} />
          </button>
        </div>
      </div>
    </HeaderContainer>
  );
};
