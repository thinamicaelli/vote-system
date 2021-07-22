import React from 'react';
import PropTypes from 'prop-types';
import './votingCard.css';
import './style.css';

export const VotingCard = ({ title, state, votes, onVote }) => {

  let total = 0
  
  votes.forEach(element => {
    total += element.count
  });

  return (
    <div className="card-voting-wrapper">
      <h1>
        { title }
      </h1>
      {
        state ? (
          <div>
            <button onClick={onVote}>
              Sim
            </button>
            <button onClick={onVote}>
              Não
            </button>
          </div>
        ) : (
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
    </div>
  )
}

VotingCard.propTypes = {
  votes: PropTypes.array,
  title: PropTypes.string,
  state: PropTypes.bool,
  onVote: PropTypes.func
};

VotingCard.defaultProps = {
  votes: [],
  title: '',
  state: true,
  onVote: () => undefined,
};