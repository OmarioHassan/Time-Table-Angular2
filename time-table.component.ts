import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {
  // Time Table
  minutes = [];
  hours = [];
  technical = [
    {
      name: 'Omar Hasan',
      times: [
        { status: 'started', fromH: 9, fromM: 30, toH: 10, toM: 5 },
        { status: 'finished', fromH: 11, fromM: 30, toH: 13, toM: 5 },
        { status: 'admin_pending', fromH: 14, fromM: 30, toH: 15, toM: 5 },
        { status: 'technician_approved', fromH: 15, fromM: 22, toH: 17, toM: 5 },
        { status: 'admin_approved', fromH: 18, fromM: 30, toH: 20, toM: 5 }
      ]
    },
    {
      name: 'Ahmed Elgabalawy',
      times: [
        { status: 'technician_approved', fromH: 9, fromM: 22, toH: 11, toM: 60 },
        { status: 'finished', fromH: 13, fromM: 30, toH: 15, toM: 5 },
        { status: 'admin_pending', fromH: 16, fromM: 30, toH: 17, toM: 5 },
        { status: 'started', fromH: 18, fromM: 0, toH: 20, toM: 15 },
        { status: 'admin_approved', fromH: 20, fromM: 30, toH: 22, toM: 60 }
      ]
    },
    {
      name: 'Ahmed Elgabalawy',
      times: [
        { status: 'started', fromH: 9, fromM: 22, toH: 10, toM: 60 },
        { status: 'finished', fromH: 11, fromM: 30, toH: 15, toM: 5 },
        { status: 'admin_pending', fromH: 16, fromM: 30, toH: 17, toM: 5 },
        { status: 'technician_approved', fromH: 18, fromM: 0, toH: 21, toM: 15 },
        { status: 'admin_approved', fromH: 21, fromM: 30, toH: 22, toM: 60 }
      ]
    }
  ];
  // Time Table

  constructor() {}

  ngOnInit() {
    // Time Table
    for (let index = 1; index <= 60; index++) {
      this.minutes.push(index);
    }
    for (let index = 9; index <= 22; index++) {
      this.hours.push(index);
    }
  }
}
