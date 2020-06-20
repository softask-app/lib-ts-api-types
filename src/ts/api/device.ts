export interface DeviceDetails {
  id: number;
  deviceId: string;
  deviceName: string;
  displayName?: string;
  lastLogin: Date;
  trusted?: DeviceTrust;
}

export interface DeviceTrust {
  since: Date;
}

export interface DeviceList extends Array<DeviceDetails> {}

export interface DeviceTrustResponse {
  token: string;
}



