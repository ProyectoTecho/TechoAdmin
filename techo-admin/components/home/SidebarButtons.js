import React from "react";

const SidebarButtons = ({ title, onClick }) => {

  return (
    <>
      <button
        onClick={onClick} className="hover:bg-red-700 mr-4 whitespace-nowrap text-white font-bold py-2 px-4 p-5"
      >
        <p>{title}</p>
      </button>
    </>
  );
};

export default SidebarButtons;
