# DGD

### Finished version at : https://spduk.github.io/dgd/#/

- To update latest videos just go to src/components/landing/landingvideo
- Simply change the src for the img & the href on the a tag to the latest youtube video, then change the song name in the H2

- Tours and the tour on landing auto update and show 1 year ahead using bandsintown API

 - You can add a new album by adding a new component object  (album name,  image, date, youtube link)
 - Images are set as a constant in Albums.jsx and passed through to Clickedalbum.jsx with that object, used in both
  Square images are 600x600
  Wide images are 1092x614
