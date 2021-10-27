import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        textAlign: "center",
        cursor: "pointer",
        color: "#333",
        padding: "10px",
        marginTop: "20px",
    },
    icon: {
        marginTop: "16px",
        color: "#888888",
        fontSize: "42px",
    },
}));