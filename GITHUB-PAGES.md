# Conectar este proyecto a GitHub Pages

Sigue estos pasos **en orden**. Puedes ejecutar los comandos en la terminal de Cursor (Ctrl+`) o en PowerShell, siempre dentro de la carpeta del proyecto.

---

## Paso 1: Abrir la carpeta del proyecto en la terminal

En Cursor: **Terminal → New Terminal**. Asegúrate de estar en la carpeta WEB:

```powershell
cd "c:\Users\zhari\OneDrive\Documentos\CARBONELL SOLUCIONES\WEB"
```

---

## Paso 2: Inicializar Git y primer commit (solo la primera vez)

```powershell
git init
git add .
git commit -m "Sitio Carbonell Soluciones - listo para GitHub Pages"
```

---

## Paso 3: Crear el repositorio en GitHub

1. Entra en **https://github.com/new**
2. **Repository name:** por ejemplo `Carbonell_Soluciones_Web` (o el que quieras).
3. Elige **Public**.
4. **No** marques "Add a README file" (ya tienes archivos).
5. Clic en **Create repository**.

---

## Paso 4: Conectar tu carpeta con GitHub y subir

En la nueva página de GitHub te saldrán comandos. Usa estos (cambia `TU-USUARIO` por tu usuario de GitHub y `Carbonell_Soluciones_Web` por el nombre del repo si lo cambiaste):

```powershell
git branch -M main
git remote add origin https://github.com/TU-USUARIO/Carbonell_Soluciones_Web.git
git push -u origin main
```

Te pedirá usuario y contraseña. En GitHub ya no se usa contraseña normal: usa un **Personal Access Token** como contraseña, o inicia sesión con **GitHub CLI** (`gh auth login`).

---

## Paso 5: Activar GitHub Pages

1. En tu repositorio en GitHub, ve a **Settings** (Configuración).
2. En el menú izquierdo, **Pages**.
3. En **Source** (Origen), elige **Deploy from a branch**.
4. En **Branch**, selecciona **main** y carpeta **/ (root)**.
5. **Save**.

En 1–2 minutos tu sitio estará en:

**https://TU-USUARIO.github.io/Carbonell_Soluciones_Web**

(las páginas serán `index.html` y `consultoria-ia.html`).

---

## Resumen de comandos (todo junto)

```powershell
cd "c:\Users\zhari\OneDrive\Documentos\CARBONELL SOLUCIONES\WEB"
git init
git add .
git commit -m "Sitio Carbonell Soluciones - listo para GitHub Pages"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/Carbonell_Soluciones_Web.git
git push -u origin main
```

Sustituye `TU-USUARIO` por tu usuario de GitHub y el nombre del repo si es distinto.
