import './Emergency.css';

export default function EmergencyNumber(){
    return(
        <>
            <div className='EmergencyN'>
                <img id="iconE" src="./emergency.png" alt="" />
                <ol>
                    <li>National Emergency Number : 112 </li>
                    <li>Police : 100</li>
                    <li>Fire : 101 </li>
                    <li>Ambulance : 102</li>
                    <li>Women Helpline : 1091 </li>
                    <li>Railway Helpline : 139 </li>
                </ol>
            </div>
        </>
    )
}