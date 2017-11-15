import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'removeSpecialChars' })
export class RemoveSpecialChars implements PipeTransform {
    transform(str) {
        let strNew:string;
        if (str) {
            strNew = str.replace(/[^\w\s]/gi, '')
        }
        return strNew;
    }
}