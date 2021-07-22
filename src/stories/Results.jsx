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
          return (
            <li>
              {`${option.option} - ${option.count} votes (${Math.round ((option.count* 100) / total) }%)`}
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