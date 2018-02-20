import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {
  transform(value: any, args?: string): any {
    let result:any[] = [];
    if(args.length == 0){
      return value;
    }else{
      let exp = new RegExp(args,'i')
      for (let i = 0; i < value.length; i++) {
        if( exp.test(value[i].name)){
          result.push(value[i]);
        }
      }
      return result;
    }
  }
}
