import { FaHome, FaTools } from "react-icons/fa";
import { LuBellDot } from "react-icons/lu";
import { TbDotsVertical } from "react-icons/tb";
import './index.css'

const Header = () => {

    return (
        <nav className='header-container'>
            <div className='logo-container'>
                <img src="https://deepthought.education/assets/images/logo/logo.svg" className="nav-logo-img" alt="website-logo" />
            </div>
            <ul className='nav-section'>
                <li className='nav-icon-container'>
                    <FaHome className="nav-icon" />
                </li>
                <li className='nav-icon-container'>
                    <FaTools className="nav-icon" />
                </li>
                <li className='nav-icon-container'>
                    <LuBellDot className="nav-icon" />
                </li>
                <li className='nav-icon-container-img'>
                    <img src="https://img.freepik.com/premium-photo/young-beautiful-woman-with-beautiful-hair-front-camera_1218867-180104.jpg?w=740"
                        className="nav-img" alt="profile-img" />
                </li>
                <li className='nav-icon-container-img'>
                    <TbDotsVertical className="nav-more"/>
                </li>

            </ul>

        </nav>
    )
}
export default Header