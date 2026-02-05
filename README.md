# 🚀 PricePulse – Smart Price Tracker

**PricePulse** is a modern web app that tracks product prices from **any e-commerce website**, stores price history, and sends **instant email alerts** when prices drop. Built with a cyber-modern UI and real automation pipeline.

---

## ✨ Features

* 🔍 **Universal Tracking** – Works with Amazon, Flipkart, Walmart, and any store
* 📉 **Price History Graphs** – Visual trends using Recharts
* ⚡ **Automated Scraping** – Powered by Firecrawl
* 🔔 **Email Alerts** – Price drop notifications via Resend
* 🔐 **Google OAuth** – Secure authentication
* 🧠 **Cron Automation** – Background price checks
* 🎨 **Cyberpunk UI** – Built with ShadCN + Tailwind
* 🌗 **Dark/Light Mode**
* 🗄 **Supabase Backend** – RLS + Service Role
* 📱 Fully responsive & modern UX

---

## 🛠 Tech Stack

**Frontend**

* Next.js (App Router)
* React
* Tailwind CSS
* ShadCN UI
* Recharts
* Lucide Icons

**Backend & Services**

* Supabase (Auth + Database + RLS)
* Firecrawl – Web scraping
* Resend – Email service
* Google OAuth
* Vercel 

---

## ⚙ How It Works

1. User signs in via Google
2. Pastes any product URL
3. Firecrawl extracts price & details
4. Stored in Supabase
5. Cron job checks prices daily
6. On price drop → Resend sends email
7. User views history in charts

---

## 🚦 Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

CRON_SECRET=

RESEND_API_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## 🧪 Run Locally

```bash
git clone <repo-url>
cd pricepulse
npm install
npm run dev
```

Open → [http://localhost:3000](http://localhost:3000)

---



---

## 📬 Cron Endpoint

Secure endpoint:

```
POST /api/cron/check-prices
Authorization: Bearer CRON_SECRET
```

* Scrapes all products
* Updates DB
* Inserts price history
* Sends alerts

---



## 👨‍💻 Author

**Dhruv**

Built with ❤️ and lots of debugging.

---


