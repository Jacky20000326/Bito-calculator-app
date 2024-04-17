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
app                                  // 专案程式码放置资料夹
  ├── _component                     
  │   └── Matching                   // 配牌相关组件
  │      └── mahjomg                 // 麻将相关组件
  │         ├── BoardSquare.tsx      // 玩家跟牌池放置外诓
  │         ├── DrapPicture.tsx      // 麻将组件及相关操作逻辑
  │         ├── MahJong.tsx          // 麻将配牌页入口
  │      └── porker                  // 扑克相关组件
  │         ├── Porker.tsx           // 扑克相关页面逻辑(尚未制作)
  │   └── utility                    // 共用组件
  │      ├── Header.tsx              // Header 
  ├── _lib                           // 可复用元件
  │   └── card                       // 牌类
  │       └── mahJong                // 麻将相关
  │          ├── Card.tsx            // 麻将资料
  │          ├── paiCard.tsx         // 配牌逻辑
  │          ├── ReadPaiCard.tsx     // 读取配牌格式逻辑 
  │   └── dnd                       // 專案入口
  │      ├── Card.tsx               // react dnd type definded
  ├── components                  
  │   └── common                     // 專案共享組建
  │      ├── Loading                 // 載入組建
  │      ├── Title                   // 標頭組建
  │   └── currency                   // currency相關頁面元件
  │      ├── CurrencyItem            // currency list 列表元件
  │      ├── SelectCurrenctItem      // current select 列表元件
  ├── matching
  │   ├── page.tsx                   // 配牌路由
  ├── store                          // 资料管理(ZUSTAND)
  │   ├── mahJongStore.ts            // 建立麻将资料(ZUSTAND)
  ├── layout.tsx                     // Next layout
  ├── page.tsx                       // default home page (/)
```

## 技術
1. 使用Zustand 三方资料馆里库避免props drilling
2. 使用 React dnd 实做拖曳
