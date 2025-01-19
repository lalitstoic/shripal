import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Media from '../Assests/Media';
import Header from './Header';

const PdfTwo = () => {
    const [locationName, setLocationName] = useState('')
    const [dan, setDan] = useState('');
    const [title, setTitle] = useState('')
    const contentRef = useRef(null);
    const [image, setImage] = useState(null)

    // circle images 
    const [circleOne, setCircleOne] = useState(null)
    const [circleTwo, setCircleTwo] = useState(null)
    const [circleThree, setCircleThree] = useState(null)
    const [circleFour, setCircleFour] = useState(null)
    // square images 
    const [sqOne, setSqOne] = useState(null)
    const [sqTwo, setSqTwo] = useState(null)
    const [sqThree, setSqThree] = useState(null)
    const [sqFour, setSqFour] = useState(null)

    // circle images 
    const handleImageChangeCircleOne = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCircleOne(URL.createObjectURL(file));
        }
    };
    const handleImageChangeCircleTwo = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCircleTwo(URL.createObjectURL(file));
        }
    };
    const handleImageChangeCircleThree = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCircleThree(URL.createObjectURL(file));
        }
    };
    const handleImageChangeCircleFour = (e) => {
        const file = e.target.files[0];
        if (file) {
            setCircleFour(URL.createObjectURL(file));
        }
    };

    //squares



    // square iamges 
    const handleImageSqureOne = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSqOne(URL.createObjectURL(file));
        }
    };
    const handleImageSqureTwo = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSqTwo(URL.createObjectURL(file));
        }
    };
    const handleImageSqureThree = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSqThree(URL.createObjectURL(file));
        }
    };
    const handleImageSqureFour = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSqFour(URL.createObjectURL(file));
        }
    };


    const data = [
        {
            day: "Day 1",
            details: [
                "Detail 1",
                "Detail 2",
                "Detail 3",
                "Detail 4",
                "Detail 5",
                "Detail 6",
                "Detail 7",
                "Detail 8",
                "Detail 9",
                "Detail 10",
                "Detail 11",
                "Detail 12",
                "Detail 13",
                "Detail 14",
                "Detail 15",
                "Detail 16",
            ],
        },
        {
            day: "Day 2",
            details: ["Detail 1", "Detail 2", "Detail 3"],
        },
        {
            day: "Day 3",
            details: ["Detail 1", "Detail 2"],
        },
        {
            day: "Day 4",
            details: [
                "Detail 1",
                "Detail 2",
                "Detail 3",
                "Detail 4",
                "Detail 5",
                "Detail 6",
                "Detail 7",
                "Detail 8",
                "Detail 9",
                "Detail 10",
                "Detail 11",
                "Detail 12",
                "Detail 13",
                "Detail 14",
                "Detail 15",
                "Detail 16",
                "Detail 16",
            ],
        },
        {
            day: "Day 5",
            details: [
                "Detail 1",
                "Detail 2",
                "Detail 3",
                "Detail 4",
                "Detail 5",
                "Detail 6",
                "Detail 7",
                "Detail 8",
                "Detail 9",
                "Detail 10",
                "Detail 11",
                "Detail 12",
                "Detail 13",
                "Detail 14",
                "Detail 15",
                "Detail 16",
                "Detail 16",
            ],
        },
        {
            day: "Day 5",
            details: [
                "Detail 1",
                "Detail 2",
                "Detail 3",
                "Detail 4",
                "Detail 5",
                "Detail 6",
                "Detail 7",
                "Detail 8",
                "Detail 9",
                "Detail 10",
                "Detail 11",
                "Detail 12",
                "Detail 13",
                "Detail 14",
                "Detail 15",
                "Detail 16",
                "Detail 16",
            ],
        }
    ];

    const limit = 19; // Maximum number of details allowed per div
    const groups = []; // To store the groups of days
    let currentGroup = [];
    let totalDetails = 0;

    // Splitting the data into groups
    data.forEach((day) => {
        const detailsCount = day.details.length;

        if (totalDetails + detailsCount <= limit) {
            // Add the day to the current group
            currentGroup.push(day);
            totalDetails += detailsCount;
        } else {
            // Save the current group and start a new one
            groups.push(currentGroup);
            currentGroup = [day];
            totalDetails = detailsCount;
        }
    });

    // Add the last group if it has any days
    if (currentGroup.length > 0) {
        groups.push(currentGroup);
    }







    //pdf generating code
    const options = {
        filename: `${locationName, title} || noheading`,
        margin: 0, // No margin to ensure the content fills the page
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'px', format: [612, 858.75], orientation: 'portrait' }, // A4 size in pixels
    };

    const convertToPdf = () => {
        const content = contentRef.current;
        html2pdf().set(options).from(content).save();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div className='w-full h-fit flex flex-col justify-center items-center'>

            <input
                type="text"
                onChange={(e) => setLocationName(e.target.value)}
                className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                placeholder="Location Name"
            />
            <input
                type="text"
                onChange={(e) => setDan(e.target.value)}
                className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                placeholder="Dan"
            />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
            />

            {/* Circle File Inputs */}
            <div className="mb-8">
                <h2 className="text-[#293d69] font-semibold mb-4 text-lg">Circle Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex flex-col items-center">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                            <span className="mb-2">Circle One</span>
                            <input type="file" className="hidden" onChange={handleImageChangeCircleOne} />
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                            <span className="mb-2">Circle Two</span>
                            <input type="file" className="hidden" onChange={handleImageChangeCircleTwo} />
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                            <span className="mb-2">Circle Three</span>
                            <input type="file" className="hidden" onChange={handleImageChangeCircleThree} />
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                            <span className="mb-2">Circle Four</span>
                            <input type="file" className="hidden" onChange={handleImageChangeCircleFour} />
                        </label>
                    </div>
                </div>
            </div>

            {/* Square File Inputs */}
            <div>
                <h2 className="text-[#293d69] font-semibold mb-4 text-lg">Square Images</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                            <span className="mb-2">Square One</span>
                            <input type="file" className="hidden" onChange={handleImageSqureOne} />
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                            <span className="mb-2">Square Two</span>
                            <input type="file" className="hidden" onChange={handleImageSqureTwo} />
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                            <span className="mb-2">Square Three</span>
                            <input type="file" className="hidden" onChange={handleImageSqureThree} />
                        </label>
                    </div>
                    <div className="flex flex-col items-center">
                        <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                            <span className="mb-2">Square Four</span>
                            <input type="file" className="hidden" onChange={handleImageSqureFour} />
                        </label>
                    </div>
                </div>
            </div>






            <button onClick={convertToPdf}>Download PDF</button>

            {/* main div  */}
            <div ref={contentRef} className="w-[612px] h-fit bg-slate-400 flex flex-col justify-center items-center self-center mb-[200px]">

                {/* First page content */}
                <div style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}
                    className="w-full h-[858.75px] bg-red-300 flex flex-col justify-between items-center"
                >

                    {/* main title on the front page  */}
                    <div className="flex flex-col justify-center items-center mt-[28px] gap-[130.24px] pb-[22.89px]">
                        {/* div for headings */}
                        <div className="flex flex-col justify-center items-center">
                            <p className="el text-[160px] text-white">{locationName}</p>
                            {/* Adjusted positioning without absolute */}
                            <h2 className="alice text-[31.2px] text-white">{dan}</h2>
                        </div>

                    </div>

                    <div className='flex flex-col justify-center items-center w-full gap-[3.5px] pb-[15.7px]'>
                        <img className="w-[219px] h-[75.31px]" src={Media.logo1} alt="" />

                        <div className='flex flex-row justify-center items-center gap-5'>
                            {/* // single detail */}
                            <div className='grid grid-cols-[15px_auto] gap-[7.5px] items-center'>
                                {/* image with its div */}
                                <div className='flex justify-center items-center overflow-hidden w-[19px] h-[19px] rounded-full'>
                                    {/* svg image */}
                                    <img src={Media.call} />
                                </div>
                                {/* the text */}
                                <p className='alice text-[12.6px] text-white'>
                                    +918080206060
                                </p>
                            </div>
                            {/* // single detail */}
                            <div className='grid grid-cols-[15px_auto] gap-[7.5px] items-center'>
                                {/* image with its div */}
                                <div className='flex justify-center items-center overflow-hidden w-[19px] h-[19px] rounded-full'>
                                    {/* svg image */}
                                    <img src={Media.call} />
                                </div>
                                {/* the text */}
                                <p className='alice text-[12.6px] text-white'>
                                    sales@tickets365.in
                                </p>
                            </div>
                        </div>


                    </div>
                </div>








                {
                    groups && groups.map((group, index) => (
                        <div style={{
                            backgroundImage: `url(${Media.backgroundlogo})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`
                        }}
                            className="w-full h-[858.75px] bg-red-300 flex flex-col justify-start items-center border border-black"
                        >

                            <Header />

                            {
                                index === 0 && (
                                    <div className='mt-[22.77px] flex flex-col justify-center items-center'>
                                        {/* title  */}
                                        <h3 className='alice text-[15px] blue'> <b>JAPAN</b></h3>
                                        <h3 className='alice text-[15px] blue'> <b>11 Nights, 12 Days</b></h3>
                                    </div>
                                )
                            }





                            {/* main div that contains the right and left div  */}
                            <div className='flex flex-row justify-center items-center gap-[11px] mt-[41px]'>

                                {/* left div  */}

                                <div className='flex flex-col w-[406px] h-[574px] bg-red-400 gap-6'>

                                    {
                                        group.map((item, index) => (
                                            <div key={index} className='flex flex-col justify-center items-start w-full h-fitgap-1'>
                                                <p className='alice text-[15px] blue font-black'> <b>{item.day}</b></p>
                                                <ul className='ml-[25px] alice blue'>
                                                    {
                                                        item.details.map((detail, detailIndex) => (
                                                            <li key={detailIndex} className='list-disc text-wrap'>{detail}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* right div  */}
                                <div className='flex flex-col justify-center items-center w-[138px] h-[574px] bg-blue-400 gap-10'>

                                    {
                                        index === 0 && (
                                            <div>


                                                {/* circle one  */}
                                                <div className='w-[138px] h-[138px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                                                    {/* smaller circle  */}
                                                    <div className='w-[127.44px] h-[127.44px] overflow-hidden flex justify-center items-center rounded-full'>
                                                        {circleOne &&
                                                            <img className='scale-150' src={circleOne} alt="" />
                                                        }
                                                    </div>
                                                </div>
                                                {/* circle one  */}
                                                <div className='w-[138px] h-[138px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                                                    {/* smaller circle  */}
                                                    <div className='w-[127.44px] h-[127.44px] overflow-hidden flex justify-center items-center rounded-full'>
                                                        {circleTwo &&
                                                            <img className='scale-150' src={circleTwo} alt="" />
                                                        }
                                                    </div>
                                                </div>
                                                {/* circle one  */}
                                                <div className='w-[138px] h-[138px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                                                    {/* smaller circle  */}
                                                    <div className='w-[127.44px] h-[127.44px] overflow-hidden flex justify-center items-center rounded-full'>
                                                        {circleThree &&
                                                            <img className='scale-150' src={circleThree} alt="" />
                                                        }
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    }

                                    {
                                        index === 2 && (
                                            <div className='w-[138px] h-[138px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                                                {/* smaller circle  */}
                                                <div className='w-[127.44px] h-[127.44px] overflow-hidden flex justify-center items-center rounded-full'>
                                                    {circleFour &&
                                                        <img className='scale-150' src={circleFour} alt="" />
                                                    }
                                                </div>
                                            </div>
                                        )
                                    }


                                </div>




                            </div>
                            {/* bottom part of the div  */}
                            {
                                index === 1 && (
                                    <div className='flex flow-row justify-center items-center w-full h-fit gap-6 self-end mt-[18px]'>

                                        {/* image div  */}
                                        <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-[#293d69] rounded-[18px] flex justify-center items-center'>
                                            {sqOne &&
                                                <img className='scale-150' src={sqOne} alt="" />
                                            }
                                        </div>
                                        {/* image div  */}
                                        <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-[#293d69] rounded-[18px] flex justify-center items-center'>
                                            {sqTwo &&
                                                <img className='scale-150' src={sqTwo} alt="" />
                                            }
                                        </div>
                                        {/* image div  */}
                                        <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-[#293d69] rounded-[18px] flex justify-center items-center'>
                                            {sqThree &&
                                                <img className='scale-150' src={sqThree} alt="" />
                                            }
                                        </div>
                                        {/* image div  */}
                                        <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-[#293d69] rounded-[18px] flex justify-center items-center'>
                                            {sqFour &&
                                                <img className='scale-150' src={sqFour} alt="" />
                                            }
                                        </div>

                                    </div>
                                )
                            }

                        </div>
                    ))
                }




































            </div>















            <div>
                {groups.map((group, index) => (
                    <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        <h3>Div {index + 1}</h3>
                        {group.map((day) => (
                            <div key={day.day}>
                                <h4>{day.day}</h4>
                                {day.details.map((detail, idx) => (
                                    <p key={idx}>{detail}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                ))}

            </div>


        </div>
    )
}

export default PdfTwo;

