import { trigger, state, style, transition,animate, group, query, stagger, keyframes} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'display': 'block'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'display': 'none'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'display': 'none'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'display': 'block'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
]
