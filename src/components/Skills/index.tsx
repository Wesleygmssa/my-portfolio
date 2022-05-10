import { useContext } from "react";
import { PageContext } from "../../contexts/PageContext";
import { CardSkill } from "../CardSkill";
import { TitleSection } from "../TitleSection";
import { SkillsContainer } from "./styles";

export const Skills = () => {
    const { skillsRef } = useContext(PageContext);

    return (
        <SkillsContainer ref={skillsRef}>
            <div className="contentSkills">
                <div className="titleSkills">
                    <p>
                        Todas as tecnologias que utilizei para criação de
                        websites e webapps, com marcação das tecnologias mais
                        ativas no momento.
                    </p>
                    <TitleSection>Habilidades</TitleSection>
                </div>

                <div className="category">
                    <div className="title-category">
                        <h4>Backend</h4>
                    </div>
                    <div className="category-content">
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./mongodb.svg"
                            nameSkill="MongoDB"
                            typeSkill="Banco de Dados"
                            key={0}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./mysql.svg"
                            nameSkill="MySQL"
                            typeSkill="Banco de Dados"
                            key={1}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./nodejs.svg"
                            nameSkill="NodeJS"
                            typeSkill="Software"
                            key={2}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./express.svg"
                            nameSkill="Express"
                            typeSkill="Framework NodeJS"
                            key={14}
                        />
                    </div>
                </div>

                <div className="category">
                    <div className="title-category">
                        <h4>Frontend Frameworks e Biblioteca</h4>
                    </div>
                    <div className="category-content">
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="ReactJS"
                            pathIconSkill="./reactjs.svg"
                            typeSkill="Biblioteca JS"
                            key={3}
                        />
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="NextJS"
                            pathIconSkill="./nextjs.svg"
                            typeSkill="Framework React"
                            key={4}
                        />
                        <CardSkill
                            isSkillActive={false}
                            nameSkill="JQuery"
                            pathIconSkill="./jquery.svg"
                            typeSkill="Framework JS"
                            key={5}
                        />
                        <CardSkill
                            isSkillActive={false}
                            nameSkill="Bootstrap"
                            pathIconSkill="./bootstrap.svg"
                            typeSkill="Framework CSS"
                            key={6}
                        />
                        <CardSkill
                            isSkillActive={false}
                            nameSkill="Sass e Less"
                            pathIconSkill="./sass.svg"
                            typeSkill="Framework CSS"
                            key={7}
                        />
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="Styled Components"
                            pathIconSkill="./styled-components.png"
                            typeSkill="CSS in JS"
                            key={8}
                        />
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="Typescript"
                            pathIconSkill="./typescript.svg"
                            typeSkill="Superset JS"
                            key={9}
                        />
                    </div>
                </div>

                <div className="category">
                    <div className="title-category">
                        <h4>Linguagens</h4>
                    </div>
                    <div className="category-content">
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./html.svg"
                            nameSkill="HTML"
                            typeSkill="Linguagem de Marcação"
                            key={10}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./css.svg"
                            nameSkill="CSS"
                            typeSkill="Linguagem de Estilização"
                            key={11}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./javascript.svg"
                            nameSkill="Javascript"
                            typeSkill="Linguagem de Programação"
                            key={12}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./sql.png"
                            nameSkill="SQL"
                            typeSkill="Linguagem de consulta padrão"
                            key={13}
                        />
                    </div>
                </div>
            </div>
        </SkillsContainer>
    );
};
