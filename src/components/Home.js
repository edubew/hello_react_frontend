import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <section>
    <h2 className="m-3">Welcome to my app!</h2>
    <Link to="/greeting">
      <button type="submit" className="mx-3 btn btn-primary">Random Greeting</button>
    </Link>
  </section>
);

export default Home;
