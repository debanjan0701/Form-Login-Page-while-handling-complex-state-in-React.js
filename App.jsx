import React, { useState } from 'react';


const App = () => {
    const [fullname, setFullName] = useState({
        fname: "",
        lname: "",
        email: "",
        phone_number: "",
    });
    // const [fullname, setFullName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [lastNamenew, setLastNameNew] = useState("");

    const inputEvent = (event) => {
        // setName(event.target.value);

        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } = event.target;


        setFullName((preValue) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone_number: preValue.phone_number,
                };
            }
            else if (name === 'lname') {
                return {
                    fname: preValue.fname,
                    lname: value,
                    email: preValue.email,
                    phone_number: preValue.phone_number,
                };
            }
            else if (name === 'email') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: value,
                    phone_number: preValue.phone_number,
                };
            }
            else if (name === 'phone_number') {
                return {
                    fname: preValue.fname,
                    lname: preValue.lname,
                    email: preValue.email,
                    phone_number: value,
                };
            }
        });
    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submitted");
        // setFullName(name);
        // setLastNameNew(lastName);
    };
    // const inputEventTwo = (event) => {
    //     setLastName(event.target.value);

    // };

    return (
        <>
            <div className='main_div'>
                <form onSubmit={onSubmits}>
                    <div>
                        <h1>Hello {fullname.fname} {fullname.lname} </h1>
                        <p>{fullname.email}</p>
                        <p>{fullname.phone_number}</p>
                        <input type="text"
                            placeholder="First Name"
                            name='fname'
                            onChange={inputEvent}
                            value={fullname.fname} />
                        <br />
                        <input type="text"
                            placeholder="Last Name"
                            // onChange={inputEventTwo}
                            name='lname'
                            onChange={inputEvent}
                            //Using the {inputEvent} same function to write all the Form input
                            value={fullname.lname} />
                        <input type="text"
                            placeholder="email"
                            name='email'
                            onChange={inputEvent}
                            value={fullname.email} />
                        <input type="number"
                            placeholder="Phone Number"
                            name='phone_number'
                            onChange={inputEvent}
                            value={fullname.phone_number} />

                        <button type="submit">Submit Me 🤡</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;
