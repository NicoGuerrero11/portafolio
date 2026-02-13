# 🚀 Portafolio - Nico Guerrero

Portafolio personal desarrollado con **Astro** - rápido, moderno y optimizado.

## 📁 Estructura del Proyecto

```
portafolio-astro/
├── src/
│   ├── components/       # Componentes reutilizables
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── ProjectCard.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/         # Layouts principales
│   │   └── Layout.astro
│   └── pages/           # Páginas del sitio
│       └── index.astro
├── public/              # Assets estáticos (imágenes, etc.)
├── astro.config.mjs     # Configuración de Astro
├── package.json
└── README.md
```

## 🛠️ Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. El sitio estará disponible en http://localhost:4321
```

## 📝 Comandos Disponibles

| Comando                | Acción                                      |
|------------------------|---------------------------------------------|
| `npm install`          | Instala las dependencias                    |
| `npm run dev`          | Inicia servidor local en `localhost:4321`   |
| `npm run build`        | Build de producción en `./dist/`            |
| `npm run preview`      | Vista previa del build antes de deployar    |

## ✏️ Personalización

### 1. Datos Personales

Edita `src/components/Hero.astro`:
```astro
<h1>
    Hola, soy <span class="gradient-text">TU NOMBRE</span>
</h1>
```

Actualiza los links de redes sociales:
```astro
<a href="https://github.com/TU_USUARIO" ...>
<a href="https://linkedin.com/in/TU_PERFIL" ...>
<a href="mailto:TU_EMAIL" ...>
```

### 2. Sobre Mí

Edita `src/components/About.astro`:
- Modifica el texto de presentación
- Actualiza el array `techStack` con tus tecnologías

### 3. Proyectos

Edita `src/components/Projects.astro`:
- Modifica el array `projects` con tus proyectos
- Actualiza URLs de GitHub
- Agrega URLs de demos si las tienes

### 4. Contacto

Edita `src/components/Contact.astro`:
- Cambia el email de contacto

## 🚀 Deployment

### GitHub Pages

```bash
# 1. Build del proyecto
npm run build

# 2. El contenido de dist/ es lo que debes subir
```

Configura en `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://TU_USUARIO.github.io',
});
```

### Vercel (Recomendado - Más fácil)

1. Sube tu proyecto a GitHub
2. Importa el repo en [vercel.com](https://vercel.com)
3. ¡Deploy automático! ✨

### Netlify

1. Sube tu proyecto a GitHub
2. Conecta el repo en [netlify.com](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🎨 Colores del Tema

Los colores están definidos en `src/layouts/Layout.astro`:

```css
:root {
    --bg: #0f0f23;           /* Fondo principal */
    --bg-secondary: #1a1a2e;  /* Fondo secundario */
    --text: #e4e4e7;          /* Texto principal */
    --text-dim: #a1a1aa;      /* Texto secundario */
    --accent: #00ff87;        /* Color de acento */
    --accent-2: #0ea5e9;      /* Color de acento 2 */
    --code-bg: #16213e;       /* Fondo de código */
}
```

Modifícalos según tu preferencia.

## 📦 Agregar más páginas

Para agregar una página nueva (ej: `/blog`):

1. Crea `src/pages/blog.astro`
2. Usa el mismo layout:

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Blog">
    <h1>Mi Blog</h1>
</Layout>
```

## 🧩 Componentes

Todos los componentes están en `src/components/`:

- **Header.astro** - Navegación principal
- **Hero.astro** - Sección hero con presentación
- **About.astro** - Sobre mí + tech stack
- **ProjectCard.astro** - Card individual de proyecto
- **Projects.astro** - Sección de proyectos
- **Contact.astro** - Sección de contacto
- **Footer.astro** - Pie de página

Puedes reutilizarlos o crear nuevos según necesites.

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Astro Discord](https://astro.build/chat)
- [Tus otros proyectos](https://github.com/NicoGuerrero11)

## 📄 Licencia

MIT - Haz lo que quieras con este código 🚀

---

**Hecho con ❤️ y Astro**
