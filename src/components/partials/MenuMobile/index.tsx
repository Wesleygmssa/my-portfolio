import { MenuMobileContainer } from "./styles";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { HeaderContext } from "../../../contexts/HeaderContext";
import { PageContext } from "../../../contexts/PageContext";

export const MenuMobile = () => {
    const { activeMenu, toggleShowMenu } = useContext(HeaderContext);
    const { scrollToSection, aboutRef, skillsRef, portfolioRef, contactRef } =
        useContext(PageContext);

    return (
        <MenuMobileContainer activeMenu={activeMenu}>
            <button className="closeMenu" onClick={toggleShowMenu}>
                <IoClose size={30} />
            </button>
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
                    <button onClick={() => scrollToSection(portfolioRef)}>
                        Portfolio
                    </button>
                </li>
                <li>
                    <button onClick={() => scrollToSection(contactRef)}>
                        Contato
                    </button>
                </li>
            </ul>
        </MenuMobileContainer>
    );
};
