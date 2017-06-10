import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'nametranslation'})
export class MyPipe implements PipeTransform {
  transform(exponent: string): string {
  	let result = exponent;
  	if(exponent == "渣渣"){
  		//result = 
  	}
    return result;
  }
}