import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders } from '@angular/core';
import { ActionReducer } from '@ngrx/store';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarActions } from './toolbar.actions';
import { ToolbarReducer } from './toolbar.reducer';
import { ToolbarEffects } from './toolbar.effects';
import SharedModule from '/client/imports/shared/shared.module';
import { ToolbarService } from './toolbar.service';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    imports: [
        SharedModule,
        ToolbarModule.effects().map(effects => EffectsModule.run(effects))
    ],
    declarations: [
        ToolbarComponent
    ],
    providers: [ToolbarActions],
    exports: [ToolbarComponent]
})
export default class ToolbarModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ToolbarModule,
            providers: [ToolbarService]
        };
    }

    static reducers(): {[key: string]: ActionReducer<any>} {
        return { toolbar: ToolbarReducer };
    }

    static effects(): any[] {
        return [ToolbarEffects];
    }
}
