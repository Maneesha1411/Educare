import React, { useRef } from 'react'
import '../testimonials/Testimonials.css'
import next_icon from '../../assets/next_icon.png'
import back_icon from '../../assets/back_icon.png'
import user_1 from '../../assets/user_1.png'
import user_2 from '../../assets/user_2.png'
import user_3 from '../../assets/user_3.png'
import user_4 from '../../assets/user_4.png'
const Testimonials = () => {
    const [tx,setTx]=React.useState(0);
    const slideforward=()=>{
        if(tx>-75){
            setTx(tx-25);
        }
    }
     const slidebackward=()=>{
        if(tx<0){
            setTx(tx+25);
        }
    }
  return (
    <div className='testimonials'>
      <img  src={next_icon} alt="" className='next-btn' onClick={slideforward}/>
      <img  src={back_icon} alt="" className='back-btn' onClick={slidebackward}/>
    <div className="slider">
        <ul style={{transform:`translateX(${tx}%)`}}>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. The supportive community, state-of-the-art facilities,
                        and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. The supportive community, state-of-the-art facilities,
                        and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. The supportive community, state-of-the-art facilities,
                        and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="userinfo">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity,USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of
                        the best decisions I've ever made. The supportive community, state-of-the-art facilities,
                        and commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonials
