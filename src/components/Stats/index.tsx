import { StatsContainer } from "./styles";
import { FaBug } from "react-icons/fa"; /*Bug icon */
import { RiGitRepositoryLine } from "react-icons/ri"; /*Repository icon */
import { MdTimer } from "react-icons/md"; /*Timer icon */
import { MdOutlineLightbulb } from "react-icons/md"; /*Light icon */
import { ProfileContext } from "../../contexts/ProfileContext";
import { useContext } from "react";

export const Stats = () => {
    const { amountRepositories } = useContext(ProfileContext);

    return (
        <StatsContainer>
            <div className="cardStats">
                <div className="icon">
                    <FaBug size={40} />
                </div>
                <h3>40+</h3>
                <p>Debugs realizados</p>
            </div>

            <div className="cardStats">
                <div className="icon">
                    <RiGitRepositoryLine size={40} />
                </div>
                <h3>{amountRepositories}</h3>
                <p>Projetos</p>
            </div>

            <div className="cardStats">
                <div className="icon">
                    <MdTimer size={40} />
                </div>
                <h3>3800+</h3>
                <p>Horas</p>
            </div>

            <div className="cardStats">
                <div className="icon">
                    <MdOutlineLightbulb size={40} />
                </div>
                <h3>100</h3>
                <p>Ideias surreais</p>
            </div>
        </StatsContainer>
    );
};
