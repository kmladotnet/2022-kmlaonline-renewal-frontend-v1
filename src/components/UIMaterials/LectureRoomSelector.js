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

  var daysOfWeek = []

  console.log(date.addDays(1));
  date.get

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
            >
              <MenuItem value={"monday"}>
                {date.getFullYear()}-{("0" + (date.getMonth() + 1)).slice(-2)}-
                {("0" + date.getDate()).slice(-2)}
              </MenuItem>
              <MenuItem value={"tuesday"}>
                {date.getFullYear()}-{("0" + (date.getMonth() + 1)).slice(-2)}-
                {("0" + (date.getDate() + 1)).slice(-2)}
              </MenuItem>
              <MenuItem value={"wednesday"}>
                {date.getFullYear()}-{("0" + (date.getMonth() + 1)).slice(-2)}-
                {("0" + (date.getDate() + 2)).slice(-2)}
              </MenuItem>
              <MenuItem value={"thursday"}>
                {date.getFullYear()}-{("0" + (date.getMonth() + 1)).slice(-2)}-
                {("0" + (date.getDate() + 3)).slice(-2)}
              </MenuItem>
              <MenuItem value={"friday"}>
                {date.getFullYear()}-{("0" + (date.getMonth() + 1)).slice(-2)}-
                {("0" + (date.getDate() + 4)).slice(-2)}
              </MenuItem>
              <MenuItem value={"saturday"}>
                {date.getFullYear()}-{("0" + (date.getMonth() + 1)).slice(-2)}-
                {("0" + (date.getDate() + 5)).slice(-2)}
              </MenuItem>
              <MenuItem value={"sunday"}>
                {date.getFullYear()}-{("0" + (date.getMonth() + 1)).slice(-2)}-
                {("0" + (date.getDate() + 6)).slice(-2)}
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <LectureRoomTable day={1} />
      </div>
    </>
  );
};

export default LectureRoomSelector;
