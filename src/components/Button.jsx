import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Button(props) {
    const navigate = useNavigate();
    const [currentRoute, setCurrentRoute] = useState('');
    const darkbutton = 'btn text-teal-100 btn-outline border border-none rounded px-4  py-2 hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300';
    const lightbutton = 'border border-none rounded px-4  py-2 scale-110 bg-white text-black duration-300';
    const [tailwind, setTailwind] = useState([
      darkbutton,
      darkbutton,
      darkbutton,
      darkbutton,
      darkbutton,
      darkbutton,
      darkbutton,
      darkbutton,
      darkbutton
    ]);
    var index,type;
    if(props.title === 'Add Event'){
      index = 7;
      type = '/newevent';
    }
    else if(props.title === 'View Summary'){
      index = 8;
      type = 'Summary';
    }
    else{
      type ='/newevent/'+props.title;
    }
    if(props.title === 'Workshop'){
      index=0;
    }
    if(props.title === 'Hackathon'){
      index=1;
    }
    if(props.title === 'Coding Contest'){
      index=2;
    }
    if(props.title === 'Technical Seminar'){
      index=3;
    }
    if(props.title === 'Technical Webinar'){
      index=4;
    }
    if(props.title === 'Talk'){
      index=5;
    }
    if(props.title === 'Others'){
      index=6;
    }
    if(props.title === 'Submit'){
      index=7;
    }
    if(props.title === 'Home'){
      index=8;
      type = '/Home'
    }
    
    function changePage(){
      if(props.tilte === 'Submit'){
        setTailwind([darkbutton, darkbutton, darkbutton, darkbutton, darkbutton,darkbutton,darkbutton,lightbutton,darkbutton]);
      }
      if(props.tilte === 'Home'){
        setTailwind([darkbutton, darkbutton, darkbutton, darkbutton, darkbutton,darkbutton,darkbutton,darkbutton,lightbutton]);
      }
      if(props.title !== 'Add Event' || props.title !== 'Summary'){
        if(props.title === 'Workshop'){
          setTailwind([lightbutton, darkbutton, darkbutton, darkbutton, darkbutton,darkbutton,darkbutton,darkbutton,darkbutton]);
        }
        if(props.title === 'Hackathon'){
          setTailwind([darkbutton, lightbutton, darkbutton, darkbutton, darkbutton,darkbutton,darkbutton,darkbutton,darkbutton]);
        }
        if(props.title === 'Coding Contest'){
          setTailwind([darkbutton, darkbutton, lightbutton, darkbutton, darkbutton,darkbutton,darkbutton,darkbutton,darkbutton]);
        }
        if(props.title === 'Technical Seminar'){
          setTailwind([darkbutton, darkbutton, darkbutton, lightbutton, darkbutton,darkbutton,darkbutton,darkbutton,darkbutton]);
        }
        if(props.title === 'Technical Webinar'){
          setTailwind([darkbutton, darkbutton, darkbutton, darkbutton, lightbutton,darkbutton,darkbutton,darkbutton,darkbutton]);
        }
        if(props.title === 'Talk'){
          setTailwind([darkbutton, darkbutton, darkbutton, darkbutton, darkbutton,lightbutton,darkbutton,darkbutton,darkbutton]);
        }
        if(props.title === 'Others'){
          setTailwind([darkbutton, darkbutton, darkbutton, darkbutton, darkbutton,darkbutton,lightbutton,darkbutton,darkbutton]);
        }
      }
      if (type !== currentRoute) {
        navigate(type);
        setCurrentRoute(type);
      }
    }
    return (
      <div className='px-4'>
          <button className = {tailwind[index]} onClick={changePage}>
              <div className="flex items-center">
              {props.icon} 
              <span className="ml-0.5">{props.title}</span>
              </div>
          </button>
      </div>
    )
  }


export default Button


    // const handleClick = () => {
    //   // Data you want to send as URL parameters
    //   const data = {
    //     type: type
    //   };
  
    //   // Convert the data object to a query string
    //   const queryString = Object.keys(data)
    //     .map((key) => key + '=' + data[key])
    //     .join('&');
  
    //   // Navigate to the target page with the data as URL parameters
    //   window.location.href = `http://localhost:3000/newevent?${queryString}`;
    // };