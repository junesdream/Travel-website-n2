import React from 'react'
import './Soil.css';

const Soil = () => {
  return (
		<div name="soil" className="soil">
			<div className="container">
				<div className="top">
					<h1>Soil Mountain</h1>
				</div>
				<div className="bottom">
					<button className="btn btn-dark">Hiking</button>
					<button className="btn">Camping</button>
				</div>
			</div>
		</div>
  );
}

export default Soil