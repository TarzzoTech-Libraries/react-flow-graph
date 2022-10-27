import React from "react";
import { styled } from "@mui/material/styles";
import { Story, Meta } from "@storybook/react";
import { ParentNode, ParentNodeProps, ChildNode } from "../index";

export default {
  title: "Example/FlowGraph",
  component: ParentNode,
  argTypes: {
    element: { control: "string" },
    lineColor: { control: "color" },
  },
} as Meta;

export const Basic: Story<ParentNodeProps> = (args) => (
  <ParentNode {...args} children={getNodes()} />
);
Basic.args = {
  element: "Root",
};

export const StyledLines: Story<ParentNodeProps> = (args) => (
  <ParentNode {...args} children={getNodes()} />
);

StyledLines.args = {
  element: "Root",
  lineWidth: "3px",
  lineColor: "green",
  lineBorderRadius: "10px",
  lineHeight: "30px",
  lineStyle: "dotted",
};

const StyledNode = styled("div")(() => ({
  padding: "24px",
  borderRadius: "8px",
  display: "inline-block",
  border: "1px solid #ccc",
}));

export const StyledNodes: Story<ParentNodeProps> = ({ element, ...args }) => (
  <ParentNode
    element={<StyledNode>{element}</StyledNode>}
    {...args}
    children={getNodes(StyledNode)}
  />
);

StyledNodes.args = {
  element: "Root",
};

function getNodes(Label: React.ElementType = "div") {
  return [
    <ChildNode element={<Label>Child 1</Label>}>
      <ChildNode element={<Label>Grand Child</Label>} />
    </ChildNode>,
    <ChildNode element={<Label>Child 2</Label>}>
      <ChildNode element={<Label>Grand Child</Label>}>
        <ChildNode element={<Label>Great Grand Child 1</Label>} />
        <ChildNode element={<Label>Great Grand Child 2</Label>} />
      </ChildNode>
    </ChildNode>,
    <ChildNode element={<Label>Child 3</Label>}>
      <ChildNode element={<Label>Grand Child 1</Label>} />
      <ChildNode element={<Label>Grand Child 2</Label>} />
    </ChildNode>,
  ];
}
