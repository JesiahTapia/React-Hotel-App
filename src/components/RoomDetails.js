import React, { useState } from 'react' // Import React and useState hook
import DatePicker from 'react-datepicker' // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css' // Import DatePicker CSS

// Define the RoomDetails component
const RoomDetails = ({ room, onBookRoom }) => {
  // Define state for check-in and check-out dates
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [email, setEmail] = useState('')
  const [totalPrice, setTotalPrice] = useState(0)

  // If no room is selected, don't render anything
  if (!room) return null

  const calculateTotalPrice = (checkIn, checkOut) => {
    if (checkIn && checkOut) {
      const timeDiff = Math.abs(checkOut - checkIn)
      const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
      setTotalPrice(diffDays * room.price)
    }
  };

  const handleCheckInChange = (date) => {
    setCheckInDate(date)
    calculateTotalPrice(date, checkOutDate)
  };

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);
    calculateTotalPrice(checkInDate, date);
  };


  // Function to handle booking the room
  const handleBookRoom = () => {
    if (checkInDate && checkOutDate) {
      onBookRoom(room.id, checkInDate, checkOutDate) // Call onBookRoom function passed as a prop
    } else {
      alert('Select check-in and check-out dates before booking') // Show alert if dates are not selected
    }
  }

  // Return the JSX structure of the component
  return (
    <div className="room-details">
      <h2>{room.name}</h2> {/* Display room name */}
      <p>Type: {room.type}</p> {/* Display room type */}
      <p>Price: ${room.price} per night</p> {/* Display room price */}
      <p>Available: {room.available ? 'Yes' : 'No'}</p> {/* Display room availability */}

      <div className="date-picker">
        <label>Check-in Date:</label>
        <DatePicker
          selected={checkInDate} // Set the selected date
          onChange={handleCheckInChange}// Update state on date change
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={new Date()} // dont allow past dates
        />
      </div>
      <div className="date-picker">
        <label>Check-out Date:</label>
        <DatePicker
          selected={checkOutDate} // Set the selected date
          onChange={handleCheckOutChange} // Update state on date change
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={checkInDate} // Disable dates before check-in date
        />
      </div>

      <div className="email-input">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <p>Total Price: ${totalPrice}</p>

      <button
        className="book-button"
        onClick={handleBookRoom} // Call handleBookRoom function on click
        disabled={!room.available} // Disable button if room is not available
      >
        {room.available ? 'Book Now' : 'Not Available'} {/* Button text based on availability */}
      </button>
    </div>
 )
}

// Export the RoomDetails component
export default RoomDetails
