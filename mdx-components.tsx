import { createFileSystemGeneratorCache, createGenerator } from 'fumadocs-typescript'
import { AutoTypeTable } from 'fumadocs-typescript/ui'
import defaultMdxComponents from 'fumadocs-ui/mdx'
import type { MDXComponents } from 'mdx/types'
import { DocsLink } from '@/components/docs-link'
import { Installer } from '@/components/installer'
import { Preview } from '@/components/preview'
import { VariantNote } from '@/components/variant-note'

const generator = createGenerator({
  cache: createFileSystemGeneratorCache('.next/fumadocs-typescript'),
})

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Installer,
    Preview,
    VariantNote,
    DocsLink,
    AutoTypeTable: props => <AutoTypeTable {...props} generator={generator} />,
    ...components,
  }
}
