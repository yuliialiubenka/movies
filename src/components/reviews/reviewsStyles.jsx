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
    },
    reviewAuthor: {

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
