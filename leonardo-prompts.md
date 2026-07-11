# SILLAGE — Leonardo AI Image Prompts

Art direction chung cho MỌI ảnh (để bộ ảnh nhất quán như một buổi chụp):
nền warm near-black `#131013`, ánh sáng amber rim light, khói/hơi mỏng,
film grain nhẹ, không màu lạnh xanh dương, không trắng sáng lóa.

**Model gợi ý:** Leonardo Phoenix hoặc Kino XL (cinematic).
**Chung cho mọi prompt — Negative prompt:**

```
text, watermark, logo, label with readable text, bright white background,
blue tones, oversaturated, cluttered, plastic look, cartoon, illustration,
extra bottles, hands, faces
```

> Lưu ý Barrierefreiheit khi dùng ảnh: mỗi ảnh nội dung cần `alt` như ghi
> chú bên dưới; ảnh trang trí thuần túy dùng `alt=""` + `aria-hidden`.
> Nếu đặt chữ đè lên ảnh, thêm overlay gradient tối để giữ contrast ≥ 4.5:1.

---

## 1. Hero atmosphere plate (nền hero, sau flacon)

**Vị trí:** lớp nền hero, opacity thấp (~35%), che bằng gradient hai cạnh.
**Tỷ lệ:** 16:9, độ phân giải cao nhất có thể (dùng 2× upscale của Leonardo).

```
Cinematic macro photography of thin incense smoke curling slowly in complete
darkness, single warm amber backlight from the right, wisps forming soft
sillage trails, deep warm charcoal black background #131013, subtle film
grain, large empty negative space on the left side for typography, premium
perfume campaign, shallow depth of field, 85mm lens look
```

**Alt:** `""` (trang trí — đã có headline mang nội dung)

---

## 2. OMBRE mood (card / trang chi tiết)

**Tỷ lệ:** 4:5

```
Dark still life editorial photography for a smoky iris perfume: dried iris
petals, a strip of dark leather, faint incense smoke, muted violet-grey haze
#A78FBF drifting through warm darkness, single low amber side light, deep
warm black background, film grain, moody chiaroscuro, premium fragrance
campaign, negative space at top
```

**Alt:** `Dried iris petals and dark leather in violet-grey smoke — the mood of OMBRE`

---

## 3. AUBE mood (card / trang chi tiết)

**Tỷ lệ:** 4:5

```
Editorial still life at first light: pale dawn sunbeam through frosted glass,
soft apricot-amber haze #D9A05E, fresh bergamot peel and delicate mimosa
sprigs on dark stone, long soft shadows, warm near-black surroundings,
quiet minimal composition, film grain, premium fragrance campaign
```

**Alt:** `Bergamot peel and mimosa in pale dawn light — the mood of AUBE`

---

## 4. VERTIGE mood (card / trang chi tiết)

**Tỷ lệ:** 4:5

```
Botanical noir photography: large fig leaf and galbanum stems casting sharp
shadowplay on a dark wall, deep muted green haze #93B08A, dew droplets,
single hard light from above, warm black background, vertiginous diagonal
composition, film grain, premium green fragrance campaign
```

**Alt:** `Fig leaf shadows in deep green haze — the mood of VERTIGE`

---

## 5. Maison / Atelier (section La maison)

**Tỷ lệ:** 3:2

```
Documentary photography inside a small Berlin perfume atelier at dusk: glass
maceration jars and amber liquid catching the last window light from a large
Altbau window, pipettes and handwritten formula cards on a dark wooden
workbench, quiet and unstaged, warm shadows, muted tones, film grain,
no people visible
```

**Alt:** `Maceration jars and pipettes on a workbench in the Berlin atelier at dusk`

---

## 6. Material index macros (6 ô vuông nhỏ cạnh danh sách nguyên liệu)

**Tỷ lệ:** 1:1 — chạy prompt 6 lần, thay `[MATERIAL]`:
orris root / vetiver roots / ambrette seeds / galbanum resin /
smoked lapsang tea leaves / vegetable-tanned leather

```
Extreme macro photography of [MATERIAL] on dark charcoal linen fabric,
single warm amber spotlight, rich texture detail, deep warm black
surroundings #131013, museum specimen aesthetic, film grain, premium
raw material documentation
```

**Alt (ví dụ):** `Orris root — raw material macro`

---

## Ghi chú tích hợp

- Xuất WebP/AVIF, `loading="lazy"` cho mọi ảnh dưới fold, `width`/`height`
  attribute để tránh layout shift (CLS).
- Ảnh mood 4:5 nên đặt trong card với `object-cover` + một lớp
  `bg-gradient-to-t from-smoke/80` ở đáy nếu có text đè.
- Giữ ảnh cùng "nhiệt độ màu" — nếu một ảnh ra lạnh, chạy lại thay vì
  ép bằng CSS filter.
