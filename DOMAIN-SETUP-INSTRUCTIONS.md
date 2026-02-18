# Quick Setup: Connect gmgtechllc.com to Your Website

## ✅ Good News!
Your domain `gmgtechllc.com` is already in your Vercel account. Now we just need to assign it to this project.

## Step 1: Assign Domain to Project (2 minutes)

1. **Open Vercel Dashboard**
   - Go to: https://vercel.com/chris-gatlins-projects/gmg-technology-website/settings/domains

2. **Add Domain**
   - Click the **"Add Domain"** button
   - Enter: `gmgtechllc.com`
   - Click **"Add"**
   - If it says "already assigned to another project":
     - Go to https://vercel.com/dashboard
     - Find the other project that has this domain
     - Remove it from that project's domain settings
     - Then come back and add it here

3. **Add www Subdomain**
   - Click **"Add Domain"** again
   - Enter: `www.gmgtechllc.com`
   - Click **"Add"**

## Step 2: Configure GoDaddy DNS (5 minutes)

### Quick Setup - Use These Exact Records:

1. **Log in to GoDaddy**
   - Go to https://www.godaddy.com and sign in

2. **Open DNS Management**
   - Click "My Products" → Find `gmgtechllc.com` → Click "DNS"

3. **Add These Two Records:**

   **Record 1 - Root Domain (gmgtechllc.com):**
   - Click **"Add"**
   - **Type**: `A`
   - **Name**: `@` (or leave blank)
   - **Value**: `76.76.21.21`
   - **TTL**: `600` (or default)
   - **Save**

   **Record 2 - www Subdomain:**
   - Click **"Add"**
   - **Type**: `CNAME`
   - **Name**: `www`
   - **Value**: `cname.vercel-dns.com.` (include the trailing dot!)
   - **TTL**: `600` (or default)
   - **Save**

### Important Notes:
- The `@` symbol means the root domain (gmgtechllc.com)
- The trailing dot (.) in the CNAME value is required
- If you already have an A record for `@`, update it instead of creating a new one
- If you already have a CNAME for `www`, update it instead of creating a new one

## Step 3: Verify in Vercel (Wait 5-15 minutes)

1. Go back to: https://vercel.com/chris-gatlins-projects/gmg-technology-website/settings/domains
2. You should see:
   - ✅ Green checkmark next to `gmgtechllc.com`
   - ✅ Green checkmark next to `www.gmgtechllc.com`
   - 🔒 SSL certificates automatically configured

## Step 4: Test Your Site

Once DNS propagates (usually 15 minutes to 2 hours):
- Visit: https://gmgtechllc.com
- Visit: https://www.gmgtechllc.com

Both should work and automatically redirect to HTTPS!

## Troubleshooting

### "Domain already assigned" Error
**Solution**: The domain is assigned to another project. 
1. Go to https://vercel.com/dashboard
2. Check all projects to find which one has `gmgtechllc.com`
3. Remove it from that project
4. Add it to `gmg-technology-website` project

### DNS Not Working After 2 Hours
- Double-check the DNS records match exactly
- Verify the A record value is `76.76.21.21`
- Verify the CNAME value is `cname.vercel-dns.com.` (with trailing dot)
- Check DNS propagation: https://dnschecker.org/#A/gmgtechllc.com

### SSL Certificate Pending
- This is normal - wait for DNS to fully propagate
- Usually takes 15 minutes to 2 hours
- Vercel will automatically provision SSL once DNS is verified

## Current Status

- ✅ Website deployed: https://gmg-technology-website.vercel.app
- ✅ Domain in Vercel account: gmgtechllc.com
- ⏳ **Next**: Assign domain to project + configure GoDaddy DNS

---

**Need help?** Check the detailed guide in `GODADDY-DNS-SETUP.md`


