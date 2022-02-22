import React from "react";
import "./JiraTicketCard.css";

type Priority = "low" | "medium" | "high";

const getPriorityIcon = (priority: Priority): string => {
  if (priority === "low") {
    return "⬇️";
  } else if (priority === "medium") {
    return "🆗";
  } else {
    return "⬆️";
  }
};


export interface Props {
  heading: string;
  team: string;
  priority: Priority;
  avatarUrl: string;
  ticketId: string;
  onTicketIdClick: () => void;
}

export const JiraTicketCardView: React.FC<Props> = ({
  heading,
  team,
  priority,
  ticketId,
  avatarUrl,
}) => {
  return (
    <div className="card">
      <h1>{heading}</h1>
      <h3>{team}</h3>
      <section className="card-footer">
        <span className="priority-icon">{getPriorityIcon(priority)}</span>
        <a>{ticketId}</a>
        <img src={avatarUrl} alt="avatar" />
      </section>
    </div>
  );
};

export const JiraTicketCard = () => {
  const ticketId = "ATL-34223";

  const props: Props = {
    heading: "Review the process of how we review processes",
    team: "Atlassian",
    priority: "medium",
    avatarUrl:
      "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
    ticketId,
    onTicketIdClick: () => window.location.replace(`https://atlassian.com/tickets/${ticketId}`),
  };

  return <JiraTicketCardView {...props}/>
};
