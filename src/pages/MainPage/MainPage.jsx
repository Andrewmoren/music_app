import React from "react";

import trackList from "../../assets/trackList.js";
import Track from "../../components/Track/Track.jsx";
import style from "./mainPage.module.scss";
import { Input } from "@mui/material";

const MainPage = () => {
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={handleChange}
      />
      <div className={style.list}>
        {trackList.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
