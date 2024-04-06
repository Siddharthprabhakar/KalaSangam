import "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';
import { Link } from "react-router-dom";

const CustomButton = styled.button`
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  padding: 12px 24px;
  border-radius: 48px;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  --pg-margin: 80px;
  padding: 0 var(--pg-margin);
`;

export function ProductPage() {
  return (
    <div className="product">
      <StyledSection className="hero">
        <h1>Unlock the Beauty of Artistry and Creations Online!</h1>
        <div className="productbtn-group">
          <CustomButton className="btn-filled-dark">
          <FontAwesomeIcon icon={faCartShopping} />
          <Link to='/products' style={{ color: "white"}}>
          Shop All Products
          </Link>
          </CustomButton>
          <CustomButton className="btn-outline-dark btn-hover-color">
          <FontAwesomeIcon icon={faCalendar} />
            Book a Service
          </CustomButton>
        </div>
      </StyledSection>
      
      <StyledSection>
        <h2>Shop by Product</h2>

        <ul className="shop-pets">
          <li className="card-large card-light" id="sup-dog">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/5ccPOQq69UKQcbmXfjvOScfFc9NXKG0Xu6DPNQ8b0f8/rs:fit:368:247/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTEw/LzFlODdiYzcyLTBl/OWEtNDFlNS05N2Ey/LTMzYTA4MDQ5MWU1/OC5wbmc.png" />
            </div>
            <ul>
              Dogs
              <li>
                <a href="#">Food &amp; Treats</a>
              </li>
              <li>
                <a href="#">Toys</a>
              </li>
              <CustomButton className="btn-outline-light">
                Shop All
                <FontAwesomeIcon icon={faArrowRight} />
              </CustomButton>
            </ul>
          </li>

          <li className="card-large card-dark" id="sup-cat">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/RjiKOF2gGKiIVnIMFi0O1a4aU7DoHfhbkXr2JbUYZ3A/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMzEy/LzliNDQ3MmVlLWZh/YjMtNDQwNy1iOWVh/LWMwOTdlYWNjNWE3/NS5wbmc.png" />
            </div>
            <ul>
              Cats
              <li>
                <a href="#">Food &amp; Treats</a>
              </li>
              <li>
                <a href="#">Toys</a>
              </li>
              <CustomButton className="btn-outline-dark">
                Shop All
                <FontAwesomeIcon icon={faArrowRight} />
              </CustomButton>
            </ul>
          </li>

          <li className="card-large card-dark" id="sup-bird">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/DF-XRInvbvWS9fQSpWc_SegC3meXZK8BmE-PjrdrF3Q/rs:fit:368:396/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzI3/LzQyYWIyNzliLWJj/ZDgtNGEyMC04MGRi/LTk3MzU4YWFmNTVk/OS5wbmc.png" />{" "}
            </div>
            <ul>
              Birds
              <li>
                <a href="#">Food &amp; Treats</a>
              </li>
              <li>
                <a href="#">Toys</a>
              </li>
              <CustomButton className="btn-outline-dark">
                Shop All
                <FontAwesomeIcon icon={faArrowRight} />
              </CustomButton>
            </ul>
          </li>
          <li className="card-large card-light" id="sup-fish">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/41Pv7w9rcbn7II_gB2vwvVCQRYE5mvpca1ZbsvMujR0/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNjE5/LzRlZjE1YTgyLTI3/NjYtNDlkNC1hMGE3/LWY4ZjRmNzhjM2M5/NS5wbmc.png" />
            </div>
            <ul>
              Fish
              <li>
                <a href="#">Food</a>
              </li>
              <li>
                <a href="#">Aquariums</a>
              </li>
              <CustomButton className="btn-outline-light">
                Shop All
                <FontAwesomeIcon icon={faArrowRight} />
              </CustomButton>
            </ul>
          </li>
        </ul>
      </StyledSection>

      <StyledSection>
        <h2>Our Services</h2>

        <ul className="services">
          <li className="card-large card-dark card-wide" id="serv-groom">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/T11rfGmMKgcStJyAFKNgtOfE79cadabx0DVMnvzA9Pk/rs:fit:368:313/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNDQx/LzFlYWU4MWY3LWQ1/ZjYtNDM2Ny1hZjM5/LWVmNTFmMGM5Njk4/MS5wbmc.png" />
            </div>
            <ul>
              Dog Grooming
              <span className="subtitle">
                Tail-wagging transformations are our specialty.
              </span>
              <li>
                <a href="#">Coat Care</a>
                <span>$80</span>
              </li>
              <li>
                <a href="#">Nail Care</a>
                <span>$16</span>
              </li>
              <li>
                <a href="#">Doggie Deluxe Spa Day</a>
                <span>$160</span>
              </li>
              <CustomButton className="btn-filled-dark">
              <FontAwesomeIcon icon={faCalendar} />
                Book Now
              </CustomButton>
            </ul>
          </li>
          <li className="card-large card-dark card-wide" id="serv-board">
            <div className="card-image">
              <img src="https://ouch-cdn2.icons8.com/F5Ea1suZtMYimKDkJr0CJLO_1bju6-bTyT1EuDKEg8s/rs:fit:368:254/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjcx/LzVjMzE4NWM0LWZh/NTMtNGQ1OS05ZTM2/LTZjYzBhNGU3ODg0/NC5wbmc.png" />
            </div>
            <ul>
              Dog Boarding
              <span className="subtitle">
                Where fun and care never take a day off.
              </span>
              <li>
                <a href="#">Doggie Daycare</a>
                <span>$80</span>
              </li>
              <li>
                <a href="#">Short Term Boarding</a>
                <span>$80</span>
              </li>
              <CustomButton className="btn-filled-dark">
              <FontAwesomeIcon icon={faCalendar} />
                Book Now
              </CustomButton>
            </ul>
          </li>
        </ul>
      </StyledSection>
    </div>
  );
}
