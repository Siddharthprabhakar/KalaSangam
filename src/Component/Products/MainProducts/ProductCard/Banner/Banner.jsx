import "./banner.css";
import first from "../../../../../Assets/1.webp";

export function Banner() {
  return (
    <div>
      <article className="banner">
        <div className="card__img">
          <img src={first} alt="" />
        </div>
        <div className="card__name">
          <p>OZELLE Running Shoes</p>
        </div>
        <div className="card__precis">
          <div className="card__price">
            <a href="" className="card__icon">
              <ion-icon name="heart-outline"></ion-icon>
            </a>
            <div>
              <span className="card__preci card__preci--now">$749.00</span>
            </div>
          </div>
          <button>Buy Now</button>
        </div>
      </article>
    </div>
  );
}
