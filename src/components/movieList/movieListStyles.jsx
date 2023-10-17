import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    filmsWrapper: {
      listStyleType: "none",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      paddingTop: 15,
      gap: 15,
    },
    filmCard: {
      fontWeight: 600,
      fontSize: 14,
      width: "calc((100% - 6 * 15px) / 7)",
      borderRadius: 8,
      position: "relative",
      cursor: "pointer",

      "@media screen and (max-width: 1024px)": {
        width: "calc((100% - 4 * 15px) / 5)",
      },

      "@media screen and (max-width: 768px)": {
        width: "calc((100% - 15px) / 2)",
      },

      "& a": {
        textDecoration: "none",
        color: "#000",

        "@media screen and (max-width: 768px)": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        },
      },

      "&:hover": {
        boxShadow: "0px 4px 10px 0px rgba(9, 9, 9, 0.61)",
      }
    },
    filmCardOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 80%)",
      opacity: 0,
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 8,

      "&:hover": {
        opacity: 1,
      },

      "@media screen and (max-width: 768px)": {
        position: "static",
        opacity: 1,
        height: "auto",
        borderRadius: "0 0 8px 8px",
        flexGrow: "1",
        background: "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
        textAlign: "center",
        justifyContent: "center",
        minHeight: 50
      },
    },

    filmCardInfo: {
      display: "flex",
      justifyContent: "space-between",

      "@media screen and (max-width: 768px)": {
        display: "none"
      },
    },
    filmCardImage: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
      objectFit: "cover",

      "@media screen and (max-width: 768px)": {
        borderRadius: "8px 8px 0 0",
      },
    },
    filmCardTitle: {
      textDecoration: "none",
      marginBottom: 8,

      "@media screen and (max-width: 768px)": {
        marginBottom: 0,
      },
    }
});
