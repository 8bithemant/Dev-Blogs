<h1 align="center">Dev Blogs</h1>
<p align="center">
<img src="https://dev-to-uploads.s3.amazonaws.com/i/w352xfxy8kyc1micn5pz.png" />
   
   <p align="center">
   <h2 style="margin:auto;"> Dev Blogs is built in React and Redux which is used to publish your Dev.to Blogs on a custom page. </h2>
 <!--  <img src="https://visitor-badge.glitch.me/badge?page_id=8bithemant.Dev-Blogs"/> -->
</p>
   </p>

<p align="center">
  <a href="https://app.netlify.com/sites/hemant-blog/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/c5b6a364-e4d6-4b81-a09b-628e39e84d5b/deploy-status"></img>
  </a>
  <a href="https://github.com/8bithemant/Dev-Blogs/issues">
    <img src="https://img.shields.io/github/issues/8bithemant/Dev-Blogs?style=flat-square"></img>
  </a>
   <a href="https://github.com/8bithemant/Dev-Blogs/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/8bithemant/Dev-Blogs?style=flat-square" />
   </a>
</p>

<p align="center">
   <a aria-label="License" href="https://github.com/8bithemant/Dev-Blogs/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
   </a>
  
  </p>
<p align="center">
<a href="https://app.netlify.com/start/deploy?repository=https://github.com/8bithemant/Dev-Blogs">
   <img alt="Deploy Netlify" src="https://www.netlify.com/img/deploy/button.svg"/>
   </a>
</p>

> Preview
> [hemant-blog.netlify.app](https://hemant-blog.netlify.app)

To customize the blog according to your Dev user id simply follow the Readme (The Steps Below)

# Getting Started?

Star the Repo and click the button here >
[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/8bithemant/Dev-Blogs)

Click on the above button and config with you Github in Netlify.

### After successful netlify config.

Simply go to your profile which would have new Repo, and clone it to your local system

## <u>Visit the following folder after clone.</u>

`src/DevtoConfig.js`

Then change the each section to your details.
Don't forget the https:// that is used for redirects

## In your terminal

Run the following command in you terminal.

`npm i && npm start`
or
`yarn && yarn start`

Cheers You Blog is live on your System. And on localhost.

If you have any issues with already existing remotes, in your file explorer hit show
hidden files and delete the .git folder

_This will lock you into the current version of the app_

Then redo the git process with git init.

Then you can run `npm run build`

Then git add and commit.

Now config the blog with github and push it to your github Repo.

`git push origin master`

Then just login to netlify you should see the deploy.

Give it a couple seconds and see your site.

---

# Alternatively...

#### Clone the repository

git clone https://github.com/8bithemant/Dev-Blogs.git

#### Visit the following folder after clone.

`src/DevtoConfig.js`

Here you can edit the values to load your own data.

- add your dev.to username to username
- and then the others.

#### In your terminal

Run the following command:

`npm i && npm start`
or
`yarn && yarn start`

This will install all thats needed and start a server.
Cheers You Blog is live on your System.

#### Hit the following commands..

`yarn build`

or

`npm build`

### Drop the build folder to Netlify and hurray your page is live...

# Contribution?

Wow, thanks a lot feel free to make a PR, even a simple update will be helpful

## How to contribute?

1. Hit the fork button to create a copy of the repo on your account.

2. Navigate to your version and copy the clone url. A little like this:

   - https://github.com/YourUserName/Dev-Blogs.git

3. Clone locally with `git clone https://github.com/yourname/Dev-Blogs.git`

4. Change into the local version `cd DEV_BLOGS`

5. Add an upstream remote -> `git remote add upstream https://github.com/8bithemant/Dev-Blogs.git`

   - The upstream origin points to the original and origin points to your forked version

6. Now get it working locally:
   `npm i && npm start`
   or
   `yarn && yarn start`

   - This will install dependencies and start the react server

7. Make the changes

8. Add the changes to another branch:

   - > git checkout master
   - > git add .
   - > git commit -m "Your commit message"
   - > git pull upstream master && git push -u origin master
   - > git checkout -b hotfix/name-of-change

9. Now create the pull request: `git push -u origin hotfix/name-of-change`

10. Open the repository on github and hit the new pull request button which should have appeared

11. Add what you did and hit create pull request.

12. Wait for a review :D

---

# Make sure to Star and fork.
