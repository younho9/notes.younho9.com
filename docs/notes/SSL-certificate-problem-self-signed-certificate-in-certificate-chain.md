---
title: 'SSL certificate problem: self signed certificate in certificate chain'
category: Troubleshooting
tags:
  - npm
  - troubleshooting
aliases:
  - SSL certificate problem: self signed certificate in certificate chain
publish: true
created: 2022-08-10T10:37:00.000+09:00
updated: 2022-08-10T10:37:00.000+09:00
---

# {{ $frontmatter.title }}

## On npm

### Bypassing (risky!)

```sh
npm config set strict-ssl false --global
```

### Setting a certificate file

```sh
npm config set cafile /path/to/your/cert.pem --global
```

## On Node.js

### Bypassing (risky!)

```sh
# windows
set NODE_TLS_REJECT_UNAUTHORIZED=0

# macOS
export NODE_TLS_REJECT_UNAUTHORIZED=0
```

### Setting a certificate file

```sh
# windows
set NODE_EXTRA_CA_CERTS=/path/to/your/cert.pem

# macOS
export NODE_EXTRA_CA_CERTS=/path/to/your/cert.pem
```

## On Git

### Bypassing (risky!)

```sh
git config http.sslVerify false
```

### Setting a certificate file

```sh
git config http.sslCAinfo /your/path/to/cacert-client.pem
```

## On PyPi

### Bypassing (risky!)

```sh
pip install <package_name> --trusted-host pypi.python.org
```

### Setting a certificate file

```sh
pip install --cert /path/to/your/cert.pem
```

## Related

## References

- [npm Blog Archive: npm's Self-Signed Certificate is No More (npmjs.org)](https://blog.npmjs.org/post/78085451721/npms-self-signed-certificate-is-no-more)
- [Understanding Self-Signed Certificate in Chain Issues on Node.js, npm, Git, and other applications | by Jônatas Castro | Medium](https://medium.com/@jonatascastro12/understanding-self-signed-certificate-in-chain-issues-on-node-js-npm-git-and-other-applications-ad88547e7028)