import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, Props } from "../../../components/button/Button";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const baseProps: Props = {
  text: "Click Me!",
  onClick: () => console.log('button was clicked'),
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  ...baseProps
}

export const LotsOfText = Template.bind({});
LotsOfText.args = {
  ...baseProps,
  text: 'Wow this is a looooooooooooooooooot of text, does this break it?'
};

