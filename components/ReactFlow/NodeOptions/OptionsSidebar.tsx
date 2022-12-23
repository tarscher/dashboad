import { Box, List } from "@mui/material";
import React from "react";
import NodeSidebarItem from "../NodeSidebarItem";
import SidebarItem from "../NodeSidebarItem";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "@mui/material/Unstable_Grid2/Grid2";
import QuestionOptions from "./QuestionOptions";
import StartOptions from "./StartOptions";
import DeliverOptions from "./DeliverOptions";

export default ({ data }) => {
  function optionPanel() {
    if (data.type === "start") return <StartOptions data={data} />;
    if (data.type === "question") return <QuestionOptions data={data} />;
    if (data.type === "deliver") return <DeliverOptions data={data} />;
    return null;
  }

  return (
    <Box
      sx={{
        bgcolor: "black",
        position: "absolute",
        right: 0,
        top: 0,
        width: 290,
        height: "100%",
        zIndex: 1000,
        borderRadius: 2,
        boxShadow: 2,
        overflow: "hidden",
      }}
    >
      {optionPanel()}
    </Box>
  );
};
