"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[55350],{76991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"docs/RFPs/candle-auction","title":"Candle auction smart contract","description":"This Request for Proposals is closed, meaning we are not looking for any more proposals on this topic at the moment.","source":"@site/docs/RFPs/candle-auction.md","sourceDirName":"docs/RFPs","slug":"/docs/RFPs/candle-auction","permalink":"/docs/RFPs/candle-auction","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/docs/RFPs/candle-auction.md","tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"BPF-based ink! smart contracts","permalink":"/docs/RFPs/bpf-contracts"},"next":{"title":"Crowdloan Front End Template","permalink":"/docs/RFPs/crowdloan_front_end_template"}}');var i=n(74848),r=n(28453);const a={},o="Candle auction smart contract",c={},l=[{value:"Project Description \ud83d\udcc4",id:"project-description-page_facing_up",level:2},{value:"Deliverables \ud83d\udd29",id:"deliverables-nut_and_bolt",level:2},{value:"Milestone 1 - Basic auction",id:"milestone-1---basic-auction",level:3},{value:"Milestone 2 - Random close",id:"milestone-2---random-close",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"candle-auction-smart-contract",children:"Candle auction smart contract"})}),"\n",(0,i.jsx)(t.admonition,{type:"danger",children:(0,i.jsxs)(t.p,{children:["This Request for Proposals is ",(0,i.jsx)(t.em,{children:"closed"}),", meaning we are not looking for any more proposals on this topic at the moment."]})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Status:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/agryaznov/candle-auction-ink/tree/master",children:"Implemented"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Proposer:"})," ",(0,i.jsx)(t.a,{href:"https://github.com/mmagician",children:"mmagician"})]}),"\n"]}),"\n",(0,i.jsxs)(t.h2,{id:"project-description-page_facing_up",children:["Project Description ","\ud83d\udcc4"]}),"\n",(0,i.jsx)(t.p,{children:"Auctions will come in handy for various types of applications, but especially for NFTs."}),"\n",(0,i.jsxs)(t.p,{children:["The idea behind this proposal is to create an ",(0,i.jsx)(t.code,{children:"ink!"})," smart contract that is able to run a candle auction mechanism. This will be known to Polkadot followers from the ",(0,i.jsx)(t.a,{href:"https://wiki.polkadot.network/docs/en/learn-auction",children:"parachain auction mechanism"}),". One of the advantages of the candle mechanism is that it incentivises bidders to submit their true bids early, thus leading to more optimal market."]}),"\n",(0,i.jsx)(t.p,{children:"Rather than restricting the use of candle auctions to parachain slot allocation only, users should be able to utilise it for other needs, e.g. auctioning off their NFTs."}),"\n",(0,i.jsx)(t.p,{children:"Such a smart contract could have specific call logic embedded and give the winner the right to execute that logic (with supplied parameters). For example, the smart contract could own an asset, and such call logic could transfer such asset to whichever account the winners supplies."}),"\n",(0,i.jsxs)(t.h2,{id:"deliverables-nut_and_bolt",children:["Deliverables ","\ud83d\udd29"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Total Estimated Duration:"})," 1 month"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Full-time equivalent (FTE):"})," 1"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-1---basic-auction",children:"Milestone 1 - Basic auction"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 3 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 7500 DAI"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1."}),(0,i.jsx)(t.td,{children:"Start & close period"}),(0,i.jsx)(t.td,{children:"Create an auction mechanism that has a fixed start and end period"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2."}),(0,i.jsx)(t.td,{children:"Accept bids"}),(0,i.jsx)(t.td,{children:"Any user can call the contract with a bid that is higher than the last highest bid"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"3."}),(0,i.jsx)(t.td,{children:"Find winner"}),(0,i.jsx)(t.td,{children:"Determine a winner at the close period"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"4."}),(0,i.jsx)(t.td,{children:"Embed reward logic"}),(0,i.jsx)(t.td,{children:"The contract creator should set logic that will be executable by the winner. Such call logic should accept optional parameters. This logic should be set at the start and be immutable henceforth"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"5."}),(0,i.jsx)(t.td,{children:"Payout"}),(0,i.jsx)(t.td,{children:"A winner should be able to make a call, with an arbitrary number of parameters, to the reward/payout method. The contract would then pass the arguments to whichever logic is encoded as the reward (and e.g. send tokens)"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"milestone-2---random-close",children:"Milestone 2 - Random close"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Estimated Duration:"})," 1 weeks"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Costs:"})," 2500 DAI"]}),"\n"]}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Number"}),(0,i.jsx)(t.th,{children:"Deliverable"}),(0,i.jsx)(t.th,{children:"Specification"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"1."}),(0,i.jsx)(t.td,{children:"Retroactive close"}),(0,i.jsx)(t.td,{children:"At the close block, rather than announcing the highest bidder at that point, the contract should randomly determine a block in the past (between start & end blocks) and calculate the highest bidder at that block to be the winner"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"2."}),(0,i.jsx)(t.td,{children:"Randomness source (optional)"}),(0,i.jsx)(t.td,{children:"Randomness source should be configurable (e.g. from hash of the block in the relay chain, from a randomness beacon parachain etc.)"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var s=n(96540);const i={},r=s.createContext(i);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);