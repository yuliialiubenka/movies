import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    form: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-82px",
      marginBottom: 18,

      "@media screen and (max-width: 1024px)": {
        marginTop: 0,
      }
    },
    input: {
      padding: "6px 12px",
      font: "inherit",
      cursor: "pointer",
      borderRadius: 8,
      border: "3px solid #000",
      fontWeight: 600,
      fontSize: 20,
      outline: "none",

      "@media screen and (max-width: 480px)": {
        width: "calc(100% - 48px)",
      },

      "&:hover, &:focus": {
        color: "#000",
        border: "3px solid #ff9254",
      },

      "&::placeholder": {
        color: "#ff9254",
      }
    },
    button: {
      background: 'transparent',
      cursor: "pointer",
      border: "none",
    },

    buttonIcon: {
      height: 42,
      marginLeft: 6,
    }
});

