import style from '../CSS/Section2.module.css'
import user1 from "../Assets/motionarteffect-img1.png"
import user2 from "../Assets/motionarteffect-img2.png"
import user3 from "../Assets/motionarteffect-img3.png"
import ratingStars from "../Assets/ratingStars.png"
import UserRatingCard from './UserRatingCard'

const ratingData = [
    {
        id:1,
        logo:user1,
        ratings:ratingStars,
        score:4.5,
        reviews:9
    },
    {
        id:2,
        logo:user2,
        ratings:ratingStars,
        score:4.5,
        reviews:9
    },
    {
        id:3,
        logo:user3,
        ratings:ratingStars,
        score:4.5,
        reviews:9
    },
]

const Section2 = () => {
  return <div id={style.Section2}>
    <h3>Trusted by thousands of users around the world</h3>
    <div id={style.userRatings} className='flex'>
        {
            ratingData?.map((e)=>{
                return <UserRatingCard key={e?.id} {...e} />
            })
        }
    </div>
  </div>
}

export default Section2
