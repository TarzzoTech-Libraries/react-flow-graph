import React from "react";
import { Story, Meta } from "@storybook/react";
import { OrgChart, OrgChartData, OrgChartProps } from "../index";

export default {
  title: "Example/OrgChart",
  component: OrgChart,
  //   argTypes: {
  //     data: { control: "string" },
  //   },
} as Meta;

const data: OrgChartData = {
  key: 0,
  value: "CEO",
  children: [
    {
      key: 1,
      value: "Vice president 1",
      children: [
        {
          key: 4,
          value: "Sr Director 1",
        },
        {
          key: 5,
          value: "Sr Director 2",
        },
      ],
    },
    {
      key: 2,
      value: "Vice president 2",
      children: [
        {
          key: 6,
          value: "Sr Director 1",
        },
      ],
    },
    {
      key: 3,
      value: "Vice president 3",
    },
  ],
};

const Component = (props: any) => {
  console.log(props, "------------");
  return (
    <div style={{ background: "black", color: "white" }}>Sr Director 1</div>
  );
};

const data2: OrgChartData = {
  key: 0,
  value: "CEO",
  children: [
    {
      key: 1,
      value: "Vice president 1",
      children: [
        {
          key: 4,
          value: <Component />,
        },
        {
          key: 5,
          value: "Sr Director 2",
        },
      ],
    },
    {
      key: 2,
      value: "Vice president 2",
      children: [
        {
          key: 6,
          value: "Sr Director 1",
        },
      ],
    },
    {
      key: 3,
      value: "Vice president 3",
    },
  ],
};

export const TextAsValue: Story<OrgChartProps> = (args) => (
  <OrgChart {...args} />
);
TextAsValue.args = {
  data,
};

export const ComponentAsValue: Story<OrgChartProps> = (args) => (
  <OrgChart {...args} />
);
ComponentAsValue.args = {
  data: data2,
};
