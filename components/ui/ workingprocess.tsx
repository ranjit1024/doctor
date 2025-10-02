"use client";
import React from "react";
import ReactFlow, { MiniMap, Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "center",
    data: { label: "Working Process" },
    position: { x: 250, y: 150 },
    style: {
      background: "#fff",
      border: "1px solid #ccc",
      borderRadius: 12,
      padding: 10,
    },
  },
  {
    id: "1",
    data: {
      label: (
        <div>
          <div>
            <strong>Book Appointment</strong>
          </div>
          <div style={{ fontSize: "12px", color: "#999" }}>
            Schedule online in minutes.
          </div>
        </div>
      ),
    },
    position: { x: 50, y: 40 },
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 12,
      boxShadow: "0 2px 8px #f0f0f0",
    },
  },
  {
    id: "2",
    data: {
      label: (
        <div>
          <div>
            <strong>Consult a Doctor</strong>
          </div>
          <div style={{ fontSize: "12px", color: "#999" }}>
            Meet with specialists via clinic or online.
          </div>
        </div>
      ),
    },
    position: { x: 50, y: 260 },
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 12,
      boxShadow: "0 2px 8px #f0f0f0",
    },
  },
  {
    id: "3",
    data: {
      label: (
        <div>
          <div>
            <strong>Diagnosis & Tests</strong>
          </div>
          <div style={{ fontSize: "12px", color: "#999" }}>
            Get accurate reports with advanced labs.
          </div>
        </div>
      ),
    },
    position: { x: 450, y: 40 },
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 12,
      boxShadow: "0 2px 8px #f0f0f0",
    },
  },
  {
    id: "4",
    data: {
      label: (
        <div>
          <div>
            <strong>Treatment & Follow-up</strong>
          </div>
          <div style={{ fontSize: "12px", color: "#999" }}>
            Personalized care and ongoing support.
          </div>
        </div>
      ),
    },
    position: { x: 450, y: 260 },
    style: {
      background: "#fff",
      borderRadius: 12,
      padding: 12,
      boxShadow: "0 2px 8px #f0f0f0",
    },
  },
];

const edges = [
  { id: "e1", source: "center", target: "1", animated: false },
  { id: "e2", source: "center", target: "2", animated: false },
  { id: "e3", source: "center", target: "3", animated: false },
  { id: "e4", source: "center", target: "4", animated: false },
];

export default function WorkingProcessFlow() {
  return (
    <div className="h-100 w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
        nodesDraggable={false} // enable dragging nodes
        nodesConnectable={false} // keep no connect lines if you want
        panOnDrag={false} // enable pan by dragging background
        zoomOnScroll={false} // enable zoom by scroll wheel
        zoomOnPinch={true} // enable zoom on touch pinch
      ></ReactFlow>
    </div>
  );
}
