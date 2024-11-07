"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[58088],{47359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"applications/polkadot_tests","title":"Polkadot Conformance Tests PoC","description":"- Team Name: Zondax AG","source":"@site/applications/polkadot_tests.md","sourceDirName":"applications","slug":"/applications/polkadot_tests","permalink":"/applications/polkadot_tests","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/polkadot_tests.md","tags":[],"version":"current","frontMatter":{}}');var s=n(74848),o=n(28453);const r={},l="Polkadot Conformance Tests PoC",a={},c=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Technology and Languages",id:"technology-and-languages",level:4},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Technical Scope:",id:"technical-scope",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 - PoC Implementation",id:"milestone-1---poc-implementation",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"polkadot-conformance-tests-poc",children:"Polkadot Conformance Tests PoC"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," Zondax AG"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," (DAI ERC 20)  0xf50a09731dc32a64431920e10e1e58dce28e6b11"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 2"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:["This grant application falls under this ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/polkadot-protocol_conformance_tests.md",children:"RFP"})," and it aims\nto develop a comprehensive test suite dedicated to assessing the compliance of Host implementations against the official Polkadot Protocol Specification."]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"The reliability and security of the Polkadot network are fundamentally contingent upon the flawless implementation of Hosts/Nodes. At present,\nSubstrate and Smoldot (implemented in Rust)\nare actively used in production, while Gossamer (in Go) and Kagome (in C++) are undergoing advanced stages of development.\nOur primary objective is to develop a comprehensive test suite dedicated to assessing the compliance of Host implementations\nagainst the official Polkadot Protocol Specification."}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsx)(t.p,{children:"Our objective will consist of developing a proof of concept for a test suite that can be run across various host implementations and executors."}),"\n",(0,s.jsx)(t.p,{children:"In this initial phase, we will concentrate on a few different points:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://spec.polkadot.network/chap-host-api#sect-crypto-api",children:"Host API: cryptography primitives"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://spec.polkadot.network/chap-host-api#sect-trie-api",children:"Trie proof verification"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://spec.polkadot.network/id-cryptography-encoding#sect-scale-codec",children:"Scale encoding and decoding"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The objective is to ensure conformance with the existing specifications and highlight possible deviations.\nMoreover, we will organize the PoC in such a way that conformance reports can be generated after each run."}),"\n",(0,s.jsx)(t.h4,{id:"technology-and-languages",children:"Technology and Languages"}),"\n",(0,s.jsx)(t.p,{children:"We aim to develop this in Python or Typescript. We will investigate but at the moment, we see a much wider ecosystem in Python."}),"\n",(0,s.jsx)(t.p,{children:"Althoug previous work on this area has been developed in Julia, Python holds several advantages over Julia due to its extensive ecosystem, wide community support, and versatility."}),"\n",(0,s.jsx)(t.p,{children:"Python is also known for its cross-platform compatibility, facilitating the development of cross-platform applications.\nIts ease of integration with other languages like C/C++ and Java enables the creation of applications with mixed-language components."}),"\n",(0,s.jsxs)(t.p,{children:["There is some previous work that has been done ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/polkadot-tests",children:"here"})," in Julia we plan to re-use some part of this work, rewrite it, updated it and confront it\nagainst current specification since his code has not been updated since February 2023."]}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsxs)(t.p,{children:["Zondax is a growing and distributed team with experience and projects for more than 50 blockchains.\nZondax has been contributing to the Substrate ecosystem since 2018-2019. The team has received and completed a large number of W3F grants\nand currently maintains most Ledger apps for the ecosystem.\nWe have recently completed a ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/hybrid_node_research.md",children:"grant"})," on the research of an alternative host implementation."]}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"2 x Engineers"}),"\n",(0,s.jsx)(t.li,{children:"1 x Project Manager"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Juan Leni and Ainhoa Aldave"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:juan.leni@zondax.ch",children:"juan.leni@zondax.ch"})," / ",(0,s.jsx)(t.a,{href:"mailto:ainhoa.aldave@zondax.ch",children:"ainhoa.aldave@zondax.ch"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"}),"  zondax.ch"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsx)(t.p,{children:"Zondax AG"}),"\n",(0,s.jsx)(t.p,{children:"Dammstrasse 16"}),"\n",(0,s.jsx)(t.p,{children:"Zug 6300, Switzerland"}),"\n",(0,s.jsx)(t.p,{children:"UID CHE-491.796.576"}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(t.p,{children:"Over the last few years, Zondax has been involved in a large number of projects for most of the key players in the blockchain industry.\nOur team includes experts in most blockchain aspects, from cryptography to data and protocol engineering."}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.p,{children:["Most of our contributions to the blockchain ecosystem can be found in our GitHub organization ",(0,s.jsx)(t.a,{href:"https://github.com/zondax",children:"zondax"})]}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsx)(t.p,{children:"Not initiated."}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h2,{id:"technical-scope",children:"Technical Scope:"}),"\n",(0,s.jsx)(t.p,{children:"The scope of our work will consist on:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Review of specifications and conformance tests: The Polkadot specification and the corresponding conformance tests will be used as a reference of expected valid behavior:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/w3f/polkadot-spec",children:"Polkadot Spec"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/w3f/polkadot-tests",children:"Polkadot tests"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Analysis of previous work: previous work will be analysed to determine improvements, advantages and disadvantages. In this respect, we can already pinpoint the following repositories:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/w3f/polkadot-tests",children:"Polkadot Tests"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/LimeChain/polkadot-conformance",children:"PVF Conformance Testing Suite"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/zombienet",children:"Zombienet"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/w3f/polkadot-tests/tree/main/fixtures/scale-codec",children:"SCALE Codec Encoding"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/w3f/polkadot-tests/tree/main/fixtures/state-trie",children:"State Trie Hashing"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Test the test-suite against all implementations"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/ChainSafe/gossamer",children:"Go: gossamer by ChainSafe"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/soramitsu/kagome",children:"C++: kagome by Soramitsu"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/paritytech/polkadot",children:"Rust: polkadot by Parity"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/smol-dot/smoldot",children:"Rust: smoldot by Parity"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total estimated workload:"})," 4 weeks"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Delivery time:"}),": 6 to 8 weeks"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  2.5 FTE"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," 28'800 DAI"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1---poc-implementation",children:"Milestone 1 - PoC Implementation"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated workload:"})," 4 working weeks"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Delivery time:"}),": 6 to 8 weeks"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  2,5"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," 28'800 DAI"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"right"},children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0a."})}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"Apache 2.0 / GPLv3 / MIT"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0b."})}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsx)(t.td,{children:"We will provide a inline documentation of the code and   inline documentation of the code and a basic tutorial"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0c."})}),(0,s.jsx)(t.td,{children:"Testing and Testing Guide"}),(0,s.jsx)(t.td,{children:"Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:(0,s.jsx)(t.strong,{children:"0d."})}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"0e."}),(0,s.jsx)(t.td,{children:"Article"}),(0,s.jsx)(t.td,{children:"We will publish an article explaining the research, design decisions and proof of concept"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"1."}),(0,s.jsx)(t.td,{children:"PoC code"}),(0,s.jsx)(t.td,{children:"General structure"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2a."}),(0,s.jsx)(t.td,{children:"Code"}),(0,s.jsx)(t.td,{children:"PoC Tests: Host API: cryptography primitives"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2b."}),(0,s.jsx)(t.td,{children:"Code"}),(0,s.jsx)(t.td,{children:"PoC Tests: Trie proof verification"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"right"},children:"2c."}),(0,s.jsx)(t.td,{children:"Code"}),(0,s.jsx)(t.td,{children:"PoC Tests: Scale encoding and decoding"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"*Testing in point 2, will not be comprehensive. We will concentrate on different cases to proof that the architecture and design is adequate."}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(t.p,{children:"After we have completed this PoC, we aim to prepare a proposal for a long term test suite."}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.p,{children:["Zondax has been contributing to the Polkadot ecosystem for several years, and has succesfully completed several grants.\nWe have recently completed a grant on the research of an alternative host implementation.  ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/pull/1324",children:"https://github.com/w3f/Grants-Program/pull/1324"})]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var i=n(96540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);