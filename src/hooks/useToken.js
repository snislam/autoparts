import { useState, useEffect } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        console.log(user)
        const email = user?.user?.email;
        const newUser = { email: email }
        if (email) {
            fetch(`http://localhost:5000/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }, [user])

    return [token]
}

export default useToken;