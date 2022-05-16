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
                            key={0}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./mysql.svg"
                            nameSkill="MySQL"
                            typeSkill={t("relationalDB")}
                            key={1}
                        />
                        <CardSkill
                            isSkillActive={false}
                            pathIconSkill="./sqlite.svg"
                            nameSkill="SQLite"
                            typeSkill={t("relationalDB")}
                            key={2}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./nodejs.svg"
                            nameSkill="NodeJS"
                            typeSkill="Software"
                            key={14}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./express.svg"
                            nameSkill="Express"
                            typeSkill="Framework NodeJS"
                            key={15}
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
                        <h4>{t("languages")}</h4>
                    </div>
                    <div className="category-content">
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./html.svg"
                            nameSkill="HTML"
                            typeSkill={t("markupLanguage")}
                            key={10}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./css.svg"
                            nameSkill="CSS"
                            typeSkill={t("stylingLanguage")}
                            key={11}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./javascript.svg"
                            nameSkill="Javascript"
                            typeSkill={t("programmingLanguage")}
                            key={12}
                        />
                        <CardSkill
                            isSkillActive={true}
                            pathIconSkill="./sql.png"
                            nameSkill="SQL"
                            typeSkill={t("queryLanguage")}
                            key={13}
                        />
                    </div>
                </div>
            </div>
        </SkillsContainer>
    );
};
