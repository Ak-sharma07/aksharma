const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const heroVideo = document.querySelector('video');

if (heroVideo) {
  heroVideo.volume = 0.7;
  heroVideo.addEventListener('click', () => {
    if (heroVideo.muted) {
      heroVideo.muted = false;
      heroVideo.volume = 0.7;
    }
  });
}

const serviceCards = Array.from(document.querySelectorAll('.service-card'));
const detailTitle = document.getElementById('detail-title');
const detailSummary = document.getElementById('detail-summary');
const detailProject = document.getElementById('detail-project');
const detailDeliverables = document.getElementById('detail-deliverables');
const detailOutcomes = document.getElementById('detail-outcomes');
const detailFit = document.getElementById('detail-fit');

const serviceContent = {
  automation: {
    title: 'Agentic AI & Business Automation',
    summary: 'An automation layer that turns repetitive work into reliable systems for support, lead handling, document processing, and internal operations.',
    project: 'A client-facing workflow where inbound leads are captured, qualified, routed, and followed up automatically across WhatsApp, email, and CRM tools without manual chasing.',
    deliverables: ['AI workflow audit', 'Automation design', 'Agent deployment', 'Monitoring dashboard', 'Team training'],
    outcomes: ['Less manual work each week', 'Faster customer response', 'More consistent follow-up', 'Higher team productivity'],
    fit: 'Best for teams that want to reduce repetitive tasks, improve response speed, and scale operations without increasing overhead.'
  },
  assistants: {
    title: 'AI Virtual Assistants & Chatbots',
    summary: 'Customer and employee-facing assistants designed to answer questions, guide users, and reduce dependency on constant manual support.',
    project: 'A website and WhatsApp assistant that answers FAQs, checks order status, books appointments, and smoothly hands off to a person when needed.',
    deliverables: ['Assistant conversation design', 'Knowledge base setup', 'Channel integration', 'Fallback handoff flow', 'Usage analytics'],
    outcomes: ['24/7 support availability', 'Faster resolution time', 'Improved customer experience', 'Reduced support load'],
    fit: 'Ideal for service businesses, e-commerce brands, clinics, real-estate firms, and teams that need better support coverage.'
  },
  analytics: {
    title: 'Data Engineering & Analytics Dashboards',
    summary: 'Clean, dependable data foundations and dashboards that keep decisions grounded in real-time business information.',
    project: 'A real-time sales and operations dashboard that pulls data from multiple systems and presents it in a simple executive view with live KPIs.',
    deliverables: ['Data pipeline setup', 'Data cleaning and transformation', 'Dashboard design', 'Reporting automation', 'Performance monitoring'],
    outcomes: ['Fewer manual reports', 'Faster visibility', 'Better operational decisions', 'Clearer performance tracking'],
    fit: 'Great for businesses collecting data across tools and wanting a trustworthy reporting layer for everyday decisions.'
  },
  bi: {
    title: 'Business Intelligence Solutions',
    summary: 'Insight-focused systems that turn historical and live data into strategic direction for teams and leadership.',
    project: 'A forecasting and revenue planning model that helps leadership review trends, compare performance, and plan for the next quarter with more confidence.',
    deliverables: ['Data modeling', 'Forecasting logic', 'Executive dashboard', 'Scenario planning', 'Insight reporting'],
    outcomes: ['Better forecasts', 'Faster planning cycles', 'Clearer strategic decisions', 'Improved revenue visibility'],
    fit: 'Perfect for companies that want more clarity on sales, growth, performance, and future planning.'
  },
  websites: {
    title: 'AI-Powered Websites & Web Applications',
    summary: 'Modern websites and apps that go beyond static presentation by adding smart conversations, recommendations, and automation.',
    project: 'A lead-generation website for a service company featuring a smart booking flow, AI assistant, and dynamic content that guides visitors toward action.',
    deliverables: ['UX strategy', 'Website or app build', 'AI integration', 'Lead capture flow', 'Conversion optimization'],
    outcomes: ['Higher engagement', 'More qualified leads', 'Better conversion journey', 'More efficient client acquisition'],
    fit: 'Ideal for brands that want digital experiences to do more than display information.'
  },
  consulting: {
    title: 'AI Consulting & Strategy',
    summary: 'A structured, practical approach to AI adoption so companies invest in the right systems and avoid wasted effort.',
    project: 'An AI readiness assessment for a business looking to identify the best first-use cases, the right tools, and a phased roadmap for rollout.',
    deliverables: ['AI opportunity mapping', 'Technology recommendations', 'Implementation roadmap', 'Risk review', 'Adoption plan'],
    outcomes: ['Clear next steps', 'Fewer costly missteps', 'Faster transformation', 'Lower adoption risk'],
    fit: 'Best for leadership teams and founders preparing to adopt AI with confidence and discipline.'
  },
  training: {
    title: 'Corporate AI Training & Workshops',
    summary: 'Hands-on corporate learning that helps teams use AI confidently in daily work rather than treating it as a buzzword.',
    project: 'A multi-session workshop for a non-technical team focused on practical prompt use, AI productivity, and real business use cases.',
    deliverables: ['Workshop design', 'Training materials', 'Live demos', 'Hands-on exercises', 'Post-training support'],
    outcomes: ['Higher adoption', 'Better team confidence', 'Faster workflow improvement', 'More productive daily work'],
    fit: 'Excellent for companies that want their staff to understand and use AI effectively across departments.'
  }
};

function updateServicePreview(serviceKey) {
  const content = serviceContent[serviceKey] || serviceContent.automation;
  if (detailTitle) detailTitle.textContent = content.title;
  if (detailSummary) detailSummary.textContent = content.summary;
  if (detailProject) detailProject.textContent = content.project;
  if (detailDeliverables) {
    detailDeliverables.innerHTML = content.deliverables.map((item) => `<li>${item}</li>`).join('');
  }
  if (detailOutcomes) {
    detailOutcomes.innerHTML = content.outcomes.map((item) => `<li>${item}</li>`).join('');
  }
  if (detailFit) detailFit.textContent = content.fit;

  serviceCards.forEach((card) => {
    card.classList.toggle('is-active', card.dataset.service === serviceKey);
  });
}

serviceCards.forEach((card) => {
  card.addEventListener('click', () => updateServicePreview(card.dataset.service));
});

updateServicePreview('automation');

if (form && formNote) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    formNote.textContent = 'Thanks — your message is ready to send. We will be in touch shortly.';
    form.reset();
  });
}

const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}
