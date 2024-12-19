import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  providers: [CategoryService, PostService],
})
export class SidebarComponent {
  isCollapsed = signal(false);
  categories = inject(CategoryService).getCategories();
  recentPosts = inject(PostService).getRecentPosts();

  toggleSidebar() {
    this.isCollapsed.update((value) => !value);
  }
}
