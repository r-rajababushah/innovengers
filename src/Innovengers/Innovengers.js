import './Innovengers.css';

export default function Innovengers() {
    return (
        <>
            <div className="mainBody">

                <div className="heading">
                    <h1>Travel With Us</h1>
                    <br />
                    <p>Welcome to our world of desire to travel! Take off on incredible adventures with our carefully chosen travel packages. Explore fascinating cultures, stunning scenery, and thrilling experiences. We offer something for everyone, whether you're traveling with a family, in a partnership, or on your own. Allow us to make your vacation aspirations come true. Now is the time to explore! </p>
                    <br />
                    <br />

                    <a href="#">Learn More</a>
                </div>
                <div className="tours">
                    <div className="places">
                        <h2 style={{fontSize: '25.5px'}}>UTTAR PRADESH</h2>
                        <img src='./img1.png' style={{width: '300px', height: '250px', borderRadius: '0 0 12px 12px'}} />
                        <br />
                        <br />
                        <a href="#">Book Now 15% OFF</a>
                    </div>
                    <div className="places">
                        <h2>UTTRAKHAND</h2>
                        <img src='himalaya.jpg' style={{width: '300px', height: '250px', borderRadius: '0 0 12px 12px'}} />
                        <br />
                        <br />
                        <a href="#">Book Now 20% OFF</a>
                    </div>
                    <div className="places">
                        <h2>TAMILNADU</h2>
                        <img src='./img3.jpg' style={{width: '300px', height: '250px', borderRadius: '0 0 12px 12px'}} />
                        <br />
                        <br />
                        <a href="#">Book Now 25% OFF</a>
                    </div>
                </div>
            </div>
        </>
    )
}