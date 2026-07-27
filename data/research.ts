import type { Research } from "@/types";


export const research: Research[] = [

  {

    slug:
      "bridge-security-analysis",


    title:
      "Bridge Security: Cross-Chain Attack Surfaces",


    description:
      "A deep analysis of cross-chain bridge vulnerabilities including message verification failures, validator trust assumptions, replay attacks, and settlement security.",


    category:
      "Bridge Security",


    date:
      "2026",


    readTime:
      "15 min read",


    tags:[

      "Cross-chain",

      "Bridges",

      "Smart Contracts",

      "Security",

      "Ethereum"

    ],


    featured:true,


    href:
      "/research/bridge-security-analysis",


    findings:[

      "Message authentication weaknesses",

      "Replay attack prevention",

      "Validator trust models",

      "Secure settlement design"

    ]

  },



  {


    slug:
      "finality-protocol-research",


    title:
      "Designing Secure Finality Protocols",


    description:
      "Research into distributed verification, cryptographic attestations, and secure settlement primitives for decentralized systems.",


    category:
      "Protocol Research",


    date:
      "2026",


    readTime:
      "12 min read",


    tags:[

      "Cryptography",

      "Distributed Systems",

      "Blockchain",

      "Verification"

    ],


    featured:true,


    href:
      "/research/finality-protocol",


    github:
      "https://github.com/SakshiDangi/finality",


    findings:[

      "Deterministic verification",

      "State machine design",

      "Cryptographic proofs"

    ]

  },


  {


    slug:
      "smart-contract-security-patterns",


    title:
      "Smart Contract Security Patterns",


    description:
      "A collection of security patterns for building safer Solidity protocols and decentralized applications.",


    category:
      "Smart Contract Security",


    date:
      "2026",


    tags:[

      "Solidity",

      "Auditing",

      "EVM",

      "Security"

    ],


    featured:true,


    href:
      "/research/smart-contract-security"

  }

];

