import profilePic from './assets/mee.jpeg'

function Card(){
    return(
        <div className="card">
            <img className="pic" src={profilePic} alt='profile Picture'></img>
            <h2 className='card-header' >Bro Code</h2>
            <p className='para' >I am learning react</p>
        </div>
    );
}

export default Card;