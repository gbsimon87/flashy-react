import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { useHistory } from "react-router-dom";

import { useGlobalContext } from '../../context';
import GameTitle from './GameTitle';
import GameBody from './GameBody';
import GameFooter from './GameFooter';

const GameTemplate = ({ data }) => {
  const { autoplay, theme, cardFlipTime } = useGlobalContext();
  const history = useHistory();
  const [gameData] = useState(data);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(true);
  const [gameType, setGameType] = useState("");
  let location = useLocation();

  const handlePreviousButton = () => {
    setIndex(index - 1);
    setPaused(true);
  }

  const handleNextButton = () => {
    setIndex(index + 1);
    setPaused(true);
  }

  const handleGoToLearnScreen = () => {
    history.push("/learn");
  }

  useEffect(() => {
    const lastIndex = gameData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, gameData]);

  useEffect(() => {
    let slider;
    if (!paused) {
      slider = setInterval(() => {
        setIndex(index + 1);
      }, cardFlipTime * 1000);
    }
    return () => {
      clearInterval(slider);
    }
  }, [paused, index, cardFlipTime])

  useEffect(() => {
    if (autoplay) {
      setPaused(false)
    }

    if (location.pathname === "/colors") {
      setGameType("colors")
    }
    if (location.pathname === "/numbers") {
      setGameType("numbers")
    }
    if (location.pathname === "/letters") {
      setGameType("letters")
    }
    if (location.pathname === "/shapes") {
      setGameType("shapes")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={`game-template ${gameType}`} style={theme.main}>
      <GameTitle handleGoToLearnScreen={handleGoToLearnScreen} />
      <GameBody index={index} data={data} gameType={gameType} />
      <GameFooter
        handlePreviousButton={handlePreviousButton}
        paused={paused}
        setPaused={setPaused}
        handleNextButton={handleNextButton}
        />
    </div>
  )
}

export default GameTemplate
