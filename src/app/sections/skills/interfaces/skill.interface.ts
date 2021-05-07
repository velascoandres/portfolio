export type SkillType = 'framework' | 'library' | 'language' | 'database' | 'sdk' | 'cloud' | 'tool';

export interface ISkill {
  name: string;
  level: number;
  type: SkillType;
  logo: string;
}
