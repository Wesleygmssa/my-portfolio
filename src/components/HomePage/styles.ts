import styled from "styled-components";

export const HomeContainer = styled.section`
    width: 100%;
    padding: 12rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    h2.titleHome {
        font-size: 4.5rem;
        max-width: 50rem;
        text-align: center;
        font-weight: 600;
        line-height: 5.3rem;
    }
    p.descriptionHome {
        font-size: 2.1rem;
        font-weight: 400;
        max-width: 50rem;
        text-align: center;
        color: var(--text-secondary);
        margin-top: 2rem;
    }
    .links {
        margin-top: 6rem;
        display: flex;
        align-items: center;
        gap: 2rem;
        button,
        a {
            padding: 1rem 2rem;
            border-radius: 3rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: all 0.2s ease;
        }
        button {
            background-color: var(--blue);
            .iconArrow {
                transition: all 0.2s ease;
            }
            &:hover {
                background-color: var(--blueHover);
                .iconArrow {
                    transform: translateY(0.3rem);
                }
            }
        }
        a {
            &:hover {
                background-color: var(--boxes);
            }
        }
    }
    .email {
        width: 40rem;
        background-color: var(--boxes);
        padding: 1.4rem 2rem;
        border-radius: 3rem;
        display: flex;
        align-items: center;
        margin-top: 6rem;
        position: relative;
        .text-mail {
            width: 100%;
            overflow-x: auto;
            p {
                min-width: 28rem;
            }
        }
        button {
            margin-left: 1rem;
            font-size: 0;
            padding: 0.6rem;
            border-radius: 0.3rem;
            &:hover {
                background-color: var(--container);
            }
        }
    }
    &::after {
        z-index: -1;
        content: "";
        position: absolute;
        left: 17%;
        top: 60%;
        background-color: var(--purple);
        width: 0.1rem;
        height: 0.1rem;
        filter: blur(1rem);
        border-radius: 50%;
        box-shadow: 0 0 25rem 10rem var(--purple);
    }
    &::before {
        z-index: -1;
        content: "";
        position: absolute;
        right: 17%;
        top: 30%;
        background-color: var(--blue);
        width: 0.1rem;
        height: 0.1rem;
        filter: blur(1rem);
        border-radius: 50%;
        box-shadow: 0 0 25rem 10rem var(--blue);
    }
    @media (max-width: 475px) {
        h2.titleHome {
            font-size: 3.8rem;
        }
        p.descriptionHome {
            font-size: 1.9rem;
        }
        .email {
            width: 100%;
        }
    }
    @media (max-width: 400px) {
        .links {
            flex-direction: column-reverse;
        }
    }
    @media (max-width: 320px) {
    }
`;
