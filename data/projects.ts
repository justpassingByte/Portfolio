export interface ProjectSection {
  title: string;
  body: string;
  codeSnippet?: string;
}

export interface SystemArchitectureSpec {
  fsmStages?: { name: string; description: string; next: string[] }[];
  concurrencyModel?: string;
  queueStrategy?: string;
  paymentModel?: string;
}

export interface Project {
  slug: string;
  title: string;
  role: string;
  category: string;
  paths: string[];
  link?: string;
  stagingLink?: string;
  github?: string;
  githubBackend?: string;
  isPrivate?: boolean;
  featured?: boolean;
  description: string;
  summary: string;
  architectureHighlight?: string;
  stack: string[];
  highlights: string[];
  systemSpecs?: SystemArchitectureSpec;
  sections: ProjectSection[];
  recruiterTakeaways: string[];
}

export const projects: Project[] = [
  {
    slug: 'trustbase',
    title: 'Trustbase',
    role: 'Core Systems & Full-Stack Architect',
    category: 'Multi-Vendor Marketplace & Distributed Systems',
    paths: ['/trustbase.png'],
    link: 'https://trustinfy.com',
    stagingLink: 'https://customer.trustbase.com.vn',
    isPrivate: true,
    featured: true,
    description: 'Enterprise multi-vendor digital products and freelance marketplace built on a pnpm monorepo, strict boundary architecture, state-driven escrow lifecycles, and resilient distributed queues.',
    summary:
      'Trustbase is an enterprise-grade digital products and freelance marketplace connecting creators, freelancers, and clients. I architected its mission-critical core: a pnpm monorepo (@trustbase/customer, @trustbase/api, @trustbase/admin), a machine-enforced 6-layer trust boundary preventing admin contract leaks to customer bundles, a deterministic FSM escrow engine with pessimistic DB locks, dual payout pipelines (bank transfers + custom QR codes), and BullMQ background task processing.',
    architectureHighlight:
      'Pnpm monorepo with Express 5 vertical slices, Drizzle ORM, machine-enforced @trustbase/api-contracts, FSM escrow engine, and 6-layer architectural trust boundaries.',
    stack: [
      'Next.js 14',
      'Express 5',
      'TypeScript',
      'Drizzle ORM',
      'PostgreSQL',
      'Redis',
      'BullMQ',
      'Pnpm Workspace',
      'Docker',
      'PM2 Cluster',
      'Presigned S3',
      'Vitest',
    ],
    highlights: [
      'Monorepo Architecture: Structured as a pnpm workspace uniting `@trustbase/customer` (:4200), `@trustbase/api` (:4201, Express 5), and `@trustbase/admin` (:4203).',
      'Strict Trust Boundary Architecture: Designed 6 automated guardrail layers (ESLint rules, AST import graph validator, bundle auditor, Husky hooks) with machine-enforced type-only `@trustbase/api-contracts` to prevent admin schema leakage.',
      'Bounded-Context Vertical Slices: Structured backend into 25+ isolated bounded contexts (orders, payments, seller-payouts, seller-onboarding, disputes, mediations, contracts, esign, ekyc, s3-storage, audit-logs).',
      'State-Driven Escrow FSM: Modeled complete multi-party transaction lifecycles (Initiated -> Pending -> Escrow Locked -> Delivered -> Settled / Disputed) eliminating illegal financial transitions.',
      'Dual Payout Engine: Engineered seller payout pipelines supporting both traditional IBAN/bank transfers and dynamic/custom QR code uploads with Zod refinements and Drizzle persistence.',
      'Zero-Bandwidth S3 Delivery: Designed client-direct asset upload and download pipelines via short-lived AWS S3 presigned URLs, bypassing Node.js server RAM/bandwidth saturation.',
      'Automated PM2 Local Deployment: Configured one-command deployment (`delo`) with zero-downtime PM2 cluster reloads and Dockerized PostgreSQL/Redis.',
    ],
    systemSpecs: {
      fsmStages: [
        { name: 'ORDER_INITIATED', description: 'Customer triggers checkout; inventory reserved; unique idempotency key assigned.', next: ['PAYMENT_PENDING', 'CANCELLED'] },
        { name: 'PAYMENT_PENDING', description: 'Webhook idempotency key active; awaiting callback from payment provider.', next: ['ESCROW_LOCKED', 'PAYMENT_FAILED'] },
        { name: 'ESCROW_LOCKED', description: 'Buyer funds locked into platform escrow ledger; vendor notified to deliver digital asset.', next: ['DELIVERED', 'DISPUTED'] },
        { name: 'DELIVERED', description: 'Digital asset uploaded directly to AWS S3 via presigned URL; inspection timer active.', next: ['SETTLED', 'DISPUTED'] },
        { name: 'DISPUTED', description: 'Escrow frozen; mediation & dispute resolution workflow engaged by admin.', next: ['REFUNDED', 'SETTLED'] },
        { name: 'SETTLED', description: 'Platform fee deducted; net proceeds released to vendor wallet under pessimistic lock.', next: [] },
      ],
      concurrencyModel: 'PostgreSQL row-level locking (`SELECT ... FOR UPDATE`) combined with Redlock for wallet balance mutation and dual payout processing.',
      queueStrategy: 'BullMQ over Redis with exponential backoff (2s, 4s, 8s, 16s, 32s) and Dead Letter Queue alert pipeline.',
      paymentModel: 'Modular payment adapters with SHA-256 HMAC webhook verification, QR payouts, and Redis-backed idempotency deduplication.',
    },
    sections: [
      {
        title: 'Core Business Problem & Trust Boundary',
        body:
          'In a multi-vendor digital commerce platform, orders involve untrusted parties: buyers, sellers, and platform administrators. Standard monolithic setups easily suffer from catastrophic code leakage—such as administrative validation schemas and internal contracts bleeding into client-side browser bundles. Furthermore, concurrent checkouts and payouts risk double-spending or balance inconsistencies.',
      },
      {
        title: 'Machine-Enforced Trust Boundary Architecture',
        body:
          'I established a strict boundary architecture with 6 automated guardrail layers. Customer-facing interfaces communicate solely through `@trustbase/api-contracts`, a machine-enforced type-only library (`emitDeclarationOnly: true`). An AST import graph validator (`scripts/validate-boundaries.ts`) and bundle auditor inspect every commit to ensure admin-only schemas never cross the boundary into customer bundles.',
      },
      {
        title: 'Vertical-Slice Backend & Bounded Contexts',
        body:
          'The Express 5 API is partitioned into over 25 isolated bounded contexts (`orders`, `payments`, `seller-payouts`, `disputes`, `contracts`, `esign`, `ekyc`, `s3-storage`). Cross-module access is strictly governed through public barrel exports, preventing tangled internal dependencies and paving an effortless path toward future microservices.',
      },
      {
        title: 'Dual Payout Engine (Bank Transfers & Dynamic QR Codes)',
        body:
          'Sellers on the platform require flexible cashflow extraction. I built a dual payout engine allowing sellers to either register bank accounts or upload static/dynamic QR codes. The backend validates payout methods using custom Zod refinements, while the admin portal provides custom QR transfer inspection with dedicated drawer actions.',
      },
      {
        title: 'Zero-Bandwidth S3 Presigned Delivery',
        body:
          'To prevent gigabyte-scale digital assets from choking backend Node.js I/O, asset transfers bypass the API server entirely. The backend issues cryptographic AWS S3 presigned URLs with short-lived expiration tickets, enabling client-to-cloud transfers with zero server bandwidth overhead.',
      },
    ],
    recruiterTakeaways: [
      'Proven expertise in architecting monorepos with strict compile-time and bundle-time trust boundaries.',
      'Mastery over vertical-slice bounded contexts, Drizzle ORM, and high-integrity financial payout systems.',
      'Capable of managing full production lifecycles: from database locks and webhook idempotency to automated PM2 deployment.',
    ],
  },
  {
    slug: 'robinhud',
    title: 'RobinHUD',
    role: 'Solo Full-Stack Builder, AI Workflow Designer',
    category: 'AI Decision-Support System & Poker Intelligence',
    paths: ['/robinhud.PNG', '/robinhud-2.png'],
    github: 'https://github.com/justpassingByte/PoNotesFE',
    githubBackend: 'https://github.com/justpassingByte/PoNotesBE',
    featured: true,
    description: 'AI-assisted poker intelligence platform turning messy player notes into multidimensional strategy signals and exploit recommendations.',
    summary:
      'RobinHUD converts unstructured, noisy poker observations into structured tactical dimensions (position, street, board texture, stack depth, opponent tendencies). Combines RAG retrieval with LLM reasoning to identify behavioral leaks and produce precise exploit recommendations.',
    architectureHighlight:
      'RAG retrieval combined with bucketed poker game trees to provide low-latency exploit recommendations with structured reasoning.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'RAG Retrieval',
      'LLM Structured Output',
      'Tailwind CSS',
    ],
    highlights: [
      'Designed a structured AI workflow instead of a generic chatbot prompt box.',
      'Normalized vague notes into fields: position, street, board texture, stack depth, opponent tendencies, and exploit triggers.',
      'Devised a bucket-based strategy model grouping complex game tree spots into manageable decision archetypes.',
      'Engineered structured JSON schemas with LLM validation to ensure UI-ready tactical output.',
    ],
    sections: [
      {
        title: 'The AI Workflow Challenge',
        body:
          'Poker notes are notoriously messy and vague: players jot down quick phrases like "overfolds turn raise" without recording the surrounding texture, stack sizes, or positions. A naive LLM chatbot given such notes generates generic, unreliable advice. I designed RobinHUD to treat AI as an ETL and reasoning pipeline: first normalizing messy text into a strict schema, then performing vector and relational retrieval on strategy baselines, and finally producing actionable exploit recommendations.',
      },
      {
        title: 'Bucketed Strategy Model',
        body:
          'The complete game tree for No-Limit Texas Hold\'em contains billions of permutations. For a lean MVP, I grouped similar spots into strategy buckets (e.g., BTN vs BB single-raised pot, dry high-card flop, facing small c-bet). Each bucket stores baseline frequencies (bet, call, fold), which the LLM then adjusts based on specific opponent behavioral flags.',
      },
      {
        title: 'Exploit Recommendation Pipeline',
        body:
          'When the system identifies an opponent leak—such as folding 70%+ against turn check-raises—RobinHUD retrieves the baseline frequency, calculates the EV-positive exploit shift, and outputs a recommendation complete with rationale: action line, sizing, hand range shape, and risk caveats.',
      },
    ],
    recruiterTakeaways: [
      'Understands how to design reliable AI products by constraining input, context, and output schemas.',
      'Experienced in practical domain modeling (simplifying infinite game trees into pragmatic MVP buckets).',
      'Independent 0-to-1 builder capable of building end-to-end full-stack AI applications.',
    ],
  },
  {
    slug: 'testictour',
    title: 'Testictour & TFT Grimoire',
    role: 'Solo Full-Stack Builder, Product Designer',
    category: 'Esports Platform & Tournament Lifecycle SaaS',
    paths: [
      '/testictour.jpeg',
      '/testictour2.jpeg',
      '/landingpage.jpeg',
      '/tierlist.jpeg',
      '/compbuilder.jpeg',
      '/comptierlist.jpeg',
    ],
    github: 'https://github.com/justpassingByte/Testictour_V2',
    featured: true,
    description: 'SaaS tournament management platform centralizing registration, brackets, cybercafe venue coordination, and player leaderboards.',
    summary:
      'Testictour replaces fragmented tournament operations (Google Forms, Excel sheets, manual Discord chat coordination) with an automated, end-to-end tournament lifecycle platform. Includes player registration, bracket seeding, real-time match reporting, automated leaderboard calculations, and the TFT Grimoire sub-suite for meta intelligence.',
    architectureHighlight:
      'Automated tournament lifecycle engine managing bracket progression, point calculations, and community leaderboards.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Admin Dashboard',
      'Leaderboard Engine',
      'Tailwind CSS',
    ],
    highlights: [
      'Centralized the complete tournament lifecycle: registration, match brackets, score verification, and automated prize distribution.',
      'Reduced admin overhead by 80% compared to manual Google Sheets and Discord management.',
      'Built community retention loops: dynamic player rankings, match history archives, and achievement profiles.',
      'Created TFT Grimoire sub-product featuring comp builder workflows, tier list management, and augment analysis.',
    ],
    sections: [
      {
        title: 'Operational Inefficiencies in Grassroots Esports',
        body:
          'Local gaming centers and grassroots organizers rely heavily on spreadsheets and chat groups to manage tournaments. Data gets lost, scores are disputed, and organizers spend hours calculating tiebreaks. Players lack a persistent identity or long-term ranking motivation.',
      },
      {
        title: 'Lifecycle Automation & Leaderboard Engine',
        body:
          'I built Testictour to streamline every stage: automated registration with team rosters, bracket generation (single elimination, round-robin), score reporting with verification, and instant leaderboard recalculation. Organizers manage events with a few clicks, and players have an esports-grade profile displaying their tournament history.',
      },
      {
        title: 'Sub-Project: TFT Grimoire',
        body:
          'As part of the gaming ecosystem, I developed TFT Grimoire—a tactical companion featuring team composition builders, patch-aware tier lists, and item recommendation trees, giving players competitive tools between tournaments.',
      },
    ],
    recruiterTakeaways: [
      'Full-stack ownership of an operational platform serving both administrative and consumer user types.',
      'Proven capability to translate manual offline workflows into slick, automated software products.',
      'Demonstrated versatility across gaming SaaS, leaderboard mechanics, and data visualization.',
    ],
  },
  {
    slug: 'chayfood',
    title: 'ChayFood',
    role: 'Core Systems & Full-Stack Architect',
    category: 'Precision Plant-Based Culinary & Holistic Nutrition Platform',
    paths: ['/chayfood.png'],
    github: 'https://github.com/justpassingByte/ChayFood-monorepo',
    description: 'Precision plant-based nutrition engine with personalized macro/micronutrient calculation, meal subscription planning, and farm-to-table ingredient inventory traceability.',
    summary:
      'ChayFood is a precision culinary and holistic nutrition platform built with Next.js 15, NestJS 11, Prisma 6, PostgreSQL, and Turborepo. It harmonizes personal biometric nutrition targets (caloric envelopes, protein/carb/fat ratios, dietary allergies) with recipe composition and an upstream farm-to-table inventory traceability engine utilizing atomic stock decrement transactions.',
    architectureHighlight:
      'Turborepo monorepo with NestJS 11, Next.js 15, Prisma 6, atomic inventory stock decrement, and a 15-rule System Design master matrix.',
    stack: [
      'Next.js 15',
      'NestJS 11',
      'Prisma 6',
      'PostgreSQL',
      'TypeScript',
      'Turborepo',
      'Docker Compose',
      'Zod Validation',
      'Atomic Decrement',
      'Vitest',
    ],
    highlights: [
      'Monorepo Architecture: Powered by Turborepo dividing `apps/api` (NestJS 11 REST API, :4000), `apps/web` (Next.js 15 App Router, :3000), and `packages/db` (Prisma 6 schema, migrations, seeders).',
      'System Design Master Matrix: Built under 15 strict architectural rules covering atomic concurrency, data consistency invariants, BOLA/IDOR protection, and Transactional Outbox patterns.',
      'Biometric Calculation Engine: Computes personalized nutritional targets (`minProtein`, `maxCalories`, allergen filters) mapped directly to `MenuItem` macronutrients.',
      'Weekly Subscription Scheduler: Designed subscription models handling recurring meal plan selections, custom delivery windows, and family plan allocations.',
      'Recipe & Kitchen Production Mapping: Models granular `RecipeItem` ingredients linked to `MenuItem`, calculating kitchen prep times and allergen declarations.',
      'Farm-to-Table Inventory & Stock Transactions: Engineered `StockTransaction` tracking (`IMPORT`, `EXPORT_ORDER`, `EXPORT_WASTE`, `ADJUSTMENT`) with atomic decrement to prevent lost update race conditions.',
    ],
    systemSpecs: {
      fsmStages: [
        { name: 'ORDER_PENDING', description: 'Customer checkout initiated; payment transaction created.', next: ['CONFIRMED', 'CANCELLED'] },
        { name: 'CONFIRMED', description: 'Payment verified (VietQR/Banking/Card); ingredients reserved via atomic stock decrement.', next: ['PREPARING', 'CANCELLED'] },
        { name: 'PREPARING', description: 'Kitchen production active; recipes batch-prepared from farm-sourced ingredients.', next: ['READY'] },
        { name: 'READY', description: 'Meal packed with lot traceability labels; awaiting courier pickup.', next: ['DELIVERING'] },
        { name: 'DELIVERING', description: 'In-transit with temperature-controlled courier to customer address.', next: ['DELIVERED'] },
        { name: 'DELIVERED', description: 'Meal received; nutrition metrics logged to customer daily health dashboard.', next: [] },
      ],
      concurrencyModel: 'Atomic stock decrement on `Ingredient` inventory inside Prisma transactions with non-negative invariant checks.',
      queueStrategy: 'Transactional Outbox pattern for asynchronous kitchen event dispatches and courier webhook updates.',
      paymentModel: 'Strategy & Factory Pattern abstracting VietQR, Banking QR, and Card payment providers with webhook signature verification.',
    },
    sections: [
      {
        title: 'Core Mission: Precision Culinary & Supply Traceability',
        body:
          'Consumers adopting plant-based diets struggle to meet tailored macronutrient goals while remaining uncertain about ingredient freshness and sourcing authenticity. ChayFood bridges this gap by integrating a personal biometric calculation engine with an operational kitchen recipe and farm-to-table inventory system.',
      },
      {
        title: 'Monorepo Architecture & Quality Gates',
        body:
          'Structured within a clean Turborepo monorepo: `apps/api` runs NestJS 11 with strict DTO validation pipes, `apps/web` utilizes Next.js 15 App Router, and `packages/db` centralizes the Prisma 6 schema and migration history. All code commits pass through automated type-check, linting, and unit test quality gates.',
      },
      {
        title: 'Relational Recipe & Inventory Modeling',
        body:
          'Every menu dish (`MenuItem`) is linked to a detailed `Recipe` consisting of quantified `RecipeItem` records. When an order transitions to `CONFIRMED`, the system executes atomic stock decrement transactions across all linked `Ingredient` records, updating `StockTransaction` ledgers to maintain strict inventory integrity.',
      },
      {
        title: '15-Rule System Design Master Matrix',
        body:
          'The codebase adheres to a comprehensive System Design standard enforcing: zero unchecked `any` types, BOLA/IDOR authorization barriers on user preferences and orders, server-side calculated pricing, and structured logging with correlation request IDs.',
      },
    ],
    recruiterTakeaways: [
      'Demonstrates mastery over modern enterprise stacks: Next.js 15 App Router, NestJS 11, Prisma 6, and Turborepo.',
      'Strong domain design connecting customer health preferences with kitchen recipe scaling and supply chain stock ledgers.',
      'Strict adherence to engineering discipline, automated quality gates, and data consistency invariants.',
    ],
  },
  {
    slug: 'netsla',
    title: 'Netsla',
    role: 'Solo Full-Stack Builder, Product Designer',
    category: 'Cybercafe IoT Telemetry & Engagement Hub',
    paths: ['/netsla.PNG'],
    github: 'https://github.com/justpassingByte/netsla',
    description: 'Next-generation cybercafe management ecosystem combining machine telemetry, member loyalty, and local community tournaments.',
    summary:
      'Netsla was designed around operational hurdles in internet cafes and gaming centers. It extends basic computer rental billing into a connected ecosystem featuring workstation telemetry, member loyalty reward engines, and localized esports events.',
    architectureHighlight:
      'Workstation telemetry monitoring architecture integrated with member engagement loops and business intelligence reports.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Dashboard UX',
      'Telemetry Monitoring',
      'Loyalty Engine',
    ],
    highlights: [
      'Identified that net cafes need community retention software, not just basic hour-rental timers.',
      'Designed layers for computer telemetry, customer loyalty tiers, peak-hour analytics, and tournament operations.',
      'Built a dark-mode, high-density dashboard tailored for cybercafe operators.',
    ],
    sections: [
      {
        title: 'Transforming Cybercafe Economics',
        body:
          'Traditional net cafes compete on hourly rental prices—a race to the bottom. Netsla enables them to operate like modern gaming clubs: rewarding frequent players with loyalty points, monitoring hardware temperatures and errors to avoid customer friction, and hosting regular venue tournaments.',
      },
      {
        title: 'Operator Dashboard & Analytics',
        body:
          'Created real-time visual telemetry indicating station utilization, active member tiers, peak revenue windows, and maintenance alerts across 50+ workstations.',
      },
    ],
    recruiterTakeaways: [
      'Strong empathy for operational business constraints and physical-to-digital touchpoints.',
      'Capable of building data-dense, intuitive administrative dashboards with sleek UX.',
    ],
  },
  {
    slug: 'topic2test',
    title: 'Topic2Test',
    role: 'Solo Full-Stack Builder, AI Workflow Designer',
    category: 'EdTech & Structured AI Extraction',
    paths: ['/topic4quizz.svg'],
    isPrivate: true,
    description: 'Context-rich AI quiz engine and structured knowledge extraction pipeline generating validated question banks from raw literature.',
    summary:
      'Topic2Test transforms unstructured documents and domain texts into validated, multi-choice question banks complete with reasoning explanations, difficulty ratings, and topic tags using RAG retrieval and strict JSON schemas.',
    architectureHighlight:
      'Constrained JSON schema generation with verification guards ensuring reliable educational quiz datasets.',
    stack: [
      'Next.js',
      'React',
      'Node.js',
      'RAG Retrieval',
      'Structured JSON Output',
      'Tailwind CSS',
    ],
    highlights: [
      'Designed a reusable quiz schema instead of free-form, unvalidated chatbot responses.',
      'Applied RAG retrieval prior to question generation to ensure factual grounding and prevent hallucinations.',
      'Produced structured metadata: question stems, option distractor rationale, explanations, and difficulty curves.',
    ],
    sections: [
      {
        title: 'Grounded Educational Content Generation',
        body:
          'Unconstrained LLMs frequently hallucinate incorrect answers or produce trivial questions. Topic2Test grounds questions against verified source material using vector search, then guides the model through a multi-shot prompt producing strictly typed JSON objects.',
      },
    ],
    recruiterTakeaways: [
      'Experienced in prompt engineering with deterministic output contracts and JSON validation.',
      'Demonstrates rapid execution in the AI EdTech domain.',
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
