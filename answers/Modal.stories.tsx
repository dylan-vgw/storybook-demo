import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  NumberOfGamesPlayedModalView,
  Props,
} from "../src/components/modal/NumberOfGamesPlayedModal";

export default {
  title: "Components/Modal",
  component: NumberOfGamesPlayedModalView,
} as ComponentMeta<typeof NumberOfGamesPlayedModalView>;

const baseProps: Props = {
  title: 'Too many games for today',
  body: 'Wow thats a lot of games',
  gamesPlayedToday: 50,
  onContinueClick: () => console.log('Accept Clicked'),
  onStopPlayingClick: () => console.log('Cancel Clicked')
};

const Template: ComponentStory<typeof NumberOfGamesPlayedModalView> = (args) => (
  <NumberOfGamesPlayedModalView {...args} />
);

export const Base = Template.bind({});
Base.args = {
  ...baseProps,
};
