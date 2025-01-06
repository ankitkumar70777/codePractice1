export const header = {};
export const api = {
  usMarkets: {},
  commonStore: 'https://www.moneycontrol.com/commonstore/commonfiles',
  headerSearch: 'https://www.moneycontrol.com/mccode/common',
  moneyControlWidget: 'https://www.moneycontrol.com/techmvc/mc_widgets',
};
export const domain = {};
export const SCRIPT_DELAY = 5000;

export const MARKET_TIME_OPEN = { hour: 9, minute: 15, second: 0 };
export const MARKET_TIME_CLOSE = { hour: 15, minute: 30, second: 0 };
let apiDomainUrl = '';
api.portfolioScoreBaseURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}`;
export let stableApiVersion = undefined;
export const assetPath = {
  imageServerURL: 'https://stat1.moneycontrol.com/pro-technical-picks/media',
  imageServerUrlTechPick: 'https://www.moneycontrol.com/media',
  imgUrl: 'https://images.moneycontrol.com/pro-technical-picks/media',
  imagePathNew: 'https://stgimages.moneycontrol.com/static-tcpcms',
};

if (process.env.NEXT_PUBLIC_NW18ENV == 'production' || process.env.NEXT_PUBLIC_NW18ENV == 'PRODUCTION') {
  apiDomainUrl = 'https://api.moneycontrol.com/mcapi/portfolio-score/v1/';
  api.env = 'production';
  stableApiVersion = 151;
  domain.accounts = 'https://accounts.moneycontrol.com/mclogin';
  domain.iFrameDomain = 'https://accounts.moneycontrol.com/mclogin?v=2&redirect=react';
  domain.iFrameDomainSignUp = 'https://accounts.moneycontrol.com/mclogin?v=2&formname=register&redirect=react';
  domain.changepassword = 'https://accounts.moneycontrol.com/password/change';
  assetPath['imageServerURL'] = 'https://stat1.moneycontrol.com/pro-technical-picks/media';
  assetPath['imgUrl'] = 'https://images.moneycontrol.com/pro-technical-picks/media';
  assetPath['imageServerUrlTechPick'] = 'https://www.moneycontrol.com/media';
  assetPath['imagePathNew'] = 'https://images.moneycontrol.com/technical_picks_cms';
  api.commonStore = 'https://www.moneycontrol.com/commonstore/commonfiles';
  api.headerSearch = 'https://www.moneycontrol.com/mccode/common';
  api.moneyControlWidget = 'https://www.moneycontrol.com/techmvc/mc_widgets';
  domain.moneyControl = 'https://www.moneycontrol.com/';
  domain.moneyControlDomain = 'https://www.moneycontrol.com';
  domain.moneyControlDomainV4 = 'https://www.moneycontrol.com/';
} else if (process.env.NEXT_PUBLIC_NW18ENV === 'STAGING' || process.env.NEXT_PUBLIC_NW18ENV === 'staging') {
  apiDomainUrl = 'https://stgapi.moneycontrol.com/mcapi/portfolio-score/v1/';
  api.env = 'staging';
  stableApiVersion = 151;
  domain.accounts = 'https://stgaccounts.moneycontrol.com/mclogin';
  domain.iFrameDomain = 'https://stgaccounts.moneycontrol.com/mclogin?v=2&redirect=react';
  domain.iFrameDomainSignUp = 'https://stgaccounts.moneycontrol.com/mclogin?v=2&formname=register&redirect=react';
  domain.changepassword = 'https://stgaccounts.moneycontrol.com/password/change';
  assetPath['imageServerURL'] = 'https://stat1.moneycontrol.com/pro-technical-picks/media';
  assetPath['imageServerUrlTechPick'] = 'https://stgwww.moneycontrol.com/media';
  assetPath['imgUrl'] = 'https://images.moneycontrol.com/pro-technical-picks/media';
  assetPath['imagePathNew'] = 'https://stgimages.moneycontrol.com/static-tcpcms';
  api.commonStore = 'https://www.moneycontrol.com/commonstore/commonfiles';
  api.headerSearch = 'https://stgwww.moneycontrol.com/mccode/common';
  api.moneyControlWidget = 'https://www.moneycontrol.com/techmvc/mc_widgets';
  domain.moneyControl = 'https://stgwww.moneycontrol.com/';
  domain.moneyControlDomain = 'https://stgwww.moneycontrol.com';
  domain.moneyControlDomainV4 = 'https://stgportv4.moneycontrol.com/';
} else {
  stableApiVersion = 151;
  domain.accounts = 'https://stgaccounts.moneycontrol.com/mclogin';
  domain.iFrameDomain = 'https://stgaccounts.moneycontrol.com/mclogin?v=2&redirect=react';
  domain.iFrameDomainSignUp = 'https://stgaccounts.moneycontrol.com/mclogin?v=2&formname=register&redirect=react';
  domain.changepassword = 'https://stgaccounts.moneycontrol.com/password/change';
  assetPath['imageServerURL'] = 'http://localhost:5005/media';
  assetPath['imageServerUrlTechPick'] = 'http://localhost:5005/media';
  assetPath['imgUrl'] = 'https://images.moneycontrol.com/pro-technical-picks/media';
  assetPath['imagePathNew'] = 'https://stgimages.moneycontrol.com/static-tcpcms';
  api.commonStore = 'https://www.moneycontrol.com/commonstore/commonfiles';
  api.headerSearch = 'https://www.moneycontrol.com/mccode/common';
  api.moneyControlWidget = 'https://www.moneycontrol.com/techmvc/mc_widgets';
  domain.moneyControl = 'https://www.moneycontrol.com/';
  domain.moneyControlDomain = 'https://www.moneycontrol.com';
  domain.moneyControlDomainV4 = 'https://stgportv4.moneycontrol.com/';
}
