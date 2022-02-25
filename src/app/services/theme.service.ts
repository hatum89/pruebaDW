import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  constructor(public renderFactory: RendererFactory2) {
    this.renderer = this.renderFactory.createRenderer(null, null);
  }
}
