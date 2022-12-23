import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "@mui/material/Unstable_Grid2/Grid2";
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

export default function DeliverOption({ data }) {
  const [samples, setSamples] = useState(data.samples);

  useEffect(() => {
    setSamples(data.samples);
  }, [data]);

  console.log("delivery");
  console.log(data);

  return (
    <Grid container spacing={2} sx={{ overflow: "hidden" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
        >
          {samples.map((sample, index) => (
            <MenuItem key={index} value={sample}>
              sample
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  );
}
