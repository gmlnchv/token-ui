import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'

import { Installer } from '@/components/installer'
import { Preview } from '@/components/preview'

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Installer,
    Preview,
    ...components,
  }
}
