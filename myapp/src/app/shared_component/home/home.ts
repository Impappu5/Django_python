import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from '../footer/footer';
import { About } from '../../main_component/about/about';

@Component({
  selector: 'app-home',
  imports: [RouterLink,Footer,About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
//  imagesUrl='myapp/src/assets/pic.png';

  
}
