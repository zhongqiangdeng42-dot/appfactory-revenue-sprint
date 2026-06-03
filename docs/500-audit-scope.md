# USD 500 iOS Release-Readiness Audit

The audit is a fixed 48-hour diagnostic for an iOS app, TestFlight build, or
StoreKit/App Store Connect blocker.

## Scope

- Review SwiftUI/Xcode project structure at the release boundary.
- Check StoreKit product ids, subscription/lifetime purchase setup, and local
  StoreKit configuration.
- Review Fastlane, screenshots, metadata, privacy labels, build numbers,
  signing assumptions, and TestFlight readiness.
- Classify blockers as code, signing, StoreKit, screenshot, metadata, App
  Review, IAP linkage, or owner-only Apple account action.
- Deliver a concise action report and fixed quote for any repair sprint.

## Deliverables

- One written audit report.
- Evidence table with pass/fail/blocked status.
- List of owner-only actions that require Apple account access.
- List of private information that must not be shared publicly.
- Recommended next fixed-price sprint, if one is justified.

## Out Of Scope

- Guaranteed App Review approval.
- Password or private-key custody.
- Work that bypasses Apple, GitHub, marketplace, or payment-platform rules.
- Copying third-party apps or using unauthorized source code.
- Public handling of customer data, unreleased source, or App Store Connect
  secrets.

## Payment Boundary

Work starts after payment is received, marketplace escrow is funded, or a signed
payable invoice exists. Public GitHub issues are used only for initial fit and
non-sensitive scope.
