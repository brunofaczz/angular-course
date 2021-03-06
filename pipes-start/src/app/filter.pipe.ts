import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
  // pure: false -> This property changes the trigger of the pipe. Instead of trigger the pipe only when the arguments changes,
//  the pipe is triggered when anything on the page changes
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, prop: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[prop] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
