"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[82492],{39154:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"applications/Validator_Monitoring_Service","title":"Validator Monitoring Service","description":"- Team Name: P2P.ORG Validator","source":"@site/applications/Validator_Monitoring_Service.md","sourceDirName":"applications","slug":"/applications/Validator_Monitoring_Service","permalink":"/applications/Validator_Monitoring_Service","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/Validator_Monitoring_Service.md","tags":[],"version":"current","frontMatter":{}}');var s=i(74848),r=i(28453);const a={},o="Validator Monitoring Service",l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview and Ecosystem Fit",id:"overview-and-ecosystem-fit",level:3},{value:"Potential users",id:"potential-users",level:3},{value:"Project Details",id:"project-details",level:3},{value:"System workflow",id:"system-workflow",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview",level:3},{value:"Milestone 1 \u2014 Events and Dashboard UX",id:"milestone-1--events-and-dashboard-ux",level:3},{value:"Milestone 2 \u2014 Expand the functionality",id:"milestone-2--expand-the-functionality",level:3},{value:"<strong>Referral Program (optional)\xa0\ud83d\udcb0</strong>",id:"referral-program-optional",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"validator-monitoring-service",children:"Validator Monitoring Service"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," ",(0,s.jsx)(t.a,{href:"http://p2p.org/",children:"P2P.ORG"})," Validator"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 0xE22211Ba98213c866CC5DC8d7D9493b1e7EFD25A (USDC)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Level:"})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(t.p,{children:"Our application seeks to fund the development of a monitoring platform for validator operators."}),"\n",(0,s.jsx)(t.h3,{id:"overview-and-ecosystem-fit",children:"Overview and Ecosystem Fit"}),"\n",(0,s.jsx)(t.p,{children:"Validator Monitoring Service is a monitoring platform designed to track the performance of validators in the Polkadot and Kusama networks."}),"\n",(0,s.jsx)(t.p,{children:"In the existing ecosystem of the Polkadot network, there is a lack of comprehensive historical information available about how validators perform as ParaValidators and their participation in consensus. Public scanners like Subscan offer limited insights into validator performance, with scarce information such as earned points and rewards displayed only after an era's end. This limitation prevents the use of existing scanners as real-time monitoring tools."}),"\n",(0,s.jsx)(t.p,{children:"However, active participation in consensus is crucial for upholding network security. Each consensus round relies on obtaining 2/3 precommits, and validators failing to reach this threshold cannot contribute to blockchain security. If numerous validators encounter participation issues, it can reduce block production speed, adversely affecting the overall network."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"We truly believe that every validator operator should understand their role and significance in ensuring blockchain security."})}),"\n",(0,s.jsx)(t.p,{children:"Furthermore, the information provided by public scanners predominantly focuses on individual addresses and specific events. At the same time, it allows for retrieving on-chain data such as reward payments and rewards points for a particular account. Scanners generally lack the capability to compare these rewards with those of other validators. This limitation hinders a comprehensive understanding of a chosen validator's performance relative to others in the network."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Our monitoring service effectively addresses this challenge by providing real-time data on validator performance and enabling performance comparisons with other validators."})}),"\n",(0,s.jsxs)(t.p,{children:["Moreover, besides public scanners, there are several existing solutions available for validator monitoring, such as ",(0,s.jsx)(t.a,{href:"https://github.com/SimplyVC/panic_polkadot",children:"P.A.N.I.C."}),", ",(0,s.jsx)(t.a,{href:"https://github.com/galacticcouncil/polkalert",children:"Polkalert"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/nodebreaker0-0/substrate/tree/prometheus_v0.3",children:"B-Harvest"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/stakezone/nmonpolkadot",children:"nmonpolkadot"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/ironoa/polkadot-k8s-monitor",children:"Polkadot-K8s-Monitor"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/polkadot-watcher",children:"Polkadot-Watcher"}),", ",(0,s.jsx)(t.a,{href:"https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot",children:"ex-1KV Telegram Bot"}),", as well as, grant-supported dashboards ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/cyclops.md",children:"Cyclops"}),". Our solution stands out due to several significant differences:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Out-of-the-box Solution:"})," Unlike many existing applications that require hosting arrangements, our platform offers a hassle-free experience. Users can effortlessly try our product and assess its suitability for their needs by simply interacting with our Telegram bot and setting up a live dashboard. This accessibility enhances the popularity and adoption of our solution."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Comprehensive Data:"})," While most solutions provide standard on-chain data such as reward points, reward amounts, and on-chain events like offences or payouts, our platform goes beyond that. We offer unique data, including information on participation in the consensus, the selection of a para-validator, and para-validator points per session (not just per era). This granular data provides users with a more comprehensive understanding of validator performance."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Ongoing Support:"})," Many existing applications are developed by small teams and may need more ongoing support, with some repositories needing to be updated. In contrast, we are one of the largest validators in the network, and we commit to supporting and maintaining our validator monitoring platform. Additionally, we utilize the same system for our internal purposes, ensuring its reliability and continuous improvement."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"potential-users",children:"Potential users"}),"\n",(0,s.jsx)(t.p,{children:"Our monitoring system caters to various parties within the community who can derive significant benefits from its usage:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Validator Operators:"})," Our service is a valuable tool for validator operators, particularly small teams and independent validators who may lack the time and resources to develop their monitoring systems. For instance, meeting the strict requirements of programs like the 1KV program can be challenging for small and independent validators. With our monitoring system, they gain the ability to track an extensive range of metrics. By leveraging our service, validator operators can thrive within the decentralized ecosystem and enhance performance."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Nominators:"})," Nominators play a crucial role in the network by selecting validators to nominate. Our service provides nominators with detailed performance comparisons among different validators. They can evaluate critical metrics such as consensus participation, and block production efficiency relative to other validators. Our service empowers nominators to make informed decisions when choosing validators to nominate, optimizing their returns, and actively contributing to the network's health."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Foundation:"})," By having access to comprehensive information on validator participation in consensus, block production efficiency, and other crucial metrics, the Foundation can identify and address any security vulnerabilities or potential risks promptly. This proactive approach helps to maintain a robust and secure network for all participants. Moreover, the Foundation can offer greater transparency to the community regarding validator performance"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["Lastly, our team possesses extensive experience in maintaining validators within the Polkadot and Kusama networks, and we have developed the necessary monitoring and maintenance tools. ",(0,s.jsx)(t.strong,{children:"We firmly believe that this knowledge should be shared for the benefit of the entire network rather than being kept private."})," Therefore, we seek a grant to further develop our monitoring system and contribute to the network's advancement."]}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(t.p,{children:"We have developed a comprehensive monitoring platform as a service. This platform provides validator operators with an effortless monitoring solution, saving them valuable time and effort. With our service, operators can focus on other critical aspects of validator operations, knowing that their monitoring needs are taken care of."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Our system could be depicted in the following picture:"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_7.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"Our current solution already offers a Grafana instance, which serves as a powerful dashboard. This dashboard displays real-time metrics of validators, enabling users to access and analyze the data easily. To simplify the setup process, we have integrated our platform with a user-friendly Telegram bot, @p2pvalidator_monitoring_bot. Through this bot, users can quickly configure their personal dashboards by selecting the validators they wish to monitor."}),"\n",(0,s.jsx)(t.p,{children:"The live dashboard provides users with a comprehensive overview of all essential metrics related to their validators. These metrics are updated automatically every 20-40 seconds, ensuring real-time visibility into the performance of validators. This rapid update frequency enables users to respond to any changes or issues that may arise promptly."}),"\n",(0,s.jsx)(t.p,{children:"Furthermore, we understand the importance of historical data in analyzing validator behavior and identifying potential issues. Therefore, our platform collects and stores data on all active validators for up to one month. This means that users have access to historical performance data, allowing them to conduct in-depth analyses of their validators over time. Such insights are invaluable for optimizing performance and addressing any emerging concerns."}),"\n",(0,s.jsx)(t.p,{children:"In conclusion, our monitoring platform provides validator operators with a hassle-free solution, streamlining the monitoring process and offering real-time and historical data to support informed decision-making and efficient operations."}),"\n",(0,s.jsx)(t.h3,{id:"system-workflow",children:"System workflow"}),"\n",(0,s.jsx)(t.p,{children:"A user initiates a conversation with a Telegram bot and selects from options such as creating a new dashboard or connecting to support. When the user inputs the validator addresses they wish to monitor on the dashboard, our system verifies the authenticity of these addresses, confirming that they belong to validators. Then, the system generates the dashboard and sends the user their access credentials. Subsequently, the system resets the client's session to prevent potential 'double' events. This involves preserving the user's current position in the workflow, for instance, preventing the triggering of a dashboard deletion before its creation."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_9.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"Upon receiving a user's request to deploy a dashboard, their specified validator addresses are recorded in a key-value file (values.yaml) associated with their Telegram ID and subsequently committed to Git. ArgoCD, set to check the repository every 5 minutes, will recognize if there isn't a Grafana instance associated with the particular Telegram ID and proceed to deploy a new instance. As ArgoCD prepares the dashboard, GitHub Actions concurrently monitors the availability of this new instance. Once the instance is fully operational, GitHub Actions triggers a notification to the client, providing them with their login credentials."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_11.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"Our data collection process is anchored on utilizing exporters from the Blockchain. These exporters operate incessantly, amassing raw data directly from the Blockchain. Each exporter functions as an HTTP web endpoint for the scrapper, supplying plain text with specific metric values. Subsequently, this data is channeled into the Victoria Metrics cluster using VM insert, which timestamps each value. Ultimately, designated data is selected by a specific dashboard (Grafana instance) using VM select."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_8.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:"In our current implementation, we provide insights on the following key metrics:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"General indicators: we track session/era progression and staking data."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_6.png",alt:""})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Validator data per epoch: we provide information on rewards points, active validators, and their position in the active set."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_5.png",alt:""})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Era and epoch points for ParaValidators: we monitor ParaValidator points earned and their relation to the network's average, median, and 95th percentile."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_4.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_3.png",alt:""})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Finality metrics (GRANDPA): we track blocks' prevotes and precommits, and their ratio to ideally processed blocks."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_2.png",alt:""})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://github.com/avtishin/maas/blob/main/pic_1.png",alt:""})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Aleksandr Tishin, product manager, ",(0,s.jsx)(t.a,{href:"https://github.com/avtishin",children:"https://github.com/avtishin"})]}),"\n",(0,s.jsxs)(t.li,{children:["Anton Zhbanov, tech team lead, ",(0,s.jsx)(t.a,{href:"https://github.com/base1217",children:"https://github.com/base1217"})]}),"\n",(0,s.jsxs)(t.li,{children:["Sergey Radchenko, SRE Engineer and Developer, ",(0,s.jsx)(t.a,{href:"https://github.com/SergeyRadchenkoP2P",children:"https://github.com/SergeyRadchenkoP2P"})]}),"\n",(0,s.jsxs)(t.li,{children:["Boris Simonov, SRE Engineer and Developer, ",(0,s.jsx)(t.a,{href:"https://github.com/xxbbxb",children:"https://github.com/xxbbxb"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsx)(t.p,{children:"Project repo:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/p2p-org/polkadot_monitoring_service",children:"https://github.com/p2p-org/polkadot_monitoring_service"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(t.p,{children:"The P2P development team, part of the reputable validator and non-custodial staking platform P2P, is the main driving force behind our monitoring solution. P2P is well-known for its expertise in validating Substrate-based networks such as Polkadot, Kusama, Moonbeam, and Moonriver, as well as other networks like Solana (Lido in Solana) and Cosmos (Neutron)."}),"\n",(0,s.jsxs)(t.p,{children:["As a team, we have already successfully completed a grant for the development of ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Multiblockchain%20ETL.md",children:"Multiblockchain ETL"}),", an indexer specifically designed for substrate-based networks. This indexer allows for the efficient indexing of events, extrinsics, blocks, and staking data from the on-chain environment. We actively maintain and update the Multiblockchain ETL indexer, ensuring its reliability and functionality. The code for this project is publicly available on ",(0,s.jsx)(t.a,{href:"https://github.com/p2p-org/polkadot-profit-transformer",children:"GitHub"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Given P2P's established expertise and solid reputation in the industry, we are well-equipped to carry out further development of our monitoring tool. Our focus remains on delivering a monitoring solution that brings significant benefits to the community, promoting transparency and empowering validator operators and stakeholders."}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Aleksandr Tishin"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:aleksandr.tishin@p2p.org",children:"aleksandr.tishin@p2p.org"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"})," ",(0,s.jsx)(t.a,{href:"http://p2p.org/",children:"p2p.org"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Address:"})," P.O. box 2775, 67 Fort Street, Grand Cayman, KY1-1111, Cayman Islands"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Legal Entity:"})," P2P Staking, a Cayman Islands Company, registration number 381601"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsx)(t.p,{children:"Current service already offers a convenient and user-friendly experience through a Telegram bot named @p2pvalidator_monitoring_bot. This bot serves as the gateway to our comprehensive validator monitoring capabilities, covering various aspects of validator performance."}),"\n",(0,s.jsx)(t.p,{children:"At the core of our product, we have developed an exporter that takes raw data and translates it into a format compatible with Victoria Metrics, our chosen data storage solution. The data is securely stored for one month, during which it is transformed into meaningful metrics. These metrics are then transmitted to Grafana dashboards, providing users with a visually appealing and informative monitoring interface."}),"\n",(0,s.jsx)(t.p,{children:"Through the Telegram bot, users have access to a range of features. On the user's side, they can deploy a personal dashboard, allowing them to monitor their validators efficiently. They also have the ability to destroy their personal dashboard when needed. Additionally, the bot provides support options, enabling users to seek assistance and receive prompt replies."}),"\n",(0,s.jsx)(t.p,{children:"On the admin side, there are several options available for managing the system. These include the ability to deploy/destroy Grafana instances, and ban/unban specific users. Admins can also engage in support-related tasks, such as replying to support inquiries and closing support conversations as necessary."}),"\n",(0,s.jsx)(t.p,{children:"By utilizing our Telegram bot, users can easily interact with our monitoring tool, deploy personalized dashboards, access support, and enjoy a seamless monitoring experience. Meanwhile, admins have the necessary tools to manage the system and provide timely assistance to users efficiently."}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"})," 1.5 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," $29,000"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1--events-and-dashboard-ux",children:"Milestone 1 \u2014 Events and Dashboard UX"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"})," 1.5"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 14,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsx)(t.td,{children:"We will provide a documentation page about how to self-host events exporter, grafana setup dashboard instance."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0c."}),(0,s.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0d."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to run events exporter locally, set up Grafana instance, and auto-removing tool."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"Events exporter"}),(0,s.jsx)(t.td,{children:"We will create an events exporter (all on-chain events) to show events in the dashboard related to the selected validator addresses. This feature will track all on-chain events and present related events in the user's dashboard for their selected validator addresses."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"Telegram bot UI + support chat upgrades"}),(0,s.jsx)(t.td,{children:"We aim to rebuild user inference of a bot to add more interaction opportunities with the service. As well as we will improve communication with support. Instead of the current one-message ticket system, we will implement a more interactive conversation mode allowing for multiple messages dialog."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"Create a landing page"}),(0,s.jsx)(t.td,{children:"We will create a landing page to ease user onboarding to the service."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-2--expand-the-functionality",children:"Milestone 2 \u2014 Expand the functionality"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"})," 1.5"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 15,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"Apache 2.0"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsx)(t.td,{children:"We will provide a tutorial page that explains how a user can set up monitoring for selected validators. We show how our functionality works and give reasoning and explanations for all metrics that are shown to the user."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0c."}),(0,s.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0d."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to self-host the telegram bot and check the functionality."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0e."}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsx)(t.td,{children:"We will publish an article that explains the user flow of our system and promotes using monitoring for validators operators."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"Telegram bot adding alerting based on events"}),(0,s.jsx)(t.td,{children:"We will introduce a feature that allows users to subscribe to specific events. This means users can opt to receive Telegram notifications when their chosen validators receive rewards, are elected into the active set, and more."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"Improve UX Dashboard"}),(0,s.jsx)(t.td,{children:"We plan to streamline Grafana's interface by removing surplus controls, enhancing the quality of our charts, and implementing Kiosk mode. We aim to bolster security through provisioning measures, such as enforcing password changes for users."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"Cover monitoring for parachains"}),(0,s.jsx)(t.td,{children:"We will add the support of the most popular parachains such as Moonbeam, Moonriver, Acala, Karura, Astar, Shiden"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:"Auto-remove instances"}),(0,s.jsx)(t.td,{children:"We will develop a system that identifies and removes inactive Grafana instances."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"referral-program-optional",children:(0,s.jsx)(t.strong,{children:"Referral Program (optional)\xa0\ud83d\udcb0"})}),"\n",(0,s.jsx)(t.p,{children:"Not applicable"}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})}),"\n",(0,s.jsxs)(t.p,{children:["Web3 Foundation Website and previous grants: ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/Multiblockchain%20ETL.md",children:"Multiblockchain ETL"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);