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

    const [landPackageAdult, setLandPackageAdult] = useState('Tour Cost ')
    const [landPackageChild, setLandPackageChild] = useState('Tour Cost ')

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
            <input
                type="text"
                onChange={(e) => setLandPackageAdult(e.target.value)}
                placeholder='Land package for adults'
                value={landPackageAdult}
                className="mb-4"
            />
            <input
                type="text"
                onChange={(e) => setLandPackageChild(e.target.value)}
                placeholder='Land package for adults'
                value={landPackageChild}
                className="mb-4"
            />

            <div style={{ padding: "20px" }}>
                {data.map((day, dayIndex) => (
                    <div key={dayIndex} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
                        {/* Day Input */}
                        <input
                            type="text"
                            value={day.day}
                            onChange={(e) => handleDayChange(e.target.value, dayIndex)}
                            style={{ marginBottom: "10px", display: "block", padding: "5px" }}
                        />
                        {/* Details Input */}
                        {day.details.map((detail, detailIndex) => (
                            <div key={detailIndex} style={{ display: "flex", alignItems: "center", marginBottom: "5px" }}>
                                <input
                                    type="text"
                                    value={detail}
                                    onChange={(e) => handleDetailChange(e.target.value, dayIndex, detailIndex)}
                                    style={{ flex: 1, padding: "5px" }}
                                />
                            </div>
                        ))}
                        {/* Buttons for Adding/Removing Details */}
                        <button onClick={() => addDetail(dayIndex)} style={{ marginRight: "10px" }}>
                            Add Detail
                        </button>
                        <button onClick={() => removeLastDetail(dayIndex)}>Remove Last Detail</button>
                    </div>
                ))}
                {/* Add Day Button */}
                <button onClick={addDay} style={{ marginTop: "20px" }}>
                    Add Day
                </button>
                {/* Add Day Button */}
                <button onClick={removeDay} style={{ marginTop: "20px" }}>
                    Remove Day
                </button>
                {/* <pre style={{ marginTop: "20px", background: "#f4f4f4", padding: "10px" }}>
                    {JSON.stringify(data, null, 2)}
                </pre> */}
            </div>

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

            <div>
                {hotelData.map((table, tableIndex) => (
                    <div key={tableIndex} className="border p-4 mb-4">
                        <div className="flex justify-between mb-2">
                            <input
                                type="text"
                                value={table.status}
                                onChange={(e) =>
                                    handleInputChange(tableIndex, null, "status", e.target.value)
                                }
                                placeholder="Enter Status (e.g., 4 Star)"
                                className="border p-2"
                            />
                            <button
                                onClick={() => removeTable(tableIndex)}
                                className="text-red-500"
                            >
                                Remove Table
                            </button>
                        </div>

                        {table.info.map((row, rowIndex) => (
                            <div key={rowIndex} className="flex gap-4 mb-2">
                                <input
                                    type="text"
                                    value={row.name}
                                    onChange={(e) =>
                                        handleInputChange(tableIndex, rowIndex, "name", e.target.value)
                                    }
                                    placeholder="Enter Name"
                                    className="border p-2"
                                />
                                <input
                                    type="text"
                                    value={row.detail}
                                    onChange={(e) =>
                                        handleInputChange(
                                            tableIndex,
                                            rowIndex,
                                            "detail",
                                            e.target.value
                                        )
                                    }
                                    placeholder="Enter Detail"
                                    className="border p-2"
                                />
                                <button
                                    onClick={() => removeRow(tableIndex, rowIndex)}
                                    className="text-red-500"
                                >
                                    Remove Row
                                </button>
                            </div>
                        ))}
                        <button
                            onClick={() => addRow(tableIndex)}
                            className="bg-blue-500 text-white p-2 mb-2"
                        >
                            Add Row
                        </button>

                        <div className="flex gap-4">
                            <input
                                type="text"
                                value={table.adultCost}
                                onChange={(e) =>
                                    handleInputChange(tableIndex, null, "adultCost", e.target.value)
                                }
                                placeholder="Enter Adult Cost"
                                className="border p-2"
                            />
                            <input
                                type="text"
                                value={table.childCost}
                                onChange={(e) =>
                                    handleInputChange(tableIndex, null, "childCost", e.target.value)
                                }
                                placeholder="Enter Child Cost"
                                className="border p-2"
                            />
                        </div>
                    </div>
                ))}
                <button onClick={addTable} className="bg-green-500 text-white p-2">
                    Add Table
                </button>

                {/* <pre className="mt-4 p-4 bg-gray-100 border">{JSON.stringify(hotelData, null, 2)}</pre> */}

            </div>

            <div className="space-y-6 bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <div className="space-y-2">
                    <textarea
                        className="w-full h-32 px-4 py-3 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent resize-vertical"
                        placeholder="Notes : add a full stop after every disclaimer"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <textarea
                        className="w-full h-32 px-4 py-3 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent resize-vertical"
                        placeholder="Inclusion : add a full stop after every line"
                        value={inlcusion}
                        onChange={(e) => setInclusion(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <textarea
                        className="w-full h-32 px-4 py-3 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent resize-vertical"
                        placeholder="Exclusion : add a full stop after every line"
                        value={exclusion}
                        onChange={(e) => setExclusion(e.target.value)}
                    />
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

                {/* second third and four page automatically generated  */}

                {
                    groups && groups.map((group, index) => (
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
                                        <h3 className='alice text-[15px] blue'> <b>{dan}</b></h3>
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
                                                            <li key={detailIndex} className='list-disc text-wrap'>{detail}</li>
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

                    <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>
                        <p className='alice text-[15px] blue font-black'> <b>Land Package:</b></p>
                        <p className='alice text-[15px] blue font-black mt-[26px]'> <b>{landPackageAdult}</b></p>
                        <p className='alice text-[15px] blue font-black'> <b>{landPackageChild}</b> </p>
                    </div>


                    <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>

                        {
                            hotelData.length > 1 && (
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
                                                        <td className="alice blue border border-black citycell pt-0">Hotel Cost - {item.name}</td>
                                                        <td className="alice blue border border-black p-2 pt-0 wrap-accommodation">Hotel Cost - {item.detail}</td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
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
                                                    <li key={incIndex} className='list-disc text-wrap'>{inc}</li>
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
                                                    <li key={excIndex} className='list-disc text-wrap'>{exc}</li>

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
                                                    <li key={noteIndex} className='list-disc text-wrap'>{note}</li>

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