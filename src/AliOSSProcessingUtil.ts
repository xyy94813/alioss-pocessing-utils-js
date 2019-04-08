/*
 * File Created: Wednesday, 14th November 2018 3:09:23 pm
 * Author: xyy94813 (xyy94813@sina.com)
 * -----
 * Last Modified: Monday, 8th April 2019 3:48:31 pm
 * Modified By: xyy94813 (xyy94813@sina.com>)
 */
import * as querystring from 'querystring';

export interface IAliOSSProcessingUtil {
  getAliOSSProcessingAPI(
    process: string,
    operationOptions: IOperationOption[]
  ): string;
}

export interface IOperationOption {
  operation: string;
  vals: any;
}

class AliOSSProcessingUtil implements IAliOSSProcessingUtil {
  private originUrl: string;

  constructor(originUrl: string) {
    this.originUrl = originUrl;
  }

  public getAliOSSProcessingAPI = (
    process: string,
    operationOptions: IOperationOption[]
  ) => {
    const operationStrs = operationOptions
      .map(this.getOperationSpliceStr)
      .join('');

    const [path, query] = this.originUrl.split('?');
    const newQuery = query ? querystring.parse(query) : Object.create(null);
    newQuery['x-oss-process'] = `${process}${operationStrs}`;
    return `${path}?${querystring.stringify(newQuery)}`;
  };

  private getOperationSpliceStr = (options: IOperationOption) => {
    const { operation, vals } = options;
    const valStrs = Object.keys(vals)
      .filter(k => vals[k] !== undefined)
      .map(k => (k === 'value' ? vals[k] : `${k}_${vals[k]}`));
    valStrs.unshift(`/${operation}`);
    return valStrs.join(',');
  };
}

export default AliOSSProcessingUtil;
