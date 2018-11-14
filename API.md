# Full API

## AliOSSImageProcessingUtil

`AliOSSImageProcessingUtil` extends `AliOSSImageProcessingUtil`

### getAliOSSImageResizeAPI(options: GetAliOSSImageResizeAPIOptions): string

easy to get image resize API

options:

| Property | Type | Description | Required |
| ----------- | ----------- | ----------- | -------- |
| mode | `ImageResizeMode` | Resize Mode | `false`  |
| width | `number` | Specify the target width. | `false`  |
| height | `number` | Specify the target height | `false`  |
| longSide | `number` | Specify the longer side of the target. | `false`  |
| shorterSide | `number` | Specify the shorter side of the target.  | `false`  |
| limit | `number` | 0/1. The default value is 1 | `false`  |
| color | `string` | When you set the scaling mode as pad (scaling down and filling), you can select the filling color (The default is white). Filling format of parameters: use hexadecimal color codes, for example 00FF00 (green). | `false`  |
| percent | `number` | Percentage. If it is smaller than 100, it means to scale down; if it is bigger than 100, it means to scale up. | `false`  |

`ImageResizeMode` is a enumerate

```ts
enum ImageResizeMode {
  LFIT = 'lfit', // proportional scaling. It refers to the maximum image that is limited in the rectangle of the specified w and h.
  MFIT = 'mfit', // proportional scaling. It refers to the minimum image extending out of the rectangle of the specified w and h.
  FILL = 'fill', // fixed width and height. It refers to the cropped and centered minimum image extending out of the rectangle of the specified w and h.
  PAD = 'pad', // fixed width and height, scaling down and filling.
  FIXED = 'fixed' // fixed width and height, enforced scaling down.
}
```

### getAliOSSImageCircleAPI(options: GetAliOSSImageCircleAPIOptions): string

eszy to get circle image api

`GetAliOSSImageCircleAPIOptions`:

| Property | Type     | Description                              | Required |
| -------- | -------- | ---------------------------------------- | -------- |
| radius   | `number` | Radius of the circular area of the image | `true`   |

### getAliOSSImageCropAPI(options: GetAliOSSImageCropAPIOptions): string

eszy to get crop image api

`GetAliOSSImageCropAPIOptions`:
| Property | Type | Description | Required |
| ------ | ------ | ------ | ------ |
| width | `number` | Width of the cropped area | `true` |
| height | `number` | Height of the cropped area | `true` |
| xAxis | `number` | X-axis of the crop starting point (the origin is | `false` |
| yAxis | `number` | Y-axis of the crop starting point (the origin is located in the upper-left corner by default) | `false` |
| orign | `ImageCropOrigin` | Specify the shorter side of the target. | `false` |

`ImageCropOrigin` is a enumerate 
```ts
enum ImageCropOrigin {
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
```
### getAliOSSImageIndexcropAPI(options: GetAliOSSImageIndexcropAPIOptions): string

easy to get index corop image api

`GetAliOSSImageIndexcropAPIOptions`:

| Property | Type | Description | Required |
| ------ | ------ | ------ | ------ |
| i | `number` | Width of the cropped area | `true` |
| x | `number` | Length of each image partition during horizontal cutting. Either the x or y parameter must be used. | `false` |
| y | `number` | Length of each image partition during vertical cutting. Either the x or y parameter must be used. | `false` |

### getAliOSSImageProcessingAPI(operation: ImageOperation, vals: any): string

other api is base on this api

**operation**

The operations AliOSS supported for image

```ts
enum ImageOperation {
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
```

**vals**

Required parameters for operation

## AliOSSProcessingUtil

### getAliOSSProcessingAPI(process: string, operation: string, vals: any): string

| Property | Type | Description | Required |
| ------ | ------ | ------ | ------ |
| process | `string` | `image` or `video` | `true` |
| operation | `string` | The operations of AliOSS supported | `true` |
| vals | `object` | The values of AliOSS required | `true` |
