export type PostStatus = 'published' | 'planned' | 'not-planned';

export interface DayConfig {
  day: number | string;
  label: string;
  status: PostStatus;
}

export const journalConfig: DayConfig[] = [
  { day: 'prelude', label: 'Prelude: Returning', status: 'published' },
  { day: 'goodbye-sg', label: 'Goodbye Singapore', status: 'published' },
  { day: 1, label: 'Day 1', status: 'planned' },
  { day: 2, label: 'Day 2', status: 'planned' },
  { day: 3, label: 'Day 3', status: 'planned' },
  { day: 4, label: 'Day 4', status: 'planned' },
  { day: 5, label: 'Day 5', status: 'planned' },
  { day: 6, label: 'Day 6', status: 'planned' },
  { day: 7, label: 'Day 7', status: 'planned' },
  { day: 8, label: 'Day 8', status: 'planned' },
  { day: 9, label: 'Day 9', status: 'planned' },
  { day: 10, label: 'Day 10', status: 'planned' },
  { day: 'goodbye-india', label: 'Goodbye India', status: 'planned' }
];

export const getDayStatus = (day: number | string): PostStatus => {
  const config = journalConfig.find(d => d.day === day);
  return config?.status || 'not-planned';
};

export const isPublished = (day: number | string): boolean => {
  return getDayStatus(day) === 'published';
};

export const getPublishedDays = (): (number | string)[] => {
  return journalConfig.filter(d => d.status === 'published').map(d => d.day);
};
