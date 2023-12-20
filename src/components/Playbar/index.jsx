import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import style from "./style.module.scss";
import { IconButton } from "@mui/material";
import { Pause, PlayArrow } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";
import TimeControls from "../TimeControls";

const Playbar = () => {
  const { currentTrack, handleToggleAudio, isPlaying } =
    useContext(AudioContext);

  const { title, artists, preview, duration } = currentTrack;

  const formattedDuration = secondsToMMSS(duration);

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
        <TimeControls />
        <p>{formattedDuration}</p>
      </div>
    </div>
  );
};

export default Playbar;
