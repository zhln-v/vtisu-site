import type { ElementType } from 'react';
import type { SpringConfig } from '../variants';
import type { EffectType } from './EffectType';

export interface AnimatedTextProps {
    text: string;
    as?: ElementType;
    textClass?: string;
    stagger?: number;
    springConfig?: SpringConfig;
    effect?: EffectType;
}
