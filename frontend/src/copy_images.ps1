$images = @(
    @("C:\Users\saite\.gemini\antigravity\brain\40dd0a04-3604-4fc1-a75b-6d7684e22ed6\ocean_dash_1775830191943.png", "img1.png"),
    @("C:\Users\saite\.gemini\antigravity\brain\40dd0a04-3604-4fc1-a75b-6d7684e22ed6\ev_car_app_1775830234230.png", "img2.png"),
    @("C:\Users\saite\.gemini\antigravity\brain\40dd0a04-3604-4fc1-a75b-6d7684e22ed6\smart_home_app_1775830279565.png", "img3.png"),
    @("C:\Users\saite\.gemini\antigravity\brain\40dd0a04-3604-4fc1-a75b-6d7684e22ed6\crypto_dashboard_1775830299361.png", "img4.png")
)

$destDir = "c:\Users\saite\OneDrive\Documents\vynedam-AI-main (1) (1)\vynedam-AI-main (1)\vynedam-AI-main\frontend\src\pages"

foreach ($item in $images) {
    if (Test-Path $item[0]) {
        Copy-Item $item[0] -Destination (Join-Path $destDir $item[1]) -Force
        Write-Host "Copied $($item[1])"
    } else {
        Write-Host "File not found: $($item[0])"
    }
}
