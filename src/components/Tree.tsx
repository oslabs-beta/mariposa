import React, { useRef, useEffect, useState } from "react";
import Tree from 'react-d3-tree';

//get request to the endpoint and set the state equal to this
function TreeChart(props: any) {
<<<<<<< HEAD
  const [treeData, setTreeData] = useState({
=======
  const [treeDataNew, setTreeDataNew] = useState({
>>>>>>> 7434185ae0132e5f70967d0db21042d8b8d0eefd
    name: '',
    children: [],
  });

  //do the get request, obtaint the res.locals. setTreeData(res.locals.)
  useEffect(() => {
<<<<<<< HEAD
    fetch('/project/D3tables', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uri: props.uriString })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setTreeData(data);
      })
  }, [])
=======
      setTreeDataNew(props.treeData);
  })
>>>>>>> 7434185ae0132e5f70967d0db21042d8b8d0eefd

  const straightPathFunc = (linkDatum: any, orientation: any) => {
    const { source, target } = linkDatum;
    return orientation === 'horizontal'
      ? `M${source.x},${source.y}L${target.x},${target.y}`
      : `M${source.x},${source.y}L${target.x},${target.y}`;
  }
  return (
    // `<Tree />` will fill width/height of its `#treeWrapper` container
    <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
      <Tree
<<<<<<< HEAD
        data={treeData}
=======
        data={treeDataNew}
>>>>>>> 7434185ae0132e5f70967d0db21042d8b8d0eefd
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        orientation="horizontal"
        translate={{ x: 50, y: 250 }}
        zoom={.5}
        nodeSize={{ x: 300, y: 50 }}
        enableLegacyTransitions={true}
        depthFactor={500}
        initialDepth={1}
        shouldCollapseNeighborNodes={true} 
        />
    </div>
  );
}

export default TreeChart;

function setLoginErr(arg0: boolean) {
  throw new Error("Function not implemented.");
}
