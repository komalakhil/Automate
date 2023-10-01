import React, { useState } from "react";
// import Form from "./Form";
import Socialmedia from "./Socialmedia";
import Design from "./Design";
import Technical from "./Technical";
import Events from "./Events";
import Coding from "./Coding";

function Teams() {
  const closeicon = (
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
        d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
  const listicon = (
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
        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
      />
    </svg>
  );

  const darkbutton =
    "px-1 rounded text-teal-100 btn-outline border border-dotted hover:-translate-y-1 hover:scale-110 hover:bg-white hover:text-black duration-300";
  const lightbutton =
    "px-2 rounded border-3 border-solid -translate-y-1 border-black bg-white text-black scale-110";
  const [tailwind, setTailwind] = useState([
    darkbutton,
    darkbutton,
    darkbutton,
    darkbutton,
    darkbutton,
  ]);
  const [list, setList] = useState(true);

  const smclick = () => {
    setTailwind([lightbutton, darkbutton, darkbutton, darkbutton, darkbutton]);
  };
  const eventsclick = () => {
    setTailwind([darkbutton, lightbutton, darkbutton, darkbutton, darkbutton]);
  };
  const designclick = () => {
    setTailwind([darkbutton, darkbutton, lightbutton, darkbutton, darkbutton]);
  };
  const techclick = () => {
    setTailwind([darkbutton, darkbutton, darkbutton, lightbutton, darkbutton]);
  };
  const codingclick = () => {
    setTailwind([darkbutton, darkbutton, darkbutton, darkbutton, lightbutton]);
  };
  const closeclick = () => {
    setList(true);
    setTailwind([darkbutton, darkbutton, darkbutton, darkbutton, darkbutton]);
  };
  const listclick = () => {
    setList(false);
  };
  return (
    <div>
      {list === true && (
        <div className="indicator hover:-translate-y-1 hover:scale-110 duration-300">
          <span className="indicator-item badge badge-accent "></span>
          <button
            className="px-2 py-1 justify-items-end rounded text-teal-100 btn-outline hover:bg-transparent hover:text-teal-100"
            onClick={listclick}
          >
            {listicon}
          </button>
        </div>
      )}
      {list === false && (
        <div className="flex flex-row space-x-7">
          <button className={tailwind[0]} onClick={smclick}>
            Social Media Team
          </button>
          <button className={tailwind[1]} onClick={eventsclick}>
            Events and PR Team
          </button>
          <button className={tailwind[2]} onClick={designclick}>
            Design Team
          </button>
          <button className={tailwind[3]} onClick={techclick}>
            Technical Team
          </button>
          <button className={tailwind[4]} onClick={codingclick}>
            Coding Team
          </button>
          <button
            className="px-2 py-1 rounded text-teal-100 btn-outline hover:-translate-y-1 hover:scale-110 hover:bg-transparent hover:text-teal-100 duration-300"
            onClick={closeclick}
          >
            {closeicon}
          </button>
        </div>
      )}
      {(tailwind[0]===lightbutton) && <Socialmedia/>}
      {(tailwind[1]===lightbutton) && <Events/>}
      {(tailwind[2]===lightbutton) && <Design/>}
      {(tailwind[3]===lightbutton) && <Technical/>}
      {(tailwind[4]===lightbutton) && <Coding/>}
      
    </div>
  );
}

export default Teams;
