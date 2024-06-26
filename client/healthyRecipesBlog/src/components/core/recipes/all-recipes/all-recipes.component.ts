import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from '../../../../API/api.service';
import { Recipe } from '../../../../Types/Recipe';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css',
  animations: [
    trigger('myAnimationTrigger', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }), // Initial position and opacity
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // End position and opacity
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 })) // End position and opacity
      ]),
    ]),
  ],
})
export class AllRecipesComponent implements OnInit {
  constructor(private apiService:ApiService) {}


  // WE WILL HAVE PAGINATION FOR THIS PAGE
  // onAnimationStart(event: AnimationEvent) {
  //   if (event.triggerName === 'myAnimationTrigger' && event.phaseName === 'start') {
  //     this.scrollToElement();
  //   }
  // }

  // scrollToElement() {
  //   const element = this.elementRef.nativeElement.querySelector('.all-recipes-list'); // Adjust the selector as per your element
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Adjust options as needed
  //   }
  // }

  recipesList: Recipe[] = [];
  isLoading: boolean = true;
  currentPage: number = 1;
  pageSize: number = 6;
  totalItems: number = 0;
  totalPages: number = 0;
  currentPageForInfo: number = 1;
  

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.loadPage(this.currentPage);
    }, 2500);
  }

  loadPage(page: number) {
    this.apiService.getAllRecipesWithoutPagination().subscribe({
      next: (recipes: any) => {
        console.log(recipes);
        this.totalPages = Math.ceil(recipes.length / this.pageSize);
      },
      error: (error: any) => {
        console.error(error.message);
      }
    })
    const offset = (page - 1) * 6;
    if (offset > this.recipesList.length) {
      this.currentPageForInfo -= 1;
      return alert("No more recipes to load.");
    } // Calculate offset based on current page and page size
    this.apiService.getAllRecipes(offset, this.pageSize).subscribe({
      next: (recipes: any) => {
        this.recipesList = recipes;
        this.currentPage = page;
        console.log({recipes: this.recipesList, pageSize: this.pageSize})
      },
      error: (error: any) => {
        console.error(error);
        this.currentPageForInfo -= 1;
      }
    });
  }

  nextPage() {
    this.currentPageForInfo += 1;
    this.loadPage(this.currentPage + 1);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
    this.currentPageForInfo -= 1;
    if (this.currentPageForInfo < 1) {
      this.currentPageForInfo = 1;
    }

}
}
