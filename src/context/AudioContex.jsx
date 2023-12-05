import React from "react";
import { createContext, useState } from "react";
import trackList from "../assets/trackList";

export const AudioContex = createContext({});

const AudioProvider = () => {
  const [currentTrack, setCurrentTrack] = useState(trackList[0]);
  const [isPlaying, setIsPlaying] = useState(false);
};
