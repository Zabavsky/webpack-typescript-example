export interface ISelectItem {
    text: string | number;
    value: string | number;
    level: number;
    parentId: number | string;
    nestedId: number | string;
    selected: boolean;
    options?: HTMLSelectElement[];
}
export declare const ELMapper: {
    '10': string;
    'PI': string;
    '60': string;
};
export declare type LevelMapper = {
    level: number;
    selectRef: any;
    graphItems: ISelectItem[];
};
export declare const GRAPH_ITEMS: ISelectItem[];
