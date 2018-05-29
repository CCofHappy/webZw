//配置常量
const mallApi = process.env.MALL_API;
const commonApi = process.env.COMMON_API;
const dataApi = process.env.DATA_API;
const wapApi = process.env.WAP_API;    //接口前缀
const aliPayPath = '/alipay/';//支付宝api地址
const bankPayPath = '/unionpay/';//网银api地址
const wechatPath = '/weixin/';//网银api地址
const videoPath = 'http://video.cwhisky.com/video/'; 
// exports.imgPath = 'http://img.cwhisky.com/';//图片服务器地址
const imgPath = '';//图片服务器地址
const iMaxFilesize = 4194304 ; //默认5M 上传文件大小 1M=1048576 5M=5242880
const appId = 'wx7d2e2141cdf182bb';//微信公众号 appid 微信支付 网页授权
export default {
  mallApi,
  commonApi,
  dataApi,
  wapApi,
  aliPayPath,
  bankPayPath,
  wechatPath,
  videoPath,
  imgPath,
  iMaxFilesize,
  appId,
};