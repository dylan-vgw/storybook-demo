import React from "react";
import { Button } from "../button/Button";
import "./NumberOfGamesPlayedModal.css";

export interface Props {
  title: string;
  body: string;
  gamesPlayedToday: number;
  onContinueClick: () => void;
  onStopPlayingClick: () => void;
}

export const NumberOfGamesPlayedModalView: React.FC<Props> = ({
  title,
  body,
  gamesPlayedToday,
  onContinueClick,
  onStopPlayingClick,
}) => {
  return (
    <div className="modal">
      <h1>{title}</h1>
      <p>{body}</p>
      <div>You have played this many games: {gamesPlayedToday}</div>
      <div className="buttons">
        <Button text="Stop Playing" onClick={onStopPlayingClick} />
        <Button text="Continue" onClick={onContinueClick} />
      </div>
    </div>
  );
};

export const NumberOfGamesPlayedModal = () => {
  // Separate out behaviour from view
  // All side effects go here

  // Pseudo Code

  // Pull games played from redux
  // const gamesPlayedToday = useSelector(gamesPlayedToday);

  // const props: Props = {
  //   title: `You've played a lot of games today`,
  //   body: 'Dayum thats a lot of games',
  //   gamesPlayedToday,
  //   onContinueClick: () => {
  //     recordClick();
  //     closeModal();
  //   },
  //   onStopPlayingClick: () => {
  //     recordClick();
  //     logUserOut();
  //   }
  // }

  // return <NumberOfGamesPlayedModalView {...props}/>

};
