#  Secure Password Reset Flow: A User-Friendly Approach 

Welcome to my project! 

##  Overview

1.  Forget Password Page
   - We've designed a dedicated page for password recovery. Users enter their registered email ID.

2. User Existence Verification
   - The system validates the existence of the user in the database.
   - If the user is not found, an error message is displayed.

3.  OTP Generation and Dispatch
   - A unique One-Time Password (OTP) is generated and dispatched with a password reset link to the user's email.
   - The OTP is securely stored in the database for subsequent verification.

4. ** User Verification
   - Upon clicking the link, the system extracts the OTP and validates it against the stored value.
   - If the OTP is valid, the password reset form is displayed. If not, an error message is shown.



##  Live Demo

Explore our secure password reset flow in action. Visit our [Live Demo](https://github122.netlify.app/) and experience the user-friendly process.

## Err
It has a issue that can be solve at post man
