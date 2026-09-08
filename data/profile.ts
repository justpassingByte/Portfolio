export interface ProfileData {
  name: string;
  handle: string;
  title: string;
  tagline: string;
  avatar: string;
  location: string;
  status: string;
  bio: string[];
  socials: {
    github: string;
    facebook: string;
    discord: string;
    discordUsername: string;
    email: string;
  };
  mindsets: {
    title: string;
    principle: string;
    description: string;
  }[];
  techStackCategories: {
    category: string;
    skills: {
      name: string;
      level?: 'core' | 'proficient' | 'advanced';
      iconName?: string;
    }[];
  }[];
  systemHighlights: {
    id: string;
    title: string;
    badge: string;
    summary: string;
    description: string;
    keyPatterns: string[];
  }[];
}

export const profileData: ProfileData = {
  name: 'Thang Nguyen',
  handle: 'justpassingByte',
  title: 'Core Systems & Full-Stack Architect',
  tagline: 'Architecting interconnected platform ecosystems, high-trust marketplaces, distributed task queues, and agentic AI systems.',
  avatar: '/me.jpg',
  location: 'Vietnam',
  status: 'Open for engineering opportunities',
  bio: [
    'Core Systems & Full-Stack Architect with a deep focus on distributed transaction integrity, high-concurrency data safety, and interconnected platform ecosystems.',
    'Currently architecting mission-critical infrastructure at Trustbase (digital product marketplace & freelance escrow engine), alongside designing closed-loop ecosystems connecting cybercafe IoT telemetry with competitive esports arenas (Netsla ↔ Testictour ↔ TFT Grimoire) and AgriTech traceability (ChayFood ↔ Farm Management).',
    'Believer that real-world software must bridge physical operations with distributed computational guarantees. Driven to collaborate within high-standard engineering teams where code quality, distributed patterns, and production reliability come first.',
  ],
  socials: {
    github: 'https://github.com/justpassingByte',
    facebook: 'https://facebook.com/Leoz666',
    discord: 'https://discord.com/users/ngusitink',
    discordUsername: 'ngusitink',
    email: 'justpassingbyte03@gmail.com',
  },
  mindsets: [
    {
      title: 'Pragmatic MVP Scoping',
      principle: 'Scope Tightly for MVP, Architect for Scale',
      description: 'Knowing what is essential for each phase eliminates premature overengineering. In 0-to-1, focus ruthlessly on the core transactional loop—avoiding microservice bloat or speculative abstractions while enforcing clean vertical-slice boundaries that scale without rewrites.',
    },
    {
      title: 'Interconnected Network Value',
      principle: 'Ecosystem Synergy > Standalone Apps',
      description: 'Individual apps become exponentially more powerful when engineered as self-reinforcing ecosystems: where venue hardware telemetry directly feeds tournament brackets, and upstream farm supply chains map directly to personal health metrics.',
    },
    {
      title: 'Operational Loop Completion',
      principle: 'Closed Operational Loops > Vanity Code',
      description: 'Software must complete the end-to-end loop: from IoT telemetry on a cybercafe desk to O2O venue revenue; from agricultural harvest batch certificates to food on a plate; from payment webhooks to vendor cashflow.',
    },
    {
      title: 'Financial & State Determinism',
      principle: 'State Determinism & Financial Integrity',
      description: 'Model complex multi-party domains as formal Finite State Machines (FSM). Enforce strict concurrency barriers with PostgreSQL `SELECT ... FOR UPDATE` and Redis distributed locks to eliminate double-spending under concurrent traffic.',
    },
    {
      title: 'Controlled & Invariant-Bound Agents',
      principle: 'Ground-Truth Runtime Observability > Speculative AI Hallucinations',
      description: 'Treating autonomous agents as tightly controlled, bounded engineering systems. Grounding agent decisions in runtime memory truth (V8 CDP heap extraction over DOM assumptions to eliminate hallucinations), prioritizing zero-token AST parsing for structured data, enforcing context-isolated subagent swarms with fail-safe timeouts, and closing the feedback loop with dual machine RAG and human spatial topology.',
    },
  ],
  techStackCategories: [
    {
      category: 'Core Backend & Frontend',
      skills: [
        { name: 'Next.js', level: 'core' },
        { name: 'NestJS', level: 'core' },
        { name: 'TypeScript', level: 'core' },
        { name: 'React', level: 'core' },
        { name: 'PostgreSQL', level: 'core' },
        { name: 'Redis', level: 'core' },
        { name: 'Tailwind CSS', level: 'proficient' },
        { name: 'Node.js', level: 'core' },
      ],
    },
    {
      category: 'Distributed Systems & Concurrency',
      skills: [
        { name: 'State Machines (FSM)', level: 'advanced' },
        { name: 'Pessimistic DB Locks', level: 'advanced' },
        { name: 'Redis Distributed Locks', level: 'advanced' },
        { name: 'BullMQ & Event Queues', level: 'advanced' },
        { name: 'Payment Factory & Adapters', level: 'advanced' },
        { name: 'Webhook Idempotency', level: 'advanced' },
        { name: 'Presigned S3 URLs', level: 'proficient' },
        { name: 'JWT & RBAC Auth', level: 'proficient' },
      ],
    },
    {
      category: 'Testing & Observability',
      skills: [
        { name: 'Vitest', level: 'proficient' },
        { name: 'Playwright', level: 'proficient' },
        { name: 'Testcontainers', level: 'proficient' },
        { name: 'Correlation IDs', level: 'proficient' },
        { name: 'Structured Logging', level: 'proficient' },
      ],
    },
    {
      category: 'Agentic AI & Tooling',
      skills: [
        { name: 'Subagent Orchestration', level: 'advanced' },
        { name: 'Agent Skills & Rules', level: 'advanced' },
        { name: 'MCP Architecture', level: 'advanced' },
        { name: 'Tool Calling & Plugins', level: 'advanced' },
        { name: 'Claude Code', level: 'proficient' },
        { name: 'Antigravity CLI', level: 'proficient' },
        { name: 'RAG Retrieval', level: 'proficient' },
      ],
    },
    {
      category: 'DevOps & Infrastructure',
      skills: [
        { name: 'Docker', level: 'proficient' },
        { name: 'CI/CD GitHub Actions', level: 'proficient' },
        { name: 'Linux Server', level: 'proficient' },
        { name: 'Nginx', level: 'proficient' },
        { name: 'PM2', level: 'proficient' },
        { name: 'Git', level: 'core' },
      ],
    },
  ],
  systemHighlights: [
    {
      id: 'fsm',
      title: 'State-Driven Architectures (FSM)',
      badge: 'Architecture Pattern',
      summary: 'Deterministic Order, Escrow & Dispute Lifecycles',
      description: 'Modeled complex multi-party states as formal Finite State Machines to eliminate race conditions, invalid transitions, and orphaned financial states under concurrent customer traffic.',
      keyPatterns: ['Deterministic state transition graphs', 'Order & Escrow status guards', 'Dispute reconciliation audit log'],
    },
    {
      id: 'concurrency',
      title: 'Concurrency Control & Financial Data Integrity',
      badge: 'Data Integrity',
      summary: 'Pessimistic Locking & Redis Distributed Locks',
      description: 'Engineered strict concurrency barriers using PostgreSQL `SELECT ... FOR UPDATE` row locks coupled with Redlock/Redis distributed locks to guarantee zero double-spending and prevent inventory overselling during flash sales.',
      keyPatterns: ['SELECT ... FOR UPDATE row locking', 'Redis distributed lock manager', 'Atomic balance debit/credit checks'],
    },
    {
      id: 'payments',
      title: 'Modular Payment Engines & Cashflow Integrity',
      badge: 'Fintech / Payments',
      summary: 'Factory & Adapter Pattern with Webhook Idempotency',
      description: 'Abstracted payment providers into modular adapters under a unified Factory. Implemented cryptographic signature verification and Redis-backed idempotency keys to prevent duplicate transaction charges.',
      keyPatterns: ['Payment Gateway Adapter interface', 'Idempotency key deduplication', 'Automated revenue reconciliation'],
    },
    {
      id: 'queues',
      title: 'Asynchronous Task Processing & Event Queues',
      badge: 'Distributed Systems',
      summary: 'BullMQ / Redis with Exponential Retries & DLQ',
      description: 'Decoupled heavy I/O and external webhook dispatches from HTTP request cycles into BullMQ job queues with exponential backoff retries, concurrency throttles, and Dead Letter Queues (DLQ) for failed task inspection.',
      keyPatterns: ['BullMQ background worker pools', 'Exponential backoff & jitter retry', 'Dead Letter Queue observability'],
    },
    {
      id: 's3',
      title: 'Secure Digital Asset Delivery',
      badge: 'Cloud Storage & Security',
      summary: 'Direct S3 Presigned URLs with Short-Lived Access',
      description: 'Bypassed web server I/O bottlenecks by generating short-lived cryptographic presigned URLs for client-side uploads and authorized downloads, ensuring multi-vendor digital property protection.',
      keyPatterns: ['Presigned S3 upload & download tickets', 'HMAC authorization tokens', 'Zero server-bandwidth saturation'],
    },
    {
      id: 'agentic',
      title: 'Agentic AI Workflows & Automated Verification',
      badge: 'AI-Native Engineering',
      summary: 'Subagents, Context-Aware Skills & Code Review Pipelines',
      description: 'Replaced unpredictable prompt generation with deterministic agentic architectures: orchestrating hierarchical subagents, enforcing repository domain skills, and running automated code review passes.',
      keyPatterns: ['Subagent delegation trees', 'MCP tool protocols', 'Pre-merge automated logic verification'],
    },
  ],
};
