import React from 'react';
import './Login.css';

const Login = () => {
    return (
        
    <div className="container login">
	<div className="back-img"></div>
	<div className="form">
		<div className="click panel">
			<div className="front">
				<div className="form-sec">
					<div className="head">Login</div>
					<form id="login_form"
						action="/login?rd=https://app.datoms.io/?_ga=2.227463963.703286909.1625053007-221439674.1625053007"
						method="post">
						<div className="form-container">
							<div className="header">Email Address</div>
							<input id="email" type="text" className="form-control" name="email" aria-label="Email" />
						</div>
						<div className="form-container mar-top-30">
							<div className="header">Password</div>
							<input id="password" type="password" className="form-control" name="password"
								aria-label="Password" />
						</div>
						<div className="form-container">
							<input type="checkbox" className="check remember" value="remember" name="remember" />Remember Me
						</div>
						<div id="show_message" className="error-msg">
							<span></span>
						</div>
						<div className="btn-contain">
							<input type="submit" id="form_submit_btn" className="btn" value="Login" />
						</div>
						<div id="forgot_pswd"><a href="/forgot">Forgot Password ?</a></div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div className="copyright">© 2019 - 2021 Phoenix Robotix Private Limited</div>
	<div className="datoms-logo">
		<img src={"https://static.datoms.io/images/icons/datoms_white-01.svg"} />
	
</div>
</div>
	);
    
}

export default Login;