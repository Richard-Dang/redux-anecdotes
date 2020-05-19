import React from "react";
import { useDispatch, useSelector } from "react-redux";
import anecdoteReducer, { voteFor } from "../reducers/anecdoteReducer";
import { setMessage } from "../reducers/notificationReducer";

const AnecdoteList = () => {
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ anecdotes }) =>
    anecdotes.sort((a, b) => a.votes < b.votes)
  );

  const vote = (id) => {
    const anecdote = anecdotes.find((a) => a.id === id);
    dispatch(voteFor(id));
    dispatch(setMessage(`You voted "${anecdote.content}"`));
    setTimeout(() => dispatch(setMessage("")), 3000);
  };
  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
