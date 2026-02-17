# GoDaddy DNS Setup for gmgtechllc.com

## Step 1: Add Domain in Vercel Dashboard

Since the domain may be assigned to another project, you'll need to:

1. Go to: https://vercel.com/chris-gatlins-projects/gmg-technology-website/settings/domains
2. Click **"Add Domain"**
3. Enter: `gmgtechllc.com`
4. If it says the domain is already assigned to another project:
   - Go to that project's settings and remove the domain first
   - OR contact Vercel support to transfer it
5. Also add: `www.gmgtechllc.com` (for the www subdomain)

## Step 2: Configure DNS in GoDaddy

### Option A: Use CNAME for www (Recommended)

1. **Log in to GoDaddy**
   - Go to https://www.godaddy.com
   - Sign in to your account

2. **Navigate to DNS Management**
   - Click on "My Products" or "Domains"
   - Find `gmgtechllc.com` in your domain list
   - Click on the domain name
   - Click on **"DNS"** tab (or "Manage DNS")

3. **Add CNAME Record for www**
   - Click **"Add"** or **"Add Record"**
   - **Type**: Select `CNAME`
   - **Name**: Enter `www`
   - **Value**: Enter `cname.vercel-dns.com.` (include the trailing dot)
   - **TTL**: Leave as default (usually 600 seconds) or set to 3600
   - Click **"Save"**

4. **Add A Record for Root Domain (gmgtechllc.com)**
   - Click **"Add"** or **"Add Record"**
   - **Type**: Select `A`
   - **Name**: Enter `@` (this represents the root domain)
   - **Value**: Enter `76.76.21.21` (Vercel's IP - verify in Vercel dashboard)
   - **TTL**: Leave as default or set to 3600
   - Click **"Save"**

### Option B: Use Vercel Nameservers (Easiest - Recommended)

If you want Vercel to manage all DNS:

1. **In Vercel Dashboard**
   - After adding the domain, Vercel will show you nameservers
   - They will look like:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`

2. **In GoDaddy**
   - Go to your domain's DNS settings
   - Find the **"Nameservers"** section
   - Click **"Change"** or **"Edit"**
   - Select **"Custom"** or **"I'll use my own nameservers"**
   - Enter the Vercel nameservers:
     - Nameserver 1: `ns1.vercel-dns.com`
     - Nameserver 2: `ns2.vercel-dns.com`
   - Click **"Save"**

   **Note**: This will transfer all DNS management to Vercel. Any existing DNS records in GoDaddy will stop working.

## Step 3: Verify DNS Records

After adding the records, verify they're correct:

### For CNAME (www):
- **Name**: `www`
- **Type**: `CNAME`
- **Value**: `cname.vercel-dns.com.`

### For A Record (root):
- **Name**: `@` or blank
- **Type**: `A`
- **Value**: `76.76.21.21` (or the IP Vercel provides)

## Step 4: Wait for DNS Propagation

- DNS changes typically take **15 minutes to 48 hours** to propagate
- Usually works within **1-2 hours**
- You can check propagation status:
  - Use https://dnschecker.org
  - Search for `gmgtechllc.com` and `www.gmgtechllc.com`

## Step 5: Verify in Vercel

1. Go back to Vercel dashboard: https://vercel.com/chris-gatlins-projects/gmg-technology-website/settings/domains
2. You should see:
   - ✅ Green checkmark when DNS is verified
   - 🔒 SSL certificate will be automatically provisioned
   - Both `gmgtechllc.com` and `www.gmgtechllc.com` should be listed

## Troubleshooting

### Domain Already Assigned Error
If you see "domain already assigned to another project":
1. Go to: https://vercel.com/dashboard
2. Check all your projects
3. Find which project has `gmgtechllc.com`
4. Remove it from that project's domain settings
5. Then add it to the new project

### DNS Not Working After 24 Hours
- Double-check DNS records match exactly (including trailing dots)
- Verify TTL settings
- Make sure you didn't accidentally delete other important DNS records
- Check if GoDaddy has any DNS propagation delays

### SSL Certificate Issues
- Vercel automatically provisions SSL certificates
- If SSL shows as pending, DNS may not be fully propagated yet
- Wait a few more hours and check again

## Quick Reference: GoDaddy DNS Records

```
Type    Name    Value                    TTL
----    ----    -----                    ---
A       @       76.76.21.21              3600
CNAME   www     cname.vercel-dns.com.    3600
```

**Important Notes:**
- The `@` symbol represents the root domain (gmgtechllc.com)
- The trailing dot (.) in the CNAME value is important
- TTL of 3600 seconds (1 hour) is recommended

## Need Help?

- **Vercel Support**: https://vercel.com/support
- **GoDaddy Support**: https://www.godaddy.com/help
- **Check DNS Propagation**: https://dnschecker.org

---

Once DNS propagates, your site will be live at:
- https://gmgtechllc.com
- https://www.gmgtechllc.com

Both will automatically redirect to HTTPS with SSL certificates! 🔒

