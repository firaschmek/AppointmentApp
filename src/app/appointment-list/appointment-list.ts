import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css',
})
export class AppointmentList implements OnInit{
  ngOnInit(): void {
   let savedAppointments= localStorage.getItem("appointments");
   this.appointments= savedAppointments? JSON.parse(savedAppointments) :[];
  }

  newTitle: string = "";
  newDate: Date = new Date();
  appointments: Appointment[] = [];

  addAppointment() {
    if (this.newTitle.trim().length && this.newDate) {
      let appointment: Appointment = {
        id: Date.now(),
        title: this.newTitle,
        date: this.newDate
      }
      this.appointments.push(appointment);
      localStorage.setItem("appointments", JSON.stringify(this.appointments));
      this.newTitle = "";
      this.newDate = new Date();
    }
  }

  deleteAppointment(index: number) {
    this.appointments.splice(index, 1)
    localStorage.setItem("appointments", JSON.stringify(this.appointments));
  }

}
