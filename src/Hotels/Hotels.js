import "./Hotels.css";

export default function Hotels() {
    return (
        <>
            <div className="hotels">
                <div class="card">
                    <div className="imgT">
                        <img src="hotel1.jpeg" id="hotelsI" />
                        <div class="container">
                            <h4><b>The Oberoi New Delhi</b></h4>
                            <p>New Delhi, India</p>
                        </div>
                    </div>
                    <p id="dataP">Nestled amidst sprawling greenery, The Oberoi New Delhi offers panoramic views of Delhi's Golf Club and the UNESCO World Heritage site of Humayun's Tomb. The rooms are inspired by the majestic contemporary interpretation of Sir Edwin Lutyens' interiors</p>
                </div>
                <div class="card">
                    <div className="imgT">
                        <img src="hotel2.jpeg" className="hotelsI" />
                        <div class="container">
                            <h4><b>Evolve Back Kabini</b></h4>
                            <p>Udaipur, India</p>
                        </div>
                    </div>
                    <p id="dataP">The Leela Palace Udaipur promises a tranquil and undisturbed escape while overlooking the splendours of Lake Pichola. Backed by Aravalli Hills, this stately hotel houses an exclusive spa, manicured gardens, and an outdoor pool. All guestrooms at the hotel are lavishly appointed with exquisite embellishments and traditional artisan crafts inspired by the rich cultural heritage of Rajasthan.</p>
                </div>
                <div class="card">
                    <div className="imgT">
                        <img src="hotel3.jpeg" className="hotelsI" />
                        <div class="container">
                            <h4><b>The Oberoi New Delhi</b></h4>
                            <p>Maysore, India</p>
                        </div>
                    </div>
                    <p id="dataP">The stunning Evolve Back stands out with its unique décor with wooden floors and thatched roofs. It has a beautiful infinity pool, overlooking the Kabini River and a relaxing in-house spa with all kinds of pampering ayurvedic treatments. Each bungalow has a private dining space, spacious bathrooms and excellent surroundings.</p>
                </div>
                <div class="card">
                    <div className="imgT">
                        <img src="hotel4.jpeg" className="hotelsI" />
                        <div class="container">
                            <h4><b>The Westin Gurgaon</b></h4>
                            <p>New Delhi, India</p>
                        </div>
                    </div>
                    <p id="dataP">Powered by the reputed hotel chain, the Marriott, this extravagant 5-star hotel is situated in the heart of the business hub in Gurgaon, ideal for business and leisure travellers. The hotel features well-appointed rooms covered in luxurious furnishings and contemporary decor with world class amenities, two splendid swimming pools, gym, therapeutic spa treatments and lavish indoor/outdoor banquet spaces for hosting grand events</p>
                </div>
                <div class="card">
                    <div className="imgT">
                        <img src="hotel5.jpeg" className="hotelsI" />
                        <div class="container">
                            <h4><b>The Taj Hotel</b></h4>
                            <p>Mumbai, India</p>
                        </div>
                    </div>
                    <p id="dataP">The iconic Taj Mahal Tower stands majestically facing the Gateway of India and the Arabian Sea, keeping you at the city’s nerve centre of art, culture and glamour. Stylishly designed with 14th-century arched balconies and Indian design elements, the well-appointed suites feature city, sea and pool views. For an extravagant dining feast, the on-site restaurants serve innovative Japanese, Chinese and other international delicacies. </p>
                </div>
                <div class="card">
                    <div className="imgT">
                        <img src="hotel6.jpeg" className="hotelsI" />
                        <div class="container">
                            <h4><b>Taj Hotel Place</b></h4>
                            <p>Udaipur, India</p>
                        </div>
                    </div>
                    <p id="dataP">Floating in the middle of Lake Pichola, this 5-star resort offers ornate accommodations and top-notch amenities. Once featured in a James Bond movie, this island hotel has opulent suites with antique elements and spacious living rooms. Their restaurants serve European delicacies with rooftop dining options. They also have a chic bar, outdoor pool and spa.</p>
                </div>
            
            </div>
        </>
    )
}