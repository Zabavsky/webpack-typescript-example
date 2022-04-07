import {ISelectItem} from './constants';

export function sortBy(arr: ISelectItem[], value: string): ISelectItem[] {
    // @ts-ignore
    return arr.sort((a, b) => (a[value] > b[value]) ? 1 : -1);
}

export function getSelectByDataAttribute(attr: string): any {
    return document.querySelectorAll(attr);
}

export function onlyUnique(value: any, index: number, self: any) {
    return self.indexOf(value) === index;
}

export function getSelectRef(name: string): HTMLSelectElement {
    return document.getElementsByTagName(name) as HTMLSelectElement;
}
