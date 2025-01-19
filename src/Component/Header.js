import React from 'react'
import Media from '../Assests/Media'

const Header = () => {
    const headerInfo = [
        {
            detail: "+91808000 6060/+ 91 8080401010",
            logo: Media.call
        },
        {
            detail: "sales@tickets365.in",
            logo: Media.message
        },
        {
            detail: "www.holidays365.in",
            logo: Media.globe
        },
        {
            detail: "24 Bajaar Peth, 1st Floor, Bhiwandi 421302",
            logo: Media.location
        }
    ]

    return (
        <div className='flex flex-row w-full h-fit gap-[160.5px] pt-[12.7px] justify-center items-center' style={{ printColorAdjust: 'exact' }}>
            {/* image  */}
            <img
                className='w-[220px] h-fit'
                src={Media.logo}
                alt=""
                style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                }}
            />
            <img
                className='w-[220px] h-fit'
                src={Media.header}
                alt=""
                style={{
                    transform: 'translateZ(0)',
                    backfaceVisibility: 'hidden'
                }}
            />





        </div>
    )
}

export default Header