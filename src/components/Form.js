import React, { useState } from 'react';

const NewForm = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: ""
    })
    const handleChanges = event => {
        setMember({...member, [event.target.name]: event.target.value});
    };
    const submitMember = event => {
        event.preventDefault();
        props.addNewMember(member);
        setMember({name: "", email: "", role: ""})
    }
    return (
        <form onSubmit={submitMember}>
            <label htmlFor="name">Member Name:</label>
             <input id="name" name="name" type="text" onChange={handleChanges} placeHolder="name" value={member.name}/>

            <label htmlFor="email">Email:</label>
             <input id="email" name="email" onChange={handleChanges} placeHolder="email" value={member.email}/>

            <label htmlFor="role">Role:</label>
             <select onChange={handleChanges} name="role">
                <option selected>Please Select</option>
                <option>UI designer</option>
                <option>Front End designer</option>
                <option>Back End designer</option>
                <option>Data Science</option>
                <option>iOS Developer</option>
             </select>   


            <button type="submit">Add Member</button> 
        </form>
    )
};

export default NewForm;