import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    wrapper: {
        paddingTop: "10%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,

        "@media screen and (max-width: 768px)": {
            gap: 10,
        }
    },
    text: {
        fontSize: 24,
        color: "#000",
        fontWeight: 600,
        textAlign: "center",

        "@media screen and (max-width: 768px)": {
            fontSize: 18,
        }
    },
    image: {
        "@media screen and (max-width: 768px)": {
            width: "70%"
        }
    }
});