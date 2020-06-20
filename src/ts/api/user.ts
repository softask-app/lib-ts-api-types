export interface UserCreateRequest {
  email: string;
  displayName: string;
  password: string;
}

export interface UserDetails {
  email: string;
  providers?: UserList;
  supports?: UserList;
  created: Date;
}

export interface UserMeta {
  id: number;
  displayName: string;
}

export interface UserList extends Array<UserMeta> {
}