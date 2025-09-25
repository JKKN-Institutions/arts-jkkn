import Link from 'next/link';
import Image from 'next/image';

export default function OffcanvasMenu() {
  return (
    <>
      {/* start: Offcanvas Menu */}
      <div className="tj-offcanvas-area d-none d-lg-block">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <Image src="/assets/images/logos/logo-2.png" alt="Logo" width={100} height={50} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn">Ã—</button>
              </div>
            </div>
            <div className="offcanvas-text">
              <p>Developing personalize our customer journeys to increase satisfaction & loyalty of our expansion recognized by industry leaders.</p>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit">ðŸ”</button>
                  <input type="search" autoComplete="off" name="s" defaultValue="" placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:+914256212500">+91 4256 212500</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@jkkn.ac.in">info@jkkn.ac.in</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">Kumarapalayam, Namakkal District, Tamil Nadu - 638183</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Offcanvas Menu */}

      {/* start: Hamburger Menu */}
      <div className="hamburger-area d-lg-none">
        <div className="hamburger_bg"></div>
        <div className="hamburger_wrapper">
          <div className="hamburger_inner">
            <div className="hamburger_top d-flex align-items-center justify-content-between">
              <div className="hamburger_logo">
                <Link href="/" className="mobile_logo">
                  <Image src="/assets/images/logos/logo-2.png" alt="Logo" width={100} height={50} />
                </Link>
              </div>
              <div className="hamburger_close">
                <button className="hamburger_close_btn">Ã—</button>
              </div>
            </div>
            <div className="hamburger-search-area">
              <h5 className="hamburger-title">Search Now!</h5>
              <div className="hamburger_search">
                <form method="get" action="/">
                  <button type="submit">ðŸ”</button>
                  <input type="search" autoComplete="off" name="s" defaultValue="" placeholder="Search here..." />
                </form>
              </div>
            </div>
            <div className="hamburger_menu">
              <div className="mobile_menu">
                <nav id="mobile-menu" className="mainmenu">
                  <ul>
                    <li className="has-dropdown">
                      <Link href="#">About</Link>
                      <ul className="sub-menu">
                        <li><Link href="/vision-mission">Our Vision and Mission</Link></li>
                        <li><Link href="/about/trust">Our Trust</Link></li>
                        <li><Link href="/about/management">Our Management</Link></li>
                        <li><Link href="/about/college">Our College</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/programmes">Programmes Offered</Link>
                      <ul className="sub-menu">
                        <li className="has-dropdown">
                          <Link href="/programmes/aided">Aided</Link>
                          <ul className="sub-menu">
                            <li><Link href="/baenglish">BA English</Link></li>
                            <li><Link href="/bahistory">BA History</Link></li>
                            <li><Link href="/bscchemistry">B.Sc Chemistry</Link></li>
                            <li><Link href="/bcom">B.Com</Link></li>
                          </ul>
                        </li>
                        <li className="has-dropdown">
                          <Link href="/programmes/self-finance">Self Finance</Link>
                          <ul className="sub-menu">
                            <li><Link href="/bsc-physics-self">B.Sc. Physics</Link></li>
                            <li><Link href="/b-c-a-self">B.C.A</Link></li>
                            <li><Link href="/bba-self">B.B.A</Link></li>
                            <li><Link href="/department-of-computer-science">B.SC Computer Science</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/departments">Department</Link>
                      <ul className="sub-menu">
                        <li><Link href="/aided/department-of-tamil">Department of Tamil</Link></li>
                        <li><Link href="/aided/department-of-english">Department of English</Link></li>
                        <li><Link href="/aided/department-of-mathematics">Department of Mathematics</Link></li>
                        <li><Link href="/aided/department-of-computer-science">Department of Computer Science</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/facilities">Facilities</Link>
                      <ul className="sub-menu">
                        <li><Link href="/facilities/lab">Labs</Link></li>
                        <li><Link href="/facilities/library">Library</Link></li>
                        <li><Link href="/facilities/classroom">Class Room</Link></li>
                        <li><Link href="/facilities/hostel">Hostel</Link></li>
                      </ul>
                    </li>
                    <li className="has-dropdown">
                      <Link href="/others">Others</Link>
                      <ul className="sub-menu">
                        <li><Link href="/others/committees">Committees</Link></li>
                        <li><Link href="/others/gallery">Gallery</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="hamburger-infos">
              <h5 className="hamburger-title">Contact Info</h5>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="subtitle">Phone</span>
                  <a className="contact-link" href="tel:+914256212500">+91 4256 212500</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Email</span>
                  <a className="contact-link" href="mailto:info@jkkn.ac.in">info@jkkn.ac.in</a>
                </div>
                <div className="contact-item">
                  <span className="subtitle">Location</span>
                  <span className="contact-link">Kumarapalayam, Namakkal District, Tamil Nadu - 638183</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hamburger-socials">
            <h5 className="hamburger-title">Follow Us</h5>
            <div className="social-links style-3">
              <ul>
                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="https://x.com/" target="_blank"><i className="fa-brands fa-x-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target="_blank"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end: Hamburger Menu */}
    </>
  );
}
