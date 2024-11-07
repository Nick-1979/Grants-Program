"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[19131],{81316:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"applications/bldg_app","title":"BLDG App","description":"This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don\'t remove any of the mandatory parts presented in bold letters or as headlines! See the Open Grants Program Process on how to submit a proposal.","source":"@site/applications/bldg_app.md","sourceDirName":"applications","slug":"/applications/bldg_app","permalink":"/applications/bldg_app","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/bldg_app.md","tags":[],"version":"current","frontMatter":{}}');var r=i(74848),s=i(28453);const a={},l="BLDG App",o={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 ESG Ratings Dashboard",id:"milestone-1--esg-ratings-dashboard",level:3},{value:"Milestone 2 \u2014  User Blockchain Onboarding (Identity Management)",id:"milestone-2---user-blockchain-onboarding-identity-management",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"bldg-app",children:"BLDG App"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["This document is referenced in the terms and conditions and therefore needs to contain all the required information. Don't remove any of the mandatory parts presented in bold letters or as headlines! See the ",(0,r.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/blob/master/README_2.md",children:"Open Grants Program Process"})," on how to submit a proposal."]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Team Name:"})," BLDG BLOX INC"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Payment Address:"})," 3BR66M3qUbYKnUaP7ZF3G6cuyCcEF6nbgf"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Status:"})," ",(0,r.jsx)(n.a,{href:"https://github.com/w3f/Open-Grants-Program/pull/131#issuecomment-874245652",children:"Terminated"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"The above combination of your GitHub account submitting the application and payment address will be your unique identifier during the program. Please keep them safe."})}),"\n",(0,r.jsxs)(n.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,r.jsx)(n.h3,{id:"overview",children:"Overview"}),"\n",(0,r.jsx)(n.p,{children:"The Bldg App is an online bulletin board to support organizations to work closely with their communities. Since launching in January 2020, our platform has supported dozens of diverse organizations including universities, coworking spaces, and nonprofits to create and share resources."}),"\n",(0,r.jsx)(n.p,{children:"Our first milestone is to deploy smart contracts to log project engagement activity and form an ESG (Environmental, Social, and Corporate Governance) ratings dashboard. This dashboard will allow institutional users to measure project and campaign growth."}),"\n",(0,r.jsx)(n.p,{children:"Our second milestone aims to help onboard users to the polkadot ecosystem. We\u2019ll be integrating with polkadot.js and introducing users to the web3 fundamentals. Make use of current in development polkadot SDKs around user identity and data management (e.g kilt.io)"}),"\n",(0,r.jsx)(n.p,{children:"After 5 years of developing various creative and social-impact programs in the blockchain sector, we began developing the Bldg App in 2019 to provide an alternative infrastructure for community management and member contributions. Our aim was to develop an application with public traction first, then integrate smart contracts so that organizations and users could have more confidence and control over their data."}),"\n",(0,r.jsx)(n.p,{children:"With our MVP live and supporting organizations across the US, we\u2019re moving to the next phase of bridging the platform with blockchain through analytical and rating tools such as this ESG dashboard."}),"\n",(0,r.jsx)(n.h3,{id:"project-details",children:"Project Details"}),"\n",(0,r.jsx)(n.p,{children:"Core functionality for the ESG ratings dashboard is split into calculations, storage and visualisations."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ESG Rating Calculations"})," \u2013 Serverless functions\nThe rating system will initially be run as a callable serverless function. Passing input data (TBD) returns rating value and/or submits corresponding value with a timestamp and issuing authority (initially BLDG BLOX inc/BLDG app.)"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/ Calculate ESG Rating"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ESG Rating Dashboard UI"})," \u2013 Front-end Data visualisations"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/ Request All"}),"\n",(0,r.jsx)(n.li,{children:"/ Request By Project ID"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ESG Rating Data Storage"})," \u2013 Smart Contract Interactions"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"/ Request Latest By Project ID"}),"\n",(0,r.jsx)(n.li,{children:"/ Request All By Project ID"}),"\n",(0,r.jsx)(n.li,{children:"/ Submit By Project ID"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Smart Contract <\u2013> Jamstack bridge"})," \u2013 Serverless functions\n// Matches above smart contract requests to be stored in a real-time database \u2013 removing the need for individual users to continually interact with the blockchain cientside.\nScheduled tasks to run and submit ESG rating calculations"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Tech Stack"})}),"\n",(0,r.jsx)(n.p,{children:"The Bldging app MVP uses the jamstack style architecture. A pre-rendered SPA served via Netlify. We use Google Firebase real-time database for data storage, Firebase authentication for ease-of-use Oauth and serverless functions where necessary.\nThe front-end is powered by Nuxt.js"}),"\n",(0,r.jsxs)(n.p,{children:["We\u2019ll provide documentation, examples and source code via github (",(0,r.jsx)(n.a,{href:"https://github.com/BLDG-BLOX/",children:"https://github.com/BLDG-BLOX/"}),") for the following."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Polkadot parachain based smart contract for Submitting/Reading Project based ESG rating values"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Serverless functions for bridging data from on-chain to off-chain database"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Alternative dashboard UI for viewing and verifying ESG ratings  \u2013 a replica of what we\u2019re using internally for the Bldging app extracted for ease-of use."}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Current MVP running at  \u2013 ",(0,r.jsx)(n.a,{href:"http://bldg.app/",children:"http://bldg.app/"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Information and articles can be found on medium at ",(0,r.jsx)(n.a,{href:"https://medium.com/bldg-blox",children:"https://medium.com/bldg-blox"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,r.jsx)(n.p,{children:"Currently, ESG analysis and data are created through private services (i.e. Morningstar, MSCI, Sustainalytics) with very little information available for public use. Our aim is to expand on real-time ESG analysis produced by the user and organizational activity on our platform, all verified and secure on-chain."}),"\n",(0,r.jsx)(n.p,{children:"We believe this to be a unique opportunity to transition our current and new users onto blockchain while deploying a consumer application on Polkadot."}),"\n",(0,r.jsxs)(n.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,r.jsx)(n.h3,{id:"team-members",children:"Team members"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Michael Lee, CEO"}),"\n",(0,r.jsx)(n.li,{children:"Sam Billingham, Lead Engineer"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"contact",children:"Contact"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Contact Name:"})," Micheal Lee"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Contact Email:"})," ",(0,r.jsx)(n.a,{href:"mailto:micheal@bldgblox.io",children:"micheal@bldgblox.io"})]}),"\n",(0,r.jsxs)(n.li,{children:["Website: ",(0,r.jsx)(n.a,{href:"https://bldg.app/",children:"https://bldg.app/"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Registered Address:"})," 100 Bogart St. Brooklyn NY, 11206"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Registered Legal Entity:"})," BLDG BLOX Inc."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Our team has 5 years of experience with blockchain program development and creative programming. Interest and development in blockchain began with the Steem protocol, initially launching the Sndbox Incubator as a foundational program for global participants to launch social enterprises through the various tools available on Steem."}),"\n",(0,r.jsxs)(n.li,{children:["Our flagship project included Steem Park (",(0,r.jsx)(n.a,{href:"https://youtu.be/TChGLKaspFk",children:"https://youtu.be/TChGLKaspFk"}),"), the first public design project launched through blockchain, with a 10,000USD grant support from the Steem Foundation."]}),"\n",(0,r.jsx)(n.li,{children:"Over the years, our office has support several blockchain companies with creative and community development including Cryptokitties, Blockade Games, the TQ Tezos, and other. Sample projects can be found on thecreativecrypto.com."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/Sambillingham",children:"https://github.com/Sambillingham"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/code-with-sam",children:"https://github.com/code-with-sam"})}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"team-linkedin-profiles",children:"Team LinkedIn Profiles"}),"\n",(0,r.jsxs)(n.p,{children:["Micheal Lee: ",(0,r.jsx)(n.a,{href:"https://www.linkedin.com/in/michaelslee54/",children:"https://www.linkedin.com/in/michaelslee54/"}),"\nSam Billingham:  ",(0,r.jsx)(n.a,{href:"https://www.linkedin.com/in/sambillingham/",children:"https://www.linkedin.com/in/sambillingham/"})]}),"\n",(0,r.jsxs)(n.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,r.jsx)(n.h3,{id:"overview-1",children:"Overview"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Total Estimated Duration:"})," Project will launch in February/March 2021 (~3months)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Full-time equivalent (FTE):"}),"  2"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Total Costs:"})," ~20,000 USD (1.2 BTC)"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"milestone-1--esg-ratings-dashboard",children:"Milestone 1 \u2014 ESG Ratings Dashboard"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Estimated Duration:"})," 6 weeks"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FTE:"}),"  2"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Costs:"})," 0.6 BTC"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Number"}),(0,r.jsx)(n.th,{children:"Deliverable"}),(0,r.jsx)(n.th,{children:"Specification"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0a."}),(0,r.jsx)(n.td,{children:"License"}),(0,r.jsx)(n.td,{children:"Apache 2.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0b."}),(0,r.jsx)(n.td,{children:"Documentation"}),(0,r.jsx)(n.td,{children:"We will provide inline documentation where helpful. External documentation for making use of example code and replicating any data/interactions."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1."}),(0,r.jsx)(n.td,{children:"Interface Designs"}),(0,r.jsx)(n.td,{children:"Wireframes and designs provided in Adobe XD to showcase dashboard"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2."}),(0,r.jsx)(n.td,{children:"Smart contract"}),(0,r.jsx)(n.td,{children:"We will create a smart contract for submitting ESG (Environmental, Social, and Corporate Governance) rating values for individual projects/organisations. Written in Ink to be deployed on a polkadot parachain. Contract functionality to support read/write storage access of rating value (rating, issuing/signing authority & timestamp)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3."}),(0,r.jsx)(n.td,{children:"Automate ESG Ratings"}),(0,r.jsx)(n.td,{children:"Node.js scheduled serverless functions for calculating and submitting ESG values to smart contract. Will calculate ESG (TBD) using data provided by clientside app input and/or cloud database (Firebase) and broadcast function calls to substrate chain using JS polkadot/api. Ratings to run periodically (daily/weekly) and on demand."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4a."}),(0,r.jsx)(n.td,{children:"Dashboard"}),(0,r.jsx)(n.td,{children:"Vue.js powered SPA dashboard interface \u2013 showcase a project\u2019s current and historical ESG ratings."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4b."}),(0,r.jsx)(n.td,{children:"Dashboard"}),(0,r.jsx)(n.td,{children:"View and verify issuing authority. Show the percentage of onchain/offchain data used in the calculations. Where possible provide access to raw data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4c."}),(0,r.jsx)(n.td,{children:"Dashboard"}),(0,r.jsx)(n.td,{children:"Searching, sorting & filtering UI"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4d."}),(0,r.jsx)(n.td,{children:"Dashboard"}),(0,r.jsx)(n.td,{children:"Shareable individual card/view per Project"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5."}),(0,r.jsx)(n.td,{children:"Bldg.app"}),(0,r.jsx)(n.td,{children:"Integrate dashboard with current BLDG.app MVP"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"6."}),(0,r.jsx)(n.td,{children:"Example"}),(0,r.jsx)(n.td,{children:"We\u2019ll host a separate prototype version of the standalone dashboard UI"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"7."}),(0,r.jsx)(n.td,{children:"Article/Tutorial"}),(0,r.jsx)(n.td,{children:"We will write an article and/or video tutorials that explain the work done as part of the grant and how to make use of it."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"milestone-2---user-blockchain-onboarding-identity-management",children:"Milestone 2 \u2014  User Blockchain Onboarding (Identity Management)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Estimated Duration:"})," 6 weeks"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"FTE:"}),"  2"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Costs:"})," 0.6 BTC"]}),"\n"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Number"}),(0,r.jsx)(n.th,{children:"Deliverable"}),(0,r.jsx)(n.th,{children:"Specification"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0a."}),(0,r.jsx)(n.td,{children:"License"}),(0,r.jsx)(n.td,{children:"Apache 2.0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"0b."}),(0,r.jsx)(n.td,{children:"Documentation"}),(0,r.jsx)(n.td,{children:"We will provide inline documentation where helpful. External documentation for making use of example code and replicating any data/interactions."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"1."}),(0,r.jsx)(n.td,{children:"Polkadot.js"}),(0,r.jsx)(n.td,{children:"Integrate polkadot.js extension"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"2."}),(0,r.jsx)(n.td,{children:"Link Accounts"}),(0,r.jsx)(n.td,{children:"Allow users of bldg.app to link internal account with a Polkadot parachain account"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"3."}),(0,r.jsx)(n.td,{children:"Identity Protocol"}),(0,r.jsx)(n.td,{children:"Integrate with third party identity protocol  or data management SDK (e.g Kilt.io)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4."}),(0,r.jsx)(n.td,{children:"Data Metrics"}),(0,r.jsx)(n.td,{children:"SAssign metrics to individual users \u2013 e.g NGO-online-contributor for activity within BLDG application in NGO based projects"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"5."}),(0,r.jsx)(n.td,{children:"Article/Tutorial"}),(0,r.jsx)(n.td,{children:"Showcase how bldg.app is integrating with other parachain based protocols in a series of walkthrough articles/videos. The advantages it provides and how other applications can do the same."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Our plans include a number of further milestones in blockchain integration with Polkadot."}),"\n",(0,r.jsx)(n.li,{children:"Once the dashboard is complete, several key metrics will be integrated into the front end of the Bldg App with links back to the parachain explorer."}),"\n",(0,r.jsx)(n.li,{children:"Finally, leveraging ESG data for institutional grants, investing, donations, and crowdfunding. We are currently speaking with the Acala team to explore how to integrate stablecoin transactions for this purpose."}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["What work has been done so far?\n\u2013 The Bldg App MVP is live \u2013 ",(0,r.jsx)(n.a,{href:"http://bldg.app/",children:"http://bldg.app/"})]}),"\n",(0,r.jsx)(n.li,{children:"Are there are any teams who have already contributed (financially) to the project?\n\u2013 No"}),"\n",(0,r.jsx)(n.li,{children:"Have you applied for other grants so far?\n\u2013 No"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>l});var t=i(96540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);