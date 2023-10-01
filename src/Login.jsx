import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
// import 'tailwindcss/dist/tailwind.css';
// import 'daisyui/dist/full.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);

    // Save the value to localStorage
    localStorage.setItem('email', newEmail);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setIsValidEmail(emailPattern.test(email));
  };

  const navigate = useNavigate();

  const handleGenerateOTP = () => {
    if (isValidEmail) {

      navigate(`/otp/${inputValue1}/${email}`)
      // Logic to generate OTP
    } else {
      // Handle invalid email
      alert('Please enter a valid email address.');
    }
  };

  const [inputValue1, setInputValue1] = useState('');

  useEffect(() => {
    // Retrieve saved values from localStorage when the component mounts
    const savedValue1 = localStorage.getItem('inputValue1');
    const savedValue2 = localStorage.getItem('email');
    if (savedValue1) {
      setInputValue1(savedValue1);
    }
    if (savedValue2) {
      setEmail(savedValue2);
    }
  }, []);

  const handleInputChange1 = (event) => {
    const newValue = event.target.value;
    setInputValue1(newValue);
    // Save the value to localStorage
    localStorage.setItem('inputValue1', newValue);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 border border-outline border-teal-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Login</h1>
        <div className="mb-4">
        <input
            type="email"
            className="input input-bordered border ${isValidEmail ? 'border-teal-100' : 'border-red-500'} w-full focus:bg-white focus:text-black"
            value = {inputValue1}
            placeholder="Username"
            onChange={handleInputChange1}
        />
        <input
            type="email"
            className="input input-bordered border ${isValidEmail ? 'border-teal-100' : 'border-red-500'} w-full mt-3 focus:bg-white focus:text-black"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
        />
        </div>
        <button
          className="w-full mb-4 btn text-teal-100  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300"
          onClick={handleGenerateOTP}
        >
          Generate OTP
        </button>
        {/* Add more UI elements here */}
      </div>
    </div>
  );
};

export default Login;
