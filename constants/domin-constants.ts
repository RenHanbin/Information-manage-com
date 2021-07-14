import { ENVIRONMENT } from './app-constants';
import { SAP_CONTROL } from '../config/app-config';

/** 域名 */
const _DOMAIN = {
  [ENVIRONMENT.DEV]: 'http://localhost:7001',
  [ENVIRONMENT.TEST]: 'http://localhost:4000',
  [ENVIRONMENT.PRO]: 'http://39.97.175.30:4000',
};

export const DOMAIN = _DOMAIN[SAP_CONTROL];

// 模块
export const PART = {
  OPT_SYS: '/sys',
  OPT_USER: '/user',
  OPT_AUTHORTION: '/authortion', // 用户登录
  OPT_STATISTIC: '/statistic',
  OPT_DESCRIPTION: '/description',
  OPT_CHART: '/chart',
};

// 返回码
export const RESPONSE_CODE = {
  success: 200,
  created: 201,
  noContent: 204,
  error: 400,
  unauthorized: 401,
  unFind: 404,
  serviceError: 500,
};
