# Ilmara website files — October 6, 2026

## Open it immediately

Unzip the folder and double-click OPEN-PREVIEW.html. Open it in a normal browser such as Safari, Chrome or Edge, rather than an attachment preview. Page navigation, tabs, expandable details and public content work without installing anything. Logo and JavaScript are embedded, so moving this file does not break those assets. Online fonts may fall back to system fonts offline.

This file is explicitly an OFFLINE PREVIEW using bundled default content, not a second live database. Signup controls open https://ilmara.org/#involved; admin links open https://ilmara.org/admin. It does not claim to save forms locally or expose admin data. Live content edits and financial records are not included in this snapshot.

For the operational hosted site, use https://ilmara.org/ . Sign in at /admin with an authorized account.

## Complete application

The project/ folder contains the latest HTML, CSS, JavaScript, server/API code, admin editors, image assets, database schema, all SQL migrations, package lockfile, build support, configuration and the existing dist/ production bundle. The current donation flow uses LaunchGood; old on-site payment endpoints are disabled.

The source site.html is a server template. Do not double-click it expecting the API or absolute asset paths to run. Use OPEN-PREVIEW.html for that purpose.

## Development setup

Install Node.js >=22.13 and pnpm 11.25.0. In project/:

    pnpm install --frozen-lockfile
    cp .env.example .env
    pnpm dev

Portable development normally uses http://localhost:5173 . The site requires the Cloudflare D1 DB binding and migrated database. Portable development provides a localhost-only mock sign-in as seedy@sites.test; add that address to a local ADMIN_EMAILS setting only if testing admin access. Never deploy development mock authentication publicly.

To initialize a fresh local database for the built Worker preview:

    pnpm build
    for migration in drizzle/*.sql; do
      pnpm exec wrangler d1 execute DB --local --config dist/server/wrangler.json --persist-to .wrangler/state --file "$migration"
    done
    pnpm start

Run each migration once, in numeric order, against an empty database. Development and built-worker previews may use different local database state. The built worker does not supply its own identity gateway; admin sign-in requires Sites hosting or a replacement verified authentication system. Public pages and APIs need the correct runtime values and DB binding.

## External setup still needed

- LaunchGood: create your fundraiser, then paste its HTTPS URL in Admin → Setup & activity → LaunchGood fundraiser. The donation submit button intentionally remains disabled while the URL is blank. Once configured, the server saves the email before returning the redirect URL. Signup is not proof of a donation. LaunchGood totals are not automatically synced.
- Email: configure a Resend API key and verified sender in runtime secret settings before email delivery can work. Saving a subscriber and sending an email are separate operations.
- Production: use the existing Sites deployment, or provision hosting, a database and verified server-side authentication. Source files do not transfer managed login, domain/DNS settings or certificates. Never trust caller-supplied identity headers on a new host.

Secrets, live database records, uploaded profile photos stored in the database, and original Git history are excluded. The bundled schema and default content are included. Existing admin content edits require a separate database backup. This is not a credentials-inclusive disaster-recovery backup.

## Verification

JavaScript syntax, all static inline-handler names, navigation destinations, duplicate IDs, and switching between every public page were checked in a DOM test harness. This is not an end-to-end verification of external services or every admin mutation. The previous production build and email save-before-redirect checks passed. Actual donations and email delivery cannot be verified until the external setup is complete.
