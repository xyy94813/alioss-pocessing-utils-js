/*
 * File Created: Wednesday, 14th November 2018 3:26:13 pm
 * Author: xyy94813 (xyy94813@sina.com)
 * -----
 * Last Modified: Monday, 8th April 2019 3:56:32 pm
 * Modified By: xyy94813 (xyy94813@sina.com>)
 */
import AliOSSImageProcessingUtil, {
  ImageOperation,
  ImageResizeMode,
} from '../AliOSSImageProcessingUtil';

const originUrl = 'https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg';
const util = new AliOSSImageProcessingUtil(originUrl);

describe('AliOSSImageProcessingUtil', () => {
  describe('getAliOSSImageResizeAPI', () => {
    describe('with mode', () => {
      it('mode is fill', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.FILL,
            width: 200,
          })
        ).toMatchSnapshot();
      });
      it('mode is fixed', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.FIXED,
            width: 200,
          })
        ).toMatchSnapshot();
      });
      it('mode is lfit', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.LFIT,
            width: 200,
          })
        ).toMatchSnapshot();
      });
      it('mode is mfit', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.MFIT,
            width: 200,
          })
        ).toMatchSnapshot();
      });
      it('mode is pad', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.PAD,
            width: 200,
          })
        ).toMatchSnapshot();
      });
    });
  });
  describe('getAliOSSImageCircleAPI', () => {
    it('radius is normal', () => {
      expect(
        util.getAliOSSImageCircleAPI({
          radius: 100,
        })
      ).toMatchSnapshot();
    });
  });
  describe('getAliOSSImageCropAPI', () => {
    it('set width and height', () => {
      expect(
        util.getAliOSSImageCropAPI({
          height: 100,
          width: 100,
        })
      ).toMatchSnapshot();
    });
  });
  describe('getAliOSSImageIndexcropAPI', () => {
    it('x is 100 and i is 0', () => {
      expect(
        util.getAliOSSImageIndexcropAPI({
          i: 100,
          x: 100,
        })
      ).toMatchSnapshot();
    });
  });
  describe('getAliOSSImageRoundedCornersAPI', () => {
    it('set radius', () => {
      expect(
        util.getAliOSSImageRoundedCornersAPI({
          radius: 30,
        })
      ).toMatchSnapshot();
    });
  });
  describe('getAliOSSImageAutoOrientAPI', () => {
    it('auto origent', () => {
      expect(
        util.getAliOSSImageAutoOrientAPI({
          autoOrient: true,
        })
      ).toMatchSnapshot();
    });
    it('not auto origent', () => {
      expect(
        util.getAliOSSImageAutoOrientAPI({
          autoOrient: false,
        })
      ).toMatchSnapshot();
    });
  });
  describe('getAliOSSImageRotateAPI', () => {
    it('set rotate', () => {
      expect(
        util.getAliOSSImageRotateAPI({
          rotate: 30,
        })
      ).toMatchSnapshot();
    });
  });
  describe('getAliOSSImageProcessingAPI', () => {
    it('mutiple operation', () => {
      expect(
        util.getAliOSSImageProcessingAPI([
          {
            operation: ImageOperation.RESIZE,
            vals: {
              h: 200,
              w: 200,
            },
          },
          {
            operation: ImageOperation.ROTATE,
            vals: {
              value: 90,
            },
          },
        ])
      ).toMatchSnapshot();
    });
  });
  describe('origin url with query', () => {
    it('without param', () => {
      expect(
        new AliOSSImageProcessingUtil(
          `${originUrl}?`
        ).getAliOSSImageAutoOrientAPI({
          autoOrient: false,
        })
      ).toMatchSnapshot();
    });
    it('with params', () => {
      expect(
        new AliOSSImageProcessingUtil(
          `${originUrl}?param1=1&param2=a`
        ).getAliOSSImageAutoOrientAPI({
          autoOrient: false,
        })
      ).toMatchSnapshot();
      expect(
        new AliOSSImageProcessingUtil(
          `${originUrl}?param1=1&param2=a&`
        ).getAliOSSImageAutoOrientAPI({
          autoOrient: false,
        })
      ).toMatchSnapshot();
    });
  });
});
