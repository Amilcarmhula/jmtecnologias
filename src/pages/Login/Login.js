// import 'bootstrap/dist/css/bootstrap.css'
import './login.css'

function Login() {

    // var a = document.getElementById('btn-login')
    // var b = document.getElementById('btn-register')




    const login = () => {
        var log = document.getElementById('login-form')
        var reg = document.getElementById('register-form')

        if (log.classList.value === 'login-container') {
            log.classList = 'change-login'
            reg.classList = 'change-registration'
        }
    }
    
    const register = () => {
        var log = document.getElementById('login-form')
        var reg = document.getElementById('register-form')

        if (reg.classList.value === 'change-registration') {
            log.classList = 'login-container'
            reg.classList = 'registration-container'
        }
    }

    return (
        <>
            <div className='container-fluid' id='container-log'>
                {/* <!--------------------------------- Form Box ---------------------------------------> */}
                <div className="form-box">
                    {/* <!----------------- Registration Form ----------------------> */}
                    <div className="registration-container" id="register-form">
                        <div className="top">
                            <span>Have an account? <a href="#" onClick={() => login()} > login</a></span>
                            <header>sign up</header>
                        </div>
                        <div className="two-forms ">
                            <div className="input-box ">
                                <input type="text" className="input-fieldd" placeholder="First Name" />
                                <i className="bi bi-person-fill"></i>
                            </div>
                            <div className="input-box">
                                <input type="text" className="input-fieldd" placeholder="Last Name" />
                                <i className="bi bi-person-fill"></i>
                            </div>
                        </div>
                        <div className="input-box">
                            <input type="email" className="input-fieldd" placeholder="E-mail" />
                            <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div className="input-box">
                            <input type="tel" className="input-fieldd" placeholder="Contact" />
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" className="input-fieldd" placeholder="Password" />
                            <i className="bi bi-lock-fill"></i>
                        </div>
                        <div className="input-box">
                            <input type="submit" className="submit" value="Register" />
                        </div>
                    </div>
                    {/* <!-------------------- Login Form -------------------------> */}
                    <div className="login-container" id="login-form">
                        <div className="top">
                            <span>don't Have an account? <a href="#" onClick={() => register()}> sign up</a></span>
                            <header>login</header>
                        </div>
                        <div className="input-box">
                            <input type="email" className="input-fieldd" placeholder="Username" />
                            <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div className="input-box">
                            <input type="password" class="input-fieldd" placeholder="Password" />
                            <i className="bi bi-lock-fill"></i>
                        </div>
                        <div className="input-box">
                            <input type="submit" className="submit" value="Sing In" />
                        </div>
                        <div className="two-col">
                            <div className="one">
                                <input type="checkbox" id="register-check" />
                                <label for="register-check">remember me</label>
                            </div>
                            <div className="two">
                                <label><a href="#">Forgot password</a></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login