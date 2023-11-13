export interface AddressApiParams {
  language: string;
  outputFormat: string;
  type_sf: string;
  name_sf: string;
}

export interface AddressApiResponse {
  version: string;
  systemMessages: SystemMessage[];
  locations: Location[];
}

export interface SystemMessage {
  type: string;
  module: string;
  code: number;
  text: string;
}

export interface Location {
  id: string;
  isGlobalId?: boolean;
  name: string;
  disassembledName: string;
  coord: number[];
  type: string;
  matchQuality: number;
  isBest: boolean;
  productClasses?: number[];
  parent: Parent;
  properties?: Properties;
}

export interface Parent {
  id: string;
  name: string;
  type: string;
}

export interface Properties {
  stopId: string;
}
