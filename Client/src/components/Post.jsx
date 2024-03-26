import React, { useState } from 'react';
import axios from 'axios';

const Post = () => {
    
    const [formData,setFormData] = useState({
        name:'',
        age:'',
        email:'',
        mbl_no:'',
        password:''
    })

const handleChange = async (e) =>{
    const {name,value} = e.target
    setFormData({...formData,[name]:value})
}

const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
        await axios.post('http://127.0.0.1:8000/api/user/',formData)
        console.log(formData)
        alert("User Registered Successfully")
        setFormData({
            name:'',
            age:'',
            email:'',
            mbl_no:'',
            password:''
        })
    } catch (err){
        console.log("err",error)
        alert('Failed to register')
    }
}
    

    return (
        <div>
            <form onSubmit={handleSubmit} className='Form'>
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange}/>
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>
                <label>
                    Phone Number:
                    <input type="tel" name="mbl_no" value={formData.mbl_no} onChange={handleChange}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange}/>
                </label>
                <button type='submit'>Register</button>
            </form>
        </div>
    );
};

export default Post;
