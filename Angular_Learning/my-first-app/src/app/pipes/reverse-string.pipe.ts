import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseString'
})
export class ReverseStringPipe implements PipeTransform {

  transform(value: any): string {

    if(value.length === 0){
      return value;
    }

    let array = value.split("");

    array.reverse();
    let ans : string = "";

    for(let val of array){
      ans += val;
    }
    return ans;
  }

}
