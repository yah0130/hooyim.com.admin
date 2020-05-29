/**
 * @file 文章管理页面路由
 * @desc app/page/article/routes
 * @author Surmon <https://github.com/surmon-china>
 */

import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article.component';
import { ArticleTagComponent } from './components/tag';
import { ArticleEditComponent } from './components/edit';
import { ArticleListComponent } from './components/list';
import { ArticleCategoryComponent } from './components/category';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: '',
        redirectTo: 'category',
        pathMatch: 'full'
      },
      {
        path: 'category',
        component: ArticleCategoryComponent
      },
      {
        path: 'post',
        component: ArticleEditComponent
      },
      {
        path: 'edit/:article_id',
        component: ArticleEditComponent
      },
      {
        path: 'list',
        component: ArticleListComponent
      },
      {
        path: 'tag',
        component: ArticleTagComponent
      }
    ]
  }
];

export const RoutingModule = RouterModule.forChild(routes);
