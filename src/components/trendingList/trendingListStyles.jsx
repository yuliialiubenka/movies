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

      "& a": {
        textDecoration: "none",
        color: "#000",
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
      }
    },

    filmCardInfo: {
      display: "flex",
      justifyContent: "space-between"
    },
    filmCardImage: {
      width: "100%",
      height: "100%",
      borderRadius: 8,
      objectFit: "cover",
    },
    filmCardTitle: {
      textDecoration: "none",
      marginBottom: 8,
    }
});
