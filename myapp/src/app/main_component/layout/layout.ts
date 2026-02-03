import { Component } from '@angular/core';
import { Main } from '../main/main';
import { Header } from '../../shared_component/header/header';
import { Sidebar } from '../../shared_component/sidebar/sidebar';
import { Footer } from '../../shared_component/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [ Header, Sidebar, Footer, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

}
