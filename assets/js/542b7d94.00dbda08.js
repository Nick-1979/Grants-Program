"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[6274],{99803:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"applications/ces_data_store","title":"Data Store Pallet","description":"- Team Name: CESS LAB","source":"@site/applications/ces_data_store.md","sourceDirName":"applications","slug":"/applications/ces_data_store","permalink":"/applications/ces_data_store","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/ces_data_store.md","tags":[],"version":"current","frontMatter":{}}');var n=i(74848),r=i(28453);const l={},d="Data Store Pallet",a={},o=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Background",id:"background",level:4},{value:"Current Solution",id:"current-solution",level:4},{value:"Project Details",id:"project-details",level:3},{value:"High level design",id:"high-level-design",level:4},{value:"Typical example",id:"typical-example",level:4},{value:"API specifications of the core functionality",id:"api-specifications-of-the-core-functionality",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Implement Data Store Pallet",id:"milestone-1-implement-data-store-pallet",level:3},{value:"Milestone 2 Implement Custom-built Storage Sidecar Featuring Interaction with Data Store Pallet",id:"milestone-2-implement-custom-built-storage-sidecar-featuring-interaction-with-data-store-pallet",level:3},{value:"Milestone 3 Complete Custom-built Storage Sidecar",id:"milestone-3-complete-custom-built-storage-sidecar",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"data-store-pallet",children:"Data Store Pallet"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Team Name:"})," CESS LAB"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Payment Address:"})," 0x41fC582784745Ec6B4860F47808b988a473fcEFc(USDT)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Level:"})," 1"]}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.h4,{id:"background",children:"Background"}),"\n",(0,n.jsx)(t.p,{children:"As a versatile blockchain framework, Substrate has a variety of modules (a.k.a. pallets) for developers to reuse. From resource management such as accounts and assets to utilities such as random number generators and schedulers, these existing pallets could meet the need of most developers' application scenarios. However, there is still room for improvement."}),"\n",(0,n.jsx)(t.p,{children:"Recently we have a requirement to implement a data storage service on Substrate, and after checking through all existing pallets, we did not find one that meets our need. So we would like to develop a custom pallet to fulfill this purpose."}),"\n",(0,n.jsx)(t.p,{children:"We are not talking about something very niche here. On the contrary, it is a common scenario that an application would continuously consume and generate various data, whether it is system, user, or just temporary levels, during operations. Many dApps have a large number of scenarios that require off-chain data storage services, such as NFTs. The quality of the storage service chosen will directly affect the performance and reliability of the entire application."}),"\n",(0,n.jsx)(t.p,{children:"So we hope to offer Substrate/Polkadot community with pallets (and toolchains) dedicated for storage services that are compatible with current Substrate APIs. So developers only need to add tiny amount of code change to leverage CESS stable and secure data storage. We believe this will further enhance the development experiences when adopting Substrate and enrich the Polkadot ecosystem."}),"\n",(0,n.jsx)(t.h4,{id:"current-solution",children:"Current Solution"}),"\n",(0,n.jsxs)(t.p,{children:["There is only one pallet related to data storage in the existing Substrate FRAME, aka, ",(0,n.jsx)(t.a,{href:"https://paritytech.github.io/substrate/latest/pallet_transaction_storage/index.html",children:"Transaction Storage Pallet"}),". It supports running an IPFS node side-by-side with Substrate and allowing data to be retrieved by IPFS after putting it in Substrate storage. However, its application scope is greatly limited due to its inherent characteristics and several defects in the following aspects."]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Data need to be uploaded to the blockchain network. Although this data is not actually stored on the chain, they still incur additional gas costs and congestion, which is not suitable for large file storage."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"All validator nodes need to establish IPFS service for themselves, which subject to many restrictions."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"The development is difficult since the Substrate-based code needs to be greatly modified."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"This only supports file upload on the Substrate side. Viewers need to retrieve it via IPFS clients."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,n.jsx)(t.p,{children:"We design and implement a data storage service based on Substrate. On one hand, there is no need for a validator node to start additional service, and no major modifications to substrate-based code as well. Therefore, developers can easily integrate our storage service, whether it is a newly-built chain or an existing chain. On the other hand, by customizing the storage REST component, users could upload and download data conveniently without installing additional client programs."}),"\n",(0,n.jsx)(t.h4,{id:"high-level-design",children:"High level design"}),"\n",(0,n.jsxs)(t.p,{children:["Our proposal architecture is shown in the figure below, which consists of the Data Store Pallet and custom-built Storage Sidecar (inspired by ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/substrate-api-sidecar",children:"Substrate API Sidecar"}),")."]}),"\n",(0,n.jsx)(t.h1,{id:"figure-1-proposal-architecture",children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/CESSProject/W3F-illustration/main/substrate-builder-program/09.svg",alt:"Figure 1: Proposal architecture"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Figure 1: Proposal architecture"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Data Store Pallet"}),": Realize the recording and management of stored data. This pallet implements functions related to meta-data, e.g. root data management, data owner management, and data classification regarding the stored data."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Custom-built Storage Sidecar"}),": Provide RESTful service to interact with Data Store Pallet. The difference from Substrate API Sidecar is that, in addition to the basic functions of interacting with the substrate-based chain, Storage Sidecar encapsulates storage-related API, including data storage and data retrieval. The data transmitted by users will eventually be stored in ",(0,n.jsx)(t.a,{href:"https://github.com/CESSProject/cess",children:(0,n.jsx)(t.strong,{children:"CESS Storage System"})})," through this interface."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"typical-example",children:"Typical example"}),"\n",(0,n.jsx)(t.p,{children:"Data storage and retrieval are the two core features for a data storage service. They are illustrated in details below."}),"\n",(0,n.jsx)(t.h1,{id:"figure-2-typical-example-process",children:(0,n.jsx)(t.img,{src:"https://raw.githubusercontent.com/CESSProject/W3F-illustration/main/substrate-builder-program/10.svg",alt:"Figure 2: Typical example process"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"Figure 2: Typical example process"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Data Storage"})}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"A user calls the data storage API of the Custom-built Storage Sidecar to upload the data file;"}),"\n",(0,n.jsx)(t.li,{children:"Forward the data to CESS by calling the encapsulated CESS API;"}),"\n",(0,n.jsx)(t.li,{children:"Once it is confirmed that the data has been written, Custom-built Storage Sidecar will call Extrinsic to record the relevant information of the data file on-chain;"}),"\n",(0,n.jsx)(t.li,{children:"CESS Storage System maintains the integrity and privacy of data throughout its life cycle."}),"\n"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Data Retrieval"})}),"\n"]}),"\n",(0,n.jsxs)(t.ol,{start:"5",children:["\n",(0,n.jsx)(t.li,{children:"A user calls the storage API of the Custom-built Storage Sidecar to retrieve the target data;"}),"\n",(0,n.jsx)(t.li,{children:"Custom-built Storage Sidecar to query on-chain data routing information;"}),"\n",(0,n.jsx)(t.li,{children:"Call the CESS data retrieval API with the routing info;"}),"\n",(0,n.jsx)(t.li,{children:"Retrieve and return the target data from CESS Storage System;"}),"\n",(0,n.jsx)(t.li,{children:"Return the target data to Custom-built Storage Sidecar;"}),"\n",(0,n.jsx)(t.li,{children:"Custom-built Storage Sidecar updates on-chain information, if necessary;"}),"\n",(0,n.jsx)(t.li,{children:"Return the target data to the user."}),"\n"]}),"\n",(0,n.jsx)(t.h4,{id:"api-specifications-of-the-core-functionality",children:"API specifications of the core functionality"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Data Store Pallet: List of the publicly exposed methods"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"No. 1"}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Name"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"store"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Type"}),(0,n.jsx)(t.td,{children:"Dispatchable Function"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 1 (Type)"}),(0,n.jsxs)(t.td,{children:["filename",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 2 (Type)"}),(0,n.jsxs)(t.td,{children:["fileid",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 3 (Type)"}),(0,n.jsxs)(t.td,{children:["filesize",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 4 (Type)"}),(0,n.jsxs)(t.td,{children:["keywords",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Returns"}),(0,n.jsx)(t.td,{children:"DispatchResult"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Upload meta-info of stored file on chain."})]})]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"No. 2"}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Name"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"retrieve"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Type"}),(0,n.jsx)(t.td,{children:"Dispatchable Function"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 1 (Type)"}),(0,n.jsxs)(t.td,{children:["fileid",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Returns"}),(0,n.jsx)(t.td,{children:"DispatchResult"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Check if the caller has permission to get the specified file."})]})]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"No. 3"}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Name"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"replace"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Type"}),(0,n.jsx)(t.td,{children:"Dispatchable Function"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 1 (Type)"}),(0,n.jsxs)(t.td,{children:["old_fileid",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 2 (Type)"}),(0,n.jsxs)(t.td,{children:["filename",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 3 (Type)"}),(0,n.jsxs)(t.td,{children:["fileid",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 4 (Type)"}),(0,n.jsxs)(t.td,{children:["filesize",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 5 (Type)"}),(0,n.jsxs)(t.td,{children:["keywords",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Returns"}),(0,n.jsx)(t.td,{children:"DispatchResult"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Upload and replace old meta-info with new's of stored file on chain."})]})]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"No. 4"}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Name"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"delete"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Type"}),(0,n.jsx)(t.td,{children:"Dispatchable Function"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 1 (Type)"}),(0,n.jsxs)(t.td,{children:["del_fileid",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Returns"}),(0,n.jsx)(t.td,{children:"DispatchResult"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Delete the meta-info of the specified file, and the caller must be the owner of the file."})]})]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"No. 5"}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Name"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"edit"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Type"}),(0,n.jsx)(t.td,{children:"Dispatchable Function"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 1 (Type)"}),(0,n.jsxs)(t.td,{children:["fileid",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 2 (Type)"}),(0,n.jsxs)(t.td,{children:["new_filename",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 3 (Type)"}),(0,n.jsxs)(t.td,{children:["new_keywords",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Returns"}),(0,n.jsx)(t.td,{children:"DispatchResult"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Support to modify meta-info of the owner's specified file."})]})]})]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"No. 6"}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Name"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"query"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Method Type"}),(0,n.jsx)(t.td,{children:"Custom RPC"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Parameter 1 (Type)"}),(0,n.jsxs)(t.td,{children:["keywords",":Vec","<u8>"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Returns"}),(0,n.jsx)(t.td,{children:"queried meta-info"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Description"}),(0,n.jsx)(t.td,{children:"Support to query meta-info of the owner's specified file with some keywords."})]})]})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.strong,{children:"Custom-built Storage Sidecar: New API interface overview"})}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"API Path"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"POST"}),(0,n.jsx)(t.td,{children:"/api/store"}),(0,n.jsx)(t.td,{children:"Store files to the CESS storage system and will call store extrinsic."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GET"}),(0,n.jsx)(t.td,{children:"/api/retrieve"}),(0,n.jsx)(t.td,{children:"Check if the caller has permission with retrieve extrinsic and get the specified file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"POST"}),(0,n.jsx)(t.td,{children:"/api/replace"}),(0,n.jsx)(t.td,{children:"Replace stored file with new one and store to the CESS storage system, then call replace extrinsic."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"POST"}),(0,n.jsx)(t.td,{children:"/api/delete"}),(0,n.jsx)(t.td,{children:"Call delete extrinsic and delete the file in CESS storage system."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"POST"}),(0,n.jsx)(t.td,{children:"/api/edit"}),(0,n.jsx)(t.td,{children:"Support to modify meta-info of the owner's specified file."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GET"}),(0,n.jsx)(t.td,{children:"/api/query"}),(0,n.jsx)(t.td,{children:"Support to query meta-info of the owner's specified file with some keywords."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"GET"}),(0,n.jsx)(t.td,{children:"/api/list"}),(0,n.jsx)(t.td,{children:"List all the files info of caller."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"..."}),(0,n.jsx)(t.td,{children:"..."}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,n.jsx)(t.p,{children:"Help us locate your project in the Polkadot/Substrate/Kusama landscape and what problems it tries to solve by answering each of these questions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Where and how does your project fit into the ecosystem?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Our project offers storage services to all Substrate-based networks in a convenient way which currently does not have a good enough solution."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The substrate developers who want to get storage services."}),"\n",(0,n.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,n.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Teh Sunn Liu"}),"\n",(0,n.jsx)(t.li,{children:"Yeou Sunn Liu"}),"\n",(0,n.jsx)(t.li,{children:"Ted Zhang"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Name:"})," Jessie Dai"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Contact Email:"})," ",(0,n.jsx)(t.a,{href:"mailto:jessie@cess.cloud",children:"jessie@cess.cloud"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Website:"})," ",(0,n.jsx)(t.a,{href:"http://cess.cloud",children:"http://cess.cloud"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Address:"})," 22 St Leonard's Ave, Lostock, Bolton BL6 4JE, England"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Registered Legal Entity:"})," Paul David Humphreys"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,n.jsx)(t.p,{children:"We have a team of professionals in getting this done. The backgrounds of team members include but are not limited to cloud computing, consensus algorithms and distributed storage. Most of them have been working in their respective fields for many years and have rich industry experience and solutions. The team members are distributed in the UK, the US, China and India, ranging from research scholars and cryptography experts to senior technical managers and Substrate development engineers."}),"\n",(0,n.jsxs)(t.p,{children:["So far, one of the team's project ",(0,n.jsx)(t.a,{href:"https://github.com/CESSProject/cess",children:(0,n.jsx)(t.strong,{children:"CESS"})})," is gradually integrating into the Polkadot ecosystem. Won the 1st Place in Polkadot Hackthon APAC Edition in 2021, passed all deliveries of a ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md",children:(0,n.jsx)(t.strong,{children:"applied grant"})}),", and officially joined the Substrate Builder Program on February 14, 2022."]}),"\n",(0,n.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/CESSProject",children:"https://github.com/CESSProject"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/CESSProject/cess",children:"https://github.com/CESSProject/cess"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://github.com/CESSProject/fmd-cess",children:"https://github.com/CESSProject/fmd-cess"})}),"\n"]}),"\n",(0,n.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,n.jsxs)(t.p,{children:["This section should break the development roadmap down into milestones and deliverables. To assist you in defining it, we have created a document with examples for some grant categories ",(0,n.jsx)(t.a,{href:"../docs/grant_guidelines_per_category.md",children:"here"}),". Since these will be part of the agreement, it helps to describe ",(0,n.jsx)(t.em,{children:"the functionality we should expect in as much detail as possible"}),", plus how we can verify and test that functionality. Whenever milestones are delivered, we refer to this document to ensure that everything has been delivered as expected."]}),"\n",(0,n.jsxs)(t.p,{children:["Below we provide an ",(0,n.jsx)(t.strong,{children:"example roadmap"}),". In the descriptions, it should be clear how your project is related to Substrate, Kusama or Polkadot. We ",(0,n.jsx)(t.em,{children:"recommend"})," that teams structure their roadmap as 1 milestone \u2248 1 month."]}),"\n",(0,n.jsx)(t.p,{children:"For each milestone,"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["make sure to include a specification of your software. ",(0,n.jsx)(t.em,{children:"Treat it as a contract"}),"; the level of detail must be enough to later verify that the software meets the specification."]}),"\n",(0,n.jsxs)(t.li,{children:["include the amount of funding requested ",(0,n.jsx)(t.em,{children:"per milestone"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"include documentation (tutorials, API specifications, architecture diagrams, whatever is appropriate) in each milestone. This ensures that the code can be widely used by the community."}),"\n",(0,n.jsx)(t.li,{children:"provide a test suite, comprising unit and integration tests, along with a guide on how to set up and run them."}),"\n",(0,n.jsx)(t.li,{children:"commit to providing Dockerfiles for the delivery of your project."}),"\n",(0,n.jsx)(t.li,{children:"indicate milestone duration as well as number of full-time employees working on each milestone."}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Deliverables 0a-0d are mandatory for all milestones"}),", and deliverable 0e at least for the last one. If you do not intend to deliver one of these, please state a reason in its specification (e.g. Milestone X is research oriented and as such there is no code to test)."]}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\u26a1"," If any of your deliverables is based on somebody else's work, make sure you work and publish ",(0,n.jsx)(t.em,{children:"under the terms of the license"})," of the respective project and that you ",(0,n.jsx)(t.strong,{children:"highlight this fact in your milestone documentation"})," and in the source code if applicable! ",(0,n.jsx)(t.strong,{children:"Teams that submit others' work without attributing it will be immediately terminated."})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Total Costs:"})," 9,000 USD"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-1-implement-data-store-pallet",children:"Milestone 1 Implement Data Store Pallet"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  1"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 3,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1a."}),(0,n.jsx)(t.td,{children:"Substrate module: data_store"}),(0,n.jsx)(t.td,{children:"We will create a Substrate module that will implement meta-info management of stored data, including functions such as store, retrieve, replace, delete, edit, query."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1b."}),(0,n.jsx)(t.td,{children:"Benchmarking"}),(0,n.jsx)(t.td,{children:"The module will be on par with other pallets in FRAME, fully equipped with benchmarking, weights, tests."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-2-implement-custom-built-storage-sidecar-featuring-interaction-with-data-store-pallet",children:"Milestone 2 Implement Custom-built Storage Sidecar Featuring Interaction with Data Store Pallet"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 3,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"CESS Storage"}),(0,n.jsx)(t.td,{children:"We will integrate CESS storage module in Custom-built Storage Sidecar to support the data storage service."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Data Store API"}),(0,n.jsxs)(t.td,{children:["Implement the data store API to support interaction with the data store pallet based on the stable version of the ",(0,n.jsx)(t.a,{href:"https://github.com/paritytech/substrate-api-sidecar",children:"Substrate API Sidecar"}),", which contains at least 6 new interfaces required for data storage."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Endpoint Docs"}),(0,n.jsx)(t.td,{children:"We will write Endpoint Docs explaining the usage of the all implemented RESTful API."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"milestone-3-complete-custom-built-storage-sidecar",children:"Milestone 3 Complete Custom-built Storage Sidecar"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"FTE:"}),"  2"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Costs:"})," 3,000 USD"]}),"\n"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,n.jsx)(t.th,{children:"Deliverable"}),(0,n.jsx)(t.th,{children:"Specification"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0a."}),(0,n.jsx)(t.td,{children:"License"}),(0,n.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT / Unlicense"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0b."}),(0,n.jsx)(t.td,{children:"Documentation"}),(0,n.jsxs)(t.td,{children:["We will provide both ",(0,n.jsx)(t.strong,{children:"inline documentation"})," of the code and a basic ",(0,n.jsx)(t.strong,{children:"tutorial"})," that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0c."}),(0,n.jsx)(t.td,{children:"Testing Guide"}),(0,n.jsx)(t.td,{children:"Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0d."}),(0,n.jsx)(t.td,{children:"Docker"}),(0,n.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,n.jsx)(t.td,{children:"Article"}),(0,n.jsxs)(t.td,{children:["We will publish an ",(0,n.jsx)(t.strong,{children:"article"}),"/workshop that explains our project's features, implementation, and user guidelines.)"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,n.jsx)(t.td,{children:"Data Integrity Verification"}),(0,n.jsx)(t.td,{children:"We will provide integrity verification for stored data to improve the quality of storage services."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"2."}),(0,n.jsx)(t.td,{children:"Data Store API"}),(0,n.jsx)(t.td,{children:"We will add data storage functionality to the data store API, which adapts to existing interactions with Data Store Pallet."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{style:{textAlign:"right"},children:"3."}),(0,n.jsx)(t.td,{children:"Endpoint Docs"}),(0,n.jsx)(t.td,{children:"We will update the Endpoint Docs to fit the upgraded Custom-built Storage Sidecar, which adds data storage features."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,n.jsx)(t.p,{children:"In the short term, we will promote our project to get more people to use and test it. Next, we will continue to maintain component versions to accommodate Substrate updates, and as much as possible to provide more reliable storage services."}),"\n",(0,n.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," We have heard from Parity Asia."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"What work has been done already?"})," We have already implemented a design prototype."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Have you ever applied for other grants?"})," We had applied a ",(0,n.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md",children:"grant"})," that had passed all the milestone deliveries on January 25, 2022."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>l,x:()=>d});var s=i(96540);const n={},r=s.createContext(n);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);