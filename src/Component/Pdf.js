import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Media from '../Assests/Media.js';
import Header from './Header.js';

const Pdf = () => {
    const contentRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };


    // hotel table data related code 
    const [heading, setHeading] = useState('');
    const [inputGroups, setInputGroups] = useState([
        {
            destination: '',
            accommodation: '',
            roomCategory: '',
            numberOfNights: '',
            checkIn: '',
            checkOut: ''
        }
    ]);

    // Handle input change in any of the fields
    const handleInputChange = (index, event) => {
        const { name, value } = event.target;
        const updatedInputGroups = [...inputGroups];
        updatedInputGroups[index][name] = value;
        setInputGroups(updatedInputGroups);
    };

    // Handle adding a new group of inputs
    const addNewGroup = () => {
        setInputGroups([
            ...inputGroups,
            {
                destination: '',
                accommodation: '',
                roomCategory: '',
                numberOfNights: '',
                checkIn: '',
                checkOut: ''
            }
        ]);
    };

    console.log(inputGroups.length)

    // table for adding itnery 
    const [dates, setDates] = useState([
        { date: '23 Feb', activities: ['We will dance'] },
    ]);

    const handleAddActivity = (dateIndex) => {
        const newDates = [...dates];
        newDates[dateIndex].activities.push('');
        setDates(newDates);
    };

    const handleActivityChange = (dateIndex, activityIndex, value) => {
        const newDates = [...dates];
        newDates[dateIndex].activities[activityIndex] = value;
        setDates(newDates);
    };

    const handleAddDate = () => {
        setDates([
            ...dates,
            { date: '', activities: [''] },
        ]);
    };

    const handleDateChange = (index, value) => {
        const newDates = [...dates];
        newDates[index].date = value;
        setDates(newDates);
    };



    const options = {
        filename: 'my-document.pdf',
        margin: 0, // No margin to ensure the content fills the page
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 3 },
        jsPDF: { unit: 'px', format: [612, 858.75], orientation: 'portrait' }, // A4 size in pixels
    };

    const convertToPdf = () => {
        const content = contentRef.current;
        html2pdf().set(options).from(content).save();
    };

    return (
        <div className="">
            <div>
                <div>
                    {dates.map((date, dateIndex) => (
                        <div key={dateIndex}>
                            <div className="date-container">
                                <input
                                    type="text"
                                    placeholder="Enter date"
                                    value={date.date}
                                    onChange={(e) => handleDateChange(dateIndex, e.target.value)}
                                />
                                {date.activities.map((activity, activityIndex) => (
                                    <div key={activityIndex} className="activity-container">
                                        <input
                                            type="text"
                                            placeholder="Describe activity"
                                            value={activity}
                                            onChange={(e) => handleActivityChange(dateIndex, activityIndex, e.target.value)}
                                        />
                                    </div>
                                ))}
                                <button onClick={() => handleAddActivity(dateIndex)}>+ Add Activity</button>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={handleAddDate}>+ Add Date</button>

                {/* Display the data in a table */}
                <table border="1">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Activities</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dates.map((date, dateIndex) => (
                            <tr key={dateIndex}>
                                <td>{date.date}</td>
                                <td>
                                    {date.activities.join(', ')}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div>
                {inputGroups.map((group, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <div>
                            <label>Destination:</label>
                            <input
                                type="text"
                                name="destination"
                                value={group.destination}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div>
                            <label>Accommodation:</label>
                            <input
                                type="text"
                                name="accommodation"
                                value={group.accommodation}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div>
                            <label>Room Category:</label>
                            <input
                                type="text"
                                name="roomCategory"
                                value={group.roomCategory}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div>
                            <label>Number of Nights:</label>
                            <input
                                type="text"
                                name="numberOfNights"
                                value={group.numberOfNights}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div>
                            <label>Check-in:</label>
                            <input
                                type="text"
                                name="checkIn"
                                value={group.checkIn}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        <div>
                            <label>Check-out:</label>
                            <input
                                type="text"
                                name="checkOut"
                                value={group.checkOut}
                                onChange={(event) => handleInputChange(index, event)}
                            />
                        </div>
                        {/* Add a plus button to add a new group */}
                        {index === inputGroups.length - 1 && (
                            <button onClick={addNewGroup} style={{ marginTop: '10px' }}>
                                + Add another group
                            </button>
                        )}
                    </div>
                ))}

                {/* Render a table based on the inputGroups state */}
                <table border="1" style={{ marginTop: '30px', width: '100%' }}>
                    <thead>
                        <tr>
                            <th>Destination</th>
                            <th>Accommodation</th>
                            <th>Room Category</th>
                            <th>Number of Nights</th>
                            <th>Check-in</th>
                            <th>Check-out</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inputGroups.slice(0, 2).map((group, index) => (
                            <tr key={index}>
                                <td>{group.destination}</td>
                                <td>{group.accommodation}</td>
                                <td>{group.roomCategory}</td>
                                <td>{group.numberOfNights}</td>
                                <td>{group.checkIn}</td>
                                <td>{group.checkOut}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4"
            />
            <input placeholder='Enter hotel table heading' type="text" value={heading} onChange={(e) => setHeading(e.target.value)} />

            <div ref={contentRef} className="w-[612px] h-fit bg-slate-400 flex flex-col justify-center items-center self-center">
                {/* First page content */}
                <div style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}
                    className="w-full h-[858.75px] bg-red-300 flex flex-col justify-end items-center"
                >

                    <div className="flex flex-col justify-center items-center gap-[130.24px] pb-[22.89px]">
                        {/* div for headings */}
                        <div className="flex flex-col justify-center items-center">
                            <p className="el text-[90.6px] text-white">FINLAND</p>
                            {/* Adjusted positioning without absolute */}
                            <h2 className="alice text-[31.2px] text-white">7 NIGHTS 8 DAYS</h2>
                        </div>

                        <img className="w-[135px] h-[48.62px] mix-blend-multiply" src={Media.logo} alt="" />
                    </div>
                </div>










                {/* Second page content */}
                <div
                    className="w-full h-[858.75px] bg-green-300 flex flex-col justify-start items-center"
                >
                    <Header />

                    <h3 className='alice text-[15px] blue mt-[103.85px]'>FINLAND 7 N 8 D</h3>

                    {/* table div  */}
                    <div className='w-[516px] h-fit mt-[59px] gap-0'>

                        <div className="w-full">
                            {/* Title */}
                            <div className="text-center border border-t-black border-l-black border-r-black pt-2 pb-2">
                                <p className="alice blue text-gray-700">No. of pax: 04 adults (02 rooms)</p>
                            </div>

                            {/* Table */}
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="alice border border-black bg-[#293D69] text-white p-2">Destination</th>
                                        <th className="alice border border-black bg-[#293D69] text-white p-2">Accommodation</th>
                                        <th className="alice border border-black bg-[#293D69] text-white p-2">Room Category</th>
                                        <th className="alice border border-black bg-[#293D69] text-white p-2">No. of Nights</th>
                                        <th className="alice border border-black bg-[#293D69] text-white p-2">Check in</th>
                                        <th className="alice border border-black bg-[#293D69] text-white p-2">Check Out</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inputGroups.slice(0, 2).map((group, index) => (
                                        <tr key={index}>
                                            <td className="alice blue border border-black p-2">{group.destination}</td>
                                            <td className="alice blue border border-black p-2 wrap-accommodation">{group.accommodation}</td>
                                            <td className="alice blue border border-black p-2 text-center">{group.roomCategory}</td>
                                            <td className="alice blue border border-black p-2 text-center">{group.numberOfNights}</td>
                                            <td className="alice blue border border-black p-2 text-center">{group.checkIn}</td>
                                            <td className="alice blue border border-black p-2 text-center">{group.checkOut}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>

                    </div>

                    {/* circle images  */}

                    <div className='flex flex-row gap-[37px] justify-center items-center rounded-full mt-[47px]'>

                        {/* circle one  */}
                        <div className='w-[183px] h-[183px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                            {/* smaller circle  */}
                            <div className='w-[169px] h-[169px] overflow-hidden flex justify-center items-center rounded-full'>
                                <img src={Media.call} alt="" />
                            </div>
                        </div>
                        {/* circle two  */}
                        <div className='w-[133px] h-[133px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                            {/* smaller circle  */}
                            <div className='w-[122.83px] h-[122.83px] overflow-hidden flex justify-center items-center rounded-full'>
                                <img src={Media.call} alt="" />
                            </div>
                        </div>
                        {/* circle three  */}
                        <div className='w-[88px] h-[88px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                            {/* smaller circle  */}
                            <div className='w-[81.27px] h-[81.27px] overflow-hidden flex justify-center items-center rounded-full'>
                                <img src={Media.call} alt="" />
                            </div>
                        </div>


                    </div>

                </div>


                {
                    inputGroups.length > 2 && (
                        <div
                            className="w-full h-[858.75px] bg-green-300 flex flex-col justify-start items-center"
                        >
                            <Header />

                            {/* table div  */}
                            <div className='w-[516px] h-fit mt-[59px] gap-0'>

                                <div className="w-full">
                                    {/* Title */}
                                    <div className="text-center border border-t-black border-l-black border-r-black pt-2 pb-2">
                                        <p className="alice blue text-gray-700">No. of pax: 04 adults (02 rooms)</p>
                                    </div>

                                    {/* Table */}
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr>
                                                <th className="alice border border-black bg-[#293D69] text-white p-2">Destination</th>
                                                <th className="alice border border-black bg-[#293D69] text-white p-2">Accommodation</th>
                                                <th className="alice border border-black bg-[#293D69] text-white p-2">Room Category</th>
                                                <th className="alice border border-black bg-[#293D69] text-white p-2">No. of Nights</th>
                                                <th className="alice border border-black bg-[#293D69] text-white p-2">Check in</th>
                                                <th className="alice border border-black bg-[#293D69] text-white p-2">Check Out</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {inputGroups.slice(2).map((group, index) => (
                                                <tr key={index}>
                                                    <td className="alice blue border border-black p-2">{group.destination}</td>
                                                    <td className="alice blue border border-black p-2 wrap-accommodation">{group.accommodation}</td>
                                                    <td className="alice blue border border-black p-2 text-center">{group.roomCategory}</td>
                                                    <td className="alice blue border border-black p-2 text-center">{group.numberOfNights}</td>
                                                    <td className="alice blue border border-black p-2 text-center">{group.checkIn}</td>
                                                    <td className="alice blue border border-black p-2 text-center">{group.checkOut}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>


                                </div>

                            </div>

                        </div>
                    )
                }



                {/* real third page  */}
                <div
                    className="w-full h-[858.75px] bg-blue-300 flex flex-col justify-start items-center"
                >

                    <Header />

                </div>





            </div>
            <button onClick={convertToPdf}>Download PDF</button>
        </div>
    );
};

export default Pdf;
