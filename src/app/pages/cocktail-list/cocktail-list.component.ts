import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Drink } from 'src/app/interface/drink.interfaces';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {
  cocktails: Drink[] = [];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  selectedLetter: string | null = null;

  pageIndex = 0;
  pageSize = 15;
  totalCocktails = 0;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.loadAllCocktails();
  }

  loadAllCocktails() {
    this.cocktails = [];
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    alphabet.split('').forEach(letter => {
      this.searchByLetter(letter);
    });
  }

  searchByLetter(letter: string) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
    this.http.get<any>(url).subscribe(data => {
      this.cocktails.push(...data.drinks);
      this.totalCocktails = this.cocktails.length;
    });
  }


  getCocktailThumbnail(thumbnailUrl: string) {
    return thumbnailUrl + '/preview';
  }

  navigateToCocktailsByLetter(letter: string) {
    this.selectedLetter = letter;
    this.router.navigate(['/cocktails', letter]);
  }

  navigateToDrink(drinkId: string) {
    this.router.navigate(['/drinks', drinkId]);
  }

  onPageChange(event: PageEvent) {
    this.pageIndex = event.pageIndex;
  }

  get pagedCocktails() {
    const startIndex = this.pageIndex * this.pageSize;
    return this.cocktails.slice(startIndex, startIndex + this.pageSize);
  }
}
