/* The K-Square — lightweight EN/KO internationalization.
 * Translatable nodes carry data-i18n="key" (textContent is replaced).
 * Language preference persists in localStorage and applies on every page. */
(function () {
  'use strict';

  var STORAGE_KEY = 'ksq-lang';
  var DEFAULT_LANG = 'en';

  var translations = {
    en: {
      /* ---- Nav / footer (shared) ---- */
      'nav.leasing': 'Leasing',
      'nav.investing': 'Investing',
      'nav.contact': 'Contact',
      'footer.address': 'Magsaysay Dr, Olongapo City, Zambales, Philippines',
      'footer.email': 'Email: hello@thek-square.ph',
      'footer.phone': 'Phone: +63 977 243 8333',

      /* ---- Home: hero ---- */
      'home.title': 'The K-Square: Where Korea Comes Alive in Olongapo',
      'hero.eyebrow': 'Pre-Construction · Olongapo',
      'hero.title': 'The K-Square',
      'hero.tagline': "Korea's beauty, food, and entertainment culture, built as a four-floor investment and leasing destination in Olongapo.",
      'hero.cta': 'Discover the Vision',

      /* ---- Home: vision ---- */
      'vision.title': 'A new landmark for Olongapo',
      'vision.body': "The K-Square brings Korea's beauty, food, entertainment, and culture under one roof: a four-floor destination designed to anchor Magsaysay Drive. Currently in its concept and pre-construction phase, it is built on a vision shared between investors and brands ready to shape what comes next.",
      'vision.link': 'Explore the floors',

      /* ---- Home: floors ---- */
      'floor1.label': 'K-Fun & Trend · 464 sqm',
      'floor1.title': 'K-Fun & Trend Zone',
      'floor1.quote': '"An entrance anchor that draws foot traffic inside."',
      'floor1.body': 'K-Beauty Hub in the style of Olive Young, a sentimental K-Photo Studio, and K-Fun & Acc: claw machines, premium goods, and character accessories.',
      'floor1.cap': 'K-Fun & Trend',
      'floor1.sub': 'Beauty hub, photo studio & character finds',
      'floor2.label': 'K-Beauty & Wellness · 592 sqm',
      'floor2.title': 'K-Beauty & Wellness Zone',
      'floor2.quote': '"A journey of the senses that awakens the whole body."',
      'floor2.body': "Hair salon, nail art, massage, Atomy Center, beauty booths, Korean Daiso, and parcel delivery, together in an immersive space for Korea's finest beauty and healthcare.",
      'floor2.cap': 'K-Beauty & Wellness',
      'floor2.sub': 'Salon, spa, wellness & Korean essentials',
      'floor3.label': 'K-Food & Drama · 595 sqm',
      'floor3.title': 'K-Food & Drama Zone',
      'floor3.quote': '"The moment you become the protagonist of a drama."',
      'floor3.body': 'A food court spanning Chinese, Japanese, Ramyun, Chicken, Bibimbap, Hansik, Samgyupsal, and Jjigae stalls, plus a beverage bar, serving gourmet cuisine in K-drama-inspired scenery.',
      'floor3.cap': 'K-Food & Drama',
      'floor3.sub': 'K-drama food court & beverage bar',
      'floor4.label': 'K-Pop Entertain · 498 sqm',
      'floor4.title': 'K-Pop Entertain Zone',
      'floor4.quote': '"A stage where the whole family become the stars."',
      'floor4.body': 'Hope Partners Association offices, Korean Family KTV karaoke rooms, and a Celebrities Lounge with bar area and roof-deck access.',
      'floor4.cap': 'K-Pop Entertain',
      'floor4.sub': 'KTV, celebrity lounge & roof-deck stage',

      /* ---- Home: fork / stats / location ---- */
      'fork.title': 'Two ways to join The K-Square',
      'fork.brands.title': 'Bring your brand to life',
      'fork.brands.body': 'Lease retail, beauty, food, or entertainment space across four themed floors built to draw foot traffic from day one.',
      'fork.brands.link': 'Explore Leasing',
      'fork.investors.title': 'Be part of the vision',
      'fork.investors.body': "Join a ground-floor investment opportunity in Olongapo's first dedicated K-culture destination.",
      'fork.investors.link': 'Explore Investing',
      'stats.floors': 'Themed Floors',
      'stats.sqm': 'Total sqm',
      'stats.phase.num': 'Phase 1',
      'stats.phase.label': 'Pre-construction',
      'stats.place.num': 'Olongapo',
      'stats.place.label': 'Magsaysay Drive',
      'location.title': 'Find Us',
      'location.address': 'R7GJ+QXG, Magsaysay Dr, Olongapo City, Zambales, Philippines',

      /* ---- Leasing ---- */
      'leasing.title': 'Leasing: The K-Square',
      'leasing.hero.eyebrow': 'Leasing',
      'leasing.hero.title': 'Bring your brand to The K-Square',
      'leasing.hero.lead': 'Four themed floors. One destination built to draw foot traffic from day one.',
      'leasing.floors.title': 'Available spaces, by floor',
      'leasing.floors.lead': 'Real architectural plans for each level. Inquire about anchor and in-line positions.',
      'plan1.zone': '1F · K-Fun & Trend',
      'plan1.area': '464 sqm',
      'plan1.body': 'K-Beauty Hub, K-Photo Studio, and K-Fun & Acc. The entrance anchor that pulls foot traffic inside.',
      'plan1.cta': 'Inquire about 1F',
      'plan2.zone': '2F · K-Beauty & Wellness',
      'plan2.area': '592 sqm',
      'plan2.body': 'Salon, nail art, massage, Atomy Center, beauty booths, Korean Daiso, and parcel service.',
      'plan2.cta': 'Inquire about 2F',
      'plan3.zone': '3F · K-Food & Drama',
      'plan3.area': '595 sqm',
      'plan3.body': 'A multi-stall Korean food court plus beverage bar in K-drama-inspired scenery.',
      'plan3.cta': 'Inquire about 3F',
      'plan4.zone': '4F · K-Pop Entertain',
      'plan4.area': '498 sqm',
      'plan4.body': 'Offices, Korean Family KTV, and a Celebrities Lounge with bar area and roof-deck access.',
      'plan4.cta': 'Inquire about 4F',
      'leasing.fit.title': "Who we're building for",
      'leasing.fit.lead': "The K-Square is curated by category, not filled at random. We're in conversation with brands across four sectors.",
      'leasing.fit.tag1': 'K-Beauty & Skincare',
      'leasing.fit.tag2': 'Wellness & Salon',
      'leasing.fit.tag3': 'Food & Beverage',
      'leasing.fit.tag4': 'Entertainment & Lifestyle',
      'leasing.fit.tag5': 'Retail & Character Goods',
      'leasing.how.title': 'How leasing works',
      'leasing.how1.title': 'Inquiry',
      'leasing.how1.body': 'Tell us your brand and preferred floor. Our leasing team reviews fit within days.',
      'leasing.how2.title': 'Site Visit',
      'leasing.how2.body': 'Walk the plans on site and discuss unit size, frontage, and build-out needs.',
      'leasing.how3.title': 'Letter of Intent',
      'leasing.how3.body': 'Terms are set out in writing ahead of a formal lease agreement.',
      'leasing.how4.title': 'Fit-Out & Launch',
      'leasing.how4.body': 'Build your space alongside the development timeline and open with the destination.',
      'cta.brochure': 'Download Brochure',
      'cta.consult': 'Book a Consultation',
      'leasing.inquiry.title': 'Inquire About Leasing',
      'leasing.confirm': 'Thanks, our leasing team will reach out shortly.',

      /* ---- Investing ---- */
      'investing.title': 'Invest in The K-Square',
      'investing.hero.eyebrow': 'Investing',
      'investing.hero.title': "Invest in Olongapo's K-culture landmark",
      'investing.hero.lead': 'A four-floor destination at the concept stage, ready for founding partners.',
      'investing.opp.title': 'A ground-up K-culture destination',
      'investing.opp.body': 'The K-Square is a commercial development at R7GJ+QXG, Magsaysay Dr, Olongapo City, Zambales, bringing Korean retail, beauty, food, and entertainment under one roof. In its concept and pre-construction phase, it gives early investors the chance to shape the project from the ground floor up.',
      'investing.why.title': 'The case for investing early',
      'investing.why1.title': 'First to market',
      'investing.why1.body': 'The K-Square is the first development in the Olongapo-Zambales corridor built entirely around Korean retail, beauty, food, and entertainment, a category with no direct local competitor.',
      'investing.why2.title': 'Four independent revenue floors',
      'investing.why2.body': 'Retail, wellness, food and beverage, and entertainment each operate as their own leasing floor, spreading income across four distinct categories instead of one.',
      'investing.why3.title': 'Ground-floor entry pricing',
      'investing.why3.body': 'The project is still in its concept and pre-construction phase. Investors and anchor tenants who commit now enter before construction pricing and the surrounding market catch up.',
      'investing.snapshot.title': 'Development Snapshot',
      'investing.stats.floors': 'Revenue Floors',
      'investing.stats.phase.label': 'Concept Stage',
      'investing.tl1.title': 'Concept & Design',
      'investing.tl1.body': 'Architectural and interior concepts finalized across all four floors.',
      'investing.tl2.title': 'Pre-Construction',
      'investing.tl2.body': 'Permitting, engineering, and anchor tenant commitments underway.',
      'investing.tl3.title': 'Groundbreaking',
      'investing.tl3.body': 'Site mobilization and vertical construction begin.',
      'investing.tl4.title': 'Grand Opening',
      'investing.tl4.body': 'Doors open across all four floors to the public.',
      'investing.tiers.title': 'Partnership packages',
      'investing.tiers.lead': 'Three rental-income investment packages, each with a fixed preferred dividend.',
      'tier.platinum.name': 'Platinum Partner',
      'tier.platinum.rate': '12.0% fixed preferred dividend per annum',
      'tier.platinum.b1': '10% preferred stock stake on the shareholder register',
      'tier.platinum.b2': 'Up to 5.0% variable bonus dividend as sublease rent grows',
      'tier.platinum.b3': 'Priority purchase and lease rights in the second development site',
      'tier.gold.name': 'Gold Partner',
      'tier.gold.rate': '10.0% fixed preferred dividend per annum',
      'tier.gold.b1': '3% preferred stock stake on the shareholder register',
      'tier.gold.b2': 'Up to 2.5% variable bonus dividend as sublease rent grows',
      'tier.gold.b3': 'Priority purchase and lease rights in the second development site',
      'tier.silver.name': 'Silver Partner',
      'tier.silver.rate': '9.0% fixed preferred dividend per annum',
      'tier.silver.b1': 'Stable model focused on profit recovery and capital gains',
      'tier.silver.b2': 'Residual premium dividend after principal recovery',
      'tier.silver.b3': 'K-Square VIP discount card provided',
      'investing.tiers.note': 'Summary terms only. The investment commitment period is based on 3 years, with principal repayment within 5 years. Full conditions, valuation, and financial scenarios are detailed in the brochure and during consultation.',
      'investing.recovery.title': 'How your capital comes back',
      'investing.rec1.mark': 'Years 1-3',
      'investing.rec1.title': 'Dividend phase',
      'investing.rec1.body': 'Monthly dividends paid from net rental income in proportion to your contracted equity stake.',
      'investing.rec2.mark': 'Years 3-5',
      'investing.rec2.title': 'Repayment phase',
      'investing.rec2.body': 'Installment or lump-sum repayment of the investment principal completes capital recovery.',
      'investing.rec3.mark': 'After year 5',
      'investing.rec3.title': 'Profit phase',
      'investing.rec3.body': 'Premium dividends continue for 5 more years after your principal is fully recovered.',
      'investing.mix.title': 'Four floors, one address',
      'investing.mix.quote': '"One roof, four revenue streams, and a single address to lease or invest in."',
      'investing.inquiry.title': 'Inquire About Investing',
      'investing.confirm': 'Thanks, our investment team will reach out shortly.',

      /* ---- Contact ---- */
      'contact.title': 'Contact: The K-Square',
      'contact.hero.eyebrow': 'Contact',
      'contact.hero.title': 'Get in touch',
      'contact.hero.lead': 'Questions about The K-Square? Reach out and our team will follow up.',
      'contact.visit': 'Visit Us',
      'contact.address': 'R7GJ+QXG, Magsaysay Dr, Olongapo City, Zambales, Philippines',
      'contact.contact': 'Contact',
      'contact.details': 'hello@thek-square.ph · +63 977 243 8333',
      'contact.office': 'Office',
      'contact.office.address': 'Lot 5, Retail #31, Time Square Bldg., Rizal Highway, C.B.D Area, Subic Bay Freeport Zone',
      'contact.confirm': "Thanks for reaching out, we'll respond shortly.",

      /* ---- Forms (shared) ---- */
      'form.name': 'Name',
      'form.company': 'Company / Brand',
      'form.organization': 'Organization',
      'form.email': 'Email',
      'form.phone': 'Phone',
      'form.message': 'Message',
      'form.floor': 'Preferred Floor',
      'form.floor.select': 'Select a floor',
      'form.floor.1f': '1F, K-Fun & Trend Zone',
      'form.floor.2f': '2F, K-Beauty & Wellness Zone',
      'form.floor.3f': '3F, K-Food & Drama Zone',
      'form.floor.4f': '4F, K-Pop Entertain Zone',
      'form.interest': 'Investment Interest',
      'form.interest.select': 'Select an area of interest',
      'form.interest.equity': 'Equity Investment',
      'form.interest.anchor': 'Anchor Tenant Partnership',
      'form.interest.other': 'Other',
      'form.send.inquiry': 'Send Inquiry',
      'form.send.message': 'Send Message',
      'form.error.required': 'This field is required.',
      'form.error.email': 'Enter a valid email address.',
      'form.error.submit': 'Something went wrong. Please try again or email us directly.'
    },

    ko: {
      /* ---- Nav / footer (shared) ---- */
      'nav.leasing': '임대',
      'nav.investing': '투자',
      'nav.contact': '문의',
      'footer.address': '필리핀 잠발레스 올롱가포시 막사이사이 거리',
      'footer.email': '이메일: hello@thek-square.ph',
      'footer.phone': '전화: +63 977 243 8333',

      /* ---- Home: hero ---- */
      'home.title': '더 케이스퀘어: 올롱가포에서 만나는 한국',
      'hero.eyebrow': '착공 예정 · 올롱가포',
      'hero.title': '더 케이스퀘어',
      'hero.tagline': '한국의 뷰티, 푸드, 엔터테인먼트 문화를 담은 올롱가포의 4층 투자·임대 복합 공간입니다.',
      'hero.cta': '비전 살펴보기',

      /* ---- Home: vision ---- */
      'vision.title': '올롱가포의 새로운 랜드마크',
      'vision.body': '더 케이스퀘어는 한국의 뷰티, 푸드, 엔터테인먼트, 그리고 문화를 한곳에 담아냅니다. 막사이사이 거리의 중심을 이끄는 4층 복합 공간입니다. 현재 콘셉트 및 착공 준비 단계에 있으며, 다음 시대를 함께 만들어갈 투자자와 브랜드의 비전 위에 세워집니다.',
      'vision.link': '층별 공간 둘러보기',

      /* ---- Home: floors ---- */
      'floor1.label': 'K-펀 & 트렌드 · 464㎡',
      'floor1.title': 'K-펀 & 트렌드 존',
      'floor1.quote': '"방문객을 안으로 이끄는 입구의 앵커 공간."',
      'floor1.body': '올리브영 스타일의 K-뷰티 허브, 감성 K-포토 스튜디오, 그리고 K-펀 & 액세서리: 인형뽑기, 프리미엄 굿즈, 캐릭터 액세서리가 어우러집니다.',
      'floor1.cap': 'K-펀 & 트렌드',
      'floor1.sub': '뷰티 허브, 포토 스튜디오, 캐릭터 상품',
      'floor2.label': 'K-뷰티 & 웰니스 · 592㎡',
      'floor2.title': 'K-뷰티 & 웰니스 존',
      'floor2.quote': '"온몸의 감각을 깨우는 여정."',
      'floor2.body': '헤어살롱, 네일아트, 마사지, 애터미 센터, 뷰티 부스, 코리안 다이소, 택배 서비스까지 한곳에 모여 한국 최고의 뷰티와 헬스케어를 경험하는 몰입형 공간입니다.',
      'floor2.cap': 'K-뷰티 & 웰니스',
      'floor2.sub': '살롱, 스파, 웰니스, 한국 생활용품',
      'floor3.label': 'K-푸드 & 드라마 · 595㎡',
      'floor3.title': 'K-푸드 & 드라마 존',
      'floor3.quote': '"내가 드라마의 주인공이 되는 순간."',
      'floor3.body': '중식, 일식, 라면, 치킨, 비빔밥, 한식, 삼겹살, 찌개 등 다양한 매장과 음료 바가 어우러진 푸드코트로, K-드라마 속 풍경에서 미식을 즐길 수 있습니다.',
      'floor3.cap': 'K-푸드 & 드라마',
      'floor3.sub': 'K-드라마 푸드코트 & 음료 바',
      'floor4.label': 'K-팝 엔터테인 · 498㎡',
      'floor4.title': 'K-팝 엔터테인 존',
      'floor4.quote': '"온 가족이 주인공이 되는 무대."',
      'floor4.body': '호프 파트너스 협회 사무실, 코리안 패밀리 KTV 노래방, 그리고 바와 루프데크로 이어지는 셀러브리티 라운지.',
      'floor4.cap': 'K-팝 엔터테인',
      'floor4.sub': 'KTV, 셀러브리티 라운지, 루프덱 무대',

      /* ---- Home: fork / stats / location ---- */
      'fork.title': '더 케이스퀘어에 참여하는 두 가지 방법',
      'fork.brands.title': '당신의 브랜드를 펼치세요',
      'fork.brands.body': '첫날부터 유동 인구를 끌어모으도록 설계된 4개의 테마 층에서 리테일, 뷰티, 푸드, 엔터테인먼트 공간을 임대하세요.',
      'fork.brands.link': '임대 알아보기',
      'fork.investors.title': '비전의 일부가 되세요',
      'fork.investors.body': '올롱가포 최초의 K-컬처 전문 복합 공간에 초기 단계부터 함께하는 투자 기회입니다.',
      'fork.investors.link': '투자 알아보기',
      'stats.floors': '테마 층',
      'stats.sqm': '총 면적(㎡)',
      'stats.phase.num': '1단계',
      'stats.phase.label': '착공 예정',
      'stats.place.num': '올롱가포',
      'stats.place.label': '막사이사이 거리',
      'location.title': '오시는 길',
      'location.address': 'R7GJ+QXG, 필리핀 잠발레스 올롱가포시 막사이사이 거리',

      /* ---- Leasing ---- */
      'leasing.title': '임대: 더 케이스퀘어',
      'leasing.hero.eyebrow': '임대',
      'leasing.hero.title': '더 케이스퀘어에 당신의 브랜드를',
      'leasing.hero.lead': '4개의 테마 층, 첫날부터 유동 인구를 끌어모으도록 설계된 하나의 복합 공간.',
      'leasing.floors.title': '층별 입점 가능 공간',
      'leasing.floors.lead': '각 층의 실제 설계 도면입니다. 앵커 및 인라인 위치에 대해 문의해 주세요.',
      'plan1.zone': '1F · K-펀 & 트렌드',
      'plan1.area': '464㎡',
      'plan1.body': 'K-뷰티 허브, K-포토 스튜디오, K-펀 & 액세서리. 유동 인구를 안으로 끌어들이는 입구 앵커 공간.',
      'plan1.cta': '1F 문의하기',
      'plan2.zone': '2F · K-뷰티 & 웰니스',
      'plan2.area': '592㎡',
      'plan2.body': '살롱, 네일아트, 마사지, 애터미 센터, 뷰티 부스, 코리안 다이소, 택배 서비스.',
      'plan2.cta': '2F 문의하기',
      'plan3.zone': '3F · K-푸드 & 드라마',
      'plan3.area': '595㎡',
      'plan3.body': 'K-드라마 속 풍경에서 즐기는 다양한 매장의 한식 푸드코트와 음료 바.',
      'plan3.cta': '3F 문의하기',
      'plan4.zone': '4F · K-팝 엔터테인',
      'plan4.area': '498㎡',
      'plan4.body': '사무실, 코리안 패밀리 KTV, 그리고 바와 루프데크로 이어지는 셀러브리티 라운지.',
      'plan4.cta': '4F 문의하기',
      'leasing.fit.title': '우리가 찾는 브랜드',
      'leasing.fit.lead': '더 케이스퀘어는 무작위로 채워지지 않습니다. 업종별로 신중하게 구성되며, 현재 4개 분야의 브랜드와 논의를 진행하고 있습니다.',
      'leasing.fit.tag1': 'K-뷰티 & 스킨케어',
      'leasing.fit.tag2': '웰니스 & 살롱',
      'leasing.fit.tag3': '식음료',
      'leasing.fit.tag4': '엔터테인먼트 & 라이프스타일',
      'leasing.fit.tag5': '리테일 & 캐릭터 굿즈',
      'leasing.how.title': '임대 진행 절차',
      'leasing.how1.title': '문의',
      'leasing.how1.body': '브랜드와 희망 층을 알려주세요. 임대팀이 며칠 내로 적합성을 검토합니다.',
      'leasing.how2.title': '현장 방문',
      'leasing.how2.body': '현장에서 도면을 직접 확인하고 면적, 전면부, 시공 조건을 논의합니다.',
      'leasing.how3.title': '임대 의향서',
      'leasing.how3.body': '정식 임대 계약에 앞서 조건을 서면으로 정리합니다.',
      'leasing.how4.title': '인테리어 시공 및 오픈',
      'leasing.how4.body': '개발 일정에 맞춰 공간을 시공하고, 복합 공간 오픈과 함께 문을 엽니다.',
      'cta.brochure': '브로슈어 다운로드',
      'cta.consult': '상담 예약',
      'leasing.inquiry.title': '임대 문의',
      'leasing.confirm': '감사합니다. 임대팀이 곧 연락드리겠습니다.',

      /* ---- Investing ---- */
      'investing.title': '더 케이스퀘어에 투자하기',
      'investing.hero.eyebrow': '투자',
      'investing.hero.title': '올롱가포 K-컬처 랜드마크에 투자하세요',
      'investing.hero.lead': '콘셉트 단계에 있는 4층 복합 공간, 창립 파트너를 기다립니다.',
      'investing.opp.title': '처음부터 함께 짓는 K-컬처 복합 공간',
      'investing.opp.body': '더 케이스퀘어는 필리핀 잠발레스 올롱가포시 막사이사이 거리(R7GJ+QXG)에 들어서는 상업 복합 개발 프로젝트로, 한국의 리테일, 뷰티, 푸드, 엔터테인먼트를 한곳에 담아냅니다. 콘셉트 및 착공 준비 단계에 있어, 초기 투자자가 처음부터 프로젝트를 함께 만들어갈 수 있습니다.',
      'investing.why.title': '초기 투자를 권하는 이유',
      'investing.why1.title': '시장 선점',
      'investing.why1.body': '더 케이스퀘어는 올롱가포-잠발레스 지역에서 한국의 리테일, 뷰티, 푸드, 엔터테인먼트를 중심으로 조성되는 최초의 복합 개발 프로젝트로, 지역 내 직접적인 경쟁 시설이 없습니다.',
      'investing.why2.title': '4개의 독립적인 수익 층',
      'investing.why2.body': '리테일, 웰니스, 식음료, 엔터테인먼트가 각각 독립된 임대 층으로 운영되어, 수익이 하나의 업종이 아닌 4개의 서로 다른 업종에 분산됩니다.',
      'investing.why3.title': '초기 단계의 진입 조건',
      'investing.why3.body': '프로젝트는 아직 콘셉트 및 착공 준비 단계에 있습니다. 지금 참여하는 투자자와 앵커 테넌트는 착공 이후 책정될 가격과 주변 시장 상승 이전 단계에서 진입하게 됩니다.',
      'investing.snapshot.title': '개발 개요',
      'investing.stats.floors': '수익 층',
      'investing.stats.phase.label': '콘셉트 단계',
      'investing.tl1.title': '콘셉트 및 설계',
      'investing.tl1.body': '4개 층 전체의 건축 및 인테리어 콘셉트를 확정하는 단계입니다.',
      'investing.tl2.title': '착공 준비',
      'investing.tl2.body': '인허가, 엔지니어링, 앵커 테넌트 계약이 진행 중입니다.',
      'investing.tl3.title': '착공',
      'investing.tl3.body': '부지 정비와 본격적인 건축 공사가 시작됩니다.',
      'investing.tl4.title': '그랜드 오픈',
      'investing.tl4.body': '4개 층 전체가 일반에 공개됩니다.',
      'investing.tiers.title': '파트너십 패키지',
      'investing.tiers.lead': '고정 우선 배당이 제공되는 3가지 임대 수익형 투자 패키지입니다.',
      'tier.platinum.name': '플래티넘 파트너',
      'tier.platinum.rate': '연 12.0% 고정 우선 배당',
      'tier.platinum.b1': '주주명부 등재 및 우선주 지분 10%',
      'tier.platinum.b2': '전대 임대료 상승 시 최대 5.0% 변동 보너스 배당',
      'tier.platinum.b3': '2차 개발 부지 상업시설 우선 매수·임차권',
      'tier.gold.name': '골드 파트너',
      'tier.gold.rate': '연 10.0% 고정 우선 배당',
      'tier.gold.b1': '주주명부 등재 및 우선주 지분 3%',
      'tier.gold.b2': '전대 임대료 상승 시 최대 2.5% 변동 보너스 배당',
      'tier.gold.b3': '2차 개발 부지 상업시설 우선 매수·임차권',
      'tier.silver.name': '실버 파트너',
      'tier.silver.rate': '연 9.0% 고정 우선 배당',
      'tier.silver.b1': '안정적인 원금 회수와 자본 이득에 집중한 모델',
      'tier.silver.b2': '원금 회수 후에도 지급되는 잔여 프리미엄 배당',
      'tier.silver.b3': '케이스퀘어 VIP 할인 카드 제공',
      'investing.tiers.note': '요약 조건입니다. 투자 약정 기간은 3년 기준이며, 원금은 5년 이내에 상환됩니다. 전체 조건과 기업 가치 평가, 재무 시나리오는 브로슈어와 상담을 통해 안내드립니다.',
      'investing.recovery.title': '투자금은 이렇게 돌아옵니다',
      'investing.rec1.mark': '1~3년 차',
      'investing.rec1.title': '배당 단계',
      'investing.rec1.body': '계약된 지분 비율에 따라 순 임대 수익에서 매월 배당금이 지급됩니다.',
      'investing.rec2.mark': '3~5년 차',
      'investing.rec2.title': '원금 상환 단계',
      'investing.rec2.body': '분할 또는 일시 상환으로 투자 원금 회수가 완료됩니다.',
      'investing.rec3.mark': '5년 차 이후',
      'investing.rec3.title': '수익 단계',
      'investing.rec3.body': '원금이 전액 회수된 이후에도 5년간 프리미엄 배당이 이어집니다.',
      'investing.mix.title': '네 개의 층, 하나의 주소',
      'investing.mix.quote': '"하나의 지붕, 네 개의 수익원, 그리고 임대와 투자가 만나는 하나의 주소."',
      'investing.inquiry.title': '투자 문의',
      'investing.confirm': '감사합니다. 투자팀이 곧 연락드리겠습니다.',

      /* ---- Contact ---- */
      'contact.title': '문의: 더 케이스퀘어',
      'contact.hero.eyebrow': '문의',
      'contact.hero.title': '연락하기',
      'contact.hero.lead': '더 케이스퀘어가 궁금하신가요? 문의를 남겨 주시면 팀이 회신드리겠습니다.',
      'contact.visit': '오시는 길',
      'contact.address': 'R7GJ+QXG, 필리핀 잠발레스 올롱가포시 막사이사이 거리',
      'contact.contact': '연락처',
      'contact.details': 'hello@thek-square.ph · +63 977 243 8333',
      'contact.office': '사무실',
      'contact.office.address': '필리핀 수빅베이 자유무역지대 C.B.D 지역 리잘 하이웨이 타임스퀘어 빌딩 리테일 #31, Lot 5',
      'contact.confirm': '문의해 주셔서 감사합니다. 곧 회신드리겠습니다.',

      /* ---- Forms (shared) ---- */
      'form.name': '이름',
      'form.company': '회사 / 브랜드',
      'form.organization': '기관',
      'form.email': '이메일',
      'form.phone': '전화',
      'form.message': '메시지',
      'form.floor': '희망 층',
      'form.floor.select': '층을 선택하세요',
      'form.floor.1f': '1F, K-펀 & 트렌드 존',
      'form.floor.2f': '2F, K-뷰티 & 웰니스 존',
      'form.floor.3f': '3F, K-푸드 & 드라마 존',
      'form.floor.4f': '4F, K-팝 엔터테인 존',
      'form.interest': '투자 관심 분야',
      'form.interest.select': '관심 분야를 선택하세요',
      'form.interest.equity': '지분 투자',
      'form.interest.anchor': '앵커 테넌트 파트너십',
      'form.interest.other': '기타',
      'form.send.inquiry': '문의 보내기',
      'form.send.message': '메시지 보내기',
      'form.error.required': '필수 입력 항목입니다.',
      'form.error.email': '올바른 이메일 주소를 입력하세요.',
      'form.error.submit': '문제가 발생했습니다. 다시 시도하시거나 이메일로 직접 문의해 주세요.'
    }
  };

  function getLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved && translations[saved]) return saved;
    } catch (e) {}
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function applyLang(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];
    document.documentElement.setAttribute('lang', lang);

    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        nodes[i].textContent = dict[key];
      }
    }

    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      var next = lang === 'en' ? 'ko' : 'en';
      toggle.textContent = next === 'ko' ? '한국어' : 'English';
      toggle.setAttribute('aria-label', next === 'ko' ? '한국어로 보기' : 'View in English');
      toggle.setAttribute('data-lang-next', next);
    }
  }

  /* Expose the active dictionary for forms.js (validation messages). */
  window.ksqI18n = {
    t: function (key) {
      var dict = translations[getLang()] || translations[DEFAULT_LANG];
      return Object.prototype.hasOwnProperty.call(dict, key) ? dict[key] : key;
    },
    lang: getLang
  };

  function init() {
    applyLang(getLang());
    var toggle = document.getElementById('lang-toggle');
    if (toggle) {
      toggle.addEventListener('click', function () {
        var next = toggle.getAttribute('data-lang-next') || 'ko';
        saveLang(next);
        applyLang(next);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
