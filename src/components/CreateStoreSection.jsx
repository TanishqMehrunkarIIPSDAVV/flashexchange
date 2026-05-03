import { useTheme } from "../ThemeProvider";

function ArrowRightIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M4 10h10m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M10 2.8 15.5 5v4.2c0 3.4-2.2 6.4-5.5 7.8-3.3-1.4-5.5-4.4-5.5-7.8V5L10 2.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m7.8 10.1 1.4 1.4 3-3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StoreIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M3 7h14l-1 3H4L3 7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5 10v6h10v-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 16v-3h6v3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4.2 4.8 5.3 7h9.4l1.1-2.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GridIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M4 4h4v4H4V4Zm8 0h4v4h-4V4ZM4 12h4v4H4v-4Zm8 0h4v4h-4v-4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function TrendIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M3 14.5 7.2 10.3 10.4 12.8 16.8 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.8 6.5h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="m5.5 10.2 3 3 6-6.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LockIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M6.5 8V6.8A3.5 3.5 0 0 1 10 3.3a3.5 3.5 0 0 1 3.5 3.5V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5.5 8h9v7.2h-9V8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 10.4v1.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PackageIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M4 6.5 10 3l6 3.5-6 3.5L4 6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M4 6.5v7l6 3.5 6-3.5v-7" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M10 10v7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function MessageIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="M4.5 4.8h11v7.2h-5.8L6.6 15v-3H4.5V4.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon({ className = "h-4 w-4" }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
      <path d="m10 3 1.9 4.1 4.5.6-3.2 3 1 4.4L10 12.9 5.8 15l1-4.3-3.2-3 4.5-.6L10 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const trustStats = [
  { value: "5,000+", label: "Stores Created" },
  { value: "$100,000+", label: "Payments Processed" },
  { value: "99.9%", label: "Uptime" },
];

const howItWorks = [
  "Register",
  "Create Store",
  "List Product",
  "Share Link",
  "Protected Hold",
  "Instant Delivery",
  "Funds Released",
];

const features = [
  {
    title: "Instant Delivery",
    text: "Deliver digital items the moment payment clears.",
  },
  {
    title: "Dispute Resolution",
    text: "Handle disagreements with a visible, structured process.",
  },
  {
    title: "Sell API Keys",
    text: "Support software products, tokens, and access keys.",
  },
  {
    title: "Sell Game Accounts",
    text: "Offer gaming goods with the same storefront flow.",
  },
  {
    title: "Protected Payment Hold",
    text: "Keep both sides protected while a transaction is active.",
  },
  {
    title: "24/7 Support",
    text: "Provide round-the-clock help for every buyer and seller.",
  },
];

const faqItems = [
  {
    question: "How secure is the payment hold?",
    answer:
      "The workflow is designed around a visible payment hold and release process so digital goods move only after payment and confirmation.",
  },
  {
    question: "What are the fees?",
    answer:
      "Keep the pricing surface simple: a flat store fee, a clear transaction cut, and no hidden platform steps.",
  },
  {
    question: "Can I use my own domain?",
    answer:
      "Yes. The storefront layout is built to support a custom link or a branded domain without changing the core experience.",
  },
];

const productCards = [
  { name: "Premium Game Key", price: "$39.00", accent: "from-cyan-300 to-indigo-400" },
  { name: "Discord Boost Pack", price: "$12.00", accent: "from-violet-300 to-fuchsia-400" },
  { name: "Creator Toolkit", price: "$59.00", accent: "from-emerald-300 to-cyan-300" },
  { name: "Pro Login Bundle", price: "$99.00", accent: "from-slate-300 to-slate-500" },
];

const dashboardMetrics = [
  { label: "Today\'s revenue", value: "$14,230", delta: "+18%" },
  { label: "Orders", value: "128", delta: "+9" },
  { label: "Conversion", value: "6.4%", delta: "+0.8" },
  { label: "Active listings", value: "36", delta: "+4" },
];

const dashboardBars = [42, 56, 36, 72, 58, 90, 76, 66, 84, 61, 74, 88];

const dashboardOrders = [
  { id: "#2041", product: "Premium Game Key", status: "Paid", amount: "$39.00" },
  { id: "#2042", product: "Creator Toolkit", status: "Pending", amount: "$59.00" },
  { id: "#2043", product: "Discord Boost Pack", status: "Paid", amount: "$12.00" },
];

const sidebarItems = ["Overview", "Orders", "Listings", "Payments", "Messages", "Settings"];

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-cyan-200/60 bg-cyan-500/10 text-cyan-700 dark:border-cyan-300/20 dark:text-cyan-200">
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-700/75 dark:text-cyan-200/80">
          {eyebrow}
        </p>
      </div>
      <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-[2.15rem]">
        {title}
      </h2>
      <p className="max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
        {text}
      </p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-3xl border border-slate-200/80 bg-white/90 px-5 py-5 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200/50 bg-cyan-500/10 text-cyan-700 dark:border-cyan-300/20 dark:text-cyan-200">
        <TrendIcon className="h-4 w-4" />
      </div>
      <p className="text-2xl font-semibold text-slate-900 dark:text-white sm:text-[28px]">
        {value}
      </p>
      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  );
}

function StepBubble({ label }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/40 bg-white/95 text-cyan-700 shadow-[0_8px_20px_rgba(34,211,238,0.18)] dark:border-cyan-300/20 dark:bg-slate-900/80 dark:text-cyan-200">
        <CheckIcon className="h-5 w-5" />
      </div>
      <p className="max-w-[96px] text-[11px] leading-4 text-slate-600 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

function FeatureCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-200/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.2),rgba(168,85,247,0.18))] text-cyan-700 dark:border-cyan-300/15 dark:text-cyan-200">
        {title.includes("Payment") ? <ShieldIcon className="h-5 w-5" /> : title.includes("API") ? <PackageIcon className="h-5 w-5" /> : title.includes("Support") ? <MessageIcon className="h-5 w-5" /> : <LockIcon className="h-5 w-5" />}
      </div>
      <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-xs leading-5 text-slate-600 dark:text-slate-400">
        {text}
      </p>
    </div>
  );
}

function ProductCard({ product }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur dark:border-white/10 dark:bg-slate-950/70">
      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${product.accent} shadow-[0_0_22px_rgba(168,85,247,0.18)]`} />
      <div className="min-w-0 flex-1">
        <p className="font-medium text-slate-900 dark:text-white">{product.name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">Digital product card</p>
      </div>
      <p className="text-sm font-semibold text-slate-900 dark:text-cyan-100">{product.price}</p>
    </div>
  );
}

function DashboardPreview({ isDark }) {
  const shellClass = isDark
    ? "border-white/10 bg-[linear-gradient(180deg,rgba(7,12,24,0.95),rgba(14,18,34,0.92))]"
    : "border-slate-200/80 bg-[linear-gradient(180deg,rgba(249,251,255,1),rgba(233,241,250,0.96))]";

  const panelClass = isDark
    ? "border-white/10 bg-slate-950/80"
    : "border-slate-200/80 bg-white/92";

  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-400" : "text-slate-500";
  const mutedCard = isDark ? "border-white/10 bg-slate-900/80" : "border-slate-200/80 bg-white";

  return (
    <div className={`rounded-[28px] border p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-5 ${panelClass}`}>
      <div className={`mb-4 flex items-center justify-between rounded-2xl border px-4 py-3 text-xs ${isDark ? 'border-white/10 bg-slate-900/80 text-slate-400' : 'border-slate-200/70 bg-slate-50 text-slate-500'}`}>
        <span>Store dashboard</span>
        <span className={`rounded-full px-3 py-1 font-medium ${isDark ? 'bg-cyan-500/10 text-cyan-200' : 'bg-cyan-500/10 text-cyan-700'}`}>
          Live preview
        </span>
      </div>

      <div className={`rounded-[24px] border p-4 ${shellClass}`}>
        <div className="grid gap-4 lg:grid-cols-[180px_1fr]">
          <aside className={`rounded-[22px] border p-4 ${mutedCard}`}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(74,111,223,0.95),rgba(172,114,230,0.95))] text-sm font-bold text-white shadow-[0_10px_20px_rgba(76,103,199,0.22)]">
                D
              </div>
              <div>
                <p className={`text-sm font-semibold ${textPrimary}`}>Dsell Admin</p>
                <p className={`text-[11px] ${textSecondary}`}>Store controls</p>
              </div>
            </div>

            <div className="space-y-2">
              {sidebarItems.map((item, index) => (
                <div
                  key={item}
                  className={`rounded-2xl px-3 py-2 text-xs ${index === 0 ? 'bg-[linear-gradient(135deg,rgba(74,111,223,0.15),rgba(172,114,230,0.15))] font-medium text-slate-900 dark:text-white' : textSecondary}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </aside>

          <div className="space-y-4">
            <div className={`rounded-2xl border p-3 ${mutedCard}`}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className={`text-sm font-semibold ${textPrimary}`}>Storefront overview</p>
                  <p className={`text-xs ${textSecondary}`}>Product shelf and live sales activity</p>
                </div>
                <div className={`rounded-full px-3 py-1 text-xs ${isDark ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                  Online
                </div>
              </div>
            </div>

            {/* <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {dashboardMetrics.map((metric) => (
                <div key={metric.label} className={`rounded-2xl border p-4 ${mutedCard}`}>
                  <div className="mb-3 flex items-center justify-between">
                    <p className={`text-[11px] uppercase tracking-[0.16em] ${textSecondary}`}>
                      {metric.label}
                    </p>
                    <span className={`rounded-full px-2 py-1 text-[10px] ${isDark ? 'bg-emerald-400/10 text-emerald-200' : 'bg-emerald-500/10 text-emerald-700'}`}>
                      {metric.delta}
                    </span>
                  </div>
                  <p className={`text-2xl font-semibold ${textPrimary}`}>{metric.value}</p>
                </div>
              ))}
            </div> */}

            {/* <div className={`rounded-2xl border p-4 ${mutedCard}`}>
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className={`text-sm font-semibold ${textPrimary}`}>Revenue this month</p>
                  <p className={`text-xs ${textSecondary}`}>Net sales across all store listings</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs ${isDark ? 'bg-cyan-500/10 text-cyan-200' : 'bg-cyan-500/10 text-cyan-700'}`}>
                  +24.3%
                </span>
              </div>

              <div className="flex h-40 items-end gap-2">
                {dashboardBars.map((bar, index) => (
                  <div key={`${bar}-${index}`} className="flex flex-1 flex-col items-center gap-2">
                    <div className={`flex w-full items-end rounded-full ${isDark ? 'bg-white/5' : 'bg-slate-100'} p-1`}>
                      <div
                        className="w-full rounded-full bg-gradient-to-t from-violet-500 via-fuchsia-500 to-cyan-400"
                        style={{ height: `${bar}%` }}
                      />
                    </div>
                    <span className={`text-[10px] ${textSecondary}`}>{index + 1}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="grid gap-3 xl:grid-cols-[1.05fr_0.95fr]">
              <div className={`rounded-2xl border p-4 ${mutedCard}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${textPrimary}`}>Top listings</p>
                    <p className={`text-xs ${textSecondary}`}>Products ready for checkout</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs ${isDark ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                    4 live
                  </span>
                </div>

                <div className="space-y-3">
                  {productCards.map((card) => (
                    <div key={card.name} className={`flex items-center gap-3 rounded-2xl border p-3 ${isDark ? 'border-white/10 bg-slate-950/70' : 'border-slate-200/80 bg-slate-50/80'}`}>
                      <div className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${card.accent}`} />
                      <div className="min-w-0 flex-1">
                        <p className={`text-sm font-semibold ${textPrimary}`}>{card.name}</p>
                        <p className={`text-xs ${textSecondary}`}>Featured listing</p>
                      </div>
                      <p className={`text-sm font-semibold ${textPrimary}`}>{card.price}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`rounded-2xl border p-4 ${mutedCard}`}>
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <p className={`text-sm font-semibold ${textPrimary}`}>Recent orders</p>
                    <p className={`text-xs ${textSecondary}`}>Latest customer activity</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs ${isDark ? 'bg-violet-500/10 text-violet-200' : 'bg-violet-500/10 text-violet-700'}`}>
                    Today
                  </span>
                </div>

                <div className="space-y-2">
                  {dashboardOrders.map((order) => (
                    <div key={order.id} className={`flex items-center justify-between rounded-2xl border px-3 py-3 ${isDark ? 'border-white/10 bg-slate-900/80' : 'border-slate-200/80 bg-white/90'}`}>
                      <div>
                        <p className={`text-sm font-semibold ${textPrimary}`}>{order.id}</p>
                        <p className={`text-xs ${textSecondary}`}>{order.product}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-sm font-semibold ${textPrimary}`}>{order.amount}</p>
                        <p className={`text-xs ${order.status === 'Paid' ? 'text-emerald-600 dark:text-emerald-300' : 'text-amber-600 dark:text-amber-300'}`}>
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateStoreSection() {
  const { isDark } = useTheme();

  const pageBg = isDark
    ? "bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(192,132,252,0.18),transparent_25%),linear-gradient(180deg,rgba(4,10,24,0.96),rgba(4,10,24,1))]"
    : "bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.12),transparent_25%),radial-gradient(circle_at_top_right,rgba(192,132,252,0.12),transparent_25%),linear-gradient(180deg,rgba(255,255,255,1),rgba(247,250,252,0.94))]";

  const outerShell = isDark
    ? "border-white/10 bg-slate-950/75 shadow-[0_20px_60px_rgba(2,6,23,0.42)]"
    : "border-slate-200/80 bg-white/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)]";

  const heroCard = isDark
    ? "border-white/10 bg-[linear-gradient(135deg,rgba(7,12,24,0.92),rgba(18,24,42,0.94))] shadow-[0_18px_40px_rgba(2,6,23,0.24)]"
    : "border-slate-200/80 bg-[linear-gradient(135deg,rgba(255,255,255,0.98),rgba(240,246,252,0.92))] shadow-[0_18px_40px_rgba(15,23,42,0.08)]";

  const sectionCard = isDark
    ? "border-white/10 bg-slate-950/75"
    : "border-slate-200/80 bg-white/92";

  const innerCard = isDark
    ? "border-white/10 bg-slate-950/80"
    : "border-slate-200/80 bg-white/88";

  return (
    <section className="relative overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
      <div className={`absolute inset-0 -z-10 ${pageBg}`} />
      <div className="absolute left-0 top-24 -z-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl dark:bg-cyan-400/12" />
      <div className="absolute right-0 top-24 -z-10 h-72 w-72 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/12" />

      <div className="flex flex-col gap-8 lg:gap-10">
        <div className={`rounded-[36px] border p-5 backdrop-blur sm:p-6 lg:p-8 ${outerShell}`}>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
            <div className={`flex flex-col justify-between rounded-[30px] border p-6 sm:p-7 lg:p-8 ${heroCard}`}>
              <div>
                <p className={`text-sm uppercase tracking-[0.32em] ${isDark ? 'text-cyan-200/80' : 'text-cyan-700/70'}`}>
                  Digital commerce
                </p>
                <h2 className={`mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[50px] lg:leading-[1.05] ${isDark ? 'text-white' : 'text-slate-950'}`}>
                  Create Your Own Digital Store with Secure Payments
                </h2>
                <p className={`mt-4 max-w-2xl text-sm leading-6 sm:text-base lg:text-[1.02rem] ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Share your custom store link, manage storefronts, and keep every transaction protected with a clean, modern workflow.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(74,111,223,0.95),rgba(172,114,230,0.95))] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(76,103,199,0.32)] transition hover:-translate-y-0.5"
                >
                    <span className="inline-flex items-center gap-2">
                      <StoreIcon className="h-4 w-4" />
                      Create your store
                      <ArrowRightIcon className="h-4 w-4" />
                    </span>
                </button>
                <button
                  type="button"
                  className="rounded-full border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                >
                    <span className="inline-flex items-center gap-2">
                      <GridIcon className="h-4 w-4" />
                      See demo
                    </span>
                </button>
              </div>
            </div>

            <DashboardPreview isDark={isDark} />
          </div>
        </div>

        <div className={`space-y-5 rounded-[30px] border px-5 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:px-6 sm:py-7 ${sectionCard}`}>
          <div className="text-center">
            <p className={`text-lg font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>Trust Strip</p>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {trustStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>

        <div className={`grid gap-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6 ${sectionCard}`}>
          <SectionTitle
            eyebrow="Your Link Section"
            title="dsell.store/yourname"
            text="Share your custom store link with a polished, shareable storefront URL and a clean mobile-friendly presentation."
          />

          <div className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className={`rounded-[30px] border p-4 shadow-[0_16px_32px_rgba(15,23,42,0.08)] ${isDark ? 'border-white/10 bg-[linear-gradient(135deg,rgba(10,15,28,0.95),rgba(20,26,42,0.92))]' : 'border-slate-200/80 bg-[linear-gradient(135deg,rgba(245,248,252,0.98),rgba(228,240,248,0.94))]'}`}>
              <div className={`rounded-[24px] border px-5 py-4 text-2xl font-medium tracking-tight sm:px-6 sm:py-5 sm:text-3xl ${isDark ? 'border-white/10 bg-slate-950/80 text-slate-200' : 'border-slate-200/70 bg-white/88 text-slate-400'}`}>
                <span className="inline-flex items-center gap-3">
                  <ShieldIcon className="h-5 w-5 text-cyan-600 dark:text-cyan-200" />
                  dsell.store/yourname
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`space-y-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6 ${sectionCard}`}>
          <SectionTitle
            eyebrow="How It Works"
            title="A simple 7-step flow"
            text="Guide buyers through registration, store creation, product listing, and release without clutter or visual noise."
          />

          <div className={`rounded-[28px] border px-4 py-5 sm:px-6 sm:py-6 ${innerCard}`}>
            <div className="grid gap-4 md:grid-cols-7">
              {howItWorks.map((step, index) => (
                <StepBubble key={step} index={index} label={step} />
              ))}
            </div>
          </div>
        </div>

        <div className={`space-y-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6 ${sectionCard}`}>
          <SectionTitle
            eyebrow="Storefront Preview"
            title="A clean product shelf with analytics"
            text="The storefront preview stays centered, polished, and functional in both themes, with the same layout rhythm as the reference."
          />

          <div className={`rounded-[32px] border p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-5 ${isDark ? 'border-white/10 bg-[linear-gradient(180deg,rgba(9,14,26,0.98),rgba(15,20,34,0.94))]' : 'border-slate-200/80 bg-[linear-gradient(180deg,rgba(248,250,252,0.96),rgba(236,242,249,0.92))]'}`}>
            <div className="grid gap-4 lg:grid-cols-[240px_1fr]">
              <div className={`rounded-[26px] border p-4 ${isDark ? 'border-white/10 bg-slate-950/80' : 'border-slate-200/80 bg-white/88'}`}>
                <div className={`mb-4 h-4 w-28 rounded-full ${isDark ? 'bg-slate-700' : 'bg-slate-200'}`} />
                <div className={`space-y-3 text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {['Dashboard', 'Orders', 'Products', 'Payments', 'Analytics', 'Support'].map((item) => (
                    <div key={item} className={`rounded-2xl border px-3 py-2 ${isDark ? 'border-white/10 bg-slate-900/80' : 'border-slate-200/70 bg-slate-50'}`}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className={`space-y-4 rounded-[26px] border p-4 sm:p-5 ${isDark ? 'border-white/10 bg-slate-950/80' : 'border-slate-200/80 bg-white/88'}`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      dsell store
                    </p>
                    <p className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                      Console view with product cards and quick stats.
                    </p>
                  </div>
                  <div className={`rounded-full px-3 py-1 text-xs ${isDark ? 'bg-white/10 text-slate-300' : 'bg-slate-100 text-slate-600'}`}>
                    Location: storefront
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-4 xl:grid-cols-4">
                  {productCards.map((product) => (
                    <ProductCard key={product.name} product={product} />
                  ))}
                </div>

                <div className="grid gap-3 sm:grid-cols-5">
                  {[
                    ["$1000.00", "Voice balance"],
                    ["50", "Open orders"],
                    ["$20.00", "Cart total"],
                    ["$36.00", "Total sales"],
                    ["2", "Active alerts"],
                  ].map(([value, label]) => (
                    <div key={label} className={`rounded-2xl border p-3 ${isDark ? 'border-white/10 bg-slate-900/80' : 'border-slate-200/80 bg-slate-50'}`}>
                      <p className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{value}</p>
                      <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`space-y-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] sm:p-6 ${sectionCard}`}>
          <SectionTitle
            eyebrow="Features & Use Cases"
            title="Flexible commerce blocks"
            text="These cards can represent instant delivery, dispute handling, API keys, game accounts, and support workflows while staying visually consistent."
          />

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>

        <div className={`grid gap-5 rounded-[30px] border p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] lg:grid-cols-[0.95fr_1.05fr] sm:p-6 ${sectionCard}`}>
          <div className="space-y-4">
            <SectionTitle
              eyebrow="Security & FAQ"
              title="Payments explained clearly"
              text="The left side can hold a visual lock diagram while the right side answers common payment questions in a compact, readable format."
            />

            <div className={`rounded-[28px] border p-4 ${isDark ? 'border-white/10 bg-[linear-gradient(180deg,rgba(7,12,24,0.95),rgba(16,22,36,0.92))]' : 'border-slate-200/80 bg-[linear-gradient(180deg,rgba(249,251,255,0.95),rgba(231,239,249,0.9))]'}`}>
              <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-500 dark:text-slate-400">
                {['List', 'Hold', 'Release'].map((item, index) => (
                  <div key={item} className={`rounded-2xl border p-3 ${isDark ? 'border-white/10 bg-slate-900/80' : 'border-slate-200/70 bg-white/80'}`}>
                    <div className="mx-auto mb-2 h-10 w-10 rounded-full border border-cyan-200/30 bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(168,85,247,0.18))]" />
                    <p className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>{index + 1}. {item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-7">
            {faqItems.map((item) => (
              <details key={item.question} className={`group rounded-[22px] border p-4 ${isDark ? 'border-white/10 bg-slate-900/80' : 'border-slate-200/80 bg-white/88'}`}>
                <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  <span>{item.question}</span>
                  <span className="text-lg text-slate-400 transition group-open:rotate-45">+</span>
                </summary>
                <p className={`mt-3 text-sm leading-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <footer className={`rounded-[30px] border px-5 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ${sectionCard}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className={`flex flex-wrap items-center gap-4 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              {['Terms', 'Privacy', 'Contact', 'Twitter', 'Discord'].map((item) => (
                <a key={item} href="#" className="nav-link text-sm">
                  {item}
                </a>
              ))}
            </div>

            <button
              type="button"
              className="rounded-full border border-cyan-300/30 bg-[linear-gradient(135deg,rgba(74,111,223,0.95),rgba(172,114,230,0.95))] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(76,103,199,0.32)] transition hover:-translate-y-0.5"
            >
              Create Storefront
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default CreateStoreSection;
