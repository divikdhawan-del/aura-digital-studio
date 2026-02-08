
# Plan: Update Contact Information for DD Development

## Overview
Update all contact details across the website to reflect your actual information.

## Changes Required

### 1. Footer Component (`src/components/layout/Footer.tsx`)
Update the contact section with your details:
- **Email**: divikdhawan@gmail.com
- **Phone**: +91 7297889356 (formatted with India country code)
- **Location**: Jaipur, Rajasthan, India

### 2. Contact Page (`src/pages/ContactPage.tsx`)
Update the contact information section that displays alongside the form:
- **Email**: divikdhawan@gmail.com
- **Phone**: +91 7297889356
- **Location**: Jaipur, Rajasthan, India
- Also update the phone placeholder in the form field to show an Indian format

## Files to Modify
| File | Changes |
|------|---------|
| `src/components/layout/Footer.tsx` | Lines 91-102: Update email, phone, and location |
| `src/pages/ContactPage.tsx` | Lines 129, 203, 210, 217: Update phone placeholder and contact info display |

## Summary
Two files will be updated to replace placeholder contact information with your actual details. The phone number will be formatted with the +91 India country code for international consistency.
