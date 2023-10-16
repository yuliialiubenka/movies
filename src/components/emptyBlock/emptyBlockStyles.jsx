import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    wrapper: {
        paddingTop: "13%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    text: {
        fontSize: 24,
        color: "#000",
        fontWeight: 600,
    }
});