import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import { useCallback } from "react";
import { Handle, Position } from "reactflow";

import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";

const handleStyle = { left: 10 };

export default function DeliverNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <Box
      sx={{
        bgcolor: "black",
      }}
    >
      <Handle type="target" position={Position.Left} id="in" />
      <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <ListItem sx={{}}>
          <ListItemIcon
            sx={{
              minWidth: 40,
            }}
          >
            <PrecisionManufacturingRoundedIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Deliver Sample {data.sample}</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}
