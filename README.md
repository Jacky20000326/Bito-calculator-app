## 專案連接

### [連接](https://bito-calculator-app-k8rk.vercel.app/)

## 專案截圖

![Xnip2024-03-31_23-56-21](https://github.com/Jacky20000326/Bito-calculator-app/assets/80142839/aa007ea5-9048-4f1b-ad2e-932edaa9e04d)


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
│   └── currencyApi.ts             // 提供currency api接口,並建立fetch request提供¸提供串接使用
├── app
│   ├── layout                     // 專案內全局的佈局
│   ├── page                       // 專案入口
├── components                  
│   └── common                     // 專案共享組建
│      ├── Loading                 // 載入組建
│      ├── Title                   // 標頭組建
│   └── currency                   // currency相關頁面元件
│      ├── CurrencyItem            // currency list 列表元件
│      ├── SelectCurrenctItem      // current select 列表元件
├── defines
│   ├── currencyApiType.d.ts       // currency api 型別定義檔案
│   └── currencyDefines.ts         // currency相關初始配置及ENUM放置處
│   └── pageDefines.ts             // 頁面名稱配置
├── libs                           // libery 配置資料夾
│   └── react-query-lib            // react-query libery 相關函式使用
│      ├── GetQueryClient.ts       // 建立new QueryClient實體且為singal(無使用)
│      ├── HydrateProvider.ts      // 建立dehydrate Provider提供使用ssr資料元件使用
│      ├── QueryProvider.ts        // 建立初始new QueryClient Provider
├── styles                        
│   ├── global.sass                // 全局樣式配置
└── utils                          // 可複用函數
│   ├── rateExchange.ts            // currency匯率轉換函式   
│   ├── thousandsSeparator.ts      // 千分位切割及精度位數換算函式
└── store                          // context api資料存儲位置
│   ├──currencyContextStore.ts     // currency provider 資料存儲管理

```

## 技術點

1. 使用context api 進行資料管理避免產生prop drilling問題提升了官案的可讀性。
2. 使用Server-Side-Render 方式來獲取資料頁面,並搭配prefetchQuery及hydrate渲染至client。
