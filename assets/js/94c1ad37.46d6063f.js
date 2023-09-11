"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[83816],{38416:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));a(8209);const i={},o="Tuxedo Parachain",l={unversionedId:"applications/tuxedo_parachain",id:"applications/tuxedo_parachain",title:"Tuxedo Parachain",description:"- Team Name: Off Narrative Labs",source:"@site/applications/tuxedo_parachain.md",sourceDirName:"applications",slug:"/applications/tuxedo_parachain",permalink:"/applications/tuxedo_parachain",draft:!1,editUrl:"https://github.com/w3f/Grants-Program/edit/master/applications/tuxedo_parachain.md",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Rewrite Pallet Parachain System to UTXO model",id:"milestone-1--rewrite-pallet-parachain-system-to-utxo-model",level:3},{value:"Milestone 2 \u2014 Migration of <code>register_validate_block!</code>",id:"milestone-2--migration-of-register_validate_block",level:3},{value:"Milestone 3 \u2014 Benchmarking",id:"milestone-3--benchmarking",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Near Term",id:"near-term",level:3},{value:"Medium Term",id:"medium-term",level:3},{value:"Additional Information \u2795",id:"additional-information-",level:2}],p={toc:u},m="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tuxedo-parachain"},"Tuxedo Parachain"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," Off Narrative Labs "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x5a335908df9D2C47304338E3b744579Ed7C6a64d (DAI)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels"},"Level"),":")," 3 \ud83d\udc14")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,"Develop Parachain runtimes in the UTXO model. "),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"In a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md"},"previous grant")," (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/w3f/Grants-Program/pull/1517"},"PR"),") we developed Tuxedo, a framework for writing Substrate runtimes in the UTXO model."),(0,r.kt)("p",null,"Currently, Tuxedo works well for standalone Substrate blockchains, but does not yet work as a Polkadot Parachain.\nIn this grant, we propose to implement the common infrastructure necessary for a UTXO runtime to fulfill the parachain side of the Polkadot protocol."),(0,r.kt)("p",null,"We further propose to collect benchmark data profiling Tuxedo in various contexts."),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("p",null,"Tuxedo is analogous to FRAME in that they are both frameworks for writing Substrate runtimes.\nThey are also analogous in that they need additional code to serve as parachain runtimes."),(0,r.kt)("p",null,"The code that allows a FRAME to work as a parachain is a large part of cumulus.\nSpecifically, it is in the ",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/cumulus/cumulus_pallet_parachain_system/index.html"},"Parachain System pallet")," and the ",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/cumulus/src/cumulus_pallet_parachain_system_proc_macro/lib.rs.html#94-153"},(0,r.kt)("inlineCode",{parentName:"a"},"generate_validate_block!")," macro"),".\nThe first two milestones are devoted to adapting and rewriting these two important pieces of code in a UTXO-native way."),(0,r.kt)("p",null,"This is the crux of the parachain support."),(0,r.kt)("p",null,"This work will be implemented in a crate called ",(0,r.kt)("inlineCode",{parentName:"p"},"tuxedo-parachain")," in the existing ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Off-Narrative-Labs/Tuxedo"},"Tuxedo repository"),".\nUsing the same repository allows runtime developers to easily discover the parachain support, and reference a single set of docs.\nUsing a separate crate provides a clean separation of concerns while also allowing standalone chain developers to avoid the high compile times associated with cumulus and polkadot."),(0,r.kt)("p",null,"Our intention is to use the existing cumulus collator client-side code nearly untouched.\nThis is the same approach we followed in the first grant where we used the existing Substrate node template client-side untouched.\nThe key observation is that Tuxedo is a runtime framework, and thus the existing clients should work out-of-the-box."),(0,r.kt)("p",null,"Importantly, this proposal does ",(0,r.kt)("em",{parentName:"p"},"not")," include full XCM support.\nWe estimate that to be a more complex topic, and one that does not need to block the initial goals of participating in Polkadot's shared security, and comparing performance data against existing runtime frameworks."),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"Tuxedo is a framework for writing Substrate runtimes.\nSubstrate is the toolkit for building virtually all parachain nodes.\nTuxedo provides a richer set of options to runtime developers.\nBy extending Tuxedo to support Parachain runtimes, we increase the diversity and expressiveness of the Polkadot network's parachains, attracting developers who may have gone elsewhere if limited to the accounts model alone."),(0,r.kt)("p",null,"The primary users of Tuxedo will be parachain runtime developers who will use Tuxedo directly to structure their chain logic. Of course, the user base will trickle downstream as well to users of those parachains that choose to build with Tuxedo. However, chain users will use Tuxedo only indirectly."),(0,r.kt)("p",null,"There are no projects like this in the Substrate ecosystem, although they do exist in the broader blockchain space; Cardano being the most notable example."),(0,r.kt)("p",null,"While it fulfills a similar role, Tuxedo is not intended to compete with FRAME, but rather to compliment it, by welcoming projects that fit naturally with the utxo model into the Substrate ecosystem, as FRAME does for projects that fit the accounts model."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Joshy Orndorff ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JoshOrndorff"},"https://github.com/JoshOrndorff")),(0,r.kt)("li",{parentName:"ul"},"Off Narrative Labs ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Off-Narrative-Labs"},"https://github.com/Off-Narrative-Labs"))),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Joshy Orndorff "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," joshyorndorff at proton dot me"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Registered Address:")," To be provided in the invoices")),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,"Joshy entered the Substrate ecosystem in 2019 as part of the Substrate Developer Hub team. There he created and hosted the weekly Substrate Seminar, and contributed significantly to the Substrate Recipes. In 2020, he moved to the Moonbeam team where he was a core developer. While at Moonbeam, Joshy wrote the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/PureStake/nimbus/"},"Nimbus consensus engine")," which is used in several production parachains, and helped pioneer the technique whereby EVM contracts can interact with native Substrate pallets. In 2022, Joshy began contributing to the Polkadot Blockchain Academy, teaching in all three cohorts: Cambridge, Buenos Aires, and Berkeley."),(0,r.kt)("p",null,"Joshy met Andrew Burger in Cambridge in 2022 at the first Polkadot Blockchain Academy where Andrew, a student at the time, chose to implement a UTXO Runtime as his final project. Together they revised the UTXO assignment and taught it together at the next PBA. A few months later they worked together on the first Tuxedo grant."),(0,r.kt)("p",null,"Andrew will not be contributing to this grant directly (although he is still an enthusiastic open source contributor to Tuxedo) due to conflicting employment elsewhere."),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Main Tuxedo Repo - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Off-Narrative-Labs/Tuxedo"},"https://github.com/Off-Narrative-Labs/Tuxedo")),(0,r.kt)("li",{parentName:"ul"},"Tuxedo Tutorial - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/"},"https://github.com/Off-Narrative-Labs/Tuxedo-Order-Book-Dex-Tutorial/")),(0,r.kt)("li",{parentName:"ul"},"Nimbus Consensus (Prior Work) - ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/moonbeam-foundation/nimbus"},"https://github.com/moonbeam-foundation/nimbus")),(0,r.kt)("li",{parentName:"ul"},"Blockchain From Scratch (Educational) ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/JoshOrndorff/blockchain-from-scratch"},"https://github.com/JoshOrndorff/blockchain-from-scratch"))),(0,r.kt)("h2",{id:"development-status-"},"Development Status \ud83d\udcd6"),(0,r.kt)("p",null,"As mentioned above, the team has done previous work on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Off-Narrative-Labs/Tuxedo/tree/main"},"Tuxedo"),"."),(0,r.kt)("p",null,"As we mentioned in our previous grant our next tasks are parachain support (this grant's topic) and zero knowledge UTXOs."),(0,r.kt)("p",null,"Of course there are also some lingering leftovers in our issue queue mostly centered around the wallet.\nWe do at some point want to make the wallet more generalizable to be able to craft any generic transaction based on whichever tuxedo runtime is defined."),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 12 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-Time Equivalent (FTE):"),"  1 FTE "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," $48,000 (USD)")),(0,r.kt)("h3",{id:"milestone-1--rewrite-pallet-parachain-system-to-utxo-model"},"Milestone 1 \u2014 Rewrite Pallet Parachain System to UTXO model"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated duration:")," 6 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 24,000 USD")),(0,r.kt)("p",null,"The bulk of the logic for handling communication with the relay chain lives in ",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/cumulus/cumulus_pallet_parachain_system/index.html"},"pallet parachain system"),", and consequently, this is the largest milestone in this grant proposal."),(0,r.kt)("p",null,"We will adapt logic for signaling and enacting runtime upgrades, and providing other ",(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/cumulus/cumulus_primitives_core/relay_chain/struct.CandidateCommitments.html"},"parachain output"),'s.\nWe will "handle" incoming and outgoing XCM messages (reminder, full xcm support is out of scope, but we still need to report 0 outbound messages and stub the inbound handling logic to satisfy the protocol).\nMost importantly, we will process the latest ',(0,r.kt)("a",{parentName:"p",href:"https://paritytech.github.io/cumulus/cumulus_primitives_core/struct.PersistedValidationData.html"},"validation data")," and make it available to Tuxedo pieces in a standard way."),(0,r.kt)("p",null,'Because this is already the largest chunk of work, I\'ve chosen to make a milestone here.\nAdmitedly, there will not be a very sexy thing to "try out" at this stage because without the macro from the next milestone, there will not yet be a fully working parachain runtime.\nNonetheless, we will have a complete well documented test suite analogous to the one used for frame.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a how the parachain system piece works within Tuxedo as compared to FRAME")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Tuxedo Parachain Crate"),(0,r.kt)("td",{parentName:"tr",align:null},"We will publish a crate on github containing all of the relevant reworked code including docs about how to execute the test suite.")))),(0,r.kt)("h3",{id:"milestone-2--migration-of-register_validate_block"},"Milestone 2 \u2014 Migration of ",(0,r.kt)("inlineCode",{parentName:"h3"},"register_validate_block!")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 2 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 8,000 USD")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"register_validate_block!")," macro is responsible for generating the ",(0,r.kt)("inlineCode",{parentName:"p"},"validate_block")," entrypoint function in the runtime wasm. This is the main entrypoint in the runtime from the relay chain validators' perspective."),(0,r.kt)("p",null,"We will need to migrate the following to a Tuxedo compatible version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"cumulus_pallet_parachain_system::register_validate_block! {\n    Runtime = Runtime,\n    BlockExecutor = cumulus_pallet_aura_ext::BlockExecutor::<Runtime, Executive>,\n    CheckInherents = CheckInherents,\n}\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains the difference between the FRAME based approach and the Tuxedo based approach to this macro")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Tuxedo Parachain Template"),(0,r.kt)("td",{parentName:"tr",align:null},"If you crossed the standalone Tuxedo Template with the Cumulus Template. This is the main deliverable for the grant. A working template node for a Tuxedo-based parachain runtime and collator node.")))),(0,r.kt)("h3",{id:"milestone-3--benchmarking"},"Milestone 3 \u2014 Benchmarking"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 4 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 16,000 USD")),(0,r.kt)("p",null,"Benchmark common transaction types in standalone and parachain contexts.\nMake good faith comparisons to analogous transaction types in FRAME.\nWe hope that the simplicity of the UTXO model will allow performance increases, but right now that is just a theory."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0a.")),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0b.")),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both ",(0,r.kt)("strong",{parentName:"td"},"inline documentation")," of the code and a basic ",(0,r.kt)("strong",{parentName:"td"},"tutorial")," that explains how a user can spin up the example node and transfer tokens")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0c.")),(0,r.kt)("td",{parentName:"tr",align:null},"Testing and Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("strong",{parentName:"td"},"0d.")),(0,r.kt)("td",{parentName:"tr",align:null},"Docker"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide a Dockerfile that can be used to test all the functionality delivered with this milestone.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Benchmark Report"),(0,r.kt)("td",{parentName:"tr",align:null},"Full report of throughput for {Transfer, Remark} transactions in {FRAME, Tuxedo} runtimes operated in {Standalone, Parachain} contexts.")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("h3",{id:"near-term"},"Near Term"),(0,r.kt)("p",null,"We have a vision for a Tuxedo parachain that acts as an Atomic Swap hub for DOT ecosystem assets to foreign UTXO chains like Monero, Zcash, Cardano, etc."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/farcaster-project"},"Farcaster")," provides a Monero Bitcoin atomic swap protocol.\nWe intend to extend this protocol to support Tuxedo chains.\nAnd thanks to Polkadot's XCM, this would allow atomic swaps between other DOT ecosystem assets and foreign UTXO chains as well."),(0,r.kt)("p",null,"Following completion of this grant, the path to working Atomic Swaps would be roughly"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Extend Farcaster to support swaps with Tuxedo."),(0,r.kt)("li",{parentName:"ol"},"XCM integration with Tuxedo for Cross-chain UTXOS."),(0,r.kt)("li",{parentName:"ol"},"Testing, auditing, etc.")),(0,r.kt)("h3",{id:"medium-term"},"Medium Term"),(0,r.kt)("p",null,"Other dreams we have for Tuxedo include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Zero-knowledge runtimes a-la zero-cash and zexe."),(0,r.kt)("li",{parentName:"ul"},"UTXO-native Smart Contracts based on the pi-calculus.")),(0,r.kt)("h2",{id:"additional-information-"},"Additional Information \u2795"),(0,r.kt)("p",null,"As mentioned above, we have completed one previous grant on this topic:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Application PR: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/pull/1517"},"https://github.com/w3f/Grants-Program/pull/1517")),(0,r.kt)("li",{parentName:"ul"},"Approved Application: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md"},"https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo.md"))))}d.isMDXComponent=!0}}]);