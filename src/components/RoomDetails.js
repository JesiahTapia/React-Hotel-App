import React from 'react';

const RoomDetails = ({ room, onBookRoom }) => {
  if (!room) return null;

  return (
    <div className="room-details">
      <h2>{room.name}</h2>
      <p>Type: {room.type}</p>
      <p>Price: ${room.price} per night</p>
      <p>Available: {room.available ? 'Yes' : 'No'}</p>
      <p>Description: This is a beautiful {room.type.toLowerCase()} room perfect for your stay.</p>
      <button
        className="book-button"
        onClick={() => onBookRoom(room.id)}
        disabled={!room.available}
      >
        {room.available ? 'Book Now' : 'Not Available'}
      </button>
    </div>
  );
};

export default RoomDetails;
