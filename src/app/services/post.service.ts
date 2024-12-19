import { Injectable } from '@angular/core';

@Injectable()
export class PostService {
  private recent = [
    'Angular Best Practices',
    'Travel Diaries',
    'Cooking Adventures',
  ];

  constructor() {}

  getRecentPosts() {
    return this.recent;
  }
}
