import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
    {
        id       : 'applications',
        title    : 'Applications',
        translate: 'NAV.APPLICATIONS',
        type     : 'group',
        children : [
            {
                id       : 'dashboard',
                title    : 'Dashboard',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/dashboard',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'patients',
                title    : 'Patients',               
                type     : 'item',
                icon     : 'directions_run',
                url      : '/patient',
                badge    : {
                    title    : '25',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'checkup',
                title    : 'Checkup',               
                type     : 'item',
                icon     : 'directions_run',
                url      : '/checkup',
                badge    : {
                    title    : '12',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            },
            {
                id       : 'medicines',
                title    : 'Medicines',               
                type     : 'item',
                icon     : 'directions_run',
                url      : '/medicine',
                badge    : {
                    title    : '12',
                    translate: 'NAV.SAMPLE.BADGE',
                    bg       : '#F44336',
                    fg       : '#FFFFFF'
                }
            }
        ]
    }
];
