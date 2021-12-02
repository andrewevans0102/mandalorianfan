/**
 * On the Seasons Page this is an individual Chapter
 */
export interface MandalorianChapter {
  key: string;
  preview: string;
  full: string;
  link: string;
  showFull: boolean;
}

/**
 * On the Seasons Page this is a group of Chapters. This is used in the Redux actions when retrieving the values.
 */
export interface MandalorianChapters {
  chapters: MandalorianChapter[];
  showChapter: any;
}
