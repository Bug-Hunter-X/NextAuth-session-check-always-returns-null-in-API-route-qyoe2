# NextAuth Session Check Always Returns Null in API Route

This repository demonstrates a common issue encountered when using NextAuth.js to protect API routes.  Even after a successful login, the `unstable_getServerSession` function consistently returns `null`, resulting in unauthorized access.

## Problem

The provided code attempts to verify user authentication using NextAuth.js within an API route. Despite successful login, the `session` variable remains null, causing the API route to consistently return a 401 Unauthorized status.

## Solution

A corrected version of the API route is provided, which properly retrieves and utilizes the NextAuth session.

## How to reproduce

1. Clone this repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Log in using NextAuth
5. Attempt to access the protected API route.  You'll observe that the 401 error is returned, even with a valid session.