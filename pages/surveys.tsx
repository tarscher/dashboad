import Grid from "@mui/material/Unstable_Grid2/Grid2";
import SurveyList from "../components/SurveyList";
import Title from "../components/Title";

export default function Surveys() {
  return (
    <Grid xs={12}>
      <Title>Surveys</Title>
      <SurveyList />
    </Grid>
  );
}
