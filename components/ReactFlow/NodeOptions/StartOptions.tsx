import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

export default function StartOption({ data }) {
  const [samples, setSamples] = useState(data.samples);
  const [languages, setLanguages] = useState(data.languages);

  useEffect(() => {
    setSamples(data.samples);
    setLanguages(data.languages);
  }, [data]);

  return (
    <Grid key={data.question} container spacing={2} sx={{ overflow: "hidden" }}>
      <form noValidate autoComplete="off">
        <Grid container>
          <Grid xs={12}>
            <Typography variant="h6">Languages</Typography>
          </Grid>
          {languages.map((language, index) => (
            <Grid xs={12} key={language + index} display="flex">
              <TextField
                label={`Answer ${index + 1}`}
                value={language}
                fullWidth
              />
              <Button>
                <DeleteIcon sx={{ color: red[700] }} />
              </Button>
            </Grid>
          ))}
        </Grid>
      </form>
      <Divider />
      <form noValidate autoComplete="off">
        <Grid container>
          <Grid xs={12}>
            <Typography variant="h6">Samples</Typography>
          </Grid>

          {samples.map((language, index) => (
            <Grid xs={12} key={language + index} display="flex">
              <TextField
                label={`Answer ${index + 1}`}
                value={language}
                fullWidth
              />
              <Button>
                <DeleteIcon sx={{ color: red[700] }} />
              </Button>
            </Grid>
          ))}
        </Grid>
      </form>
    </Grid>
  );
}
