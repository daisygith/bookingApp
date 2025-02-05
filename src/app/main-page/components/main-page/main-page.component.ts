import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-main-page',
    imports: [MatButtonModule, MatIconModule, RouterLinkActive, RouterLink],
    templateUrl: './main-page.component.html',
    styleUrl: './main-page.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class MainPageComponent {}
