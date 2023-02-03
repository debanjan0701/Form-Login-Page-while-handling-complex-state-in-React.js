import React, { useState } from 'react';


const App = () => {
    const [fullname, setFullName] = useState({
        fname: "",
        lname: "",
    });
    // const [fullname, setFullName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [lastNamenew, setLastNameNew] = useState("");

    const inputEvent = (event) => {
        // setName(event.target.value);

        const value = event.target.value;
        const name = event.target.name;


        setFullName((preValue) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: preValue.lname,
                };
            }
            else if (name === 'lname') {
                return {
                    fname: preValue.fname,
                    lname: value,
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
                        <button type="submit">Submit Me 🤡</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default App;