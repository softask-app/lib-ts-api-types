import { StepList } from "./step";
import { UserList, UserMeta } from "./user";

export interface TaskCreateRequest {
  name: string;
  description?: string;
}

export interface TaskDetails extends TaskMeta {
  description: string;
  creator: UserMeta;
  assignees: UserList;
  steps: StepList;
  created: Date;
  updated: Date;
  deleted?: Date;
}

export interface TaskMeta {
  id: number;
  name: string;
}

export interface TaskList extends Array<TaskMeta> {
}