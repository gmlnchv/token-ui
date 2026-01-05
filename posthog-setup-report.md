# PostHog post-wizard report

The wizard has completed a deep integration of PostHog into your Token UI Next.js project. The integration includes:

- **Client-side initialization** via `instrumentation-client.ts` (recommended for Next.js 15.3+)
- **Server-side tracking** via `posthog-node` SDK for API route events
- **Reverse proxy configuration** in `next.config.mjs` to reduce tracking blocker interference
- **Environment variables** set up in `.env` file using Next.js naming conventions
- **Error tracking** enabled with `capture_exceptions: true`
- **Custom event tracking** across key user interaction points

## Events Instrumented

| Event Name | Description | File |
|------------|-------------|------|
| `copy_button_clicked` | User clicked the copy button to copy content to clipboard | `components/copy-button.tsx` |
| `installer_command_copied` | User copied the package installation command | `components/installer.tsx` |
| `preview_tab_changed` | User switched between code and preview tabs | `components/preview.tsx` |
| `cta_button_clicked` | User clicked the main CTA button on the homepage | `components/cta-button.tsx` |
| `github_link_clicked` | User clicked the GitHub link in the footer | `components/footer.tsx` |
| `search_performed` | User performed a search in the documentation (server-side) | `app/api/search/route.ts` |

## Files Created/Modified

### New Files
- `instrumentation-client.ts` - Client-side PostHog initialization
- `lib/posthog-server.ts` - Server-side PostHog client
- `components/cta-button.tsx` - CTA button component with tracking
- `.env` - Environment variables for PostHog

### Modified Files
- `next.config.mjs` - Added reverse proxy rewrites
- `components/copy-button.tsx` - Added copy event tracking and error capture
- `components/installer.tsx` - Added install command copy tracking
- `components/preview.tsx` - Added tab change tracking
- `components/footer.tsx` - Added GitHub link click tracking
- `app/(home)/page.tsx` - Updated to use CTAButton component
- `app/api/search/route.ts` - Added server-side search tracking

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/277865/dashboard/971203) - Your main analytics dashboard

### Insights
- [Install Commands Copied Over Time](https://us.posthog.com/project/277865/insights/7tmcJ5Ke) - Track package installation intent
- [Homepage to Docs Conversion Funnel](https://us.posthog.com/project/277865/insights/4xZBPuZP) - Measure visitor-to-user conversion
- [Code vs Preview Tab Usage](https://us.posthog.com/project/277865/insights/QzUn7f98) - Understand user engagement style
- [Copy Button Engagement](https://us.posthog.com/project/277865/insights/YXNKViOu) - Track content value and utility
- [Search Queries](https://us.posthog.com/project/277865/insights/mVyzsfR6) - Understand what users are looking for

## Additional Features Enabled

- **Automatic pageview tracking** - PostHog will automatically capture page views
- **Session replay** - Available through PostHog's default configuration
- **Error tracking** - Unhandled exceptions are automatically captured
- **Autocapture** - Click events and form submissions are automatically tracked

## Environment Variables

Make sure to add these to your production environment:

```
NEXT_PUBLIC_POSTHOG_KEY=phc_LA16zZXJxARJD2lobAqOsQLAFYDGePieuVJfJJ8WDcx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
```
