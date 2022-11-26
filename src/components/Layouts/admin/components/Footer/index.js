function Footer() {
    return (
        <div class="footer-wrapper">
            <div class="footer-container">
                <div class="footer-content">
                    <div class="footer-content-top">
                        <div class="footer-content-top-quick-link">
                            <div class="footer-content-top-quick-link-title">
                                <h3>Quick Links</h3>
                            </div>
                            <div class="footer-content-top-quick-link-content">
                                <ul>
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/brand">About Us</a>
                                    </li>
                                    <li>
                                        <a href="/contact">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="/">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="/">Terms of Use</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="footer-content-top-newsletter">
                            <div class="footer-content-top-newsletter-title">
                                <h3>Newsletter</h3>
                            </div>
                            <div class="footer-content-top-newsletter-content">
                                <p>Subscribe to our newsletter to get the latest news and updates.</p>
                                <form action="">
                                    <input type="text" placeholder="Enter your email address" />
                                    <button class="btn btn-cart" type="submit">
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content-bottom">
                        <div class="footer-content-bottom-copyright">
                            <p>
                                &copy; 2022 All Rights Reserved. Designed by <a href="/">S-Shop</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
