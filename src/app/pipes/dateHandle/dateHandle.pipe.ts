/**
 * @file 时间本地化处理管道符
 * @desc app/pipes/date-handle
 * @author Surmon <https://github.com/yah0130>
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dataToLocale' })
export class DataToLocalePipe implements PipeTransform {

  transform(input: any): string {
    return new Date(input).toLocaleString();
  }
}
