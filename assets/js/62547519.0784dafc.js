"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[85714],{76296:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"applications/sub_consensus_mechanism","title":"Sub-consensus mechanism","description":"- Team Name: Massa Labs","source":"@site/applications/sub_consensus_mechanism.md","sourceDirName":"applications","slug":"/applications/sub_consensus_mechanism","permalink":"/applications/sub_consensus_mechanism","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/sub_consensus_mechanism.md","tags":[],"version":"current","frontMatter":{}}');var t=i(74848),a=i(28453);const o={},r="Sub-consensus mechanism",l={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Team academic publications",id:"team-academic-publications",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 <strong>- Research and technical specification</strong>",id:"milestone-1---research-and-technical-specification",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sub-consensus-mechanism",children:"Sub-consensus mechanism"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Team Name:"})," Massa Labs"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Payment Address:"})," 13zRBDBEYWGBZAiCeqMqefPCZ7cXS4GCmizt93NqWoTattpZ (USDT)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsxs)(n.strong,{children:[(0,t.jsx)(n.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,t.jsxs)(n.p,{children:["This application is in response to the first milestone of the following RFP: ",(0,t.jsx)(n.a,{href:"https://grants.web3.foundation/docs/RFPs/sub-consensus",children:"Sub-consensus mechanism"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"This project is focused on conducting research to develop the specifications for an advanced, speculative consensus mechanism specifically designed for the collators within a Parachain context.\nAs noted in the related RFP, a significant challenge facing parachain dApps is the prolonged confirmation times, which are a direct consequence of the time it takes for the Relay Chain to complete on-chain verification of parachain blocks.\nOur initiative is directed at introducing an opt-in based, probabilistic sub-consensus mechanism aimed at offering parachain users a more efficient option."}),"\n",(0,t.jsx)(n.p,{children:"At Massa Labs, we position ourselves at the cutting edge of blockchain technological advancement.\nOur team is comprised of individuals who are not only proficient in Rust and blockchain technologies but also include academic professionals recognized in blockchain research, demonstrating an ability to solve complex challenges and improve blockchain functionality significantly.\nWith a profound interest in the Polkadot/Parachains landscape, this initial response to the RFP represents our formal introduction to the ecosystem, underscoring our commitment to contributing towards ongoing efforts to augment the network's usability and effectiveness."}),"\n",(0,t.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,t.jsx)(n.p,{children:"In our research, we intend to present a framework whereby collators within a parachain may opt to engage with this consensus mechanism\nBlocks identified through this mechanism would be quickly quasi-finalized, although they remain subject to discard in the event that subsequent relay chain finalizations necessitate a parachain reorganization (reorg).\nConsequently, applications leveraging this functionality should not depend on quasi-finalized blocks for critical operations without incorporating safeguards against potential reorg scenarios."}),"\n",(0,t.jsx)(n.p,{children:"The deliverable will be a comprehensive document covering the following aspects:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"An examination of the present technical framework and its constraints."}),"\n",(0,t.jsx)(n.li,{children:"A detailed technical proposal that includes a complete specification of any required pallets, along with any necessary modifications to the upstream Substrate/Cumulus repositories."}),"\n",(0,t.jsx)(n.li,{children:"A security assessment of the proposed approach."}),"\n",(0,t.jsx)(n.li,{children:"A set of guidelines for any parachain team working with Cumulus to implement this sub-consensus mechanism."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Furthermore, our solution is anticipated to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Introduce a runtime module responsible for managing the sub-consensus logic, encompassing staking, block selection, and slashing protocols."}),"\n",(0,t.jsx)(n.li,{children:"Necessitate adjustments to Cumulus to define the sub-consensus parameters for a specific parachain."}),"\n",(0,t.jsx)(n.li,{children:"Exert minimal, if any, influence on the existing Collator protocol."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This project is not aimed at delivering a Proof of Concept (PoC) or a Minimum Viable Product (MVP). Our proposal is strictly limited to achieving the objectives set out in the first milestone of the RFP.\nAdditionally, our team will not account for possible constraints within the current Collator Protocol framework, such as differences between synchronous or asynchronous backing processes.\nTherefore, our approach will not presuppose the causes of parachain reorganizations."}),"\n",(0,t.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Where and how does your project fit into the ecosystem?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Our project seeks to enhance the flexibility of parachains by introducing a mechanism that achieves rapid quasi-finality within parachains, thereby enabling the emergence of new use cases."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Who is your target audience (parachain/dapp/wallet/UI developers, designers, your own user base, some dapp's userbase, yourself)?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Our primary target audience consists of parachain developers."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"What need(s) does your project meet?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"We address the critical need for a swift pseudo-consensus mechanism within parachains, as the current finality times hinder certain applications."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"How did you identify these needs? Please provide evidence in the form of (scientific) articles, forum discussions, case studies, or raw data."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["This need was identified in line with the RFP\u2019s mention that parachain dApps experience delayed confirmation times due to the relay chain\u2019s verification process. Data from ",(0,t.jsx)(n.a,{href:"https://telemetry.polkadot.io/",children:"https://telemetry.polkadot.io"})," indicates that block finalization may take several seconds."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Are there any other projects similar to yours in the Substrate / Polkadot / Kusama ecosystem?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"In the current ecosystem, parachain consensus mechanisms are dependent on the Polkadot Relay Chain for finality, thereby lacking in rapid finality solutions. They mainly serve to submit block candidates for relay chain validation, resulting in inherent delays."}),"\n",(0,t.jsxs)(n.li,{children:["The ",(0,t.jsx)(n.code,{children:"collator-selection"})," pallet offered by Cumulus aims at managing collator coordination to prevent collation congestion. However, this pallet is not designed as a robust consensus mechanism but rather as a coordination tool for collators to enhance efficiency."]}),"\n",(0,t.jsx)(n.li,{children:"Our project proposes a supplementary consensus mechanism designed to facilitate fast quasi-finality. This means creating a system where actors are economically discouraged from initiating  reorgs, thereby expecting a reduction in their occurrence if collators are adequately motivated to maintain honesty."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Are there any projects similar to yours in related ecosystems?"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"No, this is a pioneering research project aimed directly at addressing core functionalities within the Polkadot ecosystem."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,t.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Name of team leader: Aur\xe9lien Foucault"}),"\n",(0,t.jsx)(n.li,{children:"Names of team members: Aur\xe9lien Foucault, L\xe9o Besan\xe7on PhD, L\xe9onard Lys PhD"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Name:"})," Aur\xe9lien Foucault (Lead of Development Partnership and Team leader)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Contact Email:"})," ",(0,t.jsx)(n.a,{href:"mailto:af@massa.net",children:"af@massa.net"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Website:"})," ",(0,t.jsx)(n.a,{href:"https://massa.net/",children:"https://massa.net/"})]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Registered Address:"})," 226 BD VOLTAIRE 75011 PARIS, FRANCE"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Registered Legal Entity:"})," MASSA LABS"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,t.jsx)(n.p,{children:"Our team's expertise is grounded in the successful development of Massa, a fully decentralized, Rust-built Layer 1 blockchain. This platform has been rigorously audited by Certik, highlighting our emphasis on security and reliability. It currently operates in Mainnet with over 1500 active nodes participating in network security through staking, underscoring the robustness and community trust in our system."}),"\n",(0,t.jsxs)(n.p,{children:["The breadth of experience within Massa Labs spans both academic research and practical application in blockchain technology. Aur\xe9lien Foucault, a developer specialized in Rust, has been instrumental in the construction of our Layer 1 blockchain, demonstrating our team's capability in developing high-performance blockchain infrastructure.\nFurthermore, Dr. L\xe9o Besan\xe7on and Dr. L\xe9onard Lys, both holding PhDs in blockchain technology, enrich our team with a profound theoretical understanding and research capacity.\nTheir academic and research achievements are complemented by tangible contributions to significant blockchain projects, including Starknet (",(0,t.jsx)(n.a,{href:"https://github.com/keep-starknet-strange/bonsai-trie",children:"https://github.com/keep-starknet-strange/bonsai-trie"}),"),  illustrating our team's ability to contribute valuable innovations to the blockchain community."]}),"\n",(0,t.jsx)(n.p,{children:"This combination of hands-on development experience, academic insight, and a demonstrable commitment to advancing blockchain technology makes Massa Labs a suitable candidate to undertake the Polkadot Foundation's project. We are dedicated to delivering a sub-consensus system that not only meets the current requirements of the Polkadot ecosystem but is also designed with foresight into its future evolution."}),"\n",(0,t.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,t.jsx)(n.p,{children:"Relevant team code repos:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/massalabs/massa",children:"https://github.com/massalabs/massa"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"GitHub accounts of all team members:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/AurelienFT",children:"https://github.com/AurelienFT"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/Leo-Besancon",children:"https://github.com/Leo-Besancon"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/leoloco",children:"https://github.com/leoloco"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/aurelien-foucault/",children:"https://www.linkedin.com/in/aurelien-foucault/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/leo-besancon/",children:"https://www.linkedin.com/in/leo-besancon/"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.linkedin.com/in/leonard-lys-0033a486/",children:"https://www.linkedin.com/in/leonard-lys-0033a486/"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"team-academic-publications",children:"Team academic publications"}),"\n",(0,t.jsx)(n.p,{children:"We have academic researchers with blockchain publications in the team, and all are familiar with BFT consensus algorithms:"}),"\n",(0,t.jsxs)(n.p,{children:["L\xe9o Besan\xe7on: ",(0,t.jsx)(n.a,{href:"https://scholar.google.com/citations?user=NmXfn2cAAAAJ&hl=en&authuser=1&oi=ao",children:"https://scholar.google.com/citations?user=NmXfn2cAAAAJ&hl=en&authuser=1&oi=ao"})]}),"\n",(0,t.jsxs)(n.p,{children:["L\xe9onard Lys: ",(0,t.jsx)(n.a,{href:"https://scholar.google.com/citations?hl=en&authuser=1&user=NdEcgP8AAAAJ",children:"https://scholar.google.com/citations?hl=en&authuser=1&user=NdEcgP8AAAAJ"})]}),"\n",(0,t.jsx)(n.p,{children:"But also, as part of the Massa team:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://scholar.google.com/citations?user=OUeoziEAAAAJ",children:"https://scholar.google.com/citations?user=OUeoziEAAAAJ"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://scholar.google.com/citations?user=kWScejIAAAAJ",children:"https://scholar.google.com/citations?user=kWScejIAAAAJ"})}),"\n"]}),"\n",(0,t.jsxs)(n.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,t.jsx)(n.p,{children:"While we familiarized ourselves with the current polkadot architecture and related mechanisms, we have not yet started the research phase for this project. While we haven't discussed our approach with others, we have examined:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The current implementation of the Collator protocol"}),"\n",(0,t.jsxs)(n.li,{children:["Various research related to BFT / PoS based consensus algorithms. In particular, one of our team members thoroughly analyzed consensus algorithms in the context of a thesis on cross-chain interoperability, with a brief focus on polkadot network: ",(0,t.jsx)(n.a,{href:"https://theses.hal.science/tel-03847642/file/LYS_Leonard_2022.pdf",children:"https://theses.hal.science/tel-03847642/file/LYS_Leonard_2022.pdf"}),". We have thoroughly studied consensus algorithms and we have even imagined, designed, theorized, proven and implemented our own innovative PoS consensus algorithm from scratch that is now running in production: ",(0,t.jsx)(n.a,{href:"https://arxiv.org/pdf/1803.09029.pdf",children:"https://arxiv.org/pdf/1803.09029.pdf"}),". We also designed a hybrid BFT and Nakamoto pseudo-consensus algorithm to improve the security of our original proposal: ",(0,t.jsx)(n.a,{href:"https://arxiv.org/abs/2302.10009",children:"https://arxiv.org/abs/2302.10009"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["We are also familiar with Substrate. For example we have worked in collaboration with Starknet on substantially modifying the Substrate runtime for their purposes in the Madara sequencer: ",(0,t.jsx)(n.a,{href:"https://twitter.com/Starknet/status/1755267691890225356",children:"https://twitter.com/Starknet/status/1755267691890225356"})," (in particular the second link)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We will familiarize ourselves with the particularities of Polkadot in order to ensure that our implementation is correctly integrated to the rest of the codebase. We are quick learners in that regard, but if you have references of Polkadot core developers that might provide guidance and review, it will accelerate the process further."}),"\n",(0,t.jsx)(n.p,{children:"We are very confident in our ability to tackle this topic, and our track record will show you that we thrive at complex tasks."}),"\n",(0,t.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,t.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Estimated Duration:"})," 2 months"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Full-Time Equivalent (FTE):"})," 1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Total Costs:"})," 20,000 USD"]}),"\n"]}),"\n",(0,t.jsxs)(n.h3,{id:"milestone-1---research-and-technical-specification",children:["Milestone 1 ",(0,t.jsx)(n.strong,{children:"- Research and technical specification"})]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Estimated duration:"})," 2 months"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"FTE:"})," 1"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Costs:"})," 20,000 DAI"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Number"}),(0,t.jsx)(n.th,{children:"Deliverable"}),(0,t.jsx)(n.th,{children:"Specification"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0a."}),(0,t.jsx)(n.td,{children:"License"}),(0,t.jsx)(n.td,{children:"MIT"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0b."}),(0,t.jsx)(n.td,{children:"Documentation"}),(0,t.jsx)(n.td,{children:"We will document the limitations of the current approach."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0c."}),(0,t.jsx)(n.td,{children:"Testing and Testing Guide"}),(0,t.jsx)(n.td,{children:"This research will not lead to any testing."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0d."}),(0,t.jsx)(n.td,{children:"Docker"}),(0,t.jsx)(n.td,{children:"We do not plan to modify the existing deployment infrastructure."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"0e."}),(0,t.jsx)(n.td,{children:"Article"}),(0,t.jsx)(n.td,{children:"We will write an article that explains our research and the defined specifications"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"1."}),(0,t.jsx)(n.td,{children:"Technical specifications"}),(0,t.jsx)(n.td,{children:"We will provide a document containing: an overview of the architecture changes, functional specifications for new pallets, and functional specifications for changes on the polkadot/cumulus repositories."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"2."}),(0,t.jsx)(n.td,{children:"Security analysis"}),(0,t.jsx)(n.td,{children:"We will provide a security report containing: detailed hypotheses on the different actors (underlying hypotheses on the Relay Chain), risk/reward analysis to break the underlying choosen consensus mechanism, and impact on the expected usage for parachains."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"3."}),(0,t.jsx)(n.td,{children:"Implementation guide for parachains"}),(0,t.jsx)(n.td,{children:"We will provide a guide containing: a brief overview of our solution and general guidelines of what the parachain will have to adopt our solution"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The research outlined in deliverables 1. and 2. will be reviewed by the Polkadot team, and any concerns raised by the team will be taken into account."}),"\n",(0,t.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,t.jsx)(n.p,{children:"In this application, we only focus on the first milestone of the linked RFP, in order to familiarize ourselves with the Polkadot ecosystem.\nWe plan to apply to the second milestone once this research phase is validated."}),"\n",(0,t.jsx)(n.p,{children:"In this case, we would actively develop The detailed specifications of the planned Proof of Concept will depend on the results of the research phase, but would include the implementation of the sub consensus mechanism for at least one existing parachain, along with testing and benchmarks."}),"\n",(0,t.jsx)(n.p,{children:"More generally, once the team is more familiar with the Polkadot ecosystem, we could provide additional assistance in core development on other subjects."}),"\n",(0,t.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,t.jsx)(n.p,{children:"N/A"})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);