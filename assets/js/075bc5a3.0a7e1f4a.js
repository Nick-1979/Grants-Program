"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[4925],{86637:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"applications/Maki","title":"Maki","description":"- Team Name: Cyril Carlier (Individual)","source":"@site/applications/Maki.md","sourceDirName":"applications","slug":"/applications/Maki","permalink":"/applications/Maki","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/Maki.md","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),r=n(28453);const o={},a="Maki",l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Overview :",id:"overview-",level:4},{value:"Maki&#39;s Functions :",id:"makis-functions-",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement Voter functions",id:"milestone-1--implement-voter-functions",level:3},{value:"Milestone 2 \u2014 Coordinator&#39;s functions",id:"milestone-2--coordinators-functions",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"maki",children:"Maki"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," Cyril Carlier (Individual)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," 0x8a0cFA1DE5c26e3Cd553F33Dc560fBfa5267867C (ERC-20 USDC)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 1"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status:"})," Terminated"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:["This application is a response from the ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/anti-collusion_infrastructure.md",children:"anti-collusion infrastructure RFP"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["Maki aims to be a simple MACI implementation for the Polkadot eco-system, similar to the existing one on Ethereum (",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci",children:"MACI"}),")"]}),"\n",(0,s.jsxs)(t.p,{children:["Maki is an ink! smart contract that implements a minimal anti-collusion infrastructure as specified in the following ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/9b1b1a631090ee89d2bc12f4bcef7763e42caef0/specs",children:"specifications"})," and derived from ",(0,s.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"this ethresearch post"}),". This means that most of the project details are based on the researches done on ",(0,s.jsx)(t.a,{href:"https://ethresear.ch/t/minimal-anti-collusion-infrastructure/5413",children:"MACI"})," and the specifications. Things may differ by making Maki a more simple version of MACI."]}),"\n",(0,s.jsx)(t.p,{children:"As explained in the RFP, the smart contract aims to allow users to vote on a quadratic voting and avoid/minimize the risk of collusion, keep the votes anonymous and allow the users to change their votes until the voting process ends."}),"\n",(0,s.jsx)(t.p,{children:"Governance is an important part of Polkadot and (even more for now I'd say) Kusama, while a a lot of use cases of governance mechanisms are already implemented and running on the ecosystems (via pallets and smart contracts), a voting system for quadratic voting, anonymous voting and anti-collusion is not available yet.\nThat is why the project fits well for Polkadot and Kusama."}),"\n",(0,s.jsx)(t.p,{children:"I'm interested in this project because governance is a major component in decentralized ecosystems and adding more needed possibilities to the panel of voting mechanism of Polkadot and Kusama seems important to me.\nWhile for now I'm unsure the current projects on Polkadot/Kusama needs such mechanism, it is obvious some will need such anti-collusion and anonymous voting for its users."}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(t.p,{children:"Following the specifications of MACI as linked above, here is an overview of the architecture and core functionalities of Maki."}),"\n",(0,s.jsx)(t.p,{children:"Maki is a smart contract that allow its users to vote while making collusion among participant difficult (if the operator is honest) and retain censorship resistance, correct execution and anonymity of votes."}),"\n",(0,s.jsxs)(t.p,{children:["Maki has two kind of users: one ",(0,s.jsx)(t.strong,{children:"operator"})," and 0..n ",(0,s.jsx)(t.strong,{children:"voter(s)"})," (also called user here under)."]}),"\n",(0,s.jsx)(t.p,{children:"The operator role is to deploy the contract (and publish his public key, known by all), start the sign-up period (which is done when the contract is deployed), process all the voters commands, generate the result of each commands, tally the votes and generate a zk-SNARK proof that the result is valid."}),"\n",(0,s.jsx)(t.p,{children:"The voter role is to sign-up for a vote and then vote."}),"\n",(0,s.jsx)(t.p,{children:"Secrecy of the votes are possible by using cryptographic operations. As described in the MACI specs, each users and the coordinator have a key-pair used to publish encrypted messages and for the coordinator to decrypt those messages."}),"\n",(0,s.jsx)(t.h4,{id:"overview-",children:"Overview :"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:"https://i.imgur.com/n4tmk6p.png",alt:""})}),"\n",(0,s.jsx)(t.h4,{id:"makis-functions-",children:"Maki's Functions :"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"signUp"})," allows a user to register for voting by sending his public key to the contract. There is no need for a given user to call this function multiple times."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"publishMessage"})," allows a user to vote. A voter may use this multiple time to change his vote options, as long as the vote in not ended."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"processMessages"})," function called by the coordinator to process all the users' messages, update the state root and provide a zk-snark proof."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"proveVoteTally"})," to publish the vote result and the zk-snark proof of it. Called by the coordinator. Can only be called once the vote ended."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"verifyVoteTally"})," to verify that the generated zkSnark proof is valid."]}),"\n",(0,s.jsx)(t.p,{children:"Public functions are needed for the coordinator to process the votes off-chain (basically the contract's state such as stateTree, messageTree, etc.) and the voter to get the coordinator's key."}),"\n",(0,s.jsxs)(t.p,{children:["Besides the contract, we will provide two circuits to build the zk-Snark proof off-chain, one for the correctness of message processing (",(0,s.jsx)(t.code,{children:"proveStateCorrectness"}),") and one for the vote tallying (",(0,s.jsx)(t.code,{children:"proveVoteTallyCorrectness"}),"). The circuits will be written in ",(0,s.jsx)(t.a,{href:"https://docs.circom.io/",children:"circom"})," and it will be used through a script that build and execute the compiled circuit. This is needed for the coordinator's functions ",(0,s.jsx)(t.code,{children:"processMessages"})," and ",(0,s.jsx)(t.code,{children:"proveVoteTally"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Maki has two merkle roots, one for the ",(0,s.jsx)(t.code,{children:"messageTree"})," (which gathers submitted messages) and one for the ",(0,s.jsx)(t.code,{children:"stateTree"})," (which gathers the mapping between the user public keys and the votes)."]}),"\n",(0,s.jsx)(t.p,{children:"Maki will be implemented as an ink! smart contract, so it will be developed in Rust with ink! library."}),"\n",(0,s.jsxs)(t.p,{children:["Maki will ",(0,s.jsx)(t.em,{children:"not"})," provide out-of-the-box choices of circuits used for zk-SNARK proof (as it may vary depending on the nature of the voting system), nor choices of the type of voting mechanism (non-quadratic votes, conviction votes, different tallying (such as what can be found on Polkadot and Kusama referenda), etc.). However this could be part of a maintenance program, a future plan, and/or another team may develop these features to meet their needs."]}),"\n",(0,s.jsxs)(t.p,{children:["The goal being to have a functioning contract, the circuit is not my main concern here.Therefore, an existing circuit will be reused (in Typescript) - most likely one that is implemented by ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci",children:"MACI"}),". I'll give full credits to their implementation, even if this requires some adaptations on my end."]}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(t.p,{children:"Maki can be used in any blockchain that supports ink! smart contracts."}),"\n",(0,s.jsx)(t.p,{children:"It can be reused - as provided or modified - by any blockchain, dApp, infrastructures, ... that wishes to provide a way to make quadratic votes for its users."}),"\n",(0,s.jsx)(t.p,{children:"I'm not aware of any similar project on Substrate. Despite that there are different existing voting mechanisms on Polkadot/Kusama, this one is the only one that would provide a quadratic, provable, anonymous and anti-collusion voting system."}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Cyril Carlier"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Cyril Carlier"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:cyrilcarlier@hotmail.com",children:"cyrilcarlier@hotmail.com"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsx)(t.p,{children:"Individual / Sole Proprietor"}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(t.p,{children:"I'm a software developer with 5 years of relevant experience in C#/.Net, Java(with Spring/Hibernate), Typescript, React, C++, SQL and Angular, working mainly on DDD projects and lower-level projects (such as background-jobs services, multi-thread related projects). I have a master degree in Computer Science (University of Namur - Belgium)."}),"\n",(0,s.jsx)(t.p,{children:"Here is an overview of different relevant project I've worked / working on :"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"http://www.polkauction.io/",children:"Polk-auction"}),": A project funded by this program (",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/2606f01f2fed14bb358560c8ececc9ad05e40bb8/applications/polk-auction.md",children:"polk-auction application"}),") which is a project that allow Polkadot and Kusama end-users to have a concise, simple an easy to understand view of the parachain, auction and crowdloan state of the Dotsama's ecosystem. Focused on on-chain data with some useful and relevant off-chain information surrounding the state of Polkadot / Kusama. While the project is online, I don't consider it \"finished\" as there is still a lot of things to add and enhance on Polk-auction."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Project with background processing of files and websocket messaging for communication between multiple applications."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Different DDD projects with back-end(s) (HTTP API, written with .NetCore and Entity) and UI app(s) (web-app), multiple databases and mechanisms for back-end communication if/when needed."}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Multiple other projects and PoC, mostly with backend technologies (Java, C++, C#)"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If anyone on your team has applied for a grant at the Web3 Foundation previously, please list the name of the project and legal entity here."}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/CrommVardek",children:"https://github.com/CrommVardek"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/cyril-carlier/",children:"https://www.linkedin.com/in/cyril-carlier/"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(t.p,{children:["As mentioned, this application is a response from the ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/rfps/open/anti-collusion_infrastructure.md",children:"anti-collusion infrastructure RFP"})]}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 15 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  0.15 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," $9,000"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1--implement-voter-functions",children:"Milestone 1 \u2014 Implement Voter functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 9 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  0.1 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 3,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"MIT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a user can deploy the contract and use its functions. References, such as the MACI research page or the specs of MACI implementation, will be provided."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"Maki: constructor and internal state"}),(0,s.jsx)(t.td,{children:"Contract internal state needed to work properly and its constructor"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(t.td,{children:"Maki: signUp function"}),(0,s.jsx)(t.td,{children:"User function to register for the vote (ink!)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(t.td,{children:"Maki: publishMessage function"}),(0,s.jsx)(t.td,{children:"User function to vote (ink!)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(t.td,{children:"Maki: processMessage function"}),(0,s.jsx)(t.td,{children:"Coordinator function to proves that the messages have been correctly processed"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Note: 0d. not included, because it would be overkill to setup a whole environment on a docker image just to deploy the contract while other resources already exist for that."}),"\n",(0,s.jsx)(t.p,{children:"Note: As the implementation is based on others work (research and specification), we will give credits and link the needed parts of it."}),"\n",(0,s.jsx)(t.h3,{id:"milestone-2--coordinators-functions",children:"Milestone 2 \u2014 Coordinator's functions"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," 6 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  0.3 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 6,000 USD"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"MIT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsxs)(t.td,{children:["We will provide both ",(0,s.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,s.jsx)(t.strong,{children:"tutorial"})," that explains how a user can deploy the contract and use its functions. References, such as the MACI research page or the specs of MACI implementation, will be provided."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsxs)(t.td,{children:["We will publish a Medium ",(0,s.jsx)(t.strong,{children:"article"})," and the same article on SubSocial to explain what is Maki. The articles will be referenced on Reddit (/r/Kusama and /r/Polkadot) and on diverse Discord Server related to Polkadot (mostly the important and official ones)."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"Maki: proveVoteTally function"}),(0,s.jsx)(t.td,{children:"Coordinator function to prove the result of the vote tally on-chain (ink!)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,s.jsx)(t.td,{children:"Maki: verifyVoteTally function"}),(0,s.jsx)(t.td,{children:"Function to verify the result of the vote tally and the proof of it (ink!)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,s.jsx)(t.td,{children:"Circuits"}),(0,s.jsxs)(t.td,{children:["Circuit used to generate the zk-Snark (in TypeScript and Circom)  - this will be based (if not reused) on this work ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/master/circuits/ts",children:"MACI"})," and ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/master/circuits/circom",children:"MACI"}),". One circuit for proveStateCorrectness and one for proveVoteTallyCorrectness functions."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,s.jsx)(t.td,{children:"Votes Verifier"}),(0,s.jsxs)(t.td,{children:["Verifier contract/function (in Rust/ink!) to verify that the proof is correct - this will be based on this work ",(0,s.jsx)(t.a,{href:"https://github.com/privacy-scaling-explorations/maci/tree/master/circuits/ts",children:"MACI"}),". The verifier will be used by Maki"]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"Note: 0d. not included, because it would be overkill to setup a whole environment on a docker image just to deploy the contract while other resources already exist for that."}),"\n",(0,s.jsx)(t.p,{children:"Note: As the implementation is based on others work (research and specification), we will give credits and link the needed parts of it."}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(t.p,{children:"I plan to deploy this contract on one of the parachain (for example on Shiden) of Kusama to ask the community what would be their preferred choice for the next development/feature/changes of Maki."}),"\n",(0,s.jsx)(t.p,{children:"Which led us to the long-term plan... That would be:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Add a simple UI/library (in Typescript) to interact with the contract easily.\nPlease include here."}),"\n",(0,s.jsx)(t.li,{children:"Provide different circuits for the proof"}),"\n",(0,s.jsx)(t.li,{children:"Provide a way to configure the contract to allow non-quadratic votes, or for example conviction votes"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"These are just ideas. I would also like for the community (developers) to participate, re-use, enhance or create their own version of Maki."}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"}),"\nI've been part of the program once (",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/2606f01f2fed14bb358560c8ececc9ad05e40bb8/applications/polk-auction.md",children:"polk-auction application"}),")"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);