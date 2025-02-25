import { Component, input } from '@angular/core';
import { GifsListItemsComponent } from './gifs-list-items/gifs-list-items.component';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemsComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  gifs = input.required<Gif[]>();
}
