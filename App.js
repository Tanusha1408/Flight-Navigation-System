import React from 'react';
import './FlightNav.css';

const FlightNav = () => {
    const flights = [
        {
            id: 1,
            name: 'Flight 1',
            source: 'New York',
            destination: 'London',
            route: 'JFK-LHR',
            weather: { temp: 60, humidity: 50 },
            noFlyZone: false,
            traffic: 5,
            risk: 10,
            ranking: 1,
        },
        // Add more flight objects as needed
    ];

    const [selectedFlight, setSelectedFlight] = React.useState(null);

    const handleFlightSelect = (e) => {
        const flightId = parseInt(e.target.value, 10);
        const selectedFlight = flights.find((flight) => flight.id === flightId);
        setSelectedFlight(selectedFlight);
    };

    return (
        <div className="flight-nav">
            <h1 className="title">Flight Navigation System</h1>
            <div className="search-flights-options">
                <label htmlFor="flight-select">Select a flight:</label>
                <select id="flight-select" onChange={handleFlightSelect}>
                    <option value="">Select a flight...</option>
                    {flights.slice(0, 10).map((flight) => (
                        <option key={flight.id} value={flight.id}>
                            {flight.name}
                        </option>
                    ))}
                </select>
            </div>
            {selectedFlight && (
                <div className="information-container">
                    <div className="selected-flight-card">
                        <div className="flight-rank">
                            <h3>Rank: {selectedFlight.id}</h3>
                        </div>
                        <div className="flight-info">
                            <div className="flight-info-item">
                                <p>Name:</p>
                                <p>{selectedFlight.name}</p>
                            </div>
                            <div className="flight-info-item">
                                <p>Source:</p>
                                <p>{selectedFlight.source}</p>
                            </div>
                            <div className="flight-info-item">
                                <p>Destination:</p>
                                <p>{selectedFlight.destination}</p>
                            </div>
                            <div className="flight-info-item">
                                <p>Route:</p>
                                <p>{selectedFlight.route}</p>
                            </div>
                            <div className="flight-info-item">
                                <p>Weather:</p>
                                <p>{selectedFlight.weather.temp}°F, {selectedFlight.weather.humidity}%</p>
                            </div>
                            <div className="flight-info-item">
                                <p>No Fly Zone:</p>
                                <p>
                                    <span className={`no-fly-zone ${selectedFlight.noFlyZone ? 'no-fly-zone-red' : 'no-fly-zone-green'}`}></span>
                                </p>
                            </div>
                            <div className="flight-info-item">
                                <p>Traffic:</p>
                                <p>{selectedFlight.traffic}</p>
                            </div>
                            <div className="flight-info-item">
                                <p>Risk:</p>
                                <p>{selectedFlight.risk}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlightNav;
