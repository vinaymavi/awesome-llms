$python = Get-Command python -ErrorAction SilentlyContinue
if ($python) {
    & python "$PSScriptRoot/hello_world.py"
} else {
    Write-Output "Hello, World!"
}
