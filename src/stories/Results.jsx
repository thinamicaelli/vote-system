import React from 'react';
import PropTypes from 'prop-types';

export const Results = ({ votes }) => {
  let total = 0
  
  votes.forEach(element => {
    total += element.count
  });

  return (
    <ol>
      {
        votes.map((option) => {
          const totalVotes = Math.round ((option.count* 100) / total)
          return (
            <li key={option.option}>
              {`${option.option} - ${option.count} votes (${!!totalVotes ? totalVotes :  0}%)`}
            </li>     
          )
        })
      }
    </ol>
  )
}

Results.propTypes = {
  votes: PropTypes.array,
};

Results.defaultProps = {
  votes: [],
};