import React from "react";
import { styled } from "@mui/material/styles";
import { Story, Meta } from "@storybook/react";
import { ParentNode, ParentNodeProps, ChildNode } from "../components";

export default {
  title: "Example/OrgChart",
  component: ParentNode,
  argTypes: {
    element: { control: "string" },
    lineColor: { control: "color" },
  },
} as Meta;

const OurTeamCard = styled("div")(() => ({
  padding: "30px 0 40px",
  backgroundColor: "#f7f5ec",
  textAlign: "center",
  overflow: "hidden",
  position: "relative",
  width: "250px",
  display: "inline-block",
}));

const OurTeamCardPicture = styled("div")(() => ({
  display: "inline-block",
  height: "130px",
  width: "130px",
  zIndex: 1,
  position: "relative",
  "::before": {
    content: '""',
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#1369ce",
    position: "absolute",
    bottom: "135%",
    right: 0,
    left: 0,
    opacity: 0.9,
    transform: "scale(3)",
    transition: "all 0.3s linear 0s",
  },
  "::after": {
    content: '""',
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    backgroundColor: "#1369ce",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -1,
  },
}));

const OurTeamCardImage = styled("img")(() => ({
  width: "100%",
  height: "auto",
  borderRadius: "50%",
  boxShadow: "0 0 0 14px #f7f5ec",
  transform: "scale(0.7)",
  transition: "all 0.9s ease 0s",
}));

const OurTeamCardTitle = styled("h4")(() => ({
  display: "block",
  fontSize: "15px",
  color: "#4e5052",
  textTransform: "capitalize",
}));

const OurTeamCardSocial = styled("ul")(() => ({
  width: "100%",
  padding: 0,
  margin: 0,
  backgroundColor: "#1369ce",
  position: "absolute",
  bottom: 0,
  left: 0,
  transition: "all 0.5s ease 0s",
  height: "24px",
}));

const SampleCard = () => (
  <div>
    <OurTeamCard>
      <OurTeamCardPicture>
        <OurTeamCardImage src="https://picsum.photos/130/130?image=1027" />
      </OurTeamCardPicture>
      <div className="team-content">
        <h3 className="name">Michele Miller</h3>
        <OurTeamCardTitle className="title">Web Developer</OurTeamCardTitle>
      </div>
      <OurTeamCardSocial></OurTeamCardSocial>
    </OurTeamCard>
  </div>
);

export const OrgChart: Story<ParentNodeProps> = ({ element, ...args }) => (
  <ParentNode element={element} {...args} children={getNodes(SampleCard)} />
);

OrgChart.args = {
  element: <SampleCard />,
};

function getNodes(Label: React.ElementType = "div") {
  return [
    <ChildNode element={<Label />}>
      <ChildNode element={<Label />} />
    </ChildNode>,
    <ChildNode element={<Label />}>
      <ChildNode element={<Label />}>
        <ChildNode element={<Label />} />
        <ChildNode element={<Label />} />
      </ChildNode>
    </ChildNode>,
    <ChildNode element={<Label />}>
      <ChildNode element={<Label />} />
      <ChildNode element={<Label />} />
    </ChildNode>,
  ];
}
