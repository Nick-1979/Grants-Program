"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[30056],{9211:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"applications/odyssey_momentum","title":"Odyssey - Momentum","description":"- Team Name: Odyssey B.V.","source":"@site/applications/odyssey_momentum.md","sourceDirName":"applications","slug":"/applications/odyssey_momentum","permalink":"/applications/odyssey_momentum","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/odyssey_momentum.md","tags":[],"version":"current","frontMatter":{}}');var i=t(74848),a=t(28453);const r={},o="Odyssey - Momentum",l={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Tagline: Staking in NFTs",id:"tagline-staking-in-nfts",level:4},{value:"Project Details",id:"project-details",level:3},{value:"Momentum Stack",id:"momentum-stack",level:3},{value:"Stake Pallet",id:"stake-pallet",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 Stake Pallet",id:"milestone-1-stake-pallet",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"odyssey---momentum",children:"Odyssey - Momentum"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Team Name:"})," Odyssey B.V."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Payment Address:"})," 0x826fde427152d9fc0bf045dd858baa2de06b383b (USDC)"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsxs)(n.strong,{children:[(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Status:"})," ",(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/pull/1221#issuecomment-1921327886",children:"Terminated"})]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.h4,{id:"tagline-staking-in-nfts",children:"Tagline: Staking in NFTs"}),"\n",(0,i.jsx)(n.p,{children:"Odyssey is building Momentum, an open source, metaverse for digital societies."}),"\n",(0,i.jsx)(n.p,{children:"The Momentum stack enables people to jointly build their own 3D worlds as well as develop and integrate plugins to unlock a wide range of decentralized 3D social action medium use cases."}),"\n",(0,i.jsx)(n.p,{children:"The Momentum network enables these different worlds, activities and people to come together, without the need for a middleman or land sales. For this purpose, we built the DRIVE parachain, which has three main functions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On-chain ownership and coordination through NFTs of nodes, 3D worlds, sub-spaces and personal profiles."}),"\n",(0,i.jsx)(n.li,{children:"On-chain connections between people, worlds and spaces and social capital allocation through staking in worlds, sub-spaces and people."}),"\n",(0,i.jsx)(n.li,{children:"On-chain earning models for example for worlds and plugins."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Momentum sees the metaverse as a novel communications medium and provides the infrastructure for a new user experience, where social, economic and cultural activities, both on-chain and off-chain are intertwined and strengthen each other. With ",(0,i.jsx)(n.strong,{children:"Kusama (and optionally Polkadot) as its primary digital public infrastructure"}),", Momentum is co-created, governed and owned by its users."]}),"\n",(0,i.jsx)(n.p,{children:"DRIVE provides the users in the network with a universal way to turn their connections and activities into social capital and earnings. The goal is to enable users of these digital societies to thrive, by prioritizing resource allocation (e.g. funding, talent, knowledge) in general, optimizing network effects (e.g. connectivity, serendipity, virality), and a better user experience (e.g. search results, timelines and suggestions) based on the user's skin in the game."}),"\n",(0,i.jsx)(n.p,{children:"We must build a parachain with on top of that a number of customized Substrate pallets. The functionality subject of this aplication is Staking in NFTs."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Stake Pallet"}),(0,i.jsx)(n.br,{}),"\n","Within Momentum User Profiles, Worlds, Spaces and Subspaces are NFT's. The Stake pallet is going to add a variety of staking options that extend the current Proof of Staking mechanisms. This is done by providing functionality of staking in NFTs (or possibly any asset) in order to incentivize the creators/ owners and reward the stakers."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"*For the Stake pallet it is most likely that we would need to write a custom NFT pallet or a pallet that complements the Uniques pallet. As a result our delivery might include mutiple pallets."}),"\n",(0,i.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,i.jsx)(n.h3,{id:"momentum-stack",children:"Momentum Stack"}),"\n",(0,i.jsxs)(n.p,{children:["The Momentum stack as displayed in the figure below is already ",(0,i.jsx)(n.a,{href:"https://kusama.momentum.xyz/",children:"operational"})," and completely ",(0,i.jsx)(n.a,{href:"https://github.com/momentum-xyz",children:"open source"}),", except for the DRIVE 'node', which is under development."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{src:"https://drive.google.com/uc?id=1y1mrEyELIMRoJzClmhP-V8LCvn1qLzDk",alt:"Momentum stack layers"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"figure 1"})]}),"\n",(0,i.jsx)(n.p,{children:"The scope of this project is the development of custom Stake pallets (marked green in figure 1). Besides that, it is most likely that we would need to write a custom NFT pallet or a pallet that complements the Uniques pallet."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Note: This information below contains an early preview of the Stake Pallet and might be subject to changes."})}),"\n",(0,i.jsx)(n.h4,{id:"stake-pallet",children:"Stake Pallet"}),"\n",(0,i.jsxs)(n.p,{children:["The Stake pallet is going to add a variety of staking options that extend the current Proof of staking mechanisms.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://drive.google.com/uc?id=1TFgfgSwDOrfrTR4qE-7OoXyOaqQI4DO0",alt:"stake pallet overview"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"figure 2"})]}),"\n",(0,i.jsx)(n.p,{children:"It's not clear at the given time if the Stake Pallet will be one or more pallets. It will take care of the staking on NFT's and making rewards available to the stakers."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Publicly Exposed Methods"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub fn stake_on(origin: OriginFor<T>, asset: T::Asset , controller: T::AccountId, stash: T::AccountId, amount: T::Balance) -> DispatchResultWithPostInfo\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub fn unstake_on(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId, amount: T::Balance) -> DispatchResultWithPostInfo\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub fn set_controller_of(origin: OriginFor<T>, asset: T::Asset, stash: T::AccountId, controller: T::AccountId, new_controller_wallet: T::AccountId) -> DispatchResultWithPostInfo\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub fn set_stash_of(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId) -> DispatchResultWithPostInfo\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub fn set_admin(origin: OriginFor<T>, new_admin_addr: T::AccountId) -> DispatchResultWithPostInfo\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub fn get_rewards(origin: OriginFor<T>, asset: T::Asset, controller: T::AccountId, stash: T::AccountId) -> DispatchResultWithPostInfo\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub fn expired_rewards(origin: OriginFor<T>) -> DispatchResultWithPostInfo\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Runtime Storage"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Asset Info"}),(0,i.jsx)(n.br,{}),"\n","Info regarding the asset that is being staked to."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub type AssetInfos<T> = StorageDoubleMap<_, Twox64Concat, T::AssetCollId, Twox64Concat, T:AssetId, AssetInfo<T::Balance, T::CurrencyId>, ValueQuery>;\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Ledger info"}),(0,i.jsx)(n.br,{}),"\n","Ledger with general information about a controller account."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub type LedgerInfo<T> = StorageMap<_, Twox64Concat, T::AccountId, Ledger<T::Balance, T::CurrencyId>>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Current era"}),(0,i.jsx)(n.br,{}),"\n","Info about the current era."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub type CurrentEra<T> = StorageValue<_, EraInfo, ValueQuery>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Next era starting block"}),(0,i.jsx)(n.br,{}),"\n","Info about in which block the next era will start"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub type NextEraStartingBlock<T: Config> = StorageValue<_, T::BlockNumber, ValueQuery>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Storage Version"}),(0,i.jsx)(n.br,{}),"\n","Info about the storage version of this pallet."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-Rust",children:"pub(crate) type StorageVersion<T> = StorageValue<_, Version, ValueQuery>\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Use Case Diagram"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{src:"https://drive.google.com/uc?id=1Q3fn92yZ0dRwTDG5s9sJPXTN4BU3NYyB",alt:"Use Case Diagram Stake Pallet"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.em,{children:"figure 3"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Out-of-scope"}),(0,i.jsx)(n.br,{}),"\n","This project will not produce a parachain nor any of the non-token related or visual aspects. We have extensive backing from well-known Web3 builders and ecosystem leaders as well as the European Union for this part."]}),"\n",(0,i.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,i.jsxs)(n.p,{children:["We received two grants of the KSM treasury to build (",(0,i.jsx)(n.a,{href:"https://kusama.polkassembly.io/motion/436",children:"1"}),") and after successful launch expand (",(0,i.jsx)(n.a,{href:"https://kusama.polkassembly.io/motion/499",children:"2"}),") the ",(0,i.jsx)(n.a,{href:"https://kusama.momentum.xyz/",children:"Kusamaverse"}),". The Kusamaverse functions as a town hall for the Dotsama ecosystem. ",(0,i.jsx)(n.strong,{children:"Momentum is the embodiment of an overarching vision"})," enabling different worlds, activities and people to come together, without the need for a middleman or land sales. Momentum is co-created, governed and owned by its users."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Momentum is using Kusama (and optionally Polkadot) as its primary digital public infrastructure"}),"\n",(0,i.jsx)(n.li,{children:"Momentum will be launched as a parachain on Kusama (and optionally Polkadot in a later stage)"}),"\n",(0,i.jsx)(n.li,{children:"Momentum has an extensive community that actively participates in building Momentum. 200 is an estimate of active contributors based on GitHub commits, feedback during sessions and idea generation. Our community is over 7,000 people strong being a mix of web3 and non-web3 participants."}),"\n",(0,i.jsx)(n.li,{children:"Momentum provides a new ecosystem with business cases for builder teams, individual developers, hosting companies, and tech- and non-tech entrepreneurs."}),"\n",(0,i.jsx)(n.li,{children:"Momentum provides a bridge between the WEB2 and WEB3 community."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"What makes us different:\nWe see the metaverse as a new social communications medium and the potential driver for mainstream adoption of web3 technologies. The potential is designing and launching entirely new user experiences, rather than doing the web2/2d consumer experience and slapping a 3D background on it (a.k.a. a recorded concert in Fortnite that you can watch/consume or selling land). When unlocking the dotsama/ next generation of on-chain applications we enable consumers to become co-creators."}),"\n",(0,i.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,i.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,i.jsx)(n.p,{children:"Odyssey  has over 30 people working on Momentum and is still growing. Odyssey works in tracks with dedicated team members. The Token Track Team will be primarily responsible for building the Substrate Pallets."}),"\n",(0,i.jsx)(n.p,{children:"OVERALL ARCHITECT: Anton Starikov (CTO)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"TOKEN TRACK TEAM"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TRACK LEAD: Dave Hoogendoorn"}),"\n",(0,i.jsx)(n.li,{children:"RUST DEVELOPER: Denis Cavalli"}),"\n",(0,i.jsx)(n.li,{children:"WEB3ANALYST: Tim Jansen"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"All team members are solely dedicated to the token Track."})}),"\n",(0,i.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Name:"})," Dave Hoogendoorn"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Contact Email:"})," ",(0,i.jsx)(n.a,{href:"mailto:dh@odyssey.org",children:"dh@odyssey.org"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Website:"})," ",(0,i.jsx)(n.a,{href:"https://odyssey.org/",children:"https://odyssey.org/"})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Address:"})," Westerhaven 13-7, 9718AW Groningen, The Netherlands"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Registered Legal Entity:"})," Odyssey B.V. (CoC 66693640)"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Anton Starikov"})," has been architecting and leading development of software solutions for over 20 years in academic (computational physics) and industrial (Shell, AVL) settings. In addition, he was working and consulting on the topics of optimization on various levels (from hardware level through software up to the processes). Currently working as CTO of Odyssey, Anton is performing the role of platform architect."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Dave Hoogendoorn"})," is an experienced programme manager and has been active in the space for over 5 years. Dave is co-founder of WEB3SCAN (",(0,i.jsx)(n.a,{href:"https://medium.com/web3foundation/web3-foundation-grants-wave-one-winners-2a9cd39f1fbc",children:"W3F Grants WAVE 1 participant with Polkascan"}),"), former Kusama Treasury Council member (Polkascan multi-sig) and previously held a board position at the ",(0,i.jsx)(n.a,{href:"https://polkascan.org/",children:"Polkascan Foundation"}),". Dave has been following Substrate and the Dotsama ecosystem from the early beginnings."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Denis Cavalli"})," is a Senior Rust Software Engineer with a background on embedded systems and R&D. Since 2021 engaged with the WEB3 environment, has experimented on Ethereum/Solidity, Solana and worked professionally with Helium in 2022. Now is focused on building the metaverse that will empower people collaboration on the Dotsama ecosystem, using Substrate as the main framework."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Tim Jansen"})," is a Polkadot Ambassador and has been working on crypto and blockchain for over 7 years. He has developed smart contracts on Ethereum, implemented decentralized storage solutions such as swarm and IPFS, consulted on blockchain at ",(0,i.jsx)(n.a,{href:"https://www.iso.org/member/2027.html",children:"ISO"}),", audited smart contract code of ",(0,i.jsx)(n.a,{href:"https://www.tno.nl/en/about-tno/",children:"TNO"}),", launched several live applications using blockchain for auditing, supply chain and SSI at Visma and has a deep understanding of cryptography including zero knowledge proofs. In his free time he researches and experiments with new crypto technologies."]}),"\n",(0,i.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/momentum-xyz",children:"https://github.com/momentum-xyz"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/momentum-xyz/drive",children:"https://github.com/momentum-xyz/drive"})," (private for now)"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"GitHub accounts of our team members:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/deniscavalli",children:"https://github.com/deniscavalli"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,i.jsx)(n.p,{children:"Organisation:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/company/odysseyprogram",children:"https://www.linkedin.com/company/odysseyprogram"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Team:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/deniscavalli/",children:"https://www.linkedin.com/in/deniscavalli/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/timjanssen89/",children:"https://www.linkedin.com/in/timjanssen89/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/antst/",children:"https://www.linkedin.com/in/antst/"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.linkedin.com/in/dhoogendoorn/",children:"https://www.linkedin.com/in/dhoogendoorn/"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,i.jsxs)(n.p,{children:["Momentum is currently built as can been seen on ",(0,i.jsx)(n.a,{href:"https://github.com/momentum-xyz",children:"GitHub"}),". Momentum Release notes are regularly updated and can be found ",(0,i.jsx)(n.a,{href:"https://momentum.xyz/release-notes",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Treasury Proposals regarding the Kusamaverse can be found here:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://kusama.polkassembly.io/motion/436",children:"#436 Building the Kusamaverse - milestone 1"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://kusama.polkassembly.io/motion/499",children:"#499 Building the Kusamaverse - Milestone 2"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Our ",(0,i.jsx)(n.a,{href:"https://discord.com/channels/667280778731978753/882923345073541171",children:"Discord Channel"})," and ",(0,i.jsx)(n.a,{href:"https://twitter.com/MomentumXYZ",children:"Twitter Channel"})," are used as general means of communication towards the Momentum and Kusamaverse community. It provides lots of information about community engagement, new developments and improvements."]}),"\n",(0,i.jsx)(n.p,{children:"Academic references:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://www.rug.nl/society-business/centre-for-entrepreneurship/research/odyssey/odyssey-momentum-research-project?lang=en",children:"Odyssey Momentum research project"})," by the University of Groningen, researching how teamwork is related to the success of innovative and entrepreneurial projects in context of \u201cOdyssey Momentum\u201d, the world\u2019s biggest online Blockchain & AI Hackathon held in July 2021."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Other channels are ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/Intobitcoin",children:"YouTube"})," and ",(0,i.jsx)(n.a,{href:"https://momentum.xyz/",children:"our foundation website "}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,i.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 15 Weeks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  1,5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.em,{children:["Note: Please follow the disussion ",(0,i.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/pull/1221",children:"github"})," for details on the costs."]})}),"\n",(0,i.jsx)(n.h3,{id:"milestone-1-stake-pallet",children:"Milestone 1 Stake Pallet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Estimated duration:"})," 15 Weeks"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"FTE:"}),"  1,5"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Costs:"})," 30,000 USD"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This milestone delivers at least one (but maybe more) pallets to enable staking in Momentum's User Profile, World, Space and Subspace NFTs (or possibly any asset) in order to incentivize the creators/ owners and reward the stakers."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{style:{textAlign:"right"},children:"Number"}),(0,i.jsx)(n.th,{children:"Deliverable"}),(0,i.jsx)(n.th,{children:"Specification"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0a."}),(0,i.jsx)(n.td,{children:"License"}),(0,i.jsx)(n.td,{children:"GNU General Public License v3.0."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0b."}),(0,i.jsx)(n.td,{children:"Documentation"}),(0,i.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0c."}),(0,i.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,i.jsx)(n.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how a user can (for example) spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"0d."}),(0,i.jsx)(n.td,{children:"Docker"}),(0,i.jsx)(n.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1a."}),(0,i.jsx)(n.td,{children:"Basic stake pallet"}),(0,i.jsx)(n.td,{children:"Storage V1 defined and implemented as described in Milestone 1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1b."}),(0,i.jsx)(n.td,{children:"Basic stake pallet"}),(0,i.jsx)(n.td,{children:"Staking / Unstaking on NFTs operational"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"1c."}),(0,i.jsx)(n.td,{children:"Basic stake pallet"}),(0,i.jsx)(n.td,{children:"Handling Rewards operational"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2a."}),(0,i.jsx)(n.td,{children:"Extended stake pallet"}),(0,i.jsx)(n.td,{children:"Storage V2 defined and implemented as succesor of V1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2b."}),(0,i.jsx)(n.td,{children:"Extended stake pallet"}),(0,i.jsx)(n.td,{children:"Fractionalized NFTs implemented"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2c."}),(0,i.jsx)(n.td,{children:"Extended stake pallet"}),(0,i.jsx)(n.td,{children:"Configurable parameters and rewards operational. Staking rewards are divided using some formula using configurable parameters per entity, that sets the ratio  between the staker, the entity that has been staked in, and the commission an entity received and the amount received by the Treasury."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"2d."}),(0,i.jsx)(n.td,{children:"Management pallet"}),(0,i.jsx)(n.td,{children:"Optional pallet for managing the parameters and rewards and/or managing the payment of the rewards."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"3a."}),(0,i.jsx)(n.td,{children:"Generalized stake pallet"}),(0,i.jsx)(n.td,{children:"Enabling data type configuration to enable users to configure their data type at instantiation on the runtime."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"4a."}),(0,i.jsx)(n.td,{children:"Generalized stake pallet"}),(0,i.jsx)(n.td,{children:"Delivery of the Stake pallet (maybe more than one) enabling Staking on assets (NFTs) and rewards management including documentation."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"4b."}),(0,i.jsx)(n.td,{children:"Benchmarking report(s)"}),(0,i.jsx)(n.td,{children:"Benchmarking reports available"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{style:{textAlign:"right"},children:"4c."}),(0,i.jsx)(n.td,{children:"Pallet(s) in production"}),(0,i.jsx)(n.td,{children:"Pallet integrated on the parachain runtime as an example of the first implementation of the NFT stake pallet, enabling active maintenance of the repo based on lessons learned."})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,i.jsx)(n.p,{children:"Odyssey is planning a 25+ web3 community teams 4-week hackathon in May 2023, with leading Dotsama parachain and ecosystem parties, as part of a 9 month innovation program. During this program teams are guided to build new user experiences using Momentum and Dotsama tech and test how the DRIVE token strengthens their usecase. In September 2023 we will launch our DRIVE mainnet as a parachain on Kusama."}),"\n",(0,i.jsx)(n.p,{children:"In the coming  years we will keep investing in the Kusamaverse and momentum ecosystems, meaning:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Stimulate and support the creation of plugins."}),"\n",(0,i.jsx)(n.li,{children:"Expand our core stack based on community insights."}),"\n",(0,i.jsx)(n.li,{children:"Invest in expanding the number of world node owners, support new initiatives and move to mainstream adoption in the coming years."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Momentum provides a novel social communications medium and provides the infrastructure for a new user experience where social, economic and cultural activities, both on-chain and off-chain are intertwined. In these early beginnings we are only scratching the surface of what is possible. But we are convinced we are at the start of an exciting journey and with Momentum we are in for the long run."}),"\n",(0,i.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"How did you hear about the Grants Program?"}),(0,i.jsx)(n.br,{}),"\n","We have Personal recommendations from people at Parity including Raul Romanutti and Daniel Cake-Baly. We also have relations with other parties that have successfully applied for WEB3 Grant"]}),"\n",(0,i.jsx)(n.p,{children:"We have not yet applied for any grants with the WEB3 Foundation."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Other information"}),(0,i.jsx)(n.br,{}),"\n","Last but not least, we are proud to we have the ",(0,i.jsx)(n.a,{href:"https://sovereignnature.com/",children:"Sovereign Nature Initiative"})," organising a Hackathon in Momentum for the ",(0,i.jsx)(n.a,{href:"https://www.kenyawildlifetrust.org/",children:"Kenya Wildlife Trust"}),". Momentum enables true collaboration happening in real-time among 13 teams spread over 5+ countries. SNI has been hosting events in Momentum up to the 9th of November. Check it out on ",(0,i.jsx)(n.a,{href:"http://sni.momentum.xyz",children:"SNI World"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var s=t(96540);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);