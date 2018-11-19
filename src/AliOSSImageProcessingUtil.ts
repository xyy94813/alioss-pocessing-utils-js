/*
 * File Created: Wednesday, 14th November 2018 3:15:26 pm
 * Author: xyy94813 (xyy94813@sina.com)
 * -----
 * Last Modified: Monday, 19th November 2018 6:37:47 pm
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
  ROTATE = 'rotate',
  BLUR = 'blur',
  BRIGHT = 'bright',
  CONTRAST = 'contrast',
  SHARPEN = 'sharpen',
  FORMAT = 'format ',
  INTERLACE = 'interlace',
  QUALITY = 'quality',
  WATERMARK = 'watermark',
  AVERAGE_HUE = 'average-hue',
  INFO = 'info',
}

export enum ImageResizeMode {
  LFIT = 'lfit', // proportional scaling. It refers to the maximum image that is limited in the rectangle of the specified w and h.
  MFIT = 'mfit', // proportional scaling. It refers to the minimum image extending out of the rectangle of the specified w and h.
  FILL = 'fill', // fixed width and height. It refers to the cropped and centered minimum image extending out of the rectangle of the specified w and h.
  PAD = 'pad', // fixed width and height, scaling down and filling.
  FIXED = 'fixed', // fixed width and height, enforced scaling down.
}

export interface IGetAliOSSImageResizeAPIOptions {
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

export interface IGetAliOSSImageCircleAPIOptions {
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
  SE = 'se',
}

export interface IGetAliOSSImageCropAPIOptions {
  width: number; // Width of the cropped area
  height: number; // Height of the cropped area
  xAxis?: number; // 	X-axis of the crop starting point (the origin is located in the upper-left corner by default)
  yAxis?: number;
  orign?: ImageCropOrigin;
}

export interface IGetAliOSSImageIndexcropAPIOptions {
  i: number;
  x?: number; // Length of each image partition during horizontal cutting. Either the x or y parameter must be used.
  y?: number; // Length of each image partition during vertical cutting. Either the x or y parameter must be used.
}

export interface IGetAliOSSImageRoundedCornersAPIOptions {
  radius: number; // Radius of the circular area of the image
}

export interface IGetAliOSSImageAutoOrientAPIOptions {
  autoOrient: boolean;
}

export interface IGetAliOSSImageRotateAPIOptions {
  rotate: number;
}

interface IAliOSSImageProcessingUtil {
  getAliOSSImageProcessingAPI(operation: ImageOperation, vals: any): string;
  getAliOSSImageResizeAPI(options: IGetAliOSSImageResizeAPIOptions): string;
  getAliOSSImageCircleAPI(options: IGetAliOSSImageCircleAPIOptions): string;
  getAliOSSImageCropAPI(options: IGetAliOSSImageCropAPIOptions): string;
  getAliOSSImageIndexcropAPI(
    options: IGetAliOSSImageIndexcropAPIOptions
  ): string;
  getAliOSSImageRoundedCornersAPI(
    options: IGetAliOSSImageRoundedCornersAPIOptions
  ): string;
  getAliOSSImageAutoOrientAPI(
    options: IGetAliOSSImageAutoOrientAPIOptions
  ): string;
  getAliOSSImageRotateAPI(options: IGetAliOSSImageRotateAPIOptions): string;
}

class AliOSSImageProcessingUtil extends AliOSSProcessingUtil
  implements IAliOSSImageProcessingUtil {
  public getAliOSSImageProcessingAPI = (
    operation: ImageOperation,
    vals: any
  ) => {
    return this.getAliOSSProcessingAPI('image', operation, vals);
  };
  public getAliOSSImageResizeAPI = (
    options: IGetAliOSSImageResizeAPIOptions
  ) => {
    const {
      mode,
      width,
      height,
      longSide,
      shorterSide,
      limit,
      percent,
    } = options;
    return this.getAliOSSImageProcessingAPI(ImageOperation.RESIZE, {
      h: height,
      l: longSide,
      limit,
      m: mode,
      percent,
      s: shorterSide,
      w: width,
    });
  };
  public getAliOSSImageCircleAPI = (
    options: IGetAliOSSImageCircleAPIOptions
  ) => {
    return this.getAliOSSImageProcessingAPI(ImageOperation.CIRCLE, {
      r: options.radius,
    });
  };
  public getAliOSSImageCropAPI = (options: IGetAliOSSImageCropAPIOptions) => {
    const { width, height, xAxis, yAxis, orign } = options;
    return this.getAliOSSImageProcessingAPI(ImageOperation.CROP, {
      g: orign,
      h: height,
      w: width,
      x: xAxis,
      y: yAxis,
    });
  };
  public getAliOSSImageIndexcropAPI = (
    options: IGetAliOSSImageIndexcropAPIOptions
  ) => {
    return this.getAliOSSImageProcessingAPI(ImageOperation.INDEXCROP, options);
  };

  public getAliOSSImageRoundedCornersAPI = (
    options: IGetAliOSSImageRoundedCornersAPIOptions
  ) => {
    return this.getAliOSSImageProcessingAPI(ImageOperation.ROUNDED_CORNERS, {
      r: options.radius,
    });
  };
  public getAliOSSImageAutoOrientAPI = (
    options: IGetAliOSSImageAutoOrientAPIOptions
  ) => {
    return this.getAliOSSImageProcessingAPI(ImageOperation.AUTO_ORIENT, {
      value: options.autoOrient ? 1 : 0,
    });
  };
  public getAliOSSImageRotateAPI = (
    options: IGetAliOSSImageRotateAPIOptions
  ) => {
    return this.getAliOSSImageProcessingAPI(ImageOperation.ROTATE, {
      value: options.rotate,
    });
  };
}

export default AliOSSImageProcessingUtil;
