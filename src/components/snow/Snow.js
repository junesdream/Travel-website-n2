import React from 'react';
import './Snow.css';

const Snow = () => {
  return (
		<div name="snow" className="snow">
			<div className="container">
				<div className="top">
					<h1>Snow Mountain</h1>
				</div>
				<div className="bottom">
					<button className="btn btn-dark">Hiking</button>
					<button className="btn">Camping</button>
				</div>
			</div>
		</div>
  );
}

export default Snow