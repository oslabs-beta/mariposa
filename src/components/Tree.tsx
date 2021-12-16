import React, { useRef, useEffect, useState } from "react";
import Tree from 'react-d3-tree';

//get request to the endpoint and set the state equal to this
function TreeChart(props:any) {
  const data = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
        ],
      },
    ],
  };
  const [treeData, setTreeData] = useState(data)

  //do the get request, obtaint the res.locals. setTreeData(res.locals.)
  useEffect (() => {
  fetch('/project/D3tables', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({uri: props.uriString})
  })
    .then(res => res.json())
    .then(data => {
      setTreeData(data);
  })
  }, [])

  const straightPathFunc = (linkDatum: any, orientation: any) => {
    const { source, target } = linkDatum;
    return orientation === 'horizontal'
      ? `M${source.x},${source.y}L${target.x},${target.y}`
      : `M${source.x},${source.y}L${target.x},${target.y}`;
  }
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
      <Tree data={treeData} orientation="horizontal" pathFunc='step' nodeSize={{ x: 100, y: 140 }} shouldCollapseNeighborNodes='false' />
    </div>
  );
}

export default TreeChart;

function setLoginErr(arg0: boolean) {
  throw new Error("Function not implemented.");
}
