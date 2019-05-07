/*
 * File Created: Wednesday, 14th November 2018 3:09:23 pm
 * Author: xyy94813 (xyy94813@sina.com)
 * -----
 * Last Modified: Tuesday, 7th May 2019 3:59:56 pm
 * Modified By: xyy94813 (xyy94813@sina.com>)
 */
import { URL } from 'url';

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
  private originUrl: URL;

  constructor(originUrl: string) {
    this.originUrl = new URL(originUrl);
  }

  public getAliOSSProcessingAPI = (
    process: string,
    operationOptions: IOperationOption[]
  ) => {
    const operationStrs = operationOptions
      .map(this.getOperationSpliceStr)
      .join('');

    const newUrl = new URL(this.originUrl.toString());
    newUrl.searchParams.set('x-oss-process', `${process}${operationStrs}`)
    return newUrl.toString();
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
