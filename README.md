# Display Digital · página web (event-pix.com.ar)

Página publicitaria de Display Digital. React + Vite + Tailwind; se publica sola en GitHub Pages
cuando se hace merge a `main` (ver `.github/workflows/deploy.yml`).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # deja la página en dist/
```

## Secciones

Inicio (TV con carteles que se van pasando) · Carteles (carrusel + galería por rubro) · Fudo ·
Mosaicos (formas de combinar pantallas, Espejo, Olas, Pantalla dividida) · Descuentos por tiempo ·
Herramientas · Cómo funciona · Precio · Preguntas · WhatsApp.

El precio y el número de WhatsApp están al principio de `src/App.tsx` (`PRECIO`, `WHATSAPP`).

## Imágenes

Son carteles reales de la app (repo `event-pix`, `src/lib/posters.ts`), renderizados con el mismo
componente que usa la TV (`PosterView`). Las fotos de los carteles son de Unsplash (ver
`docs/carteles.md` en `event-pix`).

- `public/carteles/<id>-16x9.webp`: los 54 diseños (la lista está en `src/carteles.ts`).
- `public/mosaicos/`: un cartel por cada forma de mosaico, elegido para que ningún texto quede en la
  unión entre TVs.
- `public/inicio/`: los carteles del inicio y del descuento por tiempo.
- `public/app/`: capturas de la app con datos de un local inventado ("La Esquina").
- `public/og.jpg`: la imagen que aparece al compartir el link (WhatsApp, Facebook).

Si se agregan diseños nuevos en la app, hay que volver a generar las imágenes y sumar el diseño a
`src/carteles.ts`.
