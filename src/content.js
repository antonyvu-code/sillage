// ── SILLAGE — toàn bộ copy của trang nằm ở đây ──────────────────
// Concept: sillage = vệt hương còn lại sau khi bạn rời đi.
// Storytelling: cả trang là MỘT BUỔI TỐI kể bằng mùi hương —
// mỗi section một chương, có timestamp nối tiếp nhau:
// 18:47 thay đồ → 18:56 hai lần xịt → 19:00–23:00 hương sống trên
// da → flashback sáu tuần trước ở atelier → 00:14 épilogue.

export const content = {
  brand: 'SILLAGE',

  nav: [
    { label: 'Collection', href: '#collection' },
    { label: 'The Trail', href: '#trail' },
    { label: 'Maison', href: '#maison' },
  ],
  navCta: { label: 'Find your scent', href: '#collection' },

  hero: {
    eyebrow: 'Maison de parfum · Berlin',
    headline: ['The part of you', 'that stays.'],
    italicWord: 'stays.',
    sub: 'Sillage is the trail a fragrance leaves in the air. This is one evening, told in scent — scroll, and wear it hour by hour.',
    cta: { label: 'Explore the collection', href: '#collection' },
    hint: 'Scroll — the evening begins',
  },

  manifesto: {
    scene: {
      chapter: 'Prologue',
      time: '18:47',
      text: 'You’re getting dressed. The night hasn’t decided what it will be yet.',
    },
    lines: ['A perfume is not', 'worn for yourself.', 'It’s for the room', 'you leave behind.'],
    note: 'Macerated six weeks. Bottled only when it lingers.',
  },

  collection: {
    scene: {
      chapter: 'Chapitre I',
      time: '18:56',
      text: 'Two sprays on the collarbone. Choose who comes with you tonight.',
    },
    title: 'Three ways to linger',
    noteLabels: { tete: 'Tête', coeur: 'Cœur', fond: 'Fond' },
    scents: [
      {
        no: 'No. 01',
        name: 'AUBE',
        tagline: 'dawn, before anyone speaks',
        accent: '#D9A05E',
        notes: {
          tete: 'bergamot, pink pepper',
          coeur: 'orris, mimosa',
          fond: 'white musk, cedar',
        },
        size: '50 ml',
        price: '€120',
      },
      {
        no: 'No. 02',
        name: 'VERTIGE',
        tagline: 'green enough to make you dizzy',
        accent: '#93B08A',
        notes: {
          tete: 'galbanum, fig leaf',
          coeur: 'violet leaf, cypress',
          fond: 'vetiver, oakmoss',
        },
        size: '50 ml',
        price: '€120',
      },
      {
        no: 'No. 03',
        name: 'OMBRE',
        tagline: 'the shadow that follows you out',
        accent: '#A78FBF',
        notes: {
          tete: 'smoked tea, saffron',
          coeur: 'iris, incense',
          fond: 'leather, amber, vetiver',
        },
        size: '50 ml',
        price: '€135',
      },
    ],
  },

  trail: {
    scene: {
      chapter: 'Chapitre II',
      time: '19:00 – 23:00',
      text: 'The city does its part. Your skin does the rest.',
    },
    title: 'Four hours of OMBRE',
    sub: 'Scroll slowly. This is the scent as your skin wears it.',
    // in/out: khoảng tiến trình scroll (0→1) mà phase hiện diện.
    // Fond có out > 1 vì base notes không bao giờ biến mất — đó chính là sillage.
    phases: [
      {
        label: 'Tête',
        time: 'the first 20 minutes',
        notes: ['smoked tea', 'saffron'],
        in: 0.0,
        out: 0.38,
      },
      {
        label: 'Cœur',
        time: '20 minutes to 2 hours',
        notes: ['iris', 'incense'],
        in: 0.3,
        out: 0.72,
      },
      {
        label: 'Fond',
        time: '2 hours — and after you’re gone',
        notes: ['leather', 'amber', 'vetiver'],
        in: 0.64,
        out: 1.2,
      },
    ],
    endLine: 'What’s left at 23:00 is the sillage.',
  },

  maison: {
    scene: {
      chapter: 'Chapitre III',
      time: 'six weeks earlier',
      text: 'Every evening begins long before it starts — in maceration tanks in Wedding.',
    },
    title: 'Slow by design',
    body: [
      'Sillage is a two-person atelier in Berlin-Wedding. Each formula is macerated for six weeks, chilled, filtered and rested — then bottled by hand in batches of two hundred flacons.',
      'We list every raw material we use. If it doesn’t linger, it doesn’t leave the atelier.',
    ],
    materialsTitle: 'From the material index',
    materials: [
      { name: 'Orris butter', origin: 'Firenze, Italy' },
      { name: 'Vetiver', origin: 'Les Cayes, Haiti' },
      { name: 'Ambrette seed', origin: 'Kerala, India' },
      { name: 'Galbanum', origin: 'Zagros, Iran' },
      { name: 'Smoked lapsang', origin: 'Fujian, China' },
      { name: 'Leather accord', origin: 'our atelier, Berlin' },
    ],
  },

  footer: {
    scene: {
      chapter: 'Épilogue',
      time: '00:14',
      text: 'You’ve gone. The room is still deciding whether to forget you.',
    },
    ctaTitle: 'Find your scent',
    ctaBody:
      'Order the discovery set — three 2 ml sprays, credited in full against your first flacon.',
    ctaLabel: 'Order the discovery set',
    contact: 'atelier@maison-sillage.com',
    address: 'Gerichtstraße 23 · 13347 Berlin',
    legal: '© 2026 Sillage Parfums',
  },
}
