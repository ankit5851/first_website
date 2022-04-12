import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  appTitle: string = 'Welcome';
  appList: any[] = [ {
     "ID": "1",
     "url": '../assets/image/java.jpg'
  },
  {
     "ID": "2",
     "url": '../assets/image/mean.jpg'
  } ];
}


