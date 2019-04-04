# Writing your first review

Want to write your first review but have no understanding of HTML? You can now use the `post_review` layout to write your first review.

The `post_review` layout file has the ability to specify metadata about the thing that you are reviewing.

Below is the full list of all variables available to be specified as the front matter of your post:

## Required variables

Variable | Description | Allowed values
---|---|---
`review_type` | Specifes the type of review | <ul><li>`game` for a game review</li><li>`book` for a book review</li><li>`music` for a song/music review</li><li>`movie` for a movie review</li><li>`video` for a video review</li><li>`other` for a review type that is not specified above</li></ul>

## Game-related variables

Variable | Description
---|---
`game_title` | The title of the game (**required**)
`game_developer` | The name of the game developer
`game_website` | The game's website
`game_trailer` | The game's trailer (as a link to a video trailer)
`game_price` | The game's price (specify `free` to indicate that the game is free or a decimal number)
`game_price_currency` | The currency that you specified the price in (currently not supported)
`game_genre` | The genre of the game (example: `Platformer`, `Arcade`, etc.)
`game_age_rating` | The game's official age rating
`game_release_date` | The game's official release date (example: `20/11/2013`, `13 February 2010`, etc.)
`game_supported_platforms` | The game's list of supported platforms (see below for an example)

Example:

```markdown
---
title: First Coaster Game Review
game_title: First Coaster
game_developer: TellPlus
game_website: https://example.com
game_trailer: https://www.youtube.com/watch?v=dQw4w9WgXcQ
game_price: $10
game_price_currency: SGD
game_genre: Arcade
game_age_rating: 6+
game_release_date: 10/2/2030
game_supported_platforms:
- os_type: windows
  os_minimum: 10
- os_type: macos
  os_minimum: 10.12
- os_type: android
  os_minimum: 5.1.1
- os_type: ios
  os_minimum: 8
  os_maximum: 12
---
```

## Book-related

Frontmatter | Description
---|---
`book_title` | The book's title (**required**)
`book_isbn` | The book's ISBN code
`book_author` | The book's author
`book_synopsis` | The book's synopsis
`book_language` | The book's language (as an ISO-639-1 language code)
`book_published_date` | The book's published date (e.g. `20/5/2018`, `1/1/1999`, etc.)
`book_written_date` | The book's written date (e.g. `20/3/2017`, `2/3/1976`, etc.)
`book_genre` | The book's genre
