# TripCraft - AI Powered Travel Planning Platform

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- PostgreSQL
- Redis (optional)
- Docker & Docker Compose (optional)

### Environment Setup

1. **Clone repository**
```bash
git clone https://github.com/AbdulxodiyL/tripcraft.git
cd tripcraft
```

2. **Frontend Setup**
```bash
cd frontend
cp .env.example .env.local
npm install
npm run dev
```

3. **Backend Setup**
```bash
cd backend
cp .env.example .env
npm install
npm run migrate
npm run dev
```

### Using Docker
```bash
docker-compose up -d
```

## 📁 Project Structure

```
tripcraft/
├── frontend/              # Next.js Frontend
│   ├── src/
│   │   ├── app/          # App directory
│   │   ├── components/   # React components
│   │   │   ├── layout/   # Layout components
│   │   │   └── sections/ # Page sections
│   │   ├── styles/       # Global styles
│   │   └── utils/        # Utilities
│   └── package.json
│
├── backend/               # Express.js Backend
│   ├── src/
│   │   ├── index.ts      # Entry point
│   │   ├── routes/       # API routes
│   │   │   ├── auth.ts
│   │   │   ├── trips.ts
│   │   │   ├── destinations.ts
│   │   │   ├── attractions.ts
│   │   │   ├── budget.ts
│   │   │   └── ai.ts
│   │   ├── middleware/   # Express middleware
│   │   ├── services/     # Business logic
│   │   ├── utils/        # Utilities
│   │   └── types/        # TypeScript types
│   ├── prisma/
│   │   └── schema.prisma # Database schema
│   └── package.json
│
├── docker-compose.yml    # Docker configuration
└── README.md            # This file
```

## 🌐 API Endpoints

### Authentication
- `POST /api/auth/register` - Register user
- `POST /api/auth/login` - Login user
- `POST /api/auth/google` - Google OAuth
- `POST /api/auth/telegram` - Telegram login

### Trips
- `POST /api/trips` - Create trip
- `GET /api/trips/user/:userId` - Get user trips
- `GET /api/trips/:tripId` - Get trip details
- `PUT /api/trips/:tripId` - Update trip
- `DELETE /api/trips/:tripId` - Delete trip

### Destinations
- `GET /api/destinations` - Get all destinations
- `GET /api/destinations/:destinationId` - Get destination details
- `POST /api/destinations` - Create destination

### Attractions
- `GET /api/attractions` - Get attractions
- `GET /api/attractions/:attractionId` - Get attraction details
- `POST /api/attractions/:attractionId/favorite` - Save favorite
- `DELETE /api/attractions/:attractionId/favorite/:userId` - Remove favorite

### Budget
- `GET /api/budget/:userId` - Get budget
- `POST /api/budget` - Create/update budget
- `POST /api/budget/expense` - Add expense

### AI Features
- `POST /api/ai/generate-itinerary` - Generate AI itinerary
- `POST /api/ai/recommend-destinations` - Get recommendations
- `POST /api/ai/detect-scams` - Analyze agency
- `POST /api/ai/chat` - Travel tips chatbot

## 🎨 Design System

### Colors
- **Primary**: #2563EB (Blue)
- **Secondary**: #06B6D4 (Cyan)
- **Accent**: #F59E0B (Amber)
- **Background**: #F8FAFC (Light)

### Typography
- **Font**: Inter, Poppins
- **Headings**: Poppins Bold
- **Body**: Inter Regular

## 🔐 Security

- JWT Authentication
- Password hashing with bcryptjs
- Environment variables for secrets
- CORS protection
- Helmet for HTTP headers

## 📦 Technologies

- **Frontend**: Next.js 14, React 18, TypeScript, TailwindCSS, Framer Motion
- **Backend**: Node.js, Express.js, TypeScript, Prisma ORM
- **Database**: PostgreSQL
- **Caching**: Redis
- **AI**: OpenAI GPT-4
- **APIs**: Amadeus, Booking, Google Maps, OpenWeather

## 🚀 Deployment

### Frontend (Vercel)
```bash
vercel
```

### Backend (Railway/Render)
```bash
npm run build
npm start
```

## 📝 Environment Variables

See `.env.example` files in `frontend/` and `backend/` directories.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to branch
5. Open a Pull Request

## 📄 License

MIT License - See LICENSE file

## 👤 Author

**Abdulxodiy Omonboyev** (@AbdulxodiyL)

---

**Made with ❤️ for travelers worldwide**
