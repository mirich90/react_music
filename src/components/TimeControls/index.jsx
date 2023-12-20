import { useContext, useState, useEffect } from "react";
import { AudioContext } from "../../context/AudioContext";
import { Slider } from "@mui/material";
import secondsToMMSS from "../../utils/secondsToMMSS";

const TimeControls = () => {
  const { audio, currentTrack } = useContext(AudioContext);

  const { duration } = currentTrack;

  const [currentTime, setCurrentTime] = useState(0);

  const formattedCurrentTime = secondsToMMSS(currentTime);

  const sliderCurrentTime = Math.round((currentTime / duration) * 100);

  const handleChangeCurrentTime = (_, value) => {
    const time = Math.round((value / 100) * duration);

    setCurrentTime(time);
    audio.currentTime = time;
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  return (
    <>
      <p>{formattedCurrentTime}</p>
      <Slider
        step={1}
        min={0}
        max={100}
        value={sliderCurrentTime}
        onChange={handleChangeCurrentTime}
      />
    </>
  );
};

export default TimeControls;
