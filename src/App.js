import React, { useState } from 'react' // Import React and useState hook
import RoomSelection from './components/RoomSelection' // Import RoomSelection component
import RoomDetails from './components/RoomDetails' // Import RoomDetails component
import './App.css' // Import the CSS file for this component

// Define the App component
const App = () => {
  // Define state for rooms, search input, dropdown visibility, and selected room
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Room 101', type: 'Single', price: 100, available: true },
    { id: 2, name: 'Room 102', type: 'Double', price: 150, available: false },
    { id: 3, name: 'Room 103', type: 'Suite', price: 200, available: true },
    { id: 4, name: 'Room 104', type: 'Single', price: 110, available: false },
    { id: 5, name: 'Room 105', type: 'Double', price: 140, available: true },
    { id: 6, name: 'Room 106', type: 'Master', price: 350, available: true },
  ])
  const [search, setSearch] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedRoom, setSelectedRoom] = useState(null)

  // Function to handle selecting a room
  const handleSelectRoom = (roomId) => {
    const room = rooms.find((r) => r.id === roomId)
    setSelectedRoom(room)
  }

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  // Function to handle booking a room
  const handleBookRoom = (roomId, checkInDate, checkOutDate, email) => {
    const updatedRooms = rooms.map((room) =>
      room.id === roomId ? { ...room, available: false } : room    
    )
    setRooms(updatedRooms)
    setSelectedRoom({ ...selectedRoom, available: false })
    const timeDiff = Math.abs(checkOutDate - checkInDate)
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24))
    const totalPrice = diffDays * selectedRoom.price;
    console.log(`Room ${roomId} booked for ${checkInDate} until ${checkOutDate} for ${diffDays} days. Total price: $${totalPrice}. Confirmation email sent to ${email}`)
    alert('Congratulations, you have successfully booked a stay at 501Hotels!')
  }
  // Filter rooms based on search input
  const filteredRooms = rooms.filter((room) => {
    const searchLower = search.toLowerCase()
    return (
      room.name.toLowerCase().includes(searchLower) ||
      room.type.toLowerCase().includes(searchLower) ||
      room.price.toString().includes(searchLower)
    )
  })

  // Return the JSX structure of the component
  return (
    <div className="app">
      <header className="App-header">
      <img src="/hotel-logo.png" alt="Hotel Logo" className="hotel-logo" />
        <h1>501Hotels</h1> 
      </header>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for rooms..."
          value={search}
          onChange={handleSearchChange} // Update search state on input change
        />
      </div>
      <button className="toggle-button" onClick={toggleDropdown}>
        {dropdownOpen ? 'Hide Rooms' : 'Show Rooms'} 
      </button>
      {dropdownOpen && (
        <RoomSelection rooms={filteredRooms} onSelectRoom={handleSelectRoom} /> 
        // Render RoomSelection if dropdown is open
      )}
      <RoomDetails room={selectedRoom} onBookRoom={handleBookRoom} /> 
    </div>
  ) //Render RoomDetails with selected room
}

// Export the App component
export default App
