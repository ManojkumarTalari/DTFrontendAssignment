import './index.css'
import { FaCircleArrowRight, FaCircleArrowLeft } from "react-icons/fa6";
import { useState } from 'react';


const JourneySection = () => {
    const [currentStatus, setStatus] = useState(false)
    const onChangeStatus = () => setStatus(prevState => !prevState)
    const renderCollapsedView = () => (
        <div className='journey-container'>
            <div className='journey-top-section'>
                <button className='arrow-container' onClick={onChangeStatus}>
                    <FaCircleArrowRight className='arrow-icon' />
                </button>
            </div>
            <div className='journey-bottom-section'>
                <div>
                    <button className='one-btn'>1</button>
                </div>

            </div>
        </div>
    )
    const renderExpandedView = () => (
        <div className='journey-container-collapsed'>

            <div className='journey-collapsed-top-section'>
                <h1 className='journey-heading'>Journey Board</h1>
                <button className='arrow-container' onClick={onChangeStatus}>
                    <FaCircleArrowLeft className='arrow-icon' />
                </button>
            </div>
            <div className='journey-bottom-section-collapsed'>
                <div className='bottom-info-container'>
                    <h1 className='bottom-heading'>Explore the world of management</h1>
                    <ul className='features-list'>
                        <li className='feature-item'>Technical Project Management</li>
                        <li className='feature-item'>Threadbuild</li>
                        <li className='feature-item'>  Structure your pointers</li>
                        <li className='feature-item'>4SA Method</li>
                    </ul>
                </div>
            </div>

        </div>
    )
    return (
        <>
        {renderCollapsedView()}
       {currentStatus && renderExpandedView()}
    </>
    
    )
}

export default JourneySection