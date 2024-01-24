// Presidentialsuit.js

import React, { Component } from 'react';
import Rooms from '../Items/Rooms';
import Hotelroom from '../Items/Hotelroom';

export default class Presidentialsuit extends Component {
    state = {
        rooms: Rooms,
        availableRooms: Rooms.filter((room) => room.category === 'Presidential suite').length,
    };

    handleBooking = () => {
        const { availableRooms } = this.state;

        if (availableRooms > 0) {

            const updatedAvailableRooms = availableRooms - 1;


            this.setState({ availableRooms: updatedAvailableRooms });


            alert('Booking confirmed!');
        } else {
            alert('No more rooms available.');
        }
    };

    render() {
        const roomlist = this.state.rooms
            .filter((item) => item.category === 'Presidential suite')
            .map((item) => (
                <div key={item.id} className="col-md-3 mb-3">
                    <Hotelroom image={item.image} onBookClick={this.handleBooking} />
                </div>
            ));

        return (
            <div>
                <div>
                    <h1 style={{ textAlign: 'center' }}>Presidential suite</h1>
                    <hr />
                    <div className="row">
                        {roomlist}
                        <p>Available Rooms: {this.state.availableRooms}</p>
                    </div>
                </div>
            </div>
        );
    }
}
