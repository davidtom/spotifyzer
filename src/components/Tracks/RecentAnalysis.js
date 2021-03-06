import React from 'react';
import {Segment} from 'semantic-ui-react'

const RecentAnalysis = ({hours, minutes, perHour}) => {

  // render segment only if there is data to put into it
  return (
    (hours &&
    <Segment className="data-analysis-container" inverted padded compact textAlign="left">
      <h1>Analysis of Your Recent Play History</h1>
        <p>{hours} hours {Math.round(minutes)} minutes to play 50 tracks</p>
        <p>{(Math.round(perHour*100)/100)} tracks per hour</p>
    </Segment>)
  );
};

export default RecentAnalysis;
