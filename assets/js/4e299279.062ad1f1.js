"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[97944],{10183:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"applications/visualize_rust_lifetime","title":"Avoiding Rust Deadlocks via Visualizing Lifetime","description":"- Team Name: Song\'s research group at Pennsylvania State University","source":"@site/applications/visualize_rust_lifetime.md","sourceDirName":"applications","slug":"/applications/visualize_rust_lifetime","permalink":"/applications/visualize_rust_lifetime","draft":false,"unlisted":false,"editUrl":"https://github.com/w3f/Grants-Program/edit/master/applications/visualize_rust_lifetime.md","tags":[],"version":"current","frontMatter":{}}');var s=i(74848),r=i(28453);const o={},l="Avoiding Rust Deadlocks via Visualizing Lifetime",a={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-page_facing_up",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-busts_in_silhouette",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Legal Structure",id:"legal-structure",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles (if available)",id:"team-linkedin-profiles-if-available",level:3},{value:"Development Status \ud83d\udcd6",id:"development-status-open_book",level:2},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-nut_and_bolt",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Implement the bug detection component",id:"milestone-1--implement-the-bug-detection-component",level:3},{value:"Milestone 2 \u2014 Integrate the bug detection functionalities into rust-analyzer",id:"milestone-2--integrate-the-bug-detection-functionalities-into-rust-analyzer",level:3},{value:"Milestone 3 \u2014 Implement the visualization component",id:"milestone-3--implement-the-visualization-component",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Additional Information \u2795",id:"additional-information-heavy_plus_sign",level:2}];function c(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"avoiding-rust-deadlocks-via-visualizing-lifetime",children:"Avoiding Rust Deadlocks via Visualizing Lifetime"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Team Name:"})," Song's research group at Pennsylvania State University"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Payment Address:"})," TBD"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsxs)(t.strong,{children:[(0,s.jsx)(t.a,{href:"https://github.com/w3f/Grants-Program/tree/master#level_slider-levels",children:"Level"}),":"]})," 3"]}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"project-overview-page_facing_up",children:["Project Overview ","\ud83d\udcc4"]}),"\n",(0,s.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.p,{children:"Rust is a new programming language designed to provide both safety guarantees that are like high-level languages and performance guarantees that are like low-level languages. To achieve this design purpose, Rust leverages static compiler checks to rule out severe memory and thread safety issues at the compilation time. At runtime, Rust behaves like C/C++ and could deliver performance that is as good as C/C++. Due to its safety and performance benefits, Rust has seen increasing adoption in building low-level systems software, such as OSs and browsers. Rust is also used to implement many software systems in the Web3 technology stack (e.g., substrate, polkadot, ink!)."}),"\n",(0,s.jsx)(t.p,{children:"Rust's compiler checks are based on a suite of ownership and lifetime rules. The basic rule allows one value to only have one owner variable, and the value is dropped (freed) when its owner variable ends its lifetime. Rust extends the basic rule to allow ownership to be moved and borrowed, while still guaranteeing all accesses to a value to be within its owner variable's lifetime scope. Besides safety checks, lifetime is also used for automated resource management. For example, there is no explicit Unlock() in Rust. A Lock() function call returns a reference to the protected variable, and when the reference ends its lifetime, Rust automatically releases the acquired lock (by implicitly calling Unlock())."}),"\n",(0,s.jsx)(t.p,{children:"Rust's lifetime rules are complex and different from all other existing languages. It is challenging for Rust programmers to infer where a variable's lifetime ends. As a result, it is not uncommon for programmers to incorrectly identify the location where an implicit unlock is called. When a lock is held longer than programmers' expectation, the same lock may be acquired again or a different lock may be acquired before releasing the acquired lock, leading to a double-lock error or a lock-in-conflicting-orders error."}),"\n",(0,s.jsx)(t.p,{children:"In our previous work [1], we conducted an empirical study on real-world Rust concurrency bugs. We inspected GitHub commit logs for five Rust applications and five Rust libraries to collect previously fixed concurrency bugs. In total, we found 37 deadlocks due to the misunderstanding of where the implicit Unlock() is called, including 30 double locks and seven locks acquired in conflicting orders. These deadlocks constitute almost all lock-related concurrency bugs (37/38) in our collection. They are all from popular Rust software systems (e.g., Servo, Parity-Ethereum, TiKV, Redox) and have severely hurt the reliability of those systems before they were fixed."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("ins",{children:"A brief description of the project."}),"\nWe propose to build an IDE tool for visualizing the lifetime scope of a user-selected Rust variable. We believe our tool can help Rust programmers avoid deadlocks at the development stage. After writing a piece of code involving a mutex, a programmer can select the return value of a locking operation or the locking operation itself (when the return is not saved to a variable). Our tool will visualize the lifetime scope of the return value (i.e., the critical section). The programmer can then inspect whether the end of the critical section is expected. In addition, our tool will conduct deadlock detection for the selected critical section and provide detailed debugging information for identified bugs, such as highlighting blocking operations or function calls leading to blocking operations."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("ins",{children:"How our tool will be integrated into Substrate/Polkadot?"}),"\nBoth Substrate and Polkadot are implemented in Rust. Previously, double locks or locks in conflicting orders were fixed in Substrate [2, 3]. After applying our prototype, we identified four previously unknown double locks in Substrate or the dependent libraries of Substrate/Polkadot. We reported detected bugs. All of them were confirmed and fixed by developers [4, 5, 6]. We believe our tool will effectively prevent Substrate/Polkadot programmers from making similar mistakes and other types of mistakes our tool will reveal."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("ins",{children:"Why are we interested in creating this project?"}),"\nWe are interested in building the tool due to three reasons. First, our previous empirical study shows that deadlocks due to the misunderstanding of Rust's lifetime rules are common in Rust programs. Visualizing lifetime can avoid these bugs during the development stage, benefiting the whole Rust community. Second, the misunderstanding of Rust's lifetime rules can also cause memory bugs such as use-after-free and double free. Thus, the proposed tool has the potential to combat memory bugs. Third, the experience of building the proposed tool can inspire similar tools for other programming languages featuring lifetime (e.g., Kotlin)."]}),"\n",(0,s.jsx)(t.p,{children:"[1] Boqin Qin, Yilun Chen, Zeming Yu, Linhai Song, and Yiying Zhang. \u201cUnderstanding Memory and Thread Safety Practices and Issues in Real-World Rust Programs.\u201d In PLDI'2020."}),"\n",(0,s.jsxs)(t.p,{children:["[2] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/pull/197",children:"https://github.com/paritytech/substrate/pull/197"})]}),"\n",(0,s.jsxs)(t.p,{children:["[3] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/pull/6225/commits/61e3b8d53674687790d2b30bc450cd59e09f563d",children:"https://github.com/paritytech/substrate/pull/6225/commits/61e3b8d53674687790d2b30bc450cd59e09f563d"})]}),"\n",(0,s.jsxs)(t.p,{children:["[4] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/parity-db/pull/8",children:"https://github.com/paritytech/parity-db/pull/8"})]}),"\n",(0,s.jsxs)(t.p,{children:["[5] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/pull/6277",children:"https://github.com/paritytech/substrate/pull/6277"})]}),"\n",(0,s.jsxs)(t.p,{children:["[6] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/parity-common/pull/396",children:"https://github.com/paritytech/parity-common/pull/396"})]}),"\n",(0,s.jsx)(t.h3,{id:"project-details",children:"Project Details"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("ins",{children:"What have we already done?"}),"\nWe have built a prototype of the proposed tool. Our prototype can visualize a selected variable and conduct double-lock detection. We published a demonstration paper at CCS'2020 to describe the prototype. The paper can be found here: ",(0,s.jsx)(t.a,{href:"https://songlh.github.io/paper/vr.pdf",children:"https://songlh.github.io/paper/vr.pdf"}),". We also recorded a video to explain the prototype, and the video can be found here: ",(0,s.jsx)(t.a,{href:"https://youtu.be/L5F_XCOrJTQ",children:"https://youtu.be/L5F_XCOrJTQ"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"We applied the double-lock detection component to Substrate, Polkadot, and ink!. We found four previously unknown deadlocks. One is in Substrate. The other three are in the dependent libraries of Substrate or Polkadot. We reported all the detected bugs. All of them were fixed by developers based on our reporting. The information of the detected bugs is listed as follows:"}),"\n",(0,s.jsxs)(t.p,{children:["[PR-1] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/parity-db/pull/8",children:"https://github.com/paritytech/parity-db/pull/8"})]}),"\n",(0,s.jsxs)(t.p,{children:["[PR-2] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/pull/6277",children:"https://github.com/paritytech/substrate/pull/6277"})]}),"\n",(0,s.jsxs)(t.p,{children:["[PR-3] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/parity-common/pull/396",children:"https://github.com/paritytech/parity-common/pull/396"})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)("ins",{children:"What are we going to do?"}),"\nWe propose to extend the prototype along four directions:"]}),"\n",(0,s.jsx)(t.p,{children:"First, we will integrate our existing implementation of lifetime computation and deadlock detection to rust-analyzer, so that our proposed technique can easily cooperate with different text editors."}),"\n",(0,s.jsx)(t.p,{children:"Second, we will detect more types of deadlock bugs. Specifically, we will add the detection of locks with conflicting orders and misuse of mutex and non-mutex synchronization primitives (e.g., channel, conditional variable)."}),"\n",(0,s.jsx)(t.p,{children:"Third, we will identify and visualize more blocking operations that can potentially lead to deadlocks in a selected critical section such as receiving from a channel and waiting on a conditional variable."}),"\n",(0,s.jsx)(t.p,{children:"Fourth, we will implement the visualization functionality by parsing the analysis results generated by rust-analyzer in a text editor (i.e., VS Code) and document our tool."}),"\n",(0,s.jsx)(t.h3,{id:"ecosystem-fit",children:"Ecosystem Fit"}),"\n",(0,s.jsx)(t.p,{children:"There is no existing project similar to ours."}),"\n",(0,s.jsxs)(t.h2,{id:"team-busts_in_silhouette",children:["Team ","\ud83d\udc65"]}),"\n",(0,s.jsx)(t.h3,{id:"team-members",children:"Team members"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Name of team leader: Linhai Song"}),"\n",(0,s.jsx)(t.li,{children:"Names of team members: Linhai Song, Yiying Zhang, Ziyi Zhang"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"contact",children:"Contact"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Name:"})," Linhai Song"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Contact Email:"})," ",(0,s.jsx)(t.a,{href:"mailto:songlh@ist.psu.edu",children:"songlh@ist.psu.edu"})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Website:"})," ",(0,s.jsx)(t.a,{href:"https://songlh.github.io/",children:"https://songlh.github.io/"})]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"legal-structure",children:"Legal Structure"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Address:"})," Information of our legal structure will be disclosed privately."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Registered Legal Entity:"})," Pennsylvania State University"]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"teams-experience",children:"Team's experience"}),"\n",(0,s.jsx)(t.p,{children:"The team conducted an empirical study on memory bugs and concurrency bugs in real-world Rust programs. The study was published in PLDI'2020. Through this project, the team has built a comprehensive understanding of common errors made by programmers when coding Rust."}),"\n",(0,s.jsx)(t.p,{children:"The team built a prototype for the proposed tool. The prototype was published in the demonstration track of CCS'2020, demonstrating the team's capability to build the proposed technique."}),"\n",(0,s.jsx)(t.p,{children:"The team has another research paper on understanding concurrency bugs in Go published in ASPLOS'2019. The team has more than three years' research experience on concurrency bugs."}),"\n",(0,s.jsx)(t.p,{children:"Team member Linhai Song has 10 years of expertise in programming analysis, and has published at top programming languages and software engineering conferences (e.g., PLDI, ICSE, FSE, OOPSLA)."}),"\n",(0,s.jsx)(t.p,{children:"Team member Yiying Zhang has conducted various systems research with papers published at OSDI and SOSP."}),"\n",(0,s.jsx)(t.h3,{id:"team-code-repos",children:"Team Code Repos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/songlh/LDoctor",children:"LDoctor (ICSE '17)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/system-pclub/rust-study",children:"Rust-Study (PLDI '20)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/WukLab/LegoOS",children:"LegoOS (OSDI '18)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/WukLab/pDPM",children:"pDPM (ATC '20)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/WukLab/Pythia",children:"Pythia (USENIX SEC '20)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/WukLab/LITE",children:"LITE (SOSP '17)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/WukLab/Hotpot",children:"Hotpot (SoCC '17)"})}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Please also provide the GitHub accounts of all team members. If they contain no activity, references to projects hosted elsewhere or live are also fine."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/songlh",children:"https://github.com/songlh"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/system-pclub",children:"https://github.com/system-pclub"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/WukLab",children:"https://github.com/WukLab"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"team-linkedin-profiles-if-available",children:"Team LinkedIn Profiles (if available)"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/linhai-song-7a3b12120/",children:"https://www.linkedin.com/in/linhai-song-7a3b12120/"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.linkedin.com/in/yiyingzhang/",children:"https://www.linkedin.com/in/yiyingzhang/"})}),"\n"]}),"\n",(0,s.jsxs)(t.h2,{id:"development-status-open_book",children:["Development Status ","\ud83d\udcd6"]}),"\n",(0,s.jsxs)(t.p,{children:["We have built a prototype of the proposed tool. We wrote ",(0,s.jsx)(t.a,{href:"https://songlh.github.io/paper/vr.pdf",children:"one paper"})," and recorded ",(0,s.jsx)(t.a,{href:"https://youtu.be/L5F_XCOrJTQ",children:"one video"})," to describe the prototype."]}),"\n",(0,s.jsx)(t.p,{children:"We applied the bug detection component of the prototype to Substrate, Polkadot, and ink!. We found four previously unknown deadlocks. We reported all the detected bugs and all of them were fixed based on our reporting [PR-1, PR-2, PR-3]."}),"\n",(0,s.jsxs)(t.p,{children:["[PR-1] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/parity-db/pull/8",children:"https://github.com/paritytech/parity-db/pull/8"})]}),"\n",(0,s.jsxs)(t.p,{children:["[PR-2] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/pull/6277",children:"https://github.com/paritytech/substrate/pull/6277"})]}),"\n",(0,s.jsxs)(t.p,{children:["[PR-3] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/parity-common/pull/396",children:"https://github.com/paritytech/parity-common/pull/396"})]}),"\n",(0,s.jsxs)(t.h2,{id:"development-roadmap-nut_and_bolt",children:["Development Roadmap ","\ud83d\udd29"]}),"\n",(0,s.jsx)(t.h3,{id:"overview-1",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["We will integrate the proposed tool into rust-analyzer and demonstrate the virtualization functionality in ",(0,s.jsx)(t.a,{href:"https://github.com/microsoft/vscode",children:"VSCode"}),", which is an open-source IDE project. We will implement the proposed program analysis by analyzing Rust's MIR."]}),"\n",(0,s.jsx)(t.p,{children:"We divide the project into three milestones. We aim to finish the whole project in three months and achieve a milestone in each month."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Estimated Duration:"})," 3 months"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Full-Time Equivalent (FTE):"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Total Costs:"})," financial information will be disclosed privately."]}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-1--implement-the-bug-detection-component",children:"Milestone 1 \u2014 Implement the bug detection component"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," financial information will be disclosed privately."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"BSD"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how to run the bug detection component as a standalone tool on terminal."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"We will include unit tests to ensure the functionality and robustness of our code. We will also include 10 toy programs containing different types of deadlocks to demonstrate the bug detection capability. We will also run this component on the latest version of Substrate, Polkadot, and ink!. We will manually inspect all reported results to count the number of bugs and the number of false positives."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"Detecting Conflicting Locks"}),(0,s.jsx)(t.td,{children:"We will implement a detector that can identify deadlocks due to locks in conflicting orders through analyzing the MIR of Rust programs."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"Detecting Misuse of Mutex and Channel"}),(0,s.jsx)(t.td,{children:"We will implement a detector to identify deadlocks due to errors when using a mutex together with a channel."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"Detecting Misuse of Mutex and Conditional Variable"}),(0,s.jsx)(t.td,{children:"We will implement a detector to identify deadlocks due to mistakes when using a mutex together with a conditional variable."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a dockerfile to demonstrate the full functionality of this component."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-2--integrate-the-bug-detection-functionalities-into-rust-analyzer",children:"Milestone 2 \u2014 Integrate the bug detection functionalities into rust-analyzer"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," financial information will be disclosed privately."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"BSD"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how to install and use the changed rust-analyzer."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"We will also use the 10 toy programs designed in the last milestone to test whether the bug detection capability is successfully integrated into rust-analyzer."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"Extend Language Server Protocol (LSP)"}),(0,s.jsx)(t.td,{children:"We will extend LSP to contain the key information related to deadlocks (e.g., the start and the end of a critical section, blocking operations in a critical section)."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"Change rust-analyzer to emit MIR"}),(0,s.jsx)(t.td,{children:"We will change the build module of rust-analyzer to emit MIR for our bug detection functionalities."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"Conduct bug detection in rust-analyzer"}),(0,s.jsx)(t.td,{children:"We will change the analysis crate of rust-analyzer to execute the code for bug detection and change the server module to send the detection results out."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a dockerfile to demonstrate the full functionality of this component."})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"milestone-3--implement-the-visualization-component",children:"Milestone 3 \u2014 Implement the visualization component"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Estimated Duration:"})," 1 month"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"FTE:"}),"  3"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Costs:"})," financial information will be disclosed privately."]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Number"}),(0,s.jsx)(t.th,{children:"Deliverable"}),(0,s.jsx)(t.th,{children:"Specification"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0a."}),(0,s.jsx)(t.td,{children:"License"}),(0,s.jsx)(t.td,{children:"BSD"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0b."}),(0,s.jsx)(t.td,{children:"Documentation"}),(0,s.jsx)(t.td,{children:"We will provide both inline documentation of the code and a basic tutorial that explains how to install and use the visualization component in VSCode."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"0c."}),(0,s.jsx)(t.td,{children:"Testing Guide"}),(0,s.jsx)(t.td,{children:"We will include unit tests to ensure the functionality and robustness of our code. We will also include 10 toy programs to test whether channel operations are correctly identified, whether channel operations are correctly visualized, whether operations on conditional variables are correctly identified, and whether operations on conditional variables are correctly highlighted."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"1."}),(0,s.jsx)(t.td,{children:"Parse the Extended LSP"}),(0,s.jsx)(t.td,{children:"We will implement a component to parse the extended LSP and get computed information, such as the scope of a critical section and identified blocking operations."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"2."}),(0,s.jsx)(t.td,{children:"Highlight Blocking Operations"}),(0,s.jsx)(t.td,{children:"If a selected variable is the return of a locking operation, besides visualizing the critical section, we will also highlight identified channel operations, conditional variable operations, and locking operations in the selected critical section."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"3."}),(0,s.jsx)(t.td,{children:"Tutorial Writing"}),(0,s.jsx)(t.td,{children:"We will write a tutorial and record a video to explain how to use our tool."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"4."}),(0,s.jsx)(t.td,{children:"Docker"}),(0,s.jsx)(t.td,{children:"We will provide a dockerfile to demonstrate the full functionality of this component."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"future-plans",children:"Future Plans"}),"\n",(0,s.jsx)(t.p,{children:"In the future, we plan to extend the proposed tool along two directions."}),"\n",(0,s.jsx)(t.p,{children:"First, we plan to extend the proposed tool to cover memory bugs. Our previous empirical study showed that there are also memory bugs due to misunderstanding Rust's lifetime rules, such as use-after-free bugs and double-free bugs. The proposed tool has the potential to help Rust programmers avoid these bugs. Of course, we need to explore what program elements should be visualized for memory bugs."}),"\n",(0,s.jsx)(t.p,{children:"Second, we plan to conduct a survey to understand what challenges programmers face when understanding Rust's lifetime rules and whether the proposed tool can really help them avoid deadlocks. The survey results will guide us on improving the proposed tool, and broadly speaking, the evolution of Rust."}),"\n",(0,s.jsxs)(t.h2,{id:"additional-information-heavy_plus_sign",children:["Additional Information ","\u2795"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"How did you hear about the Grants Program?"})," Web3 Foundation Website"]}),"\n",(0,s.jsx)(t.p,{children:"Here you can also add any additional information that you think is relevant to this application but isn't part of it already, such as:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Work you have already done."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["We have built a prototype of the proposed tool. We wrote ",(0,s.jsx)(t.a,{href:"https://songlh.github.io/paper/vr.pdf",children:"one paper"})," and recorded ",(0,s.jsx)(t.a,{href:"https://youtu.be/L5F_XCOrJTQ",children:"one video"})," to describe the prototype."]}),"\n",(0,s.jsx)(t.p,{children:"We applied the bug detection component of the prototype to Substrate, Polkadot, and ink!. We found four previously unknown deadlocks. We reported all the detected bugs and all of them were fixed based on our reporting [PR-1, PR-2, PR-3]."}),"\n",(0,s.jsxs)(t.p,{children:["[PR-1] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/parity-db/pull/8",children:"https://github.com/paritytech/parity-db/pull/8"})]}),"\n",(0,s.jsxs)(t.p,{children:["[PR-2] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/substrate/pull/6277",children:"https://github.com/paritytech/substrate/pull/6277"})]}),"\n",(0,s.jsxs)(t.p,{children:["[PR-3] ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/parity-common/pull/396",children:"https://github.com/paritytech/parity-common/pull/396"})]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Wheter there are any other teams who have already contributed (financially) to the project."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"No"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Previous grants you may have applied for."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"No"})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>l});var n=i(96540);const s={},r=n.createContext(s);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);