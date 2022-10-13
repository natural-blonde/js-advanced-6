import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserBlobServiceService {
  public date = new Date();

  public year: any = this.date.getFullYear();
  public day: any = this.date.getDay();
  public month: any = this.date.getMonth();
  public minutes: any = this.date.getMinutes();
  public hours: any = this.date.getHours();
  public seconds: any = this.date.getSeconds();
  public setDate = new Date(this.year, this.month, this.day, this.hours, this.minutes, this.seconds);
  public id = 1;

  public users = [
    {
      name: 'Admin',
      email: 'admin@gmail.com',
      password: '12345',
      status: 'admin'
    },

  ];

  public blogs = [
    {
      id: this.id,
      postedBy: 'Admin',
      topic: 'First post',
      date: this.setDate,
      message: 'Sing up to create your account and start to use Angular Blog',
    }
  ];

  constructor() { }
}
