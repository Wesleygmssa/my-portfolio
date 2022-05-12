import Link from "next/link";
import { FooterContainer } from "./styles";
import { FaLevelUpAlt } from "react-icons/fa";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

export const Footer = () => {
    const { scrollPageTop } = useContext(PageContext);

    return (
        <FooterContainer>
            <div className="content">
                <div className="texts">
                    <p>Todos os Direitos Reservados, © 2022 Bruno Guerra.</p>
                    <div className="socials">
                        <Link href={"https://www.linkedin.com/in/brunorguerra/"}>
                            <a title="Ir para o Linkedin de Bruno Guerra">
                                <img
                                    src="./linkedin.svg"
                                    alt="Logo do Linkedin"
                                />
                            </a>
                        </Link>
                        <Link href={"https://github.com/brunorguerra"}>
                            <a title="Ir para o Github de Bruno Guerra">
                                <img src="./github.svg" alt="Logo do Github" />
                            </a>
                        </Link>
                        <Link href={"https://www.instagram.com/bruno.bernardees/"}>
                            <a title="Ir para o Instagram de Bruno Guerra">
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
                    title="Ir para o início da página"
                >
                    <span>Home</span>
                    <FaLevelUpAlt size={30} />
                </button>
            </div>
        </FooterContainer>
    );
};
