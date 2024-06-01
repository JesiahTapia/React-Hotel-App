import React from 'react' // Import React library
import './RoomCard.css' // Import the CSS file for this component

// Define the RoomCard component
const RoomCard = ({ room, onSelect }) => {
  // Return the JSX structure of the component
  return (
    // Set class based on room availability and code for the onClick event
    <div className={`room-card ${room.available ? 'available' : 'unavailable'}`} onClick={() => onSelect(room.id)}>
      <h3>{room.name}</h3> {/* Display room name */}
      <p>Type: {room.type}</p> {/* Display room type */}
      <p>Price: ${room.price}</p> {/* Display room price */}
      <p>Status: {room.available ? 'Available' : 'Unavailable'}</p> {/* Display room availability status */}
    </div>
  )
}

// Export the RoomCard component
export default RoomCard
