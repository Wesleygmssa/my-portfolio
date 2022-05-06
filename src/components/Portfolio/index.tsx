import Link from "next/link";
import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { ProfileContext } from "../../contexts/ProfileContext";
import { CardProject } from "../CardProject";
import { TitleSection } from "../TitleSection";
import { PortfolioContainer } from "./styles";

export const Portfolio = () => {
    const { listRepositories, loadMoreRepositories } =
        useContext(ProfileContext);
    const { portfolioRef } = useContext(PageContext);

    return (
        <PortfolioContainer ref={portfolioRef}>
            <div className="content">
                <div className="title-portfolio">
                    <TitleSection>Portfolio</TitleSection>
                    <p>
                        Todos os meus projetos listados no meu{" "}
                        <Link href="https://www.github.com/brunorguerra">
                            <a>Github</a>
                        </Link>
                        , espero que gostem.
                    </p>
                </div>
                <div className="content-portfolio">
                    {listRepositories.map((repository, index) => (
                        <CardProject
                            title={repository.name}
                            description={repository.description}
                            repository={repository.html_url}
                            website={repository.homepage}
                            imageUrl={`https://raw.githubusercontent.com/brunorguerra/${repository.name}/main/printscreen/application.png`}
                            key={index}
                        />
                    ))}
                    <button
                        className="loadMoreRepositories"
                        onClick={loadMoreRepositories}
                    >
                        <p>Ver Mais</p>
                    </button>
                </div>
            </div>
        </PortfolioContainer>
    );
};
