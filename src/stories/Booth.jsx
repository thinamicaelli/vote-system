import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const Booth = ({ options }) => {
  return (
    <div>
      {
        options.map((option) => {
          return (
            <button>
              { option }
            </button>
          )
        })
      }
    </div>
  )
}

Booth.propTypes = {
  options: PropTypes.array,

  /**
   * Optional click handler
   */
   onVote: PropTypes.func,
};

Booth.defaultProps = {
  options: [],
  onVote: undefined
};