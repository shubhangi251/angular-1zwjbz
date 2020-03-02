import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'correctcase'
})
export class CorrectcasePipe implements PipeTransform {

  transform(value: string ) {
let  prepo:string[]=['about','of','the'];

    if(!value)
    return null;
    let words=value.split(' ');
    for(var i=0; i<words.length;i++)
    {
if(prepo.includes(words[i])){
  words[i]=words[i].toLowerCase();}
  else
  {
words[i].substr(0,1).toUpperCase();
  }
}
return words.join('');
    }

  }

