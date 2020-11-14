import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { useSelector, useDispatch, connect } from 'react-redux';

function Mid(props) {
   return (
      <Box>
         <Typography color="primary">MID</Typography>
         <Button>test redux</Button>
         <Typography>{ console.warn(props) }</Typography>
      </Box>
   );
}

const mapStateToProps = state => {
   return {
      myNumber: state.number
   }
}

export default connect(mapStateToProps)(Mid)