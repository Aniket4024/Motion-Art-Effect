import style from '../CSS/UserRatingCard.module.css'

const UserRatingCard = ({id,logo,ratings,score,reviews}) => {
  return <div className={`${style.UserRatingCard} flex`}>
    <img src={logo} alt="" />
    <div>
        <img src={ratings} alt="" />
        <p><span>{score}</span> Score, {reviews} Reviews</p>
    </div>
  </div>
}

export default UserRatingCard
