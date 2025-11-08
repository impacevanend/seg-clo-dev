# PoC: Reflected XSS en /search

**URL PoC:** `/search?q=<script>alert('XSS')</script>`

**Descripción:** El endpoint `/search` refleja la query `q` sin escapar, permitiendo la ejecución de JavaScript en el navegador (reflected XSS).

**Evidencia:** `docs/evidence/xss1.png`, `docs/evidence/xss2.png`

**Recomendación (resumen):** Usar output encoding/escape (EJS `<%= %>`) o librería de escape (`he.encode`) y parametrizar renderizado.
