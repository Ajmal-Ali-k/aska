const smallDivider = (num, label) => `
    <aside class="patch-divider" aria-hidden="true">
      <span class="pd-rule pd-rule-grow"></span>
      <span class="pd-marker">§${num}</span>
      <span class="pd-rule pd-rule-short"></span>
      <span class="pd-cable-wrap">
        <svg class="pd-cable-svg" viewBox="0 0 240 24" preserveAspectRatio="none">
          <path id="pd-c-${num}" class="pd-cable" d="M 0 12 C 60 12, 180 12, 240 12" />
          <circle class="pd-pulse" data-cable="#pd-c-${num}" cx="0" cy="0" r="2.5" />
        </svg>
      </span>
      <span class="pd-label">&rarr; ${label}</span>
      <span class="pd-rule pd-rule-grow"></span>
    </aside>
`;

const tallDivider = (num, label, sub) => `
    <aside class="patch-divider patch-divider-tall" aria-hidden="true">
      <header class="pd-tall-meta">
        <span class="pd-marker">§${num}</span>
        <span class="pd-rule pd-rule-grow"></span>
        <span class="pd-label">&darr; ${label}${sub ? ` &middot; ${sub}` : ""}</span>
      </header>
      <svg class="pd-tall-svg" viewBox="0 0 1200 140" preserveAspectRatio="none">
        <path id="pd-tc-${num}-1" class="pd-cable" d="M 0 28 C 320 28, 700 60, 1200 60" />
        <path id="pd-tc-${num}-2" class="pd-cable" d="M 0 56 C 420 56, 700 28, 1200 28" />
        <path id="pd-tc-${num}-3" class="pd-cable" d="M 0 70 C 520 70, 700 70, 1200 70" />
        <path id="pd-tc-${num}-4" class="pd-cable" d="M 0 84 C 320 84, 700 116, 1200 116" />
        <path id="pd-tc-${num}-5" class="pd-cable" d="M 0 112 C 420 112, 700 84, 1200 84" />
        <circle class="pd-pulse" data-cable="#pd-tc-${num}-1" cx="0" cy="0" r="3" />
        <circle class="pd-pulse" data-cable="#pd-tc-${num}-3" cx="0" cy="0" r="3" />
        <circle class="pd-pulse" data-cable="#pd-tc-${num}-5" cx="0" cy="0" r="3" />
      </svg>
    </aside>
`;

export const pageMarkup = `<a class="skip-link" href="#main">Skip to content</a>
    <!-- NAV -->
    <nav class="nav" aria-label="Main navigation">
      <a href="#" class="brand-link" aria-label="Aska home">
        <span class="brand-word">Aska</span>
      </a>
      <div class="nav-links">
        <a href="#channels" class="nav-a">Channels</a>
        <a href="#roles" class="nav-a">AI Roles</a>
        <a href="#how" class="nav-a">How it works</a>
        <a href="#examples" class="nav-a">Examples</a>
        <a href="#industries" class="nav-a">Industries</a>
      </div>
      <a href="#cta" class="btn-cta">Start for free</a>
    </nav>

    <!-- HERO -->
    <section class="hero" id="main">
      <div class="hero-meta">
        <span class="hero-meta-num">§00</span>
        <span class="hero-meta-rule" aria-hidden="true"></span>
        <span class="hero-meta-label">Runtime · Switchboard</span>
        <span class="hero-meta-status"><span class="hero-meta-dot"></span>Live</span>
      </div>

      <div class="hero-grid">
        <header class="hero-head">
          <span class="hero-eyebrow">Aska / fynac.com</span>
          <h1>
            <span class="line">An assistant that</span>
            <span class="line line-em">patches every</span>
            <span class="line">conversation into</span>
            <span class="line line-em">your back office.</span>
          </h1>
          <p class="hero-sub">
            Aska is the switchboard between your customers and fynac.com. It listens on
            WhatsApp, email, Telegram, SMS and voice — then replies, drafts invoices,
            chases payments and files reports without you opening a dashboard.
          </p>

          <div class="hero-btns">
            <a href="#cta" class="btn-primary">
              <span>Start free</span>
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a href="#examples" class="btn-secondary">
              <span>View workflows</span>
              <i class="fa-solid fa-arrow-down" aria-hidden="true"></i>
            </a>
          </div>

          <p class="hero-stat">
            <span class="hero-stat-num">500+</span>
            <span class="hero-stat-text">businesses already run Aska daily across the GCC.</span>
          </p>
        </header>

        <aside class="switchboard" aria-label="Channels routed to back-office actions">
          <header class="sb-head">
            <span class="sb-tag"><span class="sb-tag-dot"></span>Live patch</span>
            <span class="sb-stat">5 channels &middot; 4 actions</span>
          </header>

          <div class="sb-stage">
            <ul class="sb-side sb-channels" aria-hidden="true">
              <li class="sb-node" data-y="56"><i class="fa-brands fa-whatsapp"></i><span>WhatsApp</span></li>
              <li class="sb-node" data-y="144"><i class="fa-solid fa-envelope"></i><span>Email</span></li>
              <li class="sb-node" data-y="232"><i class="fa-solid fa-comment-sms"></i><span>SMS</span></li>
              <li class="sb-node" data-y="320"><i class="fa-brands fa-telegram"></i><span>Telegram</span></li>
              <li class="sb-node" data-y="408"><i class="fa-solid fa-phone"></i><span>Voice</span></li>
            </ul>

            <svg class="sb-cables" viewBox="0 0 600 480" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="cable-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stop-color="currentColor" stop-opacity="0.22" />
                  <stop offset="55%" stop-color="currentColor" stop-opacity="0.7" />
                  <stop offset="100%" stop-color="currentColor" stop-opacity="0.22" />
                </linearGradient>
              </defs>
              <path id="cable-1" class="cable" d="M 0 56 C 200 56, 400 96, 600 96" />
              <path id="cable-2" class="cable" d="M 0 144 C 200 144, 400 184, 600 184" />
              <path id="cable-3" class="cable" d="M 0 232 C 220 232, 380 272, 600 272" />
              <path id="cable-4" class="cable" d="M 0 320 C 220 320, 380 96, 600 96" />
              <path id="cable-5" class="cable" d="M 0 408 C 220 408, 380 360, 600 360" />

              <circle class="pulse" data-cable="#cable-1" r="3.5" cx="0" cy="0" />
              <circle class="pulse" data-cable="#cable-2" r="3.5" cx="0" cy="0" />
              <circle class="pulse" data-cable="#cable-3" r="3.5" cx="0" cy="0" />
              <circle class="pulse" data-cable="#cable-4" r="3.5" cx="0" cy="0" />
              <circle class="pulse" data-cable="#cable-5" r="3.5" cx="0" cy="0" />
            </svg>

            <ul class="sb-side sb-actions" aria-hidden="true">
              <li class="sb-node" data-y="96"><span class="sb-action-mark">↺</span><span>Reply</span></li>
              <li class="sb-node" data-y="184"><span class="sb-action-mark">№</span><span>Invoice</span></li>
              <li class="sb-node" data-y="272"><span class="sb-action-mark">$</span><span>Collect</span></li>
              <li class="sb-node" data-y="360"><span class="sb-action-mark">∑</span><span>Report</span></li>
            </ul>
          </div>

          <footer class="sb-foot">
            <span class="sb-foot-label">Routing</span>
            <span class="sb-foot-mono">aska.fynac.routing</span>
            <span class="sb-foot-rev">REV-1.0</span>
          </footer>
        </aside>
      </div>
    </section>

    ${tallDivider("01", "Every channel", "Five networks routed")}

    <!-- CHANNELS -->
    <section class="full-sec ch-sec" id="channels">
      <div class="sec-in">
        <div class="sec-label">
          <i class="fa-solid fa-plug"></i> Communication Channels
        </div>
        <h2 class="sec-title">
          Connect Aska to every<br />channel your customers use.
        </h2>
        <p class="sec-sub">
          Aska works across all major communication platforms. One AI brain, all
          channels — your customers reach you wherever they are.
        </p>
        <div class="ch-grid">
          <div class="ch-card">
            <div
              class="ch-icon"
              style="
                background: rgba(37, 211, 102, 0.08);
                border-color: rgba(37, 211, 102, 0.2);
              "
            >
              <i
                class="fa-brands fa-whatsapp"
                style="color: #25d366; font-size: 26px"
              ></i>
            </div>
            <h3>WhatsApp</h3>
            <p>
              Connect your WhatsApp Business number. Customers chat, get
              invoices, quotations and support instantly.
            </p>
          </div>
          <div class="ch-card">
            <div
              class="ch-icon"
              style="
                background: rgba(96, 165, 250, 0.08);
                border-color: rgba(96, 165, 250, 0.2);
              "
            >
              <i
                class="fa-solid fa-envelope"
                style="color: #60a5fa; font-size: 22px"
              ></i>
            </div>
            <h3>Email</h3>
            <p>
              Aska reads incoming emails, replies intelligently and sends
              invoices, reports and statements automatically.
            </p>
          </div>
          <div class="ch-card">
            <div
              class="ch-icon"
              style="
                background: rgba(41, 182, 246, 0.08);
                border-color: rgba(41, 182, 246, 0.2);
              "
            >
              <i
                class="fa-brands fa-telegram"
                style="color: #29b6f6; font-size: 24px"
              ></i>
            </div>
            <h3>Telegram</h3>
            <p>
              Deploy Aska as a Telegram bot for your team or customers — full
              business intelligence at their fingertips.
            </p>
          </div>
          <div class="ch-card">
            <div
              class="ch-icon"
              style="
                background: rgba(167, 139, 250, 0.08);
                border-color: rgba(167, 139, 250, 0.2);
              "
            >
              <i
                class="fa-solid fa-comment-sms"
                style="color: #a78bfa; font-size: 22px"
              ></i>
            </div>
            <h3>SMS / iMessage</h3>
            <p>
              Reach customers via SMS for payment reminders, appointment
              confirmations and alerts.
            </p>
          </div>
          <div class="ch-card">
            <div
              class="ch-icon"
              style="
                background: rgba(52, 211, 153, 0.08);
                border-color: rgba(52, 211, 153, 0.2);
              "
            >
              <i
                class="fa-solid fa-phone"
                style="color: #34d399; font-size: 22px"
              ></i>
            </div>
            <h3>Voice Call</h3>
            <p>
              Aska answers calls, understands voice commands and responds — no
              human operator needed.
            </p>
          </div>
        </div>
      </div>
    </section>

    ${smallDivider("02", "Nine roles")}

    <!-- AI ROLES -->
    <section class="full-sec roles-sec" id="roles">
      <div class="sec-in">
        <div class="sec-label"><i class="fa-solid fa-robot"></i> AI Roles</div>
        <h2 class="sec-title">One AI. Every role<br />your business needs.</h2>
        <p class="sec-sub">
          Aska acts as multiple business roles simultaneously — all running on
          your own private account, connected to your business software.
        </p>
        <div class="roles-grid">
          <div class="role-card">
            <div class="role-icon">🧮</div>
            <h3>Accountant</h3>
            <p>
              Creates invoices, records expenses from photos, tracks payments,
              calculates VAT and generates financial reports.
            </p>
            <ul>
              <li>Create invoices instantly</li>
              <li>Record expenses from receipt photos</li>
              <li>Auto VAT/tax calculation</li>
              <li>Generate financial reports</li>
              <li>Reconcile transactions</li>
            </ul>
          </div>
          <div class="role-card">
            <div class="role-icon">💼</div>
            <h3>Sales Executive</h3>
            <p>
              Responds to new leads, sends quotations, follows up automatically
              and converts prospects into customers.
            </p>
            <ul>
              <li>Instant lead response</li>
              <li>Smart quotation generation</li>
              <li>Auto follow-up on leads</li>
              <li>CRM updated automatically</li>
              <li>Track sales pipeline</li>
            </ul>
          </div>
          <div class="role-card">
            <div class="role-icon">🎧</div>
            <h3>Customer Care</h3>
            <p>
              Answers queries 24/7, checks invoice status, handles complaints
              and escalates to a human when needed.
            </p>
            <ul>
              <li>24/7 customer support</li>
              <li>Real-time invoice lookup</li>
              <li>Handle complaints & returns</li>
              <li>Send documents instantly</li>
              <li>Human escalation when needed</li>
            </ul>
          </div>
          <div class="role-card">
            <div class="role-icon">📊</div>
            <h3>Manager</h3>
            <p>
              Daily business summaries, cash flow overview, pending approvals,
              overdue alerts and performance reports.
            </p>
            <ul>
              <li>Daily business briefings</li>
              <li>Cash flow overview</li>
              <li>Outstanding receivables alert</li>
              <li>Low stock notifications</li>
              <li>Profit & loss summary</li>
            </ul>
          </div>
          <div class="role-card">
            <div class="role-icon">📝</div>
            <h3>Data Entry Operator</h3>
            <p>
              Enters invoices from photos, records expenses from receipts,
              updates customer and inventory data instantly.
            </p>
            <ul>
              <li>Invoices from receipt photos</li>
              <li>Expense entry from photos</li>
              <li>Update inventory records</li>
              <li>Log timesheets</li>
              <li>Enter purchase orders</li>
            </ul>
          </div>
          <div class="role-card">
            <div class="role-icon">💳</div>
            <h3>Payment Collector</h3>
            <p>
              Sends reminders to overdue customers, shares payment links,
              negotiates plans and tracks collection status.
            </p>
            <ul>
              <li>Bulk payment reminders</li>
              <li>PDF invoice attached</li>
              <li>Share payment links</li>
              <li>Negotiate payment plans</li>
              <li>Auto follow-up scheduling</li>
            </ul>
          </div>
          <div class="role-card">
            <div class="role-icon">📞</div>
            <h3>Receptionist</h3>
            <p>
              Greets new contacts, answers basic queries, directs to the right
              department and schedules appointments.
            </p>
            <ul>
              <li>Professional first response</li>
              <li>Answer general queries</li>
              <li>Schedule appointments</li>
              <li>Qualify new leads</li>
              <li>Direct to right department</li>
            </ul>
          </div>
          <div class="role-card">
            <div class="role-icon">📈</div>
            <h3>Report Analyst</h3>
            <p>
              Generates weekly/monthly reports, expense analysis, top customers
              report and business intelligence on demand.
            </p>
            <ul>
              <li>Weekly/monthly reports</li>
              <li>Expense analysis</li>
              <li>Top customers report</li>
              <li>Business KPI dashboard</li>
              <li>Profit & loss summary</li>
            </ul>
          </div>
          <div class="role-card">
            <div class="role-icon">🌍</div>
            <h3>Multilingual</h3>
            <p>
              Aska auto-detects the language your customer writes in and
              responds in the exact same language.
            </p>
            <ul>
              <li>English & Arabic</li>
              <li>Hindi & Urdu</li>
              <li>Malayalam & Tagalog</li>
              <li>Auto language detection</li>
              <li>More languages supported</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    ${smallDivider("03", "Setup")}

    <!-- HOW IT WORKS -->
    <section class="full-sec ch-sec" id="how">
      <div class="sec-in">
        <div class="sec-label">
          <i class="fa-solid fa-circle-nodes"></i> How it works
        </div>
        <h2 class="sec-title">Set up in minutes.<br />Running 24/7.</h2>
        <p class="sec-sub">
          Aska connects to your business software and your communication
          channels. Configure once — Aska handles the rest.
        </p>
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <div class="step-body">
              <h3>Subscribe to fynac.com</h3>
              <p>
                Your complete cloud business software — accounting, invoicing,
                inventory, CRM, HR, reports — everything in one place, ready to
                connect to Aska.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <div class="step-body">
              <h3>Connect your communication channels</h3>
              <p>
                Link your WhatsApp Business number, email inbox, Telegram
                account, SMS line or voice number. Connect one or all — your
                choice.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <div class="step-body">
              <h3>Configure Aska's roles</h3>
              <p>
                Tell Aska exactly what roles to play. Should it handle customer
                queries? Create invoices? Send payment reminders? Respond to new
                leads? Customize to your business needs.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">4</div>
            <div class="step-body">
              <h3>Aska goes live</h3>
              <p>
                Anyone who messages, emails or calls your business gets
                intelligent, instant responses. You can also message Aska
                yourself to control fynac.com from anywhere.
              </p>
            </div>
          </div>
          <div class="step">
            <div class="step-num">5</div>
            <div class="step-body">
              <h3>Monitor & improve</h3>
              <p>
                Review all conversations in your dashboard. Adjust settings,
                train Aska on your products and watch it get smarter every day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${smallDivider("04", "Workflows")}

    <!-- EXAMPLES -->
    <section class="full-sec ex-sec" id="examples">
      <div class="sec-in">
        <div class="sec-label">
          <i class="fa-solid fa-comments"></i> Live Examples
        </div>
        <h2 class="sec-title">See Aska in action.</h2>
        <p class="sec-sub">
          Real conversations showing exactly how Aska handles every business
          scenario — across any channel.
        </p>
        <div class="ex-tabs">
          <button class="ex-tab on" type="button" data-tab-target="ex1">
            Invoice
          </button>
          <button class="ex-tab" type="button" data-tab-target="ex2">
            Sales lead
          </button>
          <button class="ex-tab" type="button" data-tab-target="ex3">
            Customer care
          </button>
          <button class="ex-tab" type="button" data-tab-target="ex4">
            Morning report
          </button>
          <button class="ex-tab" type="button" data-tab-target="ex5">
            Payment reminder
          </button>
          <button class="ex-tab" type="button" data-tab-target="ex6">
            Receipt photo
          </button>
        </div>

        <div id="ex1" class="tab-panel on ex-layout">
          <div class="ex-desc">
            <h3>Create invoices via voice or text — instantly</h3>
            <p>
              Just describe what you need in any language. Aska creates the
              invoice in your system, calculates VAT and sends the PDF — all in
              seconds.
            </p>
            <ul>
              <li><i class="fa-solid fa-check"></i> Voice message supported</li>
              <li>
                <i class="fa-solid fa-check"></i> Auto VAT/tax calculation
              </li>
              <li><i class="fa-solid fa-check"></i> PDF generated and sent</li>
              <li><i class="fa-solid fa-check"></i> Saved instantly</li>
            </ul>
          </div>
          <div class="ex-chat">
            <div class="ex-header">
              <div class="ex-av">
                <i
                  class="fa-solid fa-circle-user"
              style="font-size: 17px; color: #07100b"
                ></i>
              </div>
              <div class="ex-info">
                <h4>Your Company Number</h4>
                <p
                  class="status-line"
                >
                  <span
                    class="status-dot"
                  ></span
                  >Online
                </p>
              </div>
            </div>
            <div class="ex-body">
              <div class="ex-msg in">
                "Create invoice for Mohamed Trading, 5 split AC units, AED
                2000 each"
                <div class="t">9:05 AM</div>
              </div>
              <div class="ex-msg out">
                Invoice created.<br /><br />#INV-2024-0892<br />Mohamed
                Trading<br />5x Split AC Unit @ AED 2,000<br />Subtotal:
                AED 10,000<br />VAT (5%): AED 500<br />
                <strong>Total: AED 10,500</strong><br /><br />Send PDF to
                customer?
                <div class="t">9:05 AM ✓✓</div>
              </div>
              <div class="ex-msg in">
                Yes send PDF
                <div class="t">9:06 AM</div>
              </div>
              <div class="ex-msg out">
                PDF sent to Mohamed Trading via email and WhatsApp.
                <div class="t">9:06 AM ✓✓</div>
              </div>
            </div>
          </div>
        </div>

        <div id="ex2" class="tab-panel ex-layout">
          <div class="ex-desc">
            <h3>Respond to leads 24/7 — quote in 10 minutes</h3>
            <p>
              Aska acts as your professional sales executive across any channel
              — qualifying leads and preparing quotations automatically.
            </p>
            <ul>
              <li><i class="fa-solid fa-check"></i> Instant first response</li>
              <li>
                <i class="fa-solid fa-check"></i> Smart quotation with options
              </li>
              <li><i class="fa-solid fa-check"></i> Lead saved to CRM</li>
              <li><i class="fa-solid fa-check"></i> Works on all channels</li>
            </ul>
          </div>
          <div class="ex-chat">
            <div class="ex-header">
              <div class="ex-av">
                <i
                  class="fa-solid fa-circle-user"
                  style="font-size: 17px; color: #07100b"
                ></i>
              </div>
              <div class="ex-info">
                <h4>Your Company Number</h4>
                <p
                  style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-left: 2px;
                  "
                >
                  <span
                    style="
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background: #25d366;
                      display: inline-block;
                      flex-shrink: 0;
                    "
                  ></span
                  >Online
                </p>
              </div>
            </div>
            <div class="ex-body">
              <div class="ex-msg in">
                Hi, do you install central AC? Need for my new villa
                <div class="t">2:14 PM</div>
              </div>
              <div class="ex-msg out">
                Hello! Welcome 👋 Yes, we specialize in central AC
                installation.<br /><br />To quote accurately, please share:<br />•
                Villa size (sq ft)?<br />• Number of rooms?<br />• Location?<br /><br />I'll
                have your quote in 10 minutes!
                <div class="t">2:14 PM ✓✓</div>
              </div>
              <div class="ex-msg in">
                3500 sqft, 4 bedrooms, Dubai Marina
                <div class="t">2:16 PM</div>
              </div>
              <div class="ex-msg out">
                Perfect! Here are your options:<br /><br />🔵
                <strong>Midea</strong> — AED 18,500 · 2yr warranty<br />🟡
                <strong>Gree</strong> — AED 22,000 · 3yr warranty<br />🟢
                <strong>Daikin</strong> — AED 28,500 · 5yr warranty<br /><br />All
                include installation + piping + first-year maintenance.<br />Want
                detailed PDF or site visit?
                <div class="t">2:16 PM ✓✓</div>
              </div>
            </div>
          </div>
        </div>

        <div id="ex3" class="tab-panel ex-layout">
          <div class="ex-desc">
            <h3>Customer support that never sleeps</h3>
            <p>
              Aska checks your records in real-time and gives customers accurate
              answers about invoices, orders and payments.
            </p>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i> Real-time account lookup
              </li>
              <li>
                <i class="fa-solid fa-check"></i> Instant statement sending
              </li>
              <li><i class="fa-solid fa-check"></i> Available 24/7</li>
              <li>
                <i class="fa-solid fa-check"></i> Human escalation available
              </li>
            </ul>
          </div>
          <div class="ex-chat">
            <div class="ex-header">
              <div class="ex-av">
                <i
                  class="fa-solid fa-circle-user"
                  style="font-size: 17px; color: #07100b"
                ></i>
              </div>
              <div class="ex-info">
                <h4>Your Company Number</h4>
                <p
                  style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-left: 2px;
                  "
                >
                  <span
                    style="
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background: #25d366;
                      display: inline-block;
                      flex-shrink: 0;
                    "
                  ></span
                  >Online
                </p>
              </div>
            </div>
            <div class="ex-body">
              <div class="ex-msg in">
                I paid last week but still showing pending
                <div class="t">11:32 AM</div>
              </div>
              <div class="ex-msg out">
                Hi Ahmed, checking now...<br /><br />Payment AED 7,500
                received 18 March · Bank transfer<br />Invoice #INV-2024-0756
                marked paid<br />Balance: AED 0<br /><br />Your statement was
                outdated. Send updated one?
                <div class="t">11:32 AM ✓✓</div>
              </div>
              <div class="ex-msg in">
                Yes please
                <div class="t">11:33 AM</div>
              </div>
              <div class="ex-msg out">
                Updated statement sent. Your account is fully clear. Anything
                else?
                <div class="t">11:33 AM ✓✓</div>
              </div>
            </div>
          </div>
        </div>

        <div id="ex4" class="tab-panel ex-layout">
          <div class="ex-desc">
            <h3>Your business briefing every morning</h3>
            <p>
              Start every day knowing exactly where your business stands —
              sales, expenses, alerts and today's schedule.
            </p>
            <ul>
              <li><i class="fa-solid fa-check"></i> Daily sales summary</li>
              <li><i class="fa-solid fa-check"></i> Overdue invoice alerts</li>
              <li><i class="fa-solid fa-check"></i> Low stock warnings</li>
              <li><i class="fa-solid fa-check"></i> Today's schedule</li>
            </ul>
          </div>
          <div class="ex-chat">
            <div class="ex-header">
              <div class="ex-av">
                <i
                  class="fa-solid fa-circle-user"
                  style="font-size: 17px; color: #07100b"
                ></i>
              </div>
              <div class="ex-info">
                <h4>Your Company Number</h4>
                <p
                  style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-left: 2px;
                  "
                >
                  <span
                    style="
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background: #25d366;
                      display: inline-block;
                      flex-shrink: 0;
                    "
                  ></span
                  >Online
                </p>
              </div>
            </div>
            <div class="ex-body">
              <div class="ex-msg in">
                Morning report
                <div class="t">8:00 AM</div>
              </div>
              <div class="ex-msg out">
                Daily briefing:<br /><br />Sales: AED 34,500
                · 6 invoices<br />Expenses: AED 4,200<br />Gross profit:
                AED 30,300<br /><br />3 invoices overdue - AED 18,400<br />
                Low stock: AC Gas R410 (2 units)<br />Quote #Q-0234 pending 5
                days<br /><br />Today: 2 installations + site visit 3PM<br /><br />Want
                breakdown of any section?
                <div class="t">8:00 AM ✓✓</div>
              </div>
            </div>
          </div>
        </div>

        <div id="ex5" class="tab-panel ex-layout">
          <div class="ex-desc">
            <h3>Collect payments automatically</h3>
            <p>
              Aska finds all overdue invoices and sends professional reminders
              with PDF and payment links — across any channel.
            </p>
            <ul>
              <li><i class="fa-solid fa-check"></i> Bulk reminder sending</li>
              <li>
                <i class="fa-solid fa-check"></i> PDF + payment link included
              </li>
              <li>
                <i class="fa-solid fa-check"></i> Auto follow-up scheduling
              </li>
              <li>
                <i class="fa-solid fa-check"></i> Payment confirmation alerts
              </li>
            </ul>
          </div>
          <div class="ex-chat">
            <div class="ex-header">
              <div class="ex-av">
                <i
                  class="fa-solid fa-circle-user"
                  style="font-size: 17px; color: #07100b"
                ></i>
              </div>
              <div class="ex-info">
                <h4>Your Company Number</h4>
                <p
                  style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-left: 2px;
                  "
                >
                  <span
                    style="
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background: #25d366;
                      display: inline-block;
                      flex-shrink: 0;
                    "
                  ></span
                  >Online
                </p>
              </div>
            </div>
            <div class="ex-body">
              <div class="ex-msg in">
                Send reminders to all overdue customers
                <div class="t">10:00 AM</div>
              </div>
              <div class="ex-msg out">
                Found 5 overdue customers · Total: AED 47,800<br /><br />• ABC
                Trading — AED 15,000 (12 days)<br />• Mohamed Est — AED 8,500 (8
                days)<br />• Gulf Services — AED 12,300 (15 days)<br />• Star
                Technical — AED 7,000 (5 days)<br />• Rashid LLC — AED 5,000 (3
                days)<br /><br />Send reminders to all 5?
                <div class="t">10:00 AM ✓✓</div>
              </div>
              <div class="ex-msg in">
                Yes all
                <div class="t">10:01 AM</div>
              </div>
              <div class="ex-msg out">
                Reminders sent to all 5.<br />Each got: reminder message +
                invoice PDF + payment link.<br /><br />Follow up again in 3 days
                if not paid?
                <div class="t">10:01 AM ✓✓</div>
              </div>
            </div>
          </div>
        </div>

        <div id="ex6" class="tab-panel ex-layout">
          <div class="ex-desc">
            <h3>Photo → expense record in seconds</h3>
            <p>
              Snap any receipt or bill. Aska reads it, extracts all data and
              creates the expense entry in your system — one reply to confirm.
            </p>
            <ul>
              <li>
                <i class="fa-solid fa-check"></i> Any receipt or bill accepted
              </li>
              <li><i class="fa-solid fa-check"></i> Full data extraction</li>
              <li><i class="fa-solid fa-check"></i> One-tap confirmation</li>
              <li><i class="fa-solid fa-check"></i> Saved instantly</li>
            </ul>
          </div>
          <div class="ex-chat">
            <div class="ex-header">
              <div class="ex-av">
                <i
                  class="fa-solid fa-circle-user"
                  style="font-size: 17px; color: #07100b"
                ></i>
              </div>
              <div class="ex-info">
                <h4>Your Company Number</h4>
                <p
                  style="
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    margin-left: 2px;
                  "
                >
                  <span
                    style="
                      width: 8px;
                      height: 8px;
                      border-radius: 50%;
                      background: #25d366;
                      display: inline-block;
                      flex-shrink: 0;
                    "
                  ></span
                  >Online
                </p>
              </div>
            </div>
            <div class="ex-body">
              <div class="ex-msg in">
                📷 [Photo of ADNOC fuel receipt]
                <div class="t">2:45 PM</div>
              </div>
              <div class="ex-msg out">
                ⛽ Fuel Receipt found!<br /><br />🏢 ADNOC Distribution · Al
                Barsha<br />19 March 2026 · 14:32<br />Super 98 · 45.5L<br />
                AED 250.00<br /><br />Which vehicle?
                <div class="t">2:45 PM ✓✓</div>
              </div>
              <div class="ex-msg in">
                Toyota Hiace
                <div class="t">2:46 PM</div>
              </div>
              <div class="ex-msg out">
                Expense saved.<br />AED 250 · Toyota Hiace · ADNOC Al
                Barsha<br /><br />Monthly total for Toyota Hiace: AED 1,450<br />Anything
                else?
                <div class="t">2:46 PM ✓✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    ${smallDivider("05", "Signals")}

    <!-- INPUT TYPES -->
    <section class="full-sec feats-sec" id="features">
      <div class="sec-in">
        <div class="sec-label">
          <i class="fa-solid fa-bolt"></i> Input Types
        </div>
        <h2 class="sec-title">Aska understands<br />everything you send.</h2>
        <p class="sec-sub">
          Text, voice, photos, PDFs, locations, contacts — Aska reads and acts
          on all of them intelligently.
        </p>
        <div class="feats-grid">
          <div class="feat-c">
            <div class="feat-icon">💬</div>
            <h3>Text Messages</h3>
            <p>
              Write naturally in any language. Aska understands plain
              conversational language.
            </p>
          </div>
          <div class="feat-c">
            <div class="feat-icon">🎤</div>
            <h3>Voice Messages</h3>
            <p>
              Send a voice note. Aska transcribes and acts on your instructions
              instantly.
            </p>
          </div>
          <div class="feat-c">
            <div class="feat-icon">📷</div>
            <h3>Receipt Photos</h3>
            <p>
              Snap and send any receipt or bill. Aska extracts all data and
              creates the entry automatically.
            </p>
          </div>
          <div class="feat-c">
            <div class="feat-icon">📄</div>
            <h3>PDF Documents</h3>
            <p>
              Send any PDF. Aska reads it, extracts key information and
              processes it in your system.
            </p>
          </div>
          <div class="feat-c">
            <div class="feat-icon">📍</div>
            <h3>Location</h3>
            <p>
              Share location for delivery quotes, site visits or job scheduling
              assignments.
            </p>
          </div>
          <div class="feat-c">
            <div class="feat-icon">👤</div>
            <h3>Contact Card</h3>
            <p>
              Share a contact — Aska creates a new customer or supplier record
              in your system.
            </p>
          </div>
        </div>
      </div>
    </section>

    ${tallDivider("06", "Every language", "Twenty-eight tongues")}

    <!-- LANGUAGES -->
    <section class="lang-sec">
      <div class="sec-in">
        <div class="sec-label center-label">
          <i class="fa-solid fa-globe"></i> Languages
        </div>
        <h2 class="sec-title center-title">
          Speaks your customer's language.
        </h2>
        <p class="sec-sub center-sub">
          Aska auto-detects the language and responds in the same language —
          zero setup needed.
        </p>
        <div class="lang-pills">
          <div class="lang-pill">🇬🇧 English</div>
          <div class="lang-pill">🇦🇪 Arabic · العربية</div>
          <div class="lang-pill">🇮🇳 Hindi · हिंदी</div>
          <div class="lang-pill">🇵🇰 Urdu · اردو</div>
          <div class="lang-pill">🇮🇳 Malayalam · മലയാളം</div>
          <div class="lang-pill">🇵🇭 Tagalog</div>
          <div class="lang-pill">+ More languages</div>
        </div>
      </div>
    </section>

    ${smallDivider("07", "Industries")}

    <!-- INDUSTRIES -->
    <section class="full-sec ind-sec" id="industries">
      <div class="sec-in">
        <div class="sec-label">
          <i class="fa-solid fa-building"></i> Industries
        </div>
        <h2 class="sec-title">Works for any<br />business type.</h2>
        <p class="sec-sub">
          Whether you're a solo freelancer or a growing company — Aska adapts to
          your industry and workflow.
        </p>
        <div class="ind-grid">
          <div class="ind-card">
            <div class="ind-card-icon">🛒</div>
            <h3>Trading & Retail</h3>
            <p>
              Sales orders, inventory, customer management, supplier payments.
            </p>
          </div>
          <div class="ind-card">
            <div class="ind-card-icon">🔧</div>
            <h3>Service Business</h3>
            <p>Job scheduling, quotations, invoicing, customer follow-up.</p>
          </div>
          <div class="ind-card">
            <div class="ind-card-icon">🏗️</div>
            <h3>Contracting</h3>
            <p>
              Project quotes, progress billing, expense tracking, subcontractor
              payments.
            </p>
          </div>
          <div class="ind-card">
            <div class="ind-card-icon">🍽️</div>
            <h3>Restaurant & Café</h3>
            <p>
              Daily sales, expense recording, supplier management, staff
              management.
            </p>
          </div>
          <div class="ind-card">
            <div class="ind-card-icon">🏢</div>
            <h3>Real Estate</h3>
            <p>
              Rental invoicing, tenant communication, maintenance, collection
              reminders.
            </p>
          </div>
          <div class="ind-card">
            <div class="ind-card-icon">💻</div>
            <h3>Freelancers</h3>
            <p>
              Client invoicing, expense tracking, time logging, payment
              collection.
            </p>
          </div>
          <div class="ind-card">
            <div class="ind-card-icon">🏥</div>
            <h3>Clinics & Healthcare</h3>
            <p>
              Appointment booking, patient communication, billing and reminders.
            </p>
          </div>
          <div class="ind-card">
            <div class="ind-card-icon">🏭</div>
            <h3>Manufacturing</h3>
            <p>
              Production tracking, raw material management, quality control,
              shipments.
            </p>
          </div>
        </div>
      </div>
    </section>

    ${smallDivider("08", "Numbers")}

    <!-- TRUST -->
    <section class="trust-sec">
      <div class="sec-in">
        <div class="sec-label center-label">
          <i class="fa-solid fa-shield-halved"></i> Trusted
        </div>
        <h2 class="sec-title center-title">
          Trusted by businesses.
        </h2>
        <div class="trust-grid">
          <div class="trust-cell">
            <span class="trust-num" data-count="500" data-count-suffix="+">500+</span>
            <div class="trust-lbl">Businesses using Aska</div>
          </div>
          <div class="trust-cell">
            <span class="trust-num" data-count="9">9</span>
            <div class="trust-lbl">AI roles in one assistant</div>
          </div>
          <div class="trust-cell">
            <span class="trust-num" data-count="24" data-count-suffix="/7">24/7</span>
            <div class="trust-lbl">Always on, never sleeps</div>
          </div>
        </div>
      </div>
    </section>

    ${smallDivider("09", "Permissions")}

    <!-- SECURITY -->
    <section class="full-sec sec-sec">
      <div class="sec-in">
        <div class="sec-label">
          <i class="fa-solid fa-lock"></i> Security & Permissions
        </div>
        <h2 class="sec-title">You control what<br />Aska can do.</h2>
        <p class="sec-sub">
          Role-based permissions ensure each person only accesses what they
          need. Your data stays in your account — encrypted and secure.
        </p>
        <div class="perm-grid">
          <div class="perm-card">
            <div class="perm-icon">👑</div>
            <div class="perm-body">
              <h3>Owner — Full Control</h3>
              <p>
                Everything. All reports, all settings, all approvals and all
                user management.
              </p>
            </div>
          </div>
          <div class="perm-card">
            <div class="perm-icon">📊</div>
            <div class="perm-body">
              <h3>Manager — Reports & Approvals</h3>
              <p>
                Full view access, approvals and reports. No system settings or
                user management.
              </p>
            </div>
          </div>
          <div class="perm-card">
            <div class="perm-icon">🧮</div>
            <div class="perm-body">
              <h3>Accountant — Finance Only</h3>
              <p>
                Invoices, payments and expenses. No HR, CRM or system
                configuration.
              </p>
            </div>
          </div>
          <div class="perm-card">
            <div class="perm-icon">💼</div>
            <div class="perm-body">
              <h3>Sales — Leads & Quotations</h3>
              <p>
                Quotations, leads and customers. No financial reports or
                accounting data.
              </p>
            </div>
          </div>
          <div class="perm-card">
            <div class="perm-icon">🎧</div>
            <div class="perm-body">
              <h3>Support — View Only</h3>
              <p>
                Customer queries and order status only. No financial or system
                access.
              </p>
            </div>
          </div>
          <div class="perm-card">
            <div class="perm-icon">🔐</div>
            <div class="perm-body">
              <h3>OTP & Full Audit Trail</h3>
              <p>
                OTP verification for sensitive actions. Every Aska action logged
                with full audit trail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FINAL CTA -->
    <section class="cta-final" id="cta">
      <div class="hero-badge">Ready when you are</div>
      <h2>Put customer work on <em>autopilot</em>.</h2>
      <p>
        Join 500+ businesses running smarter with Aska. Set up in minutes. No
        technical skills needed.
      </p>
      <div class="cta-btns">
        <a href="https://fynac.com" class="btn-primary" target="_blank"
          ><i class="fa-solid fa-arrow-right"></i> Start for free</a
        >
        <a href="#examples" class="btn-secondary"
          >See examples <i class="fa-solid fa-arrow-up"></i
        ></a>
      </div>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="f-inner">
        <div class="f-top">
          <div>
            <img
              class="logo-img-sm"
              src="https://demo.fynac.com/files/logo%206%20%20(2).png"
              alt="Aska"
            />
            <p class="f-about">
              AI-powered business assistant. Works across WhatsApp, Email,
              Telegram, SMS and Voice calls — 24/7.
            </p>
            <div class="f-social">
              <a href="#"><i class="fa-brands fa-whatsapp"></i></a>
              <a href="#"><i class="fa-brands fa-telegram"></i></a>
              <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="https://fynac.com" target="_blank"
                ><i class="fa-solid fa-globe"></i
              ></a>
            </div>
          </div>
          <div class="f-col">
            <h4>Product</h4>
            <ul>
              <li><a href="#channels">Channels</a></li>
              <li><a href="#roles">AI Roles</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#industries">Industries</a></li>
            </ul>
          </div>
          <div class="f-col">
            <h4>Company</h4>
            <ul>
              <li><a href="https://fynac.com" target="_blank">fynac.com</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="f-col">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Security</a></li>
            </ul>
          </div>
        </div>
        <div class="f-bottom">
          <p>© 2026 Aska by fynac.com. All rights reserved.</p>
          <div class="f-links">
            <a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a>
          </div>
        </div>
      </div>
    </footer>`;
