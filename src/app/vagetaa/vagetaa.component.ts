import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vagetaa',
  templateUrl: './vagetaa.component.html',
  styleUrls: ['./vagetaa.component.css'],
})
export class VagetaaComponent implements OnInit {
  public id = 0;
  // images = [];
  // Description: string='';
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      // this.loadImages();
    });
    // updatesImages():void {
    if (this.id == 1) {
      this.images = [
        {
          src: '/assets/vagetaimages/download (1).jpeg',
          alt: 'Image 1',
          Description: 'Vagetaa Image Download',
        },

        {
          src: '/assets/vagetaimages/download (2).jpeg',
          alt: 'Image 2',
          Description: 'Vagetaa Image Download',
        },
        {
          src: '/assets/vagetaimages/download (3).jpeg',
          alt: 'Image 3',
          Description: 'Vagetaa Image Download',
        },
        {
          src: '/assets/vagetaimages/download.jpeg',
          alt: 'Image 4',
          Description: 'Vagetaa Image Download',
        },
      ];
    }
    if (this.id == 2) {
      this.images = [
        {
          src: '/assets/uchihaimages/download (1).jpeg',
          alt: 'Image 1',
          Description: 'Uchiha Image Download',
        },
        {
          src: '/assets/uchihaimages/download (2).jpeg',
          alt: 'Image 2',
          Description: 'Uchiha Image Download',
        },
        {
          src: '/assets/uchihaimages/download (3).jpeg',
          alt: 'Image 3',
          Description: 'Uchiha Image Download',
        },
        {
          src: '/assets/uchihaimages/download.jpeg',
          alt: 'Image 4',
          Description: 'Uchiha Image Download',
        },
      ];
    }
    if (this.id == 3) {
      this.images = [
        {
          src: '/assets/tokyoimages/download (1).jpeg',
          alt: 'Image 1',
          Description: 'Tokyo Image Download',
        },
        {
          src: '/assets/tokyoimages/download (4).jpeg',
          alt: 'Image 2',
          Description: 'Tokyo Image Download',
        },
        {
          src: '/assets/tokyoimages/download.jpeg',
          alt: 'Image 3',
          Description: 'Tokyo Image Download',
        },
        {
          src: '/assets/tokyoimages/images.jpeg',
          alt: 'Image 4',
          Description: 'Tokyo Image Download',
        },
      ];
    }
    if (this.id == 4) {
      this.images = [
        {
          src: '/assets/giyuimages/download (1).jpeg',
          alt: 'Image 1',
          Description: 'Giyu Image Download',
        },
        {
          src: '/assets/giyuimages/download (2).jpeg',
          alt: 'Image 2',
          Description: 'Giyu Image Download',
        },
        {
          src: '/assets/giyuimages/download.jpeg',
          alt: 'Image 3',
          Description: 'Giyu Image Download',
        },
        {
          src: '/assets/giyuimages/images.jpeg',
          alt: 'Image 4',
          Description: 'Giyu Image Download',
        },
      ];
    }
    if (this.id == 5) {
      this.images = [
        {
          src: '/assets/Gojoimages/download (1).jpeg',
          alt: 'Image 1',
          Description: 'Gojo Image Download',
        },
        {
          src: '/assets/Gojoimages/download (3).jpeg',
          alt: 'Image 2',
          Description: 'Gojo Image Download',
        },
        {
          src: '/assets/Gojoimages/download.jpeg',
          alt: 'Image 3',
          Description: 'Gojo Image Download',
        },
        {
          src: '/assets/Gojoimages/images.jpeg',
          alt: 'Image 4',
          Description: 'Gojo Image Download',
        },
      ];
    }
    if (this.id == 6) {
      this.images = [
        {
          src: '/assets/Leviimages/download (1).jpeg',
          alt: 'Image 1',
          Description: 'Levi Image Download',
        },
        {
          src: '/assets/Leviimages/download (2).jpeg',
          alt: 'Image 2',
          Description: 'Levi Image Download',
        },
        {
          src: '/assets/Leviimages/download.jpeg',
          alt: 'Image 3',
          Description: 'Levi Image Download',
        },
        {
          src: '/assets/Leviimages/images.jpeg',
          alt: 'Image 4',
          Description: 'Levi Image Download',
        },
      ];
    }
  }

  images = [
    {
      src: '/assets/vagetaimages/download (1).jpeg',
      alt: 'Image 1',
      Description: 'Description 1',
    },
    {
      src: '/assets/vagetaimages/download (2).jpeg',
      alt: 'Image 2',
      Description: 'Description 2',
    },
    {
      src: '/assets/vagetaimages/download (3).jpeg',
      alt: 'Image 3',
      Description: 'Description 3',
    },
    {
      src: '/assets/vagetaimages/download.jpeg',
      alt: 'Image 4',
      Description: 'Description 4',
    },
  ];

  downloadImage(imageSrc: string) {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop() ?? '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
