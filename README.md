<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/banner-light.svg">
  <img src="assets/banner-light.svg" width="100%" alt="Juan Martín Caparrós. Software Developer en Mercado Libre. Java, Spring Boot, Go y automatización con IA.">
</picture>

</div>

## `GET /sobre-mi`

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="assets/whoami-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="assets/whoami-light.svg">
  <img src="assets/whoami-light.svg" width="100%" alt="Respuesta JSON con mis datos: Software Developer en Mercado Libre, Buenos Aires. Java, Go, Python y TypeScript. Foco en APIs REST, microservicios e IA aplicada.">
</picture>

Desarrollo APIs REST y servicios backend en **Java** y **Go** dentro de una arquitectura de microservicios. También diseño agentes y skills de IA para **Claude**, integro modelos de lenguaje en los procesos del equipo y armo flujos automatizados con **n8n** y **Python**.

Me importa que el software se pueda mantener: tests que cubren lo que importa, decisiones explicadas en el código y monitoreo de lo que corre en producción.

## `GET /stack`

<table>
  <tr>
    <td width="50%" valign="top">
      <code>backend</code><br><br>
      <img src="https://skillicons.dev/icons?i=java,spring,go,cs,dotnet,maven,hibernate" height="48" alt="Java, Spring, Go, C#, .NET, Maven, Hibernate"><br>
      <sub>Java · Spring Boot · Go · C# · .NET 8 · Maven · JPA</sub>
    </td>
    <td width="50%" valign="top">
      <code>datos</code><br><br>
      <img src="https://skillicons.dev/icons?i=postgres" height="48" alt="PostgreSQL">
      <img src="assets/icons/flyway.svg" height="48" alt="Flyway"><br>
      <sub>PostgreSQL · SQL Server · Sybase · Flyway · stored procedures</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <code>ia_y_automatizacion</code><br><br>
      <img src="https://skillicons.dev/icons?i=py" height="48" alt="Python">
      <img src="assets/icons/claude.svg" height="48" alt="Claude">
      <img src="assets/icons/n8n.svg" height="48" alt="n8n"><br>
      <sub>Python · LLMs · agentes y skills para Claude · n8n · prompt engineering</sub>
    </td>
    <td valign="top">
      <code>frontend</code><br><br>
      <img src="https://skillicons.dev/icons?i=ts,react,vite,tailwind" height="48" alt="TypeScript, React, Vite, Tailwind CSS"><br>
      <sub>TypeScript · React · Vite · Tailwind CSS</sub>
    </td>
  </tr>
  <tr>
    <td valign="top">
      <code>infra_y_ci</code><br><br>
      <img src="https://skillicons.dev/icons?i=docker,githubactions,git" height="48" alt="Docker, GitHub Actions, Git"><br>
      <sub>Docker · Docker Compose · GitHub Actions · Git · TFS</sub>
    </td>
    <td valign="top">
      <code>observabilidad</code><br><br>
      <img src="assets/icons/datadog.svg" height="48" alt="Datadog">
      <img src="assets/icons/newrelic.svg" height="48" alt="New Relic">
      <img src="assets/icons/kibana.svg" height="48" alt="Kibana"><br>
      <sub>Datadog · New Relic · Kibana</sub>
    </td>
  </tr>
  <tr>
    <td colspan="2"><sub><code>forma_de_trabajo: scrum · refinamientos técnicos · tests unitarios, funcionales y de caja negra</code></sub></td>
  </tr>
</table>

## `GET /proyectos/destacado`

<a href="https://github.com/jcaparr/Web-hamburgueseria">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/stack-dark.svg">
    <source media="(prefers-color-scheme: light)" srcset="assets/stack-light.svg">
    <img src="assets/stack-light.svg" width="100%" alt="Hamburgueserías BA: el stack dibujado como una hamburguesa, capa por capa.">
  </picture>
</a>

### 🍔 [Hamburgueserías BA](https://github.com/jcaparr/Web-hamburgueseria)

Una web para descubrir, calificar y reseñar las hamburgueserías de Buenos Aires. La hice de punta a punta: backend, frontend, base de datos, deploy y CI.

- **Autenticación propia:** sesiones en cookies HttpOnly con refresh tokens, verificación por email, ingreso con Google y rate limiting con token bucket.
- **Datos reales de Google Places:** más de 1.500 locales, cargados por un proceso programado que recorre CABA y el conurbano, descarta lo que no es una hamburguesería y cuida la cuota de la API.
- **Tour:** arma un recorrido a pie entre hamburgueserías y lo abre en Google Maps.
- **De qué hablan las reseñas:** resume los temas de los comentarios de cada local usando la nota que puso cada persona, sin inventar nada.
- **Social:** feed con paginación por cursor, seguir y bloquear usuarios, perfiles públicos, wishlist y reseñas con foto.

<p>
  <a href="https://github.com/jcaparr/Web-hamburgueseria"><img src="https://img.shields.io/badge/Ver_el_c%C3%B3digo-f5a524?style=for-the-badge&logo=github&logoColor=1a1205" alt="Ver el código"></a>
  <a href="https://github.com/jcaparr/Web-hamburgueseria#decisiones-t%C3%A9cnicas"><img src="https://img.shields.io/badge/Decisiones_t%C3%A9cnicas-30363d?style=for-the-badge&logo=readthedocs&logoColor=white" alt="Decisiones técnicas"></a>
</p>

### Otros proyectos

- **[SalesCrud](https://github.com/jcaparr/SalesCrud):** API REST de ventas (clientes, productos y ventas) con Spring Boot 3, JPA, DTOs y manejo global de errores.

## `GET /experiencia`

```diff
@@ trabajo @@
+ mar 2025 → hoy     Software Developer · Mercado Libre
  APIs REST y servicios backend en Java y Go, en una arquitectura de microservicios
  Agentes y skills de IA para Claude · automatizaciones con Python y n8n
  Monitoreo con Kibana, Datadog y New Relic · Scrum

+ jun 2024 → 2025    Analista Programador · Accusys Technology
  Procesos batch en .NET 8 para el core bancario COBIS
  Stored procedures sobre Sybase y SQL Server

@@ formación @@
+ 2025 → hoy         Analista Programador · Universidad Abierta Interamericana
  Entity Framework y LINQ · Educación IT (2024)
  WPF con .NET 5 · LinkedIn Learning (2024)
  Maquetador Web HTML5 y CSS3 · Educación IT (2022)
  Inglés B2
```

## `GET /actividad`

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/jcaparr/jcaparr/output/snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/jcaparr/jcaparr/output/snake-light.svg">
  <img src="https://raw.githubusercontent.com/jcaparr/jcaparr/output/snake-light.svg" width="100%" alt="Una viborita recorre el gráfico de contribuciones del último año.">
</picture>

## `POST /contacto`

<p>
  <a href="https://www.linkedin.com/in/juanmartincaparros"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn"></a>
  <a href="https://github.com/jcaparr"><img src="https://img.shields.io/badge/GitHub-24292f?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"></a>
</p>

<div align="center">
<sub>Hecho en Buenos Aires · servido caliente 🍔</sub>
</div>
