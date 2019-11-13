import React from "react";

function Button({ children, onClick }) {
  return (
    <button className="hover:bg-blue-700 btn rounded" onClick={onClick}>
      {children}
    </button>
  );
}

function ButtonOutline({ children, onClick }) {
  return (
    <button className="btn hover:bg-blue-700 rounded-full" onClick={onClick}>
      {children}
    </button>
  );
}

function ButtonIcons({ children, onClick }) {
  return (
    <button
      className="btn hover:bg-blue-700 rounded inline-flex items-center"
      onClick={onClick}
    >
      <svg
        className="fill-current w-4 h-4 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span>{children}</span>
    </button>
  );
}

export { Button, ButtonOutline, ButtonIcons };
