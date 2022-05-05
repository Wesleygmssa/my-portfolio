import { MenuMobileContainer } from "./styles";
import { IoClose } from "react-icons/io5";
import { useContext } from "react";
import { HeaderContext } from "../../contexts/HeaderContext";

export const MenuMobile = () => {
    const { activeMenu, toggleShowMenu } = useContext(HeaderContext);

    return (
        <MenuMobileContainer activeMenu={activeMenu}>
            <button className="closeMenu" onClick={toggleShowMenu}>
                <IoClose size={30} />
            </button>
            <ul>
                <li>
                    <button>Sobre</button>
                </li>
                <li>
                    <button>Habilidades</button>
                </li>
                <li>
                    <button>Portfolio</button>
                </li>
                <li>
                    <button>Contato</button>
                </li>
            </ul>
        </MenuMobileContainer>
    );
};
