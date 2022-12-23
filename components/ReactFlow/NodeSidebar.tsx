import { Box, List } from "@mui/material";
import React from "react";
import NodeSidebarItem from "./NodeSidebarItem";

const drawerWidth = 240;

export default () => {
  return (
    <Box
      sx={{
        bgcolor: "transparant",
        position: "absolute",
        width: 150,
        zIndex: 1000,
      }}
    >
      <List>
        <NodeSidebarItem
          description={"Age"}
          nodeType={"questionNode"}
          nodeSubtype={"age"}
        />
        <NodeSidebarItem
          description={"Gender"}
          nodeType={"questionNode"}
          nodeSubtype={"gender"}
        />
        <NodeSidebarItem
          description={"Deliver Sample"}
          nodeType={"deliver"}
          nodeSubtype={"deliver"}
        />
      </List>
    </Box>
  );
};
