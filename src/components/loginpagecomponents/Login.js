import '../../styles/loginpage/Login.css';

function Login() {

    return (
        <div className="login-container">
            <form action="" method="get" className="login-form">
                <h1>Come Back</h1>
                <div className="form-components">
                    <div className="username-container">   
                        <label>Username</label>
                        <input type="text" name="" id="" className="username"/>
                    </div>
                    <div className="password-container">
                        <div>
                            <label>Password</label>
                            <a href="" className="forgot-password">Forgot password?</a>
                        </div>
                        <input type="password" name="" id="" className="password"/>
                    </div>
                    <input type="button" value="Login" className="login-btn"/>
                </div>
                <span className="signup-text">Dont have an account? <a href="">Sign up</a></span>
            </form>
            <div className="sidenav">
                <a href="">Announcements</a>
                <a href="">News</a>
                <a href="">About us</a>
                <a href="">Contact us</a>
            </div>
        </div>
    )
}

export default Login;
