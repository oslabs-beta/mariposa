import React, { useRef, useEffect, useState } from "react";
import Tree from 'react-d3-tree';

//get request to the endpoint and set the state equal to this
function TreeChart(props: any) {
  const [treeDataNew, setTreeDataNew] = useState({
    name: '',
    children: [],
  });

  //do the get request, obtaint the res.locals. setTreeData(res.locals.)
  useEffect(() => {
      setTreeDataNew(props.treeData);
  })

  const straightPathFunc = (linkDatum: any, orientation: any) => {
    const { source, target } = linkDatum;
    return orientation === 'horizontal'
      ? `M${source.x},${source.y}L${target.x},${target.y}`
      : `M${source.x},${source.y}L${target.x},${target.y}`;
  }
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
      <Tree
        data={treeDataNew}
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
