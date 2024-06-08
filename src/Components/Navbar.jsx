import style from '../CSS/Navbar.module.css'

const Navbar = () => {
  return <div id={style.Navbar} className='flex'>
    <img src={require("../Assets/motionarteffectlogo.png")} alt="" />
    <button id={style.purchaseButn}>Purchase Now</button>
  </div>
}

export default Navbar
