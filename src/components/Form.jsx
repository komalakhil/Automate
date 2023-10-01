import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 


function Form(props) {
  const navigate = useNavigate();
  const submiticon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
      />
    </svg>
  );

  const [errors] = useState({});
  const [count] = useState(10); // Initial count
  const [formData, setFormData] = useState({ name: '', type: '',eventname:props.value,data:'' });
  // const [checked,setChecked] = useState(['','','','']);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const modal = document.getElementById('my_modal_1');
    // console.log('Start')
    // console.log(JSON.stringify(formData))
    try{
      const core = await axios.get('http://localhost:4000/api/core');
      for(let i=0;i<core.data.length;i++){
        console.log(core.data[i].email)
        const res = await axios.post('http://localhost:4000/api/sendemail',{
          'name' : core.data[i].name,
          'email' : core.data[i].email}
          )
      }
    }catch(error){
      console.error(`Error: ${error.message}`);
      alert(`Error: ${error.message}`);
    }
    // console.log(formData);
    try {
      // Send a POST request to your backend to submit the form data
      const response = await axios.post('http://localhost:4000/api/submit-form', formData);
      // console.log(response);
      if (response.status === 201) {
        if (modal) {
          modal.showModal();
          setTimeout(() => {
            modal.close();
            navigate('/Summary');
          }, 10000);
        }
      }
    } catch (error) {
      console.error(`Error: ${error.message}`);
      alert(`Error: ${error.message}`);
    }
};
  
  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-control basis-1/3 w-full px-5 max-w-sm">
      <label className="label label-text text-teal-100 text-base">
        Name of the {props.value}
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered fonr-sans placeholder-gray-500 bg-white text-base-300"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      {errors.name && <div className="text-red-500">{errors.name}</div>}
      <br></br>

      <label className="label label-text text-teal-100 text-base">
        Type of the {props.value}
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered fonr-sans placeholder-gray-500 bg-white text-base-300"
        name="type"
        value={formData.type}
        onChange={handleChange}
      />
      {errors.name && <div className="text-red-500">{errors.name}</div>}
      <br></br>

      <label className="label">
          <span className="label-text text-teal-100 text-base block">
            Select Category
          </span>
      </label>
      <select className="select select-bordered font-sans bg-white text-black">
          <option disabled selected>
            Pick one
          </option>
          <option>Only IT Department</option>
          <option>Open to All</option>
      </select>
      <br></br>

      <label className="cursor-pointer label">
        <h1 className="label-text text-teal-100 text-base block">
          Which Year?
        </h1>
      </label>
      <label className="cursor-pointer label px-3">
        <span className="label-text text-teal-100 text-base ml-7">
          1<sup>st</sup> year
        </span>
        <input type="checkbox" className="checkbox checkbox-accent mr-7" />
      </label>
      <label className="cursor-pointer label px-3">
        <span className="label-text text-teal-100 text-base ml-7">
          2<sup>nd</sup> year
        </span>
        <input type="checkbox" className="checkbox checkbox-accent mr-7" />
      </label>
      <label className="cursor-pointer label px-3">
        <span className="label-text text-teal-100 text-base ml-7">
          3<sup>rd</sup> year
        </span>
        <input type="checkbox" className="checkbox checkbox-accent mr-7"/>
      </label>
      <label className="cursor-pointer label px-3">
        <span className="label-text text-teal-100 text-base ml-7">
          4<sup>th</sup> year
        </span>
        <input type="checkbox" className="checkbox checkbox-accent mr-7"/>
      </label>
      <br></br>
      <label className="label label-text text-teal-100 text-base">
        Event Date
      </label>
      <input
        type="date"
        className="border content-black rounded p-2 text-white"
        value={formData.date}
        onChange={handleChange}
      />
      <br></br>
      {/* <label className="label label-text text-teal-100 text-base">
        Description of the {props.value}
      </label>
      <textarea
        className="textarea h-80 resize-x bg-white text-black z-100"
        placeholder="Add here.."
      ></textarea> */}
      <br></br>
      <div className="flex justify-center mt-20">      
          <button className = 'btn text-teal-100 btn-outline border rounded px-4  py-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300'>
                  <div className="flex items-center">
                  {submiticon} 
                  <span className="ml-0.5">Submit</span>
                  </div>
          </button>
      </div>
      
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hurray! You Just Created a {props.value}</h3>
          <p className="py-4">This window will redirect to Summary after {count} seconds</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Okay</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </form>
  )
}

export default Form