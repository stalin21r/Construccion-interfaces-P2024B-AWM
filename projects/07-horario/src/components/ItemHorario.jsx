import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export function ItemHorario() {
  const rows = [
    { time: "7:00 am - 8:00 am", monday: "Stalin Garcia", tuesday: "Stalin Garcia", wednesday: "Stalin Garcia", thursday: "Stalin Garcia", friday: "Stalin Garcia" },
    { time: "8:00 am - 9:00 am", monday: "Aldair Flor", tuesday: "Aldair Flor", wednesday: "Aldair Flor", thursday: "Aldair Flor", friday: "Aldair Flor" },
    { time: "9:00 am - 10:00 am", monday: "Stalin Garcia", tuesday: "Stalin Garcia", wednesday: "Stalin Garcia", thursday: "Stalin Garcia", friday: "Stalin Garcia" },
    { time: "10:00 am - 11:00 am", monday: "Aldair Flor", tuesday: "Aldair Flor", wednesday: "Aldair Flor", thursday: "Aldair Flor", friday: "Aldair Flor" },
    { time: "11:00 am - 12:00 pm", monday: "Stalin Garcia", tuesday: "Stalin Garcia", wednesday: "Stalin Garcia", thursday: "Stalin Garcia", friday: "Stalin Garcia" },
    { time: "12:00 pm - 1:00 pm", monday: "Aldair Flor", tuesday: "Aldair Flor", wednesday: "Aldair Flor", thursday: "Aldair Flor", friday: "Aldair Flor" },
    { time: "1:00 pm - 2:00 pm", monday: "Stalin Garcia", tuesday: "Stalin Garcia", wednesday: "Stalin Garcia", thursday: "Stalin Garcia", friday: "Stalin Garcia" },
    { time: "2:00 pm - 3:00 pm", monday: "Aldair Flor", tuesday: "Aldair Flor", wednesday: "Aldair Flor", thursday: "Aldair Flor", friday: "Aldair Flor" },
  ];

  return (
    <TableContainer component={Paper} style={{width:"80%", marginTop:"7%", borderRadius:"20px"}}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hora</TableCell>
            <TableCell>Lunes</TableCell>
            <TableCell>Martes</TableCell>
            <TableCell>Miércoles</TableCell>
            <TableCell>Jueves</TableCell>
            <TableCell>Viernes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.monday}</TableCell>
              <TableCell>{row.tuesday}</TableCell>
              <TableCell>{row.wednesday}</TableCell>
              <TableCell>{row.thursday}</TableCell>
              <TableCell>{row.friday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
