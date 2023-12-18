import { useContext } from "react";
import { AudioContex } from "../../context/AudioContex";
import style from "./playbar.module.scss";
import { Slider, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

const Playbar = () => {
  const { audio, currentTrack, handleToggleAudio, isPlaying } =
    useContext(AudioContex);

  const { title, artists, preview, duration } = currentTrack;
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
        <p>00:00</p>
      </div>
    </div>
  );
};

export default Playbar;
