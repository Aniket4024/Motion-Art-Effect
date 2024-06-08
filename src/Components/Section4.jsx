import style from '../CSS/Section4.module.css'
import pageComponent from "../Assets/pageComponent.png"
import sectionComponent from "../Assets/sectionComponent.png"
import ApplyComponent from './ApplyComponent'


const ApplyComponentData = [
  {
    id:1,
    title:"Apply On Section",
    desc:"Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. ",
    image:sectionComponent
  },
  {
    id:2,
    title:"Apply On Page",
    desc:"Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.",
    image:pageComponent
  }
]

const Section4 = () => {
  return <div id={style.Section4}>
    <h1>Apply On Any Section Or Enable For Whole Page</h1>
    <div id={style.S4Bottom}>
      {
        ApplyComponentData?.map((e)=>{
          return <ApplyComponent key={e?.id} {...e}/>
        })
      }
    </div>
  </div>
}

export default Section4
