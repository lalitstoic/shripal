import { useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';
import Media from '../Assests/Media.js';
import Header from './Header.js';
import EndImages from './EndImages.js';

const Pdf = () => {
    const contentRef = useRef(null);
    const [image, setImage] = useState(null);
    const [notes, setNotes] = useState('');
    const [inlcusion, setInclusion] = useState('');
    const [exclusion, setExclusion] = useState('');

    //last page
    const [priceDisclaimer, setPriceDisclaimer] = useState('');
    const [price, setPrice] = useState('');

    // first page 
    const [locationName, setLocationName] = useState('');
    const [dan, setDan] = useState('');
    const [title, setTitle] = useState('');
    const [tableHeading, setTableHeading] = useState('')



    // circle images 
    const [circleOne, setCircleOne] = useState(null)
    const [circleTwo, setCircleTwo] = useState(null)
    const [circleThree, setCircleThree] = useState(null)

    // square images 
    const [sqOne, setSqOne] = useState(null)
    const [sqTwo, setSqTwo] = useState(null)
    const [sqThree, setSqThree] = useState(null)
    const [sqFour, setSqFour] = useState(null)


    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

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

    const removeLastGroup = () => {
        setInputGroups(prevGroups => {
            if (prevGroups.length > 1) {
                return prevGroups.slice(0, -1); // Remove the last element
            }
            return prevGroups; // If no groups are left, return the array as is
        });
    };


    console.log(inputGroups.length)

    // table for adding itnery 
    const [dates, setDates] = useState([
        { date: '23 Feb', activities: ['We will dance'] },
    ]);

    // const handleAddActivity = (dateIndex) => {
    //     const newDates = [...dates];
    //     newDates[dateIndex].activities.push('');
    //     setDates(newDates);
    // };

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
    const handleRemoveLastDate = () => {
        setDates(prevDates => {
            if (prevDates.length > 1) {
                return prevDates.slice(0, -1); // Remove the last element
            }
            return prevDates; // If no dates are left, return the array as is
        });
    };


    const handleDateChange = (index, value) => {
        const newDates = [...dates];
        newDates[index].date = value;
        setDates(newDates);
    };


    console.log(dates)

    // notes code here 
    const notesArray = notes.split(".")
    // inclusion code here 
    const incArray = inlcusion.split(".")
    // notes code here 
    const excArray = exclusion.split(".")



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

    return (
        <div className="">

            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                {/* Form Inputs */}
                <div className="space-y-4 mb-8">
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
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                        placeholder="Title"
                    />
                    <input
                        type="text"
                        onChange={(e) => setTableHeading(e.target.value)}
                        className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                        placeholder="Table Heading"
                    />
                    <input
                        type="text"
                        onChange={(e) => setPriceDisclaimer(e.target.value)}
                        className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                        placeholder="Price Disclaimer"
                    />
                    <input
                        type="text"
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                        placeholder="Actual price : Euro 1234"
                    />
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
            </div>





            <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <div className="space-y-6">
                    {dates.map((date, dateIndex) => (
                        <div key={dateIndex} className="border border-[#293d69] rounded-lg p-4">
                            <div className="date-container space-y-4">
                                <input
                                    type="text"
                                    placeholder="Enter date"
                                    value={date.date}
                                    onChange={(e) => handleDateChange(dateIndex, e.target.value)}
                                    className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                                />
                                {date.activities.map((activity, activityIndex) => (
                                    <div key={activityIndex} className="activity-container">
                                        <input
                                            type="text"
                                            placeholder="Describe activity"
                                            value={activity}
                                            onChange={(e) => handleActivityChange(dateIndex, activityIndex, e.target.value)}
                                            className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleAddDate}
                    className="mt-4 px-6 py-2 bg-white text-[#293d69] border-2 border-[#293d69] rounded-lg hover:bg-[#293d69] hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                    <span className="text-xl font-bold">+</span> Add Date
                </button>
                <button
                    onClick={handleRemoveLastDate}
                    className="mt-4 px-6 py-2 bg-white text-[#293d69] border-2 border-[#293d69] rounded-lg hover:bg-[#293d69] hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                    <span className="text-xl font-bold">-</span> Add Date
                </button>
            </div>


            <div>
                {inputGroups.map((group, index) => (
                    <div key={index} className="mb-8 p-6 border border-[#293d69] rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="block text-[#293d69] font-medium">Destination:</label>
                                <input
                                    type="text"
                                    name="destination"
                                    value={group.destination}
                                    onChange={(event) => handleInputChange(index, event)}
                                    className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[#293d69] font-medium">Accommodation:</label>
                                <input
                                    type="text"
                                    name="accommodation"
                                    value={group.accommodation}
                                    onChange={(event) => handleInputChange(index, event)}
                                    className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[#293d69] font-medium">Room Category:</label>
                                <input
                                    type="text"
                                    name="roomCategory"
                                    value={group.roomCategory}
                                    onChange={(event) => handleInputChange(index, event)}
                                    className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[#293d69] font-medium">Number of Nights:</label>
                                <input
                                    type="text"
                                    name="numberOfNights"
                                    value={group.numberOfNights}
                                    onChange={(event) => handleInputChange(index, event)}
                                    className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[#293d69] font-medium">Check-in:</label>
                                <input
                                    type="text"
                                    name="checkIn"
                                    value={group.checkIn}
                                    onChange={(event) => handleInputChange(index, event)}
                                    className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[#293d69] font-medium">Check-out:</label>
                                <input
                                    type="text"
                                    name="checkOut"
                                    value={group.checkOut}
                                    onChange={(event) => handleInputChange(index, event)}
                                    className="w-full px-4 py-2 border border-[#293d69] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#293d69] focus:border-transparent"
                                />
                            </div>
                        </div>

                        {index === inputGroups.length - 1 && (
                            <>
                                <button
                                    onClick={addNewGroup}
                                    className="mt-6 px-6 py-2 bg-white text-[#293d69] border-2 border-[#293d69] rounded-lg hover:bg-[#293d69] hover:text-white transition-colors duration-200 flex items-center gap-2"
                                >
                                    <span className="text-xl font-bold">+</span> Add another group
                                </button>
                                <button
                                    onClick={removeLastGroup}
                                    className="mt-6 px-6 py-2 bg-white text-[#293d69] border-2 border-[#293d69] rounded-lg hover:bg-[#293d69] hover:text-white transition-colors duration-200 flex items-center gap-2"
                                >
                                    <span className="text-xl font-bold">-</span> Remove the recently added group
                                </button>
                            </>
                        )}
                    </div>
                ))}

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
            <input placeholder='Enter Dates table heading' type="text" value={heading} onChange={(e) => setHeading(e.target.value)} />


            {/* main div  */}
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
                            <p className="el text-[90.6px] text-white">{locationName}</p>
                            {/* Adjusted positioning without absolute */}
                            <h2 className="alice text-[31.2px] text-white">{dan}</h2>
                        </div>

                        <img className="w-[135px] h-[48.62px]" src={Media.logonobg} alt="" />
                    </div>
                </div>










                {/* Second page content */}
                <div
                    style={{
                        backgroundImage: `url(${Media.backgroundlogo})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }}
                    className="w-full h-[858.75px] bg-green-300 flex flex-col justify-start items-center"
                >
                    <Header />

                    <h3 className='alice text-[15px] blue mt-[103.85px]'>{title}</h3>

                    {/* table div  */}
                    <div className='w-[516px] h-fit mt-[59px] gap-0'>

                        <div className="w-full">
                            {/* Title */}
                            <div className="text-center border border-t-black border-l-black border-r-black pt-2 pb-2">
                                <p className="alice blue text-gray-700">{tableHeading}</p>
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
                                            <td className="alice blue border border-black p-2 pt-0">{group.destination}</td>
                                            <td className="alice blue border border-black p-2 wrap-accommodation pt-0">{group.accommodation}</td>
                                            <td className="alice blue border border-black p-2 text-center pt-0">{group.roomCategory}</td>
                                            <td className="alice blue border border-black p-2 text-center pt-0">{group.numberOfNights}</td>
                                            <td className="alice blue border border-black p-2 text-center pt-0">{group.checkIn}</td>
                                            <td className="alice blue border border-black p-2 text-center pt-0">{group.checkOut}</td>
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
                                {circleOne &&
                                    <img className='scale-150' src={circleOne} alt="" />
                                }
                            </div>
                        </div>
                        {/* circle two  */}
                        <div className='w-[133px] h-[133px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                            {/* smaller circle  */}
                            <div className='w-[122.83px] h-[122.83px] overflow-hidden flex justify-center items-center rounded-full'>
                                {circleTwo &&
                                    <img className='scale-150' src={circleTwo} alt="" />
                                }
                            </div>
                        </div>
                        {/* circle three  */}
                        <div className='w-[88px] h-[88px] flex justify-center items-center border-2 border-[#293D69] rounded-full'>
                            {/* smaller circle  */}
                            <div className='w-[81.27px] h-[81.27px] overflow-hidden flex justify-center items-center rounded-full'>
                                {circleThree &&
                                    <img className='scale-150' src={circleThree} alt="" />
                                }
                            </div>
                        </div>


                    </div>

                </div>


                {
                    inputGroups.length > 2 && (
                        <div style={{
                            backgroundImage: `url(${Media.backgroundlogo})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`
                        }}
                            className="w-full h-[858.75px] bg-green-300 flex flex-col justify-start items-center"
                        >
                            <Header />

                            {/* table div  */}
                            <div className='w-[516px] h-fit mt-[59px] gap-0'>

                                <div className="w-full">
                                    {/* Title */}
                                    <div className="text-center border border-t-black border-l-black border-r-black pt-2 pb-2">
                                        <p className="alice blue text-gray-700">{tableHeading}</p>
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
                    style={{
                        backgroundImage: `url(${Media.backgroundlogo})`,
                        backgroundSize: `cover`,
                        backgroundPosition: `center`
                    }}
                    className="w-full h-[858.75px] bg-blue-300 flex flex-col justify-start items-center"
                >

                    <Header />
                    {/* table div  */}
                    <div className='w-[516px] h-fit mt-[59px] gap-0'>

                        {/* Table */}
                        <table className="w-full border-collapse mt-[43.85px]">
                            <thead>
                                <tr>
                                    <th className="alice border border-black bg-[#293D69] text-white p-2 pt-0">Date</th>
                                    <th className="alice border border-black bg-[#293D69] text-white p-2 pt-0">{heading}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dates.slice(0, 11).map((date, dateIndex) => (
                                    <tr key={dateIndex}>
                                        <td className="alice blue border border-black datecell pt-0">{date.date}</td>
                                        <td className="alice blue border border-black p-2 pt-0 wrap-accommodation">{date.activities}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>



                {
                    dates.length > 11 && (
                        <div
                            style={{
                                backgroundImage: `url(${Media.backgroundlogo})`,
                                backgroundSize: `cover`,
                                backgroundPosition: `center`
                            }}
                            className="w-full h-[858.75px] bg-blue-300 flex flex-col justify-start items-center"
                        >

                            <Header />
                            {/* table div  */}
                            <div className='w-[516px] h-fit mt-[59px] gap-0'>

                                {/* Table */}
                                <table className="w-full border-collapse mt-[43.85px]">
                                    <thead>
                                        <tr>
                                            <th className="alice border border-black bg-[#293D69] text-white p-2 pt-0">Date</th>
                                            <th className="alice border border-black bg-[#293D69] text-white p-2 pt-0">{heading} </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dates.slice(12, 22).map((date, dateIndex) => (
                                            <tr key={dateIndex}>
                                                <td className="alice blue border border-black datecell pt-0">{date.date}</td>
                                                <td className="alice blue border border-black p-2 wrap-accommodation pt-0">{date.activities}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    )
                }
                {
                    dates.length > 22 && (
                        <div style={{
                            backgroundImage: `url(${Media.backgroundlogo})`,
                            backgroundSize: `cover`,
                            backgroundPosition: `center`
                        }}
                            className="w-full h-[858.75px] bg-blue-300 flex flex-col justify-start items-center"
                        >

                            <Header />
                            {/* table div  */}
                            <div className='w-[516px] h-fit mt-[59px] gap-0'>

                                {/* Table */}
                                <table className="w-full border-collapse mt-[43.85px]">
                                    <thead>
                                        <tr>
                                            <th className="alice border border-black bg-[#293D69] text-white p-2 pt-0">Date</th>
                                            <th className="alice border border-black bg-[#293D69] text-white p-2 pt-0">Sightseeing on SIC basis <br /> no hotel pickup or drop off </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dates.slice(21).map((date, dateIndex) => (
                                            <tr key={dateIndex}>
                                                <td className="alice blue border border-black datecell pt-0">{date.date}</td>
                                                <td className="alice blue border border-black p-2 wrap-accommodation pt-0">{date.activities}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    )
                }


                {/* real third page  */}
                <div style={{
                    backgroundImage: `url(${Media.backgroundlogo})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}
                    className="w-full h-[858.75px] bg-blue-300 flex flex-col justify-start items-center"
                >

                    <Header />

                    <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>
                        <p className='alice text-[15px] blue font-black'> <b>{title}</b></p>
                        <p className='alice text-[15px] blue font-black'> <b>{priceDisclaimer}</b></p>
                        <p className='alice text-[15px] blue font-black'> <b>{price}</b> </p>
                    </div>

                    {/* notes  */}

                    {
                        notes && (
                            <div className='flex flex-col justify-center items-start w-full h-fit pl-[57px] gap-1 mt-[46px]'>
                                <p className='alice text-[15px] blue font-black'> <b>Note:</b></p>
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

                    <div className='flex flow-row justify-center items-center w-full h-fit gap-6 self-end mt-[90px]'>

                        {/* image div  */}
                        <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-black rounded-[18px] flex justify-center items-center'>
                            {
                                sqOne &&
                                <img className='scale-150' src={sqOne} alt="" />
                            }
                        </div>
                        {/* image div  */}
                        <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-black rounded-[18px] flex justify-center items-center'>
                            {
                                sqTwo &&
                                <img className='scale-150' src={sqTwo} alt="" />
                            }
                        </div>
                        {/* image div  */}
                        <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-black rounded-[18px] flex justify-center items-center'>
                            {
                                sqThree &&
                                <img className='scale-150' src={sqThree} alt="" />
                            }
                        </div>
                        {/* image div  */}
                        <div style={{ borderWidth: '2px' }} className='w-[104px] h-[108px] overflow-hidden border border-[#293d69] bg-black rounded-[18px] flex justify-center items-center'>
                            {
                                sqFour &&
                                <img className='scale-150' src={sqFour} alt="" />
                            }
                        </div>

                    </div>
                </div>


                {/* last page  */}

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
            </div>
            <button onClick={convertToPdf}>Download PDF</button>
        </div>
    );
};

export default Pdf;
