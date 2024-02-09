import profilePicture from './assets/blockchain.jpg'

function Card(){
  
  return (

    <div className="card">
      <img alt="profile picture" src={profilePicture} className='card-img'></img>
      <h2 className='card-title'>Nishant Mudgal</h2>
      <p className='card-desc'>M.S. in Information Systems and play racquetball</p>
    </div>

  );

}

export default Card