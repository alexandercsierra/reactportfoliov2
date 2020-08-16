import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components'

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1} >
        <LinearProgress variant="determinate" {...props} style={{height: '20px', borderRadius: '5px'}}/>
      </Box>
      <Box minWidth={35} >
        <Typography variant="body2" style={{color: '#f1f1f1'}}>{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: 20
  },
});

export default function LinearWithValueLabel({course}) {
  const classes = useStyles();
  const {progress, title, desc, status, img} = course
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//       setProgress((prevProgress) => (50))
//   }, []);
  const colors = {
    'actively working on': 'green',
    'queued for future learning': 'grey',
    'complete': '#3F51B5'
  }
  return (
      <Container>
        <TitleDiv>
            <p style={{marginRight: '4%'}}>{title}</p>
            <img src={img} style={{width: '100px'}}/>
        </TitleDiv>
        <p>{desc}</p>
        <p style={{color: colors[status]}}>Status: {status}</p>
        <div className={classes.root}>
            <LinearProgressWithLabel value={progress} barColor={colors[status]}/>
        </div>
      
      </Container>
  );
}


const Container = styled.div`
  text-align: left;
  margin: 4%;
  // border: 2px solid #3f51b5;
  @media(max-width: 1200px){
    margin: 6%;
  }
  @media(max-width: 870px){
    margin: 8%;
  }
`;


const TitleDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media(max-width: 500px){
    flex-direction: column;
  }
`;
