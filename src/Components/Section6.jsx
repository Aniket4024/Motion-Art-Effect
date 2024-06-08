import style from '../CSS/Section6.module.css'
import energy from "../Assets/energy.png"
import thumb from "../Assets/thumb.png"
import moon from "../Assets/moon.png"
import FeaturesComponent from './FeaturesComponent'


const FeatureData = [
    {
        id:1,
        title:"Light Weight",
        desc:"Motion Art for Elementor is designed to be lightweight.",
        image:energy
    },
    {
        id:2,
        title:"100% Responsive",
        desc:"Create a consistent visual experience across all devices.",
        image:thumb
    },
    {
        id:3,
        title:"User Friendly Interface",
        desc:"Ensure a smooth experience for both applicants and administrators.",
        image:moon
    },
]



const Section6 = () => {
  return <div id={style.Section6}>
    <h1>An All-Round Plugin With Powerful Features</h1>
    <p>Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.</p>
    <div id={style.S6Bottom} className='flex'>
        {
            FeatureData?.map((e)=>{
                return <FeaturesComponent key={e?.id} {...e} />
            })
        }
    </div>
  </div>
}

export default Section6
