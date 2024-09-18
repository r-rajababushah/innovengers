import './Bookings.css';

export default function Bookings(){
    return (
        <div className="bookings">
            <div className="bookinghead">
                <h3>BOOKING</h3>
                <hr style={{width: '400px'}} />
            </div>
            <div className="bookingForm">
                <table>
                    <tr>
                        <td style={{color: 'white'}}>Name</td>
                        <td><input type="text" name="name" id="name" /></td>
                    </tr>
                    <tr>
                        <td style={{color: 'white'}}>Email</td>
                        <td><input type="email" name="email" id="email" /></td>
                    </tr>
                    <tr>
                        <td style={{color: 'white'}}>Message</td>
                        <td><textarea name="message" id="message"></textarea></td>
                    </tr>
                </table>
                <input id='submit' type="submit" value="SUBMIT" />
            </div>
        </div>
    )
}