# Group 02 - Guiser
Transform your content game with Guiser: a revolutionary app that lets you design multiple personas for any niche, generate targeted content, and seamlessly post to social media. Perfect for content creators, social media managers, or anyone looking to effortlessly boost their online presence.

## How To Run Frontend
1. `cd` to a frontend location
2. `npm install` using node version 20
3. `npm run dev` to run on localhost

## How To Run Backend
1. `cd` to a backend location
2. `npm install` using node version 20
3. `npm run build` to compile Typescript
4. `npm run start` to start the server

This project uses: Typescript, React, MaterialUI, and Express

## Project Description

Guiser (pronounced like geyser) is designed for content creators, marketers, and organizations that want to partially automate the creation and publication of social media content.

Guiser will allow users to: 
- create profiles with personas linked to social media accounts
- use generative AI to create content under the guises of these personas
- post this generated content directly to social media platforms

Guiser will need to store (at least) the following data:
- user credentials (for Guiser and the social media platforms it posts to)
- personas (as preludes injected into generative AI prompts)
- generated content (posts of various forms and associated metadata)

Time permitting, Guiser may also support: 
- scheduled automatic posting of pre-generated content
- generation of responses to replies on original posts
- analytics related to engagement and other metrics for each persona

## Project Task Requirements

### Minimal Requirements
- User Authentication: Implement authentication mechanisms for both Guiser and the social media sites it posts to
- Persona Development: Implement persona management and the linking of these personas to social media accounts
- Content Generation: Enable the generation of text content tailored to personas
- Content Distribution: Automate the posting of generated content to one social media website

### Standard Requirements
- Extended Content Distribution: Automate the posting of generated content to a second social media website
- Responsive Web Design: Design the interface to be simple and functional on both desktop and mobile devices
- Content Storage: Store generated content so that it can be used to generate follow-up content
- Content Editing: Allow users to modify generated content before it is posted to social media websites
- Soft Delete: Implement soft delete on all MongoDB collections in our DB

### Stretch Requirements
- Extended Content Generation and Distribution: Enable the generation of image content tailored to personas and posting on an appropriate site
- Photo capability: Enable users to attach photos to text content for publishing
- Extended Content Distribution: Automate the posting of generated content to a third social media website
- Content Scheduling: Develop a basic scheduling system where users can set dates and times for posts to be automatically published on connected platforms
- Advanced Analytics: Use machine learning to predict the best times for posting and the potential engagement level of different content types

### Minimal Requirement Task Breakdowns
- User Authentication:
  - Implement a secure login system for Guiser with username and password verification
  - Implement secure password reset functionality
  - Create OAuth integration for each supported social media platform
  - Manage and store access tokens securely for automatic re-authentication

- Persona Development:
  - Implement functionality to support the creation and maintenance of personas
  - Develop a system to associate personas with specific social media platform credentials/accounts

## Team Members
- Kiara Melocoton: I’m a 3rd year CS student interested in full-stack development and working in big tech
- Brant Shapka: I'm a 4th year BCS student interested in databases and data analysis/science
- Ewan Townshend: I'm a 4th year BCS student interested in back-end/API dev and programming language theory
- Shumin Wang: I’m a 4th year BCS student interested in full-stack development

## Prototype Sketches

### Landing Page

<img src ="images/landing-page.jpg" width="1000px">

### Login Page

<img src ="images/login-page.jpg" width="1000px">

### Persona Management Page

<img src ="images/persona-page.jpg" width="1000px">
