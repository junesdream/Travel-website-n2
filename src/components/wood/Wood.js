import React from 'react'
import './Wood.css';

const Wood = () => {
  return (
		<div name="wood" className="wood">
			<div className="container">
				<div className="top">
					<h1>Wood Mountain</h1>
				</div>
				<div className="bottom">
					<button className="btn btn-dark">Hiking</button>
					<button className="btn">Camping</button>
				</div>
			</div>
		</div>
  );
}

export default Wood