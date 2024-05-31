import React, { useState } from 'react';
import RoomSelection from './components/RoomSelection';
import RoomDetails from './components/RoomDetails';
import './App.css';

const App = () => {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 101', type: 'Single', price: 100, available: true },
    { id: 2, name: 'Room 102', type: 'Double', price: 150, available: false },
    { id: 3, name: 'Room 103', type: 'Suite', price: 200, available: true },
  ]);
  const [search, setSearch] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleSelectRoom = (roomId) => {
    const room = rooms.find((r) => r.id === roomId);
    setSelectedRoom(room);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleBookRoom = (roomId) => {
    const updatedRooms = rooms.map((room) =>
      room.id === roomId ? { ...room, available: false } : room
    );
    setRooms(updatedRooms);
    setSelectedRoom({ ...selectedRoom, available: false });
  };

  const filteredRooms = rooms.filter((room) => {
    const searchLower = search.toLowerCase();
    return (
      room.name.toLowerCase().includes(searchLower) ||
      room.type.toLowerCase().includes(searchLower) ||
      room.price.toString().includes(searchLower)
    );
  });

  return (
    <div className="app">
      <header className="App-header">
        <img src="/chat-logo.png" alt="Chat Logo" id="chat-logo" />
        <h1>Hotel Booking App</h1>
      </header>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for rooms (e.g., 'single', '200')..."
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <button className="toggle-button" onClick={toggleDropdown}>
        {dropdownOpen ? 'Hide Rooms' : 'Show Rooms'}
      </button>
      {dropdownOpen && (
        <RoomSelection rooms={filteredRooms} onSelectRoom={handleSelectRoom} />
      )}
      <RoomDetails room={selectedRoom} onBookRoom={handleBookRoom} />
    </div>
  );
};

export default App;
