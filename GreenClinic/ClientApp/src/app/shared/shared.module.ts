import { NgModule } from '@angular/core';
import { SharedComponentsModule } from './components/shared-components.module';
import { DatePipe } from '@angular/common';

 

@NgModule({
    imports: [SharedComponentsModule],
    entryComponents: [],
    providers: [DatePipe],
    declarations: []
})
export class SharedModule {

}
