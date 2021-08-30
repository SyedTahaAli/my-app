import React, { useState } from "react";


export default function AlluserInfo() {
    const [users, setUser] = useState([
        { name: "taha", age: 30, country: "Pakistan" }
    ]);


    const submituser = (e) => {
        const user = {
            name: "ali",
            age: 40,
            country: "America"
        }
        setUser([...users, user])

    }



    return (
        <div>
            {
                users.map(user => {
                    return (
                        <div>
                            <h1>
                                {user.name} -  {user.age}
                            </h1>
                            <p>
                                {user.country}
                            </p>
                        </div>
                    );

                })
            }
            <button onClick={submituser}>Add new User</button>
        </div>
    );
}
