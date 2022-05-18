import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../doctors-portal/assets/images/chair.png'

const Appointment = () => {
    const [date, setDate] = useState(new Date());
    const [services, setServices] = useState([]);
    const [model, setModel] = useState([]);
    // console.log(model)

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <>
            <div className=" min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                    <img src={chair} className=" w-1/2 rounded-lg shadow-2xl" alt='' />
                    <div className=" ml-56 w-1/2">
                        <DayPicker mode="single" selected={date} onSelect={setDate} />
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-center text-green-700 text-lg mb-12'>Available Appointments on {format(date, 'PP')}</h1>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
                    {
                        services.map((service) => <div className=" card w-96 bg-base-100 shadow-xl image-full" key={service._id}>
                            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title" key={service._id}>{service.name}</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-center">
                                    <label htmlFor="my-modal-3" className="btn btn-primary bg-cyan-400 rounded" onClick={() => setModel(service)}>  BOOK APPOINTMENT </label>
                                </div>
                            </div>
                        </div>)
                    }
                </div>


                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm bg-gray-600 btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-bold mt-[-10px]">{model?.name}</h3>
                        <form>
                            <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full mt-5" />
                            <select className="select select-bordered w-full mt-5">
                                {
                                    model?.slots?.map(data => <option  defaultValue value={data} key={model?._id + (Math.random() *100)}>{data}</option>   )
                                }
                            {/* <option  defaultValue value={model?.slots}>{model?.slots}</option>                   */}
                            </select>
                            <input type="text" placeholder="Full Name" className="input input-bordered w-full mt-5" />
                            <input type="text" placeholder="Phone Number" className="input input-bordered w-full mt-5" />
                            <input type="text" placeholder="Email Address" className="input input-bordered w-full mt-5" />
                            <input type="submit" className="cursor-pointer input input-bordered w-full mt-5 bg-gray-600 text-white font-serif rounded" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Appointment;