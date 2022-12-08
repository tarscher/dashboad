import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "@mui/material/Unstable_Grid2/Grid2";
import Chart from "../../components/Chart";
import { Title } from "@mui/icons-material";
import React from "react";
import { Paper, Typography } from "@mui/material";

import TimeTillEvent from "../../components/TimeTillEvent";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function Device() {
  const router = useRouter();
  const { id } = router.query;
  console.log(router.query);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>
            <Link href="/devices">Back</Link>
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <b>Device {id}</b>
          </Item>
        </Grid>
        <Grid xs={2}>
          <Paper
            elevation={2}
            style={{
              padding: 8,
            }}
          >
            <Typography variant="h6">Reboot</Typography>
            <TimeTillEvent type={"device_event"} deviceId={id} />
          </Paper>
        </Grid>
        <Grid xs={2}>
          <Paper
            elevation={2}
            style={{
              padding: 8,
            }}
          >
            <Typography variant="h6">Pickup</Typography>
            <TimeTillEvent type={"pickup_event"} deviceId={id} />
          </Paper>
        </Grid>
        <Grid xs={6}>
          <Item>{/* <Chart type={"temperature"} deviceId={id} /> */}</Item>
        </Grid>
        <Grid xs={6}>
          <Item>{/*<Chart type={"humidity"} deviceId={id} />*/}</Item>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
