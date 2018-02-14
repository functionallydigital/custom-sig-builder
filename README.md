# Custom Signature Builder

## Purpose of this repository

This repository contains the source code for a automated email signature builder.

The aim of the project is to produce a system that will allow companies to quickly set up a system to produce standardised email signatures across the company.


## Table Of Contents

<!-- vim-markdown-toc GitLab -->

* [Project directory structure](#project-directory-structure)
* [Deploying to production](#deploying-to-production)

<!-- vim-markdown-toc -->


## Project directory structure

```
.
├── assets                    # contains the standard images used in the app (twitter logo etc).
├── css                       # contains the styling for the app.
├── js                        # contains the javascript that produces the signature.
├── companydetails.js         # company details required for producing the signature.
├── index.html                # html for the app.
└── README.md
```

## Deploying to production

To use this tool, all you need to do is:

* clone this repository to your preferred hosting platform
* update the companydetails.js file with your company details (there are example details in there, remove any fields you don't need)
* and point the url you want to use to access the tool to the index.html file.



