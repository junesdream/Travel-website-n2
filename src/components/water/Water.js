import React from 'react'
import './Water.css';

const Water = () => {
  return (
		<div name="water" className="water">
			<div className="container">
				<div className="top">
					<h1>Water Mountain</h1>
				</div>
				<div className="bottom">
					<button className="btn btn-dark">Hiking</button>
					<button className="btn">Camping</button>
				</div>
			</div>
		</div>
  );
}

export default Water