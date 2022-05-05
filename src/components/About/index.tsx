import Link from "next/link";
import { TitleSection } from "../TitleSection";
import { AboutContainer } from "./styles";

export const About = () => {
    return (
        <AboutContainer>
            <div className="contentAbout">
                <div className="textAbout">
                    <TitleSection>Sobre</TitleSection>
                    <p>
                        Eu me chamo Bruno Guerra, tenho 17 anos, Atualmente
                        tenho experiência em Desenvolvimento Web, estou
                        estudando para Criar Aplicativos. Sempre gostei de
                        tecnologia, aos 12 anos de idade criei meu primeiro
                        plugin em Java, porém abandonei a linguagem há 5 anos. E
                        agora estou me dedicando para se tornar um Full Stack.
                    </p>
                    <div className="linkSocial">
                        <Link href="https://github.com/brunorguerra">
                            <a href="" title="Ir para o GitHub de Bruno Guerra">
                                <img src="./github.svg" alt="Logo do Github" />
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/bruno.bernardees/">
                            <a
                                href=""
                                title="Ir para o Instagram de Bruno Guerra"
                            >
                                <img
                                    src="./instagram.svg"
                                    alt="Logo do Instagram"
                                />
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/brunorguerra/">
                            <a
                                href=""
                                title="Ir para o Linkedin de Bruno Guerra"
                            >
                                <img
                                    src="./linkedin.svg"
                                    alt="Logo do Linkedin"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="image">
                    <img
                        src="./profile.png"
                        alt="Foto de Perfil Bruno Guerra"
                    />
                </div>
            </div>
        </AboutContainer>
    );
};
