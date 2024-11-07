"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[25332],{78989:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"applications/substrate-tutorials","title":"Substrate Tutorials","description":"- Team Name: Rusty Crewmates","source":"@site/applications/substrate-tutorials.md","sourceDirName":"applications","slug":"/applications/substrate-tutorials","permalink":"/applications/substrate-tutorials","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/substrate-tutorials.md","tags":[],"version":"current","frontMatter":{}}');var i=s(74848),n=s(28453);const l={},a="Substrate Tutorials",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - Rework the repository architecture",id:"milestone-1---rework-the-repository-architecture",level:3},{value:"Milestone 2 - Add more basic tutorials",id:"milestone-2---add-more-basic-tutorials",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const t={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"substrate-tutorials",children:"Substrate Tutorials"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Team Name:"})," Rusty Crewmates"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Payment Address:"})," Payment in DAI at address 0x157018C40D7BCcf3A2683fbd7E9D9A2E9f60eF77 on the ethereum mainet"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsxs)(t.strong,{children:[(0,i.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.p,{children:"We want to create a series of Substrate Tutorials."}),"\n",(0,i.jsx)(t.p,{children:"One of the main issues in the Substrate ecosystem right now is the lack of developers. This is because Rust is hard to learn and so is Substrate. Thankfully, Rust has a ton of great documentation and tutorials. But Substrate doesn't."}),"\n",(0,i.jsx)(t.p,{children:"Rusty Crewmates is already training Rust developers to Substrate, then finding them positions or bounties. In order to scale this process we started to develop this exact kind of tutorials and open sourced it. Now we would like to gain Parity\u2019s support in order to make those tutorials the referefence for anybody willing to get his hands on Substrate."}),"\n",(0,i.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/rusty-crewmates/substrate-tutorials",children:"https://github.com/rusty-crewmates/substrate-tutorials"}),(0,i.jsx)(t.br,{}),"\n","This repository contains the current state of our tutorials. We open sourced it last month and it has already been used and starred by a dozen people."]}),"\n",(0,i.jsx)(t.p,{children:"It consists of multiple pairs of exercise and solution branches. Each exercise asks the user to fill in some gaps in the code, until all tests pass."}),"\n",(0,i.jsx)(t.p,{children:"Those exercises are designed to teach about Substrate features and good practices but also some core blockchain mechanisms. As an example you will learn basic pallet building by writing an NFT pallet and pallet coupling by building the marketplace to sell those NFTs."}),"\n",(0,i.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsxs)(t.p,{children:["Right now, the core resource for developers keen to discover Substrate - which is provided by Parity - can be found here: ",(0,i.jsx)(t.a,{href:"https://docs.substrate.io/tutorials/v3/",children:"https://docs.substrate.io/tutorials/v3/"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Only the first four tutorials are general purpose tutorials, and they only consist in copying and pasting lines of code, which turns out to be irrelevant when applying for actual jobs. Realistically, most companies working with Substrate want to focus on their own project and move on quickly. They all need experienced developers and are not confident with hiring juniors and training them, making it even harder for newcomers to gain real world experience."}),"\n",(0,i.jsx)(t.p,{children:"To break this deadlock, we want to bring more exercises to our fellow Substrate enthusiasts. Exercises that force them to think and try stuff by themselves, skyrocketing their learning curves."}),"\n",(0,i.jsx)(t.p,{children:"Our project aims to make it easier for new developers to enter the Substrate space, so beginners and intermediate Substrate developers are our primary target."}),"\n",(0,i.jsx)(t.p,{children:"On another hand it will greatly help Substrate based chains to recruit and train developers, so they can be seen as our secondary target. Moreover we got a lot of positive feedback from projects in the ecosystem. We can name Ternoa, Subql, Nodle, GameDAO, Edgeware, T3rn, Phala Network. All of them were really interested in a solution to train new Substrate developers.\nThis learning content will fill the missing block between Parity's documentation and tutorials, and the Substrate receipt repository, which is only relevant for developers that already master Substrate core features and want to implement a specific business logic. This repository has recently been taken over by Edgeware, with whom we are working closely at the moment. We expect to be able to create good synergies between all those resources, without duplication because they all are useful, but at different moments in the Substrate developer\u2019s journey."}),"\n",(0,i.jsx)(t.p,{children:"Our repository being open source, we can attest to a real interest for this project from the community: open sourced two month ago, we already have 25 stars and a dozen of forks, meaning that at least a dozen people started a tutorial. If it means a dozen more Substrate developers on the market, it's already a big win for the ecosystem."}),"\n",(0,i.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Timoth\xe9e Delabrouille"}),"\n",(0,i.jsx)(t.li,{children:"Charlie Armstrong"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Name:"})," Timoth\xe9e Delabrouille"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Contact Email:"})," ",(0,i.jsx)(t.a,{href:"mailto:timothee.delabrouille@gmail.com",children:"timothee.delabrouille@gmail.com"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Website:"})," ",(0,i.jsx)(t.a,{href:"https://rustycrewmates.com/",children:"https://rustycrewmates.com/"})]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Address:"})," 78 Avenue des Champs-\xc9lys\xe9es, Bureau 562, 75008 Paris FRANCE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Registered Legal Entity:"})," Rusty Crewmates SAS"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsx)(t.p,{children:"Timoth\xe9e Delabrouille has been working with substrate for the past year at Soramitsu/PolkaSwap and Ternoa. He implemented bridges to Bitcoin, using InterLay protocol, and to Ethereum, using ChainSafe protocol. Also worked with TEE, writing an IntelSGX application, thanks to IntegriTEE project, that interacts with a Substrate chain through a light client running inside the enclave."}),"\n",(0,i.jsx)(t.p,{children:"Recently he has been working on a Starknet based application, written in Cairo (the Starknet programing language). He is also giving workshops, endorsed by Starkware, to onboard new developers on this difficult and unusual language. One took place at DevCon Amsterdam 2022, another will took place in May at Activate Build Miami."}),"\n",(0,i.jsx)(t.p,{children:"Charlie Armstrong has a strong background in C, C++ and all sort of different languages and even some electronics.\nHe is currently helping with automatisation of neural cells analysis in a research project on spinal cells regeneration.\nHe recently learned Rust and is going to follow those tutorials as a Beta tester in order to currate them with relevant feedbacks."}),"\n",(0,i.jsx)(t.p,{children:"Together Timoth\xe9e and Charlie are Rusty Crewmates, a company that trains Rust developers to Substrate and onboards them on exciting projects. Started in January 2022, they have trained three developers so far, currently working for Ternoa, Subql and Edgeware/Kabocha."}),"\n",(0,i.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/rusty-crewmates",children:"https://github.com/rusty-crewmates"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/rusty-crewmates/substrate-tutorials",children:"https://github.com/rusty-crewmates/substrate-tutorials"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/tdelabro",children:"https://github.com/tdelabro"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/charMstr",children:"https://github.com/charMstr"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/timotheedelabrouille/",children:"https://www.linkedin.com/in/timotheedelabrouille/"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.linkedin.com/in/charlie-armstrong-b15130227/",children:"https://www.linkedin.com/in/charlie-armstrong-b15130227/"})}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/rusty-crewmates/substrate-tutorials",children:"https://github.com/rusty-crewmates/substrate-tutorials"})}),"\n",(0,i.jsxs)(t.p,{children:["Here is a link to a list of ideas for new tutorials:\n",(0,i.jsx)(t.a,{href:"https://github.com/rusty-crewmates/substrate-tutorials/issues/3",children:"https://github.com/rusty-crewmates/substrate-tutorials/issues/3"})]}),"\n",(0,i.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," around 4 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"})," 0,5 FTE"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Costs:"})," 25,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1---rework-the-repository-architecture",children:"Milestone 1 - Rework the repository architecture"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  0,5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 5,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"While building the first four exercises we tried different ways to organise the repository and chosed to create one branch per exercise and one branch per solution."}),"\n",(0,i.jsxs)(t.p,{children:["It progressively appeared that it was not scaling very well and that it would make upgrading the exercises to new Substrate releases really time consuming. So before adding any new exercises we want to put all of them in one single ",(0,i.jsx)(t.code,{children:"exercises"})," branch."]}),"\n",(0,i.jsx)(t.p,{children:"Moreover those exercises are just pallets so far, without any requirements for runtime, so we can get rid of the runtime each one of them implements. Instead we are going to add one minimalistic empty runtime, which students can customize at will if they want to run their exercise pallets, along with an exercise teaching how to implement a Substrate runtime."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["For each exercise we will provide a ",(0,i.jsx)(t.strong,{children:"README"})," that explains what to do, along with ",(0,i.jsx)(t.strong,{children:"inline instructions"})," for the user to follow in the code files"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsxs)(t.td,{children:["Each exercise will be fully doable with a ",(0,i.jsx)(t.code,{children:"solution"})," branch, passing all tests being the proof"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a docker file that will run all solutions"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsxs)(t.td,{children:["We will provide a ",(0,i.jsx)(t.a,{href:"https://medium.com/",children:"medium"})," article that presents our repository and invites users to learn from it"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsxs)(t.td,{children:["Create ",(0,i.jsx)(t.code,{children:"exercise"})," branch"]}),(0,i.jsx)(t.td,{children:"We will get rid of everything in the runtime that is inherited from the substrate template repository (no license) and which is not needed, leaving only a minimalistic working runtime implementation"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"pallet testing"})]}),(0,i.jsxs)(t.td,{children:["We will merge the ",(0,i.jsx)(t.code,{children:"ex/pallet_testing"})," branch into the ",(0,i.jsx)(t.code,{children:"exercises"})," one and adapt it to the new design"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"fungible token"})]}),(0,i.jsxs)(t.td,{children:["We will merge the ",(0,i.jsx)(t.code,{children:"ex/fungible_token"})," branch into the ",(0,i.jsx)(t.code,{children:"exercises"})," one and adapt it to the new design"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"nft"})]}),(0,i.jsxs)(t.td,{children:["We will merge the ",(0,i.jsx)(t.code,{children:"ex/nft"})," branch into the ",(0,i.jsx)(t.code,{children:"exercises"})," one and adapt it to the new design"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"marketplace"})]}),(0,i.jsxs)(t.td,{children:["We will merge the ",(0,i.jsx)(t.code,{children:"ex/marketplace"})," branch into the ",(0,i.jsx)(t.code,{children:"exercises"})," one and adapt it to the new design"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"6."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"runtime"})]}),(0,i.jsx)(t.td,{children:"We will add an exercise explaining how to integrate a pallet into a runtime, compile it and run it. It will come first so students can do this by themselves for any later exercises"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"7."}),(0,i.jsxs)(t.td,{children:["Branch ",(0,i.jsx)(t.code,{children:"solutions"})]}),(0,i.jsxs)(t.td,{children:["We will create a branch ",(0,i.jsx)(t.code,{children:"solutions"})," that mirrors the ",(0,i.jsx)(t.code,{children:"exercises"})," branch, but with working code and all the tests passing"]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2---add-more-basic-tutorials",children:"Milestone 2 - Add more basic tutorials"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated duration:"})," 2 months"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"FTE:"}),"  0,5"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 20,000 USD"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["At this point we want to enrish our repository with exercises allowing to discover and use more of Substrate basics features.",(0,i.jsx)(t.br,{}),"\n","We listed a few of them: mocks, running runtime benchmarks to set weights, genesis config, hooks, imbalances, external workers.",(0,i.jsx)(t.br,{}),"\n","Any Substrate developer will end up using those at some point."]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(t.td,{children:"License"}),(0,i.jsx)(t.td,{children:"Apache 2.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(t.td,{children:"Documentation"}),(0,i.jsxs)(t.td,{children:["For each exercise we will provide a ",(0,i.jsx)(t.strong,{children:"README"})," that explains what to do, along with ",(0,i.jsx)(t.strong,{children:"inline instructions"})," for the user to follow in the code files"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(t.td,{children:"Testing Guide"}),(0,i.jsxs)(t.td,{children:["Each exercise will be fully doable with a ",(0,i.jsx)(t.code,{children:"solution"})," branch, passing all tests being the proof"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(t.td,{children:"Docker"}),(0,i.jsx)(t.td,{children:"We will provide a docker file that will run all solutions"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,i.jsx)(t.td,{children:"Article"}),(0,i.jsxs)(t.td,{children:["We will provide a ",(0,i.jsx)(t.a,{href:"https://medium.com/",children:"medium"})," article that presents the new exercises and invites users to learn from it"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"genesis_config"})]}),(0,i.jsx)(t.td,{children:"We will add a pallet that will teach users how to create a genesis config for their pallets"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"mocks"})]}),(0,i.jsx)(t.td,{children:"We will add a pallet that will teach users how to mock a pallet in order to test it without overhead"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"weight"})]}),(0,i.jsx)(t.td,{children:"We will add a pallet that will teach users how to weights to their extrinsics by runing runtime benchmarks"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"4."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"hooks"})]}),(0,i.jsx)(t.td,{children:"We will add a pallet that will teach users how to add usefull hooks to a pallet"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"5."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"imbalances"})]}),(0,i.jsx)(t.td,{children:"We will add a pallet that will teach users about a recuring feature of Substrate's architecture, imbalance. They will understand its role and get familiar with the associated functions"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"right"},children:"6."}),(0,i.jsxs)(t.td,{children:["Exercise ",(0,i.jsx)(t.code,{children:"external_workers"})]}),(0,i.jsx)(t.td,{children:"We will add a pallet that will teach users how to make use of external workers"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(t.p,{children:"We intend to use this tutorials to continue to train developers internaly.\nWe will promote as Rusty Crewmates on multiple platforms (Linkedin, Twitter, Reddit)."}),"\n",(0,i.jsxs)(t.p,{children:["We want to make it a trully colaborative projet where everybody can contribute and add more ressources for newcomers.",(0,i.jsx)(t.br,{}),"\n","We may ask for a continuation grant either to develop more exercises ourselves or to redistribute to developers with an advanced Substrate level that are eager to contribute.",(0,i.jsx)(t.br,{}),"\n","We may ask the Edgeware DAO for a complementary grant, as we are already working with them and they are really supportive of any project that gives back to the Substrate ecosystem. This would be coherent with them recentrly taking the responsability of Substrate Recipes from Josh Orndorff."]}),"\n",(0,i.jsxs)(t.p,{children:["On the long term we want this repository to be funded by the Substrate ecosystem as a whole, not just Parity. The feedbacks we got from companies building in the ecosystem were really good and we think some will be happy to sponsor the project with a yearly contribution. The counterparty would be having their logo and a link to their respective websites and hiring pages on our main ",(0,i.jsx)(t.code,{children:"README.md"}),". Visibility against funds. We can even imagine some companies sponsoring by themselves an exercise related to their own specific product, and having their communication elements included on the subject of this exercise.\nWe saw every Substrate companies struggling to hire, our bet is that they will be happy to have their links on a repository which becomes an obvious step for everybody learning Substrate."]}),"\n",(0,i.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website"]}),"\n",(0,i.jsxs)(t.p,{children:["The work we have already done so far can be found here: ",(0,i.jsx)(t.a,{href:"https://github.com/rusty-crewmates/substrate-tutorials",children:"https://github.com/rusty-crewmates/substrate-tutorials"}),(0,i.jsx)(t.br,{}),"\n","No other teams have contributed financially to this project.",(0,i.jsx)(t.br,{}),"\n","No other grants have been apllied for at the moment, but we had several talks with people at Edgeware DAO whom were willing to support this project to apply for some funds of them."]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>a});var r=s(96540);const i={},n=r.createContext(i);function l(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);