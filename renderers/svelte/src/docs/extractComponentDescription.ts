type Component = any;

export function extractComponentDescription(component?: Component): string {
  if (!component) {
    return '';
  }

  const { __docgen = {} } = component;
  return __docgen.description;
}
