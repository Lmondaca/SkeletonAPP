# SkeletonAPP 🚀

**SkeletonAPP** es una aplicación híbrida desarrollada con **Angular**, **Node.js 22.16.0** e **Ionic 7.2.1**, que sirve como plantilla base para construir aplicaciones móviles y web modernas.

---

## 🛠️ Tecnologías Utilizadas

- **Frontend:** Angular  
- **Framework híbrido:** Ionic 7.2.1  
- **Backend / Runtime:** Node.js 22.16.0  
- **Lenguajes:** TypeScript, HTML, CSS

---

## 🔧 Requisitos previos

Asegúrate de tener instalado lo siguiente:

1. Node.js **22.16.0** (recomendado LTS). Puedes descargarlo de [nodejs.org](https://nodejs.org/)  
2. Git (para clonar el repositorio)  
3. npm (viene con Node.js) o Yarn si prefieres

---

## 🚀 Instalación y ejecución local

Sigue estos pasos para levantar la aplicación en tu máquina:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/Lmondaca/SkeletonAPP.git
   cd SkeletonAPP
   ```

2. Instala dependencias:
   ```bash
   npm install
   # o con yarn:
   # yarn install
   ```

3. (Opcional) Verifica que la versión de Node.js sea la 22.16.0:
   ```bash
   node -v
   ```

4. Corre la aplicación en modo de desarrollo:
   ```bash
   npx ionic serve
   ```

5. Abre tu navegador en:
   ```
   http://localhost:8100
   ```

---

## 🧱 Estructura del proyecto

- `src/app/` → código Angular (componentes, páginas, servicios, módulos)  
- `src/assets/` → fuentes, imágenes, archivos estáticos  
- `src/theme/` → estilos globales, variables CSS/Sass  
- `ionic.config.json` → configuración del proyecto Ionic  
- `package.json` → dependencias, scripts y configuraciones de Node  
- `angular.json` y `tsconfig.json` → configuración de Angular y TypeScript

---

## 📝 Scripts útiles

Puedes usar los siguientes comandos desde el root del proyecto:

| Comando                         | Descripción                                                          |
|--------------------------------|----------------------------------------------------------------------|
| `npm start`                    | Alias de `npx ionic serve` para desarrollo en navegador              |
| `npm run build`                | Genera la versión optimizada para producción (`www/`)               |
| `npm test`                     | Ejecuta pruebas unitarias (si están configuradas)                   |
| `npm run lint`                 | Ejecuta el linter para asegurar calidad del código                  |
| `npx ionic generate <type> <name>` | Genera nuevo componente, página o servicio con Ionic CLI         |

---

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Revisa el archivo [LICENSE](LICENSE) para más detalles.

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Puedes mejorar la app, reportar bugs o sugerir features. Abre un *issue* o *pull request*.

---

**¡Listo para comenzar a construir!** ✨
