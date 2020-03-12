import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'SortFilter'
})
export class SortPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
      let rVal = (val.slice(0,5) );
      return rVal;
    })

  }

}
