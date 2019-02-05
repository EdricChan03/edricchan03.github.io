workflow "Build and deploy to GitHub Pages on push" {
  on = "push"
  resolves = [
    "Build & Deploy to GitHub Pages",
    "Only allow website-v2 branch",
  ]
}

action "Install dependencies" {
  needs = ["Only allow website-v2 branch"]
  uses = "actions/npm@master"
  args = "install --unsafe-perm"
}

action "Build & Deploy to GitHub Pages" {
  uses = "Chan4077/actions/githubPages@master"
  needs = ["Install dependencies"]
  secrets = [
    "GH_PAGES_TOKEN",
    "GITHUB_TOKEN",
  ]
  env = {
    GH_PAGES_BRANCH = "master"
    GIT_FORCE = "false"
    OVERRIDE_GH_PAGES_BRANCH = "true"
  }
}

action "Only allow website-v2 branch" {
  uses = "actions/bin/filter@master"
  args = "branch website-v2"
}
