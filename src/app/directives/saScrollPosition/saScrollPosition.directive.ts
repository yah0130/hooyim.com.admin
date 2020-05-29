/**
 * @file 监听 Dom 滚动指令
 * @desc app/directives/scroll-position
 * @author Surmon <https://github.com/surmon-china>
 */

import { Directive, Input, Output, EventEmitter, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[saScrollPosition]'
})
export class SaScrollPositionDirective implements OnInit {

  @Input() public maxHeight: number;
  @Output() public scrollChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private isScrolled: boolean;

  public ngOnInit(): void {
    this.onWindowScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    const isScrolled = window.scrollY > this.maxHeight;
    if (isScrolled !== this.isScrolled) {
      this.isScrolled = isScrolled;
      this.scrollChange.emit(isScrolled);
    }
  }
}
