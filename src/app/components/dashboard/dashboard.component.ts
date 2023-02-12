import { Component } from '@angular/core';
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faX} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faEye} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  accept = faCheck; 
  decline = faX;
  edit = faEdit;
  delete = faTrash;
  view = faEye;

}
