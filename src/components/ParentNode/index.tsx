import * as React from "react";
import { styled } from "@mui/material/styles";

import { ChildNode, ChildNodeProps } from "../ChildNode";
export interface ParentNodeProps {
  /**
   * The root element
   * */
  element: ChildNodeProps["element"];
  /**
   * The height of the line
   */
  lineHeight?: string;
  /**
   * The width of the line
   */
  lineWidth?: string;
  /**
   * The color of the line
   */
  lineColor?: string;
  /**
   * The line style for the tree
   */
  lineStyle?: "dashed" | "dotted" | "double" | "solid" | string;
  /**
   * The border radius of the line
   */
  lineBorderRadius?: string;
  /**
   * The padding between siblings
   */
  nodePadding?: string;
  children: ChildNodeProps["children"];

  className?: string;
}

const getCssValue = (value: string = "") =>
  value.includes("px") ? value : `${value}px`;

export const ParentNode = ({
  children,
  element,
  lineHeight = "20px",
  lineWidth = "1px",
  lineColor = "black",
  nodePadding = "5px",
  lineStyle = "solid",
  lineBorderRadius = "5px",
  className,
}: ParentNodeProps) => {
  const ParentNodeContainer = styled("ul")(() => ({
    paddingInlineStart: 0,
    margin: 0,
    display: "flex",
    "--line-height": getCssValue(lineHeight),
    "--line-width": getCssValue(lineWidth),
    "--line-color": lineColor,
    "--line-border-radius": getCssValue(lineBorderRadius),
    "--line-style": lineStyle,
    "--node-padding": getCssValue(nodePadding),
    "--tree-line-height": "var(--line-height, 20px)",
    "--tree-line-width": "var(--line-width, 1px)",
    "--tree-line-color": "var(--line-color, black)",
    " --tree-line-border-radius": "var(--line-border-radius, 5px)",
    "--tree-node-line-style": "var(--line-style, solid)",
    "--tree-node-padding": "var(--node-padding, 5px)",
  }));

  return (
    <ParentNodeContainer className={className}>
      <ChildNode element={element}>{children}</ChildNode>
    </ParentNodeContainer>
  );
};
