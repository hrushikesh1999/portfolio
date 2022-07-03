import { SkillListSubItem } from "./skill-list-sub-item";

interface ISkillListItem {
  title: string;
  items: SkillListSubItem[];
}

export type SkillListItem = ISkillListItem;
