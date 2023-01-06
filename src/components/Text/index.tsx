import { ReactNode } from "react";

// Components
import { Slot } from "@radix-ui/react-slot";

// Styles
import * as S from "./styles";

export interface TextProps {
    asChild?: boolean;
    children: ReactNode;
    color?: "white" | "gray" | "blue";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const Text = ({
    color = "white",
    size = "md",
    asChild = false,
    children,
}: TextProps) => {
    const Comp = asChild ? Slot : "p";

    return (
        <S.Text color={color} size={size} as={Comp}>
            {children}
        </S.Text>
    );
};
