import React, { useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { styled } from "@mui/material/styles";

import LectureRoomTable from "../LectureRoomTable/LectureRoomTable";

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
  var today = date.getDay();
  if (today === 0) today = 7;
  date = getMonday(date);
  var daysOfWeek = [];
  
  for (let i = 0; i<7; i++) { // Make daysOfWeek array
    daysOfWeek.push(date.addDays(i));
  }

  const returnFormattedDate = (dateParam) => {
    return dateParam.getFullYear().toString() + "-" + ("0" + (dateParam.getMonth()+1).toString()).slice(-2) + "-" + ("0" + (dateParam.getDate()).toString()).slice(-2);
  }

  const [pickedDate, setPickedDate] = useState(daysOfWeek[today-1]);
  const [displayDate, setDisplayDate] = useState(returnFormattedDate(daysOfWeek[0]));
  console.log(displayDate)
  console.log(pickedDate);

  const handleChange = (event) => {
    setPickedDate(event.target.value);
    setDisplayDate(returnFormattedDate(pickedDate))
    console.log(displayDate);
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
              value={pickedDate}
              onChange = {handleChange}
            >
              <MenuItem value={daysOfWeek[0]}>
                {returnFormattedDate(daysOfWeek[0])}
              </MenuItem>
              <MenuItem value={daysOfWeek[1]}>
                {returnFormattedDate(daysOfWeek[1])}
              </MenuItem>
              <MenuItem value={daysOfWeek[2]}>
                {returnFormattedDate(daysOfWeek[2])}
              </MenuItem>
              <MenuItem value={daysOfWeek[3]}>
                {returnFormattedDate(daysOfWeek[3])}
              </MenuItem>
              <MenuItem value={daysOfWeek[4]}>
                {returnFormattedDate(daysOfWeek[4])}
              </MenuItem>
              <MenuItem value={daysOfWeek[5]}>
                {returnFormattedDate(daysOfWeek[5])}
              </MenuItem>
              <MenuItem value={daysOfWeek[6]}>
                {returnFormattedDate(daysOfWeek[6])}
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
