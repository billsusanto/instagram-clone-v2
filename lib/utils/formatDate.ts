import { formatDistanceToNowStrict, format } from 'date-fns'

export function formatRelativeTime(date: string | Date): string {
  const distance = formatDistanceToNowStrict(new Date(date), {
    addSuffix: false,
  })

  // Convert to Instagram-style format
  return distance
    .replace(' seconds', 's')
    .replace(' second', 's')
    .replace(' minutes', 'm')
    .replace(' minute', 'm')
    .replace(' hours', 'h')
    .replace(' hour', 'h')
    .replace(' days', 'd')
    .replace(' day', 'd')
    .replace(' weeks', 'w')
    .replace(' week', 'w')
    .replace(' months', 'mo')
    .replace(' month', 'mo')
    .replace(' years', 'y')
    .replace(' year', 'y')
}

export function formatFullDate(date: string | Date): string {
  return format(new Date(date), 'MMMM d, yyyy')
}

export function formatTimestamp(date: string | Date): string {
  return format(new Date(date), 'h:mm a · MMM d, yyyy')
}