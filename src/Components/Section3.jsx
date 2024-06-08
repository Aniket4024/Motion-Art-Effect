import style from '../CSS/Section3.module.css'
import { GoArrowRight } from "react-icons/go";


const Section3 = () => {
  return <div id={style.Section3} className='flex'>
    <div id={style.S3Left}>
        <h1>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
        <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>

        <button className='flex'>
            Purchase From Envato
            <span><GoArrowRight /></span>
        </button>
    </div>
    <div className='flex' id={style.S3Right}>
        <img src={require("../Assets/glitterStick.png")} alt="" />
    </div>
  </div>
}

export default Section3
