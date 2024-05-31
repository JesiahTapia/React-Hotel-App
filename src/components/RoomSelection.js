import React from 'react'
import RoomCard from './RoomCard'
import './RoomSelection.css'

const RoomSelection = ({ rooms, onSelectRoom }) => {
  return (
    <div className="room-selection">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} onSelect={onSelectRoom} />
      ))}
    </div>
  )
}

export default RoomSelection
