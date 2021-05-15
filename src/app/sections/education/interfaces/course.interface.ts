export type CoursePlatform = 'udemy' | 'coursera';

export interface ICourse {
  credentialId: string;
  title: string;
  expeditionDate: string;
  platform: CoursePlatform;
}
