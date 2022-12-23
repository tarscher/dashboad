import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import QuestionMarkRoundedIcon from "@mui/icons-material/QuestionMarkRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";

interface ISidebarItemProps {
  description: string;
  nodeType: string;
  nodeSubtype: string;
}

export default ({ description, nodeType, nodeSubtype }: ISidebarItemProps) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const icon =
    nodeType == "questionNode" ? (
      <QuestionMarkRoundedIcon />
    ) : (
      <PrecisionManufacturingRoundedIcon />
    );

  return (
    <ListItem
      key={description}
      className="dndnode"
      onDragStart={(event) => onDragStart(event, nodeType)}
      draggable
      sx={{
        m: 1,
        bgcolor: "black",
        borderRadius: 2,
        borderColor: "white",
        boxShadow: 2,
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#181818",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={description} />
    </ListItem>
  );
};
