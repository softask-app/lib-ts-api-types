export interface AutoAuthRequest {
  userId: number;
  deviceId: string;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface PasswordResetRequest {
  userId: number;
  token: string;
  password: string;
}

export interface RequestPasswordResetRequest {
  email: string
}