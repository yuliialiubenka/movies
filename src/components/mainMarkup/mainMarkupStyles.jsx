import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    container: {
      position: "relative",
      maxWidth: 1200,
      marginLeft: "auto",
      marginRight: "auto",
      padding: 15,
      minHeight: "100vh",
      background: "rgba(255, 255, 255, 0.4)"
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      borderBottom: "1px solid #fff",
      marginBottom: 20,
      padding: 12,
      background: "#fff",
      borderRadius: 8

    },
    logo: {
      display: "flex",
      alignItems: "center",
      fontWeight: 900,
      fontSize: 64,
      lineHeight: 0.8,
      transform: "translate(0, -3px)",
    },
    logoImage: {
      transform: "translate(-4px, 4px)",
    },
    linksWrap: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      paddingRight: 8,

    },
    link: {
      display: "inline-block",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: 22,
      color: "#000",
    
      "&:hover": {
        color: "#ff9254"
      },

      "&.active": {
        color: "#ff9254"
      }
    }
});
