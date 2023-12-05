import React from "react";
import { createContext, useState } from "react";
import trackList from "../assets/trackList";

export const AudioContex = createContext({});

const AudioProvider = ({ children }) => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = (track) => {
    console.log("click!");
  };
  return <AudioContext.Provider value={{}}>{children}</AudioContext.Provider>;
};

export default AudioProvider;
