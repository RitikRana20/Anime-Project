import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { AnimeStoreService } from '../anime-store.service';

@Component({
  selector: 'app-anime-store',
  templateUrl: './anime-store.component.html',
  styleUrls: ['./anime-store.component.css'],
})
export class AnimeStoreComponent implements OnInit {
  public id = 0;
  public loading: boolean = true;
  public errorMessage: string | null = null;
  anime: any[] = [];
  i: any;
  removeItem: any;
  payNow: any;

  constructor(
    private animeStoreService: AnimeStoreService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.fetchanime();
  }

  fetchanime(): void {
    debugger;
    this.animeStoreService.getanime().subscribe(
      (res: any) => {
        console.log(res);
        this.anime = res.animeStore || [];
        console.log(this.anime);
        this.anime.forEach((anime: any) => {
          anime.quantity = 1; // Add this line
          anime.total = anime.price * anime.quantity;
        });
        this.loading = false;
      },
      (error: any) => {
        this.errorMessage = 'Failed to load anime. Please try again later.';
        this.loading = false;
      }
    );
  }
  addToCart(anime: any): void {
    this.cartService.addtocart(anime);
  }
}
