/**
 * @file 全局配置
 * @author Surmon <https://github.com/surmon-china>
 */

export const APP_TITLE = 'Hooyim';
export const BLOG_HOST = '//www.hooyim.com';
export const BLOG_SITE = 'https:' + BLOG_HOST;
export const STATIC_URL = 'https://static.hooyim.com';
export const GRAVATAR_API = STATIC_URL + '/avatar';
export const ALIYUN_OSS_REGION = 'oss-cn-hangzhou';
export const ALIYUN_OSS_BUCKET = 'hooyim';

export const DEVELOP_API = {
  API_ROOT: '/api',
  STATIC_URL,
};

export const PRODCTION_API = {
  API_ROOT: 'https://api.hooyim.com',
  STATIC_URL
};
