# Personal Website/Portfolio
### Purpose
Create a basic static website to give some quick "get-to-know me" personal details along with an overview of my professional career and skills. I mostly wanted to "put myself out there" and create a more custom [LinkTree](https://linktr.ee)-ish information hub with more control.

### Overview
I specifically wanted this static website to resemble the 2000s era of the iconic MySpace, where I was (and many others!) first given exposure to HTML and CSS. Granted, there were many existing template and style code snippets available online, which were accompanied by <em>very</em> detailed step-by-step instructions on how to edit your profile with the snippets. Definitely by no means was this legitimate "exposure", but I made the immediate connection to MySpace when learning basic web design at RPI.

### Technologies Used and Justification of Design Choices
<strong>GitHub Pages</strong>

This website doesn't require a super intense stack. No backend is necessary, and hosting it here reduces overhead. Some huge examples of this would be that GitHub handles providing the web server in addition to necessary configurations like SSL. It also manages version control which is super convenient for making future changes.

<strong>HTML and CSS</strong>

I wanted to use HTML and CSS because they are universally accepted file formats, and using a `flexbox` implementation offered more structure and flexibility for different screen sizes. Templates at existing information hub platforms appear to lack the amount of control available as a "self-hosted" HTML/CSS implementation, because the static website would be hosted on that platform's servers. Very unfortunate but <strong>their servers = their rules.</strong> I would have preferred making a Jinja template for repeating elements across pages like the `<header>` element, but to my understanding Jinja is not supported by GitHub pages.

<strong>JavaScript</strong>

I wanted this website to feel a bit "interactive", which required some animations and changing styles when elements were hovered on or clicked. LinkTree and [other platforms](https://beacons.ai/) would not allow me to do that.

<strong>Custom Domain</strong>

Having a custom domain would make it easier for user readability and memorability, which is important for personal branding. I think that creators should use custom domains for their information hubs. I'd like to include an example: I've noticed that personal websites are embedded in Linktree pages, which adds an extra step and discourages traffic to the personal website. There could be some sort of self-hosted information hub that naturally weaves its way into a personal website. I sometimes find myself forgetting contact information when I meet creators in person and they ask me to check out their work. I genuinely would like to check out their work, I'm just sometimes forgetful.

An added bonus would be that I also wanted to have a bit of fun playing with DNS records (adding a CNAME to GitHub Pages to verify that I own my domain and an A record for resolution), and I also added the records to allow me to send/receive emails.

TLS will be enforced for each connection, and GitHub Pages does so by generating LetsEncrypt certificates.