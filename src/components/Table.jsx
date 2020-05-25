import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Row from "./Row";
import "../Table.css"
const useStyles = makeStyles((theme) => ({
  root: {
    color: "#000FFF",
    flexGrow: 1,
  },
  paper: {
    fontSize: "1em",
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid(props) {
  const classes = useStyles();
  const Rows = ({ rows }) => (
    <>
      {rows.map((row) => (
        <Row key={row[0]} class={classes.paper} data={row}></Row>
      ))}
    </>
  );
  return (
    <div className={classes.root}>
      <h2 className="title">Tabelul încrucișării</h2>
      <Grid container spacing={1}>
        <Rows rows={props.data} />
      </Grid>
    </div>
  );
}
