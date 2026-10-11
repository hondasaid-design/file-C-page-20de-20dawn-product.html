/**
 * YOUCAN — HIGH-CONVERTING E-COMMERCE LANDING PAGE
 * Production-ready Vanilla JavaScript Interactions
 */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. Toast Notification Helper
  // ------------------------------------------------------------------------
  const actionToast = document.getElementById('action-toast');
  const toastMsg = document.getElementById('toast-msg');
  let toastTimer = null;

  function showToast(message, duration = 3200) {
    if (!actionToast || !toastMsg) return;
    toastMsg.textContent = message;
    actionToast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      actionToast.classList.remove('show');
    }, duration);
  }

  // ------------------------------------------------------------------------
  // 2. Sticky Navbar Blur & Mobile Drawer
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer on navigation link click
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ------------------------------------------------------------------------
  // 3. Modal & Onboarding Flow
  // ------------------------------------------------------------------------
  const modal = document.getElementById('start-modal');
  const modalClose = document.getElementById('modal-close-btn');
  const modalStep1 = document.getElementById('modal-step-1');
  const modalStep2 = document.getElementById('modal-step-2');
  const modalForm = document.getElementById('store-modal-form');
  const modalInputName = document.getElementById('modal-input-name');
  const modalReadyText = document.getElementById('modal-ready-text');
  const modalFinalBtn = document.getElementById('modal-final-btn');

  // Trigger buttons that open the modal
  const openModalBtns = [
    document.getElementById('nav-cta-btn'),
    document.getElementById('mobile-cta-btn'),
    document.getElementById('hero-primary-cta'),
    document.getElementById('showcase-explore-btn'),
    ...document.querySelectorAll('.plan-cta-btn')
  ].filter(Boolean);

  function openStartModal(initialStoreName = '') {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modalStep1.style.display = 'block';
    modalStep2.style.display = 'none';

    if (initialStoreName && modalInputName) {
      modalInputName.value = initialStoreName;
    }
    if (modalInputName) {
      setTimeout(() => modalInputName.focus(), 150);
    }
  }

  function closeStartModal() {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => openStartModal());
  });

  if (modalClose) {
    modalClose.addEventListener('click', closeStartModal);
  }

  // Close when clicking outside card
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeStartModal();
    });
  }

  // Handle ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('open')) {
      closeStartModal();
    }
  });

  // Modal Form Submission -> Step 2
  if (modalForm) {
    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const rawName = modalInputName ? modalInputName.value.trim() : 'mystore';
      const cleanSlug = rawName.toLowerCase().replace(/[^a-z0-9]/g, '') || 'newstore';
      
      modalStep1.style.display = 'none';
      modalStep2.style.display = 'block';
      if (modalReadyText) {
        modalReadyText.innerHTML = `Your store <strong>${cleanSlug}.youcan.shop</strong> is ready to launch.`;
      }
      showToast(`🎉 Store initialized: ${cleanSlug}.youcan.shop`);
    });
  }

  if (modalFinalBtn) {
    modalFinalBtn.addEventListener('click', () => {
      closeStartModal();
      showToast('🚀 Redirecting to your YouCan Merchant Dashboard...');
    });
  }

  // Quick Store Form (Final CTA)
  const quickForm = document.getElementById('quick-store-form');
  const quickInput = document.getElementById('quick-store-name');
  if (quickForm && quickInput) {
    quickForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = quickInput.value.trim();
      if (name) {
        openStartModal(name);
      }
    });
  }

  // Log in button simulations
  const loginBtns = [
    document.getElementById('nav-login-btn'),
    document.getElementById('mobile-login-btn')
  ].filter(Boolean);

  loginBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Redirecting to secure login...');
    });
  });

  // ------------------------------------------------------------------------
  // 4. Hero Chart Timeframe Switcher
  // ------------------------------------------------------------------------
  const chartBox = document.getElementById('hero-chart-box');
  const rangePills = chartBox ? chartBox.parentElement.querySelectorAll('.range-pill') : [];
  const chartArea = chartBox ? chartBox.querySelector('.chart-area') : null;
  const chartLine = chartBox ? chartBox.querySelector('.chart-line') : null;
  const chartActiveDot = chartBox ? chartBox.querySelector('.chart-active-dot') : null;
  const chartTooltip = chartBox ? chartBox.querySelector('.chart-tooltip-bubble') : null;
  const heroStatRev = document.getElementById('hero-stat-rev');

  const chartDataSets = {
    '30d': {
      area: 'M 0,140 Q 60,130 110,95 T 220,105 T 320,60 T 420,70 T 510,35 T 600,20 L 600,170 L 0,170 Z',
      line: 'M 0,140 Q 60,130 110,95 T 220,105 T 320,60 T 420,70 T 510,35 T 600,20',
      dotX: '510',
      dotY: '35',
      ttAmt: '$1,840.50',
      ttDate: 'Today, 2:40 PM',
      revDisplay: '$24,680',
      left: '85%',
      top: '12%'
    },
    '7d': {
      area: 'M 0,120 Q 90,80 180,90 T 360,40 T 480,50 T 600,15 L 600,170 L 0,170 Z',
      line: 'M 0,120 Q 90,80 180,90 T 360,40 T 480,50 T 600,15',
      dotX: '480',
      dotY: '50',
      ttAmt: '$920.00',
      ttDate: 'Yesterday, 6:15 PM',
      revDisplay: '$7,420',
      left: '80%',
      top: '20%'
    },
    '24h': {
      area: 'M 0,150 Q 150,110 300,70 T 450,45 T 600,30 L 600,170 L 0,170 Z',
      line: 'M 0,150 Q 150,110 300,70 T 450,45 T 600,30',
      dotX: '450',
      dotY: '45',
      ttAmt: '$345.00',
      ttDate: 'Past 4 hours',
      revDisplay: '$1,840',
      left: '75%',
      top: '18%'
    }
  };

  rangePills.forEach(pill => {
    pill.addEventListener('click', () => {
      rangePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      const range = pill.getAttribute('data-range');
      const data = chartDataSets[range];
      if (data && chartArea && chartLine) {
        chartArea.setAttribute('d', data.area);
        chartLine.setAttribute('d', data.line);
        if (chartActiveDot) {
          chartActiveDot.setAttribute('cx', data.dotX);
          chartActiveDot.setAttribute('cy', data.dotY);
        }
        if (chartTooltip) {
          chartTooltip.querySelector('.tt-amt').textContent = data.ttAmt;
          chartTooltip.querySelector('.tt-date').textContent = data.ttDate;
          chartTooltip.style.left = data.left;
          chartTooltip.style.top = data.top;
        }
        if (heroStatRev) {
          heroStatRev.textContent = data.revDisplay;
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 5. Interactive Ecosystem Flow (Store -> Products -> Orders -> ...)
  // ------------------------------------------------------------------------
  const ecoNodes = document.querySelectorAll('.eco-node');
  const ecoBadge = document.getElementById('eco-preview-badge');
  const ecoTitle = document.getElementById('eco-preview-title');
  const ecoDesc = document.getElementById('eco-preview-desc');
  const ecoBullets = document.getElementById('eco-preview-bullets');
  const ecoGraphic = document.getElementById('eco-preview-graphic');

  const ecoData = {
    'store': {
      badge: 'Stage 01: Store Creation',
      title: 'Ultra-Fast Responsive Storefronts',
      desc: 'Design bespoke, conversion-optimized shopping experiences in minutes. Zero coding required, instant SSL, global CDN edge caching, and mobile perfection by default.',
      bullets: ['✓ 60FPS mobile navigation', '✓ Sub-second checkout speeds', '✓ Custom domains with instant SSL'],
      mockText: 'Shop Autumn Drop'
    },
    'products': {
      badge: 'Stage 02: Catalog & Inventory',
      title: 'Effortless Product & Variant Architecture',
      desc: 'Organize high-resolution galleries, unlimited variants (sizes, materials, bundles), automated stock replenishment alerts, and bulk CSV importers.',
      bullets: ['✓ 1-click variant matrix', '✓ Automated back-in-stock alerts', '✓ Multi-warehouse allocation'],
      mockText: 'Catalog: 142 Active SKUs'
    },
    'orders': {
      badge: 'Stage 03: Unified Order Pipeline',
      title: '1-Click Batch Processing & Shipping',
      desc: 'Seamlessly transition orders from payment capture to courier dispatch. Print compliant shipping slips and automatically ping buyers with branded tracking links.',
      bullets: ['✓ Automated tracking emails & SMS', '✓ Split shipment handling', '✓ 1-click batch label printing'],
      mockText: '1,284 Orders Dispatched'
    },
    'customers': {
      badge: 'Stage 04: Customer Intelligence',
      title: 'Segment VIPs & Recover Abandoned Carts',
      desc: 'Turn one-time shoppers into lifetime advocates. Automated email & SMS recovery flows trigger precisely when a customer drops off, recovering up to 34% of revenue.',
      bullets: ['✓ Automated cart abandonment sequences', '✓ Customer lifetime value (LTV) cohorts', '✓ Native 1-click re-orders'],
      mockText: '8,492 Shopper Profiles'
    },
    'analytics': {
      badge: 'Stage 05: Real-Time Intelligence',
      title: 'Transparent Margins & Attribution',
      desc: 'Know your exact net profit down to the cent after ad costs, gateway fees, and shipping. Monitor conversion funnels in real-time without external spreadsheets.',
      bullets: ['✓ Live revenue velocity stream', '✓ Exact profit margin calculators', '✓ Full marketing attribution (UTMs)'],
      mockText: 'Live Margin: 48.2%'
    },
    'growth': {
      badge: 'Stage 06: Exponential Scaling',
      title: 'Sell Globally Without Infrastructure Caps',
      desc: 'Expand into multi-currency markets, cross-border localized payments, and omnichannel sales streams. Built to handle million-order flash sales without a flinch.',
      bullets: ['✓ Auto-detecting local currencies', '✓ Flash-sale DDoS & surge resilience', '✓ 99.99% enterprise uptime SLA'],
      mockText: 'Global Scale Active'
    }
  };

  ecoNodes.forEach(node => {
    node.addEventListener('click', () => {
      ecoNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const key = node.getAttribute('data-node');
      const d = ecoData[key];
      if (d) {
        if (ecoBadge) ecoBadge.textContent = d.badge;
        if (ecoTitle) ecoTitle.textContent = d.title;
        if (ecoDesc) ecoDesc.textContent = d.desc;
        if (ecoBullets) {
          ecoBullets.innerHTML = d.bullets.map(b => `<span>${b}</span>`).join('');
        }
        if (ecoGraphic) {
          const btnPill = ecoGraphic.querySelector('.mock-btn-pill');
          if (btnPill) btnPill.textContent = d.mockText;
        }
      }
    });
  });

  // ------------------------------------------------------------------------
  // 6. "How It Works" 3-Step Interactive Timeline
  // ------------------------------------------------------------------------
  const stepCards = document.querySelectorAll('.step-card');
  const stepSlides = {
    '1': document.getElementById('slide-step-1'),
    '2': document.getElementById('slide-step-2'),
    '3': document.getElementById('slide-step-3')
  };

  stepCards.forEach(card => {
    card.addEventListener('click', () => {
      stepCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const step = card.getAttribute('data-step');
      Object.keys(stepSlides).forEach(k => {
        if (stepSlides[k]) {
          stepSlides[k].classList.remove('active');
        }
      });
      if (stepSlides[step]) {
        stepSlides[step].classList.add('active');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 7. Dashboard Showcase Interactions (+ Simulate Sale)
  // ------------------------------------------------------------------------
  const simulateBtn = document.getElementById('simulate-order-btn');
  const liveTransFeed = document.getElementById('live-trans-feed');
  const dashValRev = document.getElementById('dash-val-rev');
  const dashValOrders = document.getElementById('dash-val-orders');
  let currentRev = 24680.00;
  let currentOrders = 1284;

  const sampleBuyers = [
    { name: 'Lucas Meyer', item: 'Aether Headset', amount: 249.00, method: 'Apple Pay' },
    { name: 'Amira Benali', item: 'Aura Ceramic Vase', amount: 120.00, method: 'Credit Card' },
    { name: 'Mateo Rossi', item: 'Valor Studio Runner', amount: 185.00, method: 'Google Pay' },
    { name: 'Camille Dupont', item: 'Lumina Care Set', amount: 142.50, method: '1-Click Checkout' }
  ];

  if (simulateBtn && liveTransFeed) {
    simulateBtn.addEventListener('click', () => {
      const randomBuyer = sampleBuyers[Math.floor(Math.random() * sampleBuyers.length)];
      currentRev += randomBuyer.amount;
      currentOrders += 1;

      if (dashValRev) {
        dashValRev.textContent = `$${currentRev.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }
      if (dashValOrders) {
        dashValOrders.textContent = currentOrders.toLocaleString('en-US');
      }

      // Prepend new transaction row
      const newRow = document.createElement('div');
      newRow.className = 'd-trans-row';
      newRow.style.animation = 'fadeIn 0.3s ease';
      newRow.innerHTML = `
        <div class="trans-indicator in">✓</div>
        <div class="trans-info">
          <span class="trans-buyer">${randomBuyer.name}</span>
          <span class="trans-method">${randomBuyer.method} · Just now</span>
        </div>
        <span class="trans-amount">+$${randomBuyer.amount.toFixed(2)}</span>
      `;

      liveTransFeed.insertBefore(newRow, liveTransFeed.firstChild);

      // Keep only top 4
      if (liveTransFeed.children.length > 4) {
        liveTransFeed.removeChild(liveTransFeed.lastChild);
      }

      showToast(`💰 Simulated sale: +$${randomBuyer.amount.toFixed(2)} from ${randomBuyer.name}!`);
    });
  }

  // Showcase Tab Switcher
  const showcaseTabs = document.querySelectorAll('.d-tab');
  showcaseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      showcaseTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const tabName = tab.getAttribute('data-tab');
      showToast(`Loaded ${tab.textContent} workspace view`);
    });
  });

  // Time filters in showcase chart
  const filterItems = document.querySelectorAll('.filter-item');
  filterItems.forEach(item => {
    item.addEventListener('click', () => {
      filterItems.forEach(fi => fi.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // ------------------------------------------------------------------------
  // 8. Mobile Phone View Switcher
  // ------------------------------------------------------------------------
  const phoneTabs = document.querySelectorAll('.p-tab');
  const screenViews = {
    'sales': document.getElementById('view-sales'),
    'analytics': document.getElementById('view-analytics'),
    'notifs': document.getElementById('view-notifs')
  };

  phoneTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      phoneTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const screen = tab.getAttribute('data-screen');

      Object.keys(screenViews).forEach(k => {
        if (screenViews[k]) {
          screenViews[k].classList.remove('active');
        }
      });
      if (screenViews[screen]) {
        screenViews[screen].classList.add('active');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 9. Testimonials Category Filter
  // ------------------------------------------------------------------------
  const testiFilterBtns = document.querySelectorAll('.testimonial-filter-row .filter-btn');
  const testiCards = document.querySelectorAll('.testimonial-card');

  testiFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      testiFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      testiCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // ------------------------------------------------------------------------
  // 10. Interactive Profit & Fee Calculator
  // ------------------------------------------------------------------------
  const salesSlider = document.getElementById('sales-slider');
  const calcSalesVal = document.getElementById('calc-sales-val');
  const legacyFee = document.getElementById('legacy-fee');
  const youcanSavings = document.getElementById('youcan-savings');

  if (salesSlider) {
    salesSlider.addEventListener('input', () => {
      const sales = parseFloat(salesSlider.value);
      if (calcSalesVal) {
        calcSalesVal.textContent = `$${sales.toLocaleString()} / mo`;
      }

      // Legacy math: 2.9% transaction fee + $79 plan + ~$40 app fees
      const legacyTotal = (sales * 0.029) + 79 + 40;
      // YouCan: $79 Growth plan flat (0% transaction surcharge)
      const youcanTotal = 79;
      const saved = Math.max(0, legacyTotal - youcanTotal);

      if (legacyFee) {
        legacyFee.textContent = `$${Math.round(legacyTotal).toLocaleString()} / mo`;
      }
      if (youcanSavings) {
        youcanSavings.textContent = `Save $${Math.round(saved).toLocaleString()}+ every month`;
      }
    });
  }

  // ------------------------------------------------------------------------
  // 11. Pricing Billing Interval Switcher (Monthly vs Annual 20% discount)
  // ------------------------------------------------------------------------
  const billingToggle = document.getElementById('billing-toggle');
  const starterPrice = document.getElementById('starter-price');
  const growthPrice = document.getElementById('growth-price');
  const bizPrice = document.getElementById('biz-price');
  const starterNote = document.getElementById('starter-bill-note');
  const growthNote = document.getElementById('growth-bill-note');
  const bizNote = document.getElementById('biz-bill-note');
  let isAnnual = false;

  if (billingToggle) {
    billingToggle.addEventListener('click', () => {
      isAnnual = !isAnnual;
      billingToggle.classList.toggle('active', isAnnual);
      billingToggle.setAttribute('aria-checked', isAnnual);

      if (isAnnual) {
        if (starterPrice) starterPrice.textContent = '19';
        if (growthPrice) growthPrice.textContent = '63';
        if (bizPrice) bizPrice.textContent = '159';
        const note = 'Billed annually (Save 20%)';
        if (starterNote) starterNote.textContent = note;
        if (growthNote) growthNote.textContent = note;
        if (bizNote) bizNote.textContent = note;
      } else {
        if (starterPrice) starterPrice.textContent = '24';
        if (growthPrice) growthPrice.textContent = '79';
        if (bizPrice) bizPrice.textContent = '199';
        const note = 'Billed monthly';
        if (starterNote) starterNote.textContent = note;
        if (growthNote) growthNote.textContent = note;
        if (bizNote) bizNote.textContent = note;
      }
    });
  }

  // ------------------------------------------------------------------------
  // 12. FAQ Accordion
  // ------------------------------------------------------------------------
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Close others for clean single-expanded view
        faqItems.forEach(i => {
          i.classList.remove('active');
          const btn = i.querySelector('.faq-trigger');
          if (btn) btn.setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
          item.classList.add('active');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // ------------------------------------------------------------------------
  // 13. Animated Statistics Counter on Scroll
  // ------------------------------------------------------------------------
  const statNumbers = document.querySelectorAll('.stat-headline');
  let statsCounted = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsCounted) {
        statsCounted = true;
        animateStats();
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById('statistics');
  if (statsSection) {
    statsObserver.observe(statsSection);
  }

  function animateStats() {
    statNumbers.forEach(elem => {
      const target = parseInt(elem.getAttribute('data-count'), 10);
      const suffix = elem.getAttribute('data-suffix') || '';
      if (!target || isNaN(target)) return;

      const duration = 1600;
      const startTime = performance.now();

      function updateNumber(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
        const current = Math.floor(target * ease);

        if (target >= 1000) {
          elem.textContent = Math.floor(current / 1000) + suffix;
        } else {
          elem.textContent = current + suffix;
        }

        if (progress < 1) {
          requestAnimationFrame(updateNumber);
        } else {
          if (target >= 1000) {
            elem.textContent = (target / 1000) + suffix;
          } else {
            elem.textContent = target + suffix;
          }
        }
      }

      requestAnimationFrame(updateNumber);
    });
  }

  // ------------------------------------------------------------------------
  // 14. Subtle Mouse Movement Effect for Mockup Depth
  // ------------------------------------------------------------------------
  const heroMockup = document.getElementById('hero-mockup');
  if (heroMockup && window.innerWidth > 960) {
    heroMockup.addEventListener('mousemove', (e) => {
      const rect = heroMockup.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotateX = -(y / rect.height) * 6;
      const rotateY = (x / rect.width) * 6;
      heroMockup.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    heroMockup.addEventListener('mouseleave', () => {
      heroMockup.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    });
  }

});
