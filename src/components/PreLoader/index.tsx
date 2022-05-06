import NextHead from "../NextHead";
import { PreLoaderContainer } from "./styles";

const PreLoader = () => {
    return (
        <>
            <NextHead title="Portfolio Bruno Guerra - Desenvolvedor Frontend" />
            <PreLoaderContainer>
                <img src="./loading.gif" alt="" />
            </PreLoaderContainer>
        </>
    );
};

export default PreLoader;
