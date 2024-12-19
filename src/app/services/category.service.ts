import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categories = ['Technology', 'Lifestyle', 'Travel', 'Food'];

  constructor() {}

  getCategories() {
    return this.categories;
  }
}
