import React from "react";

import Link from "next/link";
import { HeaderContainer } from "./styles";
import { IoSunnyOutline } from "react-icons/io5"; /*Sun icon for light theme */
import { CgMenuRight } from "react-icons/cg"; /*Menu icon*/
import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";
import { PageContext } from "../../contexts/PageContext";

export const Header = () => {
    const { toggleShowMenu } = useContext(HeaderContext);
    const {
        scrollToSection,
        aboutRef,
        skillsRef,
        portfolioRef,
        contactRef,
        isVisibleHeader,
        handlePageTop,
    } = useContext(PageContext);

    return (
        <HeaderContainer
            visibleHeader={isVisibleHeader}
            isPageTop={handlePageTop}
        >
            <div className="content-header">
                <Link href={"/"}>
                    <a className="homeLink">
                        <h1>Bruno Guerra</h1>
                    </a>
                </Link>

                <nav>
                    <ul>
                        <li>
                            <button onClick={() => scrollToSection(aboutRef)}>
                                Sobre
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(skillsRef)}>
                                Habilidades
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => scrollToSection(portfolioRef)}
                            >
                                Portfolio
                            </button>
                        </li>
                        <li>
                            <button onClick={() => scrollToSection(contactRef)}>
                                Contato
                            </button>
                        </li>
                    </ul>
                </nav>
                <div className="buttons-header">
                    {/* <button className="btn-toggleTheme">
                        <IoSunnyOutline size={22} />
                    </button> */}
                    <button className="btn-menuMobile" onClick={toggleShowMenu}>
                        <CgMenuRight size={25} />
                    </button>
                </div>
            </div>
        </HeaderContainer>
    );
};
