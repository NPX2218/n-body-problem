import React, { useEffect } from "react";
import immersiveModeToggle from "./immersiveModeToggle.png";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

const Popup = ({ isOpen, onClose, children }: Props) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black rounded-2xl shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto p-6 relative">
        {/* Header */}
        <div className="flex flex-row justify-between items-center mb-4">
          <h2 className="text-2xl text-white uppercase">N-body Problem</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-2xl"
          >
            &times;
          </button>
        </div>

        <p className="text-gray-300 mb-6">By: Neel Bansal</p>

        {/* Content */}
        <div className="flex flex-col md:flex-row md:items-start gap-6 justify-center items-center">
          <p className="text-white leading-relaxed">
            This project provides an interactive visual and breakdown of the
            classic <strong className="font-semibold">N-body problem</strong>, a
            concept in physics and astrophysics that models how celestial bodies
            move under mutual gravitational influence.
            <br />
            <br />
            You can fully explore and manipulate the simulated galaxy using the
            control panel in the top-right corner. Adjust settings like star
            count, galaxy radius, and randomness to shape the simulation to your
            liking.
            <br />
            <br />
            For the most immersive experience, enable{" "}
            <strong className="font-semibold">Immersive Mode</strong> to hide
            the interface and experience the galaxy in a full-screen
            environment. Use your cursor to manipulate the camera and interact
            with the space environment.
          </p>

          <img
            src={immersiveModeToggle}
            alt="Immersive Mode Toggle"
            className="w-[300px] h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;
