/**
 * @file 分类页面列表组件
 * @desc app/page/article/component/category/list
 * @author Surmon <https://github.com/surmon-china>
 */

import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { IResponsePaginationData, TSelectedAll, TSelectedIds } from '@app/pages/pages.interface';
import { handleBatchSelectChange, handleItemSelectChange } from '@app/pages/pages.utils';
import { ICategory } from '@app/pages/article/article.utils';
import { getCategoryPath } from '@/app/transformers/link';

@Component({
  selector: 'box-category-list',
  encapsulation: ViewEncapsulation.Emulated,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ArticleCategoryListComponent {

  @Input() isFetching: boolean;
  @Input() categories: IResponsePaginationData<ICategory>;
  @Output() delCategoryRequest = new EventEmitter();
  @Output() delCategoriesRequest = new EventEmitter();
  @Output() editCategoryRequest = new EventEmitter();
  @Output() refreshList = new EventEmitter();

  public getCategoryPath = getCategoryPath;

  public categoriesSelectAll: TSelectedAll = false;
  public selectedCategories: TSelectedIds = [];

  constructor() {}

  // 多选切换
  public batchSelectChange(isSelect: boolean): void {
    const data = this.categories.data;
    const selectedIds = this.selectedCategories;
    this.selectedCategories = handleBatchSelectChange({ data, selectedIds, isSelect });
  }

  // 单个切换
  public itemSelectChange(): void {
    const data = this.categories.data;
    const selectedIds = this.selectedCategories;
    const result = handleItemSelectChange({ data, selectedIds });
    this.categoriesSelectAll = result.all;
    this.selectedCategories = result.selectedIds;
  }

  // 刷新列表
  public refreshCategories() {
    this.refreshList.emit();
  }

  // 编辑分类
  public editCategory(category) {
    this.editCategoryRequest.emit(category);
  }

  // 删除分类
  public delCategory(category) {
    this.delCategoryRequest.emit(category);
  }

  // 批量删除
  public delCategories() {
    this.delCategoriesRequest.emit(this.selectedCategories);
  }
}
