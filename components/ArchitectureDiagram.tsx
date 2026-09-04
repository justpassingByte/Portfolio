'use client';

import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  RefreshCw,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Zap,
  Database,
  Server,
  FileCheck,
  Clock,
  Coins,
  Cpu,
  Layers,
  FileCode,
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'fsm' | 'saga' | 'boundary' | 'payments'>('fsm');
  const [activeFsmIndex, setActiveFsmIndex] = useState<number>(2); // funds_held by default

  // Exact 8 states from Trustbase codebase: api/src/db/schema.ts & orders.state-machine.ts
  const fsmSteps = [
    {
      id: 'contacting',
      viName: 'Đang liên hệ',
      actor: 'buyer | seller | system',
      badge: 'Negotiation',
      description: 'Buyer & seller initiate discussion; terms and delivery commitment snapshot negotiated in contact checkout mode.',
      dbOps: 'INSERT INTO orders (status, checkout_mode, display_code) VALUES (\'contacting\', \'contact\', \'FF-\' || uuid_generate_v7());',
      guardOps: 'canTransition(\'contacting\', \'awaiting_payment\', actor) // Allowed: buyer, seller, system',
    },
    {
      id: 'awaiting_payment',
      viName: 'Chờ chuyển khoản',
      actor: 'system only',
      badge: 'Payment Intent',
      description: 'Payment intent generated with immutable price_snapshot_vnd. SePay / VietQR / VNPay virtual account or QR assigned with displayCode reference.',
      dbOps: 'UPDATE orders SET status = \'awaiting_payment\', awaiting_payment_at = NOW() WHERE id = $id;',
      guardOps: 'Awaiting Webhook: SePay / VNPay inbound transaction matching displayCode with matchResult = \'matched\'.',
    },
    {
      id: 'funds_held',
      viName: 'Sàn nhận tiền (Escrow)',
      actor: 'system (webhook)',
      badge: 'Escrow Locked',
      description: 'Platform escrow receives buyer payment. Funds locked in platform ledger. Seller notified to deliver digital goods or service.',
      dbOps: 'UPDATE orders SET status = \'funds_held\', funds_held_at = NOW() WHERE id = $id AND status = \'awaiting_payment\';',
      guardOps: 'CAS status guard prevents duplicate webhook processing. SLA txn timer starts.',
    },
    {
      id: 'delivering',
      viName: 'Đang giao hàng',
      actor: 'seller',
      badge: 'Fulfillment',
      description: 'Seller begins active delivery or service milestone execution under tracked SLA commitment snapshot.',
      dbOps: 'UPDATE orders SET status = \'delivering\', delivering_at = NOW() WHERE id = $id AND seller_id = $authSellerId;',
      guardOps: 'Seller auth guard enforced. Delivery SLA countdown monitored by sla.worker.ts.',
    },
    {
      id: 'delivered',
      viName: 'Đã giao (Evidence Upload)',
      actor: 'seller',
      badge: 'Asset Transfer',
      description: 'Seller uploads digital assets or proof of work via AWS S3 presigned URL. Inspection window active for buyer review.',
      dbOps: 'UPDATE orders SET status = \'delivered\', delivered_at = NOW() WHERE id = $id; INSERT INTO evidence_links (type, order_id, s3_key) VALUES (\'delivery\', $id, $key);',
      guardOps: 'Evidence required. 72h auto-complete timer activated in orders.cron.ts.',
    },
    {
      id: 'completed',
      viName: 'Hoàn tất (Money Saga)',
      actor: 'buyer | seller | system',
      badge: 'Terminal State',
      description: 'Buyer confirms receipt or 72h SLA timer lapses. Money Saga executes payout to seller bank or custom QR with fee calculation.',
      dbOps: 'BEGIN; INSERT INTO payout_records (status, voucher_no) VALUES (\'processing\', $uuid); UPDATE orders SET status = \'completed\', completed_at = NOW(); COMMIT;',
      guardOps: 'Terminal state. Money Saga calls external payout provider OUTSIDE the DB transaction.',
    },
    {
      id: 'dispute_refund_pending',
      viName: 'Chờ hoàn tiền (Post-Dispute)',
      actor: 'cs_staff | admin | system',
      badge: 'Dispute Resolution',
      description: 'Dispute resolved with VALID verdict. Escrow frozen; awaiting refund disbursement or buyer receipt confirmation.',
      dbOps: 'UPDATE orders SET status = \'dispute_refund_pending\', locked_for_dispute_id = $disputeId WHERE id = $id;',
      guardOps: 'Guarded by backbone.repo.ts CAS lock on lockedForDisputeId.',
    },
    {
      id: 'cancelled',
      viName: 'Hủy đơn hàng',
      actor: 'buyer | seller | admin | system',
      badge: 'Terminal State',
      description: 'Order cancelled due to payment timeout, mutual negotiation abort, or dispute refund finalization.',
      dbOps: 'UPDATE orders SET status = \'cancelled\', cancelled_at = NOW() WHERE id = $id;',
      guardOps: 'Terminal state. If funds were held, Money Saga triggers refund path back to buyer.',
    },
  ];

  return (
    <div className="w-full bg-[#0A0D16] border border-white/[0.08] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Header & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Deep-Dive Codebase Architecture
            </span>
          </div>
          <h3 className="text-xl font-bold text-white tracking-tight">
            Trustbase Production Core Engine
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Exact implementation extracted from: `api/src/modules/orders`, `money-saga.ts`, `db/schema.ts`, and `docs/boundary-architecture.md`
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap items-center bg-white/[0.03] p-1 rounded-xl border border-white/[0.06] text-xs font-mono">
          <button
            onClick={() => setActiveTab('fsm')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'fsm'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            FSM Order Transitions
          </button>
          <button
            onClick={() => setActiveTab('saga')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'saga'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Money Saga Pattern
          </button>
          <button
            onClick={() => setActiveTab('boundary')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'boundary'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            6-Layer Trust Boundary
          </button>
          <button
            onClick={() => setActiveTab('payments')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'payments'
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Payment Adapters & QR
          </button>
        </div>
      </div>

      {/* TAB 1: 8-State Order FSM */}
      {activeTab === 'fsm' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-slate-300">
            <span>Deterministic State Machine (`orders.state-machine.ts`):</span>
            <span className="text-emerald-400">8 Formal States • Strict Actor Access Control</span>
          </div>

          {/* Stepper buttons (8 states) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {fsmSteps.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveFsmIndex(idx)}
                className={`p-2.5 rounded-xl border text-left transition-all relative ${
                  activeFsmIndex === idx
                    ? 'bg-emerald-500/10 border-emerald-500/50 shadow-md shadow-emerald-500/10'
                    : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.05] hover:border-white/[0.12]'
                }`}
              >
                <div className="text-[10px] font-mono text-slate-400 truncate mb-1">
                  0{idx + 1}. {step.badge}
                </div>
                <div
                  className={`text-xs font-mono font-bold tracking-tight truncate ${
                    activeFsmIndex === idx ? 'text-emerald-300' : 'text-slate-200'
                  }`}
                >
                  {step.id}
                </div>
                <div className="text-[10px] text-slate-400 truncate mt-0.5">{step.viName}</div>
              </button>
            ))}
          </div>

          {/* Step Detail Card */}
          <div className="bg-[#0D111D] border border-white/[0.08] rounded-xl p-6 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.06] pb-3">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Status: `{fsmSteps[activeFsmIndex].id}` ({fsmSteps[activeFsmIndex].viName})
                </span>
                <span className="text-xs text-slate-300 font-mono">
                  Authorized Actors: <strong className="text-emerald-300">{fsmSteps[activeFsmIndex].actor}</strong>
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">
                Order Table Enum: `pgEnum(&apos;order_status&apos;)`
              </span>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-light">
              {fsmSteps[activeFsmIndex].description}
            </p>

            {/* Drizzle & Guard Box */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
              <div className="bg-black/60 border border-white/[0.08] rounded-lg p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-blue-400 text-[11px] font-semibold">
                  <Database className="w-3.5 h-3.5" />
                  <span>Drizzle ORM State Mutation</span>
                </div>
                <pre className="text-slate-300 text-[11px] overflow-x-auto whitespace-pre-wrap">
                  {fsmSteps[activeFsmIndex].dbOps}
                </pre>
              </div>

              <div className="bg-black/60 border border-white/[0.08] rounded-lg p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Transition Guard & SLA</span>
                </div>
                <pre className="text-slate-300 text-[11px] overflow-x-auto whitespace-pre-wrap">
                  {fsmSteps[activeFsmIndex].guardOps}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: Money Saga Pattern */}
      {activeTab === 'saga' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20 text-xs font-mono text-slate-300">
            <span className="text-emerald-400 font-bold uppercase">The Money Saga Pattern (`money-saga.ts`):</span>
            <p className="mt-1 font-sans text-sm text-slate-200 leading-relaxed">
              Handles the two critical escrow movements: <strong>Payout</strong> (`delivered` ➔ `completed`) and <strong>Refund</strong> (non-terminal ➔ `cancelled`). Guarantees zero orphaned financial states and completely prevents DB connection starvation by never calling external banking APIs inside open DB transactions.
            </p>
          </div>

          {/* 3-Step Saga Execution Timeline */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#0D111D] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
                <span>Phase 1: DB Tx</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">Durable Intent</span>
              </div>
              <h4 className="text-sm font-bold text-white">1. Atomic CAS & Record</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Opens short database transaction. Inserts `payout_records.status = &apos;processing&apos;` with server-side UUID idempotency key (`voucherNo`). CAS-advances order status (`delivered` ➔ `completed`). Writes fee snapshot. Commits transaction.
              </p>
              <div className="text-[10px] font-mono text-slate-400 bg-black/50 p-2 rounded border border-white/5">
                Commit: Intent is durable; money has NOT left the account yet.
              </div>
            </div>

            <div className="bg-[#0D111D] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-amber-400">
                <span>Phase 2: External Call</span>
                <span className="px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">Outside DB Tx</span>
              </div>
              <h4 className="text-sm font-bold text-white">2. Bank / Gateway Dispatch</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                Executes `external(idempotencyKey)` completely <strong>outside</strong> any open DB connection. If provider is slow or times out, zero database row locks are held.
              </p>
              <div className="text-[10px] font-mono text-slate-400 bg-black/50 p-2 rounded border border-white/5">
                Invariant: Proved by unit assertion — `external` never called inside DB tx.
              </div>
            </div>

            <div className="bg-[#0D111D] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-sky-400">
                <span>Phase 3: Settlement</span>
                <span className="px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">Audit & Reaper</span>
              </div>
              <h4 className="text-sm font-bold text-white">3. Reconciliation Branch</h4>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                If &apos;sent&apos; ➔ marks payout sent + writes audit log. If &apos;processing&apos; ➔ attaches reference_id for background reaper cron polling. If throw ➔ marks payout failed + rethrows.
              </p>
              <div className="text-[10px] font-mono text-slate-400 bg-black/50 p-2 rounded border border-white/5">
                Idempotent: Duplicate calls return existing row without re-calling bank.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 6-Layer Trust Boundary */}
      {activeTab === 'boundary' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-purple-500/[0.04] border border-purple-500/20 text-xs font-mono text-slate-300">
            <span className="text-purple-400 font-bold uppercase">Boundary Architecture (`docs/boundary-architecture.md`):</span>
            <p className="mt-1 font-sans text-sm text-slate-200 leading-relaxed">
              Enforces a strict trust boundary between customer-facing bundles and internal admin code. Machine-enforces that admin validation schemas, sensitive business rules, and backend-only contracts can NEVER be poisoned into the customer bundle.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                layer: 'Layer 1: Type-Only Contract',
                tool: 'emitDeclarationOnly: true',
                desc: '`@trustbase/api-contracts` is machine-enforced as type-only. Any runtime JavaScript export causes an instant TypeScript build failure.',
              },
              {
                layer: 'Layer 2: AST Import Validator',
                tool: 'scripts/validate-boundaries.ts',
                desc: 'Traverses the entire codebase AST import graph before commit. Immediately flags forbidden cross-app imports and re-export poisoning.',
              },
              {
                layer: 'Layer 3: ESLint Boundary Rules',
                tool: 'eslint.config.js',
                desc: 'Enforces boundary rules at editor level, forbidding customer app from importing internal-contracts or admin modules.',
              },
              {
                layer: 'Layer 4: Webpack Bundle Auditor',
                tool: 'scripts/audit-bundle.ts',
                desc: 'Scans the built production client bundle to assert zero admin identifiers or internal contract symbols leaked into client assets.',
              },
              {
                layer: 'Layer 5: Pre-Commit Husky Guard',
                tool: '.husky/pre-commit',
                desc: 'Locally executes boundary validation and lint checks on every commit, blocking developers from pushing illegal dependencies.',
              },
              {
                layer: 'Layer 6: CI Pipeline Gate',
                tool: '.github/workflows/boundary-check.yml',
                desc: 'Mandatory automated CI gate in GitHub Actions. PRs with boundary violations are blocked from merging.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-[#0D111D] border border-white/[0.08] rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-purple-400 font-semibold">
                  <span>{item.layer}</span>
                  <Lock className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-xs font-mono text-white font-medium bg-black/40 px-2 py-1 rounded border border-white/5">
                  {item.tool}
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: Payment Adapters & Dual QR Payouts */}
      {activeTab === 'payments' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-blue-500/[0.04] border border-blue-500/20 text-xs font-mono text-slate-300">
            <span className="text-blue-400 font-bold uppercase">Modular Payment Engine & Dual Seller Payouts:</span>
            <p className="mt-1 font-sans text-sm text-slate-200 leading-relaxed">
              Integrates polymorphic payment adapters (SePay, VNPay, AppotaPay) with an automated bank transfer matching engine (`matchResult: matched / amount_mismatch / stale`). Sellers can receive payouts via manual bank account or uploaded static/dynamic QR codes (`isCustomQr`).
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[#0D111D] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 text-xs font-mono font-semibold">
                <Coins className="w-4 h-4" />
                <span>Polymorphic Inbound Gateway Adapters</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>SePay Adapter (`sepay.adapter.ts`):</strong> Real-time bank transfer webhook reconciliation with automated `displayCode` token extraction.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>VNPay Adapter (`vnpay.adapter.ts`):</strong> Cryptographic SHA-256 HMAC checksum verification for online banking and card payments.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>AppotaPay Adapter (`appotapay.adapter.ts`):</strong> E-wallet and QR payments with idempotency key deduplication.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0D111D] border border-white/[0.08] rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Seller Dual Payout Pipeline (`seller-payouts`)</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-light">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dual Method Support:</strong> Sellers can register standard IBAN/bank account OR upload QR images (`qrCodeUrl`), with Zod `.refine()` validation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Admin QR Inspector:</strong> Admin payout table surfaces `isCustomQr = !rawAccountNumber && Boolean(sellerCustomQrUrl)` with instant QR modal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dispute CAS Lock:</strong> Single active dispute lock (`lockedForDisputeId`) CAS-set on NULL ensures escrow freeze during admin mediation.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
