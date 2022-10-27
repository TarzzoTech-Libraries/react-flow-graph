import * as React from "react";
import type { ReactNode } from "react";
import { styled } from "@mui/material/styles";

export interface ChildNodeProps {
  /**
   * The node label
   * */
  element: ReactNode;
  className?: string;
  children?: ReactNode;
}

const verticalLine = {
  content: '""',
  position: "absolute",
  top: 0,
  height: "var(--tree-line-height)",
  boxSizing: "border-box",
};

const ChildNodeChildContainer = styled("ul")(() => ({
  display: "flex",
  paddingInlineStart: 0,
  margin: 0,
  paddingTop: "var(--tree-line-height)",
  position: "relative",
  "::before": {
    ...verticalLine,
    left: "50%",
    width: 0,
    borderLeft:
      "var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color)",
  },
}));

const ChildNodeContainer = styled("li")(() => ({
  flex: "auto",
  textAlign: "center",
  listStyleType: "none",
  position: "relative",
  padding:
    "var(--tree-line-height) var(--tree-node-padding) 0 var(--tree-node-padding)",
  "::before": {
    ...verticalLine,
    right: "50%",
    width: "50%",
    borderTop:
      "var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color)",
  },
  "::after": {
    ...verticalLine,
    right: "50%",
    width: "50%",
    left: "50%",
    borderTop:
      "var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color)",
    borderLeft:
      "var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color)",
  },
  ":only-of-type": {
    padding: 0,
    "::after": {
      display: "none",
    },
    "::before": {
      display: "none",
    },
  },
  ":first-of-type": {
    "::before": {
      border: "0 none",
    },
    "::after": {
      borderRadius: "var(--tree-line-border-radius) 0 0 0",
    },
  },
  ":last-of-type": {
    "::before": {
      borderRight:
        "var(--tree-line-width) var(--tree-node-line-style) var(--tree-line-color)",
      borderRadius: "0 var(--tree-line-border-radius) 0 0",
    },
    "::after": {
      border: "0 none",
    },
  },
}));

export const ChildNode = ({ children, element, className }: ChildNodeProps) => {
  return (
    <ChildNodeContainer className={className}>
      {element}
      {React.Children.count(children) > 0 && (
        <ChildNodeChildContainer>{children}</ChildNodeChildContainer>
      )}
    </ChildNodeContainer>
  );
};
