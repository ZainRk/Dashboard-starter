import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import './Calender.css'
// import Progress from '../Progress/Progress';

export default function BasicDateCalendar() {
  return (
    <div className="calender">
      <h3>Profile</h3>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
  
    </div>
    
  );
 
}