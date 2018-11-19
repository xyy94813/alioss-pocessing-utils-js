/*
 * File Created: Wednesday, 14th November 2018 3:26:13 pm
 * Author: xyy94813 (xyy94813@sina.com)
 * -----
 * Last Modified: Monday, 19th November 2018 3:23:31 pm
 * Modified By: xyy94813 (xyy94813@sina.com>)
 */
import AliOSSImageProcessingUtil, {
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
          })
        ).toMatchSnapshot();
      });
      it('mode is fixed', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.FIXED,
          })
        ).toMatchSnapshot();
      });
      it('mode is lfit', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.LFIT,
          })
        ).toMatchSnapshot();
      });
      it('mode is mfit', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.MFIT,
          })
        ).toMatchSnapshot();
      });
      it('mode is pad', () => {
        expect(
          util.getAliOSSImageResizeAPI({
            mode: ImageResizeMode.PAD,
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
});
