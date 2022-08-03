import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

import LectureRoomTable from "./LectureRoomTable";

import "./LectureRoomSelector.css";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #0c3c60",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: "ridibatang",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
    width: "240px",
  },
}));

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

const LectureRoomSelector = () => {

  Date.prototype.addDays = function (days) { // Method to add days to the dae
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  };

  var date = new Date();
  date = getMonday(date);
  var daysOfWeek = [];
  
  for (let i = 0; i<7; i++) {
    daysOfWeek.push(date.addDays(i));
  }
  const [pickedDate, setPickedDate] = useState(daysOfWeek[0]);

  const handleChange = (event) => {
    setPickedDate(event.target.value);
    console.log(pickedDate);
  };

  return (
    <>
      <div className="lectureroom-form">
        <div className="date-choice">
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel id="demo-customized-select-label">날짜</InputLabel>
            <Select
              labelId="demo-customized-select-label"
              id="demo-customized-select"
              input={<BootstrapInput />}
              label="Date"
              value={pickedDate.getFullYear()-("0" + (pickedDate.getMonth() + 1)).slice(-2)-
                ("0" + pickedDate.getDate()).slice(-2)}
              onChange = {handleChange}
            >
              <MenuItem value={daysOfWeek[0]}>
                {daysOfWeek[0].getFullYear()}-{("0" + (daysOfWeek[0].getMonth() + 1)).slice(-2)}-
                {("0" + daysOfWeek[0].getDate()).slice(-2)}
              </MenuItem>
              <MenuItem value={daysOfWeek[1]}>
                {daysOfWeek[1].getFullYear()}-{("0" + (daysOfWeek[1].getMonth() + 1)).slice(-2)}-
                {("0" + daysOfWeek[1].getDate()).slice(-2)}
              </MenuItem>
              <MenuItem value={daysOfWeek[2]}>
                {daysOfWeek[2].getFullYear()}-{("0" + (daysOfWeek[2].getMonth() + 1)).slice(-2)}-
                {("0" + daysOfWeek[2].getDate()).slice(-2)}
              </MenuItem>
              <MenuItem value={daysOfWeek[3]}>
                {daysOfWeek[3].getFullYear()}-{("0" + (daysOfWeek[3].getMonth() + 1)).slice(-2)}-
                {("0" + daysOfWeek[3].getDate()).slice(-2)}
              </MenuItem>
              <MenuItem value={daysOfWeek[4]}>
                {daysOfWeek[4].getFullYear()}-{("0" + (daysOfWeek[4].getMonth() + 1)).slice(-2)}-
                {("0" + daysOfWeek[4].getDay()).slice(-2)}
              </MenuItem>
              <MenuItem value={daysOfWeek[5]}>
                {daysOfWeek[5].getFullYear()}-{("0" + (daysOfWeek[5].getMonth() + 1)).slice(-2)}-
                {("0" + daysOfWeek[5].getDate()).slice(-2)}
              </MenuItem>
              <MenuItem value={daysOfWeek[6]}>
                {daysOfWeek[6].getFullYear()}-{("0" + (daysOfWeek[6].getMonth() + 1)).slice(-2)}-
                {("0" + daysOfWeek[6].getDate()).slice(-2)}
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <LectureRoomTable day={pickedDate} />
      </div>
    </>
  );
};

export default LectureRoomSelector;
