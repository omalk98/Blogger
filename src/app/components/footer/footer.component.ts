import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialLinks = [
    { icon: faGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: faLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: faTwitter, url: 'https://twitter.com', label: 'Twitter' },
  ];
}
