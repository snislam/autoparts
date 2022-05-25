import { useEffect, useState } from "react";


const useAdmin = (user) => {
    const email = user.email;
    const [admin, setAdmin] = useState(false)
    const [adminLoader, setAdminLoader] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/user/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAdminLoader(false);
                setAdmin(data.admin)
            })
    }, [email])

    return [admin, adminLoader]
};

export default useAdmin;