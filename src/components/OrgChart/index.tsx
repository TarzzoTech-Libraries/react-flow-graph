import * as React from "react";
import { ParentNode, ChildNode } from "../";

export interface OrgChartData {
  key: number;
  value: React.ReactNode;
  children?: OrgChartData[];
}

export interface OrgChartProps {
  data: OrgChartData;
  className: string;
}

export const OrgChart = ({ data }: OrgChartProps) => {
  const getChildren = (children: OrgChartData[] | undefined, elKey: number) => {
    if (children) {
      return children.map((child) => {
        return (
          <ChildNode element={child.value} key={elKey}>
            {getChildren(child.children, child.key)}
          </ChildNode>
        );
      });
    } else {
      return null;
    }
  };
  return (
    <ParentNode element={data.value}>
      {getChildren(data.children, data.key)}
    </ParentNode>
  );
};
