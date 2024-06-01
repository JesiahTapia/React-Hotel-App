import React, { useState } from 'react' // Import React and useState hook
import DatePicker from 'react-datepicker' // Import DatePicker component
import 'react-datepicker/dist/react-datepicker.css' // Import DatePicker CSS

// Define the RoomDetails component
const RoomDetails = ({ room, onBookRoom }) => {
  // Define state for check-in and check-out dates
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)

  // If no room is selected, don't render anything
  if (!room) return null

  // Function to handle booking the room
  const handleBookRoom = () => {
    if (checkInDate && checkOutDate) {
      onBookRoom(room.id, checkInDate, checkOutDate) // Call onBookRoom function passed as a prop
    } else {
      alert('Please select both check-in and check-out dates') // Show alert if dates are not selected
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
          onChange={(date) => setCheckInDate(date)} // Update state on date change
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
          onChange={(date) => setCheckOutDate(date)} // Update state on date change
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={checkInDate} // Disable dates before check-in date
        />
      </div>

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
