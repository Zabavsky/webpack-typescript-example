import {ELMapper} from './constants';

export class EventListeners {
    constructor(private readonly _elementRef: HTMLSelectElement,
                private readonly _nestedNodeDataAttr: string) {
        this.initEventListener(_elementRef);
    }

    private initEventListener(el: HTMLSelectElement): void {
        el.addEventListener('change', (e) => {
            this.toggleNested(e);
        });
    }

    private toggleNested(e: Event): void {
        const nextSiblingSelect = document.querySelectorAll('[data-nested="' + this._nestedNodeDataAttr + '"]');
        const hasNextSiblings = nextSiblingSelect && nextSiblingSelect[0] ? nextSiblingSelect[0].nextElementSibling : null;
        // @ts-ignore
        const hasSiblingMatches = ELMapper[e.target.value] === this._nestedNodeDataAttr;
        if (hasSiblingMatches) {
            // @ts-ignore
            e.target.nextElementSibling.removeAttribute('disabled');
            this.toggleNextSibling(hasNextSiblings);
        } else {
            // @ts-ignore
            e.target.nextElementSibling.setAttribute('disabled', 'disabled');
            this.toggleNextSibling(hasNextSiblings, true);
        }
    }

    private toggleNextSibling(e: Element | null, hasDependency?: boolean): void {
        const hasDisableAttribute = e && e.hasAttribute('disabled');
        if (hasDisableAttribute && !hasDependency) {
            e.removeAttribute('disabled');
        } else {
            e.setAttribute('disabled', 'disabled');
        }
    }
}
