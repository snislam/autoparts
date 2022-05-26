import { useEffect, useState } from "react";


const useAdmin = (user) => {
    const email = user.email;
    const [admin, setAdmin] = useState(false)
    const [adminLoader, setAdminLoader] = useState(true);

    useEffect(() => {
        fetch(`https://morning-bayou-19534.herokuapp.com/user/admin/${email}`)
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