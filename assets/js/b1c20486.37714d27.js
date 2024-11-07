"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[28301],{87034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"applications/multisignature_management_tool","title":"multisignature_management_tool","description":"Multi-signatureManagementTool","source":"@site/applications/multisignature_management_tool.md","sourceDirName":"applications","slug":"/applications/multisignature_management_tool","permalink":"/applications/multisignature_management_tool","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/multisignature_management_tool.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),a=t(28453);const r={},l=void 0,o={},c=[{value:"Multi-signature_Management_Tool",id:"multi-signature_management_tool",level:2},{value:"Project Description",id:"project-description",level:2},{value:"Objectives",id:"objectives",level:2},{value:"Team members",id:"team-members",level:2},{value:"Legal Structure",id:"legal-structure",level:2},{value:"Team Website",id:"team-website",level:2},{value:"Team&#39;s experience",id:"teams-experience",level:2},{value:"Team Code Repos",id:"team-code-repos",level:2},{value:"Development Roadmap",id:"development-roadmap",level:2},{value:"Basic function: generate Multisig account and send Extrinsic",id:"basic-function-generate-multisig-account-and-send-extrinsic",level:3},{value:"Advanced function: more features for multisig wallet and support more network",id:"advanced-function-more-features-for-multisig-wallet-and-support-more-network",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"multi-signature_management_tool",children:"Multi-signature_Management_Tool"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Proposer:"})," ",(0,s.jsx)(n.a,{href:"https://github.com/carlhong",children:"Hong Tao"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," 3P1DGw78xgkQ2pTPT1hcwmzozY1T93gmTB"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"project-description",children:"Project Description"}),"\n",(0,s.jsx)(n.p,{children:"When we developed and used the multi-signature feature, we found that there is no multisignature wallet tool that can be used conveniently. The current wallet project is mainly designed for different usage environments, such as mobile wallet app, web wallet, chrome extension, etc. The development of these wallets (except the polkadot.js app) is at an early stage, and lack of multi-signature module . Polkadot.js apps is a very powerful tool, however the user experience and interface of substrate's native multi-signature module integrated in polkadot js is not friendly enough."}),"\n",(0,s.jsxs)(n.p,{children:["Therefore, we want to develop a Web Multisignature Management Tool (like ",(0,s.jsx)(n.a,{href:"https://wallet.gnosis.pm/#/wallets",children:"gnosis"})," based on Ethereum), implement a Substrate multisignature Portal and Web Tool integration, and bring users a better experience. Besides, subscan will support multisig Extrinsic details display. At current stage, our goal is offering users have a convenient multisignature tool and helping  developers reduce the development cost of similar functions."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Network scalability"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["All chains built  on substrate ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/blob/v2.0.0-rc6/frame/multisig/src/lib.rs#L235%3E",children:(0,s.jsx)(n.code,{children:"as_multi"})}),"  module can use our tools to complete related operations directly. The chain that changes the ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/substrate/blob/v2.0.0-rc6/frame/multisig/src/lib.rs#L235%3E",children:(0,s.jsx)(n.code,{children:"as_multi"})}),"  module can use our UX design partly or completely according to their needs to reduce the development cost."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Platform scalability"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The web Multi-signature Management Tool can only run on PC and use it with extension programs."}),"\n",(0,s.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create multi-signature account and send extrinsic"}),"\n",(0,s.jsx)(n.li,{children:"Manage multi-signature wallets and extrinsic"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"as_multi"})," Module subscan browser adaptation"]}),"\n",(0,s.jsx)(n.li,{children:"Support multiple networks that are based on Substrate development"}),"\n",(0,s.jsx)(n.li,{children:"UX optimization"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://github.com/woeom",children:"Wan Bei"}),", ",(0,s.jsx)(n.a,{href:"https://github.com/carlhong",children:"Hong Tao"})]}),"\n",(0,s.jsx)(n.h2,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsx)(n.p,{children:"Shanghai Yitaiyuan Tech"}),"\n",(0,s.jsx)(n.h2,{id:"team-website",children:"Team Website"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.subscan.io/",children:"https://www.subscan.io/"})}),"\n",(0,s.jsx)(n.h2,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(n.p,{children:"Our team is based in Shanghai and Nanjing. We are very interested in substrate and we have done a lot of related development work, such as helping Darwinia build web wallet."}),"\n",(0,s.jsx)(n.p,{children:"But our focus has always been Subscan blockchain explorer, which keeps it updated quickly."}),"\n",(0,s.jsx)(n.h2,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/itering/subscan",children:"https://github.com/itering/subscan"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/itering/subscan_ui",children:"https://github.com/itering/subscan_ui"})}),"\n",(0,s.jsx)(n.h2,{id:"development-roadmap",children:"Development Roadmap"}),"\n",(0,s.jsx)(n.h3,{id:"basic-function-generate-multisig-account-and-send-extrinsic",children:"Basic function: generate Multisig account and send Extrinsic"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["General UI design (in ",(0,s.jsx)(n.a,{href:"https://www.figma.com/proto/WaysNQWlEB4wWK0a4mzYJQ/Multisig?scaling=min-zoom&node-id=0%3A2",children:"Figma"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["backend design doc(in ",(0,s.jsx)(n.a,{href:"https://www.notion.so/backend-doc-e7b4f79ede7b4d9cb39a52769c2aab2d",children:"Notion"}),", in ",(0,s.jsx)(n.a,{href:"https://docs.google.com/document/d/18OgQ2Oh1oR9LIiZ9Uct35zHQ25f7gN1C-ngiqyrMfxU/edit?usp=sharing",children:"Google Docs"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Integrate with polkadot js extension"}),"\n",(0,s.jsx)(n.li,{children:"Multisig wallet creation and management"}),"\n",(0,s.jsx)(n.li,{children:"Basic Multisig Extrinsic(transfer) create and process in Multisig wallet"}),"\n",(0,s.jsx)(n.li,{children:"Multisig wallet support polkadot mainnet"}),"\n",(0,s.jsx)(n.li,{children:"Build user-friendly UI to list decoded call data with its hash for users who participated in the multi-signatures, data will be verified by hash on frontend"}),"\n",(0,s.jsx)(n.li,{children:"Use database or other backend service to store the index data."}),"\n",(0,s.jsx)(n.li,{children:"Docker Files and Images"}),"\n",(0,s.jsx)(n.li,{children:"Unit tests and integration test"}),"\n",(0,s.jsx)(n.li,{children:"Tutorials"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Total for worker implementation: 25 days"}),"\n",(0,s.jsx)(n.p,{children:"Budget: 1 BTC"}),"\n",(0,s.jsx)(n.h3,{id:"advanced-function-more-features-for-multisig-wallet-and-support-more-network",children:"Advanced function: more features for multisig wallet and support more network"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Multisig wallet support more kinds of Extrinsic such as staking, Democracy"}),"\n",(0,s.jsx)(n.li,{children:"Support kusama ,Darwinia and other network which base on Substrate 2.0"}),"\n",(0,s.jsx)(n.li,{children:"Docker Files and Images"}),"\n",(0,s.jsx)(n.li,{children:"Unit tests and integration test"}),"\n",(0,s.jsx)(n.li,{children:"Tutorials"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Total for worker implementation: 30 days"}),"\n",(0,s.jsx)(n.p,{children:"Budget: 1 BTC"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Total Budget: 2 BTC."})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(96540);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);