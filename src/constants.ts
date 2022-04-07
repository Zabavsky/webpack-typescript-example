export interface ISelectItem {
    text: string | number;
    value: string | number;
    level: number;
    parentId: number | string;
    nestedId: number | string;
    selected: boolean;
    options?: HTMLSelectElement[];
}

export type LevelMapper = {level: number, selectRef: any, graphItems: ISelectItem[]};

export const GRAPH_ITEMS: ISelectItem[] = [
    {text: 'A', value: 'A', level: 0, nestedId: null, parentId: 0, selected: false},
    {text: 'B', value: 'B', level: 0, nestedId: null, parentId: 0, selected: false},
    {text: 'C', value: 'C', level: 0, nestedId: null, parentId: 0, selected: false},

    {text: 2, value: 2, level: 1, nestedId: null, parentId: 'A', selected: false},
    {text: 4, value: 4, level: 1, nestedId: null, parentId: 'A', selected: false},
    {text: 6, value: 6, level: 1, nestedId: null, parentId: 'A', selected: false},

    {text: 1, value: 1, level: 1, nestedId: null, parentId: 'B', selected: false},
    {text: 3, value: 3, level: 1, nestedId: null, parentId: 'B', selected: false},
    {text: 10, value: 10, level: 1, nestedId: 'Segma', parentId: 'B', selected: false},

    {text: 50, value: 50, level: 1, nestedId: null, parentId: 'C', selected: false},
    {text: 60, value: 60, level: 1, nestedId: 3, parentId: 'C', selected: false},
    {text: 70, value: 70, level: 1, nestedId: null, parentId: 'C', selected: false},

    {text: 70, value: 70, level: 2, nestedId: null, parentId: 10, selected: false},
    {text: 'PI', value: 'PI', level: 2, nestedId: 'Foo', parentId: 10, selected: false},
    {text: 'Segma', value: 'Segma', level: 2, nestedId: null, parentId: 10, selected: false},

    {text: 'Test', value: 'Test', level: 2, nestedId: null, parentId: 'PI', selected: false},
    {text: 'Foo', value: 'Foo', level: 2, nestedId: null, parentId: 'PI', selected: false},
    {text: 'Bar', value: 'Bar', level: 2, nestedId: null, parentId: 'PI', selected: false},

    {text: 'Alpha', value: 'Alpha', level: 1, nestedId: null, parentId: 60, selected: false},
    {text: 3, value: 3, level: 1, nestedId: null, parentId: 60, selected: false},
    {text: 'Zeta', value: 'Zeta', level: 1, nestedId: null, parentId: 60, selected: false}
];



