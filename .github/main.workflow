workflow "Build and deploy to GitHub Pages on push" {
  on = "push"
  resolves = ["Deploy to GitHub Pages"]
}

action "Deploy to GitHub Pages" {
  uses = "Chan4077/actions/githubPages@master"
  secrets = ["GITHUB_TOKEN"]
  env = {
    GH_PAGES_BRANCH = "master"
  }
}
