# CloudCart – Cloud-Based E-Commerce Platform

## Project Overview
CloudCart is a responsive e-commerce demonstration application designed as the application layer of a cloud-based e-commerce infrastructure project. It provides product discovery, search/filtering, shopping cart and demo checkout functionality.

## Features
- Responsive e-commerce landing page
- Product catalog with categories
- Search and filtering
- Product details and pricing
- Shopping cart using browser local storage
- Demo checkout (no real payment)
- Cloud-focused UI and infrastructure messaging
- Responsive design for desktop/mobile

## Technology Stack
- HTML5
- CSS3
- JavaScript (ES6)
- Browser LocalStorage
- GitHub for source-code version control
- AWS-ready deployment architecture (EC2, VPC, Load Balancer, Auto Scaling, S3/RDS/CloudWatch can be integrated separately)

## Architecture Concept
Users → DNS → Application Load Balancer → Auto Scaling Web Servers → Application/Data Services

The infrastructure assignment can use a VPC containing public and private subnets, Internet Gateway, NAT Gateway, security groups and managed AWS services. This repository contains the application/demo layer.

## Run Locally
1. Download/clone the repository.
2. Open `index.html` in a browser.
3. No build step or API key is required.

## Deployment
The static application can be hosted on an Nginx web server, object storage/static hosting, or another web server. For an AWS EC2 deployment, copy the project files to the web server document root and configure the server to serve `index.html`.

## Security Considerations
- No payment processing is implemented.
- No credentials or API keys are stored in the repository.
- Production deployment should use HTTPS, least-privilege IAM, private database access, security groups, backups and monitoring.

## Testing Checklist
- [x] Home page loads
- [x] Product cards render
- [x] Search works
- [x] Category filtering works
- [x] Add to cart works
- [x] Cart total updates
- [x] Demo checkout works
- [x] Responsive layout included

## Academic Note
This project is a demonstration and does not process real payments or represent a production financial transaction system.
