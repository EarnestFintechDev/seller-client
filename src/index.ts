import axios, { AxiosInstance } from 'axios';

import { EventEmitter } from 'events';
import { ClientConfiguration } from './interface/config.interface';

import { FeedBackTemplate } from './templates/feedback.template';

export class Client extends EventEmitter {
  private readonly apiKey?: string;
  private readonly http: AxiosInstance;
  readonly feedBackTemplates: FeedBackTemplate;

  constructor(apiKey: string, config: ClientConfiguration) {
    super();
    this.apiKey = apiKey;

    this.http = axios.create({
      baseURL: this.buildBackendUrl(config),
      headers: {
        Authorization: `ApiKey ${this.apiKey}`,
      },
    });

   
    this.feedBackTemplates = new FeedBackTemplate(this.http);
  }



  private buildBackendUrl(config: ClientConfiguration) {
   

    if (!config?.backendUrl) {
      return `https://http://localhost:8080/`;
    }

    return config?.backendUrl
      && config?.backendUrl
      
  }
}
