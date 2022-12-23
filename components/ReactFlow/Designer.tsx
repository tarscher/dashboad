import React, { useCallback, useRef, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useOnSelectionChange,
  ReactFlowProvider,
  Edge,
} from "reactflow";

import QuestionNodeType from "./NodeTypes/QuestionNodeType";
import DeliverNodeType from "./NodeTypes/DeliverNodeType";

import "reactflow/dist/style.css";
import NodeSidebar from "./NodeSidebar";
import OptionsSidebar from "./NodeOptions/OptionsSidebar";
import {
  ageQuestionNodeData,
  genderQuestionNodeData,
  deliverSampleNodeData,
  startNodeData,
} from "../../data/initial-elements";

const minimapStyle = {
  height: 120,
};

const initialNodes = [
  {
    id: "0",
    type: "input",
    data: startNodeData,
    position: { x: 250, y: 0 },
  },
  {
    id: "1",
    type: "questionNode",
    data: ageQuestionNodeData,
    position: { x: 250, y: 15 },
  },
];

let id = 10;
const getId = () => id++;

console.log(id);

const nodeTypes = {
  questionNode: QuestionNodeType,
  deliverSampleNode: DeliverNodeType,
};

const ReactFlowDesigner = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onClick = useCallback((event) => {
    event.preventDefault();

    setSelectedNode(null);
  }, []);

  const onNodeClick = useCallback((event, node) => {
    event.stopPropagation();

    if (!selectedNode || node.id !== selectedNode.id) {
      console.log("node set");
      setSelectedNode(node);
    }
  }, []);
  if (selectedNode) console.log(selectedNode.id);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData("application/reactflow");
      console.log("type " + type);
      // check if the dropped element is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId().toString(),
        position,
        type: type,
        data: genderQuestionNodeData,
      };

      if (type === "deliver") {
        newNode.data = deliverSampleNodeData;
      }

      if (type === "question") {
        newNode.data = deliverSampleNodeData;
      }

      console.log("ben er");

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <NodeSidebar />
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onNodeClick={onNodeClick}
            onClick={onClick}
            nodeTypes={nodeTypes}
          >
            <Controls />
          </ReactFlow>
        </div>
        {selectedNode !== null && <OptionsSidebar data={selectedNode.data} />}
      </ReactFlowProvider>
    </div>
  );
};

export default ReactFlowDesigner;
