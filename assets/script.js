// Portfolio Master JavaScript Engine
let currentLang = localStorage.getItem('portfolio_lang') || 'th';
let currentTheme = localStorage.getItem('portfolio_theme') || 'light';

// ==========================================
// 1. Theme Engine & Avatar Loader
// ==========================================
function initTheme() {
  if (currentTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  updateThemeIcon();
}

function toggleTheme() {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  localStorage.setItem('portfolio_theme', currentTheme);
  initTheme();
  // Redraw canvas particles with new theme colors
  if (window.updateCanvasColors) window.updateCanvasColors();
}

function updateThemeIcon() {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (currentTheme === 'dark') {
    icon.className = 'fa-solid fa-moon text-sky-400';
  } else {
    icon.className = 'fa-regular fa-sun text-amber-500';
  }
}

// ==========================================
// 2. Multilingual Engine (TH / EN / KO)
// ==========================================
function setLanguage(lang) {
  if (!portfolioData[lang]) return;
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  renderLanguageUI();
}

function renderLanguageUI() {
  const d = portfolioData[currentLang];
  if (!d) return;

  // Update Nav links
  const brandLogo = document.getElementById('brand-logo');
  const navAbout = document.getElementById('nav-about');
  const navExp = document.getElementById('nav-exp');
  const navLabs = document.getElementById('nav-labs');
  const navContact = document.getElementById('nav-contact');

  if (brandLogo && d.nav.brand) brandLogo.textContent = d.nav.brand;
  if (navAbout) navAbout.textContent = d.nav.about;
  if (navExp) navExp.textContent = d.nav.exp;
  if (navLabs) navLabs.textContent = d.nav.labs;
  if (navContact) navContact.textContent = d.nav.contact;

  // Update Language switcher buttons active state
  ['th', 'en', 'ko'].forEach(l => {
    const btn = document.getElementById(`lang-btn-${l}`);
    if (btn) {
      if (l === currentLang) {
        btn.className = 'px-2.5 py-1 rounded-full text-sky-600 dark:text-sky-400 font-bold bg-white dark:bg-slate-700 shadow-xs transition-all';
      } else {
        btn.className = 'px-2.5 py-1 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-all';
      }
    }
  });

  // Hero Section
  const heroTag = document.getElementById('hero-tag');
  if (heroTag) heroTag.textContent = d.hero.tag;
  const heroStatus = document.getElementById('hero-status');
  if (heroStatus) heroStatus.innerHTML = `<span class="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>${d.hero.status}`;
  const heroHeadline = document.getElementById('hero-headline');
  if (heroHeadline) heroHeadline.innerHTML = d.hero.headline;
  const heroName = document.getElementById('hero-name');
  if (heroName) heroName.textContent = d.hero.name;
  const heroRole = document.getElementById('hero-role');
  if (heroRole) heroRole.textContent = d.hero.role;
  const heroP1 = document.getElementById('hero-p1');
  if (heroP1) heroP1.textContent = d.hero.p1;
  const heroP2 = document.getElementById('hero-p2');
  if (heroP2) heroP2.textContent = d.hero.p2;
  const heroP3 = document.getElementById('hero-p3');
  if (heroP3) heroP3.textContent = d.hero.p3;

  const btnResume = document.getElementById('btn-download-resume');
  if (btnResume) btnResume.innerHTML = `<i class="fa-solid fa-file-arrow-down mr-2"></i> ${d.hero.btnResume}`;
  const btnExp = document.getElementById('btn-hero-exp');
  if (btnExp) btnExp.innerHTML = `<i class="fa-solid fa-graduation-cap text-sky-500 mr-2"></i> ${d.hero.btnExp}`;
  const btnLabs = document.getElementById('btn-explore-labs');
  if (btnLabs) btnLabs.innerHTML = `<i class="fa-solid fa-layer-group text-teal-500 mr-2"></i> ${d.hero.btnLabs}`;
  const btnContact = document.getElementById('btn-hero-contact');
  if (btnContact) btnContact.innerHTML = `<i class="fa-regular fa-paper-plane text-indigo-500 mr-2"></i> ${d.hero.btnContact}`;
  const heroExploreLink = document.getElementById('hero-explore-certs-link');
  if (heroExploreLink) heroExploreLink.textContent = d.hero.exploreLink;

  // Education Section
  const eduTitle = document.getElementById('edu-title');
  if (eduTitle) eduTitle.textContent = d.education.title;
  const eduSubtitle = document.getElementById('edu-subtitle');
  if (eduSubtitle) eduSubtitle.textContent = d.education.subtitle;
  renderEducation();

  // Labs Section
  const labsTitle = document.getElementById('labs-title');
  if (labsTitle) labsTitle.textContent = d.labs.title;
  const labsSubtitle = document.getElementById('labs-subtitle');
  if (labsSubtitle) labsSubtitle.textContent = d.labs.subtitle;
  renderLabFilters();
  renderLabs();

  // Education Section
  document.getElementById('edu-title').textContent = d.education.title;
  document.getElementById('edu-subtitle').textContent = d.education.subtitle;
  renderEducation();

  // Contact Section
  document.getElementById('contact-title').textContent = d.contact.title;
  document.getElementById('contact-subtitle').textContent = d.contact.subtitle;
  document.getElementById('contact-info-title').textContent = d.contact.infoTitle;
  document.getElementById('input-name').placeholder = d.contact.formName;
  document.getElementById('input-email').placeholder = d.contact.formEmail;
  document.getElementById('input-subject').placeholder = d.contact.formSubject;
  document.getElementById('input-msg').placeholder = d.contact.formMsg;
  document.getElementById('btn-send-message').innerHTML = `<i class="fa-regular fa-paper-plane mr-2"></i> ${d.contact.btnSend}`;

  // Footer
  document.getElementById('footer-text').textContent = d.footer;
}

// ==========================================
// 3. Dynamic Rendering Functions
// ==========================================
function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;
  const categories = portfolioData[currentLang].skills.categories;

  container.innerHTML = categories.map(cat => `
    <div class="glass-card p-6 flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-400 text-lg">
            <i class="fa-solid ${cat.icon}"></i>
          </div>
          <h3 class="font-bold text-base text-slate-800 dark:text-slate-100">${cat.name}</h3>
        </div>
        <div class="flex flex-wrap gap-2">
          ${cat.tags.map(t => `<span class="px-2.5 py-1 text-xs rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700 font-medium">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certs-grid');
  if (!container) return;
  const certs = portfolioData[currentLang].certs;

  container.innerHTML = certs.items.map(cert => `
    <div class="glass-card p-6 border-l-4 ${cert.color} flex flex-col justify-between relative group">
      <div>
        <div class="flex items-start justify-between gap-3 mb-2">
          <span class="px-2.5 py-0.5 text-xs rounded-full font-semibold bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 border border-sky-200 dark:border-sky-800">${cert.badge}</span>
          <span class="text-xs text-slate-400">${cert.date}</span>
        </div>
        <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-1 group-hover:text-sky-600 transition-colors">${cert.title}</h3>
        <p class="text-xs font-medium text-slate-500 dark:text-slate-400 mb-3">${cert.issuer} • <span class="text-teal-600 dark:text-teal-400">${cert.level}</span></p>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${cert.desc}</p>
      </div>
      <div class="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <span class="text-xs font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
          <i class="fa-solid fa-circle-check"></i> Verified Status
        </span>
        <button onclick="openCertModal('${cert.id}')" class="text-xs font-semibold text-sky-600 hover:text-sky-700 dark:text-sky-400 flex items-center gap-1">
          ${certs.btnVerify} <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
        </button>
      </div>
    </div>
  `).join('');
}

let activeLabFilter = 'all';

function renderLabFilters() {
  const filterContainer = document.getElementById('lab-filters');
  if (!filterContainer) return;
  const labData = portfolioData[currentLang].labs;

  if (labData.hasProjects === false) {
    filterContainer.innerHTML = '';
    return;
  }

  const filters = labData.filters || {};
  filterContainer.innerHTML = Object.entries(filters).map(([key, label]) => `
    <button onclick="setLabFilter('${key}')" class="px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${activeLabFilter === key ? 'bg-sky-600 text-white shadow-md shadow-sky-500/25' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'}">
      ${label}
    </button>
  `).join('');
}

function setLabFilter(key) {
  activeLabFilter = key;
  renderLabFilters();
  renderLabs();
}

function renderLabs() {
  const container = document.getElementById('labs-grid');
  if (!container) return;
  const labData = portfolioData[currentLang].labs;

  // Handle No Projects / In-Progress State
  if (labData.hasProjects === false) {
    const empty = labData.emptyState;
    container.className = 'w-full';
    container.innerHTML = `
      <div class="bento-card p-6 md:p-8 relative overflow-hidden">
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-100 dark:border-slate-800/80">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-2xl bg-sky-50 dark:bg-sky-950/70 border border-sky-200 dark:border-sky-800 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl shrink-0 shadow-inner relative">
              <i class="fa-solid fa-compass-drafting"></i>
            </div>
            <div>
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 mb-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping"></span>
                ${empty.badge}
              </span>
              <h3 class="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                ${empty.title}
              </h3>
            </div>
          </div>
          <a href="#contact" class="btn-glow-secondary px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shrink-0">
            <i class="fa-regular fa-paper-plane text-sky-500"></i> ${empty.btnContact}
          </a>
        </div>

        <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
          ${empty.desc}
        </p>
      </div>
    `;
    return;
  }

  // Normal grid when hasProjects is true
  container.className = 'grid grid-cols-1 md:grid-cols-3 gap-6';
  const labs = labData.items || [];
  const filtered = activeLabFilter === 'all' ? labs : labs.filter(l => l.category === activeLabFilter);

  container.innerHTML = filtered.map(lab => `
    <div class="bento-card overflow-hidden flex flex-col group cursor-pointer" onclick="openLabModal('${lab.id}')">
      <div class="relative bg-slate-900 aspect-video overflow-hidden border-b border-slate-800">
        <img src="${lab.image}" alt="${lab.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
        <span class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-mono font-semibold bg-slate-950/80 backdrop-blur-md text-sky-400 border border-slate-700">
          ${lab.platform}
        </span>
      </div>
      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="font-bold text-base text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            ${lab.title}
          </h3>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
            ${lab.summary}
          </p>
        </div>
        <div class="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span class="font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1.5">
            <i class="fa-solid fa-circle-nodes"></i> View Topology & Code
          </span>
          <i class="fa-solid fa-arrow-right text-slate-400 group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    </div>
  `).join('');
}

function renderTerminalButtons() {
  const btnContainer = document.getElementById('terminal-buttons');
  if (!btnContainer) return;
  const buttons = portfolioData[currentLang].terminal.buttons;

  btnContainer.innerHTML = buttons.map(b => `
    <button onclick="runCliCommand('${b.cmd}')" class="px-3 py-1.5 text-xs font-mono rounded-lg bg-slate-800 hover:bg-slate-700 text-sky-300 border border-slate-700 transition-colors flex items-center gap-1.5 shadow-sm">
      <i class="fa-solid fa-terminal text-[10px] text-teal-400"></i> ${b.label}
    </button>
  `).join('');
}

function renderEducation() {
  const container = document.getElementById('edu-timeline');
  if (!container) return;
  const items = portfolioData[currentLang].education.items;

  container.innerHTML = items.map((item, index) => {
    const isFirst = index === 0;
    const badgeColor = isFirst 
      ? 'bg-sky-50 dark:bg-sky-950/80 text-sky-600 dark:text-sky-400 border-sky-300/80 dark:border-sky-800'
      : 'bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-300/80 dark:border-emerald-800';
    const iconClass = isFirst ? 'fa-graduation-cap text-sky-500' : 'fa-award text-emerald-500';
    const pulseDot = isFirst ? '<span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>' : '<i class="fa-solid fa-circle-check text-emerald-500 text-xs"></i>';

    return `
      <div class="bento-card p-6 md:p-7 relative">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border ${badgeColor}">
            ${pulseDot} ${item.year}
          </span>
          <span class="text-xs font-mono font-semibold text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
            <i class="fa-solid ${iconClass}"></i> ${isFirst ? 'Sripatum University' : 'Vocational Honors'}
          </span>
        </div>

        <h3 class="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white mb-1.5">
          ${item.degree}
        </h3>
        <p class="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
          <i class="fa-solid fa-building-columns text-xs"></i> ${item.school}
        </p>
        <p class="text-xs sm:text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
          ${item.details}
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800/80">
          ${item.highlights.map(h => `
            <div class="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
              <i class="fa-solid fa-check text-emerald-500 mt-0.5 text-xs shrink-0"></i>
              <span class="leading-snug">${h}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 4. Interactive CLI Simulator
// ==========================================
function runCliCommand(cmd) {
  const screen = document.getElementById('terminal-screen');
  if (!screen) return;

  const output = cliResponses[cmd] || `Router# % Unrecognized command: "${cmd}". Type "help" or click one of the preset buttons above.`;

  const entry = document.createElement('div');
  entry.className = 'mb-4';
  entry.innerHTML = `
    <div><span class="terminal-prompt">R1-HQ-CORE#</span> <span class="terminal-cmd">${cmd}</span></div>
    <div class="terminal-output">${escapeHtml(output)}</div>
  `;
  screen.appendChild(entry);
  screen.scrollTop = screen.scrollHeight;
}

function clearTerminal() {
  const screen = document.getElementById('terminal-screen');
  if (screen) {
    screen.innerHTML = `
      <div><span class="terminal-prompt">R1-HQ-CORE#</span> <span class="terminal-cmd">! Terminal reset. Cisco IOS-XE (v17.9.4a)</span></div>
      <div class="terminal-output text-slate-400 text-xs">Ready for command inputs. Click buttons above or enter commands.</div>
    `;
  }
}

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// ==========================================
// 5. Modals (Lab Details, Cert Details, Resume)
// ==========================================
function openLabModal(labId) {
  const lab = portfolioData[currentLang].labs.items.find(l => l.id === labId);
  if (!lab) return;

  const modalBody = document.getElementById('lab-modal-body');
  modalBody.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between gap-4 mb-4">
        <div>
          <span class="px-2.5 py-1 rounded text-xs font-mono font-semibold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800">${lab.platform}</span>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mt-2">${lab.title}</h2>
        </div>
        <button onclick="closeModal('lab-modal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-6 bg-slate-950">
        <img src="${lab.image}" alt="${lab.title}" class="w-full h-auto">
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
          <h4 class="font-bold text-xs uppercase tracking-wider text-rose-600 dark:text-rose-400 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-triangle-exclamation"></i> Problem Statement & Requirements
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${lab.details.problem}</p>
        </div>

        <div class="bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200/80 dark:border-slate-800">
          <h4 class="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2 flex items-center gap-1.5">
            <i class="fa-solid fa-shield-check"></i> Implemented Engineering Solution
          </h4>
          <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">${lab.details.solution}</p>
        </div>
      </div>

      <div class="mb-6">
        <h4 class="font-bold text-xs uppercase tracking-wider text-slate-400 mb-2">Technologies & Protocols</h4>
        <div class="flex flex-wrap gap-2">
          ${lab.details.technologies.map(t => `<span class="px-2.5 py-1 rounded bg-teal-50 dark:bg-teal-950/80 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-300 text-xs font-semibold">${t}</span>`).join('')}
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between mb-2">
          <h4 class="font-bold text-xs uppercase tracking-wider text-slate-400">Configuration / Script Excerpt</h4>
          <button onclick="copyToClipboard('${encodeURIComponent(lab.details.cliSample)}', true)" class="text-xs text-sky-600 hover:text-sky-700 font-medium flex items-center gap-1">
            <i class="fa-regular fa-copy"></i> Copy Code
          </button>
        </div>
        <pre class="bg-slate-950 text-slate-200 p-4 rounded-xl font-mono text-xs overflow-x-auto border border-slate-800"><code>${escapeHtml(lab.details.cliSample)}</code></pre>
      </div>
    </div>
  `;
  document.getElementById('lab-modal').classList.add('active');
}

function openCertModal(certId) {
  const cert = portfolioData[currentLang].certs.items.find(c => c.id === certId);
  if (!cert) return;

  const modalBody = document.getElementById('cert-modal-body');
  modalBody.innerHTML = `
    <div class="p-6 md:p-8">
      <div class="flex items-start justify-between gap-4 mb-6">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center text-2xl">
            <i class="fa-solid ${cert.icon}"></i>
          </div>
          <div>
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">${cert.title}</h2>
            <p class="text-xs text-slate-500">${cert.issuer} • ${cert.badge}</p>
          </div>
        </div>
        <button onclick="closeModal('cert-modal')" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="bg-slate-50 dark:bg-slate-900/60 p-5 rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
        <div class="grid grid-cols-2 gap-4 text-xs mb-4">
          <div>
            <span class="text-slate-400 block mb-0.5">Issuing Organization:</span>
            <span class="font-semibold text-slate-800 dark:text-slate-200">${cert.issuer}</span>
          </div>
          <div>
            <span class="text-slate-400 block mb-0.5">Issue Date / Status:</span>
            <span class="font-semibold text-teal-600 dark:text-teal-400">${cert.date}</span>
          </div>
          <div>
            <span class="text-slate-400 block mb-0.5">Credential ID:</span>
            <span class="font-mono font-semibold text-slate-800 dark:text-slate-200">CSCO-${Math.floor(10000000 + Math.random() * 90000000)}</span>
          </div>
          <div>
            <span class="text-slate-400 block mb-0.5">Verification:</span>
            <span class="font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Official Digital Badge</span>
          </div>
        </div>
        <p class="text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-3">${cert.desc}</p>
      </div>

      <div class="flex justify-end gap-3">
        <button onclick="closeModal('cert-modal')" class="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800">Close</button>
        <button onclick="showToast('Verified via Cisco Networking Academy / Fortinet Institute')" class="btn-primary-teal px-5 py-2 rounded-lg text-xs font-semibold">
          <i class="fa-solid fa-check-double mr-1.5"></i> Authenticate Credential
        </button>
      </div>
    </div>
  `;
  document.getElementById('cert-modal').classList.add('active');
}

function openResumeModal() {
  document.getElementById('resume-modal').classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// Close modal on Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
  }
});

// Background is kept clean without floating particles
function initNetworkCanvas() {
  // Disabled per user request
}

// ==========================================
// 7. Utilities & Clipboard
// ==========================================
function copyToClipboard(text, isEncoded = false) {
  const content = isEncoded ? decodeURIComponent(text) : text;
  navigator.clipboard.writeText(content).then(() => {
    showToast(portfolioData[currentLang].contact.copySuccess || 'Copied to clipboard!');
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Contact form submission handler
function handleContactSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('input-name').value;
  const email = document.getElementById('input-email').value;

  if (!name || !email) {
    showToast('Please fill in required fields.');
    return;
  }

  showToast(`Thank you, ${name}! Your message has been sent successfully.`);
  e.target.reset();
}

// ==========================================
// 8. Lifecycle Bootstrap
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderLanguageUI();
  initNetworkCanvas();

  // Scroll spy active pill
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    document.querySelectorAll('.nav-pill').forEach(pill => {
      pill.classList.remove('active');
      if (pill.getAttribute('href') === `#${current}`) {
        pill.classList.add('active');
      }
    });
  });
});
