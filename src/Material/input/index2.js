import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Stack, Typography } from "@mui/material";

export default function BasicTextFields() {
  const [data, setData] = useState({
    questions: "",
    marks: "",
  });
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  console.log(data);
  return (
    <Stack direction='row'>
      <Box
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid black",
          borderRadius:'3px',
          "& > :not(style)": { mx: 1 },
        }}
      >
        <TextField
          name="questions"
          variant="standard"
          style={{ width: "50px" }}
          onChange={(e) => changeHandler(e)}
        />
        <Typography variant="h6">X</Typography>
        <TextField
          name="marks"
          variant="standard"
          sx={{ width: "100px" }}
          style={{ width: "50px" }}
          onChange={(e) => changeHandler(e)}
        />
        <Typography variant="h6">M</Typography>
      </Box>
      {
          data.questions && data.marks && <Typography variant='h5'>= {`${data.questions * data.marks}`} M</Typography>
      }
    </Stack>
  );
}
