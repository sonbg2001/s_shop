import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Search from '../Search';
import styles from './Header.module.scss';
import configPaths from '~/routes/configPaths';

const cs = classNames.bind(styles);
function Header() {
    let user = JSON.parse(localStorage.getItem('user'));
    let cart = JSON.parse(localStorage.getItem('cart'));

    return (
        <div>
            <div className={cs('header-wrapper')}>
                <div className={cs('header-container header-top')}>
                    <div className={cs('container header-top-content')}>
                        <div className={cs('header-top-left')}>
                            <div className={cs('header-top-left-content')}>
                                <div className={cs('header-top-left-content-item')}>
                                    <i className={cs('fa fa-phone')} />
                                    <span>+84 987 654 321</span>
                                </div>
                                <div className={cs('header-top-left-content-item')}>
                                    <i className={cs('fa fa-envelope')}></i>
                                    <span>
                                        <a href="mailto: fshop@gmail.com">
                                            <span>sshop@gmail.com</span>
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className={cs('header-top-right')}>
                            <div className={cs('header-top-right-content')}>
                                <div className={cs('header-top-right-content-item')}>
                                    <i className={cs('fa-brands fa-facebook-f')}></i>
                                </div>
                                <div className={cs('header-top-right-content-item')}>
                                    <i className={cs('fa-brands fa-instagram')}></i>
                                </div>
                                <div className={cs('header-top-right-content-item')}>
                                    <i className={cs('fa-brands fa-twitter')}></i>
                                </div>
                                <div className={cs('header-top-right-content-item')}>
                                    <i className={cs('fa-brands fa-youtube')}></i>
                                </div>
                                <div className={cs('header-top-right-content-item')}>
                                    <i className={cs('fa-brands fa-pinterest-p')}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cs('header-container header-main')}>
                    <div className={cs('container header-main-content')}>
                        <div className={cs('header-main-left')}>
                            <div className={cs('header-logo')}>
                                <a href="/">
                                    <h3>S-Shop</h3>
                                </a>
                            </div>
                        </div>
                        <div className={cs('header-main-mid')}>
                            <Search />
                        </div>
                        <div className={cs('header-main-right')}>
                            {user && (
                                <>
                                    <div className={cs('header-user')}>
                                        <div className={cs('header-user-image')}>
                                            <img
                                                src={
                                                    user.avatar ||
                                                    'https://st3.depositphotos.com/1767687/16607/v/450/depositphotos_166074422-stock-illustration-default-avatar-profile-icon-grey.jpg'
                                                }
                                                height="40"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cs('header-user-funtion')}>
                                            <div className={cs('header-user-funtion-item')}>
                                                <Link to="/account">
                                                    <i className={cs('fa-solid fa-user')}></i>
                                                    <span>T??i kho???n</span>
                                                </Link>
                                            </div>
                                            <div className={cs('header-user-funtion-item')}>
                                                <a href="/history">
                                                    <i className={cs('fa-solid fa-clock-rotate-left')}></i>
                                                    <span>L???ch s??? mua h??ng</span>
                                                </a>
                                            </div>
                                            <div className={cs('header-user-funtion-item')}>
                                                <a
                                                    href={configPaths.login}
                                                    onClick={(e) => {
                                                        if (window.confirm('B???n c?? mu???n ????ng su???t kh??ng?')) {
                                                            localStorage.removeItem('user');
                                                        } else {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                >
                                                    <i className={cs('fa-solid fa-sign-out-alt')}></i>
                                                    <span>????ng xu???t</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cs('header-cart')}>
                                        <div id="cart-mini">
                                            <span id="cart-count">Gi??? h??ng({(cart && cart.length) || 0})</span>
                                            {/* <span id="cart-total">/ 0??</span> */}
                                        </div>

                                        <Link to={configPaths.cart} id="btn-cart" className={cs('btn btn-login')}>
                                            <i className={cs('fa-solid fa-cart-shopping')} />
                                        </Link>
                                        {/* <button id="btn-wishlist" className={cs('btn btn-login')}>
                                            <i className={cs('fa-solid fa-heart')}></i>
                                        </button> */}
                                    </div>
                                </>
                            )}
                            {!user && (
                                <div className={cs('header-cart')}>
                                    <Link to={configPaths.login}>????ng nh???p</Link>
                                    <span>/</span>
                                    <Link to="/register">????ng k??</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={cs('header-container header-bottom')}>
                    <div className={cs('container header-bottom-content')}>
                        <div className={cs('header-bottom-nav')}>
                            <ul className={cs('header-bottom-nav-list')}>
                                <li className={cs('header-bottom-nav-list-item')}>
                                    <Link to={configPaths.brand}>Th????ng hi???u</Link>
                                </li>
                                <li className={cs('header-bottom-nav-list-item')}>
                                    <a href="/">Trang ch???</a>
                                </li>
                                <li className={cs('header-bottom-nav-list-item header-bottom-nav-list-item-product')}>
                                    <Link to={configPaths.products}>S???n ph???m</Link>
                                    <i className={cs('fa-solid fa-angle-down')}></i>
                                    <ul className={cs('header-bottom-nav-list-sub')}>
                                        <li className={cs('header-bottom-nav-list-sub-item')}>
                                            <a href={configPaths.products}>??o ph??ng</a>
                                        </li>
                                        <li className={cs('header-bottom-nav-list-sub-item')}>
                                            <a href={configPaths.products}>Qu???n</a>
                                        </li>
                                        <li className={cs('header-bottom-nav-list-sub-item')}>
                                            <a href={configPaths.products}>Gi??y</a>
                                        </li>
                                    </ul>
                                </li>

                                <li className={cs('header-bottom-nav-list-item')}>
                                    <Link to="/contact">Li??n h???</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
