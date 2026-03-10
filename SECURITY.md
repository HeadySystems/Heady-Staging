# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| 3.2.x   | ✅ Active |
| < 3.0   | ❌ EOL    |

## Reporting a Vulnerability

**Do NOT open a public issue for security vulnerabilities.**

Email: security@headysystems.com

Include:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

We will acknowledge within 48 hours and provide a fix timeline within 7 days.

## Security Measures

- All API endpoints require bearer-token authentication
- HeadySoul governance layer provides ethical guardrails
- Circuit breakers prevent cascading failures
- Rate limiting on all public endpoints
- Cloudflare Access for zero-trust edge security
- GDPR-compliant memory storage with user consent
- Automatic dependency vulnerability scanning via CI/CD
