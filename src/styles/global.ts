import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",

        "&:focus": {
            outline: "4px solid rgba(34, 126, 240, 0.55)",
        },
    },

    html: {
        fontSize: "62.5%",
    },

    body: {
        backgroundColor: "$gray800",
        "-webkit-font-smoothing": "antialiased",
    },

    "body, input, textarea, button": {
        fontFamily: "$poppins",
        fontWeight: "$400",
    },

    a: {
        textDecoration: "none",
        cursor: "pointer",
    },

    button: {
        border: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
    },
});
