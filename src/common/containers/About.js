import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <h2>About page</h2>
        </div>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p>
          <Link to="/ewan">Ewan</Link>
        </p>
      </div>
    );
  }
}

export default About;
