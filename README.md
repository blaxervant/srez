# srez

A lightweight [Territorial.io](https://territorial.io) client.

Live site: <https://blaxervant.github.io/srez/>

## Features

- Opening automation, infinite expansion and automatic bot attack
- Opening strategy editor with tick offset and named presets
- Ship routes, ship progress, ship panel, auto recall and auto intercept
- Spawn labels, team tags, clan spawning and display options
- Lobby chat Unicode conversion
- Replay tools, lobby filters and reminders
- Account Vault (included as-is)

This build intentionally leaves out the Tab Mode bot iframe, the music player
and the anime theme.

## Development

```bash
npm ci
npm run build-only      # rebuild the client from the existing patched game script
npm run build-client    # rebuild only src/
npm run patch           # rebuild only game patches
```

`game/latest.js` is the pinned game script. Do not run `npm run build` unless you
are updating game compatibility, because it downloads a new game version.

Local preview:

```bash
python3 -m http.server 8000 --directory build
```

## Deployment

Pushing to `main` runs `.github/workflows/deploy_github_pages.yml`, which builds
the site and publishes it to GitHub Pages.

## License

See [LICENSE.txt](LICENSE.txt).
