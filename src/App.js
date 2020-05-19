import React, { useEffect } from "react";
import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Notification from "./components/Notification";
import { initializeAnecdotes } from "./reducers/anecdoteReducer";
import Filter from "./components/Filter";
import { useDispatch } from "react-redux";
import anecdotesService from "./services/anecdotes";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAnecdotes = async () => {
      const anecdotes = await anecdotesService.getAll();
      dispatch(initializeAnecdotes(anecdotes));
    };
    fetchAnecdotes();
  }, [dispatch]);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
