import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../Firebase/Firebase';
import Loader from '../Loader/Loader';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {
    const [styUser, styLoading] = useAuthState(auth);
    const [treandment, setTreandment] = useState([]);
    let Navigate = useNavigate();

    useEffect(() => {

        fetch(`http://localhost:5000/appointments/${styUser.email}`, {
            method:"GET",
            headers:{
                authentication: `Beare ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if(res.status !== 200){

                    signOut(auth);
                    Navigate('/login');
                    localStorage.removeItem("accessToken");
                    return;
                }
                return res.json()
            })
            .then(data => setTreandment(data))
    }, [styUser,Navigate])


    if (styLoading) { return <Loader /> }
// console.log(treandment)

    return (
        <div className="overflow-x-auto">
            <h3 className='p-2'>My Appoinntments data: {treandment.length} </h3>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>treandment</th>
                        <th>date</th>
                        <th>time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        treandment?.map((data, index) => <tr className="hover" key={data._id}>
                            <th>{index + 1}</th>
                            <td>{data.displayName}</td>
                            <td>{data.name}</td>
                            <td>{data.date}</td>
                            <td>{data.modelSlots}</td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyAppointments;