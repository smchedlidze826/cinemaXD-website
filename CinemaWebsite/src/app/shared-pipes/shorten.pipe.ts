import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'shorten'
})

export class ShoretenPipe implements PipeTransform {
    transform(value: string, max: number) {
        if (value.length > 3 && value.length < 6) {
            return value.substr(0, 3)
        }
        else if (value.length > max) {
            return value.substr(0, max) + '...'
        }
        return value
    }
}