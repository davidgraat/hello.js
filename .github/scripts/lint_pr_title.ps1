function Test-PrTitle {
    param(
        [string]$title
    )

    if ($title -match '^(breaking|feature|feat|defect|issue|hotfix|fix)\((.+)?\): (.+)$') {
        return $true
    }

    return $false
}

if (Test-PrTitle -title $env:PR_TITLE) {
    Write-Output "PR Title '$env:PR_TITLE' is valid."
    exit 0
} else {
    Write-Error "PR Title '$env:PR_TITLE' is not valid"
    exit 1
}
