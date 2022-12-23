import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

const handleStyle = { left: 10 };

export default function QuestionNodeType({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  const items = data.answers.map((value) => {
    return (
      <ListItem key={value}>
        <Typography>{value}</Typography>
        <Handle type="source" position={Position.Right} id={value} />
      </ListItem>
    );
  });

  return (
    <Box
      sx={{
        bgcolor: "#181818",
        borderRadius: 2,
      }}
    >
      <Handle type="target" position={Position.Left} id="in" />
      <List sx={{ paddingTop: 0 }}>
        <ListItem
          sx={{
            bgcolor: "black",
            borderRadius: 2,
            boxShadow: 2,
          }}
          key={456}
        >
          <ListItemText>
            <Typography>{data.question}</Typography>
          </ListItemText>
          <Handle type="source" position={Position.Right} id="out" />
        </ListItem>
        {items}
      </List>
    </Box>
  );
}
