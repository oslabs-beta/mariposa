import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import G6 from '@antv/g6';

const initialData = {
  id: 'root',
  label: 'Root',
  children: [
    {
      id: 'SubTreeNode1',
      label: 'subroot1',
      children: [
        {
          id: 'SubTreeNode1.1',
          label: 'subroot1.1',
        }
      ]
    },
    {
      id: 'SubTreeNode2',
      label: 'subroot2',
      children: [
        {
          id: 'SubTreeNode2.1',
          label: 'subroot2.1',
        },
        {
          id: 'SubTreeNode2.2',
          label: 'subroot2.2',
        }
      ]
    } 
  ]
};

const TreeGraphReact = () => {
  const ref = React.useRef(null)
  let graph:any = null
  let [treeData, setTreeData] = useState({})

  useEffect(() => {
  //   if(1 === 1) {

  //     graph = new G6.TreeGraph({
  //       container: ref.current,
  //       width: 600,
  //       height: 800,
  //       modes: {
  //         default: ['drag-canvas']
  //       },
  //       defaultEdge: {
  //         shape: 'cubic-horizontal',
  //         style: {
  //           stroke: '#A3B1BF'
  //         }
  //       },
  //       defaultNode: {
  //         shape: 'rect',
  //         labelCfg: {
  //           style: {
  //             fill: '#000000A6',
  //             fontSize: 10
  //           }
  //         },
  //         style: {
  //           stroke: '#72CC4A',
  //           width: 150
  //         }
  //       },
  //       layout: {
  //         type: 'dendrogram', // 布局类型
  //         direction: 'LR',    // 自左至右布局，可选的有 H / V / LR / RL / TB / BT
  //         nodeSep: 50,      // 节点之间间距
  //         rankSep: 200      // 每个层级之间的间距
  //       }
  //     })
  //   }
  //   fetch('/project/D3tables', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setTreeData(data);
  //       treeData = data;
  //       console.log('checking within the promise', data)
  //       console.log('this is the treeData in the promise', treeData)
  //   })
  //     .then (() =>{
  //     graph.data(treeData)
  //     console.log('this is the treeData ------------------>', treeData)
  //     graph.render()
  //     } )
  // }
  fetch('/project/D3tables')
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById('container');
    const width = container.scrollWidth;
    const height = container.scrollHeight || 500;
    const graph = new G6.TreeGraph({
      container: 'container',
      width,
      height,
      modes: {
        default: [
          {
            type: 'collapse-expand',
            onChange: function onChange(item, collapsed) {
              const data = item.get('model');
              data.collapsed = collapsed;
              return true;
            },
          },
          'drag-canvas',
          'zoom-canvas',
        ],
      },
      defaultNode: {
        size: 26,
        anchorPoints: [
          [0, 0.5],
          [1, 0.5],
        ],
      },
      defaultEdge: {
        type: 'cubic-horizontal',
      },
      layout: {
        type: 'mindmap',
        direction: 'H',
        getHeight: () => {
          return 16;
        },
        getWidth: () => {
          return 16;
        },
        getVGap: () => {
          return 10;
        },
        getHGap: () => {
          return 50;
        },
      },
    });

    let centerX = 0;
    graph.node(function (node) {
      if (node.id === 'Modeling Methods') {
        centerX = node.x;
      }

      return {
        label: node.id,
        labelCfg: {
          position:
            node.children && node.children.length > 0
              ? 'left'
              : node.x > centerX
              ? 'right'
              : 'left',
          offset: 5,
        },
      };
    });

    graph.data(data);
    graph.render();
    graph.fitView();

    if (typeof window !== 'undefined')
      window.onresize = () => {
        if (!graph || graph.get('destroyed')) return;
        if (!container || !container.scrollWidth || !container.scrollHeight) return;
        graph.changeSize(container.scrollWidth, container.scrollHeight);
      };
  })}
  , [])

  const handleChangeData = () => {
    const node = graph.findById('SubTreeNode1')
    graph.updateItem(node, {
      label: 'xxx',
      style: {
        fill: 'red'
      }
    })
  }

  return (
    <div ref={ref} id='container'>
    </div>
  );
}

export default TreeGraphReact