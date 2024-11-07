"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[65556],{82759:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"applications/coong_wallet","title":"Coong Wallet","description":"- Team Name: Coong Team","source":"@site/applications/coong_wallet.md","sourceDirName":"applications","slug":"/applications/coong_wallet","permalink":"/applications/coong_wallet","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/coong_wallet.md","tags":[],"version":"current","frontMatter":{}}');var i=s(74848),l=s(28453);const o={},a="Coong Wallet",r={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Design Goals",id:"design-goals",level:4},{value:"Account Creation",id:"account-creation",level:4},{value:"Integration Process into Dapps",id:"integration-process-into-dapps",level:4},{value:"Vision",id:"vision",level:4},{value:"Wireframes",id:"wireframes",level:4},{value:"Technology Stack",id:"technology-stack",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Core features &amp; SDK",id:"milestone-1--core-features--sdk",level:3},{value:"Milestone 2 \u2014 Additional features &amp; demo dapp",id:"milestone-2--additional-features--demo-dapp",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"coong-wallet",children:"Coong Wallet"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Coong Team"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," 0xdF14fb4c2F189402b510C603e7f52bf416Fd477B (USDT)"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"Wallet is a key factor to blockchain technology & cryptocurrencies, it should be secure, easy to use and for mass adoption it should have a frictionless users onboarding experience."}),"\n",(0,i.jsx)(t.p,{children:"Polkadot & Kusama ecosystem has seen a few wallet solutions out there with great UI/UX (SubWallet, Nova, Talisman, Enkrypt). On desktop, most of the solutions are browser extension-based wallets with which users need to install an extension in order to interact with dapps and networks. On mobile, most of the browsers do not support extensions, so users would need to install wallet mobile apps and then interact with dapps via Dapp Browser build inside the wallets (SubWallet, Nova). We believe this creates an inconsistent experience for users on desktop & mobile since most of the dapps are website-based thus posing a barrier in onboarding new users to the ecosystem, especially for those who are new to or less-educated about crypto."}),"\n",(0,i.jsxs)(t.p,{children:["As users, we love the website-based wallet experience that the ",(0,i.jsx)(t.a,{href:"https://wallet.near.org/",children:"NEAR wallet"})," brings to the NEAR ecosystem where users can connect to dapps using their favorite browsers while at the same time can also access their wallet smoothly inside the same browser on both desktop & mobile."]}),"\n",(0,i.jsx)(t.p,{children:"With that inspiration, we propose to build Coong, a website-based multi-chain wallet, to bring a similar experience to Polkadot & Kusama ecosystem which we believe will bring huge benefits to both users & the ecosystem."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(t.h4,{id:"design-goals",children:"Design Goals"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Compatible with ",(0,i.jsx)(t.code,{children:"@polkadot/extension"})," API","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Most of the wallets in the ecosystem are now following ",(0,i.jsx)(t.code,{children:"@poladot/extension"})," API which is widely used now in the ecosystem. So being compatible ",(0,i.jsx)(t.code,{children:"@polkadot/extension"})," API will help dapps can easily integrate with Coong within a few steps."]}),"\n",(0,i.jsxs)(t.li,{children:["The ",(0,i.jsx)(t.code,{children:"@polkadot/extension"})," API allows dapps to call into the wallet to access granted information (connected accounts) as well as asking for permission/approval (request to access accounts, sign transaction, \u2026), dapps can also subscribe to changes happened inside the wallet. Those abilities seems to be impossible with the redirection-based approach that the Near wallet is using."]}),"\n",(0,i.jsxs)(t.li,{children:["The approach that Coong would take is similar to how dapps interact with extension-based wallets which is via ",(0,i.jsx)(t.code,{children:"window.postMessage"})," API.","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"To access granted information or subscribe to changes from the wallet, dapps will send/receive messages via an iframe loading Coong wallet, the iframe will be injected inside dapps via Coong SDK."}),"\n",(0,i.jsxs)(t.li,{children:["To ask for users\u2019 permission/approval, dapps would open a child tab of Coong wallet using ",(0,i.jsx)(t.code,{children:"window.open"})," API, the ",(0,i.jsx)(t.code,{children:"window.open"})," will return a window object of the child tab allowing wallet & dapps to send messages back and forth via ",(0,i.jsx)(t.code,{children:"window.postMessage"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["We have created a PoC to demonstrate how dapps can interact with a website-based wallet to ask for accounts access & sign dummy data. ",(0,i.jsx)(t.a,{href:"https://coong-dapp.netlify.app/",children:"Live demo here"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["Security first","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["We believe a wallet should not only be easy to use but also can keep users\u2019 information safe and secure. Coong is a non-custodial wallet, users\u2019 private keys & seed phrase will be encrypted and stored in ",(0,i.jsx)(t.code,{children:"localStorage"})," of the browsers, and can only be decrypted by users\u2019 wallet password."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"account-creation",children:"Account Creation"}),"\n",(0,i.jsxs)(t.p,{children:["Coong is a hierarchical deterministic (HD) wallet following the idea of ",(0,i.jsx)(t.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",children:"BIP32"}),", which only requires users to back up only one seed phrase upon setting up the wallet, new accounts will be created by deriving from the setup seed and an account index number as the derivation path (",(0,i.jsx)(t.code,{children:"//\\{index}"}),"), ",(0,i.jsx)(t.code,{children:"index"})," number will be started from ",(0,i.jsx)(t.code,{children:"0"})," and increased one by one as new accounts are created. The first account will be created without derivation path, this is to be compatible with the Polkadot{.js} wallet."]}),"\n",(0,i.jsxs)(t.p,{children:["Coong also supports import accounts by private keys, but those accounts cannot be recovered by the setup seed phrase, so they will be labeled as ",(0,i.jsx)(t.code,{children:"Imported Account"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"integration-process-into-dapps",children:"Integration Process into Dapps"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Developers need to install Coong SDK (",(0,i.jsx)(t.code,{children:"@coong/sdk"}),") into the dapps and run Coong wallet initialization upon loading dapps to ",(0,i.jsx)(t.a,{href:"https://github.com/polkadot-js/extension#injection-information",children:"inject the Coong API"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["After the Coong API is injected, dapps can interact with Coong just like they interact with other extension-based wallets. E.g: calling ",(0,i.jsx)(t.code,{children:"window.injectedWeb3['coong'].enable()"})," to request access to the wallet & users\u2019 accounts."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"@coong/sdk"})," will be published on npm registry so developers can easily download & integrate to dapps."]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"vision",children:"Vision"}),"\n",(0,i.jsx)(t.p,{children:"We set a vision for Coong to be an important part of Polkadot/Kusama ecosystem with fully-fledged features like view/send balances, EVM accounts, NFTs, staking, crowdloan, transaction history\u2026 We will split the development of Coong into several phases. This application is asking for a grant to support the first development phase."}),"\n",(0,i.jsxs)(t.p,{children:["The first development phase will be focused on the core/common features of the wallet and the SDK with ",(0,i.jsx)(t.code,{children:"@polkadot/extension"})," compatibility to help dapps easily integrate with Coong."]}),"\n",(0,i.jsx)(t.h4,{id:"wireframes",children:"Wireframes"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"These are simple wireframes serving as guidance for UI development, the final product might look different."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Welcome screen\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208712735-10bc6957-cb69-489c-9bec-c6eaa14e9b39.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Set up new wallet\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208712848-1c64adc4-bdc2-41cd-9b71-e10ec1a5c579.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Unlock Wallet\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208713009-48d617e3-85eb-4c33-a21d-a86f546bd616.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["List accounts\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208713099-5e8a5034-350f-4ae1-8b5e-ab17ee7ad440.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Create account\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208713186-fef5435b-7d49-4786-ba78-69086e3178ad.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Account controls (Forget, Copy address, Show QR Code, Export, Rename, Dapps Access)\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208813964-4a35eecd-7279-47f6-a840-31c3df4982ef.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Sign/Approve Transaction & Message\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208714308-b1b7a9b1-bcb1-4cab-9cf3-07c280e81c71.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Request Wallet Access\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208714373-4c785e2c-b968-46e8-b0c6-69f1321553d1.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Other additional features:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Export wallet\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208714528-e0998bea-eae9-42d7-894a-3ace1a61229d.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Import account\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208714641-569c17a7-ba27-4fcd-9ac7-0f8257401620.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Manage Dapps Access\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208714802-851123d7-4c97-4056-8740-3ab688e6bcee.png",alt:"image"})]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Settings\n",(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/6867026/208714706-581b34c4-b357-4572-ab15-114ea4388882.png",alt:"image"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"React/Redux"}),"\n",(0,i.jsx)(t.li,{children:"Material UI"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsx)(t.p,{children:"Coong is born with the intention to help mitigate the inconsistent wallet experience on desktop & mobile and bring a seamless onboarding new users experience to the Polkadot & Kusama ecosystem."}),"\n",(0,i.jsx)(t.p,{children:"As discussed above, there\u2019re a few wallet solutions out there in the ecosystem that have great UX/UI but most are extension-based wallet, Coong takes a different approach as to be a website-based wallet."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/choko_wallet.md",children:"Choko wallet"})," is also another website-based wallet but there\u2019re a few differences:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Choko wallet took the redirection-based approach like the ",(0,i.jsx)(t.a,{href:"https://wallet.near.org/",children:"NEAR wallet"})," did while Coong uses the ",(0,i.jsx)(t.code,{children:"window.postMessage"})," API for cross-tab & cross-origin communication like how dapps interact with extension-based wallets."]}),"\n",(0,i.jsxs)(t.li,{children:["Coong is compatible with ",(0,i.jsx)(t.code,{children:"@polkadot/extension"})," API which is widely adopted in the ecosystem, so dapps can integrate with Coong just like how they integrate with extension-based wallets."]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Thang X. Vu - Leader / Lead Developer"}),"\n",(0,i.jsx)(t.li,{children:"Tung Vu - Frontend Developer"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Thang X. Vu"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:zthangxv@gmail.com",children:"zthangxv@gmail.com"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsx)(t.p,{children:"None"}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(t.p,{children:["We have more than 7 years of experience in software development for startups & enterprises. Seeing the potential of blockchain technologies, we have spent more than 1 year exposing to blockchains and Polakdot & Kusama ecosystem. We closely worked with SubWallet team in helping to review the source code to ",(0,i.jsx)(t.a,{href:"https://github.com/Koniverse/SubWallet-Extension/issues/232",children:"improve performance & stability of the wallet"}),". Thang is a participant of the first ",(0,i.jsx)(t.a,{href:"https://medium.com/polkadot-network/polkadot-devcamp-1489a1f8eef2",children:"Polkadot DevCamp in May 2022"}),". We as users also experience the UX problems in Polkadot & Kusama ecosystem. With that, we know where and how to solve these paint points to help bring the ecosystem closer to end-users."]}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.p,{children:["Projects repos will be hosted at ",(0,i.jsx)(t.a,{href:"https://github.com/CoongCrafts",children:"https://github.com/CoongCrafts"})]}),"\n",(0,i.jsx)(t.p,{children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Thang X. Vu - ",(0,i.jsx)(t.a,{href:"https://github.com/sinzii",children:"https://github.com/sinzii"})]}),"\n",(0,i.jsxs)(t.li,{children:["Tung Vu - ",(0,i.jsx)(t.a,{href:"https://github.com/1cedrus",children:"https://github.com/1cedrus"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["We\u2019ve been in research the ",(0,i.jsx)(t.code,{children:"@polkadot/extension"})," source code to have a sense of how the wallet is set up & works, and also to better understand the interaction between dapps & extension. Coong will be compatible with ",(0,i.jsx)(t.code,{children:"@polkadot/extension"})," API, so knowing its source code to a certain extent would greatly help the development of Coong."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"We\u2019ve also been working on a PoC to demonstrate the interaction between dapp & wallet."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://coong-dapp.netlify.app/",children:"Live demo"})}),"\n",(0,i.jsxs)(t.li,{children:["Source code: ",(0,i.jsx)(t.a,{href:"https://github.com/sinzii/demo-wallet-interaction/tree/main/dapp",children:"demo-dapp"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/sinzii/demo-wallet-interaction/tree/main/wallet",children:"demo-wallet"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 5 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  1.5 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1--core-features--sdk",children:"Milestone 1 \u2014 Core features & SDK"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2.5 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  1,5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code, a live demo of the wallet and instruction on how to integrate Coong Wallet into dapps using Coong SDK."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Wallet App / Core features"}),(0,i.jsxs)(t.td,{children:["We'll implement the following features for the wallet app:",(0,i.jsx)("br",{}),"- Welcome screen: Shows a small introduction about Coong & instruct users to set up the wallet by creating a new one or import from an existing seed phrase.",(0,i.jsx)("br",{}),"- Unlock wallet: Requires users to enter password to access the wallet",(0,i.jsx)("br",{}),"- Set up new wallet: Guides users through a screen flow to help setting up their wallet from picking up a wallet password, to back up secret recovery phrase (12 words).",(0,i.jsx)("br",{}),"- Create account: Creates a new account",(0,i.jsx)("br",{}),"- List accounts: Lists all of the accounts users have created",(0,i.jsx)("br",{}),"- Request wallet access: Allows users to approve dapps access to the wallet accounts",(0,i.jsx)("br",{}),"- Approve transaction: Allows users to sign/approve a transaction"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Coong SDK"}),(0,i.jsxs)(t.td,{children:["We'll implement the SDK to helps ",(0,i.jsx)(t.a,{href:"#integration-process-into-dapps",children:"integrate Coong into Dapps"})," & publish the package to npm registry."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2--additional-features--demo-dapp",children:"Milestone 2 \u2014 Additional features & demo dapp"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2.5 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  1,5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0a."})}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0b."})}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["We will provide both ",(0,i.jsx)(t.strong,{children:"inline documentation"})," of the code and a live demo which will show how the new functionality works."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0c."})}),(0,i.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:(0,i.jsx)(t.strong,{children:"0d."})}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsx)(t.td,{children:"We will publish an article to introduce Coong Wallet, what has been done so far and plans for future development."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsx)(t.td,{children:"Wallet App / Additional features"}),(0,i.jsxs)(t.td,{children:["We'll implement the following features for the wallet app:",(0,i.jsx)("br",{}),"- Sign message: Allow users to sign a raw message",(0,i.jsx)("br",{}),"- Import existing wallet: Set up wallet by using an existing recovery phrase (seed phrase) or scan QR code from the export wallet feature",(0,i.jsx)("br",{}),"- Forget wallet password / Reset wallet: Allow users to reset the wallet if they forget the password.",(0,i.jsx)("br",{}),"- Account Controls (Forget, Copy address, Show QR Code, Export, Rename, Dapps Access)",(0,i.jsx)("br",{}),"- Export wallet: Allow users to easily transfer seed phrase & created accounts to other devices via QR code",(0,i.jsx)("br",{}),"- Import account from QR Code, Private Key, JSON file",(0,i.jsx)("br",{}),"- Manage Dapps Access: Manage & update access to wallet accounts of dapps",(0,i.jsx)("br",{}),"- Settings: Dark/light theme mode, Language, Auto-lock timer, Reveal recovery phrase, Change wallet password"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsx)(t.td,{children:"Demo Dapp"}),(0,i.jsxs)(t.td,{children:["We'll create a demo dapp that is integrated with Coong wallet to demonstrate dapp-wallet interactions, similar to ",(0,i.jsx)(t.a,{href:"https://connect.subwallet.app/",children:"connect.subwallet.app"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"As mentioned, future plans for Coong wallet are to equip with more features that help users manage assets easier:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"View/send balances, EVM accounts, NFTs, staking, crowdloan, transaction history"}),"\n",(0,i.jsx)(t.li,{children:"Attach QR Signer, Support hardware wallets"}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})}),"\n",(0,i.jsx)(t.p,{children:"Web3 Foundation Website & Medium"})]})}function h(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(96540);const i={},l=n.createContext(i);function o(e){const t=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);