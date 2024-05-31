import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const RoomDetails = ({ room, onBookRoom }) => {
  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)

  if (!room) return null

  const handleBookRoom = () => {
    if (checkInDate && checkOutDate) {
      onBookRoom(room.id, checkInDate, checkOutDate)
    } else {
      alert('Please select both check-in and check-out dates')
    }
  }

  return (
    <div className="room-details">
      <h2>{room.name}</h2>
      <p>Type: {room.type}</p>
      <p>Price: ${room.price} per night</p>
      <p>Available: {room.available ? 'Yes' : 'No'}</p>

      <div className="date-picker">
        <label>Check-in Date:</label>
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          selectsStart
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={new Date()}
        />
      </div>
      <div className="date-picker">
        <label>Check-out Date:</label>
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          selectsEnd
          startDate={checkInDate}
          endDate={checkOutDate}
          minDate={checkInDate}
        />
      </div>

      <button
        className="book-button"
        onClick={handleBookRoom}
        disabled={!room.available}
      >
        {room.available ? 'Book Now' : 'Not Available'}
      </button>
    </div>
  )
}

export default RoomDetails
