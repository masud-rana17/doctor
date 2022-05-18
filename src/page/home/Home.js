import React from 'react';
// import { useForm } from "react-hook-form";
import chair from '../../doctors-portal/assets/images/chair.png'
import cavity from '../../doctors-portal/assets/images/cavity.png'
import fluoride from '../../doctors-portal/assets/images/fluoride.png'
import whitening from '../../doctors-portal/assets/images/whitening.png'
import clock from '../../doctors-portal/assets/icons/clock.svg'
import phone from '../../doctors-portal/assets/icons/phone.svg'
import marker from '../../doctors-portal/assets/icons/marker.svg'
import treatment from '../../doctors-portal/assets/images/treatment.png'
import doctorSmall from '../../doctors-portal/assets/images/doctor-small.png'
import appointment from '../../doctors-portal/assets/images/appointment.png'
import quote from '../../doctors-portal/assets/icons/quote.svg'
import Footer from '../Footer/Footer';


const Home = () => {
    const form = "mb-4 outline-0 p-2 rounded w-96 capitalize";

    return (
        <>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className='w-2/5' src={chair} alt={chair} />
                    <div>
                        <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary bg-teal-500 border-0 rounded">Get Started</button>
                    </div>
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 p-2'>
                <Info color={"bg-cyan-400"} text={"opening hours are 9 a.m. to 6 p.m"} cardTitle={"Opening Hours"} img={clock} />
                <Info color={"bg-gray-700"} text={"Brooklyn, NY 10036, United States"} cardTitle={"Visit our location"} img={marker} />
                <Info color={"bg-cyan-400"} text={"+000 123 456789"} cardTitle={"Contact us now"} img={phone} />
            </div>

            <div className='my-20 text-center'>
                <h1 className='uppercase text-bold text-cyan-400 text-xl'> our Services </h1>
                <h1 className='text-4xl'> Services We Provide </h1>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 p-2'>
                <Servises textTitle="Fluoride Treatment" textDs="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={fluoride} />
                <Servises textTitle="Cavity Filling" textDs="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={cavity} />
                <Servises textTitle="Teeth Whitening" textDs="Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the" img={whitening} />
            </div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-20'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <button className="btn btn-primary bg-teal-500 border-0 rounded">Get Started</button>
                    </div>
                </div>
            </div>

            <section style={{ backgroundImage: `url(${appointment})` }} className='flex mt-20 justify-center items-center'>
                <div className='flex-1'>
                    <img className='mt-[-100px] ml-[150px]' src={doctorSmall} alt="" />
                </div>

                <div className='ml-[200px] text-white flex-1'>
                    <h1 className='text-teal-500 text-xl py-2'>Appointment</h1>
                    <h1 className='text-4xl py-2'>Make an appointment Today</h1>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary mt-2 bg-teal-500 border-0 rounded">Get Started</button>
                </div>
            </section>

            <div className='my-16 flex justify-between'>
                <div>
                    <h1 className='text-teal-500'>Testimonial</h1>
                    <h3 className='text-2xl'>What Our Patients Says</h3>
                </div>
                <div className=' w-32'>
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5 my-10'>
                <Testimonial />
                <Testimonial />
                <Testimonial />
            </div>

            <div className='my-10 py-5 mb-4' style={{ backgroundImage: `url(${appointment})` }}>
                <div className='text-center py-5'>
                    <h1 className='text-xl text-teal-500'>Contact Us</h1>
                    <h1  className=' text-lg text-white'>Stay connected with us</h1>
                </div>
                <div className='text-center'>
                    <form> 
                        <input className={form} type={"email"} placeholder="email address" /> <br></br>
                        <input className={form} type={"text"} placeholder="your subject" /><br></br>
                        <textarea className={form} rows="10" placeholder='type hire'></textarea><br></br>
                        <input className="btn btn-primary mt-2 bg-teal-500 border-0 rounded" type="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

const Info = ({ cardTitle, img, color, text }) => {
    return (
        <div className={`card lg:card-side ${color} shadow-xl p-2`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body mb-3 text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

const Servises = ({ img, textTitle, textDs }) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{textTitle}</h2>
                <p>{textDs}</p>
            </div>
        </div>
    )
}

const Testimonial = () => {
    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className='flex justify-center items-center mt-2'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-[bg-cyan-400] ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" alt='' />
                        </div>
                    </div>
                    <div className='ml-10'>
                        <h1>masud rana</h1>
                        <h2> mymensing trishal</h2>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Home;