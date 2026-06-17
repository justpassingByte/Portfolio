export const projects = [
  {
    slug: 'robinhud',
    title: 'RobinHUD',
    role: 'Solo full-stack builder, AI workflow designer',
    category: 'AI poker decision-support system',
    paths: ['/robinhud.PNG', '/robinhud-2.png'],
    link: 'https://robinhud.website',
    description: 'AI poker assistant that turns messy player notes into structured strategy signals.',
    summary:
      'RobinHUD is my strongest AI product project. It is designed as a decision-support system for poker, where short and messy player notes are converted into structured context, matched against similar strategy buckets, then used to generate exploit-aware recommendations.',
    audienceNote:
      'The public website explains RobinHUD for non-technical users. This case study is written for recruiters and engineering teams who want to understand my product thinking, AI workflow design, and full-stack execution.',
    stack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Database design', 'RAG-style retrieval', 'LLM integration', 'OCR direction'],
    highlights: [
      'Designed an AI workflow around structured poker context instead of a generic chatbot flow.',
      'Converted vague notes into fields such as position, street, board texture, stack depth, facing action, opponent tendency, and exploit trigger.',
      'Used a bucket-based strategy model to keep the MVP realistic while still covering similar decision spots.',
      'Planned OCR extraction from screenshots or video to reduce manual note entry and move toward automated hand analysis.',
    ],
    sections: [
      {
        title: 'Problem',
        body:
          'Poker notes are rarely clean data. A player might write a short note like overfolds turn raise, but that note only matters when the system understands the spot around it: position, street, board texture, stack depth, previous action, range shape, and the opponent pattern. A simple chatbot answer would miss too much context.',
      },
      {
        title: 'AI workflow',
        body:
          'I designed the flow to first normalize messy notes into structured data. After that, the system can retrieve similar strategy buckets from the database, combine the baseline with opponent-specific tendencies, and return a recommendation with reasoning instead of only saying raise, call, or fold.',
      },
      {
        title: 'Bucket strategy design',
        body:
          'The poker game tree is too large for an MVP, so I avoided trying to solve every exact situation. I grouped similar spots into buckets such as BTN vs BB single-raised pot, dry high-card flop, facing small continuation bet. Each bucket can hold baseline strategy and frequency, then the AI adjusts that baseline based on exploit signals.',
      },
      {
        title: 'Example decision logic',
        body:
          'If a baseline suggests a moderate check-raise bluff frequency, but the opponent note shows that this player overfolds versus check-raise in similar spots, RobinHUD can recommend increasing bluff frequency. The output includes action direction, range type, frequency adjustment, reasoning, and similar spots where the exploit may apply.',
      },
      {
        title: 'OCR direction',
        body:
          'I also planned a path where users can upload a screenshot or video of a hand. OCR and visual extraction would identify board cards, actions, stack sizes, and visible notes, then convert that into structured strategy context before retrieval and recommendation.',
      },
    ],
    recruiterTakeaways: [
      'I can design AI features beyond a prompt box by shaping input, retrieval, context, and output contracts.',
      'I understand MVP constraints and can simplify a large domain into useful product primitives.',
      'I am strongest in 0 to 1 product execution and want to grow inside a professional engineering team.',
    ],
  },
  {
    slug: 'topic4quizz',
    title: 'Topic4Quizz',
    role: 'Solo full-stack builder, AI workflow designer',
    category: 'AI quiz generator with RAG',
    paths: ['/topic4quizz.svg'],
    link: '#',
    description: 'AI quiz generator that turns any topic into structured quizzes with retrieved context.',
    summary:
      'Topic4Quizz is an AI quiz generator designed around structured learning output. Users enter a topic, the system retrieves relevant context, then generates quizzes with questions, answer options, correct answers, explanations, difficulty, and topic tags.',
    audienceNote:
      'This project is included to show my AI product workflow thinking: the value is not only calling an LLM, but controlling input, context, structure, and output so the result can be used inside a real product.',
    stack: ['Next.js', 'React', 'Node.js', 'RAG-style retrieval', 'LLM structured output', 'Database design', 'Prompt workflow design'],
    highlights: [
      'Designed the product around a reusable quiz schema instead of free-form AI text.',
      'Used retrieved context before generation to make questions more grounded and less generic.',
      'Structured output into question, options, correct answer, explanation, difficulty, and topic tags.',
      'Practiced the same AI workflow mindset as RobinHUD in an education/productivity domain.',
    ],
    sections: [
      {
        title: 'Pain point',
        body:
          'Most simple AI quiz tools generate questions directly from a short prompt. That can be fast, but the output is often generic, inconsistent, and hard to reuse in a product. A learning product needs predictable quiz data, explanations, difficulty levels, and topic metadata.',
      },
      {
        title: 'Product design',
        body:
          'I designed Topic4Quizz around a flow of topic input, context retrieval, structured quiz generation, and product-ready rendering. The model is guided to produce a controlled schema so the frontend can display, validate, and organize the quiz instead of treating the answer as plain text.',
      },
      {
        title: 'AI workflow',
        body:
          'The system first clarifies the topic and retrieves related context. Then the LLM generates quiz items using an expected output contract. This makes the product easier to extend with filters such as difficulty, topic tags, explanations, and review history.',
      },
      {
        title: 'What I learned',
        body:
          'Topic4Quizz reinforced my main AI product mindset: useful AI features come from workflow design. The model needs clean input, relevant context, and a clear output structure before the result becomes reliable enough for a user-facing product.',
      },
      {
        title: 'MVP trade-off',
        body:
          'For an MVP, I would keep the first loop narrow: topic input, context retrieval, quiz generation, answer validation, and explanation. Features such as user accounts, spaced repetition, classroom sharing, and analytics can come later after the quiz quality and structure are proven.',
      },
    ],
    recruiterTakeaways: [
      'Shows practical RAG and structured-output thinking in a clear product workflow.',
      'Demonstrates that I can turn a broad AI idea into product data the UI can actually use.',
      'Complements RobinHUD by applying similar AI workflow design to a simpler learning product.',
    ],
  },
  {
    slug: 'testictour',
    title: 'Testictour',
    role: 'Solo full-stack builder, product designer',
    category: 'SaaS-style tournament and community platform',
    paths: ['/testictour.jpeg', '/testictour2.jpeg', '/testictour3.jpeg', '/testictour4.jpeg', '/landingpage.jpeg', '/tierlist.jpeg', '/tierlistmaker.jpeg', '/compbuilder.jpeg', '/comptierlist.jpeg'],
    link: 'https://testictour.com',
    description: 'Tournament and community platform that centralizes registration, results, leaderboard, rewards, and player history.',
    summary:
      'Testictour is a SaaS-style tournament and community platform. I designed it to replace scattered tournament operations across Google Forms, Google Sheets, chat groups, and manual result tracking with one structured product flow.',
    audienceNote:
      'TFT Grimoire is treated as a sub-project under Testictour because it extends the same gaming/community ecosystem with TFT tools such as tier lists and comp-building workflows.',
    stack: ['Next.js', 'React', 'Node.js', 'Database design', 'Admin dashboard', 'Leaderboard systems', 'Reward logic', 'Deployment'],
    highlights: [
      'Designed around the full tournament lifecycle: create tournament, register players, manage results, update leaderboard, track rewards, and build player history.',
      'Reduced manual admin work by centralizing data that would otherwise live in forms, spreadsheets, and chat groups.',
      'Created motivation loops for players through ranking, rewards, profile, and match history.',
      'Built TFT Grimoire as a related sub-project for structured TFT knowledge tools inside the broader Testictour ecosystem.',
    ],
    sections: [
      {
        title: 'Pain point',
        body:
          'Many gaming and community tournaments are still managed manually with Google Forms, Google Sheets, chat groups, and separate payment or result tracking. This works for small events, but it becomes painful when the community grows because registration, results, rankings, rewards, and player communication are scattered across too many places.',
      },
      {
        title: 'Deeper problem',
        body:
          'The problem is not only tournament management. It is also community building. Without leaderboard, reward, profile, and history systems, players have less reason to stay active or compete long term. Organizers also struggle to scale from one event to multiple tournaments or communities.',
      },
      {
        title: 'Product design',
        body:
          'I designed Testictour around the full lifecycle: create tournament, register players, manage matches and results, update leaderboard, track rewards, build player profile and match history, then keep the community active. The core idea is to centralize everything that was previously scattered across forms, spreadsheets, and chat groups.',
      },
      {
        title: 'Admin and player value',
        body:
          'For admins, the platform reduces spreadsheet management, makes result updates easier, and centralizes reward and ranking data. For players, the platform creates motivation because they can see ranking, track history, compete for rewards, and join a shared community space instead of isolated events.',
      },
      {
        title: 'Sub-project: TFT Grimoire',
        body:
          'TFT Grimoire is a sub-project of the Testictour ecosystem. It focuses on TFT knowledge workflows such as tier lists, comp builder, and comp tier lists. I do not treat it as a separate main Work item because it supports the same gaming/community direction rather than being a separate product story.',
      },
      {
        title: 'MVP trade-off',
        body:
          'Because this was a 0 to 1 product, I focused on the core loop first: Tournament, Players, Results, Leaderboard, Rewards, Profile. I did not try to support every tournament format at the beginning. The priority was proving that a centralized tournament system could reduce admin work and increase player engagement.',
      },
    ],
    recruiterTakeaways: [
      'Shows full-stack ownership of a real platform workflow, not only a static website.',
      'Demonstrates product thinking for both admin efficiency and player motivation.',
      'Shows how I scope an MVP around the strongest user loop before expanding to larger SaaS features.',
    ],
  },
  {
    slug: 'netsla',
    title: 'Netsla',
    role: 'Solo full-stack builder, product designer',
    category: 'Advanced net cafe management system',
    paths: ['/netsla.PNG'],
    link: 'https://netsla.vercel.app',
    description: 'Net cafe platform for machine management, loyalty, tournaments, community engagement, and business insights.',
    summary:
      'Netsla was designed around operation problems of internet cafes and gaming centers. The product goes beyond basic computer usage and billing by connecting machine monitoring, loyalty, competitive play, community engagement, and business insights.',
    audienceNote:
      'This case study focuses on Netsla as a product design exercise for a real-world business niche: net cafes that want to become gaming community hubs, not only computer rental shops.',
    stack: ['Next.js', 'React', 'Product design', 'Dashboard UX', 'Machine monitoring concept', 'Loyalty system design', 'Tournament features', 'Deployment'],
    highlights: [
      'Identified that net cafes need more than basic computer management and billing.',
      'Designed layers for computer management, machine monitoring, customer activity, loyalty, tournaments, community engagement, and business insights.',
      'Connected operational data with customer retention and competitive gaming features.',
      'Scoped the MVP around machine management, member tracking, loyalty, leaderboard/event feature, and basic machine health insights.',
    ],
    sections: [
      {
        title: 'Pain point',
        body:
          'Many net cafes focus only on basic usage and billing. They often lack software support for community building, competitive events, customer loyalty, machine health visibility, and business insights. Hardware issues may be discovered late, after they already affect customers.',
      },
      {
        title: 'Deeper problem',
        body:
          'A net cafe is not only a place to rent computers. It can become a gaming community hub if the software supports competitive play, loyalty, machine monitoring, customer retention, and business data. Without that connection, the business depends too much on one-time playtime.',
      },
      {
        title: 'Product design',
        body:
          'I designed Netsla as an advanced net cafe management system with multiple layers: computer management, machine monitoring, customer activity, loyalty system, tournament and competitive features, community engagement, and business insights. The goal is to help owners manage operations while creating reasons for customers to return.',
      },
      {
        title: 'Community and loyalty layer',
        body:
          'Netsla can support local tournaments, leaderboards, player ranking, reward systems, competitive events, and customer profiles. The loyalty layer can include points based on playtime, rewards for frequent customers, member ranking, promotions, and event participation rewards.',
      },
      {
        title: 'Machine and business insights',
        body:
          'The product can track machine usage time, performance status, error signals, hardware condition, maintenance history, and unusual machine behavior. It can also show which machines are used most, peak hours, customer activity patterns, revenue-related reports, event performance, and loyalty effectiveness.',
      },
      {
        title: 'MVP trade-off',
        body:
          'For an MVP, I would not try to build everything at once. The first loop should be machine management, customer/member tracking, loyalty or reward system, leaderboard or event feature, and basic machine health insights. Later versions can expand into deeper hardware monitoring, automated maintenance alerts, and advanced analytics.',
      },
    ],
    recruiterTakeaways: [
      'Shows ability to identify business pain points beyond surface-level UI requirements.',
      'Demonstrates product design across operations, retention, community, and analytics.',
      'Shows MVP judgment by narrowing a broad platform idea into the first useful loop.',
    ],
  },
  {
    slug: 'dealsniper',
    title: 'DealSniper',
    role: 'Solo builder, product designer',
    category: 'Shopping assistant and browser extension concept',
    paths: ['/smartdeal.jpeg'],
    link: 'https://smartdeal-tawny.vercel.app',
    description: 'Shopping assistant concept that helps users compare products, detect better deals, and reduce manual deal hunting.',
    summary:
      'DealSniper is a shopping assistant and browser extension concept designed around a simple consumer pain point: finding a good deal often requires too much manual checking across product pages, promotions, prices, and alternatives.',
    audienceNote:
      'This project is smaller than RobinHUD, Testictour, or Netsla, but it shows how I approach everyday utility products: identify a repetitive user task, reduce friction, and package the workflow into a focused tool.',
    stack: ['React', 'Next.js', 'Browser extension concept', 'Product design', 'Comparison workflow', 'Deployment'],
    highlights: [
      'Designed around reducing manual product and deal comparison effort.',
      'Explored a browser-extension style workflow where assistance appears close to the shopping context.',
      'Focused the product around quick value: compare, surface signals, and help users decide faster.',
      'Added variety to my portfolio outside gaming and AI-heavy products.',
    ],
    sections: [
      {
        title: 'Pain point',
        body:
          'Online shoppers often need to open many tabs, compare prices, check promotions, read product information, and decide whether a deal is actually good. This is repetitive and easy to get wrong, especially when discounts, shipping, variants, and alternative stores are involved.',
      },
      {
        title: 'Product design',
        body:
          'I designed DealSniper as a focused shopping assistant that can sit close to the browsing flow. The product direction is to help users compare product signals, identify better deals, and reduce the time spent manually checking different sources.',
      },
      {
        title: 'Core workflow',
        body:
          'The core loop is simple: detect the product or user interest, collect relevant comparison signals, highlight price or deal differences, and help the user decide whether to buy, wait, or look for a better option. The value comes from reducing small repeated decisions during shopping.',
      },
      {
        title: 'MVP trade-off',
        body:
          'For an MVP, I would keep the product narrow: focus on one shopping category or one comparison workflow first, then expand after proving that users trust the deal signals. A broad price tracker, coupon finder, and recommendation engine can come later.',
      },
    ],
    recruiterTakeaways: [
      'Shows that I can design small utility products around a clear user friction.',
      'Demonstrates product scoping for browser-extension style workflows.',
      'Adds range to the portfolio beyond gaming platforms and AI decision systems.',
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((project) => project.slug === slug);
