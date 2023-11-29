import React from "react";

import trackList from "../../assets/trackList.js";
import Track from "../../components/Track/Track.jsx";
import style from "./mainPage.module.scss";

const MainPage = () => {
  return (
    <div className={style.search}>
      <>Поиск треков</>
      <div className={style.list}>
        {trackList.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
