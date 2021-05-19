import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toPixels'
})
export class ToPixelsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `${value}px`;
  }

}
