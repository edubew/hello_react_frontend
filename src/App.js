import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchGreeting from './redux/message/messageThunk';

function App() {
  const { message } = useSelector((state) => state.messages.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return (
    <h1>
      {message}
    </h1>
  );
}

export default App;
