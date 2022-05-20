import { useEffect, useState } from "react";

const useToken = user => {

    const [token, setToken] = useState('');
    useEffect(() => {

        if (user?.user?.email) {
            fetch(`http://localhost:5000/user/${user?.user?.email}`, {

                method: 'PUT',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ email: user?.user?.email })
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("accessToken", data.token);
                setToken(data.token)
            })
        }


    }, [user])

    return [token];
}

export default useToken;