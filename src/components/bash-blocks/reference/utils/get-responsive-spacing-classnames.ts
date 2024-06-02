import { isDefined, toUpperCase } from '../../../../scripts';
import { SpacingConfig } from '..';

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
        styles[
          `${prefix}Breakpoint${toUpperCase(breakpoint)}Spacing${toUpperCase(spacing)}`
        ]
    )
    .filter(isDefined);
};
