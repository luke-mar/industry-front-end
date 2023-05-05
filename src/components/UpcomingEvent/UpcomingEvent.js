import './UpcomingEvent.scss';
import lunch from '../../Assets/PNG/event.png'
import cal from '../../Assets/Vector/Calendar.svg'
import loc from '../../Assets/PNG/Waypoint.png'

function UpcomingEvent() {
  return (
    <>
        <div className='upcoming-all'>
            <div className='photo-container'>
                <img className='actual' src={lunch} alt='eventphoto'></img>
            </div>
        

        <div className='text-container'>
            <p className=''>May 11</p>
            <h1 className='tex3'>Dinner at Taco Stand</h1>
            <p>Mixer for new employees and vets to get to know each other. No worries, dinner is on us.</p>

            <p className='tex2 sp'>Time & Place</p>
            <div className='row-container'>

                <div className='row-container'>
                    <img className='im' src={cal} alt='cal'></img>
                    <div className='column-container'>
                        <p className='tex'>Date & Time</p>
                        <p className='tex colo'>Thurs, May 11 • 6 8.30pm EST</p>
                    </div>
                </div>

                <div className='row-container2'>
                    <img className='im' src={loc} alt='cal'></img>
                    <div className='column-container'>
                        <p className='tex'>Location</p>
                        <p className='tex colo'>Red Rooser 920 NW 2nd Ave Miami, FL 33136</p>
                    </div>
                </div>

            </div>

            <div className='bub sp'>R S V P</div>

        </div>

        </div>
    </>
  );
}

export default UpcomingEvent;
