"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[29651],{31911:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"applications/ParaSpell","title":"ParaSpell","description":"- Team Name:  ParaSpell","source":"@site/applications/ParaSpell.md","sourceDirName":"applications","slug":"/applications/ParaSpell","permalink":"/applications/ParaSpell","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/ParaSpell.md","tags":[],"version":"current","frontMatter":{}}');var a=t(74848),i=t(28453);const r={},l="ParaSpell",o={},c=[{value:"Project Overview  \ud83d\udcc4",id:"project-overview--",level:2},{value:"Overview \ud83d\udca1",id:"overview-",level:3},{value:"Project Details \ud83c\udfaf",id:"project-details-",level:3},{value:"Architecture \ud83c\udfd7",id:"architecture-",level:4},{value:"Technology Stack \ud83d\udcbb",id:"technology-stack-",level:4},{value:"Ecosystem Fit \ud83c\udf3f",id:"ecosystem-fit-",level:3},{value:"Team  \ud83d\udc65",id:"team--",level:2},{value:"Team members (In order of joining time)",id:"team-members-in-order-of-joining-time",level:3},{value:"Contact \ud83d\udcde",id:"contact-",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience \ud83d\udd0e",id:"teams-experience-",level:3},{value:"Team Code Repos \ud83d\udcda",id:"team-code-repos-",level:3},{value:"Team github accounts \ud83e\uddd1\u200d\ud83d\udcbb",id:"team-github-accounts-",level:4},{value:"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93",id:"team-linkedin-profiles-",level:3},{value:"Development Status  \ud83d\udcd6",id:"development-status--",level:2},{value:"Development Roadmap  \ud83d\udd29\ud83d\udee0",id:"development-roadmap--",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Cross-blockchain application for developers",id:"milestone-1--cross-blockchain-application-for-developers",level:3},{value:"Future Plans \ud83d\udd2d",id:"future-plans-",level:2},{value:"Additional Information  \u2795",id:"additional-information--",level:2}];function d(e){const n={a:"a",br:"br",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"paraspell",children:"ParaSpell"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Team Name:"}),"  ParaSpell"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Payment Address:"}),"  0xa085190c859eAe92bCCED9CE05b10DDb363FE5Ea (USDC)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsxs)(n.strong,{children:[(0,a.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]}),"  1 \ud83d\udc23"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"project-overview--",children:"Project Overview  \ud83d\udcc4"}),"\n",(0,a.jsx)(n.h3,{id:"overview-",children:"Overview \ud83d\udca1"}),"\n",(0,a.jsx)(n.p,{children:"XCM & XCMP related development tool for developers."}),"\n",(0,a.jsx)(n.p,{children:"ParaSpell main advantages can be summarized in the following list:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ParaSpell is a platform that allows developers to use specific XCM & XCMP related tasks from a user-friendly interface."}),"\n",(0,a.jsx)(n.li,{children:"ParaSpell focuses on ease of use, broad scale of use cases, and bringing XCM & XCMP utilization & documentation closer to developers."}),"\n",(0,a.jsx)(n.li,{children:"ParaSpell guarantees to be a completely decentralized, open-source platform that does not collect any user data."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"One of the ParaSpell main goals is to reduce the time necessary to create XCM calls or open HRMP channels."}),"\n",(0,a.jsx)("img",{width:"1027",alt:"Open channel",src:"https://github.com/user-attachments/assets/3a5c1c72-3e20-40fd-9e2c-80cde2dfb525"}),"\n",(0,a.jsx)(n.p,{children:"As we can see in the figure above, the amount of details the user has to fill to transfer the XCM message is drastically reduced. As an example, users do not need to specify a specific route from origin to destination chain. These details are filled for them."}),"\n",(0,a.jsx)(n.p,{children:"Another goal of ParaSpell is having network installation, compilation & startup done as simply as possible. This is achieved by makefile that groups commands into fewer much more intuitive commands and by network startup configuration file. Together, these two files take care of the network side, and adding new nodes into these files is intuitive.  Starting the application is also very simple and done by one command. Communication between application and network is made possible with Polkadot API libraries."}),"\n",(0,a.jsx)(n.p,{children:"ParaSpell focuses mainly on substrate developers. Added value comes from being user friendly SDK for simplifying development by saving time necessary to install & launch network, open HRMP channels or create XCM transfers between nodes available in network."}),"\n",(0,a.jsx)(n.p,{children:"Overall ParaSpell is all about developer experience."}),"\n",(0,a.jsx)(n.h3,{id:"project-details-",children:"Project Details \ud83c\udfaf"}),"\n",(0,a.jsx)(n.p,{children:"ParaSpell in its current form allows developers to install all dependencies as well as a network consisting of Rococo, Pichiu(Kylin network), Bifrost & Acala nodes with one command. Launching a network is also done by one command. Once the network is installed and started ParaSpell application allows developers to open/close HRMP channels between mentioned parachains. In current progress ParaSpell already has user interface and main functionality almost finished."}),"\n",(0,a.jsx)(n.p,{children:"The following screen allows the user to open the HRMP channels between list of parachains pulled from Rococo by API call."}),"\n",(0,a.jsx)("img",{width:"1027",alt:"Open channel",src:"https://github.com/user-attachments/assets/e8594046-0441-4b70-b2d0-71bf3c1755be"}),"\n",(0,a.jsx)(n.p,{children:"Closing HRMP channels is just as simple as opening them. One button click to close the required channel."}),"\n",(0,a.jsx)("img",{width:"1042",alt:"close channel",src:"https://github.com/user-attachments/assets/6c67fdb4-46c4-4bc6-b2e4-5e7d55890d97"}),"\n",(0,a.jsx)(n.p,{children:"If the user decides to transfer funds from Relay chain to Parachain they can do so by filling following details. These required details are way faster to fill than filling a full XCM call which requires a complete route and selection of concrete token."}),"\n",(0,a.jsx)("img",{width:"1044",alt:"relay to para",src:"https://github.com/user-attachments/assets/cc9bb30b-2a11-4879-9fe4-c8a49386f90f"}),"\n",(0,a.jsx)(n.p,{children:"The opposite, but nearly the same scenario is sending tokens from Parachain to Relay chain. It is just as simple, however."}),"\n",(0,a.jsx)("img",{width:"1038",alt:"para to relay",src:"https://github.com/user-attachments/assets/144cf071-ad7e-4ebc-b8d1-e4e1c06ebdb6"}),"\n",(0,a.jsx)(n.p,{children:"The last transaction scenario is the transfer of funds between Parachain and another Parachain."}),"\n",(0,a.jsx)("img",{width:"1039",alt:"para to para",src:"https://github.com/user-attachments/assets/1569c637-50e2-42a4-83ed-42300ed59a4f"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Overview video of application is also available on Youtube\n",(0,a.jsx)(n.a,{href:"https://youtu.be/YKZEa2MaY6Q",children:"Link to overview video"})]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"architecture-",children:"Architecture \ud83c\udfd7"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://github.com/user-attachments/assets/618d97aa-437f-4c64-b3ab-a24ab21e75ea",alt:"screenFlow"})}),"\n",(0,a.jsx)(n.p,{children:"Application is purposely designed to be as simple as possible. This guarantees, that all tasks can be done quickly and without extended searching. All necessary screens also feature notifications which will as a milestone explain be callback reactive. The loading screen is only present on the first application & network startup, once accessing the same screen after the application was loaded it will be skipped automatically. The screen serves to register necessary assets in parachain nodes. This is only required to be run once per network startup."}),"\n",(0,a.jsx)(n.h4,{id:"technology-stack-",children:"Technology Stack \ud83d\udcbb"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Vue.js"}),"\n",(0,a.jsx)(n.li,{children:"Node.js"}),"\n",(0,a.jsx)(n.li,{children:"Typescript"}),"\n",(0,a.jsx)(n.li,{children:"Polkadot api libraries"}),"\n",(0,a.jsx)(n.li,{children:"Make"}),"\n",(0,a.jsx)(n.li,{children:"Polkadot launch"}),"\n",(0,a.jsx)(n.li,{children:"Substrate compatible nodes (For now Rococo, Pichiu(Kylin network), Bifrost & Acala)"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"ecosystem-fit-",children:"Ecosystem Fit \ud83c\udf3f"}),"\n",(0,a.jsx)(n.p,{children:"There are not many XCM & XCMP related development tools released currently. We aim to aid this mostly empty space and help developers to understand XCM & XCMP as the current state-of-the-art technology by providing documentation and a user interface in which they can do development tasks more easily and faster."}),"\n",(0,a.jsx)(n.p,{children:'In Polkadot and Kusama ecosystem, there are few XCM & XCMP related Dapps in development. These rather focus on standard users mostly. One of mentioned type is called "Morph".'}),"\n",(0,a.jsx)(n.p,{children:'Unlike the already mentioned "Morph" platform ParaSpell focuses more on developers. ParaSpell features complete network install and startup configuration in one single command. This automatization ensures, that developers do not need to do any extra tasks when they wish to run development nodes locally. ParaSpell also allows developers to open and close HRMP channels between Parachains they connected. Like "Morph", ParaSpell can also transfer fungible tokens in three scenarios. From Parachains to Relay chain, from Relay chain to Parachains & from Parachains to Parachains.'}),"\n",(0,a.jsx)(n.p,{children:"Our target audiences can be Web3 projects & starting/current blockchain developers."}),"\n",(0,a.jsx)(n.h2,{id:"team--",children:"Team  \ud83d\udc65"}),"\n",(0,a.jsx)(n.h3,{id:"team-members-in-order-of-joining-time",children:"Team members (In order of joining time)"}),"\n",(0,a.jsx)(n.p,{children:"Du\u0161an Morh\xe1\u010d - Student, project Core Dev. Faculty of Informatics and Information Technologies STU in Bratislava"}),"\n",(0,a.jsxs)(n.p,{children:["Viktor Vala\u0161t\xedn - Supervisor, founder of ",(0,a.jsx)(n.a,{href:"https://kodadot.xyz/",children:"KodaDot"}),". Faculty of Informatics and Information Technologies STU in Bratislava"]}),"\n",(0,a.jsx)(n.h3,{id:"contact-",children:"Contact \ud83d\udcde"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Contact Name:"}),"  Du\u0161an Morh\xe1\u010d"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Contact Email:"}),"  ",(0,a.jsx)(n.a,{href:"mailto:xmorhac@stuba.sk",children:"xmorhac@stuba.sk"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Registered Address:"}),"  No legal structure yet."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Registered Legal Entity:"}),"  No legal structure yet."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"teams-experience-",children:"Team's experience \ud83d\udd0e"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Du\u0161an is the programmer behind this project and has successfully presented it at the international conference ICECET2022 held in Prague from which there is an article regarding XCMP & our project. It will soon be published on IEEE and a link will be provided. Du\u0161an also studies blockchain technology and had a bachelor thesis about cross-blockchain sharing from which this idea was born."}),"\n",(0,a.jsxs)(n.li,{children:["Viktor (",(0,a.jsx)(n.a,{href:"https://twitter.com/vikiival",children:"@vikiival"}),") is building open-source software in the Polkadot ecosystem since 2019. Viktor is also Du\u0161an's supervisor, Co-Founder of ",(0,a.jsx)(n.a,{href:"https://kodadot.xyz/",children:"KodaDot"}),", and co-author of our XCMP ICECET2022 article publication."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"team-code-repos-",children:"Team Code Repos \ud83d\udcda"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/dudo50/ParaSpell",children:"https://github.com/dudo50/ParaSpell"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://github.com/kodadot/nft-gallery",children:"https://github.com/kodadot/nft-gallery"})}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"team-github-accounts-",children:"Team github accounts \ud83e\uddd1\u200d\ud83d\udcbb"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/dudo50",children:"https://github.com/dudo50"}),"  Du\u0161an Morh\xe1\u010d"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/vikiival",children:"https://github.com/vikiival"}),"  Viktor Vala\u0161t\xedn"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"team-linkedin-profiles-",children:"Team LinkedIn Profiles \ud83e\uddd1\u200d\ud83c\udf93"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.linkedin.com/in/dudo50",children:"https://www.linkedin.com/in/dudo50"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://www.linkedin.com/in/vikival",children:"https://www.linkedin.com/in/vikival"})}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"development-status--",children:"Development Status  \ud83d\udcd6"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/dudo50/ParaSpell",children:"https://github.com/dudo50/ParaSpell"})," This is the repo for ParaSpell and there is already a user interface that can open HRMP channels & transfer fungible tokens between Acala and Rococo. Wallet support from milestone was recently implemented, it only needs to be added to calls."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"development-roadmap--",children:"Development Roadmap  \ud83d\udd29\ud83d\udee0"}),"\n",(0,a.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Total Estimated Duration:"}),"  2 months \u231b\ufe0f"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"}),"  1 FTE"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Total Costs:"}),"   10,000 USD \ud83d\udcb0"]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"milestone-1--cross-blockchain-application-for-developers",children:"Milestone 1 \u2014 Cross-blockchain application for developers"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Estimated duration:"}),"  2 months \u231b\ufe0f"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"FTE:"}),"  1 FTE"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Costs:"}),"  10,000 USD \ud83d\udcb0"]}),"\n"]}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Number"}),(0,a.jsx)(n.th,{children:"Deliverable"}),(0,a.jsx)(n.th,{children:"Specification"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0a."}),(0,a.jsx)(n.td,{children:"License"}),(0,a.jsx)(n.td,{children:"MIT"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0b."}),(0,a.jsx)(n.td,{children:"Documentation"}),(0,a.jsx)(n.td,{children:"Inline documentation of code, as well as startup configuration with all necessary commands, included in repository"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0c."}),(0,a.jsx)(n.td,{children:"Testing Guide"}),(0,a.jsx)(n.td,{children:"Core functionality & user guide will be covered in repository documentation"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0d."}),(0,a.jsx)(n.td,{children:"Docker"}),(0,a.jsx)(n.td,{children:"Frontend Docker file will be ready"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"0e."}),(0,a.jsx)(n.td,{children:"Article"}),(0,a.jsx)(n.td,{children:"Soon to be released on IEEE + Medium article about development of ParaSpell"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"1."}),(0,a.jsx)(n.td,{children:"Wallet login"}),(0,a.jsx)(n.td,{children:"Developers can use their Polkadot js extension wallets to execute transactions XCM from their accounts."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"2.a"}),(0,a.jsx)(n.td,{children:"Full working  fund transfer scenario 1"}),(0,a.jsx)(n.td,{children:"Fully working transaction scenario 1 - Relay chain to Parachains"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"2.b"}),(0,a.jsx)(n.td,{children:"Fully working  fund transfer scenario 2"}),(0,a.jsx)(n.td,{children:"Fully working transaction scenario 2 - Parachains to Relay chain"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"2.c"}),(0,a.jsx)(n.td,{children:"Fully working  fund transfer scenario 3"}),(0,a.jsx)(n.td,{children:"Fully working transaction  scenario 3 - Parachain to Parachain"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"3.a"}),(0,a.jsx)(n.td,{children:"Callback support 1"}),(0,a.jsx)(n.td,{children:"Added callback data support so developers/users can see information about their XCM transactions from UI and in real-time."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"3.b"}),(0,a.jsx)(n.td,{children:"Callback support 2"}),(0,a.jsx)(n.td,{children:"Added callback data support so developers/users can see information about HRMP channel calls from UI and in real-time."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4."}),(0,a.jsx)(n.td,{children:"ParaSpell SDK"}),(0,a.jsx)(n.td,{children:"Move calls to separate NPM library"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5."}),(0,a.jsx)(n.td,{children:"Guide to add new nodes to application and network"}),(0,a.jsx)(n.td,{children:"Simplified and user-friendly wiki/guide for  users to understand how to add new nodes to  network startup configuration as well as to add/understand calls used in application"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"future-plans-",children:"Future Plans \ud83d\udd2d"}),"\n",(0,a.jsx)(n.p,{children:"Once everything will be implemented according to the proposed plan application will still be under constant improvement as technology will progress. For example, once the XCMP protocol will be released we wish to deprecate the HRMP protocol we currently use for channels."}),"\n",(0,a.jsx)(n.p,{children:"In a long run, we also want to improve design, add new features that can be useful for developers, support for new nodes, and ability to add a new node from the user interface."}),"\n",(0,a.jsx)(n.h2,{id:"additional-information--",children:"Additional Information  \u2795"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"How did you hear about the Grants Program?"}),"  Personal recommendation"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"About project success so far:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Project article was accepted on international conference ICECET2022 ( only 450 out of 1000+ articles got accepted)\n",(0,a.jsx)(n.a,{href:"http://www.icecet.com/program_P.pdf",children:"Link to conference physical program - Article 862"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:['Project won \ud83e\udd48 second place bounty at Polkadot North America Hackaton in category "Build an XCM Related Tool for Moonbeam"',(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"https://twitter.com/MoonbeamNetwork/status/1555654398658977792",children:"Link to moonbeam winner announcement twitter post"}),"\n",(0,a.jsx)(n.a,{href:"https://devpost.com/software/polkachange-cross-blockchain-transfer-tool",children:"Link to hackaton entry post"})]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var s=t(96540);const a={},i=s.createContext(a);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);