/*
 * File Created: Wednesday, 14th November 2018 3:15:26 pm
 * Author: xyy94813 (xyy94813@sina.com)
 * -----
 * Last Modified: Wednesday, 14th November 2018 5:49:44 pm
 * Modified By: xyy94813 (xyy94813@sina.com>)
 */
import AliOSSProcessingUtil from './AliOSSProcessingUtil';

export enum ImageOperation {
  RESIZE = 'resize',
  CIRCLE = 'circle',
  CROP = 'crop',
  INDEXCROP = 'indexcrop',
  ROUNDED_CORNERS = 'rounded-corners',
  AUTO_ORIENT = 'auto-orient',
  RATATE = 'rotate',
  BLUR = 'blur',
  BRIGHT = 'bright',
  CONTRAST = 'contrast',
  SHARPEN = 'sharpen',
  FORMAT = 'format ',
  INTERLACE = 'interlace',
  QUALITY = 'quality',
  WATERMARK = 'watermark',
  AVERAGE_HUE = 'average-hue',
  INFO = 'info'
}

export enum ImageResizeMode {
  LFIT = 'lfit', // proportional scaling. It refers to the maximum image that is limited in the rectangle of the specified w and h.
  MFIT = 'mfit', // proportional scaling. It refers to the minimum image extending out of the rectangle of the specified w and h.
  FILL = 'fill', // fixed width and height. It refers to the cropped and centered minimum image extending out of the rectangle of the specified w and h.
  PAD = 'pad', // fixed width and height, scaling down and filling.
  FIXED = 'fixed' // fixed width and height, enforced scaling down.
}

interface GetAliOSSImageResizeAPIOptions {
  mode?: ImageResizeMode; // one of lfit、mfit、fill、pad、fixed
  width?: number; // Specify the target width.
  height?: number; // Specify the target height.
  longSide?: number; // Specify the longer side of the target.
  shorterSide?: number; // Specify the shorter side of the target.
  limit?: number; // 0/1. The default value is 1
  color?: string; // When you set the scaling mode as pad (scaling down and filling), you can select the filling color (The default is white).
  // Filling format of parameters: use hexadecimal color codes, for example 00FF00 (green).
  percent?: number; // Percentage. If it is smaller than 100, it means to scale down; if it is bigger than 100, it means to scale up.
}

interface GetAliOSSImageCircleAPIOptions {
  radius: number; // Radius of the circular area of the image
}

export enum ImageCropOrigin {
  NW = 'nw',
  NORTH = 'north',
  NE = 'ne',
  WEST = 'west',
  CENTER = 'center',
  EAST = 'east',
  SW = 'sw',
  SOUTH = 'south',
  SE = 'se'
}

interface GetAliOSSImageCropAPIOptions {
  width: number; // Width of the cropped area
  height: number; // Height of the cropped area
  xAxis?: number; // 	X-axis of the crop starting point (the origin is located in the upper-left corner by default)
  yAxis?: number;
  orign?: ImageCropOrigin;
}

interface GetAliOSSImageIndexcropAPIOptions {
  i: number;
  x?: number; // Length of each image partition during horizontal cutting. Either the x or y parameter must be used.
  y?: number; // Length of each image partition during vertical cutting. Either the x or y parameter must be used.
}

interface AliOSSImageProcessingUtilInterface {
  getAliOSSImageProcessingAPI(operation: ImageOperation, vals: any): string;
  getAliOSSImageResizeAPI(options: GetAliOSSImageResizeAPIOptions): string;
  getAliOSSImageCircleAPI(options: GetAliOSSImageCircleAPIOptions): string;
  getAliOSSImageCropAPI(options: GetAliOSSImageCropAPIOptions): string;
  getAliOSSImageIndexcropAPI(
    options: GetAliOSSImageIndexcropAPIOptions
  ): string;
}

class AliOSSImageProcessingUtil extends AliOSSProcessingUtil
  implements AliOSSImageProcessingUtilInterface {
  getAliOSSImageProcessingAPI = (operation: ImageOperation, vals: any) => {
    return this.getAliOSSProcessingAPI('image', operation, vals);
  };
  getAliOSSImageResizeAPI = (options: GetAliOSSImageResizeAPIOptions) => {
    const {
      mode,
      width,
      height,
      longSide,
      shorterSide,
      limit,
      percent
    } = options;
    return this.getAliOSSImageProcessingAPI(ImageOperation.RESIZE, {
      m: mode,
      w: width,
      h: height,
      l: longSide,
      s: shorterSide,
      limit,
      percent
    });
  };
  getAliOSSImageCircleAPI = (options: GetAliOSSImageCircleAPIOptions) => {
    return this.getAliOSSImageProcessingAPI(ImageOperation.CIRCLE, {
      r: options.radius
    });
  };
  getAliOSSImageCropAPI = (options: GetAliOSSImageCropAPIOptions) => {
    const { width, height, xAxis, yAxis, orign } = options;
    return this.getAliOSSImageProcessingAPI(ImageOperation.CROP, {
      w: width,
      h: height,
      x: xAxis,
      y: yAxis,
      g: orign
    });
  };
  getAliOSSImageIndexcropAPI = (options: GetAliOSSImageIndexcropAPIOptions) => {
    return this.getAliOSSImageProcessingAPI(ImageOperation.INDEXCROP, options);
  };
}

export default AliOSSImageProcessingUtil;
