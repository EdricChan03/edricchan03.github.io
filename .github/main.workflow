workflow "Build and deploy to GitHub Pages on push" {
  on = "push"
  resolves = ["Build & Deploy to GitHub Pages"]
}

action "Install dependencies" {
  uses = "actions/npm@e7aaefed7c9f2e83d493ff810f17fa5ccd7ed437"
  args = "install --unsafe-perm"
}

action "Build & Deploy to GitHub Pages" {
  uses = "Chan4077/actions/githubPages@master"
  needs = ["Install dependencies"]
  args = "install"
  secrets = ["GITHUB_TOKEN"]
  env = {
    GH_PAGES_BRANCH = "master"
  }
}
