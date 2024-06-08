import style from '../CSS/FeaturesComponent.module.css'

const FeaturesComponent = ({id,title,desc,image}) => {
  return <div className={style.FeaturesComponent} key={id}>
    <img src={image} alt="" />
    <h2>{title}</h2>
    <p>{desc}</p>
  </div>
}

export default FeaturesComponent
