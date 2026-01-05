import { createFromSource } from 'fumadocs-core/search/server'
import type { NextRequest } from 'next/server'
import { getPostHogClient } from '@/lib/posthog-server'
import { source } from '@/lib/source'

const searchHandler = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
})

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query')

  // PostHog: Track search events on the server
  if (query) {
    const posthog = getPostHogClient()
    posthog.capture({
      distinctId: 'anonymous', // No user identification in this app
      event: 'search_performed',
      properties: {
        search_query: query,
        source: 'api',
      },
    })
  }

  return searchHandler.GET(request)
}
