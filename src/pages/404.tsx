import Link from "next/link";
import styled from "styled-components";
import NextHead from "../components/NextHead";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function Custom404() {
    return (
        <>
            <NextHead title="Página Não Encontrada" />
            <NotFoundContainer>
                <div className="image">
                    <img src="./notfound.svg" alt="Página não encontrada" />
                </div>

                <div className="link">
                    <h1>Página não encontrada</h1>
                    <Link href={"/"}>
                        <a>
                            <IoReturnDownBackSharp size={30} />
                            Voltar para o início
                        </a>
                    </Link>
                </div>
            </NotFoundContainer>
        </>
    );
}

const NotFoundContainer = styled.div`
    padding: 4rem;
    width: 100%;
    min-height: 100vh;
    background-color: var(--body);
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: 7rem;
    row-gap: 3rem;
    .link {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        h1 {
            text-align: center;
            font-size: 3rem;
            text-transform: uppercase;
        }
        a {
            text-align: center;
            display: flex;
            flex-flow: row wrap;
            align-items: center;
            gap: 1rem;
            color: var(--text-secondary);
        }
    }
    .image {
        width: 40rem;
        img {
            max-width: 100%;
            width: auto;
        }
    }
    @media (max-width: 500px) {
        .link {
            a {
                justify-content: center;
            }
        }
    }
`;
