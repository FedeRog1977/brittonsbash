import { isDefined, toUpperCase } from '../../../../utils/index.js';
import { SpacingConfig } from '../types/index.js';

export const getResponsiveSpacingClassNames = (
  prefix: string,
  styles: Record<string, string>,
  spacingConfig?: SpacingConfig
): string[] => {
  if (!spacingConfig) {
    return [];
  }

  const config: SpacingConfig =
    typeof spacingConfig === 'string' ? { xs: spacingConfig } : spacingConfig;

  return Object.entries(config)
    .map(
      ([breakpoint, spacing]) =>
        styles[`${prefix}Breakpoint${toUpperCase(breakpoint)}Spacing${toUpperCase(spacing)}`]
    )
    .filter(isDefined);
};
