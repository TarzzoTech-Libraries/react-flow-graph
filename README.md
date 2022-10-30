# react-flow-graph

    A flow graph react component library for react applications.

## Install

```bash
npm install --save react-flow-graph
```

## Usage

Demo [here](https://tarzzotech-libraries.github.io/react-flow-graph/)

1. Code Node component usage

```jsx
import React from "react";
import { ParentNode, ChildNode } from "react-flow-graph";

const FlowChart = () => (
  <ParentNode element={<div>Parent</div>}>
    <ChildNode element={<div>Child 1</div>}>
      <ChildNode element={<div>Grand Child 1</div>} />
      <ChildNode element={<div>Grand Child 2</div>} />
    </ChildNode>
    <ChildNode element={<div>Child 2</div>} />
  </ParentNode>
);
```

2. Inbuilt Org chart usage

```jsx
import React from "react";
import { OrgChartData, OrgChart } from "react-flow-graph";

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

const BasicOrgChart = () => <OrgChart data={data} />;
```

Use Value as a custom component for custom designs

```jsx
import React from "react";
import { OrgChartData, OrgChart } from "react-flow-graph";

const Component = () => {
  return (
    <div style={{ background: "black", color: "white" }}>Sr Director 1</div>
  );
};

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

const CustomOrgChart = () => <OrgChart data={data} />;
```

## Components

### `ParentNode` - The root of the flow

Accepts the following props:

- **element:** _**\(required\)**_ Any react `Node`
- **children:** _**\(required\)**_ Any number of `<ChildNode>`
- **lineHeight:** _\(default 20px\)_ The height of the Path as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- **lineWidth:** _\(default 1px\)_ The width of the Path as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)
- **lineColor:** _\(default black\)_ The color of the Path as a [css color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- **lineStyle:** _\(default solid\)_ The line style as a [css line-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#values)
- **lineBorderRadius:** _\(default 5px\)_ The border radius of the Path as a [css border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius)
- **nodePadding:** _\(default 5px\)_ The left and right padding of every `<ChildNode>` as a [css length](https://developer.mozilla.org/en-US/docs/Web/CSS/length)

### `ChildNode` - A node in the flow

- **element:** _**\(required\)**_ Any react `Node`
- **children:** _**\(required\)**_ Any number of `<ChildNode>`

## License

MIT © [vijaydeepak-tt](https://github.com/vijaydeepak-tt)

## Inspired from

The code and design reference is taken from [react-organizational-chart](https://github.com/daniel-hauser/react-organizational-chart) for building the base of this library.

This is little upgraded version of the "react-organizational-chart" library with additional components.
