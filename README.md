# JSCC Live Schedule Board

A modern, digital recreation of the JSCC Live conference schedule board, built with Next.js, TypeScript, and shadcn/ui.

## 🎯 Features

- **Interactive Schedule Board**: Digital sticky notes mimicking the physical conference board
- **View Original**: Click "View Original Board" in the navigation to see the real physical board with sticky notes
- **Open Source**: Contribute to the project on [GitHub](https://github.com/alm-engineering/jscc-live)
- **Responsive Design**: Mobile-friendly with horizontal scrolling and sticky time column
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Session Details**: Click any session for more information

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
│   ├── page.tsx           # Home page with navigation
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── ScheduleBoard.tsx  # Main schedule grid
│   ├── Session.tsx        # Individual session sticky note
│   ├── SessionModal.tsx   # Session detail modal
│   ├── ImageModal.tsx     # Original board photo viewer
│   └── ui/               # shadcn/ui components
├── data/
│   └── sessions.json     # Conference session data
├── public/
│   └── sessions.jpg      # Original board photo
├── types/
│   └── schedule.ts       # TypeScript types
└── lib/
    └── utils.ts          # Utility functions
```

## 🎨 Design Features

- **Sticky Note Aesthetic**: Realistic paper notes with shadows and folded corners
- **Board Texture**: Subtle grid pattern background
- **Random Rotations**: Each note has a slight rotation for authenticity
- **Vibrant Colors**: Pastel sticky note colors (yellow, pink, blue, green, purple, orange)
- **Smooth Interactions**: Hover effects and transitions

## 📱 Usage

1. Browse the schedule board - each column represents a room
2. Time slots are shown on the left (sticky on mobile)
3. Click any session to view details
4. Use the navigation to view the original physical board or contribute on GitHub
5. Toggle between light and dark themes

## 🔮 Future Enhancements

- Search and filter functionality
- Export to calendar
- Speaker profiles
- Real-time updates
- Session ratings and feedback

## 🤝 Contributing

Contributions are welcome! Please visit our [GitHub repository](https://github.com/alm-engineering/jscc-live) to:
- Report issues
- Submit pull requests
- Suggest new features

## 📄 License

MIT

---

Built with ❤️ for the JSCC Live conference community
