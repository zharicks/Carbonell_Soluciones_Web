# Carbonell Soluciones — Web

Sitio corporativo de Carbonell Soluciones: ingeniería, auditoría y estrategia.

## Estructura del proyecto

```
WEB/
├── index.html          # Página principal (entrada del sitio)
├── landing.html        # Código original (respaldo/referencia)
├── README.md
├── css/
│   └── main.css        # Estilos base y utilidades (fuera de Tailwind)
├── js/
│   ├── tailwind-config.js  # Configuración de Tailwind (colores, fuentes, etc.)
│   └── main.js         # Comportamiento global (menú, interacciones)
└── assets/             # Imágenes, iconos, recursos estáticos
    └── icon-carbonell-soluciones.png  # Logo (colocar aquí)
```

## Secciones de la página (index.html)

1. **Cabecera** — Logo, navegación (Servicios, Liderazgo, Proyectos, Consultoría IA), menú móvil
2. **Hero + Chat** — Presentación y widget de consultoría IA
3. **Clientes** — Entidades que confían
4. **Liderazgo** — Ing. Jairo Carbonell y pilares
5. **Pilares Estratégicos** — Visión técnica, rigor administrativo, garantía de calidad
6. **Catálogo Maestro** — Servicios (01–09)
7. **CTA normatividad** — Mensaje legal/asesoría
8. **Proyectos** — Caso de éxito Puentes Comunitarios
9. **Pie / Contacto** — Datos, horarios, WhatsApp
10. **Widget flotante** — WhatsApp

## Cómo trabajar

- **Página principal:** abrir o publicar `index.html`.
- **Estilos:** editar `css/main.css` para estilos propios; colores y tema en `js/tailwind-config.js`.
- **Comportamiento:** lógica global en `js/main.js`; el menú móvil usa `data-menu-toggle` y (cuando se implemente) `data-nav-mobile`.
- **Recursos:** poner imágenes e iconos en `assets/` y referenciarlos desde `index.html` (ej. `assets/icon-carbonell-soluciones.png`).

## Tecnologías

- HTML5 semántico
- [Tailwind CSS](https://tailwindcss.com) vía CDN (forms, container-queries)
- Fuentes: Manrope, Material Symbols Outlined
- Sin dependencias de build; se puede migrar después a Tailwind con npm si se desea

## Próximos pasos sugeridos

- Añadir `icon-carbonell-soluciones.png` en `assets/` si aún no está.
- Implementar el menú móvil (drawer) enlazando `data-menu-toggle` con el nav.
- Conectar el formulario del chat con n8n o backend cuando esté listo.
- Añadir páginas secundarias (p. ej. Servicios, Contacto) y enlazarlas desde la cabecera.
