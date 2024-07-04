import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Registrationform';
  today = Date();
  
image: any;
  constructor(private router: Router) {}

  galleryItems = [];
  isModalOpen = false;
  selectedImage = { src: '/assets/images/11111.jpg' };

  openModal(item: { src: string; caption: string }) {
    this.selectedImage = item;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  readMore(item: any) {
    this.router.navigate(['/home', item]);
  }

  galleryItems1 = [
    {
      id: 1,
      src: '/assets/images/11111.jpg',
      caption: 'Place 1',
      Description: 'Description 1',
    },
    {
      id: 2,
      src: '/assets/images/82029.jpg',
      caption: 'Place 2',
      Description: 'Description 2',
    },
    {
      id: 3,
      src: '/assets/images/552148.png',
      caption: 'Place 3',
      Description: 'Description 3',
    },
    {
      id: 4,
      src: '/assets/images/1206557.jpg',
      caption: 'Place 4',
      Description: 'Description 4',
    },
    {
      id: 5,
      src: '/assets/images/satoru-gojo-jujutsu-kaisen-uhdpaper.com-4K-7.3270.jpg',
      caption: 'Place 5',
      Description: 'Description 5',
    },

    {
      id: 6,
      src: '/assets/images/wp1956137-levi-ackerman-wallpapers.png',
      caption: 'Place 6',
      Description: 'Description 6',
    },
    {
      src: '/assets/images/wp5513252-death-wallpapers.jpg',
      caption: 'Place 7',
      Description: 'Description 7',
    },
    {
      src: '/assets/images/wallpapertip_itachi-wallpaper_1041715.jpg',
      caption: 'Place 8',
      Description: 'Description 8',
    },

    {
      src: '/assets/images/dddd.png',
      caption: 'Place 9',
      Description: 'Description 9',
    },
    {
      src: '/assets/wallpaperflare.com_wallpaper.jpg',
      caption: 'Place 10',
      Description: 'Description 10',
    },
    {
      src: '/assets/wallhaven-pkopvj_1920x1080.png',
      caption: 'Place 11',
      Description: 'Description 11',
    },
    {
      src: '/assets/images/satoru-gojo-jujutsu-kaisen-4k-wallpaper-3840x2160-uhdpaper.com-328.1_a.jpg',
      caption: 'Place 12',
      Description: 'Description 12',
    },
  ];
  isModalOpen1 = false;
  selectedImage1 = { src: '' };

  openModal1(item: { src: string; caption: string }) {
    this.selectedImage = item;
    this.isModalOpen = true;
  }

  closeModal1() {
    this.isModalOpen = false;
  }
  readMore1(item: any) {
    this.router.navigate(['/home', item]);
  }
  
}
