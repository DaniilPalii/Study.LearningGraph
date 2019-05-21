import { Component, EventEmitter, Output } from '@angular/core';
import { Texts } from '../texts.data';

export interface NavigationItem {
  id: number;
  title: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  public navigationItems = new Array<NavigationItem>(
    { id: 1, title: Texts.lesson1Title },
    { id: 2, title: 'Lesson 2 with long name' },
    { id: 3, title: 'Lesson 3 with longer name. Some tooltipText and more tooltipText' },
    { id: 4, title: 'Lesson 4'}
  );
  public selectedItem: NavigationItem = this.navigationItems[0];
  @Output('selectionChange') public selectionChangeEventEmitter = new EventEmitter<NavigationItem>();

  public switchSelection(item: NavigationItem): void {
    this.selectedItem = item;
    this.selectionChangeEventEmitter.emit(item);
  }
}
