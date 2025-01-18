import React from 'react'
import Media from '../Assests/Media'

const EndImages = () => {
    return (
        <div className='flex flow-row justify-center items-center w-full h-fit gap-6 self-end mt-[90px]'>

            {/* image div  */}
            <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-black rounded-[18px] flex justify-center items-center'>
                <img className='scale-150' src={Media.call} alt="" />
            </div>
            {/* image div  */}
            <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-black rounded-[18px] flex justify-center items-center'>
                <img className='scale-150' src={Media.call} alt="" />
            </div>
            {/* image div  */}
            <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-black rounded-[18px] flex justify-center items-center'>
                <img className='scale-150' src={Media.call} alt="" />
            </div>
            {/* image div  */}
            <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-black rounded-[18px] flex justify-center items-center'>
                <img className='scale-150' src={Media.call} alt="" />
            </div>

        </div>
    )
}

export default EndImages
