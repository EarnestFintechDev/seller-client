import { Client } from '../index';
const mockConfig = {
    apiKey: '1234',
  };
export var client = new Client(mockConfig.apiKey,{"backendUrl":"http://localhost:8080"});
export var client1 = new Client(mockConfig.apiKey,{});
