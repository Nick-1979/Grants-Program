"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[15245],{46373:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"applications/Zeeve_Parachain_deployment_zoombienet_testing_automation","title":"larch - Zombie-net Automation","description":"- Team Name: Zeeve","source":"@site/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md","sourceDirName":"applications","slug":"/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation","permalink":"/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/Zeeve_Parachain_deployment_zoombienet_testing_automation.md","tags":[],"version":"current","frontMatter":{}}');var s=t(74848),l=t(28453);const a={},r="larch - Zombie-net Automation",o={},h=[{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Core Zombie-net Automation",id:"milestone-1--implement-core-zombie-net-automation",level:3},{value:"Milestone 2 \u2014 Monitoring",id:"milestone-2--monitoring",level:3},{value:"Application Mockup",id:"application-mockup",level:2},{value:"Dashboard",id:"dashboard",level:3},{value:"Zombie-net network list",id:"zombie-net-network-list",level:3},{value:"Create a new Zombie-net",id:"create-a-new-zombie-net",level:3},{value:"Relaychain, Parachain, specfile and WASM templates",id:"relaychain-parachain-specfile-and-wasm-templates",level:3},{value:"User activity and operation history",id:"user-activity-and-operation-history",level:3},{value:"Technology Stack",id:"technology-stack",level:2},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"larch---zombie-net-automation",children:"larch - Zombie-net Automation"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Team Name:"})," ",(0,s.jsx)(n.a,{href:"https://www.zeeve.io",children:"Zeeve"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Payment Address:"})," Ethereum (USDT/USDC) 0x5E1257E928aa42E3D0cd9E2A7537E37D108D811B"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Blockchain adoption is happening at a very rapid rate, with a lot many use cases being implemented and seeing the light of the day. The concept of the parachain enables the possibilities further. While we focus on building the use cases, code them and implement the business logic of it, including the creation of Parachain and then further logic running upon it, we majorly underestimate the DevOps activity to deploy, maintain, scale and manage the parachain itself. This includes initial launch of the parachain, its thorough testing using Zombie-net and scaling it further by providing support for users to create and deploy validator, full and archive nodes with ease as well as to have secure RPC endpoints. The most deficit we see is around advanced analytics and proactive monitoring to ensure a production grade incident management of networks and nodes."}),"\n",(0,s.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(n.p,{children:"Zeeve will provide a GUI tool to setup the new Substrate zombie-net network with in-depth and flexible configurations in few clicks supporting K8 and native VMs whichever fits the parachains better."}),"\n",(0,s.jsx)(n.p,{children:"A GUI will be built to allow a quick setup of the relaychain, parachain with zombie-net with the desired capabilities to test multiple configurations. This in turn will allow the developers and parachain teams to try multiple chain configurations while setting up the parachains with Zombie-net, as well as to choose different nodes to try and test for the best possibilities on the parachain."}),"\n",(0,s.jsx)(n.p,{children:"This not only will allow configurations on the parachain side but will also allow you to pick from a set of predefined DSL templates on Zombie-net as well as upload the new templates without needing to write the code. The graphical control panel will support all the other configurations or operations required to enable the developer or parachain team to test with as much flexibility as required. These operations include:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Start - Start the network with configured info (templates)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Start the network for either evaluation or testing"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Delete - will stop the processes and delete it"}),"\n",(0,s.jsx)(n.li,{children:"View Info - view execution logs and command"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Test result and logs"})}),"\n",(0,s.jsx)(n.p,{children:"The interface will allow the developer to test and see live logs of the test run, post run results and logs on the aforementioned interface. Furthermore, a stack of Prometheus and Grafana will allow easy monitoring of the Zombienet."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Templating"})}),"\n",(0,s.jsx)(n.p,{children:"The control panel will also allow the developer or the parachain team to one-click replicate one of the existing zombie-net configurations, save as template or pick from previously saved template and re-create a new test with some rapid tweaks to it."}),"\n",(0,s.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Ghan Vashishtha"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Sankalp Sharma"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Jasti Sri Radhe Shyam"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Antar Basu"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Swati Sharma"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Gowrish K"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Abhishek Kumar"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact Name:"})," Ghan Vashishtha"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Contact Email:"})," ",(0,s.jsx)(n.a,{href:"mailto:ghan@zeeve.io",children:"ghan@zeeve.io"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Website:"})," ",(0,s.jsx)(n.a,{href:"http://www.zeeve.io",children:"www.zeeve.io"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Registered Address:"})," 1603 Capitol Ave Ste 310, Cheyenne 82001, WY"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Registered Legal Entity:"})," Zeeve Inc."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsxs)(n.p,{children:["Founded by a team of experienced professionals and entrepreneurs from industry, Zeeve's co-founders collectively have over 45+ years of experience in technology, product development, and various business verticals. Zeeve has built an enterprise-grade no-code Blockchain Infrastructure Automation platform that enables Enterprises, Blockchain Startups, Blockchain Consulting Companies and Web3 Developers to deploy Blockchain nodes and Decentralised Apps within minutes, and manage them with advanced analytics and real-time alerts. In June 2022, the Startup raised $2.65 Million in a Seed Round from Leo Capital and Blu Ventures. It plans to deploy the funds towards product development, augmenting the technology team and enhancing its reach among DApp developers and global corporations, please consider visiting our prior ",(0,s.jsx)(n.a,{href:"https://www.zeeve.io/platform",children:"work"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Zeeve-App",children:"https://github.com/Zeeve-App"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Zeeve-App/sawtooth-artifacts",children:"https://github.com/Zeeve-App/sawtooth-artifacts"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/Zeeve-App/Zeeve-read-the-docs",children:"https://github.com/Zeeve-App/Zeeve-read-the-docs"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.zeeve.io/about-us",children:"https://www.zeeve.io/about-us"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/ghan-vashishtha/",children:"https://www.linkedin.com/in/ghan-vashishtha/"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/sankalp-sharma-502008139/",children:"https://www.linkedin.com/in/sankalp-sharma-502008139/"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/arjun-chamyal-a4466086/",children:"https://www.linkedin.com/in/arjun-chamyal-a4466086/"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://www.linkedin.com/in/rahul-m-0ba16487/",children:"https://www.linkedin.com/in/rahul-m-0ba16487/"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsx)(n.p,{children:"Before applying for the Web3 Foundation Grant, the Zeeve team has built a DevOps automation for Polkadot and other substrate chains, also created substrates based relay chains:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Automated Polkadot deployments including validator nodes, archive nodes ",(0,s.jsx)(n.a,{href:"https://www.zeeve.io/blockchain-protocols/deploy-polkadot-node/",children:"here"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Automated Kusama deployments including validator nodes, archive nodes ",(0,s.jsx)(n.a,{href:"https://www.zeeve.io/blockchain-protocols/deploy-kusama-node/",children:"here"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Created a relay chain on substrate with some customisations done at the core to accommodate the tokenomics and custom reward mechanism ",(0,s.jsx)(n.a,{href:"https://axscan.axiacoin.network/#/explorer",children:"here"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Published a ",(0,s.jsx)(n.a,{href:"https://www.zeeve.io/blog/how-to-use-substrate-to-create-parachains-in-polkadot/",children:"blog post"})," about the usage and implementation of parachains"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The focus for Zeeve will be automating the parachain deployments, dedicated node setups and help with faster testing with zombie-net."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Spoke with David Hawig, Richard Casey and Gautam Dhameja from the Parity team regarding the development of Zeeve and the Web3 Grant application"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Total Estimated Duration:"})," 4 months"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 4 FTE"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Total Costs:"})," 30,000 USD."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-1--implement-core-zombie-net-automation",children:"Milestone 1 \u2014 Implement Core Zombie-net Automation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Estimated duration:"})," 60 days"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 4"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 20,000 USD"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"GPLv3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})," that explains how a user can (for example) create a new Substrate based Zombie-net nodes and initiate testing, which will show how the new functionality works."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(n.td,{children:"Standalone Executable"}),(0,s.jsx)(n.td,{children:"Will provide standalone executable that start the GUI service and other corresponding"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Initial Automation"}),(0,s.jsx)(n.td,{children:"We will build the core GUI driven automation to create and deploy the substrate based Zombie-net configurations including relaychain and parachain configurations."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Configuration"}),(0,s.jsx)(n.td,{children:"Parachain configuration is critical and complicated, we will provide the GUI based pick and choose for genesis parameters and chain configs to start with parachain setup for the desired Zombie-net"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(n.td,{children:"Node type support"}),(0,s.jsx)(n.td,{children:"Implement setup of all node types including Full node, Validator node and Collator node for the respective relay chain and parachain within the configured Zombie-net."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(n.td,{children:"Cloud agnostic setup"}),(0,s.jsx)(n.td,{children:"The larch setup will be cloud agnostic and it can be installed on the choice of cloud (Linux x86_64 based), instructions and documentation will be provided for the same."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"5."}),(0,s.jsx)(n.td,{children:"Network Management"}),(0,s.jsx)(n.td,{children:"Implement the larch tool with a user-friendly interface, features for execution info, network deletion, template cloning, and management, along with robust error handling, for seamless setup of networks and templates."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"milestone-2--monitoring",children:"Milestone 2 \u2014 Monitoring"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Estimated Duration:"})," 20 days"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FTE:"})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Costs:"})," 10,000 USD"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(n.th,{children:"Deliverable"}),(0,s.jsx)(n.th,{children:"Specification"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(n.td,{children:"License"}),(0,s.jsx)(n.td,{children:"GPLv3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(n.td,{children:"Documentation"}),(0,s.jsxs)(n.td,{children:["We will provide both ",(0,s.jsx)(n.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(n.strong,{children:"tutorial"})," that explains how a user can (for example) create a new Zombie-net, test and setup monitoring for it, which will show how the new functionality works."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(n.td,{children:"Testing Guide"}),(0,s.jsx)(n.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,s.jsx)(n.td,{children:"Standalone Executable"}),(0,s.jsx)(n.td,{children:"Will provide standalone executable that start the GUI service and other corresponding"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(n.td,{children:"Article"}),(0,s.jsxs)(n.td,{children:["Using our PR channels, we will publish an ",(0,s.jsx)(n.strong,{children:"article"})," that explains the high-level overview of automation as part of the grant, followed by a set of extensive examples."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(n.td,{children:"Design monitoring strategy"}),(0,s.jsx)(n.td,{children:"The Zombie-net doesn't provide any embedded monitoring tool, we will with the zombie-net setup automation, automatically setup prometheus and Grafana while configuring the zombie-net."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(n.td,{children:"Setup Dashboard"}),(0,s.jsx)(n.td,{children:"The deployment done for Prometheus and Grafana will show standard Dashboard having system resource and zombie-net specific details shown on the aforementioned Grafana GUI Dashboard."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(n.td,{children:"Activity"}),(0,s.jsx)(n.td,{children:"The system will log all the activities and operations perform by the different users."})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"application-mockup",children:"Application Mockup"}),"\n",(0,s.jsx)(n.p,{children:"Following are the mockups for high-level application operations, these are subject to change during development basis the requirement and behaviour."}),"\n",(0,s.jsx)(n.h3,{id:"dashboard",children:"Dashboard"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Dashboard.png",alt:"Dashboard"})}),"\n",(0,s.jsx)(n.h3,{id:"zombie-net-network-list",children:"Zombie-net network list"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/My-Networks.png",alt:"List all created Zombie networks"})}),"\n",(0,s.jsx)(n.h3,{id:"create-a-new-zombie-net",children:"Create a new Zombie-net"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Create-Networks-Settings.png",alt:"Zombie-net Settings"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Create-Networks-Relaychain-Configuration.png",alt:"Zombie-net Relaychain Configuration"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Create-Networks-Parachain-Configuration.png",alt:"Zombie-net Parachain configuration"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Create-Networks-Collator-Configuration.png",alt:"Zombie-net Collator configuration"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Create-Networks-HRMP-Channels.png",alt:"Zombie-net HRMP configuration"})}),"\n",(0,s.jsx)(n.h3,{id:"relaychain-parachain-specfile-and-wasm-templates",children:"Relaychain, Parachain, specfile and WASM templates"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Templates-Configuration.png",alt:"Zombie-net Configuration templates"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Templates-Managment.png",alt:"Zombie-net WASM image templates"})}),"\n",(0,s.jsx)(n.h3,{id:"user-activity-and-operation-history",children:"User activity and operation history"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:"https://larch.zeeve.net/images/Activity.png",alt:"User activity and operation history"})}),"\n",(0,s.jsx)(n.h2,{id:"technology-stack",children:"Technology Stack"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"ReactJS"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"NodeJS"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Apache/Nginx"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"TailwindCSS"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"System Scripts"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Kubernetes/Podman/Docker"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Prometheus, Grafana, Telegraph"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We will promote the project by giving talks in the community, writing tutorials and videos."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We will spread the project in Zeeve's developer and client community of 15K+"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We will also work closely with the developers and clients of the Parity ecosystem for getting feedback and refine our project."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Our long-term plan is to make the tool become one of the default Parachain tools for the Parity ecosystem."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"We will also add more followup, integration with the Zeeve enterprise platform allowing more flexibility for enterprises to built and deploy use case or application specific parachains."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website / Parity team / a conversation with Richard Casey."]})]})}function c(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(96540);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);