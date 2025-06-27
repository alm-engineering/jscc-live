# JSCC Live Schedule Board

A modern, minimal conference schedule board built with Next.js, TypeScript, and shadcn/ui.

## 🎯 Features

- **Modern Design**: Clean, minimal interface using shadcn/ui components
- **Interactive Schedule**: Click on any session for detailed information
- **Color-Coded Sessions**: 
  - 🟡 JavaScript sessions
  - 🔵 Workshops
  - 🩷 Special events
  - 🟠 Tools & Tech talks
- **Responsive Layout**: Horizontal scrolling for smaller screens
- **Dark Mode Support**: Automatic theme switching based on system preferences

## 🚀 Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **shadcn/ui** for modern UI components
- **Lucide Icons** for minimal iconography

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🏗️ Project Structure

```
├── app/
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ScheduleBoard.tsx  # Main schedule grid
│   ├── Session.tsx        # Individual session card
│   ├── SessionModal.tsx   # Session detail modal
│   └── ui/               # shadcn/ui components
├── types/
│   └── schedule.ts       # TypeScript types
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Design Features

- **Gradient backgrounds** for visual depth
- **Subtle animations** on hover and click
- **Modern typography** with clear hierarchy
- **Accessible color contrast** ratios
- **Smooth transitions** for better UX

## 📱 Usage

1. Browse the schedule by scrolling horizontally
2. Click on any session to view details
3. Sessions are organized by time (rows) and room (columns)
4. Color coding helps identify session types at a glance

## 🔮 Future Enhancements

- Search and filter functionality
- Export to calendar
- Speaker profiles
- Real-time updates
- Session ratings and feedback

## 📄 License

MIT
