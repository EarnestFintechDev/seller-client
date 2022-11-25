import { AxiosInstance } from 'axios';
export class ClientHttp {
  protected readonly http: AxiosInstance;

  constructor(http: AxiosInstance) {
    this.http = http;
  }
}