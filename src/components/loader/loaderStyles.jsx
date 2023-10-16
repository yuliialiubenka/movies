import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loaderWrapper: {
    "& .loader": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      height: "calc(100vh - 96px)",
      width: "100%",
      left: 0,
      top: 96,
      zIndex: 11,
    }
  }
});
