import style from '../CSS/ApplyComponent.module.css'

const ApplyComponent = ({id,title,desc,image}) => {
  return <div className={style.ApplyComponent} key={id}>
    <h2>{title}</h2>
    <p>{desc}</p>
    <img src={image} alt="" />
  </div>
}

export default ApplyComponent
