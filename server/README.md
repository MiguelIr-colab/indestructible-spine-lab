# Backend Server

Express server for handling Stripe payments and Mailrelay subscriptions.

## Setup

1. Install dependencies:
```bash
cd server
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Fill in your environment variables in `.env`

## Run

Development:
```bash
npm run dev
```

Production:
```bash
npm start
```

## Endpoints

- `GET /api/health` - Health check
- `POST /api/create-payment-intent` - Create Stripe Payment Intent
- `POST /api/apply-coupon` - Apply coupon to Payment Intent
- `POST /api/mailrelay/subscribe` - Subscribe to Mailrelay
- `POST /api/mailrelay/resend` - Resend confirmation email
