# GOAL.md — 3D Software Services Website

## Primary Goal

Build a **production-ready Svelte 5 / SvelteKit software-company website** that presents our services and our complete phase-wise web/application development process.

The visual direction must be inspired by the supplied reference images:

- Deep navy / purple base
- Vibrant magenta, violet, cyan and blue gradients
- Large organic fluid/blob forms
- Strong depth and layering
- Soft glow and glass-like highlights
- Minimal, premium typography
- Clean navigation
- Motion that feels smooth, deliberate and high-end
- 3D elements that support the content rather than distract from it

The site must feel like a **modern technology company**, not a generic template.

The final implementation must be a **working Svelte page**, not just a mockup.

---

# Core Message

The website should visually communicate:

> **We Build. Secure. Deploy. Scale.**

And explain our end-to-end capability:

**Idea → Discovery → Design → Development → Security → Testing → Deployment → Monitoring → Growth**

---

# Existing Assets

- Use the **existing logo already stored in the project's `assets` folder**.
- Do **not** redraw, regenerate or replace the logo.
- Inspect the assets folder and use the correct logo file automatically.
- Preserve the logo's aspect ratio and brand quality.

## Visual References

The supplied reference images are the visual target for:

- gradient palette
- abstract organic geometry
- composition
- depth
- contrast
- premium landing-page feel

Do not copy the reference artwork literally. Reinterpret the visual language for our own software-services brand.

If the reference images are placed inside the repository, prefer a structure such as:

```text
assets/
├── landing-reference-01.png
└── landing-reference-02.png
```

Use them during the visual comparison loop.

---

# Technology Stack

Use the existing Svelte project if one already exists.

Preferred stack:

- **Svelte 5**
- **SvelteKit**
- **TypeScript**
- **Anime.js** — timelines, entrances, scroll interactions, micro-interactions
- **Three.js + Threlte** — only where real 3D adds value
- **Lucide Svelte** — icons
- Modern CSS / CSS variables
- Native browser APIs where practical

Optional development tooling:

- **Playwright** for automated visual screenshots
- lightweight visual-diff tooling if already available

Do not add unnecessary dependencies.

Use Svelte 5 patterns and avoid deprecated Svelte syntax.

---

# Page Architecture

## 1. Navigation

Minimal transparent/frosted navbar.

Include:

- Logo
- Home
- Services
- Process
- Cloud
- Security
- Contact

Behavior:

- transparent over hero initially
- subtle blur/background after scrolling
- active-section feedback
- compact mobile menu

---

# 2. 3D Hero

Create a premium full-screen or near-full-screen hero.

Content:

### Headline

**We Build. Secure. Deploy. Scale.**

### Supporting copy

Communicate that we design, develop, secure, deploy and maintain modern web applications and cloud infrastructure.

### Primary CTA

**Start a Project**

### Secondary CTA

**Explore Our Services**

---

## Hero Visual

Create a responsive abstract 3D/dimensional composition inspired by the supplied references.

Possible visual language:

- organic gradient blobs
- layered fluid surfaces
- floating spheres
- subtle wireframe/grid elements
- connected technology nodes
- soft bloom/glow
- depth/parallax
- slow ambient movement

Suggested conceptual nodes:

```text
WEB
API
DATABASE
SECURITY
AWS
SERVER
MONITORING
```

The hero should react subtly to:

- pointer movement
- scroll position
- viewport depth

Avoid aggressive movement.

The content must always remain readable.

---

# 3. Services Section

Create a premium interactive section for our services.

## Service Categories

### Full-Stack Web Application Development

- Custom web applications
- Frontend development
- Backend development
- Database architecture
- API integration
- Scalable application architecture

### Custom Website Development

- Business websites
- Corporate websites
- Portfolio websites
- Landing pages
- Marketing websites
- Responsive design
- CMS integration

### Workflow Automation

- Business process automation
- Internal applications
- Employee portals
- Customer portals
- Approval workflows
- Repetitive-task automation

### Cloud & AWS

- AWS infrastructure
- EC2
- RDS
- S3
- Load balancers
- DNS
- SSL/TLS
- cloud architecture
- deployment
- cost optimization

### Hosting & Maintenance

- managed hosting
- application deployment
- monitoring
- updates
- backups
- bug fixes
- patching
- uptime monitoring
- technical support

### Secure Web Development

- secure architecture
- authentication
- authorization
- RBAC
- encryption
- secure API design
- input validation
- OWASP-aligned controls
- security review

### Server & Infrastructure

- Linux server setup
- Nginx / Apache
- reverse proxy
- firewall configuration
- TLS
- server hardening
- logging
- performance tuning

### API Development & Integration

- REST APIs
- third-party integrations
- payment integrations
- email integrations
- SMS integrations
- CRM / ERP integrations
- authentication services

### DevOps & Deployment

- CI/CD
- automated deployments
- Docker
- environment management
- monitoring
- logging
- production deployment

### Application Modernization

- legacy upgrades
- redesign
- migration
- performance optimization
- cloud migration
- feature enhancement

### Small Business Solutions

- affordable business websites
- booking systems
- service websites
- local-business websites
- lead forms
- Maps integration
- social integration
- SEO-friendly development

### Ongoing Support

- maintenance
- feature development
- scaling
- optimization
- security review
- long-term support

---

# 4. Development Process — Primary Storytelling Section

This is one of the most important sections.

Create a **scroll-driven visual development journey**.

The visitor should experience the application being built step by step.

```text
IDEA
 ↓
DISCOVERY
 ↓
PLANNING
 ↓
DESIGN
 ↓
DEVELOPMENT
 ↓
SECURITY
 ↓
TESTING
 ↓
CLOUD DEPLOYMENT
 ↓
GO LIVE
 ↓
MONITORING
 ↓
SCALE
```

---

## Phase 01 — Discovery

Show:

- requirements
- business objectives
- user needs
- project scope
- constraints

Visual idea:

An abstract idea/core forms from particles or nodes.

---

## Phase 02 — Planning

Show:

- architecture
- technology selection
- database planning
- APIs
- security planning

Visual idea:

The nodes connect into a system architecture.

---

## Phase 03 — UI/UX Design

Show:

- wireframes
- layouts
- design system
- responsive behavior
- design approval

Visual idea:

Floating interface layers assemble.

---

## Phase 04 — Development

Show:

- frontend
- backend
- database
- APIs
- integrations

Visual idea:

Separate system layers connect into one application.

---

## Phase 05 — Security

Show:

- authentication
- authorization
- RBAC
- validation
- encryption
- secure configuration
- OWASP controls

Visual idea:

A translucent shield / secure boundary forms around the application.

---

## Phase 06 — Testing

Show:

- functional testing
- responsive testing
- browser testing
- performance testing
- security testing

Visual idea:

Application modules move through validation checkpoints.

---

## Phase 07 — Cloud Deployment

Show:

```text
Application
    ↓
Load Balancer
    ↓
EC2 / Compute
    ↓
Database / RDS
    ↓
S3 / Storage
```

Also represent:

- DNS
- SSL/TLS
- monitoring

Visual idea:

The completed application moves into a cloud infrastructure environment.

---

## Phase 08 — Go Live

Show:

- final deployment
- production verification
- backups
- monitoring
- domain configuration

Visual idea:

System changes from "building" to "online".

---

## Phase 09 — Maintenance & Growth

Show:

- monitoring
- security patches
- backups
- performance optimization
- new features
- scaling

Visual idea:

The infrastructure expands with healthy monitoring signals.

---

# 5. Architecture Section

Create an animated architecture diagram:

```text
USER
 ↓
FRONTEND
 ↓
API
 ↓
BACKEND
 ↓
DATABASE
```

Secondary services can branch into:

```text
AUTH
EMAIL
SMS
PAYMENTS
STORAGE
ANALYTICS
```

Use motion only to demonstrate data flow.

---

# 6. Security-First Development

Create a dedicated visual section.

Show:

```text
User
 ↓
Authentication
 ↓
Authorization / RBAC
 ↓
API Validation
 ↓
Application
 ↓
Protected Data
```

Key topics:

- secure development lifecycle
- least privilege
- secure APIs
- encryption
- OWASP-aligned controls
- server hardening
- monitoring

Do not use exaggerated "hacker" visuals.

Keep the section professional.

---

# 7. Cloud & AWS

Create a cloud-infrastructure scene.

Represent:

- Route / DNS
- Load Balancer
- EC2
- RDS
- S3
- SSL/TLS
- monitoring
- backups

The visual should be understandable to a non-technical business client.

---

# 8. Who We Work With

Include:

- Startups
- Small Businesses
- Professional Services
- Education
- Logistics
- Manufacturing
- Real Estate
- E-commerce
- Nonprofits
- Enterprises

Use concise cards or an animated horizontal system.

---

# 9. Why Work With Us

Communicate:

- one team from planning to production
- security-first approach
- scalable architecture
- cloud deployment capability
- ongoing support
- business-focused development

Avoid unsupported claims such as fake client counts, fake awards or fake performance statistics.

---

# 10. Final CTA

Strong finishing section.

Headline example:

**Have an idea? Let's turn it into production software.**

Actions:

- Start a Project
- Contact Us

Reuse the abstract gradient/3D visual language from the hero.

---

# LOOP ENGINEERING EXECUTION MODEL

This project must be implemented using an iterative **engineering loop**, not a one-pass build.

Claude Code should repeatedly:

```text
UNDERSTAND
   ↓
IMPLEMENT
   ↓
RUN
   ↓
INSPECT
   ↓
COMPARE
   ↓
DIAGNOSE
   ↓
REFINE
   ↓
VALIDATE
   ↺
```

Continue the loop until the acceptance criteria are satisfied.

---

# LOOP 0 — Repository Audit

Before changing code:

1. Inspect project structure.
2. Identify Svelte/SvelteKit version.
3. Inspect `package.json`.
4. Inspect current routes/components/styles.
5. Locate the logo inside `assets`.
6. Identify already-installed animation/3D libraries.
7. Check existing lint/test/build commands.
8. Do not overwrite useful existing work without reason.

Output internally:

```text
Current state
Missing pieces
Implementation plan
```

Then begin implementation.

---

# LOOP 1 — Structural Build

Implement first:

- global layout
- navigation
- hero
- services
- development phases
- security
- cloud
- CTA
- footer

Goal:

The entire page must exist and be usable before advanced visual polish.

Validation:

- app starts
- no Svelte compile errors
- all sections render
- navigation works

---

# LOOP 2 — Visual Language

Implement the reference-inspired design system.

Define reusable CSS variables for:

- background
- surface
- text
- muted text
- magenta
- purple
- cyan
- blue
- glow
- borders
- radii
- spacing

Build:

- gradient blobs
- layered shapes
- depth
- cards
- typography
- lighting effects

Do not scatter arbitrary hard-coded values throughout components.

---

# LOOP 3 — Motion

Introduce Anime.js.

Animate:

- hero content entrance
- navbar
- service cards
- phase transitions
- architecture flow
- CTA reveal

Animations must have:

- clear purpose
- smooth easing
- restrained duration
- no layout jank

Prefer transform and opacity.

---

# LOOP 4 — 3D

Introduce Threlte / Three.js only after the layout works.

Build one coherent 3D system.

Possible hierarchy:

```text
HeroScene.svelte
├── AmbientEnvironment
├── FluidShapes
├── FloatingNodes
├── ConnectionLines
└── CameraRig
```

Requirements:

- no blocking of text interaction
- pointer events controlled correctly
- responsive camera
- bounded animation loop
- optimized geometry
- optimized DPR
- no unnecessary high-poly assets

---

# LOOP 5 — Reference Comparison

Compare the running page against the supplied references.

Focus on:

1. overall composition
2. background depth
3. gradient richness
4. organic shape balance
5. spacing
6. typography hierarchy
7. contrast
8. glow intensity
9. visual weight
10. premium feel

Ask:

```text
Does the page feel as visually rich as the reference?

Does it still look like OUR software company?

Is the content easier to understand than the reference?

Does the 3D support the message?

Is anything decorative but pointless?
```

Refine based on the answers.

---

# LOOP 6 — Screenshot Loop

If Playwright or browser automation is available:

1. run the application
2. capture screenshots
3. inspect them
4. compare with the visual references
5. identify the three biggest visual problems
6. fix them
7. capture again

Test at minimum:

```text
Desktop: 1440 × 900
Tablet:  768 × 1024
Mobile:  390 × 844
```

Repeat until visually stable.

---

# LOOP 7 — Responsive Engineering

Validate:

- desktop
- laptop
- tablet
- mobile

On mobile:

- reduce decorative objects
- simplify 3D geometry
- reduce particle count
- avoid text overlap
- maintain strong CTA visibility
- maintain comfortable touch targets

Do not simply shrink the desktop composition.

---

# LOOP 8 — Performance

Check:

- bundle size
- 3D scene cost
- layout shifts
- unnecessary re-renders
- image sizes
- animation performance

Requirements:

- lazy-load non-critical heavy components where appropriate
- cap device pixel ratio for WebGL
- pause expensive animation when off-screen if practical
- avoid memory leaks
- clean up Anime.js timelines/listeners
- clean up Three.js resources
- use responsive images

---

# LOOP 9 — Accessibility

Ensure:

- semantic HTML
- keyboard navigation
- visible focus
- meaningful alt text
- readable contrast
- aria labels where needed
- no information communicated by animation alone

Respect:

```css
@media (prefers-reduced-motion: reduce);
```

Provide a reduced-motion version of the experience.

---

# LOOP 10 — Engineering Validation

Before declaring completion run the project's available equivalents of:

```bash
npm run check
npm run lint
npm run test
npm run build
```

Fix errors instead of suppressing them.

Do not finish with:

- compiler errors
- missing imports
- broken routes
- console errors
- hydration errors
- unused abandoned components

---

# Visual Acceptance Criteria

The final page should:

- strongly resemble the **visual quality and mood** of the provided references
- use our existing logo
- have a deep purple/navy foundation
- use vibrant magenta/purple/cyan gradients
- include dimensional organic shapes
- have meaningful 3D depth
- feel polished and modern
- clearly explain our services
- clearly explain our development process
- remain readable
- remain responsive
- perform smoothly

---

# Functional Acceptance Criteria

- Svelte/SvelteKit application runs successfully
- all primary sections are implemented
- navbar links work
- CTA buttons work or have clearly defined placeholders
- components are reusable
- data is not needlessly duplicated
- Svelte 5 conventions are followed
- animations clean up correctly
- no critical console errors
- production build succeeds

---

# Definition of Done

Do **not** consider the goal complete after the first visually acceptable page.

The goal is complete only when:

```text
✓ Project builds
✓ Page works
✓ Existing logo is used
✓ Services are represented
✓ Phase-wise process is represented
✓ Visual reference is recognisable in the design language
✓ 3D is meaningful
✓ Anime.js motion is polished
✓ Desktop works
✓ Tablet works
✓ Mobile works
✓ Reduced motion works
✓ No major console errors
✓ Final screenshot review has been completed
```

---

# Important Constraints

1. Do not replace the existing logo.
2. Do not blindly copy the supplied reference artwork.
3. Do not turn the site into a generic Tailwind/SaaS template.
4. Do not overuse glassmorphism.
5. Do not overuse animations.
6. Do not use 3D merely to say the site has 3D.
7. Do not sacrifice readability for visual effects.
8. Do not sacrifice mobile usability.
9. Do not introduce unnecessary dependencies.
10. Do not stop after one implementation pass.

---

# Claude Code Working Rule

Operate autonomously inside the repository.

When a reasonable engineering decision can be inferred from the existing project and this goal, make the decision and continue.

Only stop to ask the user when a decision would materially change:

- company identity
- content meaning
- required functionality
- branding
- production integration
- credentials/secrets
- destructive repository changes

For ordinary implementation details, choose the strongest reasonable solution and continue the engineering loop.

---

# End Goal

The final result should feel like:

**A premium software engineering company website where abstract fluid 3D art, modern motion and clear technical storytelling work together to show how we take a client's idea from concept to a secure, deployed and maintained production system.**
