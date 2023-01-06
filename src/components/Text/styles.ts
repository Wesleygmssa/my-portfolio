import { styled } from "../../styles/stitches.config";

export const Text = styled("p", {
    variants: {
        size: {
            xs: {
                fontSize: "$xs",
                fontWeight: "$400",
            },
            sm: {
                fontSize: "$sm",
                fontWeight: "$400",
            },
            md: {
                fontSize: "$md",
                fontWeight: "$500",
            },
            lg: {
                fontSize: "$lg",
                fontWeight: "$600",
            },
            xl: {
                fontSize: "$xl",
                fontWeight: "$700",
            },
        },

        color: {
            white: {
                color: "$gray100",
            },
            gray: {
                color: "$gray200",
            },
            blue: {
                color: "$blue500",
            },
        },
    },
});
