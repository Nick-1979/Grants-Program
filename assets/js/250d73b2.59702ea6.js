"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[28734],{60785:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"applications/web3-compatible-api","title":"Web3 Compatible API for Substrate EVM Chains","description":"Proposer//github.com/PureStake, @dtyoo","source":"@site/applications/web3-compatible-api.md","sourceDirName":"applications","slug":"/applications/web3-compatible-api","permalink":"/applications/web3-compatible-api","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/web3-compatible-api.md","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),a=n(28453);const r={},o="Web3 Compatible API for Substrate EVM Chains",l={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"web3-compatible-api-for-substrate-evm-chains",children:"Web3 Compatible API for Substrate EVM Chains"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Proposer:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/PureStake",children:"https://github.com/PureStake"}),", @dtyoo"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 1EMk3z9VMmXN6y3qwA37s6Qps4xRKGGE9G"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:["Project Moonbeam (",(0,s.jsx)(t.a,{href:"https://moonbeam.network/",children:"https://moonbeam.network/"}),") aims to create a Polkadot parachain that offers Ethereum compatibility.  We envision Moonbeam serving as an easy entry point to Polkadot for existing Ethereum developers -- a place where Ethereum based Dapps can run with a minimal amount of changes required.  We believe this will help drive adoption of Polkadot by reducing friction for existing Ethereum based projects and by providing compatibility and support for the rich set of Ethereum ecosystem tools such as Truffle."]}),"\n",(0,s.jsx)(t.p,{children:"Substrate already includes key components needed to achieve Ethereum compatibility, most notably the EVM frame pallet which is a full EVM implementation in Rust, and a basic way to dispatch calls to the EVM.  However, there are other critical missing pieces needed to achieve Ethereum interoperability.  One of these is a Web3 compatible API that offers the same API as an Ethereum node.  Another is Pallet-Ethereum, a Substrate runtime that Parity is developing that extends and enhances the way calls are dispatched to the EVM that is contained in Pallet-EVM."}),"\n",(0,s.jsx)(t.p,{children:"We are seeking grant funding to help build a Substrate based Web3 compatible API that will interface with Pallet-Ethereum.  We plan to use this implementation as part of Moonbeam, but other projects that want to implement Ethereum compatible parachains or parathreads could also include them into their projects and benefit from them."}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Members:"})," Derek Yoo, Alan Sapede, Telmo Michelena"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"LinkedIn Profiles:"})," ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/derek-yoo-8a050/",children:"https://www.linkedin.com/in/derek-yoo-8a050/"}),", ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/alansapede/",children:"https://www.linkedin.com/in/alansapede/"}),", ",(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/telmo-gonz%C3%A1lez-michelena-35869a14/",children:"https://www.linkedin.com/in/telmo-gonz%C3%A1lez-michelena-35869a14/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Code Repos:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/PureStake/moonbeam",children:"https://github.com/PureStake/moonbeam"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/frontier",children:"https://github.com/paritytech/frontier"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"}),"\t",(0,s.jsx)(t.a,{href:"https://www.purestake.com/",children:"https://www.purestake.com/"}),", ",(0,s.jsx)(t.a,{href:"https://moonbeam.network/",children:"https://moonbeam.network/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Legal Structure:"})," PureStake Ltd, Floor 4, Willow House, Cricket Square, Grand Cayman, KY1-9010, Cayman Islands"]}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.strong,{children:"Team's Experience:"})}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The PureStake team has extensive experience developing and delivering complex web2 software systems.  In the last year, PureStake has built a number of web3 infrastructure projects including Algorand API Services (",(0,s.jsx)(t.a,{href:"https://developer.purestake.io/",children:"https://developer.purestake.io/"}),") and the Goalseeker block explorer (",(0,s.jsx)(t.a,{href:"https://goalseeker.purestake.io/",children:"https://goalseeker.purestake.io/"}),"), among others."]}),"\n",(0,s.jsx)(t.p,{children:"Derek co-founded Fuze in 2006 and as CTO was responsible for engineering, technical operations, product management, and design as the company grew over time into a 700 person cloud business.  Alan was responsible for and hands on developed large parts of the Fuze cloud backend.  Before joining Fuze, Alan was on the Google Streetview Team and also worked at NVidia developing drivers.  Telmo has worked in a variety of roles as a backend engineer and is knowledgeable in C++, Rust, and a variety of backend data stores, data pipelines, and big data technologies."}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 6 weeks"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-time equivalent (FTE):"}),"  2 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," 2.5 BTC"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"Substrate Runtime"}),(0,s.jsx)(t.td,{children:"We will create a base Substrate runtime that will be capable of running Solidity based smart contracts that have been compiled to EVM bytecode, based on Pallet-EVM."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"Web3 RPC Module"}),(0,s.jsx)(t.td,{children:"We will deliver a working substrate module that implements the Web3 RPC API that can be added to a substrate runtime.  The Web3 RPC module will depend on and require Pallet-Ethereum and Pallet-EVM.  Note that Pallet-Ethereum is still under development by the Parity team.  PureStake will assist Parity with the development of Pallet-Ethereum as necessary to demonstrate the scenarios below."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"Basic Transaction Support"}),(0,s.jsx)(t.td,{children:"Running this module and its dependencies in a substrate runtime it will be possible to send a transaction between 2 EVM accounts using the standard Web3 API."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:"ERC20 Demonstration"}),(0,s.jsx)(t.td,{children:"Running this module and its dependencies in a substrate runtime it will be possible to deploy the Open Zeppelin ERC20 contract and exercise its transfer functionality."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"5."}),(0,s.jsx)(t.td,{children:"Truffle Demonstration"}),(0,s.jsx)(t.td,{children:"Running this module and its dependencies in a substrate runtime it will be possible to configure Truffle to connect to the node to deploy smart contracts."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"6."}),(0,s.jsx)(t.td,{children:"Metamask Demonstration"}),(0,s.jsx)(t.td,{children:"Running this module and its dependencies in a substrate runtime it will be possible to configure Metamask to connect to the node and send funds from one account to another."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"7."}),(0,s.jsx)(t.td,{children:"Unit Tests"}),(0,s.jsx)(t.td,{children:"The code will have proper unit-test coverage to ensure functionality and robustness."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"8."}),(0,s.jsx)(t.td,{children:"Docker Image"}),(0,s.jsx)(t.td,{children:"We will build a Docker image with a substrate based chain, demonstrating its functionality."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"9."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsx)(t.td,{children:"We will provide both inline documentation of the code and tutorials describing how the software can be used as well as how to deploy smart contracts.  Code and documentation will be delivered according to the Web3 Milestone deliverables guidelines for each milestone."})]})]})]}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsx)(t.p,{children:"We intend to use the developed module as part of our Moonbeam parachain project, however the functionality will not be Moonbeam-specific.  We plan to first deploy Moonbeam to the Westend testnet, then to the Kusama network, and finally to the Polkadot mainnet."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);