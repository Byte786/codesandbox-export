import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  button: {
    marginTop: 10
  }
}));

const Confirmation = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Typography
        variant="body2"
        color="textPrimary"
      >{`We will sending you a Ticket on Your Registered e-mail address.Thank you for the Booking your Journey with Airbus.com. `}</Typography>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        onClick={() => history.push("/")}
      >{`Back to Home`}</Button>
    </>
  );
};

Confirmation.propTypes = {
  history: PropTypes.object,
  classes: PropTypes.object
};

export default Confirmation;
