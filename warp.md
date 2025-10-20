# Project Overview: second-nextjs-typescript

## 📋 Project Summary
This is a **Next.js 15.5.4** application built with **TypeScript** and **React 19.1.0** for learning and training purposes. It demonstrates modern Next.js features including the App Router, route groups, error boundaries, and component-based architecture.

## 🛠 Tech Stack
- **Framework**: Next.js 15.5.4 (App Router)
- **Language**: TypeScript 5
- **UI Library**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Components**: Flowbite React 0.12.9
- **Icons**: React Icons 5.5.0
- **Error Handling**: React Error Boundary 6.0.0
- **Linting**: ESLint 9

## 🏗 Project Structure

### App Router Structure
```
app/
├── (admin)/          # Admin route group
│   └── layout.tsx    # Admin-specific layout
└── (user)/           # User route group
    ├── font.tsx      # Font configuration
    ├── globalerror.tsx # Global error boundary
    ├── layout.tsx    # User layout
    ├── loading.tsx   # Loading UI
    └── page.tsx      # Home page
```

### Components Architecture
```
components/
├── card/
│   ├── CardProduct.tsx        # Product card component
│   └── CardProductDetails.tsx # Product details card
├── icon/
│   └── FontAwesome.js         # FontAwesome icon utilities
├── navbar/
│   ├── NavbarComponent.tsx    # Navigation component
│   └── menu.ts               # Navigation menu data
└── sidebar/
    ├── SidebarComponent.tsx   # Sidebar component  
    └── menu.ts               # Sidebar menu data
```

## 🚀 Key Features

### 1. Route Groups
- `(user)` - Public user interface
- `(admin)` - Administrative interface

### 2. Error Handling
- Global error boundary in `globalerror.tsx`
- Session-based error demonstration in main page
- React Error Boundary for component-level errors

### 3. Navigation Structure
**Navbar Menu** (Public):
- Home, About, Services, Contact, Price, Enroll

**Sidebar Menu** (Admin):
- Dashboard, Settings, Inbox, Users, Products, Sign In/Up

### 4. UI Components
- Flowbite React components for consistent design
- Custom card components for products
- Modular navigation components

## 🎯 Current Implementation

### Home Page Features
- Session validation with error throwing
- Tailwind CSS styling
- Router navigation to `/enroll`
- Error boundary integration

### Development Setup
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production  
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## 🔧 Configuration

### TypeScript
- Strict mode enabled
- Path mapping: `@/*` → `./*`
- Next.js plugin integration
- ES2017 target with modern features

### Styling
- Tailwind CSS 4 with PostCSS
- Flowbite component library
- Responsive design utilities

## 🎯 Learning Focus Areas
1. **Next.js App Router**: Route groups, layouts, loading states
2. **TypeScript Integration**: Type safety across components
3. **Error Boundaries**: Graceful error handling
4. **Component Architecture**: Reusable UI components
5. **Modern React**: Hooks, client components, navigation

## 🚦 Development Status
- ✅ Basic project structure
- ✅ Route groups setup
- ✅ Error handling implementation
- ✅ Component library integration
- 🔄 Feature development in progress

## 📝 Notes
- Session authentication is currently mocked for demonstration
- Error boundary can be tested by setting `session = null` in `page.tsx`
- Project follows Next.js 13+ App Router conventions
- Uses Windows development environment (PowerShell)