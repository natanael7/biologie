import React, { Component } from "react";
import solve from "../logic/fetch";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(./dna.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

export class InputPage extends Component {
  constructor(props) {
    super(props);
    this.state = { mom: "", dad: "" };

    this.handleChangeOfMom = this.handleChangeOfMom.bind(this);
    this.handleChangeOfDad = this.handleChangeOfDad.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.classes = props.classes;
  }

  handleChangeOfMom(event) {
    this.setState({ mom: event.target.value });
  }
  handleChangeOfDad(event) {
    this.setState({ dad: event.target.value });
  }

  handleSubmit(event) {
    const data = solve({
      parents: {
        mom: this.state.mom,
        dad: this.state.dad,
      },
    });
    this.props.handler(data);
    event.preventDefault();
  }

  render() {
    return (
      <Grid container component="main" className={this.classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={this.classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={this.classes.paper}>
            <Avatar className={this.classes.avatar}>
              <img style={{ width: 40, height: 40 }} src="./dna.svg" alt="" />
            </Avatar>
            <Typography component="h1" variant="h5">
              Introduceți genotipul părinților
            </Typography>
            <form
              onSubmit={this.handleSubmit}
              className={this.classes.form}
              noValidate
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="mom"
                label="Genotipul Mamei Exemplu: AaBbCcDD"
                type="text"
                name="mom"
                autoFocus
                value={this.state.mom}
                onChange={this.handleChangeOfMom}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="dad"
                label="Genotipul Tatalui Exemplu: AABBCcDd"
                type="text"
                name="dad"
                value={this.state.dad}
                onChange={this.handleChangeOfDad}
              />
              <Button
                type="submit"
                value="Submit"
                fullWidth
                variant="contained"
                color="primary"
                className={this.classes.submit}
              >
                Rezolvă
              </Button>
            </form>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(useStyles)(InputPage);
