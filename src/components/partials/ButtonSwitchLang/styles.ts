import styled from "styled-components";

import * as Popover from "@radix-ui/react-popover";
import Router from "next/router";

export const Content = styled(Popover.Content)`
    background-color: var(--boxes);
    /* border: 0.4rem solid rgba(34, 126, 240, 0.55); */
    border-radius: 6px;

    padding: 2rem;

    width: 20rem;
    height: auto;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    &[data-state="open"] {
        animation: fadeIn 0.1s ease-out;
    }

    &[data-state="closed"] {
        animation: fadeOut 0.2s ease-in;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Close = styled(Popover.Close)`
    line-height: 0;
`;

export const ContainerOptionsLang = styled.div`
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
`;

interface ButtonOptionLangProps {
    "data-lang": "pt-BR" | "en";
}

export const ButtonOptionLang = styled.button<ButtonOptionLangProps>`
    font-size: 1.8rem;

    color: ${(props) =>
        props["data-lang"] === Router.locale
            ? "var(--text-primary)"
            : "var(--text-secondary)"};

    &:hover {
        color: var(--text-primary);
    }
`;
