# Propuesta: Rediseño total estilo Odoo — Base Clínica

> **Flujo acordado:** versión local → validación → PRE → PRO  
> **Rama de trabajo:** `cursor/odoo-redesign-3b0c`  
> **No se publica en `main` ni PRE** hasta tu OK.

---

## 1. Qué copiamos de Odoo (y qué no)

### Sí (estructura UX + lenguaje visual)
| Patrón Odoo | Adaptación Base Clínica |
|---|---|
| Hero enorme + precio único por “todas las apps” | Hero: “Una plataforma. Todos los módulos.” + precio ancla (ej. desde 49€/mes) |
| Grid de apps con iconos de color | Grid de módulos clínicos (Agenda, Historia, Firma, Stock, AEAT, WhatsApp…) |
| Mensaje “todo en una plataforma” | Sustituye Excel + WhatsApp + carpetas + gestoría |
| Precios simples: gratis / estándar / custom | Web · Gestión · Clínica 360 · Elite (misma lógica de contraste) |
| Tipografía limpia, sans geométrica, mucho aire | Fuente tipo SaaS (Plus Jakarta Sans), blancos, menos “editorial Indisea” |
| CTAs claros, pocos elementos en hero | Marca + 1 headline + 1 frase + 1–2 CTAs + grid apps |
| FAQ de precios transparente | FAQ Odoo-style en `/precios` |

### No (identidad propia)
- No usamos el morado corporativo de Odoo (#714B67): mantenemos **azul Base Clínica** como acento.
- No copiamos textos ni marcas de Odoo.
- No prometemos “todas las apps por 24,90€” si nuestro modelo es por plan; sí comunicamos **claridad de precio** y **módulos unificados**.

---

## 2. Nueva arquitectura de página (Home)

```
[Navbar limpia: logo | Apps | Precios | Contacto | CTA]
[Hero Odoo-style]
  · Headline grande
  · Sub: precio ancla + “todas las funciones del plan”
  · CTA primario + secundario
  · Grid de módulos (apps) debajo del hero
[Bloque “Una sola plataforma”]
  · 3 columnas: Captación → Gestión → Cumplimiento
[Bloque productividad]
  · Screenshot ERP grande (como Odoo muestra UI)
[Bloque precios resumido]
  · 3 cards: Gestión / 360 / Elite + link a /precios
[Prueba social / KPIs]
[CTA final + Footer]
```

`/precios` se rediseña al estilo Odoo Pricing:
- Headline tipo “No estás soñando” → “Todo el software. Un precio claro.”
- Tabla/comparativa limpia
- Módulos extras como “apps add-on”
- FAQ de precios

---

## 3. Sistema visual propuesto

| Token | Antes (Indisea) | Nuevo (Odoo-like) |
|---|---|---|
| Fondo | Crema `#f2f0ea` | Blanco `#ffffff` + grises suaves `#f8f9fa` |
| Texto | Negro editorial | `#212529` / muted `#6c757d` |
| Brand | Cyan `#3bbff7` | Se mantiene como acento primario |
| Display | Bricolage Grotesque | Plus Jakarta Sans (display + body) |
| Botones | Pill redondeado | Rectangular suave (radius 4–8px) estilo Odoo |
| Cards | Mucha sombra/gradiente | Bordes finos, sombra mínima |
| Decoración | BluePath, blurs | Eliminados en esta versión |

---

## 4. Grid de módulos (apps) — primera propuesta

Cada celda: icono colorido + nombre corto (como Odoo).

**Núcleo (incluidos según plan):**
1. Agenda · 2. Pacientes · 3. Historia clínica · 4. Facturación · 5. Caja · 6. Stock  
7. Firma digital · 8. Bóveda fotográfica · 9. Fiscal AEAT · 10. Informes

**Add-ons:**
11. Citas online · 12. WhatsApp · 13. Portal paciente · 14. Venta productos · 15. Marketing · 16. Multi-sede

---

## 5. Plan de implementación (pasos)

| Paso | Qué | Dónde |
|---|---|---|
| **A — Local (ahora)** | Nueva landing Odoo-style + CSS + tipografía | Rama `cursor/odoo-redesign-3b0c` |
| **B — Validación** | Tú: `git checkout` + `npm run dev` | Solo local |
| **C — PRE** | Merge a `develop` / preview Vercel | Cuando digas OK |
| **D — PRO** | Merge a `main` | Solo cuando digas OK |

---

## 6. Criterios de éxito

1. Primer viewport = marca + headline + precio/propuesta + grid apps (sin dashboard de clutter).
2. Se entiende en 5 segundos: “todo el software de la clínica en un sitio”.
3. Precios legibles sin emojis de check/cruz; tipografía limpia.
4. Misma oferta comercial actual (49 / 89 / 179 + web + extras), distinta presentación.
5. Mobile: grid de apps 3–4 columnas; desktop 6–8.

---

## 7. Riesgos

- Rediseño total = muchos componentes tocados; por eso **no tocamos main**.
- Si prefieres preview en ruta `/preview-odoo` en vez de sustituir la home, se puede hacer en 5 min.

---

**Siguiente acción inmediata:** implementar Paso A (versión local) sustituyendo la home por el shell estilo Odoo, sin push a `main`/`develop`.
