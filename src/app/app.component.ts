import {Component, ElementRef, Renderer2, RendererFactory2, ViewChild} from '@angular/core';
import {ThemeService} from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pruebaDW';
  darkMode = false;
  renderer: Renderer2;
  showIconMode: boolean;
   constructor(private themeService: ThemeService,
               public renderFactory: RendererFactory2) {
     this.showIconMode = false;
     this.themeService.initialTheme();
     this.darkMode = this.themeService.darkMode();
     this.renderer = this.renderFactory.createRenderer(null, null);
   }
  // tslint:disable-next-line:typedef
  changeTheme() {
    this.darkMode = this.themeService.darkMode();
    if (this.darkMode){
      this.renderer.removeClass(document.body, 'dark-mode');
      this.themeService.upDateModeTheme('light-mode');
      this.showIconMode = false;
    } else {
      this.renderer.removeClass(document.body, 'light-mode');
      this.themeService.upDateModeTheme('dark-mode');
      this.showIconMode = true;
    }
  }
}
