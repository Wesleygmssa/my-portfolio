import styled from "styled-components";

type MenuMobileProps = {
    activeMenu: boolean;
};

export const MenuMobileContainer = styled.nav<MenuMobileProps>`
    display: none;
    @media (max-width: 768px) {
        visibility: ${(props) => (props.activeMenu ? "visible" : "hidden")};
        opacity: ${(props) => (props.activeMenu ? "1" : "0")};
        display: block;
        position: fixed;
        inset: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
        background-color: var(--boxes);
        transition: all 0.2s ease;
        ul {
            width: inherit;
            height: inherit;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2rem;
            li {
                list-style: none;
                button {
                    padding: 1rem 2rem;
                    font-size: 2rem;
                }
            }
        }
        button.closeMenu {
            position: absolute;
            right: ${(props) => (props.activeMenu ? "2rem" : "4rem")};
            top: 2rem;
            width: 4rem;
            height: 4rem;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }
    }
`;
