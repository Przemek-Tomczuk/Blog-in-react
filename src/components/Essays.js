import React from 'react';
import { Link } from 'react-router-dom';

function Essays() {
  return (
    <div className="essays">
      <h2>List of Essays</h2>
      {/* Sample links to essays */}
      <ul>
        <li><Link to="/essay/1">Essay 1</Link></li>
        <li><Link to="/essay/2">Essay 2</Link></li>
        <li><Link to="/essay/3">Essay 3</Link></li>
      </ul>
    </div>
  );
}

export default Essays;