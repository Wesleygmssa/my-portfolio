import { HomeContainer } from "./styles";
import { RiShareBoxFill } from "react-icons/ri"; /*Share icon*/
import { BsArrowDownShort } from "react-icons/bs"; /*ArrowDown icon*/
import { FiCopy } from "react-icons/fi"; /*Copy icon*/
import Link from "next/link";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";

export const HomePage = () => {
    const { scrollToSection, handleCopyEmailInput, aboutRef } =
        useContext(PageContext);

    return (
        <HomeContainer>
            <h2 className="titleHome">
                Portfólio Profissional de Bruno Guerra
            </h2>
            <p className="descriptionHome">
                Desenvolvedor Frontend, Criação de Sites com Design Inteligente,
                SEO e Código Estruturado
            </p>
            <div className="links">
                <button
                    onClick={() => scrollToSection(aboutRef)}
                    title="Conhecer mais sobre Bruno Guerra"
                >
                    <span>Conhecer Sobre</span>
                    <BsArrowDownShort size={25} className="iconArrow" />
                </button>
                <Link href="https://github.com/brunorguerra">
                    <a title="Ir para o GitHub de Bruno Guerra">
                        <span>GitHub</span> <RiShareBoxFill size={18} />
                    </a>
                </Link>
            </div>
            <div className="email">
                <div className="text-mail">
                    <p>brunoguerracontact@gmail.com</p>
                </div>
                <button
                    title="Copiar Endereço de Email"
                    onClick={handleCopyEmailInput}
                >
                    <FiCopy size={20} className="iconCopy" />
                </button>
            </div>
        </HomeContainer>
    );
};
