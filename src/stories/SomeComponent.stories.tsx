import type { Meta, StoryObj } from "@storybook/react";

import { SomeComponent } from "../components/SomeComponent";

const meta = {
  component: SomeComponent,
} satisfies Meta<typeof SomeComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
