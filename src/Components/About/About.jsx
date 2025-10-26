import React from 'react'
import './About.css'
import about_img from'../../assets/about.png'
import play_icon from'../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
           <p> 
                There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration in some form, by injected humour, or randomised words which don't look even 
                slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, mak    
            </p>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                Nemo enim ipsam voluptatem quia voluptas sit 
           </p>
           <p>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you 
            a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes
           </p>
      </div>
    </div>
  )
}

export default About
