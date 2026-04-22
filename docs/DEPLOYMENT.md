# Deployment Guide

## Railway (Recommended)
1. Push repo to GitHub (root level, not inside a subfolder)
2. [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Add MySQL plugin
4. Set environment variables (see README)
5. Import `database/schema.sql`

## Render.com
- Build: `cd backend && npm install`
- Start: `node backend/server.js`
- Use PlanetScale or Clever Cloud for MySQL

## VPS
```bash
git clone your-repo && cd your-repo
cd backend && npm install --production
cp .env.example .env && nano .env
mysql -u root -p eternal_rest < ../database/schema.sql
npm install -g pm2
pm2 start server.js --name eternal-rest
pm2 save && pm2 startup
```

## Post-Deploy Checklist
- [ ] NODE_ENV = production
- [ ] JWT_SECRET changed
- [ ] CORS_ORIGINS = your live domain
- [ ] schema.sql imported
- [ ] Default passwords changed
- [ ] HTTPS enabled
