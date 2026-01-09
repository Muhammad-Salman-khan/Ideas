IDEAS FRONT-END PROJECT
A Modern Ideas Sharing Platform

## PROJECT OVERVIEW

Ideas Hub is a web application platform designed to help users discover, share,
and validate startup ideas, side hustles, and business concepts. The platform
enables users to post their innovative ideas, view detailed descriptions, and
interact with a community of creators and entrepreneurs.

## WHAT HAS BEEN IMPLEMENTED SO FAR

1. PROJECT FOUNDATION & SETUP

   - Vite-based React application with TypeScript
   - TanStack Router for file-based routing
   - TanStack Query for server state management
   - TanStack Form for form handling and validation
   - Tailwind CSS v4 for styling
   - React 19 with React Compiler enabled

2. ROUTING ARCHITECTURE
   Routes Implemented:

   - / (Home/Landing page with Hero Section)
   - /ideas (Ideas listing page)
   - /ideas/:ideaid (Individual idea detail page)
   - /ideas/new (Create new idea form)
   - /about (About page structure)

   Features:

   - File-based routing with TanStack Router
   - Nested layouts with shared sidebar
   - Route-level data loading with loaders
   - Suspense boundaries for async operations
   - 404 Not Found page handling

3. UI COMPONENTS LIBRARY
   Implemented Shadcn/ui Components:

   - Alert, Avatar, Badge, Button
   - Card, Command, Dialog
   - Dropdown Menu, Input, Label
   - Menubar, Select, Separator
   - Sheet, Sidebar, Skeleton
   - Textarea, Tooltip
   - File Upload (custom)
   - Text Loop Animation

   Custom Components:

   - Header with Navigation
   - Hero Section for landing page
   - Card for displaying ideas
   - DetailCard for full idea view
   - AppSidebar for ideas section
   - Logo component
   - ThemeSwitch for dark/light mode
   - User profile component
   - VoteButton component
   - Search component
   - ShareDialog component

4. STATE MANAGEMENT & DATA FETCHING

   - Axios instance configured for API calls
   - Custom useFetch hooks (FetchData, FetchIdeas)
   - TanStack Query integration for caching
   - Query options with suspense queries
   - API proxy configured (localhost:8000 → /api)

5. FORM HANDLING

   - TanStack Form integration
   - Zod schema validation
   - Real-time field validation
   - File upload functionality
   - Form fields: title, summary, description, image, category, tags
   - Debounced validation (300ms)

6. THEME SYSTEM

   - Custom ThemeContext with React Context API
   - localStorage persistence
   - Light/Dark mode toggle
   - System-wide theme switching

7. TYPE DEFINITIONS
   Core Types:

   - Data: id, title, summary, description, createdAt, tags, user
   - FormType: title, summary, description, category, tags, image

8. MOCK DATA & DEVELOPMENT SERVER

   - JSON Server setup for development API
   - Mock database with sample ideas
   - Ideas stored in db/db.json
   - Running on port 8000

9. DEVELOPER EXPERIENCE

   - TanStack DevTools integration
   - React Query DevTools
   - Router DevTools Panel
   - Hot Module Replacement (HMR)
   - TypeScript strict mode
   - Path aliases (@/_ → src/_)

10. TESTING SETUP

    - Vitest configuration
    - Testing Library (React & DOM)
    - JSDOM environment

11. NOTIFICATIONS & UX

    - Sonner toast notifications
    - Success/error feedback
    - Rich colors and theming

12. ACCESSIBILITY & SEO
    - Semantic HTML structure
    - Meta tags for SEO
    - Viewport configuration
    - Robots meta tags
    - Dynamic page titles per route

## TECHNOLOGIES USED

Core Framework:

- React 19.2.0
- TypeScript 5.7.2
- Vite 7.1.7

Routing & State:

- @tanstack/react-router 1.132.0
- @tanstack/react-query 5.66.5
- @tanstack/react-form 1.27.7

Styling:

- Tailwind CSS 4.0.6
- Class Variance Authority
- clsx & tailwind-merge
- Radix UI primitives
- Lucide React icons

Animation:

- Motion (Framer Motion) 12.23.26
- Anime.js 4.2.2

Form & Validation:

- Zod 4.3.4

HTTP Client:

- Axios 1.13.2

Development:

- json-server 1.0.0-beta.3
- Vitest 3.0.5
- React Compiler (Babel plugin)

UI Libraries:

- Radix UI components
- Shadcn/ui component system
- Sonner for toasts
- cmdk for command palette

## CURRENT PROJECT STATUS

✅ Basic application structure complete
✅ Routing system implemented
✅ Component library established
✅ Form handling with validation
✅ Data fetching infrastructure
✅ Theme system working
✅ Mock API server running
✅ Development environment optimized

## PROJECT STRUCTURE

ideas-front-end/
├── public/ # Static assets
├── src/
│ ├── components/ # Shadcn UI components
│ │ └── ui/ # Custom UI components
│ ├── Contexts/ # React contexts (Theme)
│ ├── db/ # Mock database (JSON)
│ ├── hooks/ # Custom React hooks
│ ├── integrations/ # Third-party integrations
│ ├── lib/ # Utility functions & configs
│ ├── routes/ # File-based routes
│ ├── schemas/ # Zod validation schemas
│ ├── main.tsx # Application entry point
│ ├── styles.css # Global styles
│ └── Type.tsx # TypeScript type definitions
├── package.json # Dependencies & scripts
├── vite.config.ts # Vite configuration
├── tsconfig.json # TypeScript configuration
└── components.json # Shadcn component config

## HOW TO RUN

1. Install dependencies:
   pnpm install

2. Start development server:
   pnpm dev
   (Runs on http://localhost:3000)

3. Start mock API server:
   pnpm json
   (Runs on http://localhost:8000)

4. Build for production:
   pnpm build

5. Run tests:
   pnpm test

6. Preview production build:
   pnpm preview

## KEY FEATURES WORKING

✅ View all ideas in a list
✅ View individual idea details
✅ Create new idea with form validation
✅ Theme switching (light/dark)
✅ Responsive sidebar navigation
✅ File upload for images
✅ Toast notifications
✅ Client-side routing
✅ Data caching with React Query
✅ Loading states with Suspense

## NOTES

- The project uses a mock JSON server for development
- Real backend integration is pending
- Authentication/Authorization not yet implemented
- User profiles are placeholder data
- Voting system UI exists but not connected
- Search functionality exists but not connected

Last Updated: January 2025
