import React from 'react';
import './RoomCard.css';

const RoomCard = ({ room, onSelect }) => {
  return (
    <div className={`room-card ${room.available ? 'available' : 'unavailable'}`} onClick={() => onSelect(room.id)}>
      <h3>{room.name}</h3>
      <p>Type: {room.type}</p>
      <p>Price: ${room.price}</p>
      <p>Status: {room.available ? 'Available' : 'Unavailable'}</p>
    </div>
  );
};

export default RoomCard;
