import { useState } from "react";
import tracksList from "../../assets/tracksList";
import style from "./style.module.scss";
import Track from "../../components/Track/index";
import { Input } from "@mui/material";

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={handleChange}
      />
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
