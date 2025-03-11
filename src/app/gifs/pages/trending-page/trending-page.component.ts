import {
  Component,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [],
  templateUrl: './trending-page.component.html',
})
export default class TrendingPageComponent {
  gifService = inject(GifService);

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    // console.log({ scrollTotal: scrollTop + clientHeight, scrollHeight });
    const isAtBotton = scrollTop + clientHeight >= scrollHeight;
    console.log({ isAtBotton });

    if (isAtBotton) {
      //TODO: Cargar la siguiente pagina de gifs
    }
  }
}
