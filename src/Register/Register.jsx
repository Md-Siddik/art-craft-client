import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthProviders/AuthProvider'
import { ToastContainer, toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const { createUser } = useContext(AuthContext);

    // const auth = getAuth(app);
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        setRegisterError('');

        if (password.length < 6) {
            toast.error('Password should be at least 6 characters of longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error('Your password should have at least one uppercase character.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            toast.error('Your password should have at least one lowercase character.');
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                })
                .then()
                .catch(error => {
                    console.error(error);
                })
                navigate('/');
            })
            toast.success('Successfully registered')
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div>
            <Helmet>
                <title>Techno-Real-Estate | Register</title>
            </Helmet>
            <div className="w-[600px] m-auto pb-24 mt-16 border-2 rounded-xl">
                <h1 className="text-3xl my-10 text-center">Register</h1>
                <form onSubmit={handleRegister} className="md:w-[500px] mx-auto p-8">
                    <div className="form-control pb-6">
                        <input type="text" required name="name" placeholder="name" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control pb-6">
                        <input type="text" required name="photo" placeholder="photo url" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control pb-6">
                        <input type="email" required name="email" placeholder="email" className="input input-bordered rounded-full" />
                    </div>
                    <div className="form-control">
                        <div className='flex items-center gap-4 relative'>
                            <input type={showPassword ? "text" : "password"} required name="password" placeholder="password" className="input input-bordered rounded-full w-full" />
                            <span className='absolute right-6' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary rounded-full">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className='text-red-600'>{registerError}</p>
                }
                <p className="text-center mt-4">Already have an account? <Link className="font-bold text-blue-500" to="/login">Login</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;