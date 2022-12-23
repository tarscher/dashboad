import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Item from "@mui/material/Unstable_Grid2/Grid2";
import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";

export default function QuestionOptions({ data }) {
  const [question, setQuestion] = useState(data.question);
  const [answers, setAnswers] = useState(data.answers);

  useEffect(() => {
    setQuestion(data.question);
    setAnswers(data.answers);
  }, [data]);

  function handleQuestionChange(event) {
    setQuestion(event.target.value);
  }

  function handleAnswerChange(index, event) {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  }

  function handleAnswerRemove(index, event) {
    const newAnswers = [...answers];
    newAnswers[index] = event.target.value;
    setAnswers(newAnswers);
  }

  const handleAnswerAdd = () => {
    setAnswers([...answers, ""]);
  };

  return (
    <Grid key={data.question} container spacing={2} sx={{ overflow: "hidden" }}>
      <form noValidate autoComplete="off">
        <Grid xs={12}>
          <TextField
            label="Question"
            value={question}
            onChange={handleQuestionChange}
            fullWidth
          />
        </Grid>
        {answers.map((answer, index) => (
          <Grid container>
            <Grid xs={12} key={index} paddingLeft={4} display="flex">
              <TextField
                label={`Answer ${index + 1}`}
                value={answer}
                onChange={handleAnswerChange.bind(null, index)}
                fullWidth
              />
              <Button>
                <DeleteIcon sx={{ color: red[700] }} />
              </Button>
            </Grid>
          </Grid>
        ))}
        <Grid xs={12} key={555} paddingLeft={4}>
          <Button onClick={() => handleAnswerAdd()} fullWidth>
            Add answer
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}
