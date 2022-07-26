import Image from 'next/image'
import Script from 'next/script'
 function Footer() {
    return (
        <><footer className="">


<section className="footer">
        <div className="footer_contacts">
            <h4>OUR SOCIALS</h4>
            <div className="footer-icon">
                <a href="https://www.facebook.com/chfak.ke"><i className="fab fa-facebook"></i>
                    <span className="medialinks">Facebook</span></a>

            </div>
            <div className="footer-icon">
                <a href="https://twitter.com/home"><i className="fab fa-twitter"></i>
                    <span className="medialinks">Twitter</span></a>

            </div>
            <div className="footer-icon">
                <a href="https://www.instagram.com/chfak.ke/"><i className="fab fa-instagram"></i>
                    <span className="medialinks">Instagram</span></a>

            </div>
            <div className="footer-icon">
                <a href="https://www.linkedin.com/company/children-homes-founders-association-of-kenya/"><i className="fab fa-linkedin"></i>
                    <span className="medialinks">LinkedIn</span></a>

            </div>
        </div>
        <div className="footer_contacts">
            <h4>CONTACTS</h4>
            <div className="footer-icon">
                <i className="fa fa-location"></i>
                <span>Mogra Children&rsquo;s Centre</span>
            </div>
            <div className="footer-icon">
                <i className="fa fa-phone"></i>
                <span>+254 707 431 598 / +254 731 647 399</span>
            </div>
            <div className="footer-icon">
                <i className="fa fa-envelope"></i>
                <span>info@chfak.or.ke</span>
            </div>
        </div>
        <div className="newsletter">
            <h4>SUBSCRIBE</h4>
            <h6>Subscribe to our newsletter</h6>
            <form action="" method="post">
            <div className="form-control">
                <label htmlFor="roll"><i className='fa fa-envelope'></i></label>
                <input
                className="tbox Email"
                    type="email"
                    // id="roll"
                    // name="roll"
                    required
                    minLength="10"
                    maxLength="20"
                    placeholder="Your Email"
                />
                <input className="btn" type="button" value="SUBSCRIBE"  />
                </div>
                </form>
        </div>
    </section>
    <hr size="0.5" width="100%" color="#616060"/>
    <section className="footer1">
        <i className="fas fa straight-line"></i>
        <span className="copyright">&copy CHFAK 2022. | All Rights Reserved.   </span>
        <span className="right">Powered by: <a href="https://www.peniaccdigitalsolutionsltd">PDSL </a></span>
    </section>
                </footer>
                <Script src="../../scripts/script.js" />
                </>
    );
  }
  
  export default Footer