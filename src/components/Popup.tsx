import React from "react";
import immersiveModeToggle from "./immersiveModeToggle.png";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}
const Popup = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-black rounded-2xl shadow-lg p-6 w-full max-w-3xl relative">
        <br />
        <br />

        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl text-white uppercase">N-body problem</h2>
          </div>
          <button
            onClick={onClose}
            className=" text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </div>
        <p>By: Neel Bansal</p>
        <br />
        <div
          className="flex flex-col space-x-5 md:flex-row md:justify-normal md:items-start
        justify-center items-center "
        >
          <p>
            This project provides an interactive visual and breakdown of the
            classic <strong>N-body problem</strong>. This is a problem in
            physics and astrophysics that models how celestial bodies move under
            mutual gravitational influence. You can fully explore and manipulate
            the simulated galaxy using the control panel in the top-right
            corner.
            <br />
            For the most immersive experience, enable{" "}
            <strong>Immersive Mode</strong> to hide the interface and experience
            the galaxy in a full-screen environment. Use your cursor to
            manipulate the enviroment!
          </p>
          <div className="md:hidden block ">
            <br />
            <br />
          </div>
          <img width={350} height={300} src={immersiveModeToggle} />
        </div>
      </div>
    </div>
  );
};

export default Popup;
