/**
 * @file 全局设置页面路由
 * @desc app/page/options/routes
 * @author Surmon <https://github.com/yah0130>
 */

import { Routes, RouterModule } from '@angular/router';
import { OptionsComponent } from './options.component';

const routes: Routes = [
  { path: '', component: OptionsComponent }
];

export const RoutingModule = RouterModule.forChild(routes);
