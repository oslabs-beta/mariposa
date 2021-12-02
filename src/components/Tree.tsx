import React, { useRef, useEffect, useState } from "react";
import Tree from 'react-d3-tree';

//get request to the endpoint and set the state equal to this
function TreeChart() {
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
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      setTreeData(data);
  })
  }, [])

  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
      <Tree data={treeData} />
    </div>
  );
}

export default TreeChart;

function setLoginErr(arg0: boolean) {
  throw new Error("Function not implemented.");
}
