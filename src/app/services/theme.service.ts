import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  renderer: Renderer2;
  colorTheme: string;
  constructor(public renderFactory: RendererFactory2) {
    this.renderer = this.renderFactory.createRenderer(null, null);
  }
  // tslint:disable-next-line:typedef
  initialTheme(){
    this.getColorTheme();
    this.renderer.addClass(document.body, this.colorTheme);
  }
  upDateModeTheme(theme: 'dark-mode'| 'light-mode'): void{
  this.setColorTheme(theme);
  const previousTheme = (theme === 'light-mode' ? 'light-mode' : 'dark-mode');
  this.renderer.removeClass(document.body, previousTheme);
  this.renderer.addClass(document.body, theme);
  }
  darkMode(): boolean{
    return this.colorTheme === 'dark-mode';
  }

  // tslint:disable-next-line:typedef
  setColorTheme(theme){
    this.colorTheme = theme;
    localStorage.setItem('theme', theme);
  }
  // tslint:disable-next-line:typedef
  getColorTheme(){
    if (localStorage.getItem('theme') === 'dark-mode'){
      this.colorTheme = 'dark-mode';
      this.colorTheme = localStorage.getItem('theme');
     } else {
       this.colorTheme = 'light-mode';
     }
  }
}
