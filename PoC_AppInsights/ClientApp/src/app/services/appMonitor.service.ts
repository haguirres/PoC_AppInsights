import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AppInsights } from 'applicationinsights-js';

@Injectable()
export class AppMonitorService {
  private config: Microsoft.ApplicationInsights.IConfig =
    {
      instrumentationKey: environment.appInsights.instrumentationKey
    }

  constructor() {
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(this.config);
    }
  }

  EnabledStudy(): boolean {
    return environment.enableStudy;
  }

  LogEvent(name: string, properties?: any, measurements?: any) {
    AppInsights.trackEvent(name, properties, measurements);
  }

  LogPageView(name?: string, url?: string, properties?: any,
    measurements?: any, duration?: number) {
    AppInsights.trackPageView(name, url, properties, measurements, duration);
  }
}
