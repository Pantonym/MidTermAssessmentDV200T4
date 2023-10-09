import react from 'react'

import './login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('user'); // Default role is 'user'

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here based on email, password, and role
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Role:', role);
    };


    return (
        <div className="form-container">
            {/* Logo */}
            {/* Add your logo here */}
            <h2>Log In</h2>
            <form className="form">
                <label >Email:</label>
                <input className='email' type="email" placeholder="Enter your email" required />

                <label >Password:</label>
                <input className='password' type="password" placeholder="Enter your password" required />

                <label>Role:</label>
                <select value={role} onChange={handleRoleChange}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </select>
                <br></br>
                <br></br>
                <br></br>
                <br></br>

                <div className="form-footer">
                    <p>Don't Have An Account? <br></br><span>Sign Up</span></p>
                </div>
            </form>
            <br></br>
            <br></br>
            <button className='subbut'>Done</button>
        </div>
    );
}
export default Login