import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        profession: '',  // new field
        age: '',         // new field
        sex: '',         // new field
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/users/register', formData);
            alert('Registration successful!');
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                <input type="text" name="first_name" placeholder="First Name" onChange={handleChange} />
                <input type="text" name="last_name" placeholder="Last Name" onChange={handleChange} />
                
                {/* New input fields */}
                <input type="text" name="profession" placeholder="Profession" onChange={handleChange} />
                <input type="number" name="age" placeholder="Age" onChange={handleChange} />
                
                <select name="sex" onChange={handleChange}>
                    <option value="">Select Sex</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
