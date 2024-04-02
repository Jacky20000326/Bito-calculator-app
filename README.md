This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 專案連接

### [連接]([https://bito-calculator-app-k8rk.vercel.app/](https://bito-calculator-app-k8rk-git-dev-jacky20000326s-projects.vercel.app/)

## 專案截圖

![Xnip2024-03-31_23-56-21](https://github.com/Jacky20000326/Bito-calculator-app/assets/80142839/f2b5800a-f355-4d28-9f3c-3f4febeda3bc)

## 本地執行

```
npm install

npm run dev

```

## 環境建置

1. 使用React 18 + Nextjs 14 + typescript 為前端環環境建置
2. 使用React-query 及搭配axios 進行api串接處理
3. 使用context api 作為資料管理工具

## 專案架構

```
├── apis
│   ├── HttpCommon.ts              // 建立axios實體並提供客製化配置
│   └── currencyApi.ts             // 提供currency api接口,並建立request提供¸串接使用
├── app
│   ├── layout                     // 專案內全局的佈局
│   ├── page                       // 專案入口
├── components                  
│   └── common                     // 專案共享組建
│      ├── Loading                 // 載入組建
│      ├── Title                   // 標頭組建
│   └── currency                   // currency相關頁面元件
│      ├── Conversion              // currency 價格匯率轉換頁
│      ├── RateTable               // 所有currency台幣價格／名稱展示頁
│      ├── SelectCurrencyCategory  // 選取欲轉換currency頁面
├── defines
│   ├── currencyApiType.d.ts       // currency api 型別定義檔案
│   └── currencyDefines.ts         // currency相關初始配置及ENUM放置處
│   └── currencyDefines.ts         // 頁面名稱配置
├── libs                           // libery 配置資料夾
│   ├── QueryProvider.ts           // react-query 套件初始配置
├── styles                        
│   ├── global.sass                // 全局樣式配置
└── utils                          // 可複用函數
│   ├── rateExchange.ts            // currency匯率轉換函式   
│   ├── thousandsSeparator.ts      // 千分位切割及精度位數換算函式
└── store                          // context api資料存儲位置
│   ├──currencyContextStore.ts     // currency provider 資料存儲管理
├

```
