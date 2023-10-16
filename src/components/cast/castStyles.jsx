import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    list: {
      listStyleType: "none",
      display: "flex",
      flexWrap: "wrap",
      gap: 15,
      paddingTop: 15,
      justifyContent: "center",
      borderTop: "3px solid #ffe454b0",
      marginTop: 15,
    },
    listItem: {
      width: "calc((100% - 15px * 4) / 5)",

      "@media screen and (max-width: 1024px)": {
        width: "calc((100% - 15px * 3) / 4)",
      },

      "@media screen and (max-width: 768px)": {
        width: "calc((100% - 15px) / 2)",
        display: "flex",
        flexDirection: "column",
      }
    },
    listItemImage: {
      width: "100%",
      objectFit: "cover",
      borderRadius: 8,
      boxShadow: "0px 4px 10px 0px rgba(9, 9, 9, 0.61)",
      height: 300,
      objectPosition: "top",

      "@media screen and (max-width: 768px)": {
        height: "65vw"
      },
    },
    listItemInfo: {
      "@media screen and (max-width: 768px)": {
        flexGrow: 1,
      },
    },
    name: {
      fontWeight: 700,
      fontSize: 18,
      marginBottom: 4,
      marginTop: 4,
      textAlign:  "center",

      "@media screen and (max-width: 768px)": {
        fontSize: 14,
      },
    },
    character: {
      maxWidth: "fit-content",
      margin: "auto",
      fontWeight: 600,
      background: "#ffe454b0",
      padding: "4px 8px",
      borderRadius: 4,
      fontSize: 16,
      textAlign: "center",

      "@media screen and (max-width: 768px)": {
        fontSize: 12,
      },
    },
});
