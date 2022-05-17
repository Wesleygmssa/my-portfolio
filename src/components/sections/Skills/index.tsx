import { useTranslation } from "next-i18next";
import { useContext } from "react";
import { PageContext } from "../../../contexts/PageContext";
import { CardSkill } from "../../partials/CardSkill";
import { TitleSection } from "../../partials/TitleSection";
import { SkillsContainer } from "./styles";

export const Skills = () => {
    const { skillsRef } = useContext(PageContext);
    const { t } = useTranslation();

    return (
        <SkillsContainer ref={skillsRef}>
            <div className="contentSkills">
                <div className="titleSkills">
                    <p>{t("allTechnologies")}</p>
                    <TitleSection>{t("skills")}</TitleSection>
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
                            typeSkill={t("nonRelationalDB")}
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./mysql.svg"
                            nameSkill="MySQL"
                            typeSkill={t("relationalDB")}
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={false}
                            pathIconSkill="./sqlite.svg"
                            nameSkill="SQLite"
                            typeSkill={t("relationalDB")}
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./nodejs.svg"
                            nameSkill="NodeJS"
                            typeSkill="Software"
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./express.svg"
                            nameSkill="Express"
                            typeSkill="Framework NodeJS"
                            key={Math.random()}
                        />
                    </div>
                </div>

                <div className="category">
                    <div className="title-category">
                        <h4>Frontend Frameworks e {t("library")}</h4>
                    </div>
                    <div className="category-content">
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="ReactJS"
                            pathIconSkill="./reactjs.svg"
                            typeSkill={t("library") + " JS"}
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="NextJS"
                            pathIconSkill="./nextjs.svg"
                            typeSkill="Framework React"
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={false}
                            nameSkill="JQuery"
                            pathIconSkill="./jquery.svg"
                            typeSkill="Framework JS"
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={false}
                            nameSkill="Bootstrap"
                            pathIconSkill="./bootstrap.svg"
                            typeSkill="Framework CSS"
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={false}
                            nameSkill="Sass e Less"
                            pathIconSkill="./sass.svg"
                            typeSkill="Framework CSS"
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={false}
                            nameSkill="Tailwind CSS"
                            pathIconSkill="./tailwind.svg"
                            typeSkill="Framework CSS"
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="Styled Components"
                            pathIconSkill="./styled-components.png"
                            typeSkill="CSS in JS"
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="Stitches"
                            pathIconSkill="./stitches.svg"
                            typeSkill="CSS in JS"
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            nameSkill="Typescript"
                            pathIconSkill="./typescript.svg"
                            typeSkill="Superset JS"
                            key={Math.random()}
                        />
                    </div>
                </div>

                <div className="category">
                    <div className="title-category">
                        <h4>{t("languages")}</h4>
                    </div>
                    <div className="category-content">
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./html.svg"
                            nameSkill="HTML"
                            typeSkill={t("markupLanguage")}
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./css.svg"
                            nameSkill="CSS"
                            typeSkill={t("stylingLanguage")}
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./javascript.svg"
                            nameSkill="Javascript"
                            typeSkill={t("programmingLanguage")}
                            key={Math.random()}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./sql.png"
                            nameSkill="SQL"
                            typeSkill={t("queryLanguage")}
                            key={Math.random()}
                        />
                    </div>
                </div>
            </div>
        </SkillsContainer>
    );
};
