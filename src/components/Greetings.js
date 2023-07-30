import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import fetchGreeting from '../redux/message/messageThunk';

const Greetings = () => {
  const { message } = useSelector((state) => state.messages.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  return (
    <section>
      <h2 className="m-3">Greetings Page</h2>
      <h3 className="m-2 btn btn-success">{message}</h3>
      <Link to="/">
        <button type="submit" className="m-2 btn btn-primary">Home</button>
      </Link>
    </section>
  );
};

export default Greetings;
