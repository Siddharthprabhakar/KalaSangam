import './two.css';
import { useEffect } from "react";
import logo from './assets/KALASANGAM.png';
import product1 from './assets/tote1.png'
import product2 from './assets/tote2.png'

class FlipBook {
  constructor(bookElem) {
    this.elems = {
      book: bookElem,
      leaves: bookElem.querySelectorAll(".leaf"),
      buttons: {
        next: document.getElementById("nextPage"),
        prev: document.getElementById("prevPage"),
      },
    };
    this.setupEvents();
    this.currentPagePosition = 0;
    this.turnPage(0);
  }

  setPagePosition(page, position, index) {
    var transform = "";

    transform = "translate3d(0,0," + (position < 0 ? 1 : -1) * Math.abs(index) + "px)";

    if (position < 0) {
      transform += "rotate3d(0,1,0,-180deg)";
      page.classList.add("turned");
    } else {
      page.classList.remove("turned");
    }
    if (page.style.transform !== transform) {
      page.style.transform = transform;
    }
  }

  turnPage(delta) {
    this.currentPagePosition += delta;
    if (this.currentPagePosition < 0) {
      this.currentPagePosition = 0;
      return;
    }
    if (this.currentPagePosition > this.elems.leaves.length) {
      this.currentPagePosition = this.elems.leaves.length;
      return;
    }
    this.elems.leaves.forEach((page, index) => {
      var pageNumber = index;
      this.setPagePosition(page, pageNumber - this.currentPagePosition, index);
    });

    if (this.currentPagePosition === 0) {
      this.elems.buttons.prev.setAttribute("disabled", "disabled");
    } else if (this.currentPagePosition === this.elems.leaves.length) {
      this.elems.buttons.next.setAttribute("disabled", "disabled");
    } else {
      this.elems.buttons.next.removeAttribute("disabled");
      this.elems.buttons.prev.removeAttribute("disabled");
    }
  }

  setupEvents() {
    document.getElementById("nextPage").addEventListener("click", () => {
      this.turnPage(1);
    });
    document.getElementById("prevPage").addEventListener("click", () => {
      this.turnPage(-1);
    });
  }
}

export function SectionTwo() {
  useEffect(() => {
    const flipBook = new FlipBook(document.getElementById("flipbook"));
  }, []);

  return (
    <div>
      <div className='flip_conatiner'>
        <div className='left-content'>
          <h1 className='left'>Check our catalog for this fall</h1>
          <p>Chic, modern, and traditionally woven by artisans</p>
          <a className='left' href="#">Shop  Now!</a>
        </div>
        <div className="flipbook-container">
          <div className="flipbook centered" id="flipbook" style={{ marginRight: "20px" }}>
            {/* Page 1 */}
        <div className="leaf">
          <div className="page front title external" style={{ backgroundColor: "white" }}>
            <img src={logo} alt="" style={{ width: "100%" }} />
            <h2 className='flip_text' style={{ marginTop: "4px" }}>Product Catalog</h2>
            <h2 className='flip_text' style={{ marginTop: "5px" }}>2024-25</h2>
          </div>
            <div className='page back' style={{  backgroundColor: "#F1F4F5"}}>
              <div className="product-info">
                <h3>The Black Tote Bag</h3>
                <img src={product1} alt="Product 1" style={{ width: "300px", height: "300px",  }} />
              <p className='flip'>Price: $19.99</p>
              <p className='description'>Description:</p>
              <p className='miniflip'>Its sleek design, spacious interior, and classic black color add sophistication to your look. Sturdy handles ensure comfortable carrying, making this tote a must-have fashion essential.</p>
              </div>
            </div>
        </div>

        {/* Page 2 */}
        <div className="leaf">
          <div className="page front" style={{ backgroundColor: "#8A8E9B" }}>
          <div className="product-info">
                <h3> Behave Badly Bag</h3>
                <img src={product2} alt="Product 1" style={{ width: "300px", height: "300px",  }} />
              <p className='flip'>Price: $25.99</p>
              <p className='description'>Description:</p>
              <p className='miniflip'>Its sleek design, spacious interior, and classic black color add sophistication to your look. Sturdy handles ensure comfortable carrying, making this tote a must-have fashion essential.</p>
              </div>
          </div>
          <div className="page back" style={{ backgroundColor: "white" }}>
            <div className="pageNumber">1</div>
            <h2 className='flip_text'>Cat Ipsum</h2>
            <p>
              $23
             </p>
          </div>
        </div>

        {/* Page 3 */}
        <div className="leaf">
          <div className="page front" style={{ backgroundColor: "white" }}>
            <div className="pageNumber">2</div>
           $24
          </div>
          <div className="page back" style={{ backgroundColor: "white" }}>
            <div className="pageNumber">3</div>
            <h2 className='flip_text'>Lorum Ipsum</h2>
            <p>
              $40 
            </p>
          </div>
        </div>

        {/* Page 4 */}
        <div className="leaf">
          <div className="page front" style={{ backgroundColor: "white" }}>
            <div className="pageNumber">4</div>
            <p>
              $21
            </p>
          </div>
          <div className="page back external" style={{ backgroundColor: "white" }}>
            <img src={logo} alt="" style={{ width: "100%" }} />
          </div>
        </div>
    </div>
    <div className="controls centered" style={{ marginTop: "10px" }}>
            <button id="prevPage" className="button-styled">&lt; Previous</button>
            <button id="nextPage" className="button-styled">Next &gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}