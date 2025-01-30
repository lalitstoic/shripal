import React, { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Media from '../Assests/Media';
import Header from './Header';

const PdfTwo = () => {
    const [locationName, setLocationName] = useState('')
    const contentRef = useRef(null);
    const [image, setImage] = useState(null)

    const [landPackageAdult, setLandPackageAdult] = useState('')
    const [landPackageChild, setLandPackageChild] = useState('')

    const [notes, setNotes] = useState('');
    const [inlcusion, setInclusion] = useState('');
    const [exclusion, setExclusion] = useState('');

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

    const [days, setDays] = useState('');
    const [nights, setNights] = useState('');


    // notes code here 
    const notesArray = notes.split(".")
    // inclusion code here 
    const incArray = inlcusion.split(".")
    // notes code here 
    const excArray = exclusion.split(".")

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

    // to add multiple days and their details 
    const [data, setData] = useState([
        {
            day: "Day 1",
            details: [""],
        },
    ]);

    const addDay = () => {
        const newDayNumber = data.length + 1;
        setData([...data, { day: `Day ${newDayNumber}`, details: ["Detail 1"] }]);
    };
    const removeDay = () => {
        if (data.length > 1) {
            const updatedData = [...data];
            updatedData.pop();
            setData(updatedData);
        }
    };

    const addDetail = (dayIndex) => {
        const updatedData = [...data];
        updatedData[dayIndex].details.push(`Detail ${updatedData[dayIndex].details.length + 1}`);
        setData(updatedData);
    };

    const removeLastDetail = (dayIndex) => {
        const updatedData = [...data];
        if (updatedData[dayIndex].details.length > 1) {
            updatedData[dayIndex].details.pop();
            setData(updatedData);
        }
    };

    const handleDayChange = (value, index) => {
        const updatedData = [...data];
        updatedData[index].day = value;
        setData(updatedData);
    };

    const handleDetailChange = (value, dayIndex, detailIndex) => {
        const updatedData = [...data];
        updatedData[dayIndex].details[detailIndex] = value;
        setData(updatedData);
    };


    const [hotelData, setHotelData] = useState([
        {
            status: "",
            info: [
                { name: "", detail: "" },
            ],
            adultCost: "",
            childCost: "",
        },
    ]);

    // Add a new table
    const addTable = () => {
        setHotelData([
            ...hotelData,
            {
                status: "",
                info: [{ name: "", detail: "" }],
                adultCost: "",
                childCost: "",
            },
        ]);
    };

    // Remove a table
    const removeTable = (index) => {
        const updatedTables = [...hotelData];
        updatedTables.splice(index, 1);
        setHotelData(updatedTables);
    };

    // Add a row to a specific table
    const addRow = (tableIndex) => {
        const updatedTables = [...hotelData];
        updatedTables[tableIndex].info.push({ name: "", detail: "" });
        setHotelData(updatedTables);
    };

    // Remove a row from a specific table
    const removeRow = (tableIndex, rowIndex) => {
        const updatedTables = [...hotelData];
        if (updatedTables[tableIndex].info.length > 1) {
            updatedTables[tableIndex].info.splice(rowIndex, 1);
            setHotelData(updatedTables);
        }
    };

    // Update inputs
    const handleInputChange = (tableIndex, rowIndex, field, value) => {
        const updatedTables = [...hotelData];
        if (field === "name" || field === "detail") {
            updatedTables[tableIndex].info[rowIndex][field] = value;
        } else {
            updatedTables[tableIndex][field] = value;
        }
        setHotelData(updatedTables);
    };


    // const data = [
    //     {
    //         day: "Day 1",
    //         details: [
    //             "Detail 1",
    //             "Detail 2",
    //             "Detail 3",
    //             "Detail 4",
    //             "Detail 5",
    //             "Detail 6",
    //             "Detail 7",
    //             "Detail 8",
    //             "Detail 9",
    //             "Detail 10",
    //             "Detail 11",
    //             "Detail 12",
    //             "Detail 13",
    //             "Detail 14",
    //             "Detail 15",
    //             "Detail 16",
    //         ],
    //     },
    //     {
    //         day: "Day 2",
    //         details: ["Detail 1", "Detail 2", "Detail 3"],
    //     },
    //     {
    //         day: "Day 3",
    //         details: ["Detail 1", "Detail 2"],
    //     },
    //     {
    //         day: "Day 4",
    //         details: [
    //             "Detail 1",
    //             "Detail 2",
    //             "Detail 3",
    //             "Detail 4",
    //             "Detail 5",
    //             "Detail 6",
    //             "Detail 7",
    //             "Detail 8",
    //             "Detail 9",
    //             "Detail 10",
    //             "Detail 11",
    //             "Detail 12",
    //             "Detail 13",
    //             "Detail 14",
    //             "Detail 15",
    //             "Detail 16",
    //             "Detail 16",
    //         ],
    //     },
    //     {
    //         day: "Day 5",
    //         details: [
    //             "Detail 1",
    //             "Detail 2",
    //             "Detail 3",
    //             "Detail 4",
    //             "Detail 5",
    //             "Detail 6",
    //             "Detail 7",
    //             "Detail 8",
    //             "Detail 9",
    //             "Detail 10",
    //             "Detail 11",
    //             "Detail 12",
    //             "Detail 13",
    //             "Detail 14",
    //             "Detail 15",
    //             "Detail 16",
    //             "Detail 16",
    //         ],
    //     },
    //     {
    //         day: "Day 5",
    //         details: [
    //             "Detail 1",
    //             "Detail 2",
    //             "Detail 3",
    //             "Detail 4",
    //             "Detail 5",
    //             "Detail 6",
    //             "Detail 7",
    //             "Detail 8",
    //             "Detail 9",
    //             "Detail 10",
    //             "Detail 11",
    //             "Detail 12",
    //             "Detail 13",
    //             "Detail 14",
    //             "Detail 15",
    //             "Detail 16",
    //             "Detail 16",
    //         ],
    //     }
    // ];

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
        filename: `${locationName}`,
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

            {/* Main container */}
            <div className="max-w-6xl mx-auto p-6 space-y-8">
                {/* Top inputs section */}
                <div className="space-y-4 mb-8">
                    <input
                        type="text"
                        onChange={(e) => setLocationName(e.target.value)}
                        className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                        placeholder="Location Name"
                    />
                    <input
                        type="text"
                        onChange={(e) => setNights(e.target.value)}
                        className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                        placeholder="Number of Nights"
                    />
                    <input
                        type="text"
                        onChange={(e) => setDays(e.target.value)}
                        className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                        placeholder="Number of Days"
                    />
                    <p>Choose the Cover page image for the PDF</p>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full px-4 py-2 mb-4 border border-[#293d69] rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#293d69] file:text-white hover:file:bg-[#1e2f4f]"
                    />
                    <input
                        type="text"
                        onChange={(e) => setLandPackageAdult(e.target.value)}
                        placeholder='eg: JPY 259,000 /-'
                        value={landPackageAdult}
                        className="w-full px-4 py-2 mb-4 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                    />
                    <input
                        type="text"
                        onChange={(e) => setLandPackageChild(e.target.value)}
                        placeholder='eg: JPY 138,000 /-'
                        value={landPackageChild}
                        className="w-full px-4 py-2 mb-4 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                    />
                </div>

                {/* Days section */}
                <div className="space-y-6 mb-8">
                    {data.map((day, dayIndex) => (
                        <div key={dayIndex} className="border border-[#293d69] rounded-lg p-6 space-y-4">
                            <input
                                type="text"
                                value={day.day}
                                onChange={(e) => handleDayChange(e.target.value, dayIndex)}
                                className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                            />
                            <div className="space-y-2">
                                {day.details.map((detail, detailIndex) => (
                                    <div key={detailIndex} className="flex items-center space-x-2">
                                        <input
                                            type="text"
                                            value={detail}
                                            onChange={(e) => handleDetailChange(e.target.value, dayIndex, detailIndex)}
                                            className="flex-1 px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="flex space-x-4">
                                <button onClick={() => addDetail(dayIndex)} className="px-4 py-2 bg-[#293d69] text-white rounded-lg hover:bg-[#1e2f4f]">
                                    Add Detail
                                </button>
                                <button onClick={() => removeLastDetail(dayIndex)} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                                    Remove Last Detail
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="flex space-x-4">
                        <button onClick={addDay} className="px-6 py-2 bg-[#293d69] text-white rounded-lg hover:bg-[#1e2f4f]">
                            Add Day
                        </button>
                        <button onClick={removeDay} className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                            Remove Day
                        </button>
                    </div>
                </div>

                {/* Circle Images section */}
                <div className="mb-8">
                    <h2 className="text-[#293d69] font-semibold mb-4 text-lg">Circle Images</h2>
                    <div className="flex flex-wrap gap-4">
                        {['One', 'Two', 'Three', 'Four'].map((num, index) => (
                            <div key={index} className="flex-1 min-w-[200px]">
                                <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                                    <span className="mb-2">Circle {num}</span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={eval(`handleImageChangeCircle${num}`)}
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Square Images section */}
                <div className="mb-8">
                    <h2 className="text-[#293d69] font-semibold mb-4 text-lg">Square Images</h2>
                    <div className="flex flex-wrap gap-4">
                        {['One', 'Two', 'Three', 'Four'].map((num, index) => (
                            <div key={index} className="flex-1 min-w-[200px]">
                                <label className="flex flex-col items-center px-4 py-2 bg-white text-[#293d69] rounded-lg border border-[#293d69] cursor-pointer hover:bg-[#293d69] hover:text-white transition-colors">
                                    <span className="mb-2">Square {num}</span>
                                    <input
                                        type="file"
                                        className="hidden"
                                        onChange={eval(`handleImageSqure${num}`)}
                                    />
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hotel Data section */}
                <div className="space-y-6">
                    {hotelData.map((table, tableIndex) => (
                        <div key={tableIndex} className="border border-[#293d69] rounded-lg p-6 space-y-4">
                            <div className="flex justify-between items-center">
                                <input
                                    type="text"
                                    value={table.status}
                                    onChange={(e) => handleInputChange(tableIndex, null, "status", e.target.value)}
                                    placeholder="Enter Status (e.g., 4 Star)"
                                    className="flex-1 mr-4 px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                                />
                                <button onClick={() => removeTable(tableIndex)} className="px-4 py-2 text-red-500 hover:text-red-600">
                                    Remove Table
                                </button>
                            </div>

                            {table.info.map((row, rowIndex) => (
                                <div key={rowIndex} className="flex space-x-4">
                                    <input
                                        type="text"
                                        value={row.name}
                                        onChange={(e) => handleInputChange(tableIndex, rowIndex, "name", e.target.value)}
                                        placeholder="Tokyo"
                                        className="flex-1 px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                                    />
                                    <input
                                        type="text"
                                        value={row.detail}
                                        onChange={(e) => handleInputChange(tableIndex, rowIndex, "detail", e.target.value)}
                                        placeholder=" Keio Presso Inn Hamamatsucho or Similar"
                                        className="flex-1 px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                                    />
                                    <button onClick={() => removeRow(tableIndex, rowIndex)} className="px-4 py-2 text-red-500 hover:text-red-600">
                                        Remove Hotel
                                    </button>
                                </div>
                            ))}

                            <button onClick={() => addRow(tableIndex)} className="w-full px-4 py-2 bg-[#293d69] text-white rounded-lg hover:bg-[#1e2f4f]">
                                Add Hotel
                            </button>

                            <div className="flex space-x-4">
                                <input
                                    type="text"
                                    value={table.adultCost}
                                    onChange={(e) => handleInputChange(tableIndex, null, "adultCost", e.target.value)}
                                    placeholder="Enter Adult Cost"
                                    className="flex-1 px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                                />
                                <input
                                    type="text"
                                    value={table.childCost}
                                    onChange={(e) => handleInputChange(tableIndex, null, "childCost", e.target.value)}
                                    placeholder="Enter Child Cost"
                                    className="flex-1 px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69]"
                                />
                            </div>
                        </div>
                    ))}
                    <button onClick={addTable} className="w-full px-4 py-2 bg-[#293d69] text-white rounded-lg hover:bg-[#1e2f4f]">
                        Add Table
                    </button>
                </div>

                {/* Notes and Textareas section */}
                <div className="space-y-6">
                    <div className="space-y-4">
                        <textarea
                            className="w-full h-32 px-4 py-3 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent resize-vertical"
                            placeholder="Notes : add a full stop after every disclaimer"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                        />
                    </div>

                    <div className="space-y-4">
                        <textarea
                            className="w-full h-32 px-4 py-3 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent resize-vertical"
                            placeholder="Inclusion : add a full stop after every line"
                            value={inlcusion}
                            onChange={(e) => setInclusion(e.target.value)}
                        />
                    </div>

                    <div className="space-y-4">
                        <textarea
                            className="w-full h-32 px-4 py-3 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent resize-vertical"
                            placeholder="Exclusion : add a full stop after every line"
                            value={exclusion}
                            onChange={(e) => setExclusion(e.target.value)}
                        />
                    </div>
                </div>

                {/* Download button */}
                <button onClick={convertToPdf} className="w-full px-6 py-3 bg-[#293d69] text-white rounded-lg hover:bg-[#1e2f4f] font-semibold">
                    Download PDF
                </button>
            </div>

            {/* paste above here the designing  */}

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
                            <h2 className="alice text-[31.2px] text-white">{nights} Nights {days} Days</h2>
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
                                    <img src={Media.whitecall} />
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
                                    <img src={Media.whitemessage} />
                                </div>
                                {/* the text */}
                                <p className='alice text-[12.6px] text-white'>
                                    sales@tickets365.in
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                {/* second third and four page automatically generated  */}

                {/* {
                    groups.length !== 1 && (
                        console.log("There is data ")
                    )
                } */}

                {
                    data[0].details[0] !== "" && groups.map((group, index) => (
                        <div style={{
                            backgroundImage: `url(${Media.backgroundlogo})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`
                        }}
                            className="w-full h-[858.75px] flex flex-col justify-start items-center"
                        >

                            <Header />

                            {
                                index === 0 && (
                                    <div className='mt-[22.77px] flex flex-col justify-center items-center'>
                                        {/* title  */}
                                        <h3 className='alice text-[15px] blue'> <b>{locationName}</b></h3>
                                        <h3 className='alice text-[15px] blue'> <b>{nights} Nights {days} Days</b></h3>
                                    </div>
                                )
                            }





                            {/* main div that contains the right and left div  */}
                            <div className='flex flex-row justify-center items-center gap-[11px] mt-[41px]'>

                                {/* left div  */}

                                <div className='flex flex-col w-[406px] h-[574px] gap-6'>

                                    {
                                        group.map((item, index) => (
                                            <div key={index} className='flex flex-col justify-center items-start w-full h-fitgap-1'>
                                                <p className='alice text-[15px] blue font-black'> <b>{item.day}</b></p>
                                                <ul className='ml-[25px] alice blue'>
                                                    {
                                                        item.details.map((detail, detailIndex) => (
                                                            <li key={detailIndex} className='list-disc listwrap'>{detail}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>

                                {/* right div  */}
                                <div className='flex flex-col justify-center items-center w-[138px] h-[574px] gap-10'>

                                    {
                                        index === 0 && (
                                            <div className='flex flex-col gap-10'>


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


                {/* new page  */}

                <div style={{
                    backgroundImage: `url(${Media.backgroundlogo})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}
                    className="w-full h-[858.75px] flex flex-col justify-start items-center"
                >

                    <Header />

                    {
                        landPackageAdult !== "" && (
                            <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>
                                <p className='alice text-[15px] blue font-black'> <b>Land Package:</b></p>
                                <p className='alice text-[15px] blue font-black mt-[26px]'> <b>Tour Cost {landPackageAdult} /- Per Person</b></p>
                                <p className='alice text-[15px] blue font-black'> <b>Tour Cost {landPackageChild} /- Per Child (Child Above 6 Years)</b> </p>
                            </div>
                        )
                    }



                    <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>


                        {
                            hotelData[0].status !== "" && (
                                <div>
                                    <p className='alice text-[15px] blue font-black'> <b>Accomodations:</b></p>

                                    <table className="w-full border-collapse mt-[43.85px]">
                                        <thead>
                                            <tr>
                                                <th className="alice border border-black bg-[#293D69] text-white p-2 pt-0" colSpan="2">{hotelData[0].status}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                hotelData[0].info.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="alice blue border border-black citycell pt-0">{item.name}</td>
                                                        <td className="alice blue border border-black p-2 pt-0 wrap-accommodation">{item.detail}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div className='flex flex-col justify-center items-start w-full h-fit gap-1 mt-[58px]'>
                                        <p className='alice text-[15px] blue font-black mt-[26px]'>Hotel Cost - <b>{hotelData[0].adultCost}</b></p>
                                        <p className='alice text-[15px] blue font-black'>Hotel Cost - <b>{hotelData[0].childCost}</b> </p>
                                    </div>
                                </div>

                            )
                        }




                    </div>


                </div>


                {
                    hotelData.slice(1).map((item, index) => (
                        <div key={index} style={{
                            backgroundImage: `url(${Media.backgroundlogo})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`
                        }}
                            className="w-full h-[858.75px] bg-red-300 flex flex-col justify-start items-center"
                        >

                            <Header />

                            <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[128px]'>

                                <div>
                                    <table className="w-full border-collapse mt-[43.85px]">
                                        <thead>
                                            <tr>
                                                <th className="alice border border-black bg-[#293D69] text-white p-2 pt-0" colSpan="2">{item.status}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                item.info.map((value, valueIndex) => (
                                                    <tr key={valueIndex}>
                                                        <td className="alice blue border border-black citycell pt-0">{value.name}</td>
                                                        <td className="alice blue border border-black p-2 pt-0 wrap-accommodation">{value.detail}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div className='flex flex-col justify-center items-start w-full h-fit gap-1 mt-[58px]'>
                                        <p className='alice text-[15px] blue font-black mt-[26px]'>Hotel Cost - <b>{item.adultCost}</b></p>
                                        <p className='alice text-[15px] blue font-black'>Hotel Cost - <b>{item.childCost}</b> </p>
                                    </div>
                                </div>

                            </div>


                        </div>
                    ))
                }


                {
                    (inlcusion !== "" || exclusion !== "") && (
                        <div style={{
                            backgroundImage: `url(${Media.backgroundlogo})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`
                        }}
                            className="w-full h-[858.75px] bg-blue-300 flex flex-col justify-start items-center"
                        >
                            <Header />
                            {
                                inlcusion && (
                                    <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>
                                        <p className='alice text-[15px] blue font-black'><b>Inclusion:</b></p>
                                        {
                                            incArray.map((inc, incIndex) => (
                                                <ul className='ml-12 alice blue'>
                                                    <li key={incIndex} className='list-disc listwrap'>{inc}</li>
                                                </ul>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            {
                                exclusion && (
                                    <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>
                                        <p className='alice text-[15px] blue font-black'><b>Exclusion:</b></p>
                                        {
                                            excArray.map((exc, excIndex) => (
                                                <ul className='ml-12 alice blue'>
                                                    <li key={excIndex} className='list-disc listwrap'>{exc}</li>

                                                </ul>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                }

                {
                    (notes !== "") && (
                        <div style={{
                            backgroundImage: `url(${Media.backgroundlogo})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`
                        }}
                            className="w-full h-[858.75px] bg-blue-300 flex flex-col justify-start items-center"
                        >
                            <Header />
                            {
                                notes && (
                                    <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>
                                        <p className='alice text-[15px] blue font-black'><b>Note:</b></p>
                                        {
                                            notesArray.map((note, noteIndex) => (
                                                <ul className='ml-12 alice blue'>
                                                    <li key={noteIndex} className='list-disc listwrap'>{note}</li>

                                                </ul>
                                            ))
                                        }
                                    </div>
                                )
                            }
                        </div>
                    )
                }

            </div>
















        </div>
    )
}

export default PdfTwo;


// const hotelData = [
//     {
//         status: "4 star",
//         info: [
//             {
//                 name: "Tokyo",
//                 detail: "Hotel East 21 Tokyo or Similar"
//             },
//             {
//                 name: "Tokyo",
//                 detail: "Hotel East 21 Tokyo or Similar"
//             },
//             {
//                 name: "Tokyo",
//                 detail: "Hotel East 21 Tokyo or Similar"
//             },
//         ],
//         adultCost: "JPY 255,000 /- per adult",
//         childCost: "JPY 255,000 /- per child (Child above 6 Years) ",
//     }
// ];