import {GRAPH_ITEMS, LevelMapper} from './constants';
import {getSelectByDataAttribute, getSelectRef} from "./helpers";

const selectMapper = new Map<number, LevelMapper[]>();

function initSelects(): void {
    const selectRefs = getSelectRef('select');
    const _len = selectRefs.length;
    let _i = 0;

    for (_i; _i < _len; _i++) {
        let _sel = getSelectByDataAttribute('[data-level="' + _i + '"]');

        if (_sel.length) {
            selectMapper.set(_i, []);
            Object.keys(_sel).filter((item: any, idx: number) => {
                const _parentId = _sel.item(idx).getAttribute('data-parent');
                let _graphs = GRAPH_ITEMS.filter((item, idx) => {
                    return item.parentId.toString() === _parentId.toString();
                });
                selectMapper.get(_i).push({level: idx, graphItems: _graphs, selectRef: _sel.item(idx)});
            });
        }
    }

    attachOptionsToSelects();
}

function attachOptionsToSelects(): void {
    selectMapper.forEach((value, key) => {
        Object.keys(value).forEach((item, idx) => {
            const _select = value[idx];

            _select.graphItems.forEach((_itm, _idx) => {
                _select.selectRef.add(
                    new Option(_itm.text.toString(), _itm.value.toString(), _itm.selected)
                )
            });
        });
    });
}


initSelects();
