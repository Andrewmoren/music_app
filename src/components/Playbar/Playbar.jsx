import { useContext, useState, useEffect } from "react";
import { AudioContex } from "../../context/AudioContex";
import style from "./playbar.module.scss";
import { Slider, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";

const Playbar = () => {
  const [currentTime, setCurrentTime] = useState(0);

  const { audio, currentTrack, handleToggleAudio, isPlaying } =
    useContext(AudioContex);

  const { title, artists, preview, duration } = currentTrack;

  const formattedDuration = secondsToMMSS(duration);

  const formatedCurrentTime = secondsToMMSS(currentTime);

  const sliderCurrentTime = Math.round((currentTime / duration) * 100);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);
  }, []);
  return (
    <div className={style.playbar}>
      <img className={style.preview} src={preview} alt="" />
      <IconButton onClick={() => handleToggleAudio(currentTrack)}>
        {isPlaying ? <Pause /> : <PlayArrow />}
      </IconButton>
      <div className={style.credits}>
        <h4>{title}</h4>
        <p>{artists}</p>
      </div>
      <div className={style.slider}>
        <p>{formatedCurrentTime}</p>
        <Slider step={1} min={0} max={100} value={sliderCurrentTime} />
        <p>{formattedDuration}</p>
      </div>
    </div>
  );
};

export default Playbar;
