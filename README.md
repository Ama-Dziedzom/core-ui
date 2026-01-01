# Core-UI Design System

A premium design system built on top of **shadcn/ui**, **Tailwind CSS 4**, and **Hugeicons**.

## 🏗️ Architecture

This is a Monorepo powered by **Turborepo** and **pnpm**.

- `apps/docs`: Storybook documentation.
- `apps/web`: Next.js playground app.
- `packages/ui`: Shared React components (shadcn).
- `packages/theme`: Shared Tailwind CSS tokens and variables.
- `packages/tsconfig`: Shared TypeScript configurations.

## 🎨 Creative Vibe

- **Base Style**: Vega
- **Theme**: Indigo
- **Base Color**: Neutral
- **Icons**: Hugeicons
- **Font**: Public Sans

## 🚀 Getting Started

1. Install dependencies: `pnpm install`
2. Start Storybook: `pnpm --filter @core-ui/docs dev`
3. Start Web App: `pnpm --filter web dev`

## 💎 Figma Integration

To sync this code with Figma:

1. Use **[story.to.design](https://story.to.design/)**.
2. Point it to your hosted Storybook URL.
3. It will automatically generate Figma components with variants matching your code.

## 🛠️ Adding Components

To add more shadcn components to the library:

```bash
cd packages/ui
npx shadcn@latest add [component-name]
```

Then export them from `packages/ui/src/index.ts`.
