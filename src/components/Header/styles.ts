import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: var(--header);
    -moz-backdrop-filter: blur(1rem);
    backdrop-filter: blur(1rem);
    z-index: 9;

    .content-header {
        width: min(110rem, 90%);
        margin: 0 auto;
        padding: 2rem 0;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 3rem;
        a.homeLink {
            h1 {
                padding: 0 0.5rem;
                font-size: 2.2rem;
            }
        }
        nav {
            margin-top: 0.5rem;
            margin-right: auto;
            ul {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
                li {
                    list-style: none;
                    border-bottom: 0.3rem solid transparent;
                    transition: all 0.2s ease;
                    button {
                        padding: 1rem;
                        color: var(--text-secondary);
                        transition: all 0.2s ease;
                    }
                    &:hover {
                        border-bottom-color: var(--blue);
                        button {
                            color: var(--text-primary);
                        }
                    }
                }
            }
        }

        .buttons-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            button {
                width: 4rem;
                height: 4rem;
                border-radius: 1rem;
                font-size: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.2s ease;
                &.btn-toggleTheme {
                    background-color: var(--orange);
                    color: var(--body);

                    &:hover {
                        filter: brightness(0.7);
                    }
                }
                &.btn-menuMobile {
                    display: none;
                }
            }
        }
        @media (max-width: 768px) {
            nav {
                display: none;
            }
            .buttons-header {
                button {
                    &.btn-menuMobile {
                        display: block;
                    }
                }
            }
        }
    }
`;
