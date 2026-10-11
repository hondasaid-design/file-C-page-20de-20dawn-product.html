/**
 * FITPRO STORE — 3D INTERACTIVE PUSH-UP BOARD LANDING PAGE
 * High-Converting Abdou Ecom Style (Moroccan COD Engine)
 * Features: Three.js 3D Push-Up Board, 14-Position Muscle Simulator, Bilingual RTL/LTR, Pack Selector, Real-time Scarcity
 */

document.addEventListener('DOMContentLoaded', () => {

  // ------------------------------------------------------------------------
  // 1. Language Dictionary (Arabic / French)
  // ------------------------------------------------------------------------
  const translations = {
    ar: {
      linkTitle: "رابط الشراء المباشر للمنتج:",
      linkHint: "ألصق رابط متجرك (YouCan, Shopify) هنا للتحويل التلقائي",
      saveLinkBtn: "حفظ الرابط",
      directLinkBtn: "🛒 شراء مباشر عبر رابط المنتج",
      videoTitle: "فيديو توضيحي: شاهد اللوحة وطريقة التمارين",
      videoCtaText: "اضغط هنا لفتح ومشاهدة الفيديو على YouTube ↗",
      videoSub: "اضغط على الرابط بالأسفل لمشاهدة فيديو الشرح مباشرة على YouTube",
      problemsKicker: "⚠️ هل تعاني من هذه المشاكل في تمارينك؟",
      problemsTitle: "المشاكل الخطيرة والصعبة التي تنهيها هذه اللوحة للأبد",
      problemsSub: "حلول ذكية وفعالة تخلصك من المعاناة اليومية وتمنحك أقصى استفادة رياضية بأمان تام وبدون ألم",
      p1Badge: "المشكلة 01",
      p1Title: "آلام وتمزق مفاصل المعصم والكوع",
      p1Pain: "التمرين المباشر على الأرض يضع 100% من وزن جسمك على المعصم بزاوية 90° حادة وغير طبيعية، مما يسبب التهابات حادة في الأوتار والمفاصل تمنعك من التمرين لأسابيع.",
      p1SolCheck: "✓ الحل الذكي من اللوحة:",
      p1Sol: "مقابض سيليكون عريضة ومستقيمة تحافظ على استقامة يدك ومعصمك 100%، وتمتص الضغط بالكامل لتتمرين بقوة وأمان وبدون أي ألم.",
      p2Badge: "المشكلة 02",
      p2Title: "التمرين العشوائي وبطء النتائج",
      p2Pain: "85% من الممارسين يدفعون عشوائياً على الأرض دون معرفة أي عضلة تتحرك، مما يؤدي إلى إجهاد الظهر وإهدار شهور من التعب بدون بناء عضلات واضحة.",
      p2SolCheck: "✓ الحل الذكي من اللوحة:",
      p2Sol: "نظام 14 فتحة مرمز بالألوان يعزل كل عضلة بدقة جراحية (الصدر، الأكتاف، الظهر، الترايسبس) لتحصل على عضلات بارزة ونتائج حقيقية في 30 يوماً.",
      p3Badge: "المشكلة 03",
      p3Title: "غلاء اشتراكات الجيم وضياع الوقت",
      p3Pain: "دفع 250 إلى 400 درهم شهرياً في اشتراكات القاعات الرياضية، والازدحام على الآلات، مع ضياع ساعة إلى ساعتين يومياً في المواصلات وزحمة السير.",
      p3SolCheck: "✓ الحل الذكي من اللوحة:",
      p3Sol: "صالة ألعاب رياضية متكاملة في بيتك تستثمر فيها مرة واحدة فقط، وتتمرن في 15 دقيقة فقط في أي وقت يناسب جدولك اليومي.",
      p4Badge: "المشكلة 04",
      p4Title: "الملل السريع وصعوبة الاستمرار",
      p4Pain: "التمارين التقليدية مكررة ورتيبة تجعلك تستسلم بعد أسبوع واحد، بالإضافة لصعوبة نقل الأوزان والمعدات الثقيلة خارج المنزل أو أثناء السفر.",
      p4SolCheck: "✓ الحل الذكي من اللوحة:",
      p4Sol: "تصميم قابل للطي 180° خفيف الوزن يوضع في أي حقيبة، مع 14 زاوية وتمرين متجدد تمنحك حماساً يومياً مستمراً أينما كنت (البيت، العمل، السفر).",

      topUrgency: "عرض خاص بالمغرب ينتهي خلال:",
      freeShippingBadge: "🚚 التوصيل بالمجان + الدفع عند الاستلام",
      langBtn: "Français",
      langFlag: "🇲🇦",
      officialStore: "MORSAID MARKET ↗",
      ratingText: "4.9/5 (+2,480 زبون راضٍ)",
      orderNowBtn: "اطلب الآن",
      badge3d: "عرض تفاعلي ثلاثي الأبعاد 360°",
      spotChest: "🔵 تمارين عضلات الصدر (Pectoraux)",
      spotShoulders: "🔴 تمارين عضلات الأكتاف (Épaules)",
      spotBack: "🟡 تمارين عضلات الظهر (Dos)",
      spotTriceps: "🟢 تمارين الترايسبس والذراعين (Triceps)",
      dragHint: "اسحب بيدك لتدوير اللوحة واكتشاف الزوايا 360°",
      muscleSelectorLabel: "اختر العضلة المستهدفة:",
      tabChest: "الصدر (Bleu)",
      tabShoulders: "الأكتاف (Rouge)",
      tabBack: "الظهر (Jaune)",
      tabTriceps: "الترايسبس (Vert)",
      originalBadge: "✓ منتج أصلي 100% مع ضمان سنة",
      bestSellerBadge: "الأكثر مبيعاً بالمغرب 🏆",
      prodTitle: "لوحة تمارين الضغط الذكية 14 في 1 — ابنِ عضلات صدر وأكتاف قوية في منزلك خلال 30 يوماً!",
      prodTagline: "وداعاً للاشتراكات الشهرية المكلفة في القاعات الرياضية! لوحة تمارين احترافية بنظام الألوان المعتمد عالمياً لعزل كل عضلة بدقة تامة وبدون أي ضغط أو ألم على مفاصل اليد والمعصم.",
      currency: "درهم مغربي",
      saveBadge: "وفر 151 درهم اليوم",
      stockAlert: "تنبيه المخزون:",
      stockRemaining: "بقي فقط 7 قطع في مستودع الدار البيضاء!",
      hl1: "<strong>نظام 14 وضعية مرمز بالألوان:</strong> استهداف دقيق لعضلات الصدر، الأكتاف، الظهر والترايسبس.",
      hl2: "<strong>مقابض سيليكون مريحة وعريضة:</strong> تحمي مفاصل المعصم والكوع من الآلام والإصابات بنسبة 100%.",
      hl3: "<strong>تصميم مبتكر قابل للطي 180°:</strong> خفيف الوزن وسهل الحمل في الحقيبة لأي مكان (المنزل، العمل، السفر).",
      hl4: "<strong>هيكل ABS فائق الصلابة:</strong> متين جداً ويتحمل وزن حتى 150 كيلوغرام مع وسادات تثبيت مانعة للانزلاق.",
      ctaMain: "اضغط هنا للطلب — الدفع عند الاستلام 🚚",
      ctaSub: "توصيل سريع مجاني إلى باب منزلك في 24-48 ساعة بالمغرب",
      g1: "توصيل مجاني لجميع المدن",
      g2: "الدفع نقداً بعد المعاينة",
      g3: "ضمان استبدال لمدة سنة",
      techKicker: "نظام الألوان المعتمد عالمياً",
      techTitle: "كيف تعمل اللوحة على نحت وتضخيم كل عضلة؟",
      techSub: "تم تصميم فتحات التثبيت بزوايا بيوميكانيكية دقيقة تحفز الألياف العضلية بأقصى فاعلية مع حماية مفاصل اليد.",
      exp1Title: "عضلات الصدر (Pectoraux)",
      exp1Desc: "اللون الأزرق: يوفر زوايا متعددة لاستهداف الصدر العلوي والوسطى والسفلي لتوسيع القفص الصدري وبناء عضلات صدر بارزة وقوية.",
      exp2Title: "عضلات الأكتاف (Épaules)",
      exp2Desc: "اللون الأحمر: يركز الضغط مباشرة على العضلة الدالية الأمامية والجانبية لمنحك أكتافاً عريضة وصلبة مثل لاعبي كمال الأجسام.",
      exp3Title: "عضلات الظهر (Dos)",
      exp3Desc: "اللون الأصفر: ينشط عضلات الظهر العلوية والوسطى ويشد عضلات العمود الفقري لتحسين قوام الجسم والحصول على شكل V-Taper الجذاب.",
      exp4Title: "الترايسبس والذراعين (Triceps)",
      exp4Desc: "اللون الأخضر: قبضة ضيقة مركزة تفصل وتشد العضلة ثلاثية الرؤوس (Triceps) وتمنح ذراعيك حجماً ضخماً وقوة دفع هائلة.",
      compKicker: "المقارنة الذكية",
      compTitle: "الفرق بين لوحة التمارين الذكية 14 في 1 والتمارين التقليدية",
      compOldTitle: "التمارين العادية على الأرض والجيم",
      compOld1: "❌ آلام حادة في المعصم بسبب انثناء اليد غير الطبيعي على الأرض",
      compOld2: "❌ وضعيات عشوائية غير دقيقة لا تعزل العضلات بشكل فعال",
      compOld3: "❌ اشتراكات شهرية مكلفة في القاعات وضياع الوقت في المواصلات",
      compOld4: "❌ خطر التعرض لإصابات في أوتار الكتف والظهر بسبب الزوايا الخاطئة",
      compOld5: "❌ صعوبة الالتزام والملل السريع بعد أيام قليلة",
      compNewTitle: "لوحة تمارين الضغط الذكية 14 في 1",
      compNew1: "✅ مقابض سيليكون مستقيمة تمنع الضغط على المعصم بنسبة 100%",
      compNew2: "✅ 14 وضعية مدروسة بالألوان لعزل ونحت كل عضلة بدقة علمية",
      compNew3: "✅ صالة رياضية متكاملة في غرفتك بـ 15 دقيقة فقط يومياً",
      compNew4: "✅ حماية مفاصلك من أي حركة خاطئة بفضل فتحات التثبيت المحكمة",
      compNew5: "✅ قابلة للطي وسهلة الحمل ترافقك أينما ذهبت (المنزل، العمل، السفر)",
      offersKicker: "⚡ العروض الترويجية الحصرية بالمغرب",
      offersTitle: "اختر العرض المناسب لك واملأ المعلومات:",
      offersSub: "تخفيضات خاصة عند طلب قطعتين أو أكثر + التوصيل بالمجان لجميع المدن المغربية!",
      pack1Badge: "عرض البداية (Solo)",
      pack1Title: "قطعة واحدة (1 لوحة 14 في 1)",
      pack1Desc: "لوحة تمارين + زوج مقابض سيليكون مريحة + وسادات مانعة للانزلاق",
      freeShipTag: "✓ التوصيل مجاني بالمغرب",
      pack2Ribbon: "🔥 الأكثر طلباً بالمغرب — وفر 351 درهم + هدية قيمة",
      pack2Badge: "عرض الأبطال (Duo Pack)",
      pack2Title: "قطعتين (2 لوحات كاملة) + هدية",
      pack2Desc: "لوحتين لك ولصديقك أو أخيك + حبل قفز احترافي للتمارين بالمجان كهدية",
      pack2Save: "وفرت 351 درهم + حبل قفز مجاني + توصيل مجاني",
      pack3Badge: "عرض الجيم المنزلي VIP",
      pack3Title: "1 لوحة + أحزمة مقاومة رياضية",
      pack3Desc: "اللوحة 14 في 1 + حبلين مطاطيين للتمارين الشاملة وعضلات الأرجل والأكتاف",
      pack3Save: "أقصى توفير: وفرت 231 درهم!",
      formTitle: "استمارة الطلب السريع (الدفع عند الاستلام)",
      formSub: "يرجى إدخال معلوماتك بدقة، وسيتصل بك فريقنا لتأكيد طلبك وإرساله فوراً.",
      labelName: "الاسم الكامل",
      labelPhone: "رقم الهاتف",
      phoneHint: "سنقوم بالاتصال بك على هذا الرقم لتأكيد موعد التسليم",
      labelCity: "المدينة",
      chooseCity: "-- اختر مدينتك بالمغرب --",
      labelAddress: "العنوان أو الحي",
      sumPack: "العرض المختار:",
      sumShipping: "مصاريف الشحن:",
      freeShipping: "0 درهم (مجانـاً)",
      sumTotal: "المجموع الصافي عند الاستلام:",
      submitBtn: "اضغط هنا لإتمام طلبك الآن — الدفع عند الاستلام 🚚",
      submitSub: "🔒 بياناتك محمية 100% | ضمان الجودة واسترجاع الأموال",
      reviewsKicker: "آراء زبنائنا بالمغرب",
      reviewsTitle: "أكثر من 2,480 زبون يثقون في لوحة التمارين 14 في 1",
      reviewsSub: "تجارب حقيقية لشباب مغاربة غيروا أجسامهم بالتمارين المنزلية اليومية.",
      rev1Text: "\"الصراحة كاليتي واعرة بزااف ما كنتش متوقعها بهاد الثمن. البلاستيك ديالها صلب بزاف والمقابض ما كيزلقوش. كنت ديما كنعاني من الحريق فالمعصم فاش كندير بومبيا عادية، دابا كنديرها مرتاح وبديت كنحس بعضلات الصدر ديالي كيبانو. شكراً ليكم.\"",
      rev2Text: "\"برودوي طوب! خديت عرض 2 لوحات واحدة ليا وواحدة لصاحبي، جات معاها كادو حبل القفز زوين. سهلة فالطي كنديرها فالسّاك وكنديها معايا للخدمة. التوصيل كان سريع في 24 ساعة بمراكش.\"",
      rev3Text: "\"أحسن استثمار لصحتي هاد العام. نظام الألوان كيعاونك تبدل التمارين كل نهار بلا ما تمل، نهار الصدر ونهار الأكتاف ونهار الترايسبس. كنصح أي واحد باغي يتريني فالدار وما عندوش الوقت للصال.\"",
      pol1Title: "توصيل مجاني 24-48 ساعة",
      pol1Desc: "نتعامل مع أفضل شركات التوصيل السريع بالمغرب ليصلك المنتج لباب دارك بدون أي مصاريف إضافية.",
      pol2Title: "الدفع بعد فحص المنتج",
      pol2Desc: "لن تدفع أي درهم حتى تستلم طردك، تفتحه، وتتأكد من جودته وصلابته بنفسك أمام رجل التوصيل.",
      pol3Title: "ضمان استبدال لمدة 30 يوم",
      pol3Desc: "في حال وجود أي عيب مصنعي، نقوم باستبدال اللوحة لك فوراً بقطعة جديدة مجاناً وبدون أي تعقيدات.",
      footDesc: "المتجر المغربي المعتمد للمعدات الرياضية الذكية والأصلية ذات الجودة العالية.",
      footBack: "العودة للأعلى ↑",
      footPlatform: "طلب اللوحة الآن ←",
      stickyPriceLabel: "السعر الحالي:",
      stickyFree: "توصيل مجاني",
      stickyBtn: "اطلب الآن 🚚",
      modalSuccessTitle: "تم تسجيل طلبك بنجاح!",
      modalSuccessSub: "شكراً لثقتكم في متجرنا. رقم طلبك هو: ",
      sClient: "الاسم:",
      sCity: "المدينة:",
      sOffer: "العرض:",
      modalNotice: "سيتصل بك موظف خدمة العملاء خلال الساعات القادمة لتأكيد العنوان وموعد التسليم. يرجى إبقاء هاتفك مفتوحاً.",
      modalClose: "حسناً، فهمت ✓"
    },
    fr: {
      linkTitle: "Lien Direct du Produit :",
      linkHint: "Collez l'URL de votre boutique (YouCan, Shopify) ici pour redirection automatique",
      saveLinkBtn: "Enregistrer",
      directLinkBtn: "🛒 Acheter via le lien direct",
      videoTitle: "Vidéo Démonstration : Découvrez la Planche en Action",
      videoSub: "Explication détaillée des exercices en 3 langues (Arabe, Français, Anglais)",
      problemsKicker: "⚠️ Rencontrez-vous ces problèmes pendant vos séances ?",
      problemsTitle: "Les Problèmes Majeurs & Douleurs que cette Planche Résout",
      problemsSub: "Des solutions biomécaniques certifiées pour vous entraîner en toute sécurité sans blessure",
      p1Badge: "Problème 01",
      p1Title: "Douleurs & Traumatismes aux Poignets",
      p1Pain: "Les pompes au sol exercent une pression anormale à 90° sur les poignets et coudes, causant des tendinites sévères.",
      p1SolCheck: "✓ La Solution Intelligente :",
      p1Sol: "Poignées ergonomiques maintenant vos poignets parfaitement alignés et absorbant 100% des chocs.",
      p2Badge: "Problème 02",
      p2Title: "Entraînement au Hasard & Zéro Résultat",
      p2Pain: "85% des pratiquants s'entraînent sans cibler les bons muscles, gaspillant des mois sans prise de masse visible.",
      p2SolCheck: "✓ La Solution Intelligente :",
      p2Sol: "Système 14 positions par couleurs isolant chirurgicalement pectoraux, épaules, dos et triceps pour des résultats en 30 jours.",
      p3Badge: "Problème 03",
      p3Title: "Abonnements en Salle Trop Chers & Temps Perdu",
      p3Pain: "Dépenses mensuelles élevées (250-400 DH/mois), encombrement et perte de temps dans les trajets.",
      p3SolCheck: "✓ La Solution Intelligente :",
      p3Sol: "Une salle de sport complète chez vous en un seul investissement, pour des séances efficaces de 15 minutes.",
      p4Badge: "Problème 04",
      p4Title: "Monotonie & Manque de Régularité",
      p4Pain: "Les exercices classiques deviennent vite ennuyeux et le matériel lourd est impossible à déplacer.",
      p4SolCheck: "✓ La Solution Intelligente :",
      p4Sol: "Design pliable à 180° ultra léger et 14 angles variés pour des entraînements motivants partout avec vous.",

      topUrgency: "Offre Spéciale Maroc expire dans :",
      freeShippingBadge: "🚚 Livraison Gratuite + Paiement à la Livraison",
      langBtn: "العربية",
      langFlag: "🇲🇦",
      officialStore: "MORSAID MARKET ↗",
      ratingText: "4.9/5 (+2 480 Clients Satisfaits)",
      orderNowBtn: "Commander",
      badge3d: "Vue 3D Interactive 360°",
      spotChest: "🔵 Exercices Pectoraux (Bleu)",
      spotShoulders: "🔴 Exercices Épaules (Rouge)",
      spotBack: "🟡 Exercices Dos (Jaune)",
      spotTriceps: "🟢 Exercices Triceps & Bras (Vert)",
      dragHint: "Glissez pour faire pivoter la planche en 3D 360°",
      muscleSelectorLabel: "Cible Musculaire :",
      tabChest: "Pectoraux (Bleu)",
      tabShoulders: "Épaules (Rouge)",
      tabBack: "Dos (Jaune)",
      tabTriceps: "Triceps (Vert)",
      originalBadge: "✓ Produit 100% Authentique - Garantie 1 An",
      bestSellerBadge: "Bestseller Fitness Maroc 🏆",
      prodTitle: "Planche de Pompes Multi-Positions 14-en-1 — Sculptez Pectoraux, Épaules & Bras à Domicile !",
      prodTagline: "Dites adieu aux abonnements coûteux ! Système guidé par codes couleurs pour cibler chaque muscle avec précision tout en protégeant vos poignets.",
      currency: "MAD",
      saveBadge: "Économisez 151 DH Aujourd'hui",
      stockAlert: "Alerte Stock :",
      stockRemaining: "Seulement 7 pièces restantes à Casablanca !",
      hl1: "<strong>Système 14 positions par couleurs :</strong> Ciblage chirurgical des pectoraux, épaules, dos et triceps.",
      hl2: "<strong>Poignées confortables antidérapantes :</strong> Zéro douleur aux poignets grâce à l'alignement ergonomique.",
      hl3: "<strong>Pliable à 180° ultra compacte :</strong> Emportez votre salle de sport partout avec vous (maison, bureau, voyage).",
      hl4: "<strong>Structure ABS renforcée :</strong> Supporte jusqu'à 150 kg avec patins de stabilité antidérapants.",
      ctaMain: "COMMANDER MAINTENANT — PAIEMENT À LA LIVRAISON 🚚",
      ctaSub: "Livraison rapide et gratuite à domicile sous 24-48h au Maroc",
      g1: "Livraison gratuite partout au Maroc",
      g2: "Paiement en espèces après vérification",
      g3: "Garantie de remplacement 1 an",
      techKicker: "Système Biomécanique Certifié",
      techTitle: "Comment la planche développe chaque groupe musculaire ?",
      techSub: "Angles d'insertion étudiés scientifiquement pour maximiser le recrutement musculaire tout en protégeant les articulations.",
      exp1Title: "Pectoraux (Poitrine)",
      exp1Desc: "Zone Bleue : Développe le haut, le milieu et le bas des pectoraux pour une cage thoracique puissante et dessinée.",
      exp2Title: "Épaules & Deltoïdes",
      exp2Desc: "Zone Rouge : Élargit vos épaules avec des angles stricts réduisant les tensions ligamentaires.",
      exp3Title: "Dorsaux (Dos)",
      exp3Desc: "Zone Jaune : Renforce le grand dorsal et améliore la posture pour une silhouette athlétique en V.",
      exp4Title: "Triceps & Bras",
      exp4Desc: "Zone Verte : Prise serrée isolant le triceps pour des bras massifs, denses et sculptés.",
      compKicker: "Comparatif Intelligent",
      compTitle: "Planche 14-en-1 VS Pompes Classiques au Sol",
      compOldTitle: "Pompes Classiques & Salle de Sport",
      compOld1: "❌ Douleurs sévères aux poignets dues à la cassure de la main au sol",
      compOld2: "❌ Postures imprécises sans ciblage musculaire réel",
      compOld3: "❌ Abonnements de salle chers et perte de temps dans les trajets",
      compOld4: "❌ Risque élevé de blessure aux épaules et au bas du dos",
      compOld5: "❌ Dépaysement, démotivation rapide et abandons fréquents",
      compNewTitle: "Planche de Pompes Intelligente 14-en-1",
      compNew1: "✅ Poignées ergonomiques droites : Zéro douleur aux articulations",
      compNew2: "✅ 14 positions guidées par code couleur pour un développement complet",
      compNew3: "✅ Entraînement complet à domicile en 15 minutes par jour seulement",
      compNew4: "✅ Verrouillage ferme évitant tout mauvais geste biomécanique",
      compNew5: "✅ Pliable et légère : Transportable dans un sac n'importe où",
      offersKicker: "⚡ Offres Promotionnelles Exclusives Maroc",
      offersTitle: "Sélectionnez Votre Pack & Remplissez Vos Coordonnées :",
      offersSub: "Remises immédiates + Livraison offerte partout au Maroc !",
      pack1Badge: "Pack Solo Découverte",
      pack1Title: "1 Planche 14-en-1 Complète",
      pack1Desc: "Planche pliable + 2 poignées confort + patins antidérapants",
      freeShipTag: "✓ Livraison Gratuite au Maroc",
      pack2Ribbon: "🔥 Le Plus Vendu au Maroc — Économisez 351 DH + Cadeau",
      pack2Badge: "Pack Duo Champions",
      pack2Title: "2 Planches Complètes + Cadeau OFFERT",
      pack2Desc: "2 planches + Corde à sauter PRO offerte en cadeau bonus",
      pack2Save: "351 DH Économisés + Corde Offerte + Livraison Gratuite",
      pack3Badge: "Pack Gym Maison VIP",
      pack3Title: "1 Planche + Élastiques de Résistance",
      pack3Desc: "Planche 14-en-1 + bandes élastiques professionnelles de traction",
      pack3Save: "Économie Maximale : 231 DH économisés !",
      formTitle: "Formulaire de Commande Rapide (Paiement à la Livraison)",
      formSub: "Veuillez renseigner vos coordonnées pour confirmation immédiate par notre équipe.",
      labelName: "Nom & Prénom",
      labelPhone: "Numéro de Téléphone",
      phoneHint: "Nous vous appellerons pour convenir de l'heure exacte de livraison",
      labelCity: "Ville",
      chooseCity: "-- Choisissez votre ville au Maroc --",
      labelAddress: "Adresse ou Quartier",
      sumPack: "Pack Sélectionné :",
      sumShipping: "Frais de Livraison :",
      freeShipping: "0 DH (Gratuit)",
      sumTotal: "Total Net à la Réception :",
      submitBtn: "VALIDER MA COMMANDE — PAIEMENT À LA LIVRAISON 🚚",
      submitSub: "🔒 Données Sécurisées | Garantie Qualité et Remboursement",
      reviewsKicker: "Avis Clients Vérifiés Maroc",
      reviewsTitle: "Plus de 2 480 sportifs font confiance à notre planche",
      reviewsSub: "Témoignages réels de clients ayant transformé leur silhouette à domicile.",
      rev1Text: "\"Franchement la qualité est impressionnante pour ce prix. Plastique très solide et poignées agréables en main. Zéro douleur au poignet contrairement aux pompes à même le sol. Je recommande vivement !\"",
      rev2Text: "\"Top produit ! J'ai commandé le pack de 2 avec un ami, reçue en 24h à Marrakech avec la corde à sauter en cadeau. Pratique à plier et transporter partout.\"",
      rev3Text: "\"Le meilleur achat fitness de l'année. Le système de couleurs permet de varier chaque jour sans lassitude (pectos, épaules, triceps). Idéal pour s'entraîner chez soi.\"",
      pol1Title: "Livraison Rapide 24-48h",
      pol1Desc: "Expédition express directement à votre porte partout au Maroc sans frais supplémentaires.",
      pol2Title: "Paiement Après Vérification",
      pol2Desc: "Vous ne payez qu'après avoir reçu et inspecté le colis en personne devant le livreur.",
      pol3Title: "Garantie 30 Jours",
      pol3Desc: "Remplacement immédiat et gratuit en cas de moindre anomalie de fabrication.",
      footDesc: "Votre boutique marocaine de référence pour les équipements sportifs à domicile.",
      footBack: "Retour en haut ↑",
      footPlatform: "Commander Maintenant ←",
      stickyPriceLabel: "Prix Actuel :",
      stickyFree: "Livraison Gratuite",
      stickyBtn: "Commander 🚚",
      modalSuccessTitle: "Votre Commande a été Enregistrée !",
      modalSuccessSub: "Merci pour votre confiance. Référence commande : ",
      sClient: "Client :",
      sCity: "Ville :",
      sOffer: "Offre :",
      modalNotice: "Notre équipe vous contactera sous peu pour confirmer l'expédition. Gardez votre téléphone à portée de main.",
      modalClose: "D'accord, compris ✓"
    }
  };

  let currentLang = 'ar';

  function applyLanguage(lang) {
    currentLang = lang;
    const body = document.body;
    const t = translations[lang];

    if (lang === 'ar') {
      body.classList.remove('lang-fr');
      body.classList.add('lang-ar');
      body.setAttribute('dir', 'rtl');
    } else {
      body.classList.remove('lang-ar');
      body.classList.add('lang-fr');
      body.setAttribute('dir', 'ltr');
    }

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.innerHTML = t[key];
      }
    });

    const langBtn = document.getElementById('lang-toggle-btn');
    if (langBtn) {
      document.getElementById('lang-name').textContent = t.langBtn;
      document.getElementById('lang-flag').textContent = t.langFlag;
    }
  }

  // Toggle Language Handler
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const nextLang = currentLang === 'ar' ? 'fr' : 'ar';
      applyLanguage(nextLang);
    });
  }

  // ------------------------------------------------------------------------
  // 2. Countdown Timer
  // ------------------------------------------------------------------------
  let hours = 3, mins = 48, secs = 21;
  const hEl = document.getElementById('c-hours');
  const mEl = document.getElementById('c-mins');
  const sEl = document.getElementById('c-secs');

  setInterval(() => {
    if (secs > 0) {
      secs--;
    } else {
      secs = 59;
      if (mins > 0) {
        mins--;
      } else {
        mins = 59;
        if (hours > 0) hours--;
      }
    }
    if (hEl) hEl.textContent = String(hours).padStart(2, '0');
    if (mEl) mEl.textContent = String(mins).padStart(2, '0');
    if (sEl) sEl.textContent = String(secs).padStart(2, '0');
  }, 1000);

  // ------------------------------------------------------------------------
  // 3. Three.js 3D Push-Up Board Interactive Simulator
  // ------------------------------------------------------------------------
  let scene, camera, renderer, boardGroup, handlesGroup;
  let slotMeshes = [];
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let currentTargetMuscle = 'all';

  const muscleColors = {
    chest: 0x0088FF,      // Blue
    shoulders: 0xFF3344,  // Red
    back: 0xFFCC00,       // Yellow
    triceps: 0x00D084     // Green
  };

  const canvas = document.getElementById('blender-3d-canvas');
  if (canvas && window.THREE) {
    initThreePushUpBoard();
  }

  function initThreePushUpBoard() {
    const parent = canvas.parentElement;
    const width = parent.clientWidth || 540;
    const height = parent.clientHeight || 500;

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 5.5, 7.5);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight1.position.set(5, 10, 6);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00D084, 0.8);
    dirLight2.position.set(-6, 3, -4);
    scene.add(dirLight2);

    boardGroup = new THREE.Group();

    // 1. Main Foldable Push-Up Board (Left & Right halves)
    const boardMat = new THREE.MeshStandardMaterial({
      color: 0x141B22,
      roughness: 0.35,
      metalness: 0.25
    });

    const leftDeckGeo = new THREE.BoxGeometry(3.6, 0.28, 2.6);
    const leftDeck = new THREE.Mesh(leftDeckGeo, boardMat);
    leftDeck.position.set(-1.85, 0, 0);
    boardGroup.add(leftDeck);

    const rightDeckGeo = new THREE.BoxGeometry(3.6, 0.28, 2.6);
    const rightDeck = new THREE.Mesh(rightDeckGeo, boardMat);
    rightDeck.position.set(1.85, 0, 0);
    boardGroup.add(rightDeck);

    // Center Hinge Line
    const hingeGeo = new THREE.CylinderGeometry(0.12, 0.12, 2.6, 16);
    hingeGeo.rotateX(Math.PI / 2);
    const hingeMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.2, metalness: 0.8 });
    const centerHinge = new THREE.Mesh(hingeGeo, hingeMat);
    centerHinge.position.set(0, 0.08, 0);
    boardGroup.add(centerHinge);

    // Rubber Grip Feet under board
    const feetMat = new THREE.MeshStandardMaterial({ color: 0x05070A, roughness: 0.9 });
    const footPositions = [
      [-3.4, -0.16, -1.1], [-3.4, -0.16, 1.1],
      [-0.4, -0.16, -1.1], [-0.4, -0.16, 1.1],
      [3.4, -0.16, -1.1], [3.4, -0.16, 1.1],
      [0.4, -0.16, -1.1], [0.4, -0.16, 1.1]
    ];
    footPositions.forEach(pos => {
      const footGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.08, 16);
      const foot = new THREE.Mesh(footGeo, feetMat);
      foot.position.set(pos[0], pos[1], pos[2]);
      boardGroup.add(foot);
    });

    // 2. Color-coded 14 Workout Slots
    // Slot definitions [x, z, muscleType, angle]
    const slotConfigs = [
      // Left side:
      { x: -2.7, z: -0.6, type: 'chest', color: muscleColors.chest },
      { x: -2.3, z: 0.3, type: 'chest', color: muscleColors.chest },
      { x: -1.7, z: -0.8, type: 'chest', color: muscleColors.chest },
      { x: -1.2, z: 0.5, type: 'chest', color: muscleColors.chest },

      { x: -3.1, z: 0.0, type: 'shoulders', color: muscleColors.shoulders },
      { x: -2.6, z: 0.8, type: 'shoulders', color: muscleColors.shoulders },
      { x: -1.9, z: 0.9, type: 'shoulders', color: muscleColors.shoulders },

      { x: -2.9, z: -0.9, type: 'back', color: muscleColors.back },
      { x: -2.0, z: -0.2, type: 'back', color: muscleColors.back },
      { x: -1.4, z: -0.4, type: 'back', color: muscleColors.back },

      { x: -0.9, z: 0.0, type: 'triceps', color: muscleColors.triceps },
      { x: -0.8, z: -0.7, type: 'triceps', color: muscleColors.triceps },
      { x: -0.7, z: 0.7, type: 'triceps', color: muscleColors.triceps },

      // Right side (Mirrored):
      { x: 2.7, z: -0.6, type: 'chest', color: muscleColors.chest },
      { x: 2.3, z: 0.3, type: 'chest', color: muscleColors.chest },
      { x: 1.7, z: -0.8, type: 'chest', color: muscleColors.chest },
      { x: 1.2, z: 0.5, type: 'chest', color: muscleColors.chest },

      { x: 3.1, z: 0.0, type: 'shoulders', color: muscleColors.shoulders },
      { x: 2.6, z: 0.8, type: 'shoulders', color: muscleColors.shoulders },
      { x: 1.9, z: 0.9, type: 'shoulders', color: muscleColors.shoulders },

      { x: 2.9, z: -0.9, type: 'back', color: muscleColors.back },
      { x: 2.0, z: -0.2, type: 'back', color: muscleColors.back },
      { x: 1.4, z: -0.4, type: 'back', color: muscleColors.back },

      { x: 0.9, z: 0.0, type: 'triceps', color: muscleColors.triceps },
      { x: 0.8, z: -0.7, type: 'triceps', color: muscleColors.triceps },
      { x: 0.7, z: 0.7, type: 'triceps', color: muscleColors.triceps }
    ];

    slotConfigs.forEach(conf => {
      // Slot socket hole
      const ringGeo = new THREE.TorusGeometry(0.15, 0.045, 12, 24);
      ringGeo.rotateX(Math.PI / 2);
      const ringMat = new THREE.MeshStandardMaterial({
        color: conf.color,
        roughness: 0.2,
        emissive: conf.color,
        emissiveIntensity: 0.4
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      ringMesh.position.set(conf.x, 0.15, conf.z);
      boardGroup.add(ringMesh);

      // Hole depression inside
      const holeGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16);
      const holeMat = new THREE.MeshBasicMaterial({ color: 0x05080C });
      const holeMesh = new THREE.Mesh(holeGeo, holeMat);
      holeMesh.position.set(conf.x, 0.11, conf.z);
      boardGroup.add(holeMesh);

      slotMeshes.push({ mesh: ringMesh, type: conf.type, baseColor: conf.color });
    });

    // 3. Ergonomic Push-Up Handles (Left & Right)
    handlesGroup = new THREE.Group();

    function createHandle(posX, posZ, angleY) {
      const hGroup = new THREE.Group();

      // Grip bar (Silicone padded)
      const barGeo = new THREE.CylinderGeometry(0.09, 0.09, 1.1, 16);
      barGeo.rotateZ(Math.PI / 2);
      const gripMat = new THREE.MeshStandardMaterial({ color: 0x00D084, roughness: 0.6 });
      const gripMesh = new THREE.Mesh(barGeo, gripMat);
      gripMesh.position.y = 0.65;
      hGroup.add(gripMesh);

      // Left Post
      const postGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.55, 16);
      const postMat = new THREE.MeshStandardMaterial({ color: 0x1E293B, metalness: 0.8, roughness: 0.2 });
      const leftPost = new THREE.Mesh(postGeo, postMat);
      leftPost.position.set(-0.48, 0.38, 0);
      hGroup.add(leftPost);

      // Right Post
      const rightPost = new THREE.Mesh(postGeo, postMat);
      rightPost.position.set(0.48, 0.38, 0);
      hGroup.add(rightPost);

      // Locking peg at bottom (plugs into slots)
      const pegGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.16, 16);
      const pegLeft = new THREE.Mesh(pegGeo, postMat);
      pegLeft.position.set(-0.48, 0.1, 0);
      hGroup.add(pegLeft);

      const pegRight = new THREE.Mesh(pegGeo, postMat);
      pegRight.position.set(0.48, 0.1, 0);
      hGroup.add(pegRight);

      hGroup.position.set(posX, 0.1, posZ);
      hGroup.rotation.y = angleY;
      return hGroup;
    }

    const leftHandle = createHandle(-2.3, 0.0, 0.2);
    const rightHandle = createHandle(2.3, 0.0, -0.2);
    handlesGroup.add(leftHandle);
    handlesGroup.add(rightHandle);
    boardGroup.add(handlesGroup);

    // Initial slight tilt for aesthetic presentation
    boardGroup.rotation.x = 0.35;
    boardGroup.rotation.y = -0.15;
    scene.add(boardGroup);

    // Mouse Drag Rotation
    parent.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    window.addEventListener('mouseup', () => { isDragging = false; });

    parent.addEventListener('mousemove', (e) => {
      if (!isDragging || !boardGroup) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      boardGroup.rotation.y += deltaX * 0.01;
      boardGroup.rotation.x += deltaY * 0.01;
      boardGroup.rotation.x = Math.max(-0.4, Math.min(0.9, boardGroup.rotation.x));

      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    // Touch Support
    parent.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener('touchend', () => { isDragging = false; });

    parent.addEventListener('touchmove', (e) => {
      if (!isDragging || !boardGroup || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      boardGroup.rotation.y += deltaX * 0.012;
      boardGroup.rotation.x += deltaY * 0.012;
      boardGroup.rotation.x = Math.max(-0.4, Math.min(0.9, boardGroup.rotation.x));

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }, { passive: true });

    // Render loop with subtle auto-idle float
    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!isDragging && boardGroup) {
        boardGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;
        boardGroup.rotation.y += 0.003;
      }

      renderer.render(scene, camera);
    }
    animate();

    // Window Resize
    window.addEventListener('resize', () => {
      const newWidth = parent.clientWidth || 540;
      const newHeight = parent.clientHeight || 500;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    });
  }

  // ------------------------------------------------------------------------
  // 4. Muscle Mode Simulator (Changes glowing slots & handles)
  // ------------------------------------------------------------------------
  function setMuscleMode(muscle) {
    currentTargetMuscle = muscle;

    const muscleTitles = {
      all: "نظام متكامل 14 وضعية (شامل لكل عضلات الجسم)",
      chest: "🔵 وضعية الصدر (Pectoraux) — فتحات اللون الأزرق",
      shoulders: "🔴 وضعية الأكتاف (Épaules) — فتحات اللون الأحمر",
      back: "🟡 وضعية الظهر (Dos) — فتحات اللون الأصفر",
      triceps: "🟢 وضعية الترايسبس (Triceps) — فتحات اللون الأخضر"
    };

    const titleEl = document.getElementById('selected-color-title');
    if (titleEl && muscleTitles[muscle]) {
      titleEl.textContent = muscleTitles[muscle];
    }

    // Highlight slots in 3D
    slotMeshes.forEach(item => {
      if (muscle === 'all' || item.type === muscle) {
        item.mesh.material.emissiveIntensity = 0.95;
        item.mesh.scale.set(1.2, 1.2, 1.2);
      } else {
        item.mesh.material.emissiveIntensity = 0.15;
        item.mesh.scale.set(0.9, 0.9, 0.9);
      }
    });

    // Update buttons active states
    document.querySelectorAll('.c-dot').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-muscle') === muscle);
    });

    document.querySelectorAll('.m-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-target') === muscle);
    });
  }

  document.querySelectorAll('.c-dot').forEach(btn => {
    btn.addEventListener('click', () => {
      const m = btn.getAttribute('data-muscle');
      setMuscleMode(m);
    });
  });

  document.querySelectorAll('.m-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const m = btn.getAttribute('data-target');
      setMuscleMode(m);
    });
  });

  // ------------------------------------------------------------------------
  // 5. Moroccan COD Packs Selector & Price Sync
  // ------------------------------------------------------------------------
  const packPrices = {
    '1': { price: 199, name: 'عرض البداية (لوحة واحدة)', nameFr: 'Pack Solo Découverte' },
    '2': { price: 349, name: 'عرض الأبطال (قطعتين + هدية)', nameFr: 'Pack Duo Champions' },
    '3': { price: 289, name: 'عرض الجيم VIP (لوحة + أحزمة مقاومة)', nameFr: 'Pack Gym VIP' }
  };

  let selectedPack = '2';

  const packCards = document.querySelectorAll('.offer-pack-card');
  const sumPackName = document.getElementById('sum-pack-name');
  const sumTotalPrice = document.getElementById('sum-total-price');
  const stickyPriceVal = document.getElementById('sticky-price-val');
  const heroDisplayPrice = document.getElementById('hero-display-price');

  function updatePackSelection(packId) {
    selectedPack = packId;
    const info = packPrices[packId];
    if (!info) return;

    packCards.forEach(card => {
      const isCurrent = card.getAttribute('data-pack') === packId;
      card.classList.toggle('active', isCurrent);
      const radio = card.querySelector('.pack-radio-circle');
      if (radio) radio.classList.toggle('checked', isCurrent);
    });

    const displayName = currentLang === 'ar' ? info.name : info.nameFr;
    const priceText = `${info.price} ${currentLang === 'ar' ? 'درهم' : 'DH'}`;

    if (sumPackName) sumPackName.textContent = displayName;
    if (sumTotalPrice) sumTotalPrice.textContent = priceText;
    if (stickyPriceVal) stickyPriceVal.textContent = priceText;
    if (heroDisplayPrice) heroDisplayPrice.textContent = info.price;
  }

  packCards.forEach(card => {
    card.addEventListener('click', () => {
      const p = card.getAttribute('data-pack');
      updatePackSelection(p);
    });
  });

  // ------------------------------------------------------------------------
  // 6. Moroccan COD Form Submission & Modal Confirmation
  // ------------------------------------------------------------------------
  const codForm = document.getElementById('moroccan-cod-form');
  const successModal = document.getElementById('success-modal');
  const btnCloseModal = document.getElementById('btn-close-modal');

  if (codForm) {
    codForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('client-name');
      const phoneInput = document.getElementById('client-phone');
      const cityInput = document.getElementById('client-city');
      const addressInput = document.getElementById('client-address');

      if (!nameInput.value.trim()) {
        alert(currentLang === 'ar' ? 'يرجى إدخال اسمك الكامل' : 'Veuillez saisir votre nom complet');
        nameInput.focus();
        return;
      }

      const phoneVal = phoneInput.value.trim().replace(/\s+/g, '');
      if (!/^(?:0|\+?212)[567]\d{8}$/.test(phoneVal)) {
        alert(currentLang === 'ar' ? 'يرجى إدخال رقم هاتف مغربي صحيح (مثال: 0612345678)' : 'Veuillez entrer un numéro marocain valide (ex: 0612345678)');
        phoneInput.focus();
        return;
      }

      if (!cityInput.value) {
        alert(currentLang === 'ar' ? 'يرجى اختيار مدينتك' : 'Veuillez sélectionner votre ville');
        cityInput.focus();
        return;
      }

      if (!addressInput.value.trim()) {
        alert(currentLang === 'ar' ? 'يرجى إدخال عنوانك أو الحي' : 'Veuillez saisir votre adresse ou quartier');
        addressInput.focus();
        return;
      }

      // Populate confirmation modal
      const packInfo = packPrices[selectedPack];
      document.getElementById('confirm-name').textContent = nameInput.value.trim();
      document.getElementById('confirm-city').textContent = cityInput.options[cityInput.selectedIndex].text;
      document.getElementById('confirm-pack').textContent = `${currentLang === 'ar' ? packInfo.name : packInfo.nameFr} (${packInfo.price} ${currentLang === 'ar' ? 'درهم' : 'DH'})`;

      const randRef = Math.floor(1000 + Math.random() * 9000);
      const refNumEl = document.getElementById('order-ref-num');
      if (refNumEl) refNumEl.textContent = `#FIT-${randRef}`;

      // Show modal
      if (successModal) {
        successModal.setAttribute('aria-hidden', 'false');
      }

      // Save order to LocalStorage for analytics
      const orderData = {
        ref: `#FIT-${randRef}`,
        name: nameInput.value.trim(),
        phone: phoneVal,
        city: cityInput.value,
        address: addressInput.value.trim(),
        pack: selectedPack,
        total: packInfo.price,
        date: new Date().toISOString()
      };
      try {
        const orders = JSON.parse(localStorage.getItem('fitpro_orders') || '[]');
        orders.push(orderData);
        localStorage.setItem('fitpro_orders', JSON.stringify(orders));
      } catch (err) {
        console.warn('Storage error', err);
      }
    });
  }

  if (btnCloseModal) {
    btnCloseModal.addEventListener('click', () => {
      if (successModal) successModal.setAttribute('aria-hidden', 'true');
    });
  }

  // ------------------------------------------------------------------------
  // 7. Recent Purchase Toast Notifications (Abdou Ecom Social Proof)
  // ------------------------------------------------------------------------
  const toast = document.getElementById('purchase-toast');
  const buyersList = [
    { name: 'كمال', city: 'الدار البيضاء', offer: 'لوحة التمارين 14 في 1 (عرض قطعتين 🔥)', time: 'قبل 3 دقائق' },
    { name: 'أمين', city: 'مراكش', offer: 'لوحة التمارين + هدية حبل القفز', time: 'قبل دقيقة واحدة' },
    { name: 'حمزة', city: 'طنجة', offer: 'عرض قطعتين (349 درهم)', time: 'قبل 5 دقائق' },
    { name: 'ياسين', city: 'الرباط', offer: 'عرض الجيم VIP المنزلي', time: 'قبل 2 دقيقة' },
    { name: 'سفيان', city: 'فاس', offer: 'لوحة التمارين 14 في 1 (قطعتين)', time: 'قبل 4 دقائق' },
    { name: 'عمر', city: 'أكادير', offer: 'عرض قطعتين الأبطال 🔥', time: 'قبل 6 دقائق' }
  ];

  let toastIndex = 0;
  function triggerPurchaseToast() {
    if (!toast) return;
    const buyer = buyersList[toastIndex % buyersList.length];
    toastIndex++;

    const buyerEl = document.getElementById('toast-buyer');
    const offerEl = document.getElementById('toast-offer');
    const agoEl = document.getElementById('toast-ago');

    if (buyerEl) buyerEl.textContent = `اشترى ${buyer.name} من ${buyer.city}`;
    if (offerEl) offerEl.textContent = buyer.offer;
    if (agoEl) agoEl.textContent = `${buyer.time} · تم الشحن 🚚`;

    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // First toast after 7s, then every 22s
  setTimeout(() => {
    triggerPurchaseToast();
    setInterval(triggerPurchaseToast, 22000);
  }, 7000);

  // Initial update
  updatePackSelection('2');

  // ------------------------------------------------------------------------
  // Product Direct Link Storage & Redirection Logic (User Configurable)
  // ------------------------------------------------------------------------
  const customUrlInput = document.getElementById('custom-prod-url');
  const saveUrlBtn = document.getElementById('save-prod-url-btn');
  const directStoreLinkBtn = document.getElementById('direct-store-link-btn');

  // Load saved product URL from localStorage
  const savedProductUrl = localStorage.getItem('user_product_url') || 'https://mor-saidshop.youcan.store/';
  if (customUrlInput) {
    customUrlInput.value = savedProductUrl;
  }
  if (directStoreLinkBtn && savedProductUrl) {
    directStoreLinkBtn.href = savedProductUrl;
  }

  if (saveUrlBtn && customUrlInput) {
    saveUrlBtn.addEventListener('click', () => {
      let url = customUrlInput.value.trim();
      if (url && !url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
        customUrlInput.value = url;
      }
      if (url) {
        localStorage.setItem('user_product_url', url);
        if (directStoreLinkBtn) {
          directStoreLinkBtn.href = url;
        }
        saveUrlBtn.textContent = 'تم الحفظ ✓';
        saveUrlBtn.style.background = '#00D084';
        saveUrlBtn.style.color = '#03140C';
        setTimeout(() => {
          saveUrlBtn.textContent = (document.body.classList.contains('lang-fr')) ? 'Enregistrer' : 'حفظ الرابط';
          saveUrlBtn.style.background = '';
          saveUrlBtn.style.color = '';
        }, 2200);
      } else {
        localStorage.removeItem('user_product_url');
        if (directStoreLinkBtn) {
          directStoreLinkBtn.href = '#cod-order-section';
        }
        alert('تم مسح الرابط. عند الضغط سيتم التوجيه لنموذج الطلب.');
      }
    });
  }

  // ------------------------------------------------------------------------
  // Thumbnail Gallery Switcher
  // ------------------------------------------------------------------------
  const mainProductImage = document.getElementById('main-product-image');
  const thumbButtons = document.querySelectorAll('.prod-thumb-item');

  thumbButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      thumbButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const newSrc = btn.getAttribute('data-img');
      if (mainProductImage && newSrc) {
        mainProductImage.style.opacity = '0';
        setTimeout(() => {
          mainProductImage.src = newSrc;
          mainProductImage.style.opacity = '1';
        }, 150);
      }
    });
  });

  // ------------------------------------------------------------------------
  // 3-Language Video Switcher Logic
  // ------------------------------------------------------------------------
  const videoTabs = document.querySelectorAll('#video-lang-tabs .v-tab');
  const videoIframe = document.getElementById('prod-video-iframe');

  // Multi-Language Push-Up Board Workout Video IDs
  const videoUrls = {
    ar: 'https://www.youtube-nocookie.com/embed/8vK5G8o6N5U?rel=0', // Darija / Arabic push-up workout
    fr: 'https://www.youtube-nocookie.com/embed/Q7898pQh9gE?rel=0', // French workout guide
    en: 'https://www.youtube-nocookie.com/embed/n4K_1kG9xV4?rel=0'  // English commercial demonstration
  };

  videoTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      videoTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const vLang = tab.getAttribute('data-vlang');
      if (videoIframe && videoUrls[vLang]) {
        videoIframe.src = videoUrls[vLang];
      }
    });
  });

});
