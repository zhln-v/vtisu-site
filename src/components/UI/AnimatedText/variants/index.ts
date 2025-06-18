import { getFadeVariants } from './fade';
import { getSpringVariants, type SpringConfig } from './spring';
import { getZoomVariants } from './zoom';

export const variantPresets = {
    getFadeVariants,
    getSpringVariants,
    getZoomVariants,
};

export type { SpringConfig };
