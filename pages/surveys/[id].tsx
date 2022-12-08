import Link from "next/link";
import { useRouter } from "next/router";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "@mui/material/Unstable_Grid2/Grid2";
import { Title } from "@mui/icons-material";
import React from "react";

import ReactFlowDesigner from "../../components/ReactFlow/Designer";

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

export default function Device() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>
            <Link href="/surveys">Back</Link>
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <b>Survey {}</b>
          </Item>
        </Grid>
        <Grid sx={{ width: "100vw", height: "100vh" }}>
          <Item>
            <ReactFlowDesigner />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}
