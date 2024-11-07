"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[58252],{6463:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"applications/Diffy_chat","title":"Diffy messenger","description":"- Team Name: BelSoft","source":"@site/applications/Diffy_chat.md","sourceDirName":"applications","slug":"/applications/Diffy_chat","permalink":"/applications/Diffy_chat","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/Diffy_chat.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),l=t(28453);const r={},a="Diffy messenger",o={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up-1",level:2},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Design and development of a pallet and a DOTRTC library",id:"milestone-1--design-and-development-of-a-pallet-and-a-dotrtc-library",level:3},{value:"Milestone 2 \u2014 A web messenger MVP development",id:"milestone-2--a-web-messenger-mvp-development",level:3},{value:"Future Plans",id:"future-plans",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"diffy-messenger",children:"Diffy messenger"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," BelSoft"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," Polkadot (Statemint):\t 14nQH1ZTDkRxLWdCWbSZjRGrBJpXgj4m2RRZDtQZExPP73K (USDT)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(n.p,{children:["This application complies with a potentially interesting project \u201cPrivate instant messenger that uses on-chain identity\u201d mentioned in ",(0,s.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/build-open-source",children:"Open Source Polkadot Stack"})," page in the \u201cSocial Networking\u201d section."]}),"\n",(0,s.jsxs)(n.h2,{id:"project-overview-page_facing_up-1",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(n.p,{children:"A lot of sensitive data is meant to be transferred between parties in a secure way, but most of the centralized messengers and mail agents, even secured ones, have a common point of vulnerability - a centralized database/backend that stores all the data and manages connections. Meanwhile, some entities or even industries as a whole have demand for secured private channels for exchanging messages, e.g. medical institutions, that exchange sensitive data with patients or with other market players."}),"\n",(0,s.jsx)(n.p,{children:"The aim of this project is to develop a secured decentralized messenger that doesn\u2019t store data on a centralized backend and uses personal Polkadot wallet credentials for chatting initiation and messaging."}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsxs)(n.p,{children:["P2p channels between users will be set using WebRTC. We will develop a Substrate pallet for exchanging ",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc2327",children:"SDP offers"}),". For address discovery of NAT users we will use any public ",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc8445",children:"STUN server"}),".\nAll messages between users will be encrypted with user\u2019s public keys, so only receiving user could decrypt his messages using his private key of his Polkadot wallet.\nAlso, the pallet will include a \u201ccontacts\u201d feature: a user will be able to tie names to wallet addresses and organize his contacts in a common way."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/126072104/220610232-0b9a4033-97cc-44ba-8948-a610b2b0c4bf.png",alt:"image"})}),"\n",(0,s.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(n.p,{children:"The Diffy chat dapp is very in demand in areas where it is crucial to protect personal and other critical data from unauthorized access during interaction or communication between counterparties. The target audience is very wide: from medical institutions providing telemedicine services to remote financial services and corporate channels for transmitting sensitive information between remote divisions."}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.a,{href:"https://wiki.polkadot.network/docs/build-open-source",children:"Open Source Polkadot Stack"})," we see the ",(0,s.jsx)(n.a,{href:"https://github.com/Uke-Messaging/uke-pallet",children:"Uke Protocol Pallet"}),' project, that provides functionality to perform basic messaging and identity assignment to users on a given Substrate chain. Unlike Uke Protocol, Diffy chat dapp won\u2019t use a blockchain for sending and storing entire messages as in case of mass use this feature will dramatically clog the blockchain with unnecessary information like "hello" messages. Our dapp will use a blockchain just for authorization purposes, p2p connection initiation and for personal encryption keys. History backup feature can be available on later stages of the project by storing files locally or in IPFS with putting just a hash sum in a blockchain.']}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Max Remov, managing partner at BelSoft Dev d.o.o"}),"\n",(0,s.jsx)(n.li,{children:"Alexey Vexin, CEO at BelSoft Dev d.o.o"}),"\n",(0,s.jsx)(n.li,{children:"Dmitrii Shevchenko, CTO at BelSoft Dev d.o.o"}),"\n",(0,s.jsx)(n.li,{children:"Nikita Orlov, Teamlead at BelSoft Dev d.o.o"}),"\n",(0,s.jsx)(n.li,{children:"Alexander Plekhanov, Middle full stack developer at BelSoft Dev d.o.o"}),"\n",(0,s.jsx)(n.li,{children:"Valeriy Tetevin, Senior full stack developer at BelSoft Dev d.o.o"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Alexey Vexin"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:vexin@belsoft.rs",children:"vexin@belsoft.rs"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Website:"})," ",(0,s.jsx)(n.a,{href:"https://www.belsoft.rs",children:"https://www.belsoft.rs"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Address:"})," Kneza Mihaila 33, sprat 2 , Stari Grad , 11000 Beograd , Srbija"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Registered Legal Entity:"})," Belsoft Dev DOO Beograd"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(n.p,{children:"Max Remov is a business and personality transformation expert, executive and visionary, innovation instigator across telecom, retail, chemistry, pharma. Participates in several crypto initiatives."}),"\n",(0,s.jsx)(n.p,{children:"Alexey Vexin is product owner and project manager with 10+ years of experience in managing complicated telecoms and IT projects in Telco, Utilities and Governmental sectors with deep focus on business process management. Led dozens of federal scaled projects for IT systems implementation and industry scaled technology development, standardization and implementation."}),"\n",(0,s.jsx)(n.p,{children:"Dmitrii Shevchenko is a TechLead engineer with 10+ years of experience in developing and integrating IT, networking, security and blockchain solutions. Involved in implementation of highly reliable industrial solutions and development of FinTech and DeFi applications."}),"\n",(0,s.jsx)(n.p,{children:"Nikita Orlov, ETH Waterloo 2019 hackathon prize-winner, is a TechLead engineer with over 8 years of experience in development and integration of fault-tolerant high-loaded SaaS IT solutions including relevant experience in blockchain solutions."}),"\n",(0,s.jsx)(n.p,{children:"Alexander Plekhanov is a full stack software developer with over 5 years of experience including blockchain-based projects, enterprise solutions for fintech, call-centers, government services. Recent time mostly focused on smart-contracts development."}),"\n",(0,s.jsx)(n.p,{children:"Valeriy Tetevin is a programming engineer with over 8 years of experience in cloud-native applications. He also has strong knowledge of microservices architecture and back-end development for high-loaded applications."}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/1db1",children:"https://github.com/1db1"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/StringNick",children:"https://github.com/StringNick"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/SealTV",children:"https://github.com/SealTV"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/remov",children:"Max Remov"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/alexey-vexin-800a4068/",children:"Alexey Vexin"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/nikita-orlov-aa6910186/",children:"Nikita Orlov"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/alexander-plekhanov/",children:"Alexander Plekhanov"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/sealtv/",children:"Valeriy Tetevin"})}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.p,{children:"We plan to execute 3 deliverables in two milestones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a Substrate pallet for chat initiation;"}),"\n",(0,s.jsx)(n.li,{children:"a DOTRTC library for p2p transport implementation with test html pages for message passing;"}),"\n",(0,s.jsx)(n.li,{children:"a web-messenger dapp MVP with polkadot wallets authorisation."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The project will be supported by a team of 2 developers, 1 UI/UX designer, 1 DevOps engineer and 1 QA."}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  3,5 FTE"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 30,000 USDT"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1--design-and-development-of-a-pallet-and-a-dotrtc-library",children:"Milestone 1 \u2014 Design and development of a pallet and a DOTRTC library"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 1,5 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  2"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 16,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})," that explains how the developed features work."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by unit tests to ensure new functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Diffy chat pallet"}),(0,s.jsx)(n.td,{children:"We will develop a pallet (using Rust) which will include event handling to send and approve WebRTC offers for chat initiation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"DOTRTC library"}),(0,s.jsx)(n.td,{children:"We will develop a DOTRTC library (with JS) for p2p transport implementation using a parachain with Diffy chat pallet. This library will include an API for organizing p2p communication, methods for splitting packets into chunks (and reassemble on the receiver\u2019s end). For secure messaging between two participants a e2e encryption using the rs25519 algorithm will be implemented in the DOTRTC library (a sender will encrypt outgoing messages with recipient\u2019s public key so only the recipient could decrypt them with his private key)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(n.td,{children:"HTML test page"}),(0,s.jsx)(n.td,{children:"We will deliver an HTML test page for DOTRTC library testing (setting a p2p channel between 2 users using the DOTRTC library)."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2--a-web-messenger-mvp-development",children:"Milestone 2 \u2014 A web messenger MVP development"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 1,5 months"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FTE:"}),"  1,5"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 14,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})," that explains how the new dapp works."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(n.td,{children:"Article"}),(0,s.jsxs)(n.td,{children:["We will publish an ",(0,s.jsx)(n.strong,{children:"article"})," that explains what was achieved, how to use the new Dapp and what benefits what are the benefits of using the system"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Contacts list feature"}),(0,s.jsx)(n.td,{children:"We will develop a contact list feature allowing users to tie real names to contact\u2019s wallet addresses and store them encrypted in a blockchain. Encryption and decryption will be carried out on the frontend."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Web messenger dapp MVP"}),(0,s.jsx)(n.td,{children:"A web messenger dapp (written on JS) with authorization via Polkadot.js keys, p2p messaging using developed DOTRTC library and contacts list: a user will be able to start a conversation with someone on his contacts list. A web dapp MVP mockup is shouwn below and the basic user logic is as follows. To establish a chat User A sends a short 1st message to User B (limited to 50 symbols as it is written into the blockchain). This message is sent with the connection request. When User B is on-line he receives this message with connection request and accepts it: automatically for users on his contact list and manually for requests from unknown users (connection request can be declined as well)."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://user-images.githubusercontent.com/126072104/223709096-ccec2425-f3ac-4c8f-853f-d3656a8c29c5.jpg",alt:"Diffy_chat mockup"})}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(n.p,{children:"In the next stages of the project we plan to implement new fundamental features like:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"offline messaging;"}),"\n",(0,s.jsx)(n.li,{children:"group chats (p2mp);"}),"\n",(0,s.jsx)(n.li,{children:"sending/receiving files;"}),"\n",(0,s.jsx)(n.li,{children:"chats backup feature."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These should be developed under later stages of the project."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const s={},l=i.createContext(s);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);