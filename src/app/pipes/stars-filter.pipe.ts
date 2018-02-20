import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starsFilter'
})
export class StarsFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let result:any[] = [];
    for (let i = 0; i < value.length; i++) {
        if(value[i].stars >= args[0] && value[i].stars <= args[1]){
          result.push(value[i]);
        }
    }
    return result;
  }

}
