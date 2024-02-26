import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

export function EndSection() {
  return (
    <div className='footer_body'>
      <footer className="footer-14398">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-3">
              <a href="#" className="footer-site-logo">KalaSangam</a>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit officiis corporis optio natus. </p>
            </div>
            <div className="col-md-2 ml-auto">
              <h3>Shop</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Sell online</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Examples</a></li>
                <li><a href="#">Website editors</a></li>
                <li><a href="#">Online retail</a></li>
              </ul>
            </div>
            <div className="col-md-2 ml-auto">
              <h3>Press</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Events</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Awards</a></li>
                <li><a href="#">Testimonials</a></li>
                <li><a href="#">Online retail</a></li>
              </ul>
            </div>
            <div className="col-md-2 ml-auto">
              <h3>About</h3>
              <ul className="list-unstyled links">
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Contacts</a></li>
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-12 pb-4">
              <div className="line"></div>
            </div>
            <div className="col-md-6 text-md-left">
              <ul className="list-unstyled link-menu nav-left">
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Code of Conduct</a></li>
              </ul>
            </div>
            <div className="col-md-6 text-md-right">
              <ul className="list-unstyled social nav-right">

              <li>
                  <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                    <span className="icon-twitter"></span>
                  </a>
                </li>

                <li>
                  <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                    <span className="icon-instagram"></span>
                  </a>
                </li>

                <li>
                  <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                    <span className="icon-facebook"></span>
                  </a>
                </li>

                <li>
                  <a href="#">
                  <FontAwesomeIcon icon={faPinterest} />
                    <span className="icon-pinterest"></span>
                  </a>
                </li>

              </ul>
            </div>
          </div>

          <div className="row">
            <div className="col-md-7">
              <p><small>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, fuga. Ex at maxime eum odio quibusdam pariatur expedita explicabo harum! Consectetur ducimus delectus nemo, totam odit!</small></p>
            </div>
          </div>
        </div>
      </footer>

      <script src="js/jquery-3.3.1.min.js"></script>
      <script src="js/popper.min.js"></script>
      <script src="js/bootstrap.min.js"></script>
    </div>
  );
}
