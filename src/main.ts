import {GRAPH_ITEMS, LevelMapper} from './constants';
import {getSelectByDataAttribute, getSelectRef} from './helpers';
import {EventListeners} from './event-listeners';

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
                let _graphs = GRAPH_ITEMS.filter((_item, _idx) => {
                    return _item.parentId.toString() === _parentId.toString();
                });

                selectMapper.get(_i).push({level: idx, graphItems: _graphs, selectRef: _sel.item(idx)});
            });
        }
    }

    attachOptionsToSelects();
}

function addEventListeners(el: HTMLSelectElement, nestedNodesDataAttr: string): void {
    new EventListeners(el, nestedNodesDataAttr);
}

function attachOptionsToSelects(): void {
    selectMapper.forEach((value, key) => {
        Object.keys(value).forEach((item, idx) => {
            const _select = value[idx];

            _select.graphItems.forEach((_itm, _idx) => {
                if (_itm.nestedId) {
                    addEventListeners(_select.selectRef, _itm.nestedId.toString());
                }
                _select.selectRef.add(
                    new Option(_itm.text.toString(), _itm.value.toString(), _itm.selected)
                );
            });
        });
    });
}


initSelects();
