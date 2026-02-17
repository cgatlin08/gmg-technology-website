# GMG Technology Website - Setup Guide

This guide will walk you through setting up the GitHub repository, Vercel deployment, and domain configuration.

## Step 1: Initialize Git and Push to GitHub

1. **Initialize Git repository:**
   ```bash
   cd C:\Users\golfe\gmg-technology-website
   git init
   git add .
   git commit -m "Initial commit - GMG Technology website"
   ```

2. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `gmg-technology-website` (or your preferred name)
   - Description: "GMG Technology - Parent Company Website"
   - Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
   - Click "Create repository"

3. **Connect and push to GitHub:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/gmg-technology-website.git
   git branch -M main
   git push -u origin main
   ```
   Replace `YOUR_USERNAME` with your GitHub username.

## Step 2: Install Dependencies

Before deploying, install the project dependencies:

```bash
npm install
```

Test the development server locally:

```bash
npm run dev
```

Visit http://localhost:3000 to verify everything works.

## Step 3: Deploy to Vercel

1. **Sign in to Vercel:**
   - Go to https://vercel.com
   - Sign in with your GitHub account (recommended for easy integration)

2. **Create New Project:**
   - Click "Add New..." → "Project"
   - You'll see a list of your GitHub repositories
   - Find and select `gmg-technology-website`
   - Click "Import"

3. **Configure Project:**
   - Vercel will auto-detect Next.js settings
   - Framework Preset: Next.js (should be auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `.next` (auto-detected)
   - Install Command: `npm install` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Once deployed, you'll get a URL like: `gmg-technology-website.vercel.app`

## Step 4: Connect Your Domain

1. **Add Domain in Vercel:**
   - In your Vercel project dashboard, go to "Settings" → "Domains"
   - Click "Add Domain"
   - Enter your domain name (e.g., `gmgtechnology.com` or `www.gmgtechnology.com`)
   - Click "Add"

2. **Configure DNS Records:**
   
   Vercel will provide you with DNS configuration options. Choose one:

   **Option A: CNAME Record (Recommended for subdomains)**
   - Type: `CNAME`
   - Name: `www` (or your subdomain)
   - Value: `cname.vercel-dns.com.`
   - TTL: Auto or 3600

   **Option B: A Record (For root domain)**
   - Type: `A`
   - Name: `@` (or leave blank for root domain)
   - Value: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IPs)
   - TTL: Auto or 3600

   **Option C: Use Vercel Nameservers (Easiest)**
   - If your domain registrar supports it, you can use Vercel's nameservers:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`

3. **Update DNS at Your Registrar:**
   - Log in to your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)
   - Navigate to DNS Management
   - Add the DNS records provided by Vercel
   - Save changes

4. **Wait for Propagation:**
   - DNS changes can take 24-48 hours to propagate globally
   - Usually works within a few hours
   - Vercel will automatically provision SSL certificates once DNS is verified

5. **Verify Domain:**
   - Vercel will show the domain status in the Domains section
   - Once verified, your site will be accessible at your custom domain
   - SSL certificate will be automatically configured

## Step 5: Automatic Deployments

Once connected:
- Every push to the `main` branch will automatically trigger a new deployment
- Vercel creates preview deployments for pull requests
- You can view deployment history in the Vercel dashboard

## Troubleshooting

### DNS Issues
- If domain doesn't resolve after 24 hours, double-check DNS records
- Use `dig yourdomain.com` or `nslookup yourdomain.com` to verify DNS propagation
- Ensure TTL is set correctly

### Build Errors
- Check Vercel build logs in the deployment dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility (Vercel uses Node 18+ by default)

### Domain Not Connecting
- Verify DNS records match exactly what Vercel provided
- Check for typos in domain name
- Ensure domain is not already connected to another Vercel project

## Next Steps

- Customize the website content in `app/page.tsx`
- Add more pages (About, Services, Contact) as needed
- Update branding and colors in `tailwind.config.js`
- Add your logo and images to the `public/` folder

## Support

For Vercel-specific issues:
- Vercel Documentation: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

For Next.js issues:
- Next.js Documentation: https://nextjs.org/docs

