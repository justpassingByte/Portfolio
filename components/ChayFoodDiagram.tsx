'use client';

import React, { useState } from 'react';
import {
  Activity,
  Database,
  ShieldCheck,
  Zap,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Sparkles,
  Layers,
  FileCode2,
  RefreshCw,
} from 'lucide-react';

export const ChayFoodDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'biometric' | 'inventory' | 'matrix'>('biometric');
  const [selectedGoal, setSelectedGoal] = useState<'hypertrophy' | 'endurance' | 'metabolic'>('hypertrophy');
  const [inventoryStep, setInventoryStep] = useState<number>(1);
  const [activeRule, setActiveRule] = useState<number>(0);

  // Biometric goals data
  const goals = {
    hypertrophy: {
      title: 'Plant Hypertrophy (Muscle Gain)',
      calories: '2,450 kcal',
      protein: '145g (24%)',
      carbs: '305g (50%)',
      fats: '70g (26%)',
      dish: 'Tempeh Quinoa Macro Bowl w/ Edamame & Tahini Glaze',
      keyNutrients: ['Complete BCAAs', 'Iron: 18mg', 'Zinc: 14mg', 'Vitamin B12 Enriched'],
      allergens: 'Soy (Tempeh), Sesame (Tahini) [Nut-Free, Gluten-Free]',
    },
    endurance: {
      title: 'Endurance Plant Fuel (High Glycogen)',
      calories: '2,800 kcal',
      protein: '115g (16%)',
      carbs: '420g (60%)',
      fats: '75g (24%)',
      dish: 'Roasted Sweet Potato & Black Bean Medley w/ Pumpkin Seed Pesto',
      keyNutrients: ['Complex Glycogen Carbs', 'Potassium: 950mg', 'Magnesium: 420mg'],
      allergens: 'Pumpkin Seeds [Soy-Free, Nut-Free, Gluten-Free]',
    },
    metabolic: {
      title: 'Metabolic Balance & Anti-Inflammatory',
      calories: '1,850 kcal',
      protein: '95g (20%)',
      carbs: '185g (40%)',
      fats: '82g (40%)',
      dish: 'Turmeric-Braised Tofu with Steamed Bok Choy & Hemp Seed Crunch',
      keyNutrients: ['Curcumin + Piperine', 'Omega-3 (Hemp): 3.2g', 'Fiber: 42g'],
      allergens: 'Soy (Tofu) [Gluten-Free, Allium-Free Option]',
    },
  };

  // 15-Rule System Design snippets
  const systemRules = [
    {
      id: 'RULE_01',
      title: 'Atomic Inventory Decrement (No Check-Then-Act)',
      category: 'Data Integrity',
      description:
        'Prevents overselling under concurrent checkouts by executing atomic SQL decrements with non-negative invariant guards inside Prisma transactions.',
      code: `// packages/db/src/inventory.service.ts
await prisma.$transaction(async (tx) => {
  for (const item of recipeItems) {
    const updated = await tx.ingredient.updateMany({
      where: {
        id: item.ingredientId,
        currentStock: { gte: item.requiredQuantity }, // Atomic Invariant
      },
      data: {
        currentStock: { decrement: item.requiredQuantity },
      },
    });

    if (updated.count === 0) {
      throw new InsufficientStockException(item.ingredientId);
    }

    await tx.stockTransaction.create({
      data: {
        ingredientId: item.ingredientId,
        type: 'EXPORT_ORDER',
        quantity: item.requiredQuantity,
        orderId: order.id,
      },
    });
  }
});`,
    },
    {
      id: 'RULE_04',
      title: 'BOLA / IDOR Scoped Authorization',
      category: 'Security Barrier',
      description:
        'Never query records solely by ID supplied in request payloads. All meal subscription schedules, delivery preferences, and orders are hard-scoped to the verified JWT session subject.',
      code: `// apps/api/src/modules/orders/orders.controller.ts
@Get(':orderId')
@UseGuards(JwtAuthGuard)
async getOrder(
  @Param('orderId') orderId: string,
  @CurrentUser() user: JwtPayload,
) {
  // Scoped strictly to authenticated user.sub to prevent IDOR
  return this.ordersService.findUserOrder({
    orderId,
    userId: user.sub,
  });
}`,
    },
    {
      id: 'RULE_07',
      title: 'Transactional Outbox for Kitchen & Courier Events',
      category: 'Distributed Reliability',
      description:
        'Instead of emitting uncommitted asynchronous events during checkout, order state mutations and outbox records are written atomically in one database commit.',
      code: `// apps/api/src/modules/orders/orders.service.ts
await tx.outboxEvent.create({
  data: {
    eventType: 'ORDER_CONFIRMED',
    payload: { orderId: order.id, kitchenId: kitchen.id, deliverySlot: order.slot },
    status: 'PENDING',
  },
});
// Dedicated BullMQ worker polls outbox, dispatches to kitchen displays, and marks PROCESSED`,
    },
    {
      id: 'RULE_10',
      title: 'Strict DTO Validation Pipes & Zero `any` Types',
      category: 'Type Safety',
      description:
        'All incoming HTTP payloads pass through class-validator and Zod validation pipes with whitelist: true and forbidNonWhitelisted: true.',
      code: `// apps/api/src/main.ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    stopAtFirstError: true,
  }),
);`,
    },
  ];

  return (
    <div className="bg-[#0A0D16] border border-white/[0.08] rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Banner & Tab Navigation */}
      <div className="p-4 sm:p-6 border-b border-white/[0.08] bg-gradient-to-r from-emerald-950/40 via-[#0A0D16] to-[#0A0D16]">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                TURBOREPO • NESTJS 11 • PRISMA 6
              </span>
              <span className="text-xs font-mono text-slate-400">apps/api + apps/web + packages/db</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <span>ChayFood Core Architectural Engine</span>
            </h3>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/[0.08]">
            <button
              onClick={() => setActiveTab('biometric')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'biometric'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Biometric & Macros</span>
            </button>

            <button
              onClick={() => setActiveTab('inventory')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'inventory'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Database className="w-3.5 h-3.5" />
              <span>Atomic Inventory</span>
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
                activeTab === 'matrix'
                  ? 'bg-emerald-500 text-[#07090E] font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>15-Rule Matrix</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tab 1: Biometric & Macronutrient Calculation Engine */}
      {activeTab === 'biometric' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="grid md:grid-cols-3 gap-3">
            {(['hypertrophy', 'endurance', 'metabolic'] as const).map((goalKey) => {
              const item = goals[goalKey];
              const isSelected = selectedGoal === goalKey;
              return (
                <button
                  key={goalKey}
                  onClick={() => setSelectedGoal(goalKey)}
                  className={`p-4 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.15]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-emerald-400 font-semibold uppercase">
                      Profile Archetype
                    </span>
                    {isSelected && <Sparkles className="w-3.5 h-3.5 text-emerald-400" />}
                  </div>
                  <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                  <div className="text-xs font-mono text-slate-400">{item.calories} Target</div>
                </button>
              );
            })}
          </div>

          {/* Active Goal Deep-Dive Card */}
          <div className="bg-[#0F1424] border border-white/[0.08] rounded-2xl p-6 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
              <div>
                <span className="text-xs font-mono text-slate-400">Nutritional Envelope Formulation</span>
                <h4 className="text-lg font-bold text-white">{goals[selectedGoal].title}</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">
                  Caloric Cap: {goals[selectedGoal].calories}
                </span>
              </div>
            </div>

            {/* Macro Splits Grid */}
            <div className="grid sm:grid-cols-3 gap-4 font-mono">
              <div className="bg-black/40 border border-emerald-500/20 rounded-xl p-4">
                <div className="text-xs text-slate-400 mb-1">PROTEIN TARGET</div>
                <div className="text-xl font-bold text-emerald-400">{goals[selectedGoal].protein}</div>
                <div className="text-[10px] text-slate-500 mt-1">Complete amino acid profile</div>
              </div>
              <div className="bg-black/40 border border-sky-500/20 rounded-xl p-4">
                <div className="text-xs text-slate-400 mb-1">COMPLEX CARBS</div>
                <div className="text-xl font-bold text-sky-400">{goals[selectedGoal].carbs}</div>
                <div className="text-[10px] text-slate-500 mt-1">Low-glycemic slow burn</div>
              </div>
              <div className="bg-black/40 border border-amber-500/20 rounded-xl p-4">
                <div className="text-xs text-slate-400 mb-1">ESSENTIAL FATS</div>
                <div className="text-xl font-bold text-amber-400">{goals[selectedGoal].fats}</div>
                <div className="text-[10px] text-slate-500 mt-1">Omega 3/6 balance (cold-pressed)</div>
              </div>
            </div>

            {/* Matching Production Recipe Composition */}
            <div className="bg-black/30 border border-white/[0.06] rounded-xl p-4 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-emerald-400 uppercase font-semibold">
                  Resolved Kitchen Recipe Mapping:
                </span>
                <span className="text-slate-400">MenuItem & RecipeItem Join</span>
              </div>
              <div className="text-base font-semibold text-white">
                {goals[selectedGoal].dish}
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {goals[selectedGoal].keyNutrients.map((nutrient) => (
                  <span
                    key={nutrient}
                    className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                  >
                    ✓ {nutrient}
                  </span>
                ))}
              </div>
              <div className="text-xs font-mono text-amber-300/80 pt-2 border-t border-white/[0.04]">
                <span className="font-semibold text-amber-400">Allergen Safety Invariant:</span>{' '}
                {goals[selectedGoal].allergens}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Farm-to-Table & Atomic Inventory Traceability */}
      {activeTab === 'inventory' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h4 className="text-base font-bold text-white">
              Deterministic Stock Decrement Lifecycle (Prisma 6 $transaction)
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
              When a customer confirms a meal box, the backend executes atomic updates against the ingredient table.
              If any single ingredient has insufficient inventory, the entire transaction automatically rolls back.
            </p>
          </div>

          {/* Step-by-Step Flow */}
          <div className="grid md:grid-cols-4 gap-3">
            {[
              {
                step: 1,
                title: 'Order Confirmed',
                desc: 'Buyer payment verified. RecipeItem specs resolved for each meal box.',
              },
              {
                step: 2,
                title: 'Atomic Decrement',
                desc: 'UPDATE "Ingredient" SET stock = stock - qty WHERE stock >= qty.',
              },
              {
                step: 3,
                title: 'StockTransaction',
                desc: 'Audit record created with EXPORT_ORDER type and batch tracking.',
              },
              {
                step: 4,
                title: 'Outbox Event',
                desc: 'Kitchen display screen notified via Transactional Outbox pipeline.',
              },
            ].map((item) => (
              <button
                key={item.step}
                onClick={() => setInventoryStep(item.step)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  inventoryStep === item.step
                    ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md ring-1 ring-emerald-500/30'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    PHASE 0{item.step}
                  </span>
                  {inventoryStep === item.step && <Zap className="w-3.5 h-3.5 text-emerald-400" />}
                </div>
                <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                <div className="text-xs text-slate-400 font-light">{item.desc}</div>
              </button>
            ))}
          </div>

          {/* Code Inspection & Database Ledger */}
          <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-3 border-b border-white/[0.06]">
              <div className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-emerald-400" />
                <span>packages/db/prisma/schema.prisma & inventory.service.ts</span>
              </div>
              <span className="text-emerald-400 font-semibold">PostgreSQL Transactional Isolation</span>
            </div>

            <div className="font-mono text-xs text-slate-300 overflow-x-auto p-4 bg-black/60 rounded-lg border border-white/[0.06] leading-relaxed">
              <span className="text-slate-500">{'// Relational Inventory Audit Ledger'}</span>
              <br />
              <span className="text-purple-400">model</span> <span className="text-sky-300">StockTransaction</span> &#123;
              <br />
              &nbsp;&nbsp;id &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">String</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">@id @default(cuid())</span>
              <br />
              &nbsp;&nbsp;ingredientId &nbsp;<span className="text-yellow-300">String</span>
              <br />
              &nbsp;&nbsp;type &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-emerald-400">StockTxType</span> &nbsp;&nbsp;&nbsp;<span className="text-slate-500">{'// IMPORT | EXPORT_ORDER | EXPORT_WASTE | ADJUSTMENT'}</span>
              <br />
              &nbsp;&nbsp;quantity &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">Decimal</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">@db.Decimal(10, 2)</span>
              <br />
              &nbsp;&nbsp;lotNumber &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">String?</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">{'// Organic farm lot traceability'}</span>
              <br />
              &nbsp;&nbsp;orderId &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">String?</span>
              <br />
              &nbsp;&nbsp;createdAt &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">DateTime</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-slate-500">@default(now())</span>
              <br />
              &#125;
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: 15-Rule System Design Master Matrix */}
      {activeTab === 'matrix' && (
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-white">
                15-Rule System Design Master Matrix
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-light">
                Production invariants enforced across apps/api, apps/web, and packages/db:
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.04] text-slate-300 border border-white/[0.08]">
              Standard Operating Procedure
            </span>
          </div>

          <div className="grid md:grid-cols-4 gap-2.5">
            {systemRules.map((rule, idx) => (
              <button
                key={rule.id}
                onClick={() => setActiveRule(idx)}
                className={`p-3.5 rounded-xl text-left border transition-all ${
                  activeRule === idx
                    ? 'bg-emerald-500/10 border-emerald-500/50 ring-1 ring-emerald-500/30'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <div className="text-[10px] font-mono text-emerald-400 font-bold mb-1">
                  {rule.id} • {rule.category}
                </div>
                <div className="text-xs font-bold text-white leading-snug">{rule.title}</div>
              </button>
            ))}
          </div>

          {/* Rule Detail & Code Viewer */}
          <div className="bg-[#0F1424] border border-white/[0.08] rounded-xl p-5 space-y-4">
            <div className="space-y-1">
              <div className="text-xs font-mono text-emerald-400 font-semibold">
                {systemRules[activeRule].id}: {systemRules[activeRule].title}
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {systemRules[activeRule].description}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-black/60 border border-white/[0.06] overflow-x-auto font-mono text-xs text-slate-300 leading-relaxed">
              <pre>
                <code>{systemRules[activeRule].code}</code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
