import React, {useState } from 'react';
import FormSignup from './FormSignup';
import FormSuccess from "./FormSuccess";
import './Form.css';

const Form = () => {
  const [isSubmitted, setSubmitted ] = useState (false);

  function submitForm() {
    setSubmitted(true);
  }

  return (
		<>
			<div className="form-container">
				<span className="close-btn">×</span>
				<div className="form-content-left">
					<img
						className="form-img"
						src="https://images.pexels.com/photos/1743165/pexels-photo-1743165.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt="login"
					/>
				</div>
				{!isSubmitted ? (
					<FormSignup submitForm={submitForm} />
				) : (
					<FormSuccess />
				)}
			</div>
		</>
  );
}
 
export default Form