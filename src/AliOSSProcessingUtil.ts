/*
 * File Created: Wednesday, 14th November 2018 3:09:23 pm
 * Author: xyy94813 (xyy94813@sina.com)
 * -----
 * Last Modified: Wednesday, 14th November 2018 6:02:13 pm
 * Modified By: xyy94813 (xyy94813@sina.com>)
 */
interface AliOSSProcessingUtil {
  getAliOSSProcessingAPI(process: string, operation: string, vals: any): string;
}

class AliOSSProcessingUtil implements AliOSSProcessingUtil {
  private originUrl: string;

  constructor(originUrl: string) {
    this.originUrl = originUrl;
  }

  getAliOSSProcessingAPI = (process: string, operation: string, vals: any) => {
    const valStr = Object.keys(vals)
      .filter(k => vals[k] !== undefined)
      .map(k => `${k}_${vals[k]}`)
      .join(',');
    return `${this.originUrl}?x-oss-process=${process}/${operation},${valStr}`;
  };
}

export default AliOSSProcessingUtil;
