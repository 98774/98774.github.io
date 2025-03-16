#!/bin/bash
git checkout main  
rm dist -r
npm run build      
git add dist
git commit -m "Rebuild for deployment"
git subtree push --prefix dist origin gh-pages