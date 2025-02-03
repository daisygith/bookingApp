import { Component, ViewEncapsulation } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent{}
