import React from 'react' // Import React library
import RoomCard from './RoomCard' // Import RoomCard component
import './RoomSelection.css' // Import the CSS file for this component

// Define the RoomSelection component
const RoomSelection = ({ rooms, onSelectRoom }) => {
  // Return the JSX structure of the component
  return (
    <div className="room-selection">
      {rooms.map((room) => (
        // Render a RoomCard component for each room, passing room and onSelectRoom as props
        <RoomCard key={room.id} room={room} onSelect={onSelectRoom} />
      ))}
    </div>
  )
}

// Export the RoomSelection component
export default RoomSelection
