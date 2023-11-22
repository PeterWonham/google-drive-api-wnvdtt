import { GapiSession } from './gapi.session.service';

export function initGapi(gapiSession: GapiSession) {
  return () => gapiSession.initClient();
}
