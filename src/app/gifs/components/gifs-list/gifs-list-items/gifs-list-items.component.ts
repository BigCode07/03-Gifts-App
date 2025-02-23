import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-list-items',
  imports: [],
  templateUrl: './gifs-list-items.component.html',
})
export class GifsListItemsComponent {
  imageUrl = input.required<String>();
}
