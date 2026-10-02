# 🔍 AUDITORÍA COMPLETA: MÓDULOS Y PLANES

## 📋 RESUMEN EJECUTIVO

### PROBLEMAS ENCONTRADOS:
1. ❌ **Iconos no profesionales**: Se usan ✅ y ❌ en tabla comparativa
2. ⚠️ **Inconsistencia entre PlanBuilder y extraModules**
3. ⚠️ **Módulos duplicados**: Algunos están en pricing-page.ts pero no en PlanBuilder
4. ⚠️ **Falta claridad**: "Multi-sede" está en extraModules pero es exclusivo Elite

---

## 📊 PLANES DISPONIBLES

### 🌐 PLAN WEB
- **Tipo**: Web corporativa (pago único)
- **Precio**: 890 € (setup único)
- **Incluye**:
  - Diseño responsive orientado a clínicas
  - Hasta 5 secciones clave + legales
  - Formularios y enlace a WhatsApp / citas
  - SEO técnico base
  - 1 ronda de revisiones incluida

---

### 💼 PLAN GESTIÓN (Software)
- **Precio**: 49 €/mes (529 € anual)
- **Incluye**:
  - Agenda inteligente
  - Base de datos de pacientes
  - Historias clínicas completas
  - Facturación básica
  - Cierres de caja
  - Soporte técnico

**Módulos disponibles como extras**:
- ✅ Citas Online (+10€/mes)
- ✅ WhatsApp Business (+20€/mes)
- ✅ Portal del Paciente (+20€/mes)
- ✅ Pack Marketing (+15€/mes)
- ✅ Ventas y Retención (+10€/mes)
- ❌ **Venta de Productos** (NO disponible)

**Lo que NO incluye** (disponibles en planes superiores):
- Firma Digital Biométrica (solo en 360 y Elite)
- Bóveda Fotográfica (solo en 360 y Elite)
- Inventario avanzado (solo en 360 y Elite)
- Módulo Fiscal AEAT (solo en 360 y Elite)
- Multi-sede (solo en Elite)

---

### 🏥 PLAN CLÍNICA 360 (Software) ⭐ RECOMENDADO
- **Precio**: 89 €/mes (961 € anual)
- **Incluye TODO del Plan Gestión +**:
  - ✅ **Consentimientos con Firma Digital** (ya incluido)
  - ✅ **Bóveda fotográfica Antes/Después** (ya incluido)
  - Inventario y Trazabilidad de lotes
  - Módulo Fiscal AEAT (130, 303, 115)
  - Análisis Financiero avanzado
  - Soporte prioritario

**Módulos disponibles como extras**:
- ✅ Citas Online (+10€/mes)
- ✅ WhatsApp Business (+20€/mes)
- ✅ Portal del Paciente (+20€/mes)
- ✅ **Venta de Productos (+5€/mes)** ← Ahora SÍ disponible
- ✅ Pack Marketing (+15€/mes)
- ✅ Ventas y Retención (+10€/mes)

---

### 👑 PLAN ELITE (Software)
- **Precio**: 179 €/mes (1.933 € anual)
- **Incluye TODO del Plan Clínica 360 +**:
  - ✅ Multi-sede con métricas consolidadas
  - ✅ **TODOS los módulos incluidos** (WhatsApp, Portal, Marketing, Venta Productos)
  - ✅ Consultoría mensual estratégica
  - Implementación prioritaria dedicada
  - Soporte 24/7 con respuesta < 2h
  - Roadmap personalizado

**Módulos que YA incluye (sin coste extra)**:
- Citas Online (incluido)
- WhatsApp Business (incluido)
- Portal del Paciente (incluido)
- Venta de Productos (incluido)
- Pack Marketing (incluido)
- Ventas y Retención (incluido)

---

## 🧩 MÓDULOS WEB (Extras opcionales para Plan Web)

| Módulo | Precio | Descripción |
|--------|--------|-------------|
| SEO Avanzado + Blog | 250 € setup | Optimización on-page + blog para posicionar |
| Mantenimiento Web | 20 €/mes | Actualizaciones, seguridad, respaldos |
| Marketplace / Catálogo | 150 € setup | Catálogo de servicios y productos |
| E-commerce Completo | 30 €/mes + 200 € setup | Tienda online con control de inventario |
| Gestor de Contenidos | 100 € setup | Blog optimizado para SEO |

**Disponibilidad**: Se pueden contratar con cualquier plan web.

---

## 🧩 MÓDULOS SOFTWARE (Extras opcionales)

### En PlanBuilder (Constructor interactivo):

| ID | Nombre | Precio | Plan Gestión | Plan 360 | Plan Elite |
|----|--------|--------|--------------|----------|------------|
| citas-online | Citas Online | 10 €/mes | Extra | Extra | ✅ Incluido |
| whatsapp | WhatsApp Business | 20 €/mes | Extra | Extra | ✅ Incluido |
| portal | Portal del Paciente | 20 €/mes | Extra | Extra | ✅ Incluido |
| venta-productos | Venta de Productos | 5 €/mes | ❌ NO | Extra | ✅ Incluido |
| marketing | Pack Marketing | 15 €/mes | Extra | Extra | ✅ Incluido |
| ventas-retencion | Ventas y Retención | 10 €/mes | Extra | Extra | ✅ Incluido |

### En extraModules (pricing-page.ts) pero NO en PlanBuilder:

| ID | Nombre | Precio | Notas |
|----|--------|--------|-------|
| multi-sede | Multi-sede | a medida | ⚠️ Solo Elite, no es extra |

---

## ❌ INCONSISTENCIAS DETECTADAS

### 1. **Multi-sede en lista de extras**
- ❌ **Problema**: Aparece en `extraModules` de pricing-page.ts
- ✅ **Solución**: NO debería estar ahí, es exclusivo del Plan Elite (no se puede comprar como extra)

### 2. **Módulos Web no aparecen en constructor**
- ✅ **Correcto**: Los módulos web solo se muestran bajo el precio del Plan Web en `/precios`
- ✅ **No necesitan** estar en el constructor interactivo

### 3. **Firma Digital y Bóveda Fotográfica**
- ✅ **Correcto**: Ya NO aparecen en extraModules
- ✅ **Correcto**: Están incluidos automáticamente en Plan 360 y Elite
- ✅ **Correcto**: Se mencionan en la tabla comparativa

### 4. **Iconos ✅ ❌ en tabla comparativa**
- ❌ **Problema**: No son profesionales
- ✅ **Solución propuesta**: Cambiar a "Incluido" / "No incluido" o usar checkmarks SVG

---

## 📝 RECOMENDACIONES

### 1. Cambiar iconos en tabla comparativa:
```
❌ ANTES: ✅ / ❌
✅ DESPUÉS: "Incluido" / "—" / "Extra"
```

### 2. Eliminar Multi-sede de extraModules:
- Es exclusivo de Plan Elite
- No se puede comprar como extra
- Solo mencionarlo en descripción del plan

### 3. Clarificar precios de "Venta de Productos":
- Plan Gestión: "No disponible"
- Plan 360: "5 €/mes extra"
- Plan Elite: "Incluido"

### 4. Sincronizar descripciones:
- Asegurar que PlanBuilder y extraModules usan los mismos textos
- Verificar que i18n (es.ts) coincide con pricing-page.ts

---

## ✅ VALIDACIÓN FINAL

### Constructor Interactivo (PlanBuilder):
```
✅ 6 módulos de software
✅ Venta de Productos deshabilitado en Plan Gestión
✅ Todos los módulos seleccionables en Plan 360
✅ Todos incluidos en Plan Elite
```

### Sección de Módulos (/precios):
```
✅ 5 módulos web bajo Plan Web
✅ NO aparecen módulos de software duplicados
✅ Descripciones completas y claras
```

### Tabla Comparativa:
```
⚠️ Usar ✅/❌ → Cambiar a texto profesional
✅ 3 columnas (Gestión, 360, Elite)
✅ Todas las features listadas correctamente
```

---

## 🎯 ACCIONES REQUERIDAS

1. **URGENTE**: Cambiar ✅/❌ por texto profesional
2. **IMPORTANTE**: Eliminar "Multi-sede" de extraModules
3. **RECOMENDADO**: Unificar descripciones entre PlanBuilder y pricing-page
4. **NICE TO HAVE**: Agregar iconos SVG profesionales en lugar de emojis

---

**Fecha de auditoría**: 2 Octubre 2026
**Estado**: ⚠️ Requiere ajustes menores antes de publicar
