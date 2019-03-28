/*
 * File Created: Wednesday, 14th November 2018 3:09:23 pm
 * Author: xyy94813 (xyy94813@sina.com)
 * -----
 * Last Modified: Thursday, 28th March 2019 5:09:38 pm
 * Modified By: xyy94813 (xyy94813@sina.com>)
 */
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

    const connectChar = /(\?).*?$/.test(this.originUrl)
      ? this.originUrl.endsWith('&') || this.originUrl.endsWith('?')
        ? ''
        : '&'
      : '?';

    return `${
      this.originUrl
    }${connectChar}x-oss-process=${process}${operationStrs}`;
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
