var app = angular.module('instagramLinksApp', ['ngMaterial', 'app.config', 'app.directives']);
app.controller('MainController', ($scope) => {
  $scope.links = [
    {
      postUrl: 'https://www.instagram.com/p/BeQU7V5HpHS',
      postDate: '22-01-2018',
      postTitle: 'Old music of the week | #1',
      linkId: 'old-music-of-week-1',
      linkActions: [
        {
          btnText: 'Listen on Spotify',
          btnLink: 'https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ?si=QTmklq00Q8mqPnGbi3LjcQ',
          btnIcon: 'spotify'
        }
      ]
    },
    {
      postUrl: 'https://www.instagram.com/p/Bd9pReGH4l0',
      postDate: '15-01-2018',
      postTitle: 'Quote of The Day | #2',
      linkId: 'quote-of-day-2',
      linkActions: [
        {
          btnText: 'Google Drive Folder',
          btnLink: 'https://drive.google.com/drive/folders/1dDBlw3jUVC35kdRNL2LBS_PrhCgbrJ5g?usp=sharing',
          btnIcon: 'folder-google-drive'
        },
        {
          btnText: 'Made with Sketchapp',
          btnLink: 'https://sketchapp.com',
          btnIcon: 'diamond'
        }
      ]
    },
    {
      postUrl: 'https://www.instagram.com/p/Bd7v_lOHiqX',
      postDate: '14-01-2018',
      postTitle: 'Quote of The Day | #1',
      linkId: 'quote-of-day-1',
      linkActions: [
        {
          btnText: 'Google Drive Folder',
          btnLink: 'https://drive.google.com/drive/folders/1dDBlw3jUVC35kdRNL2LBS_PrhCgbrJ5g?usp=sharing',
          btnIcon: 'folder-google-drive'
        },
        {
          btnText: 'Made with Sketchapp',
          btnLink: 'https://sketchapp.com',
          btnIcon: 'diamond'
        }
      ]
    },
    {
      postUrl: 'https://www.instagram.com/p/Bd2Cp5inAtD',
      postDate: '12-01-2018',
      postTitle: 'Pocket Casts 666MB',
      linkId: 'pocket-casts-triple-six-megabytes',
      linkActions: [
        {
          btnText: 'Pocket Casts on Play Store',
          btnLink: 'https://play.google.com/store/apps/details?id=au.com.shiftyjelly.pocketcasts',
          btnIcon: 'google-play'
        },
        {
          btnText: 'Pocket Casts on iOS App Store',
          btnLink: 'https://itunes.apple.com/au/app/pocket-casts/id414834813',
          btnIcon: 'apple'
        },
        {
          btnText: 'Pocket Casts official website',
          btnLink: 'https://www.shiftyjelly.com/pocketcasts/',
          btnIcon: 'open-in-new'
        }
      ]
    }
  ];
})