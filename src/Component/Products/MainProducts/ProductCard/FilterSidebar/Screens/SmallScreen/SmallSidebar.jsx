import { useState } from 'react';
import './small.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faStar } from "@fortawesome/free-solid-svg-icons";

const colors = [
  { name: 'Red', value: 'red' },
  { name: 'Blue', value: 'blue' },
  { name: 'Green', value: 'green' },
  // Add more colors as needed
];

export default function SmallSmallSidebar() {
  const [showFilter, setShowFilter] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [reviewBy, setReviewBy] = useState('');
  const [colorBy, setColorBy] = useState(''); // Add colorBy state
  const [showSortOptions, setShowSortOptions] = useState(false);
  const [showReviewOptions, setShowReviewOptions] = useState(false);
  const [showColorOptions, setShowColorOptions] = useState(false);

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const toggleReviewOptions = () => {
    setShowReviewOptions(!showReviewOptions);
  };

  const toggleColorOptions = () => {
    setShowColorOptions(!showColorOptions);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    setShowSortOptions(false);
  };

  const handleReviewChange = (event) => {
    setReviewBy(event.target.value);
    setShowReviewOptions(false);
  };

  const handleColorChange = (event) => {
    setColorBy(event.target.value);
    setShowColorOptions(false);
  };

  return (
    <div>
      <button onClick={toggleFilter}>
        <FontAwesomeIcon icon={faFilter} className='filterIcon' />
      </button>
      {showFilter && (
        <div className="SmallSidebar">
          <div className="SmallSidebar-header">
            <h3>Filters</h3>
          </div>
          <div className="SmallSidebar-content">
            <div className="filter-option">
              <button className="Sort-button" onClick={toggleSortOptions}>
                Sort By
              </button>
              {showSortOptions && (
                <div className="color-options ">
                     <label className="color-label">
                    <input
                      type="radio"
                      name="sortOption"
                      value="price"
                      checked={sortBy === 'price'}
                      onChange={handleSortChange}
                    />
                    <span className="radio-label">Price: Low to High</span>
                  </label>
                     <label className="color-label">
                    <input
                      type="radio"
                      name="sortOption"
                      value="rating"
                      checked={sortBy === 'rating'}
                      onChange={handleSortChange}
                    />
                    <span className="radio-label">Price: High to Low</span>
                  </label>
                     <label className="color-label">
                    <input
                      type="radio"
                      name="sortOption"
                      value="AvgCustomer"
                      checked={sortBy === 'AvgCustomer'}
                      onChange={handleSortChange}
                    />
                    <span className="radio-label">Avg. Customer Review</span>
                  </label>
                     <label className="color-label">
                    <input
                      type="radio"
                      name="sortOption"
                      value="rating"
                      checked={sortBy === 'rating'}
                      onChange={handleSortChange}
                    />
                    <span className="radio-label">Newest Arrivals</span>
                  </label>
                </div>
              )}
            </div>
            <div className="filter-option">
              <button className="Sort-button" onClick={toggleReviewOptions}>
              Customer Review
              </button>
              {showReviewOptions && (
                <div className="color-options ">
                     <label className="color-label">
                    <input
                      type="radio"
                      name="reviewOption" // Changed name attribute for reviews
                      value="5star"
                      checked={reviewBy === '5star'}
                      onChange={handleReviewChange}
                    />
                    <span className="radio-label">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </span>
                  </label>
                     <label className="color-label">
                    <input
                      type="radio"
                      name="reviewOption" // Changed name attribute for reviews
                      value="4star"
                      checked={reviewBy === '4star'}
                      onChange={handleReviewChange}
                    />
                    <span className="radio-label">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </span>
                  </label>
                     <label className="color-label">
                    <input
                      type="radio"
                      name="reviewOption" // Changed name attribute for reviews
                      value="3star"
                      checked={reviewBy === '3star'}
                      onChange={handleReviewChange}
                    />
                    <span className="radio-label">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    </span>
                  </label>
                </div>
              )}
            </div>
            <div className="filter-option">
              <button className="Sort-button" onClick={toggleColorOptions}>
                Colors
              </button>
              {showColorOptions && (
                <div className="color-options">
                  {colors.map((color) => (
                       <label key={color.value} className="color-label">
                      <input
                        type="radio"
                        name="colorOption"
                        value={color.value}
                        checked={colorBy === color.value}
                        onChange={handleColorChange}
                      />
                      <span className="radio-label">
                        <div className="color-square" style={{ backgroundColor: color.value }}></div>
                        {color.name}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}