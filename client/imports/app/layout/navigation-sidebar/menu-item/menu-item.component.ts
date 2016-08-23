import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { MenuItem } from '../../../../../../shared/models/menu-item.model';
import { PolymerElement } from '@vaadin/angular2-polymer';

@Component({
    selector: 'mc-menu-item',
    // FIXME: import template when TypeScript 2.0 is released
    template: require('./menu-item.component.html').default,
    directives: [
        PolymerElement('paper-icon-item'),
        PolymerElement('iron-icon')
    ]
})
export class MenuItemComponent implements OnChanges {

    private _name: string;
    private _icon: string;
    private _description: string;
    private _link: string;

    @Input() item: MenuItem;
    @Output() click = new EventEmitter();

    constructor() {
    }

    ngOnChanges(changes: any): any {
        if (changes.item) {
            this._icon = changes.item.currentValue.icon;
            this._name = changes.item.currentValue.name;
            this._description = changes.item.currentValue.description;
            this._link = changes.item.currentValue.link;
        }
    }
}
