# HealthHub × Yuno: Deal Strategy & Commercial Proposal Package

**Prepared by:** Prateek Gurani, Account Executive — Yuno  
**Date:** May 30, 2026  
**Prospect:** HealthHub | $210M TPV | 8 Markets  
**Deal Deadline:** Mid-October 2026 (12 weeks)

---

## Section 1: Deal Qualification & Strategic Assessment

### Is This a Good Deal for Yuno?

**Yes — this is a Tier 1 priority deal.** HealthHub hits every signal of a high-conviction orchestration opportunity:

- **Multi-market complexity with clear PSP fragmentation:** Five providers, no orchestration layer, 8 markets — this is the exact pain Yuno was built for.
- **Quantifiable revenue bleeding:** ~32% of LatAm card volume declines due to cross-border acquiring. That's recoverable revenue, not structural demand loss.
- **Forced urgency:** Stripe + Braintree contracts expire in 12 weeks. Priya has a decision mandate; we're not creating urgency artificially.
- **Fundraising pressure:** Series C in Q1 2025 means HealthHub needs improved unit economics *before* the raise — Yuno directly enables that story.
- **Champion quality:** Priya (VP Payments & Risk) is technically sophisticated, has executive access, and has explicitly said "if you can show me the numbers, I'm all in." That's an exceptional champion statement.

**Deal size estimate:** Platform fees ($400K–$600K/year) + volume-based transaction fees on $210M TPV. Realistic Year 1 ACV: **$550K–$750K.**

---

### Key Risks

| Risk | Severity | Notes |
|---|---|---|
| David (CTO) veto | High | He's the gatekeeper. If integration burden isn't addressed head-on, deal dies. |
| Adyen single-provider narrative | High | Adyen's pitch is simpler to explain to Mark and Laura. We must make complexity = risk, not simplicity = smart. |
| Timeline crunch | Medium | 12 weeks from discovery to contract. Feasible but zero slack — any slip in technical review kills the deal. |
| EBANX locked until June 2025 | Medium | Brazil/Colombia are our strongest opportunity markets, but EBANX contract doesn't renew until June 2025. This limits Yuno's immediate scope in those markets unless we pitch orchestration *on top of* EBANX as the first step. |
| Mark's cost myopia | Medium | CFO focused on headline rates may anchor on Adyen's 1.9% IC++ number without understanding true all-in costs. |
| Priya's approval rate promises | Low-Medium | If we over-promise LatAm approval rate lifts and underdeliver post-migration, we lose the relationship. |

---

### Critical Missing Information (and How to Get It)

1. **Decline reason code breakdown from Braintree (Mexico):** Are Mexico's 32% declines driven by fraud/velocity rules (hard declines — largely unrecoverable) or insufficient funds/network errors (soft declines — recoverable with local acquiring + retry)? *Request Priya pull a 90-day decline reason code report from Braintree's dashboard.* This validates whether our 82% approval rate promise is realistic or a stretch.

2. **Card mix in LatAm (debit vs. credit, domestic vs. international):** Local acquiring lifts approval rates most dramatically for *domestic* cards. If HealthHub's Mexico customer base skews toward international premium cards (expats, US billing addresses), local acquiring benefit is smaller. *Ask Priya for a BIN-level breakdown or issuer country distribution.*

3. **EBANX contract exit terms:** Is there an early termination clause? Penalty? This determines whether we can displace EBANX for Brazil/Colombia in Year 1 or must wait until June 2025. *Ask Priya to send the EBANX contract or connect us with their legal team.*

4. **Subscription billing architecture:** Does HealthHub store card tokens exclusively with Stripe Billing? If yes, token migration complexity is a real concern for David. *Request a 30-min technical call with David's payments engineer to map the current token vault structure.*

5. **Germany/Spain SCA performance:** Stripe shows 83-84% approval in EU markets with "3DS friction" noted. What % of EU transactions are being challenged vs. exempted? If they're applying 3DS to all transactions (including recurring), they're bleeding conversion unnecessarily. *Ask Priya for their 3DS exemption rate.*

6. **Exact Yuno pricing vs. Adyen IC++ all-in cost:** Adyen's 1.9% + €0.15 EU headline could be 2.4–2.7% effective depending on card mix (premium credit cards carry 1.5–1.8% interchange alone). We need to model this before the commercial conversation.

---

### Key Ambiguity Callouts

- **Mark's $400K savings target is almost certainly too conservative.** Our model (Section 3) shows $600K–$1.1M in cost savings alone, plus $7–12M in revenue recovery. We should pitch the full picture and let Priya decide how to frame it for Mark.
- **Priya's true priority is approval rates, not cost.** She came inbound after a *LatAm approval rate case study* — not a pricing one. The CFO is pressuring her on cost, but her career success at HealthHub depends on solving the LatAm problem. We align to her actual priorities first, then gift-wrap the cost savings for Mark.
- **EBANX had two outages in Q2 but Priya hasn't mentioned switching.** Most likely they're locked in by contract. The play here: position Yuno's redundancy layer *on top of* EBANX in the near term (immediate failover value), with full migration when the contract expires. This also neutralizes David's "another integration" objection — we start by adding resilience, not ripping things out.

---

## Section 2: Stakeholder Engagement Strategy

### Value Proposition by Stakeholder

#### Priya Chaudhari — VP Payments & Risk (Champion)
**Her job performance is measured on payment outcomes.** She came from Shopify; she knows what good looks like and feels embarrassed by HealthHub's current state.

**Our message:** *"Yuno makes you the most sophisticated payments operator in telehealth. We give you the orchestration layer that lets you optimize approval rates by market, add local payment methods without engineering headaches, and reduce involuntary churn — all from one dashboard. You become the person who solved a $10M revenue problem."*

**Key proof points to emphasize:**
- Mexico local acquiring: 68% → ~82% approval rate (14pt lift, validated by our LatAm case studies)
- Smart subscription retry: involuntary churn from ~20% → ~10%
- Redundancy on top of EBANX immediately eliminates single-point-of-failure risk
- One API = future market launches in 2-3 weeks instead of 6-8

**Tone:** Peer-to-peer, data-heavy, acknowledge what she already knows. Don't over-explain basic concepts.

---

#### David Ortiz — CTO (Gatekeeper)
**His core fear: Yuno = one more integration in an already overwhelming stack.**  
His secondary fear: another EBANX-style production incident.

**Our message:** *"Yuno's endgame is FEWER integrations, not more. You integrate Yuno once — one API, one webhook format, one reconciliation export. Then we retire Braintree immediately, and when EBANX comes up for renewal, you retire that too. You go from five integrations to two (Yuno + Stripe as underlying PSP, both accessed through one layer). Singapore gets PayNow in days, not 7 weeks."*

**Key proof points:**
- Migration plan: Yuno wraps around existing Stripe integration — no token migration required in Phase 1. Stripe remains the underlying PSP; we add routing intelligence on top.
- Braintree replacement (Mexico) is the first migration — one market, contained scope, clean win.
- Single webhook format, unified error codes, one reconciliation file replaces five.
- Our SLA: 99.99% uptime with multi-PSP failover — EBANX's Q2 outages would have been zero-impact with Yuno's redundancy layer.
- Reference call with a CTO from a company that went through a similar migration (request from our CS team).

**Tactical:** Request a technical deep-dive with David and his payments engineer in Week 1. Don't pitch to David — demonstrate. Let our Solutions Engineer do a live API walkthrough and show the Stripe wrapper approach.

---

#### Mark Henson — CFO (Financial Approver)
**He thinks in P&L rows, not payment infrastructure.** He wants to see a one-pager with numbers.

**Our message:** *"Here's the ROI model. Yuno delivers $1.2M–$2.1M in annual value on fees of ~$600K — a 2–3.5x return in Year 1. It also de-risks the Series C: investors will see improving unit economics and payment infrastructure that can support 15 markets without scaling engineering headcount."*

**Key proof points:**
- Net cost savings vs. current stack: $620K–$1.1M/year
- Revenue recovery (approval rates + churn): $6M–$10M conservatively (we deliberately don't inflate this for Mark — let it surprise him)
- ROI multiple: 2x minimum on platform fees
- Series C angle: "Payment infrastructure that scales to 15 markets without 15 PSP contracts is a de-risking story. Investors ask about payment failure rates."

**Tactical:** Prepare a 1-page Excel ROI model that Mark can manipulate. Anchor on cost savings (his stated goal) and frame revenue recovery as upside. Do NOT lead with $10M revenue recovery — he'll dismiss it as sales math. Lead with the $620K cost savings (conservative, hard to dispute), then reveal the revenue upside.

**Executive engagement:** We should have Yuno's CFO or VP Finance reach out to Mark directly around Week 4-5, peer-to-peer, after our initial proposal lands. "Our CFO is happy to walk through the unit economics model with your team" — this elevates the relationship and de-risks his approval.

---

#### Laura Simmons — CEO (Ultimate Decision-Maker)
We likely won't engage Laura until contract stage, but we need Priya to brief her effectively.

**Her trigger:** Series C story. *"The payment infrastructure transformation Yuno enables directly improves the metrics investors care about: revenue per customer (higher approval rates), churn (retry logic), and scalability story (15 markets with one integration)."*

**Our job:** Give Priya a one-paragraph "Laura brief" she can use in her internal presentation. Something Laura can drop into the investor pitch narrative.

---

### Navigating the Priya/Mark Tension

The tension is real but resolvable: Mark wants cost savings; Priya wants approval rate performance. **These are not in conflict — approval rate improvements generate more revenue, which more than offsets any higher platform fees vs. raw cost reduction.** The issue is sequencing the narrative:

1. **Lead with cost savings for Mark** ($620K+ annually, model in Section 3)
2. **Reveal revenue recovery as upside** ($6–10M) — Mark will be skeptical but intrigued
3. **Let Priya champion the operational narrative** (approval rates, involuntary churn) internally

We never pit them against each other. We give each stakeholder the number they care about, and they all point to the same conclusion: Yuno.

---

## Section 3: Commercial Proposal & Financial Impact Model

### Recommended Pricing Structure

**Recommendation: Tiered Platform Fee + IC++ per-transaction markup**

| Component | Structure | Rationale |
|---|---|---|
| Platform fee | $480K/year ($40K/month) | Covers orchestration, SLA, dedicated CSM, LatAm expertise |
| Transaction markup | IC++ + 0.25% + $0.10 per transaction | Transparent, aligns incentives (we win when approval rates rise) |
| Minimum commitment | $480K platform fee, 2-year term | Provides Yuno revenue predictability; gives HealthHub migration protection |

**Why IC++ over blended?** HealthHub's $210M TPV puts them firmly in the category where IC++ is cheaper. At this volume, the blended "simplicity premium" of Stripe's 2.9% is costing them ~$400K/year vs. IC++. Recommending IC++ also directly undercuts Adyen's IC++ pitch — we match the model while adding orchestration value.

**Why not compete on headline rate?** We should not race Adyen on per-transaction pricing. Adyen can always go lower. Our differentiation is the **net revenue impact** (approval rates + churn) which dwarfs any transaction fee delta.

---

### Financial Impact Model

#### Current State (Annualized Baseline)

| Market | Annual TPV | Current Rate | Current Cost |
|---|---|---|---|
| USA | $128M | 2.90% | $3,712,000 |
| Canada | $19M | 2.90% | $551,000 |
| UK | $17M | 3.40% | $578,000 |
| Mexico | $15M | 3.50% | $525,000 |
| Brazil | $11M | ~3.20% blended* | $352,000 |
| Colombia | $6M | ~3.80% blended* | $228,000 |
| Germany | $6M | 3.40% | $204,000 |
| Spain | $4M | 3.40% | $136,000 |
| Singapore | $4M | 3.40% | $136,000 |
| **Total** | **$210M** | **2.95% effective** | **$6,422,000** |

*Brazil blended: 4.8% on ~60% cards + 2.2% on ~40% PIX = ~3.76% blended. Colombia: 4.8% on ~88% cards + 3.1% on ~12% PSE = ~4.60% blended. Note: EBANX fees are above-market, especially for Colombia cross-border cards.*

**Assumption:** Per-transaction fixed fees add ~$0.10–0.15 effective rate on top of percentage rate given HealthHub's $39–52 average ticket size. This is already baked into the effective rates above.

---

#### Cost Savings with Yuno

**Mexico (Braintree → Yuno + Local MX Acquirer):**
- Current: 3.5% cross-border, $525K/year
- With Yuno + local MX acquiring: IC++ + 0.25% ≈ 2.6% effective (interchange ~1.8% for MX domestic cards + scheme + markup)
- **Savings: ~$135K/year**
- Additional benefit: OXXO and SPEI enablement adds ~$2M addressable volume (30% of MX market currently underserved)

**Colombia (EBANX → Yuno + Local CO Acquirer — upon June 2025 renewal):**
- Current: 4.8% cards cross-border, $228K/year
- With local CO acquiring via Yuno: ~3.0% effective
- **Savings: ~$108K/year** (realizable June 2025)

**Brazil — EU Markets (Stripe optimization via Yuno IC++ routing):**
- Stripe blended 3.4% → IC++ ~2.7% effective for EU cards through Yuno-routed acquiring
- Germany + Spain + UK: $27M TPV × 0.7% savings = **$189K/year**

**US/Canada (Stripe maintained, minor optimization):**
- Stripe renewal at 2.85% vs. current 2.9% = ~$71K savings
- Yuno smart routing can achieve ~2.8% effective through IC++ = **$140K/year vs. renewing Stripe directly**

**Summary of Cost Savings:**

| Lever | Annual Savings |
|---|---|
| Mexico local acquiring | $135K |
| Colombia local acquiring (from Jun 2025) | $108K |
| EU IC++ optimization | $189K |
| US/Canada IC++ vs. blended | $140K |
| Singapore (add local payment methods, reduce PayNow friction losses) | $20K |
| **Total Cost Savings** | **$592K–$620K/year** |

*Note: This exceeds Mark's $400K target by 50%+ and is achievable without Brazil/Colombia in Year 1.*

---

#### Revenue Recovery from Approval Rate Lift

**Key assumption (explicit):** Not all declined transactions represent recoverable revenue. Payment declines split into:
- **Hard declines** (~35–40% of declines): Stolen card, closed account, permanent fraud block. These are NOT recoverable.
- **Soft declines** (~60–65% of declines): Insufficient funds, network error, velocity limit, cross-border flag. These ARE partially recoverable with local acquiring, retry logic, and payment method alternatives.

**Secondary assumption:** Of soft declines recovered by local acquiring, ~70% represent genuine customer demand willing to retry. This is conservative vs. industry benchmarks (typically 65-80% for subscription businesses with established relationships).

**Mexico:**
- Current TPV: $15M at 68% approval = $22M total attempted volume
- Failed volume: $7M
- Recoverable (soft declines × customer demand): $7M × 62% × 70% = **~$3.0M recoverable**
- At 82% target approval rate, approval delta = 14pts → $22M × 14% = $3.1M additional authorized volume
- Revenue recovered: **~$3.0–3.1M/year**

**Brazil (cards only, PIX already performing well):**
- Current card TPV: $11M × ~60% card share = $6.6M card volume at 71% approval
- Total attempted card volume: ~$9.3M
- Failed card volume: ~$2.7M
- Recoverable: $2.7M × 62% × 70% = **~$1.2M recoverable**
- At 84% target: delta = 13pts → $9.3M × 13% = $1.2M additional volume
- Revenue recovered: **~$1.1–1.2M/year**

**Colombia:**
- Card TPV: $6M × ~88% card = $5.3M at 69% approval
- Total attempted: ~$7.7M
- Failed: ~$2.4M
- Recoverable: $2.4M × 62% × 70% = **~$1.0M recoverable**
- Revenue recovered: **~$1.0M/year**

**Singapore (adding PayNow/GrabPay for 15% of market):**
- $4M TPV × 15% underserved × 80% conversion = **~$480K incremental volume**

**Total Revenue Recovery from Approval Rate Lift: $5.6M–$5.8M/year**

*Conservative assumption: We use 62% soft decline rate and 70% customer demand recapture. If soft decline rate is 70% (more common for subscription businesses with card-on-file), recovery climbs to $6.8M.*

---

#### Involuntary Churn Reduction (Subscription LTV Impact)

**Current state:**
- 420,000 active subscribers globally
- Monthly churn: 6% total. Priya estimates involuntary churn = 18–22% of total churn.
- **Involuntary churn rate = 6% × 20% = 1.2% of subscriber base per month** churning due to payment failures.
- Monthly involuntary churners: 420,000 × 1.2% = 5,040 subscribers/month

**Average subscriber value:**
- Blended monthly subscription revenue: $96M/12 months = $8M/month ÷ 420,000 = **$19.05/subscriber/month** (implied; blended across Basic/Plus/Premium tiers)
- Average remaining lifetime at churn point: ~7 months (mid-point of 14-month average lifetime)
- LTV of a churned subscriber: $19.05 × 7 months = **~$133 LTV at risk per involuntary churn**

**With Yuno smart retry (industry benchmark: involuntary churn → 8–12% of total churn):**
- New involuntary churn rate: 6% × 10% = 0.6% of subscribers/month
- Monthly involuntary churners: 420,000 × 0.6% = 2,520 subscribers/month
- **Subscribers saved per month: 2,520**
- **Annual LTV recovered: 2,520 × 12 months × $133 = ~$4.0M/year**

*This is the most conservative framing. Using a 14-month remaining lifetime (vs. 7-month) yields $8M. We present $4M as the floor.*

---

#### Total Annual Value Summary

| Value Driver | Conservative | Optimistic |
|---|---|---|
| Cost savings | $592K | $750K |
| Revenue recovery (approval rates) | $5.6M | $8.2M |
| Involuntary churn reduction (LTV) | $4.0M | $7.5M |
| **Total Annual Value** | **$10.2M** | **$16.5M** |
| Yuno annual platform fee | $480K | $480K |
| **ROI Multiple** | **21x** | **34x** |

**Net Annual Value to HealthHub:** $10.2M–$16.5M on $480K investment.

**For CFO framing:** Even using only cost savings ($592K) — no revenue recovery, no churn reduction — Yuno pays for itself in 10 months. Every dollar of approval rate improvement and churn reduction is pure upside.

---

### Year 1 Realistic Impact (Phased)

Since EBANX contract runs to June 2025 and full migration takes ~3 months:

- **Months 1-3 (Q4 2024):** Braintree displaced (Mexico), Yuno orchestrates Stripe globally. Cost savings begin. Approval rate lift in Mexico begins.
- **Months 4-9 (Q1-Q2 2025):** Smart retry goes live on subscription renewals. Churn reduction impact starts. EU IC++ optimization active.
- **Months 10-12 (Q3 2025+):** EBANX contract expires, Colombia/Brazil migrated to Yuno-native local acquiring.

**Year 1 Conservative Cash Impact:** $3.5M–$5M (partial-year benefit on churn + Mexico approval rate + immediate cost savings).

---

## Section 4: Objection Handling

### A. David (CTO): "We're already stretched thin. Integrating Yuno means ripping out our Stripe integration, migrating tokens, and coordinating a cut-over. That's 8-10 weeks we don't have."

**Empathy:** "David, that concern is exactly right, and frankly it's the most common reason companies stay stuck with a fragmented stack longer than they should. You've already paid the integration tax with Stripe, EBANX, Braintree, and PayPal. Adding anything that recreates that experience would be the wrong call."

**Substance:** Here's what the Yuno integration actually looks like for your team:

*Phase 1 (Weeks 1-6): Yuno sits on top of Stripe — no token migration, no Stripe removal.* Your team adds one Yuno API layer; all existing Stripe tokens continue working through our Stripe connector. This is not a rip-and-replace. It's an addition of an intelligence layer on top of what you have. Engineering estimate from comparable SaaS companies: 3-4 weeks for Phase 1.

*Phase 2 (Weeks 7-10): Braintree displacement for Mexico only.* Contained, single-market scope. This is where your team gains net time — Braintree is the messiest integration (no local acquiring, no OXXO, different webhook format). Removing it pays back the integration investment.

*Longer-term:* Every future market launch goes from 6-8 weeks to 2-3 weeks. Singapore's PayNow would have taken days with Yuno's existing connector, not the 7 weeks it took to add Stripe Singapore.

The math: your team spends ~6 weeks on Yuno integration. You permanently save 4+ weeks per market expansion. You have 7 markets planned for 2025 — that's potentially 28 weeks of engineering time freed up.

**Reframe:** "The question isn't whether to take on integration work. You're about to spend 6-8 weeks renewing Stripe and doing nothing — and then face the same LatAm problem in another year. Or you spend 6 weeks now and never do a PSP integration again."

---

### B. Mark (CFO): "Adyen's headline pricing is lower. Why add orchestration complexity when Adyen can be our single global provider?"

**Empathy:** "Mark, if the math worked out the way Adyen's headline suggests, that would be the right call. One provider, one invoice, clean. Let me show you why the headline is misleading — and why the single-provider approach actually creates more financial risk, not less."

**Substance — the IC++ reality check:**

Adyen quoted 1.9% + €0.15 for EU. But IC++ means you pay actual interchange + that markup. For HealthHub's customer base:
- Premium credit cards (common in telehealth/wellness): interchange runs 1.5-1.8% EU, 2.0-2.4% US
- That makes Adyen's *effective* rate: 3.4-4.2% for premium EU cards, 4.2-4.6% for US premium cards
- **Adyen's headline may actually be more expensive than your current Stripe blended rate for a significant portion of your volume**

I can model this precisely once we get your card mix data — but this is a real risk Adyen didn't disclose.

**The single-provider risk:**

When EBANX had two outages in Q2, your Brazil and Colombia revenue stopped. Zero failover. With Adyen as your single provider, *any* Adyen incident — and they do have them — takes down all 8 markets simultaneously. With Yuno's orchestration, we automatically reroute to a backup PSP within milliseconds. You can't have a single point of failure for $210M in annual revenue.

**The approval rate reality:**

Adyen's sales pitch assumes their approval rates in LatAm are better than cross-border Stripe or Braintree. They may be — but Adyen is not perfect in Mexico or Colombia, and if you're locked exclusively to Adyen and their rates underperform, you have zero leverage. Yuno lets you route to whoever performs best for each transaction, in real time. If Adyen has a bad week in Mexico, we route to our backup MX acquirer automatically.

**The cost reality:**

Yuno delivers $592K in verifiable cost savings (see model). Adyen's potential savings vs. current stack are uncertain and require validating actual IC++ rates. We'll win on cost too — but we'd rather compete on net economics, not headline rates.

---

### C. Priya: "You're promising 12-15pt approval rate lifts. What if we only see 5-7 points? We'll have migrated and still have mediocre performance."

**Empathy:** "Priya, that's the right question to ask, and I respect that you're not just taking our word for it. You've seen vendor promises before. Let me address both the confidence level and the safety net."

**Substance — why we're confident:**

The 14pt lift from 68% → 82% in Mexico is grounded in what drives the current decline rate. Braintree processes your Mexico volume cross-border through a US acquirer. When a Mexican issuing bank sees a charge routed through a US acquirer, it triggers automatic cross-border flags and higher fraud-decline thresholds — these are *structural* declines caused by routing, not by your customers or your fraud profile.

Local acquiring in Mexico routes the same transaction through a Mexican acquirer, which the Mexican issuing bank recognizes as domestic. The cross-border flag disappears. Our benchmark across comparable LatAm subscription merchants: 12-18pt approval rate improvement from cross-border → local acquiring conversion. We're promising 14pts, which is the median of our LatAm book, not the best case.

**The safety net:**

We propose a **Mexico pilot before full commitment.** Here's how:
1. We activate Yuno for Mexico-only traffic (Braintree is your fallback)
2. Run 30 days of A/B routing — Yuno local acquiring vs. Braintree cross-border
3. You see the approval rate delta in real data, on your actual customers
4. Only if the lift meets our projections (within 2pts) do we proceed with full cutover

If the lift is 5-7pts instead of 14pts, we diagnose why (is it fraud-driven? card mix?), adjust strategy, and you haven't committed to anything you can't unwind. This is how confident we are: we'll let the data close the deal, not our presentation.

**Contractual protection:** We'll include an SLA on approval rate performance in the contract, with fee adjustments if we miss benchmarks by more than 15%.

---

### D. Mark (CFO): "Yuno is 4 years old. What happens if you get acquired, pivot, or shut down?"

**Empathy:** "Mark, that's responsible due diligence, and I'd ask the same question. For any company preparing a Series C raise, infrastructure vendor stability matters. Let me give you the real picture."

**Substance:**

Yuno has processed over $X billion in TPV across 15+ markets (note: confirm with your management exact figures for disclosure). We're backed by [Yuno's investors — confirm current cap table for disclosure]. Our revenue has grown [X]% year-over-year. We are not a pre-revenue startup.

On the acquisition scenario: Yuno being acquired by a larger payments company is actually *not* a risk — it's upside. If a Visa, Mastercard, or major bank acquires Yuno, HealthHub inherits a larger infrastructure footprint. We'd suggest adding a change-of-control clause in the contract that protects HealthHub's pricing and service terms for 24 months post-acquisition.

On the shutdown scenario: Your data and tokens are not trapped in a proprietary Yuno vault. Your underlying PSP relationships (Stripe, local acquirers) are direct — Yuno is the routing layer. If Yuno ceased operations tomorrow, your Stripe integration would continue functioning immediately. The orchestration layer is additive, not a point of lock-in for your core payment credentials.

**Reframe:** Compare vendor risk correctly. Braintree (currently processing your Mexico volume) is owned by PayPal, which has had significant strategic volatility and has deprioritized merchant services in favor of consumer products. EBANX had two production outages in Q2. The question isn't Yuno vs. "proven vendors" — it's which infrastructure gives you the most resilience. With Yuno, you have multi-PSP redundancy baked in: your money doesn't stop moving if any single vendor has a problem.

---

## Section 5: 90-Day Deal Plan

### Week-by-Week Milestones

**Weeks 1–2: Discovery Depth & Technical Buy-In**
- Priya delivers: Braintree decline reason code report, EBANX contract terms, Stripe token architecture summary
- Technical deep-dive call: Yuno Solutions Engineer + David's payments engineer (90 min)
  - Demo: Stripe wrapper integration, Yuno API sandbox, live Mexico routing simulation
  - Goal: David goes from "skeptical" to "this might actually reduce our load"
- Yuno internal: Pre-approve Mexico pilot terms, define SLA language, prepare IC++ rate model for HealthHub card mix

**Weeks 3–4: Commercial Proposal Delivery**
- Deliver this proposal package to Priya
- 1:1 with Priya to walk through financial model, refine assumptions with her actual data
- Priya shares card mix data → refine the cost savings model (lock in numbers before Mark sees them)
- Prepare: 1-page CFO summary (cost savings + ROI) and 1-page CEO brief (growth enabler, Series C story)
- Yuno CFO/VP Finance reaches out to Mark: "happy to walk through the model peer-to-peer"

**Week 5: Multi-Stakeholder Presentation**
- Priya presents internally to David and Mark (we prep her slides, rehearse objections)
- We're on standby for questions — offer to join as "technical resource" if David wants it
- We do NOT pitch Mark directly yet; Priya owns that relationship

**Week 6: Decision Point / Mid-August**
- Priya's internal deadline to present recommendation
- Desired outcome: David and Mark say "conditional yes — pending contract terms"
- If David is still resistant: propose the Mexico pilot explicitly ("let's prove it in one market before full commitment")
- If Mark is still on Adyen: offer to run a side-by-side cost model with Adyen's actual IC++ rates applied to HealthHub's card mix

**Weeks 7–8: Contract Negotiation**
- Legal and finance review
- Yuno commits: 2-year term, $480K platform fee, IC++ markup, approval rate SLA, change-of-control protection, 30-day Mexico pilot clause
- Key ask from HealthHub: early termination of Braintree (should be straightforward given contract is due for renewal anyway)

**Week 9: Mexico Pilot Launch (Technical)**
- Yuno Solutions Engineering on-site (virtual) with David's team for integration sprint
- Target: Yuno live in Mexico with A/B routing vs. Braintree within 2 weeks
- Braintree set as fallback; no customer impact risk

**Week 10: Contracts Signed**
- Full contract signed before Stripe/Braintree auto-renewal triggers
- Braintree renewal NOT executed — replaces with Yuno Mexico
- Stripe renews through Yuno routing layer (minor contract amendment, not a full re-negotiation)

**Weeks 11–12: Implementation Kickoff**
- Yuno customer success kickoff
- Phase 1 complete: Yuno routing Stripe globally, Mexico local acquiring live
- Pilot data from Mexico showing approval rate lift (target: 80%+ in pilot period)

---

### Resources Required

| Week | Yuno Resources Needed |
|---|---|
| 1–2 | Solutions Engineer (technical deep-dive with David) |
| 3–4 | Pricing/Deal Desk (IC++ model, contract terms), LatAm Payments Expert (validate MX approval rate benchmarks) |
| 4–5 | Yuno CFO or VP Finance (Mark engagement) |
| 6 | Senior AE / VP Sales (executive escalation if deal stalls) |
| 9–10 | Solutions Engineering (implementation support) |
| Ongoing | Dedicated CSM from contract signature |

---

### Top 3 Deal Risks & Mitigation

**Risk 1: David blocks the deal citing integration bandwidth**
- Early signal: If David doesn't engage in the Week 1-2 technical call
- Mitigation: Propose Mexico-only pilot with Yuno SE doing 80% of integration work. "We'll embed an engineer with your team for 2 weeks." Reduce David's team's workload to near zero for Phase 1.

**Risk 2: Adyen drops price or offers a Mexico trial**
- Early signal: Priya mentions "Adyen came back with a revised proposal"
- Mitigation: We can't win on price alone. Accelerate the Mexico pilot (get data) — live approval rate lift beats any Adyen deck. Also: remind Priya that Adyen's single-provider model means she loses the ability to ever negotiate against them again. "You'll have one throat to choke — and they'll know it."

**Risk 3: EBANX contract complexity delays Brazil/Colombia scope**
- Early signal: Priya confirms no early termination clause, significant penalty
- Mitigation: Scope Year 1 as Mexico + Global Stripe Orchestration only. EBANX markets join at June 2025 renewal. This actually simplifies David's integration timeline and still delivers $592K cost savings + Mexico approval rate wins. Don't let perfect (full migration) be the enemy of signed (phase 1 migration).

---

### Competitive Strategy: How We Beat Adyen and Spreedly

**vs. Adyen — "One Provider" Narrative:**

Adyen's pitch is emotionally appealing but strategically dangerous: 
- Single point of failure ($210M TPV exposed to Adyen outages)
- No leverage to negotiate once locked in
- IC++ pricing complexity that Adyen's sales team understated
- 12-14 week migration timeline David himself flagged as too long

**Our wedge:** Mexico pilot. We challenge HealthHub to run both simultaneously for 30 days and compare approval rates. Adyen cannot guarantee local acquiring performance in Mexico superior to what we'll demonstrate. Once Priya has live data showing Yuno's lift, Adyen's pitch becomes theoretical vs. our proof.

**vs. Spreedly — "Same Layer, Less Value":**

Spreedly is orchestration without LatAm expertise and without the pre-built PSP connectors. HealthHub would use Spreedly as the orchestration layer but still need to negotiate and integrate with a Mexican acquirer, a Brazilian acquirer, a Colombian acquirer separately — Spreedly just normalizes the API format.

**Our differentiator:** Yuno brings the pre-built LatAm acquirer relationships, the pre-negotiated local acquiring rates, and the in-market expertise. You don't just get a router — you get the road network. That's the answer to David's "integration fatigue" concern that Spreedly cannot match.

**The frame to Priya:** "Spreedly gives you the layer; Yuno gives you the layer *plus* the outcomes. Their platform fees were high because they're selling infrastructure — you'd still need to do the hard work of market-by-market PSP procurement. With Yuno, the LatAm coverage is included."

---

### What Needs to Be True for Yuno to Win

1. **David gets comfortable** — he must see the integration as net reduction in complexity, not net addition. Mexico pilot + SE embedding achieves this.
2. **Priya gets proof** — Mexico pilot approval rate data closes the performance-promise gap.
3. **Mark sees the ROI model** — $592K hard savings + conservative revenue upside. Yuno CFO engagement helps.
4. **We close before auto-renewal** — Week 10 contract signature is the hard deadline. If we're still in "evaluation" by Week 9, the deal slips to 2025.

---

*Total word count: ~4,000 words*  
*Prepared for HealthHub internal distribution and Priya Chaudhari's stakeholder presentations.*
