import { useState } from 'react';
import './order.css';

export function CaseOrder() {
  const [sortBy, setSortBy] = useState(''); // State for sorting option
  const [showSortOptions, setShowSortOptions] = useState(false); // State for showing/hiding sort options

  const orders = [
    { id: 1, productName: 'Product 1', amountPaid: '$50', estimatedDeliveryDate: '2024-04-15' },
    { id: 2, productName: 'Product 2', amountPaid: '$100', estimatedDeliveryDate: '2024-04-20' },
    { id: 3, productName: 'Product 3', amountPaid: '$75', estimatedDeliveryDate: '2024-04-18' },
    // Add more sample orders as needed
  ];

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setShowSortOptions(false); // Close sort options after selection
  };

  const toggleSortOptions = () => {
    setShowSortOptions(!showSortOptions);
  };

  const renderOrders = () => {
    let sortedOrders = [...orders];
    if (sortBy === 'price') {
      sortedOrders.sort((a, b) => parseFloat(a.amountPaid) - parseFloat(b.amountPaid));
    } else if (sortBy === 'rating') {
      // Add sorting logic for rating if needed
    } else if (sortBy === 'AvgCustomer') {
      // Add sorting logic for average customer if needed
    } else if (sortBy === 'date') {
      sortedOrders.sort((a, b) => new Date(b.estimatedDeliveryDate) - new Date(a.estimatedDeliveryDate));
    }
    
    return sortedOrders.map(order => (
      <div key={order.id} className="order-card">
        <h4>{order.productName}</h4>
        <p>Amount Paid: {order.amountPaid}</p>
        <p>Estimated Delivery Date: {order.estimatedDeliveryDate}</p>
      </div>
    ));
  };

  return (
    <div>
      <div className="order-option">
        <button className="OrderSort" onClick={toggleSortOptions}>Sort By</button>
        {showSortOptions && (
            <div className='ordersortoptioncontainer'>
                 <div className="date-options">
            <label className="date-label">
              <input
                type="radio"
                name="sortOption"
                value="price"
                checked={sortBy === 'price'}
                onChange={handleSortChange}
              />
              <span className="radio-label">Last 1 week</span>
            </label>
            <label className="date-label">
              <input
                type="radio"
                name="sortOption"
                value="1month"
                checked={sortBy === '1month'}
                onChange={handleSortChange}
              />
              <span className="radio-label">Last 1 month</span>
            </label>
            <label className="date-label">
              <input
                type="radio"
                name="sortOption"
                value="6months"
                checked={sortBy === '6months'}
                onChange={handleSortChange}
              />
              <span className="radio-label">Last 6 months</span>
            </label>
            <label className="date-label">
              <input
                type="radio"
                name="sortOption"
                value="1year"
                checked={sortBy === '1year'}
                onChange={handleSortChange}
              />
              <span className="radio-label">Last Year</span>
            </label>
          </div>
            </div>
         
        )}
      </div>
      <div className="order-list">
        {renderOrders()}
      </div>
    </div>
  );
}
