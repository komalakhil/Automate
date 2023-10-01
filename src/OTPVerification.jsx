import React, { useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'

const OTPVerification = () => {
  const [otpDigits, setOtpDigits] = useState(['', '', '', '']);
  const digitRefs = useRef([]);

  const handleDigitChange = (index, event) => {
    const newDigits = [...otpDigits];
    newDigits[index] = event.target.value;
    setOtpDigits(newDigits);

    // Focus the next input when a digit is entered
    if (event.target.value && index < 3) {
      digitRefs.current[index + 1].focus();
    }
  };

  const navigate = useNavigate()
  const {username,email} = useParams();
  const handleVerifyOTP = () => {
    const enteredOTP = otpDigits.join('');
    if (/^\d{4}$/.test(enteredOTP)) {
      // Logic to verify OTP
      if(enteredOTP==='1234'){
        alert('OTP verified successfully!')
        navigate('/Home')
        axios.post("http://localhost:5002/api/register", {
        username,
        email
      },
      {headers:{
        "Access-Control-Allow-Origin":"*",
      } }
      )
      .then(function (response) {
        if(response.status ===201){
          navigate("/home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
      }
    } else {
      // Handle invalid OTP
      alert('Please enter a valid 4-digit OTP.');
    }
  };



  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-96 border border-outline border-teal-100 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">OTP Verification</h1>
        <div className="mb-4 flex space-x-2">
          {otpDigits.map((digit, index) => (
            <input
              key={index}
              type="text"
              className="input input-bordered w-1/4 text-center focus:bg-white focus:text-black"
              maxLength="1"
              value={digit}
              ref={(el) => (digitRefs.current[index] = el)}
              onChange={(e) => handleDigitChange(index, e)}
            />
          ))}
        </div>
        <button
         className="w-full mb-4 btn text-teal-100  hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300"
          onClick={handleVerifyOTP}
        >
          Verify OTP
        </button>
        {/* Add more UI elements here */}
      </div>
    </div>
  );
};

export default OTPVerification;
