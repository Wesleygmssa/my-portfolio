import Link from "next/link";
import styled from "styled-components";
import NextHead from "../components/NextHead";
import { IoReturnDownBackSharp } from "react-icons/io5";

export default function Custom404() {
    return (
        <>
            <NextHead
                title="Página Não Encontrada"
                faviconPath="favicon-404.svg"
            />
            <NotFoundContainer>
                <div className="overlay"></div>
                <div className="content">
                    <div className="image">
                        <img src="./notfound.svg" alt="Página não encontrada" />
                    </div>

                    <div className="link">
                        <h1>Página não encontrada</h1>
                        <p>
                            A página que você está procurando pode ter sido
                            removida, ou está temporariamente indisponível
                        </p>
                        <Link href={"/"}>
                            <a>
                                <IoReturnDownBackSharp size={30} />
                                Voltar para o início
                            </a>
                        </Link>
                    </div>
                </div>
            </NotFoundContainer>
        </>
    );
}

const NotFoundContainer = styled.div`
    background: var(--body) url(./background-404.svg) no-repeat center/cover;

    position: relative;
    .overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        background: var(--body);
        z-index: 1;
        opacity: 0.8;
    }
    .content {
        position: relative;
        z-index: 2;

        width: 100%;
        min-height: 100vh;

        padding: 4rem;

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
                font-size: 3.5rem;
                text-transform: uppercase;
            }
            p {
                color: var(--text-secondary);
                font-size: 2rem;
                font-weight: 400;
                max-width: 38rem;
            }
            a {
                width: 25rem;
                height: 5rem;
                border-radius: 1rem;
                text-align: center;
                display: flex;
                flex-flow: row wrap;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                background: var(--blueGradient);
                transition: all 0.2s ease;
                &:hover {
                    background: var(--blueGradientHover);
                }
            }

            @media (max-width: 570px) {
                p {
                    max-width: 100%;
                    text-align: center;
                }
                a {
                    width: 100%;
                }
            }
        }
        .image {
            width: 40rem;
            img {
                max-width: 100%;
                width: auto;
            }
        }
    }
`;
