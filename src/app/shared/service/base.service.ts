/**
 * Base Service
 * @author PhuongDP
 */
import {environment} from '../../../environments/environment';

export class BaseService {

  protected apiUrl: string = environment.apiUrl;

  constructor() {
  }
}
