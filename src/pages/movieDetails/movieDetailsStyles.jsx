import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    display: "flex",
    marginTop: 35,
    gap: 15
  },
  image: {
    borderRadius: 8,
    boxShadow: "0px 4px 10px 0px rgba(9, 9, 9, 0.61)",
    objectFit: "cover"
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    padding: 15,
    background: "#ffffffa6",
    borderRadius: 8,
    lineHeight: 1.3,
    width: "100%",
  },
  title: {
    textAlign: "left",
  },
  infoWrap: {
    display: "flex",
    alignItems: "center",
    gap: 12,

    "& h2": {
      fontSize: 24,

      "@media screen and (max-width: 1024px)": {
        fontSize: 18
      }
    },

    "& p": {
      fontSize: 16,
      background: "#ffe454b0",
      padding: "2px 6px",
      borderRadius: 4,
      fontWeight: 600,
    }
  },
  list: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    listStyle: "none",
    margin: 0,
    padding: 0,
    listStyleType: "none",

    "& li": {
      fontSize: 16,
      background: "#ffe454b0",
      padding: "2px 6px",
      borderRadius: 4,
      fontWeight: 600,
    }
  },
  infoList: {
    display: "flex",
    gap: 12,
    listStyle: "none",
    margin: 0,
    padding: 0,
    listStyleType: "none",
  },
  infoListItem: {
    "& a": {
      fontSize: 16,
      background: "#ffe454b0",
      padding: "2px 6px",
      borderRadius: 4,
      fontWeight: 600,
      color: "#000",
      textDecoration: "none",

      "&:hover": {
        boxShadow: "0px 4px 10px 0px rgba(9, 9, 9, 0.61)",
      }
    }
  },
  link: {
    display: "block",
    textDecoration: "none",
    color: "#000",
    marginTop: "-82px",
    marginLeft: "calc(100% - 230px)",

    "&:hover": {
    }
  },
  button: {
    border: "none",
    background: "transparent",
    cursor: "pointer",

    "& img": {
      transform: "rotate(180deg)"
    },

    "&:hover": {
    }
  },
  overview: {
    textAlign: "justify",
  }
});
