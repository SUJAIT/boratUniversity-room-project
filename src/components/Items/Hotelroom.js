import React, { useState } from 'react';

const Hotelroom = ({ image, onBookClick }) => {
    const [bookingStatus, setBookingStatus] = useState('pending');

    const handleBookClick = () => {
        if (bookingStatus === 'pending') {
            setBookingStatus('booked');
            onBookClick();
            alert('Booking confirmed!');
        } else {
            alert('This room is already booked.');
        }
    };

    return (
        <div className="card mx-md-3" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt="..." style={{ width: '18rem', height: '15rem' }} />
            <div className="card-body">
                <button
                    onClick={handleBookClick}
                    className={`btn ${bookingStatus === 'booked' ? 'btn-success' : 'btn-primary'}`}
                >
                    {bookingStatus === 'pending' ? 'Book here' : 'Booked'}
                </button>
            </div>
        </div>
    );
};

export default Hotelroom;
