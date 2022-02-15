import React from 'react';
import './Account.css';
import Form from './Form';


const Account = () => {
  return (
		<div name="account" className="account">
			<div className="container">
				<div className="top">
					<h1>Make a Account</h1>
				</div>
        <Form />

				{/* <div className="bottom">
					<button className="btn btn-dark">Hiking</button>
					<button className="btn">Camping</button>
				</div> */}

			</div>
		</div>
  );
}

export default Account