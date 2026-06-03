# Sample Audit: ParkTimer Release Readiness

This public sample shows the shape of the USD 500 AppFactory iOS
release-readiness audit. It intentionally separates local technical readiness
from App Store Connect readiness.

## Executive Summary

ParkTimer has a strong local release foundation, but App Store revenue cannot be
claimed until the App Store Connect app record and in-app purchase state are
verified under the correct Apple Developer team.

Local readiness evidence:

- StoreKit configuration is present for monthly and lifetime products.
- Fastlane release lanes and metadata surfaces exist.
- Screenshots and App Store metadata are prepared.
- Build number drift was found, fixed, and rechecked.
- Local preflight passed when the live App Store Connect IAP gate was
  intentionally skipped.

Release blocker:

- The live App Store Connect API context could not find an app record for the
  expected bundle id.
- The previously recorded App Store app id returned `404 NOT_FOUND`.
- Real sandbox purchase, restore purchase, or production purchase availability
  cannot be claimed until the App Store Connect mapping is repaired.

## Checks

| Check | Result | Notes |
| --- | --- | --- |
| StoreKit configuration | Pass | Local products are present. |
| Fastlane release surface | Pass | TestFlight and metadata lanes exist. |
| Screenshot evidence | Pass | iPhone screenshots are available. |
| Build number alignment | Fixed | Local project and release env were aligned. |
| App icon alpha | Pass | Large app icon has no alpha issue. |
| Live ASC app record | Fail | Current API context cannot find the app record. |
| Live ASC IAP state | Blocked | Requires correct app record and team mapping. |

## Audit Output

The USD 500 audit delivers:

1. Evidence table for local build, StoreKit, signing, screenshot, metadata, and
   App Store Connect gates.
2. Clear split between code work, owner-only Apple account actions, and private
   credential-sensitive steps.
3. A fixed-price repair recommendation only after the blocker is classified.

## Required Owner Actions

1. Open App Store Connect in the correct Apple Developer team.
2. Confirm whether the app record exists for the intended bundle id.
3. If the app exists under a different bundle id, align the local project,
   Fastlane settings, StoreKit product ids, and App Store Connect records.
4. If the app does not exist, create the app record first.
5. Confirm or create the subscription and lifetime in-app purchase products.
6. Re-run the live App Store Connect and sandbox purchase checks.

## Boundaries

- No App Review approval guarantee.
- No revenue claim until App Store availability and payment evidence exist.
- No password, private-key, or customer-data custody in public channels.
- Private repository or App Store Connect access starts only after payment,
  marketplace escrow, or a signed payable invoice.
