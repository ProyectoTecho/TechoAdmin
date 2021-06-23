import React from "react";

const SidebarButtons = ({ title, onClick }) => {

  return (
    <>
      <button
        onClick={onClick} className="hover:bg-red-700 w-full m-2 whitespace-nowrap text-white font-bold py-2 rounded"
      >
        <p>{title}</p>
      </button>
    </>
  );
};

export default SidebarButtons;
