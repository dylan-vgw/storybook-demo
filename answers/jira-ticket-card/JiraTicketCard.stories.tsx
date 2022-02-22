import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  JiraTicketCardView,
  Props,
} from "../../src/components/jira-ticket-card/JiraTicketCard";

export default {
  title: "Components/JiraTicketCard",
  component: JiraTicketCardView,
  parameters: {
    actions: {
      handles: ["mouseover", "click"],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "20px",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#F4F5F7",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof JiraTicketCardView>;

const baseProps: Props = {
  heading: "Review the process of how we review processes",
  team: "Atlassian",
  priority: "high",
  avatarUrl:
    "https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg",
  ticketId: "ATL-34223",
  onTicketIdClick: () => console.log('ticketId clicked')
};

const Template: ComponentStory<typeof JiraTicketCardView> = (args) => (
  <JiraTicketCardView {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...baseProps,
};
