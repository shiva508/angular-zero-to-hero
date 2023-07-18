import { Observable } from 'rxjs';

export interface CanComponentDeactivateService {
  canDeativate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanComponentDeactivateService {
  canDeativate: () => Observable<boolean> | Promise<boolean> | boolean;
}
