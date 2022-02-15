import React from 'react';
import "./Form.css";

const FormSuccess = () => {
  return (
		// <div className="form-content-right">
		// 	<h1 className="form-success">We have received your request!</h1>
		// 	<img
		// 		src="https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
		// 		alt="login"
		// 		className="form-img-2"
		// 	/>
		// </div>
		<div className="form-content-right">
			<h2 className="form-success">We have received your request!</h2>
			<img
				className="form-img-2"
				src="https://images.unsplash.com/photo-1508558936510-0af1e3cccbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dmljdG9yeSUyMG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
				alt="success"
			/>
		</div>
  );
}

export default FormSuccess