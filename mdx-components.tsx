import defaultMdxComponents from "fumadocs-ui/mdx"
import type { MDXComponents } from "mdx/types"

import { Installer } from "@/app/components/installer"
import { Preview } from "@/app/components/preview"

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Installer,
    Preview,
    ...components,
  }
}
