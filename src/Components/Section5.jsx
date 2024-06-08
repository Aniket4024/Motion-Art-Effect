import style from '../CSS/Section5.module.css'

const Section5 = () => {
  return <div id={style.Section5}>
    <h2>Supported by All Popular Browsers</h2>
    <p>Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
    <img src={require("../Assets/allBrowser.png")} alt="" />
  </div>
}

export default Section5
