import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any): any {
    if(value.length == 0){
      return value;
    }

    return value.sort((a, b) =>{
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if(nameA < nameB){
        return -1;
      }
      else if(nameA > nameB){
        return 1;
      }
      return 0;
    })
  }

}
