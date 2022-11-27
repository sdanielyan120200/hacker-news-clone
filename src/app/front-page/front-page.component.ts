import { Component, OnInit } from '@angular/core';

import { Item } from '../interfaces/dataType.interface';
import { FrontPageService } from './front-page.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent implements OnInit {
  loadedItems: Item[] = [];
  pageIndex: number = 0;
  pageSize: number = 5;
  length: number = 0
  isLoaded = false;

  constructor(private frontPageService: FrontPageService) { }

  ngOnInit(): void {
    this.frontPageService.loadItems(this.pageSize)
      .subscribe((items: any) => {
        this.loadedItems = items.hits;
        this.length = items.nbHits
      });
  }

  onHandlePageEvent(e: any) {
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.onGetPage()
  }

  onGetPage() {
    this.isLoaded = true;
    this.frontPageService.getPage(this.pageSize, this.pageIndex).subscribe((items: any) => {
      this.loadedItems = items.hits;
      this.length = items.nbHits
      this.isLoaded = false;
    });
  }
  onReadComments() { }
}
