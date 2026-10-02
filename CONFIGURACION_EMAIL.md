# Configuración del Sistema de Email - Calculadora ROI

## 📧 Cómo funciona

Cuando un usuario solicita el informe personalizado desde la calculadora en el Hero:

1. El usuario mueve el slider para calcular su ROI según sus pacientes semanales
2. Los números se actualizan en tiempo real tanto en el calculador como en la sección "Lo que estás perdiendo AHORA"
3. Al hacer clic en "Envíame el informe completo detallado", se muestra un formulario de email
4. Al enviar el email, se dispara un envío a través de **Web3Forms**
5. El usuario recibe un email detallado con:
   - Sus datos calculados personalizados
   - Desglose de tiempo perdido (semana/mes/año)
   - Coste de oportunidad en euros
   - Pacientes adicionales que podría atender
   - Cómo Base Clínica recupera ese tiempo (con ahorro específico por módulo)
   - Próximos pasos (demo, prueba gratis, implementación)

## 🔧 Configuración de Web3Forms

### 1. Crear cuenta en Web3Forms

1. Ve a https://web3forms.com
2. Regístrate con tu email (gratis hasta 250 envíos/mes)
3. Crea un nuevo formulario
4. Copia tu **Access Key**

### 2. Configurar la variable de entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```bash
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=tu_access_key_aqui
```

⚠️ **IMPORTANTE**: 
- El Access Key debe empezar por `NEXT_PUBLIC_` para estar disponible en el cliente
- **NO** subas el archivo `.env.local` a Git (ya está en `.gitignore`)
- En producción (Vercel/hosting), configura esta variable en el dashboard

### 3. Verificar en producción

Para Vercel:
1. Ve a tu proyecto en Vercel Dashboard
2. Settings > Environment Variables
3. Añade `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` con tu key
4. Marca las opciones: Production, Preview, Development
5. Redeploy el proyecto

## 📊 Contenido del email

El email incluye:

### Datos personalizados:
- Número de pacientes semanales
- Horas perdidas (semana/mes/año)
- Coste de oportunidad (mes/año)
- Pacientes adicionales que podría atender

### Módulos de automatización:
- ✅ Automatización de citas (~4h/semana)
- ✅ Gestión documental (~3h/semana)
- ✅ Facturación automática (~2.5h/semana)
- ✅ Firma digital (~1.5h/semana)
- ✅ Gestión de stock (~1h/semana)
- ✅ Reporting automático (~1.5h/semana)

### CTAs:
- Link a demo personalizada
- Link a prueba gratis
- Link a página de precios

## 🔄 Sincronización de datos

Los valores calculados se comparten entre componentes usando **React Context**:

- `CalculatorContext` almacena el estado global
- `TimeCalculator` (Hero) actualiza los valores al mover el slider
- `LossAversionSection` consume esos valores y se actualiza automáticamente

### Archivos involucrados:
- `/src/contexts/CalculatorContext.tsx` - Contexto compartido
- `/src/components/interactive/TimeCalculator.tsx` - Calculador + form email
- `/src/components/sections/LossAversionSection.tsx` - Tarjetas de pérdidas
- `/src/components/landing/LandingPageShell.tsx` - Provider que envuelve todo

## 🎨 Personalización

Para modificar el contenido del email, edita el `message` en:
```
/src/components/interactive/TimeCalculator.tsx
```

Línea ~28-110 aproximadamente, dentro de `handleSubmit`.

## 🧪 Testing

Para probar localmente:

1. Asegúrate de tener el `.env.local` configurado
2. Ejecuta `npm run dev`
3. Ve a `http://localhost:3000`
4. Mueve el slider en el Hero
5. Verifica que los números cambian en "Lo que estás perdiendo AHORA"
6. Haz clic en "Envíame el informe completo detallado"
7. Introduce un email de prueba
8. Verifica que recibes el email con los datos correctos

## 📝 Notas

- El servicio es gratuito hasta 250 emails/mes
- Si necesitas más volumen, considera upgradar Web3Forms o migrar a Resend/SendGrid
- El email se envía como texto plano (puedes mejorarlo con HTML si quieres)
- Los datos sensibles (access key) están en variables de entorno, no en el código
