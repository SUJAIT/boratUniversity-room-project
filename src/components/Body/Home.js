import React, { Component } from 'react'
import Rooms from '../Items/Rooms'
import Hotelroom from '../Items/Hotelroom'

export default class Home extends Component {
    state = {
        rooms: Rooms,
    }

    render() {
        const roomlist = this.state.rooms.map((item) => {
            return (
                <div key={item.id} className="col-md-3 mb-3 ">
                    <Hotelroom image={item.image} />
                </div>
            )
        })
        return (
            <div>
                <h1 style={{ textAlign: 'center' }}>ROOMS</h1>
                <hr />
                <div className='row'>{roomlist}</div>
            </div>
        )
    }
}
