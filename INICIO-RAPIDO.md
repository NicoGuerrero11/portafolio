# 🚀 GUÍA DE INICIO RÁPIDO - VS Code

## 📥 Paso 1: Descargar el proyecto

1. **Descarga la carpeta completa** `portafolio-astro` (desde arriba)
2. **Descomprime** si es necesario
3. **Mueve** la carpeta a donde quieras trabajar (ej: `~/Proyectos/`)

---

## 💻 Paso 2: Abrir en VS Code

### Opción A: Desde VS Code
1. Abre **Visual Studio Code**
2. **File → Open Folder** (o `Cmd + O` en Mac)
3. Selecciona la carpeta `portafolio-astro`
4. Click **Open**

### Opción B: Desde Terminal
```bash
cd /ruta/a/portafolio-astro
code .
```

---

## 📦 Paso 3: Instalar dependencias

Abre la **terminal integrada** en VS Code:
- **Mac:** `Cmd + J` o `` Ctrl + ` ``
- **Windows:** `` Ctrl + ` ``

Luego ejecuta:

```bash
npm install
```

Esto instalará Astro y todas las dependencias necesarias.

**⏱️ Tiempo:** ~1-2 minutos

---

## 🎬 Paso 4: Iniciar el servidor

```bash
npm run dev
```

Verás algo como:
```
🚀 astro v4.0.0 ready in 245 ms

┃ Local    http://localhost:4321/
┃ Network  use --host to expose

watching for file changes...
```

**Abre tu navegador** en: **http://localhost:4321**

¡Tu portafolio ya está corriendo! 🎉

---

## ✏️ Paso 5: Personalizar

### 1️⃣ Cambia tu nombre y datos

**Archivo:** `src/components/Hero.astro`

```astro
// Línea ~8
<h1>
    Hola, soy <span class="gradient-text">Nico Guerrero</span>
</h1>

// Línea ~15
<a href="https://github.com/NicoGuerrero11" ...>

// Línea ~23
<a href="https://linkedin.com/in/tu-perfil" ...>

// Línea ~31
<a href="mailto:tu@email.com">
```

**💾 Guarda** (`Cmd + S` / `Ctrl + S`)

El navegador se **actualizará automáticamente** ✨

---

### 2️⃣ Actualiza tu stack de tecnologías

**Archivo:** `src/components/About.astro`

```astro
// Línea ~2-5
const techStack = [
    "TypeScript", "Node.js", "Python", // Edita estas
    "NestJS", "Express",                // según tus skills
    "PostgreSQL", "MongoDB", "Redis",
    "Docker", "Git", "REST APIs", "JWT"
];
```

---

### 3️⃣ Modifica tus proyectos

**Archivo:** `src/components/Projects.astro`

```astro
// Línea ~4-60
const projects = [
    {
        tag: "API REST",
        title: "🏨 Booking API",
        description: "Tu descripción aquí...",
        // Edita todo según tus proyectos
    },
    // ...
];
```

---

## 📁 Estructura de Archivos (Lo que verás en VS Code)

```
portafolio-astro/
├── 📂 src/
│   ├── 📂 components/
│   │   ├── Header.astro      👈 Navegación
│   │   ├── Hero.astro        👈 Tu presentación ⭐
│   │   ├── About.astro       👈 Sobre ti + tech stack ⭐
│   │   ├── ProjectCard.astro 👈 Template de proyecto
│   │   ├── Projects.astro    👈 Tus proyectos ⭐
│   │   ├── Contact.astro     👈 Contacto ⭐
│   │   └── Footer.astro
│   ├── 📂 layouts/
│   │   └── Layout.astro      👈 Layout base (colores aquí)
│   └── 📂 pages/
│       └── index.astro       👈 Página principal
├── 📄 package.json
├── 📄 astro.config.mjs
└── 📄 README.md
```

**⭐ = Archivos que más editarás**

---

## 🎨 Cambiar Colores

**Archivo:** `src/layouts/Layout.astro`

```css
/* Línea ~18-26 */
:root {
    --bg: #0f0f23;           /* Fondo oscuro */
    --accent: #00ff87;        /* Verde neón */
    --accent-2: #0ea5e9;      /* Azul */
}
```

Prueba estos temas:

### Tema Morado
```css
--accent: #a855f7;
--accent-2: #ec4899;
```

### Tema Azul Cian
```css
--accent: #06b6d4;
--accent-2: #3b82f6;
```

### Tema Naranja
```css
--accent: #f97316;
--accent-2: #eab308;
```

---

## 🔧 Atajos de VS Code Útiles

| Atajo | Acción |
|-------|--------|
| `Cmd + P` | Buscar archivo rápido |
| `Cmd + Shift + F` | Buscar en todos los archivos |
| `Cmd + /` | Comentar línea |
| `Alt + ↑/↓` | Mover línea arriba/abajo |
| `Cmd + D` | Seleccionar siguiente coincidencia |
| `` Cmd + ` `` | Abrir terminal |

---

## 🚀 Build para Producción

Cuando estés listo para deployar:

```bash
# Detén el servidor (Ctrl + C)
npm run build
```

Esto creará una carpeta `dist/` con tu sitio optimizado.

---

## 🌐 Deploy (Próximo paso)

### **Vercel (Más fácil)** ⭐

1. Sube tu proyecto a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. **New Project** → Importa tu repo
4. ¡Deploy automático!

### **GitHub Pages**

```bash
# 1. Build
npm run build

# 2. Sube el contenido de dist/ a tu repo
```

---

## ❓ Troubleshooting

### "npm not found"
Instala Node.js desde [nodejs.org](https://nodejs.org)

### "Port 4321 already in use"
```bash
# Mata el proceso
pkill -f astro

# O usa otro puerto
npm run dev -- --port 3000
```

### Cambios no se reflejan
- Guarda el archivo (`Cmd + S`)
- Refresca el navegador (`Cmd + R`)
- Reinicia el servidor (Ctrl + C, luego `npm run dev`)

---

## 📚 Próximos Pasos

1. ✅ Personaliza todos tus datos
2. ✅ Agrega imágenes en `public/` si quieres
3. ✅ Prueba diferentes colores
4. ✅ Deploy en Vercel o GitHub Pages
5. ✅ Comparte tu portafolio

---

## 💡 Tips Pro

1. **Live Preview:** Los cambios se ven **instantáneamente** sin recargar
2. **Hot Reload:** Edita y ve los cambios en tiempo real
3. **TypeScript:** Astro soporta TS - puedes cambiar archivos a `.ts`
4. **Más páginas:** Crea `src/pages/blog.astro` para `/blog`
5. **Componentes:** Crea más componentes reutilizables en `src/components/`

---

## 🎉 ¡Listo!

Ahora tienes un portafolio **modular**, **rápido** y **fácil de mantener**.

**¿Dudas?** Consulta el README.md del proyecto.

**¡A personalizar!** 🚀
