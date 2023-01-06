import { createStitches } from "@stitches/react";

import { Poppins } from "@next/font/google";

const poppins400 = Poppins({
    preload: true,
    weight: ["400"],
});

const poppins500 = Poppins({
    preload: true,
    weight: ["500"],
});

const poppins600 = Poppins({
    preload: true,
    weight: ["600"],
});

const poppins700 = Poppins({
    preload: true,
    weight: ["700"],
});

export const {
    styled,
    css,
    globalCss,
    keyframes,
    getCssText,
    theme,
    createTheme,
    config,
} = createStitches({
    theme: {
        colors: {
            gray800: "#151718",
            "gray800-opacity": "rgba(21, 23, 24, 0.35)",
            gray750: "#202024",
            gray700: "#202325",
            gray600: "#242830",
            gray200: "#a8a8b3",
            gray100: "#e1e1e7",

            blue600: "#0e6ac2",
            blue500: "#097dea",
            "blue500-opacity": "rgba(34, 126, 240, 0.4)",

            purple: "#6e57e0",
            orange: "#f6ad55",
        },

        fontSizes: {
            xs: "1.6rem",
            sm: "1.8rem",
            md: "2.2rem",
            lg: "3.0rem",
            xl: "4.6rem",
        },

        fonts: {
            poppins: poppins400.style.fontFamily,
        },

        fontWeights: {
            400: poppins400.style.fontWeight || 400,
            500: poppins500.style.fontWeight || 500,
            600: poppins600.style.fontWeight || 600,
            700: poppins700.style.fontWeight || 700,
        },
    },
});
