import style from '../CSS/Footer.module.css'



const Footer = () => {
  return <div id={style.Footer}>
    <div className='flex'>
        <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>

        <div className='flex'>
            <span>Documentation</span>
            <span>Support</span>
        </div>
    </div>
  </div>
}

export default Footer
