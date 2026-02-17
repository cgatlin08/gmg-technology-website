# PowerShell script to push GMG Technology website to GitHub
# 
# BEFORE RUNNING:
# 1. Create a new repository on GitHub at https://github.com/new
#    - Name: gmg-technology-website (or your preferred name)
#    - Description: GMG Technology - Parent Company Website
#    - Choose Public or Private
#    - DO NOT initialize with README, .gitignore, or license
# 2. Replace YOUR_USERNAME below with your GitHub username
# 3. Run this script: .\push-to-github.ps1

$username = Read-Host "Enter your GitHub username"

if ([string]::IsNullOrWhiteSpace($username)) {
    Write-Host "Error: Username cannot be empty" -ForegroundColor Red
    exit 1
}

$repoName = "gmg-technology-website"
$remoteUrl = "https://github.com/$username/$repoName.git"

Write-Host "Setting up remote: $remoteUrl" -ForegroundColor Cyan

git remote add origin $remoteUrl
git branch -M main

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSuccess! Your code has been pushed to GitHub." -ForegroundColor Green
    Write-Host "Repository URL: https://github.com/$username/$repoName" -ForegroundColor Green
    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "1. Go to https://vercel.com and sign in with GitHub" -ForegroundColor Yellow
    Write-Host "2. Click 'Add New...' -> 'Project'" -ForegroundColor Yellow
    Write-Host "3. Import your '$repoName' repository" -ForegroundColor Yellow
    Write-Host "4. Click 'Deploy'" -ForegroundColor Yellow
} else {
    Write-Host "`nError: Failed to push to GitHub. Make sure:" -ForegroundColor Red
    Write-Host "1. The repository exists on GitHub" -ForegroundColor Red
    Write-Host "2. You have the correct permissions" -ForegroundColor Red
    Write-Host "3. You're authenticated with GitHub (may need to enter credentials)" -ForegroundColor Red
}

