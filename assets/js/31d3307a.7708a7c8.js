"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[92297],{15880:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"applications/polk-auction","title":"Polk-Auction Website","description":"Team Name:* Cyril Carlier","source":"@site/applications/polk-auction.md","sourceDirName":"applications","slug":"/applications/polk-auction","permalink":"/applications/polk-auction","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/polk-auction.md","tags":[],"version":"current","frontMatter":{}}');var o=i(74848),s=i(28453);const a={},r="Polk-Auction Website",l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Architecture",id:"architecture",level:4},{value:"Mock-up of the website (Polk-acution UI)",id:"mock-up-of-the-website-polk-acution-ui",level:4},{value:"API overview (Polk-auction core)",id:"api-overview-polk-auction-core",level:4},{value:"Polk-action-core technologies",id:"polk-action-core-technologies",level:4},{value:"Polk-auction-ui technologies",id:"polk-auction-ui-technologies",level:4},{value:"What Polk-auction is <em>not</em> ?",id:"what-polk-auction-is-not-",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Polk-auction-core (started)",id:"polk-auction-core-started",level:3},{value:"Polk-auction-ui (started)",id:"polk-auction-ui-started",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Implementation of the HTTP API (Polk-auction-core)",id:"milestone-1-implementation-of-the-http-api-polk-auction-core",level:3},{value:"Milestone 2 Implementation of UI (Polk-auction-ui)",id:"milestone-2-implementation-of-ui-polk-auction-ui",level:3},{value:"Milestone 3 Deployment of the website",id:"milestone-3-deployment-of-the-website",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"polk-auction-website",children:"Polk-Auction Website"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Team Name:"})," Cyril Carlier"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Payment Address:"})," BTC : 3HDftJCXDAt8Qbk2uSj4ty2xYvdudHsMru"]}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,o.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"The PolkAuction project is a software project aiming at providing Polkadot/Kusama end-users an easy, accessible and understandable overview (in the form of a UI website) of the current auction, the current crowdloans and the running parachains for both the Polkadot and the Kusama chains. The goal is to also provide details of the running parachains and links to official resources of the parachains."}),"\n",(0,o.jsx)(t.p,{children:"The polkadot-js app already has an overview of auction, parachains and crowdloans, but we'd like to add more functionalities and make it more accessible (easier UI) for users outside of polkadot-js (exchange platform users for example, casual users, etc.)."}),"\n",(0,o.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,o.jsx)(t.h4,{id:"architecture",children:"Architecture"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://i.imgur.com/R8txfsk.png",alt:""})}),"\n",(0,o.jsx)(t.p,{children:"The two main components under development -and thus in the scope of this project- are the Polk-auction-core, an HTTP Rest API in Kotlin, and the Polk-auction-ui, a user-interface application in Typescript/React. The nodes and the sidecar API are only to be configured and deployed - and updated over-time."}),"\n",(0,o.jsx)(t.p,{children:"The polk-auction core API is an aggregator that expose only relevant information about the chain and add information when necessary from off-chain sources (example, a parachain detail would be its website address)."}),"\n",(0,o.jsx)(t.p,{children:"Ideally, we want the polk-auction core to use our own nodes (see architecture), but we will also provide a configuration where it is possible to use public end-points such as Web3Foundation's endpoint (wss://kusama-rpc.polkadot.io/) for convenience."}),"\n",(0,o.jsx)(t.h4,{id:"mock-up-of-the-website-polk-acution-ui",children:"Mock-up of the website (Polk-acution UI)"}),"\n",(0,o.jsx)(t.p,{children:"Disclaimer : I've always prefer paper UI design (mock-up) for a first version of an UI, so here it is:"}),"\n",(0,o.jsx)(t.p,{children:"(Updated with screenshot of the first UI drafts - see github link below)"}),"\n",(0,o.jsxs)(t.p,{children:["General dashboard :\n",(0,o.jsx)(t.img,{src:"https://i.imgur.com/CHSeJSQ.jpg",alt:""})]}),"\n",(0,o.jsxs)(t.p,{children:["On relay chain changed :\n",(0,o.jsx)(t.img,{src:"https://i.imgur.com/8Xeq6rL.jpg",alt:""})]}),"\n",(0,o.jsx)(t.p,{children:"There is a header with the chains supported. When a chain is selected, colors change to match Chain's colors. 3 inner pages are available, current auction, current crowdloan and parachains."}),"\n",(0,o.jsxs)(t.p,{children:["Current auction page :\n",(0,o.jsx)(t.img,{src:"https://i.imgur.com/x1PD856.jpg",alt:""})]}),"\n",(0,o.jsx)(t.p,{children:"The auction page provides details about the ongoing auction along with a list of bidders. The user can click on any displayed parachain to access the parachain details page."}),"\n",(0,o.jsxs)(t.p,{children:["Current crowdloan page :\n",(0,o.jsx)(t.img,{src:"https://i.imgur.com/ezSWEdz.jpg",alt:""})]}),"\n",(0,o.jsx)(t.p,{children:"The crowdloan page display the ongoing crowdlending campaigns as a list. The user can click on any displayed parachain to access the parachain details page."}),"\n",(0,o.jsxs)(t.p,{children:["Current parachains page :\n",(0,o.jsx)(t.img,{src:"https://i.imgur.com/0bdQ0xH.jpg",alt:""})]}),"\n",(0,o.jsx)(t.p,{children:"The parachains page display the running parachains of the selected chain as a list. This page gathers the on-chain details of the selected parachain with some extra information, such as a link the the official website, a link to the github repository of the blockchain, etc."}),"\n",(0,o.jsx)(t.p,{children:"Details about the UI (that I cannot render on paper) :"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Color-code will follow Kusama and Polkadot colors (#000000 an #e6007a respectively) for the background of the header (changes when the selected chain changes)."}),"\n",(0,o.jsx)(t.li,{children:"Look and feel of the overall UI will be similar to Telemetry and polkadot-js app to make unity with the existing applications."}),"\n",(0,o.jsx)(t.li,{children:"The UI will evolve with Polkadot new branding."}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"api-overview-polk-auction-core",children:"API overview (Polk-auction core)"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"End-points"})}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"GET /current-auction/{chain}"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Returns an Auction object (json) containing information about the current state of the auction and the list of parachain candidates of the chain {chain}."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"GET /current-crowdloan/{chain}"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Returns a Crowdloan object (json) containing information about the current state of the crowdloan and the list of parachains of the chain {chain}."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"GET /parachains/{chain}"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Returns a list of the existing Parachain objects (json) of the chain {chain}."}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"GET /parachains/{chain}/{paraId}"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Returns a Parachain object (json) of the chain {chain} with details."}),"\n",(0,o.jsx)(t.p,{children:"Field details :"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"right"},children:"Field"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"chain"}),(0,o.jsx)(t.td,{children:"string"}),(0,o.jsx)(t.td,{children:"Name of the relay-chain (values supported are [Kusama, Polkadot])"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"paraId"}),(0,o.jsx)(t.td,{children:"integer"}),(0,o.jsx)(t.td,{children:"Id of the parachain within the {chain}"})]})]})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Other"})}),"\n",(0,o.jsx)(t.p,{children:"While the sidecar API is convenient to use, so information are lacking in order to provide enough information to the UI - for example the duration of a lease period, meta-data about the chain, etc. Usually more detailed or specific information about the state of the chain are lacking in the sidecar-api. That is why it is planned to also communicate directly with a node through a websocket the same way the Polkadot-api would. The existing solution Polkaj has been quickly reviewed, that API could work well. But as we also need a simpler solution and also a bit more easy to use, we will develop our own WS client (in Kotlin) along this project. We will keep things simple and only develop what we do need. It is planned to continue to develop that WS client to provide a complete set of functionalities to access a substrate node. However that last step is not part of this project and will be an independent project later (as well as a new application maybe)."}),"\n",(0,o.jsx)(t.h4,{id:"polk-action-core-technologies",children:"Polk-action-core technologies"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Kotlin"}),"\n",(0,o.jsx)(t.li,{children:"Ktor"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Why Kotlin with ktor ? Ktor is a lightweight framework for creating HTTP Rest API, easy to use, easy to understand and to maintain."}),"\n",(0,o.jsx)(t.h4,{id:"polk-auction-ui-technologies",children:"Polk-auction-ui technologies"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Typescript"}),"\n",(0,o.jsx)(t.li,{children:"React"}),"\n"]}),"\n",(0,o.jsxs)(t.h4,{id:"what-polk-auction-is-not-",children:["What Polk-auction is ",(0,o.jsx)(t.em,{children:"not"})," ?"]}),"\n",(0,o.jsxs)(t.p,{children:['Polk-auction is not an "interactive" website, rather the users can read, consume, inform themselves with the content of the UI, but for now, it is ',(0,o.jsx)(t.em,{children:"not"})," intended to integrate functionalities such as:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Using the website as a way to participate in crowdloans"}),"\n",(0,o.jsx)(t.li,{children:"Using the website to participate to the auction"}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"For this project, only Kusama and Polkadot blockchain will be added to the UI. Latter the website may contains Rococo and Westend chains, but the users of these are not the target audience."}),"\n",(0,o.jsx)(t.p,{children:"The API used (polk-auction core) is not meant to be public (only the UI would be able to query it). This might change if needed, but as the polk-auction core code is open-source, making the API public has little sense."}),"\n",(0,o.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,o.jsx)(t.p,{children:"The project fit into the eco-system as a UI app for end-users to easily access the on-chain's parachain related information. As mentioned, the target audience is the users (individuals, associations, companies, etc.) with DOT and KSM that have a technological, financial, etc. interest in the parachains, more specifically in the auction and the crowdloan."}),"\n",(0,o.jsx)(t.p,{children:"I believe there is a need to have an easy and accessible UI to follow the auction, get information about the current state of the parachains and crowdloans. This project meets that need."}),"\n",(0,o.jsxs)(t.p,{children:["The similar existing projects I know of are the polkadot-ui app that already has UI pages for the auction, parachains and crowdloans and this ",(0,o.jsx)(t.a,{href:"https://kusama.polkassembly.io/treasury/76",children:"proposal"}),", which do have some features that have some similarities with this project, but the goals are different. The PLO proposal is oriented to the lease offerings, this project focus more on relay-chains state. Very recently, with the beginning of the crowdloan campaigns on Kusama, multiple similar projects have been released, such as ",(0,o.jsx)(t.a,{href:"https://subvis.io",children:"subvisio"})," or ",(0,o.jsx)(t.a,{href:"https://www.parachains.network/",children:"polkaview's dashboard"}),', while both provides some pages similar to this project, there are less pages, thus less information. For now they focus on Kusama and finally, they "look & feel" of the application is not the same as the other applications built for the eco-system (typically, polkassembly, telemetry, the wiki page, etc fits well within the eco-system).']}),"\n",(0,o.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,o.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Cyril Carlier"}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Contact Name:"})," Cyril Carlier"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Contact Email:"})," ",(0,o.jsx)(t.a,{href:"mailto:cyrilcarlier@hotmail.com",children:"cyrilcarlier@hotmail.com"})]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,o.jsx)(t.p,{children:"Individual / Sole Proprietor"}),"\n",(0,o.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,o.jsx)(t.p,{children:"I'm a software developer with 3+ years of relevant experience in C#/.Net, Java(with Spring/Hibernate), SQL, Typescript, React and Angular, working mainly on DDD projects and lower-level projects (such as background-jobs services, multi-thread related projects). I have a master degree in Computer Science (University of Namur - Belgium). I'm not very involved in open sources projects, so I've no code to show you outside of the few things I have on my github repository (see below)."}),"\n",(0,o.jsx)(t.p,{children:"Here is an overview of different relevant project I've worked / working on at my current and previous jobs :"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Classical DDD project involving the development of two back-end (HTTP API, written with .NetCore and Entity) and three UI apps (web-app), each back-end is using a separate database (Oracle) and both are synchronized (when needed) using a message broker (RabbitMq). UI were developed in Typescript using React and Redux."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Micro-services PoC : Project aim to show how to migrate from a monolithic software to a micro-services architecture with an event-sourcing mechanism to allow both applications to co-exists until the monolithic application is fully replaced."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Migration of a legacy (30 years old) application that was running batches (in C, Pro*C, PL/SQL and Perl) to a C# WebAPI."}),"\n"]}),"\n",(0,o.jsxs)(t.li,{children:["\n",(0,o.jsx)(t.p,{children:"Migration of a middleware (Java 1.2) to a multi-thread application (Java 8)."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/CrommVardek",children:"https://github.com/CrommVardek"})}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://www.linkedin.com/in/cyril-carlier/",children:"https://www.linkedin.com/in/cyril-carlier/"})}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,o.jsx)(t.h3,{id:"polk-auction-core-started",children:"Polk-auction-core (started)"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/CrommVardek/polk-auction-core",children:"https://github.com/CrommVardek/polk-auction-core"}),"\n",(0,o.jsx)(t.a,{href:"https://github.com/CrommVardek/polkot-api",children:"https://github.com/CrommVardek/polkot-api"})," (Polkadot client (WebSocket) in kotlin, to be used in polk-auction-core)"]}),"\n",(0,o.jsx)(t.h3,{id:"polk-auction-ui-started",children:"Polk-auction-ui (started)"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/CrommVardek/polk-auction-ui",children:"https://github.com/CrommVardek/polk-auction-ui"})}),"\n",(0,o.jsx)(t.p,{children:"See overview section for the mock-up"}),"\n",(0,o.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,o.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Total Estimated Duration:"})," 10(+3) weeks"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  1.7(+0.5)"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Total Costs:"})," 6,800 USD"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"milestone-1-implementation-of-the-http-api-polk-auction-core",children:"Milestone 1 Implementation of the HTTP API (Polk-auction-core)"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Estimated duration:"})," 4 weeks"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"FTE:"}),"  0.7"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Costs:"})," 2,800 USD"]}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,o.jsx)(t.th,{children:"Deliverable"}),(0,o.jsx)(t.th,{children:"Specification"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,o.jsx)(t.td,{children:"License"}),(0,o.jsx)(t.td,{children:"Apache 2.0"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,o.jsx)(t.td,{children:"Documentation"}),(0,o.jsx)(t.td,{children:"I will provide an API specification of the HTTP end-points. I will also provide a small documentation on how to run the project and how the project structure was done."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,o.jsx)(t.td,{children:"Testing Guide"}),(0,o.jsxs)(t.td,{children:["Integration tests will be made, as the project does not have ",(0,o.jsx)(t.em,{children:"business"})," functions, it is more important to ensure the correct data-flow. A guide on how to run the tests will be made"]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,o.jsx)(t.td,{children:"Docker"}),(0,o.jsx)(t.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,o.jsx)(t.td,{children:"Current-Auction end-point"}),(0,o.jsx)(t.td,{children:"The current auction end-point is an HTTP GET end-point to provide the current auction information of the ongoing auction of the specified chain (e.g. GET /auction/Kusama). Behind the end-point, the service query the correct node (chain) through an instance of side-car and complement the missing information with a custom Polkadot Websocket (inspired from both Polkaj and @Polkadot/api) then perform needed mapping."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,o.jsx)(t.td,{children:"Current-Parachains end-point"}),(0,o.jsx)(t.td,{children:"The current parachains end-point is an HTTP GET end-point to provide the current auction information of the running parachains (and parathreads) of the specified chain (e.g. GET /parachains/Kusama). Behind the end-point, the service query the correct node (chain) through an instance of side-car and complement the missing information with a custom Polkadot Websocket (inspired from both Polkaj and @Polkadot/api) then perform needed mapping."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,o.jsx)(t.td,{children:"Current-Crowdloan end-point"}),(0,o.jsx)(t.td,{children:"The current crowdloan end-point is an HTTP GET end-point to provide the current crowdloan information of the ongoing auction of the specified chain (e.g. GET /crowdloan/Kusama). Behind the end-point, the service query the correct node (chain) through an instance of side-car and complement the missing information with a custom Polkadot Websocket (inspired from both Polkaj and @Polkadot/api) then perform needed mapping."})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"milestone-2-implementation-of-ui-polk-auction-ui",children:"Milestone 2 Implementation of UI (Polk-auction-ui)"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Estimated duration:"})," 6 weeks"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Costs:"})," 4,000 USD"]}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,o.jsx)(t.th,{children:"Deliverable"}),(0,o.jsx)(t.th,{children:"Specification"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,o.jsx)(t.td,{children:"License"}),(0,o.jsx)(t.td,{children:"Apache 2.0"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,o.jsx)(t.td,{children:"Documentation"}),(0,o.jsx)(t.td,{children:"I will provide an API specification of the HTTP end-points. I will also provide a small documentation on how to run the project and how the project structure was done."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,o.jsx)(t.td,{children:"Testing Guide"}),(0,o.jsx)(t.td,{children:"Unit tests (code coverage of 60%) will be done to ensure most important functionalities are working as planned. A guide on how to run the tests will be made."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,o.jsx)(t.td,{children:"Docker"}),(0,o.jsx)(t.td,{children:"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,o.jsx)(t.td,{children:"Current-Auction page"}),(0,o.jsx)(t.td,{children:"The current auction page will display information from the API end-point /auction for the selected chain."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,o.jsx)(t.td,{children:"Current-Parachains page"}),(0,o.jsx)(t.td,{children:"The parachains page will display information from the API end-point /parachains for the selected chain. The page will looks like a list of the parachain with its specificities in the network."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,o.jsx)(t.td,{children:"Current-Crowdloan page"}),(0,o.jsx)(t.td,{children:"The current crowdload page will display information from the API end-point /crowdloan for the selected chain."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,o.jsx)(t.td,{children:"Others pages"}),(0,o.jsx)(t.td,{children:"Some other pages will be included such as a FAQ section and an About section (describing the website/project)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,o.jsx)(t.td,{children:"Header"}),(0,o.jsx)(t.td,{children:"The header of the website will contain the list of the relay-chains (for now Kusama and Polkadot) and some external links to the github page, the Polkadot website (network), etc."})]})]})]}),"\n",(0,o.jsx)(t.h3,{id:"milestone-3-deployment-of-the-website",children:"Milestone 3 Deployment of the website"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Estimated duration:"})," 3 weeks"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"FTE:"}),"  0.5"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Costs:"})," 0 USD (costs for web-hosting are not covered)"]}),"\n"]}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,o.jsx)(t.th,{children:"Deliverable"}),(0,o.jsx)(t.th,{children:"Specification"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,o.jsx)(t.td,{children:"License"}),(0,o.jsx)(t.td,{children:"NA"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,o.jsx)(t.td,{children:"Documentation"}),(0,o.jsx)(t.td,{children:"NA"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,o.jsx)(t.td,{children:"Testing Guide"}),(0,o.jsx)(t.td,{children:"NA"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,o.jsx)(t.td,{children:"Docker"}),(0,o.jsx)(t.td,{children:"NA"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,o.jsx)(t.td,{children:"Article"}),(0,o.jsx)(t.td,{children:"A Medium article or a Reddit post will be written to advertise the website and another article/post targeting the developer community will be written to present the project."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,o.jsx)(t.td,{children:"Deployment of nodes"}),(0,o.jsxs)(t.td,{children:["Deployment on a dedicated VPS of a Kusama running node and a Polkadot running node in respective Docker containers (from parity/polkadot",":latest"," image)."]})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,o.jsx)(t.td,{children:"Deployment of sidecar-api"}),(0,o.jsx)(t.td,{children:"Deployment on the same dedicated VPS of two side-car API in respective Docker containers (each one connected to one running node)."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,o.jsx)(t.td,{children:"Deployment of polk-auction-core"}),(0,o.jsx)(t.td,{children:"Deployment on the same dedicated VPS of the polk-auction-core API."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,o.jsx)(t.td,{children:"Deployment of polk-auction-ui"}),(0,o.jsx)(t.td,{children:"Deployment on the same dedicated VPS of the polk-auction UI website."})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,o.jsx)(t.p,{children:"Futur plans are :"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"The website, once up and running, will be promoted through some social-media (Reddit, LinkedIn and Facebook)"}),"\n",(0,o.jsx)(t.li,{children:"Adapting the polk-auction-core API depending on side-car's changes - as their parachain endpoint is subject to changes, it is most likely the polk-auction-core API will need to be updated a few times in the mid and long-term."}),"\n",(0,o.jsx)(t.li,{children:"Complete the WS client (kotlin) for Substrate nodes to be used the same way @polkadot/api works. Will probably be part of another project, but it will be used by Polkauction-core in order to remove sidecar from the architecture."}),"\n",(0,o.jsx)(t.li,{children:"Add chains if the developer community find it useful to have Rococo and/or Westend on the website. Add chains when (long-term) nested relay-chain will be fully operational."}),"\n",(0,o.jsx)(t.li,{children:"The suggestion to communicate polkadot.js-extension directly from the UI will be considered to allow users to directly participate in the crowdloans."}),"\n",(0,o.jsx)(t.li,{children:"As I'm very open to ideas, suggestions and advices, it is very likely that the code, the architecture, the UI and the functionalities will evolve with the community feed-backs."}),"\n"]}),"\n",(0,o.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Why do the FTE and duration do not match ?"}),"\nI have a full-time job as a developer, I'll take some days off for this project, however I won't take 10(+3) weeks of days off for the project, so I won't be able to work as 1FTE/month on this project. I'll work on evening and week-end to meet the milestones and deliveries."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website and Reddit (/r/Polkadot, /r/Kusama and /r/dot) mainly."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Additional information"}),"\nI've started to work in the back-end (polk-auction-core) as well as deployed two running nodes (one on Polkadot, one on Kusama) and their respective side-car API instances. I've applied to no previous grants neither received contribution for this project."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>r});var n=i(96540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);