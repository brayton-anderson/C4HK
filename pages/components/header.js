import Link from 'next/link'
import Image from 'next/image'
import Script from 'next/script'
 function Header() {
    return (
        <>
        <Script src="https://kit.fontawesome.com/a076d05399.js" />
      <Script src="https://code.jquery.com/jquery-3.5.1.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/jquery.waypoints.min.js" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js" />
        <header className="">
            <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>

            <nav className="navbar-one flex">
                <div className="left flex">
                    <div className="email">
                        <i className="fa fa-envelope"></i>
                        <span>info@chfak.or.ke</span>
                    </div>
                    <div className="call">
                        <i className="fa fa-phone"></i>
                        <span>+254 707 431 598</span>
                    </div>
                </div>
                <div className="right flex">
                    <div className="facebook">
                        <a href="https://www.facebook.com/chfak.ke"><i className="fab fa-facebook"></i>
                        </a>
                    </div>
                    <div className="instagram">
                        <a href="https://www.instagram.com/chfak.ke/"><i className="fab fa-instagram"></i>
                        </a>
                    </div>
                    <div className="twitter">
                        <a href="https://twitter.com/home"><i className="fab fa-twitter"></i>
                    </a>
                </div>
                <div className="linkedin">
                    <a href="https://www.linkedin.com/company/children-homes-founders-association-of-kenya/"><i className="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </nav>
        <nav className="navbar-second flex" id="navbar">
        <Image src="/assets/log.png" alt="Vercel Logo" width={150} height={150} />
                    <ul className="menu-nav">
                        <li className="active">
                        <Link href="/">
                            <a>HOME</a>
                            </Link>
                            </li>
                        <li>
                        <Link href="/about">
                            <a>ABOUT US</a>
                            </Link>
                            </li>
                        <li>
                        <Link href="/members">
                            <a>MEMBER HOMES</a>
                            </Link>
                            </li>
                        {/* <!-- <li><a href="#" class="has_dropdown">MEMBERSHIP <i class="fas fa-caret-down"></i></a>
        <div class="sub-menu-1">
            <ul>

js code form
            yarn add prettier -D --save-exact
                <li>
                    <a href="benefits.html">BENEFITS</a>
                </li>
                <li>
                    <a href="join.html">HOW TO JOIN</a>
                </li>
                <li>
                    <a href="member-homes.html">MEMBER HOMES</a>
                </li>
            </ul>
        </div>

    </li> --> */}
                        <li>
                        <Link href="/gallery">
                            <a>PICTORIAL </a>
                            </Link>
                            </li>
                        {/* <!-- <li><a href="#" class="has_dropdown">SUPPORT <i class="fas fa-caret-down" id="fas_support"></i></a>
        <div class="sub-menu-1">
            <ul>
                <li>
                    <a href="partner.html">PARTNER</a>
                </li>
                <li>
                    <a href="volunteer.html">VOLUNTEER</a>
                </li>
                <li>
                    <a href="donate.html">DONATE</a>
                </li>
            </ul>
        </div>
    </li> --> */}
                        <li>
                        <Link href="/contacts">
                            <a>CONTACTS</a>
                            </Link>
                            </li>
                    </ul>
                    <div className="btn-button">
                    <Link href="/c4c">
                        <a>C4C CAMPAIGN</a>
                        </Link>
                    </div>
                    <div className="menu-btn">
                        <i className="fa fa-bars"></i>
                    </div> </nav>
                </header>
                </>
    );
  }
  
  export default Header