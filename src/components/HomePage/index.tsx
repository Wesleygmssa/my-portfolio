import { HomeContainer } from "./styles";
import { RiShareBoxFill } from "react-icons/ri"; /*Share icon*/
import { BsArrowDownShort } from "react-icons/bs"; /*ArrowDown icon*/
import { FiCopy } from "react-icons/fi"; /*Copy icon*/
import Link from "next/link";

export const HomePage = () => {
    return (
        <HomeContainer>
            <h2 className="titleHome">
                Portfólio Profissional de Bruno Guerra
            </h2>
            <p className="descriptionHome">
                Desenvolvedor Frontend, Criação de Sites com Design Inteligente,
                SEO e Acessibilidade
            </p>
            <div className="links">
                <button>
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
                <button title="Copiar Endereço de Email">
                    <FiCopy size={20} className="iconCopy" />
                </button>
            </div>
        </HomeContainer>
    );
};
