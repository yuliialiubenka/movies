import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    list: {
      display: "flex",
      flexDirection: "column",
      gap: 15,
      listStyleType: "none",
      paddingTop: 15,
      marginTop: 15,
      borderTop: "3px solid #ffe454b0",
    },

    noReviewsText: {
      paddingTop: 15,
      marginTop: 15,
      borderTop: "3px solid #ffe454b0",
      textAlign: "center",
      fontSize: 24,
      color: "#000",
      fontWeight: 600,
    },

    listItem: {
      display: "flex",
      gap: 15,
      alignItems: "flex-start",
      position: "relative"
    },
    listItemInfo: {
      padding: 15,
      background: "#ffffffa6",
      borderRadius: 8,
      lineHeight: 1.3,
    },

    listItemIcon: {
      background: "#fff",
      padding: 6,
      borderRadius: 8,

      "@media screen and (max-width: 768px)": {
        position: "absolute",
        width: 60,
        left: 15,
        top: 15
      }
    },
    reviewAuthor: {
      "@media screen and (max-width: 768px)": {
        marginLeft: 70,
        marginTop: 10,
      }
    },
    reviewContent: {
      padding: 10,
      fontSize: 16,
      background: "#fff",
      fontWeight: 500,
      borderRadius: 8,
      lineHeight: 1.3,
      marginTop: 15,
      textAlign: "justify"
    }
});
