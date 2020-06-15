# personal-website

This website is a work in progress. I want a space to discuss myself and my development work. I recently decided to restart my personal website with a Gastby starter.

www.katherinepatton.com

## Deployment

`npm run build`
`npm run deploy`

### Where it's running

Deploy pushes to an S3 bucket which in turn is distributed by CloudFront. My hosting services are still with HostGator (I should change that) so I then point my DNS records from HostGator to my CloudFront endpoint.
