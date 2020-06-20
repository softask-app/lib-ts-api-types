import { UserMeta } from "./user";
import { TaskMeta } from "./task";

export interface StepCreateRequest {
  description: string;
  position: number;
}

export interface StepDetails {
  id: number;
  task: TaskMeta;
  description: string;
  position: number;
  creator: UserMeta;
  created: Date;
  updated: Date;
  deleted?: Date;
}

export interface StepList extends Array<StepMeta> {
}

export interface StepMeta {
  id: number
  taskId: number;
  description: string;
  position: number;
}