import { useState } from 'react';
import request from '~/utils/request';
import { getUser } from '~/utils';
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    function handleSubmit(e) {
        console.log(
            getUser({
                username,
                password,
            }),
        );
        request
            .get('users', {
                params: {
                    username,
                    password,
                },
            })
            .then(function (response) {
                let user = null;
                if (response.data.length > 0) {
                    user = response.data[0];
                    if (user.role === 'admin') console.log('admin');
                    else console.log('user');

                    localStorage.setItem('user', JSON.stringify(user));

                    // alert('Đăng nhập thành công');
                } else {
                    alert('Sai thông tin đăng nhập');
                    e.preventDefault();
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });

        e.preventDefault();
    }

    return (
        <section id="login" className="login">
            <div className="login-container">
                <div className="login-content">
                    <div className="login-header">
                        <h1>S-Shop</h1>
                    </div>
                    <div className="login-form">
                        <form action="/" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    spellCheck="false"
                                    value={username.trim()}
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                    placeholder="Username"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    value={password}
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="form-group form-group-button">
                                <button id="btn-login" type="submit" className="btn btn-login" value="Login">
                                    Login
                                </button>
                            </div>
                            <div className="form-group form-group-link">
                                <a href="/register">Create an account</a>
                                <a href="/">Forgot password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
