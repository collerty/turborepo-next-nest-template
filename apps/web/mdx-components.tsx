import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    code: ({ className, ...props }) => (
      <code
        className={`px-4 ${className ?? ""}`}
        {...props}
      />
    ),
    ...components,
  };
}