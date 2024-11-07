"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[24458],{80496:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"docs/RFPs/polkadot-collator-setup","title":"Polkadot Collator Setup","description":"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.","source":"@site/docs/RFPs/polkadot-collator-setup.md","sourceDirName":"docs/RFPs","slug":"/docs/RFPs/polkadot-collator-setup","permalink":"/docs/RFPs/polkadot-collator-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/polkadot-collator-setup.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"PHP Version of SCALE Codec","permalink":"/docs/RFPs/php-scale"},"next":{"title":"Polkadot Protocol Conformance Tests","permalink":"/docs/RFPs/polkadot-protocol_conformance_tests"}}');var s=o(74848),i=o(28453);const l={},r="Polkadot Collator Setup",a={},d=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1",id:"milestone-1",level:3}];function c(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"polkadot-collator-setup",children:"Polkadot Collator Setup"})}),"\n",(0,s.jsx)(t.admonition,{type:"danger",children:(0,s.jsxs)(t.p,{children:["This Request for Proposals is ",(0,s.jsx)(t.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status:"})," ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/blob/master/applications/unified_collator_node_deployment.md",children:"Implemented"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Proposer:"})," mmagician"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Your Project(s):"})," ",(0,s.jsx)(t.a,{href:"https://mmagician.github.io/",children:"https://mmagician.github.io/"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Projects you think this work could be useful for"})," Any parachain team"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,s.jsxs)(t.p,{children:["This is meant as a companion repository to ",(0,s.jsx)(t.a,{href:"https://github.com/w3f/polkadot-validator-setup",children:"polkadot-validator-setup"}),", which allows anyone to launch a validator node in an automated and secure fashion."]}),"\n",(0,s.jsx)(t.p,{children:"I would like to standardize (as much as possible) the process of spinning up new collator nodes for different parachains."}),"\n",(0,s.jsx)(t.p,{children:"I understand it might be tricky to bundle all the parachain launch setups into one repository, but there are some ideas of how this can be tackled:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Have a single collator ansible role, and each branch would correspond to a specific parachain"}),"\n",(0,s.jsx)(t.li,{children:"Have multiple ansible roles, and the main.yml in the project root to coordinate which roles get deployed."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"I would lean towards the second option. While it might lead to large repo size due to multiple collator setups (and multiple networks - the setup might be different on Kusama or Polkadot), it gives more flexibility to spin up multiple collators for independent chains without meddling with git branching too much."}),"\n",(0,s.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.p,{children:"Ideally the PoC would\nPlease list the deliverables of the project in as much detail as possible. Please also estimate the amount of work required and try to divide the project into meaningful milestones."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," Duration of the whole project"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-time equivalent (FTE):"}),"  Amount of time (in days) required for a single person to complete this project (",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Full-time_equivalent",children:"see"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," Amount of Payment in USD for the whole project."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1",children:"Milestone 1"}),"\n",(0,s.jsx)(t.p,{children:"Please add additional milestones in the same way:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," Duration of milestone 1"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  Amount of time (in days) required for a single person to complete this milestone"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," Amount of Payment in USD for milestone 1"]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"Title of the deliverable"}),(0,s.jsx)(t.td,{children:"Please describe the deliverable here as detailed as possible"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"..."}),(0,s.jsx)(t.td,{children:"..."})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>l,x:()=>r});var n=o(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);