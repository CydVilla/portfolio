export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'code'; code: string }
  | { type: 'quote'; text: string }
  | { type: 'cta'; text: string; href: string };

export interface Article {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  excerpt: string;
  content: ArticleBlock[];
}

export const articles: Article[] = [
  {
    slug: 'your-google-reviews-belong-on-your-homepage',
    title: 'Your Google Reviews Are Sitting on Google. They Should Be on Your Homepage.',
    subtitle:
      'The most persuasive thing anyone could say about your business is already written. Put it where people can see it.',
    date: '2026-07-28',
    readTime: '4 min read',
    tags: ['StellaFrame', 'Web Development', 'Small Business'],
    excerpt:
      'You spent years earning a 4.9-star rating. Then you built a website that doesn’t mention it. This is the most common gap I see on small business sites, and the reason I built StellaFrame to close it with two lines of HTML.',
    content: [
      {
        type: 'paragraph',
        text: 'You spent years earning a 4.9-star rating. Then you built a website that doesn’t mention it.',
      },
      {
        type: 'paragraph',
        text: 'This is the most common gap I see on small business sites. The reviews exist. They’re good. They’re specific, credible, written by real customers. They are the single most persuasive thing anyone could say about the business. And they’re one click away on a Google listing that a visitor to your homepage will never open.',
      },
      {
        type: 'paragraph',
        text: 'The fix has traditionally been annoying enough that most people skip it. You either hand-copy testimonials into your site and update them never again, or you install a plugin that fights your theme, or you drop in an iframe that adds a second of load time and looks like it came from 2014.',
      },
      {
        type: 'paragraph',
        text: 'StellaFrame exists because that shouldn’t be a project.',
      },
      { type: 'heading', text: 'Two lines of HTML' },
      {
        type: 'paragraph',
        text: 'You search for your business, pick a layout, and paste this into your site:',
      },
      {
        type: 'code',
        code: '<div data-stellaframe="wgt_abc123"></div>\n<script async src="https://stellaframe.com/widget.js"></script>',
      },
      {
        type: 'paragraph',
        text: 'That’s the install. No API keys, no plugins, no uploads, no Meta app review. The widget is Shadow-DOM isolated, so it can’t inherit or break your existing styles. It’s 12 to 20 KB and lazy-loads, so it won’t drag your page speed down.',
      },
      {
        type: 'paragraph',
        text: 'If you’d rather not touch code at all, email us and we’ll install it for you. Free.',
      },
      { type: 'heading', text: 'Not just reviews' },
      {
        type: 'paragraph',
        text: 'Reviews are the obvious one, but the same two-line embed covers seven widget types:',
      },
      {
        type: 'list',
        items: [
          '**Google reviews**: carousel, grid, list, or a compact rating badge for your header',
          '**Instagram feed**: pulls your latest posts automatically',
          '**YouTube gallery**: your channel’s uploads with an in-page player',
          '**Audio player**: continuous playback, searchable playlist, per-track buy buttons, and a favorites heart that saves in the listener’s own browser. Four layouts, including a site-wide bar pinned to the window.',
          '**FAQ accordion**: injects schema.org FAQPage structured data, so search engines can read your answers too',
          '**Countdown timer**: for launches, sales, registration deadlines. At zero it shows your message or removes itself.',
          '**WhatsApp chat button**: floats in the corner, opens with your message pre-filled',
        ],
      },
      {
        type: 'paragraph',
        text: 'Every one of them is live on the homepage. Not screenshots: the actual production widget, rendering real data.',
      },
      { type: 'heading', text: 'Pricing that doesn’t punish you for growing' },
      {
        type: 'paragraph',
        text: 'Free gets you one full widget of any type, up to 100 items, every layout, 300 views a month.',
      },
      {
        type: 'paragraph',
        text: 'Pro is a flat $5 a month: up to three widgets, 100,000 views each per month, no display caps, no “Powered by” watermark. One price for the whole account. No per-view surprises.',
      },
      { type: 'heading', text: 'Try it without signing up' },
      {
        type: 'paragraph',
        text: 'There’s an in-browser playground that simulates the whole product with a demo catalog. Nothing to create, nothing to cancel.',
      },
      {
        type: 'paragraph',
        text: 'Your customers already wrote your best marketing copy. Put it where people can see it.',
      },
      {
        type: 'cta',
        text: 'Build your widget for free →',
        href: 'https://app.stellaframe.com/',
      },
    ],
  },
  {
    slug: 'gen-z-movie-theater-comeback',
    title: 'Gen Z Is Filling Movie Theaters Again. Here’s Why.',
    subtitle:
      'Industry data shows Gen Z now goes to the movies more than any other generation, the exact opposite of what Hollywood spent five years assuming.',
    date: '2026-07-26',
    readTime: '5 min read',
    tags: ['Culture', 'Movies'],
    excerpt:
      'For five years, the assumption in Hollywood was that a generation raised on streaming and short-form video would never develop the habit of going to the movies. The data now says the opposite, and I think the reason is bigger than movies.',
    content: [
      {
        type: 'paragraph',
        text: 'For five years, the assumption in Hollywood was that a generation raised on streaming and short-form video would never develop the habit of going to the movies. Why buy a ticket when everything is already on the couch?',
      },
      { type: 'paragraph', text: 'The data now says the opposite.' },
      {
        type: 'paragraph',
        text: 'A Fandango study of more than 7,000 moviegoers found that 87% of Gen Z (roughly ages 14 to 29) saw at least one movie in a theater in the past 12 months. That compares with 82% of millennials, 70% of Gen X and 58% of baby boomers. Gen Z also goes most often, averaging about seven visits a year, and accounts for close to 40% of North American audiences.',
      },
      {
        type: 'paragraph',
        text: 'They’re spending more per visit, too, on concessions and on premium formats like IMAX.',
      },
      {
        type: 'paragraph',
        text: 'The interesting part is why. The survey found the draw is social. Younger moviegoers described going out as the point, a reason to leave the house and be around people, alongside a better selection of films than what’s available at home. The thing streaming was supposed to have killed turns out to be the thing streaming can’t offer.',
      },
      {
        type: 'paragraph',
        text: '“The movie theater experience has become the hottest ticket out there,” box office analyst Paul Dergarabedian told the Christian Science Monitor. As for the medium’s perpetually rumored death: “The movie theater is never going away, as far as I’m concerned.”',
      },
      {
        type: 'paragraph',
        text: 'Part of it is the movies themselves. This year’s breakout hits have been made by and for young audiences, led by the internet-lore horror phenomenon “Backrooms” and its $81 million opening weekend. “The younger generations wanna go to the movies,” Ross Melnick, a professor of film and media studies at UC Santa Barbara, told the Monitor, noting that films from Gen Z creators seem to be what’s attracting younger audiences.',
      },
      {
        type: 'paragraph',
        text: 'The audience says the same thing. “I’m tired of the same ‘Star Wars’ movie,” Logan Deree, an IT professional from Boston, told the Monitor. “I need something fresh, I need something original. ‘Backrooms’ was original.”',
      },
      { type: 'heading', text: 'The industry noticed' },
      {
        type: 'paragraph',
        text: 'Theater owners have been investing accordingly. Operators spent more than $1.5 billion upgrading North American theaters over the past year, according to Cinema United: better seats, better sound, more premium screens. If your local theater feels nicer than you remember, that’s not nostalgia.',
      },
      {
        type: 'paragraph',
        text: 'The recovery is real but incomplete. Overall attendance still runs roughly 20% below pre-pandemic levels, and Pew Research Center found that only 53% of Americans saw a movie in a theater in the past year. Exhibitors largely blame a thinner release slate from the major studios: the audience is showing up, the argument goes, when there’s something to show up for.',
      },
      { type: 'heading', text: 'My theory: it’s not really about the movies' },
      {
        type: 'paragraph',
        text: 'Here’s my read on it. Gen Z has fewer third places (spots that aren’t home, work or school) than any generation before it. Malls are dying, everything costs money, and an enormous share of social life happens through a screen. A movie theater is one of the last places where you can spend two hours with other people, in the dark, phones down, for the price of a ticket.',
      },
      {
        type: 'paragraph',
        text: 'Streaming trained us to treat movies as content: something playing in the background while you scroll. A theater makes a movie an event again. It has a start time. You have to go somewhere. Other people are there. For a generation that came of age during lockdowns, that friction isn’t a bug. It’s the product.',
      },
      {
        type: 'paragraph',
        text: 'Hollywood spent five years planning around the assumption that young people would never come back. Instead they became the audience. The lesson, I think, is that people don’t abandon shared experiences; they abandon bad ones. Give them a good screen, a good movie and a reason to leave the house, and they show up.',
      },
      { type: 'heading', text: 'Sources' },
      {
        type: 'list',
        items: [
          'Fandango moviegoer study, via Variety (April 2026)',
          'Pew Research Center (2026)',
          'Cinema United, “The Strength of Theatrical Exhibition”',
          'Christian Science Monitor, “Plot twist! Gen Z powers a movie theater resurgence” (July 21, 2026) (all quotes)',
          'CNBC (May 30, 2026)',
        ],
      },
    ],
  },
  {
    slug: 'red-sox-15-game-streak',
    title: 'The Streak Ended at 15. The Red Sox Season Might Just Be Starting.',
    subtitle:
      'Boston tied an 80-year-old franchise record before falling to Baltimore. Now the question is what the front office does next.',
    date: '2026-07-24',
    readTime: '5 min read',
    tags: ['Sports', 'Red Sox'],
    excerpt:
      'Three weeks ago the Boston Red Sox were a last-place team headed for another trade deadline selloff. Today they’re in a playoff spot, on the back of 15 straight wins and one of the strangest, most fun stretches of baseball this team has produced in years.',
    content: [
      {
        type: 'paragraph',
        text: 'Three weeks ago the Boston Red Sox were a last-place team drifting toward another trade deadline selloff. Today they’re holding a playoff spot. In between: 15 consecutive wins, and one of the strangest, most fun stretches of baseball this team has produced in years.',
      },
      {
        type: 'paragraph',
        text: 'The streak tied a franchise record that had stood for 80 years, set by Ted Williams and the 1946 club that won the American League pennant. It ended July 22 at Fenway Park, when Baltimore jumped on rookie starter Eduardo Rivera for four first-inning runs and took the nightcap of a doubleheader 5-1. Boston had won the opener 6-3 to match the record; a sweep would have broken it outright.',
      },
      {
        type: 'paragraph',
        text: 'Nobody in the clubhouse sounded crushed about it. “That was a great ride, a 15-game winning streak,” first baseman Willson Contreras said afterward. “There’s nothing to be sad about. We have to be happy. We should be proud of what we did and from now keep playing the way we’ve been playing.”',
      },
      {
        type: 'paragraph',
        text: '“We just won 15 games in a row and I think all of us knew it was going to end at some point,” interim manager Chad Tracy said.',
      },
      {
        type: 'paragraph',
        text: 'Before that loss, the Red Sox hadn’t dropped a game since July 1, a 10-2 defeat to Washington that felt at the time like just another data point in a lost season. It was the longest winning streak in the majors since St. Louis won 15 straight in September 2021.',
      },
      {
        type: 'paragraph',
        text: 'What made the run improbable is who wasn’t in it, starting with the manager who opened the season. Boston fired Alex Cora in April after a 10-17 start and handed the club to Tracy on an interim basis. The streak itself came without Garrett Crochet, Trevor Story and Roman Anthony. The lineup ranks last in the American League in home runs. Contreras, the team’s best bat this season, missed time in the middle of the stretch. This wasn’t a juggernaut steamrolling bad teams. It was a depleted roster playing close to perfect baseball for three weeks.',
      },
      {
        type: 'paragraph',
        text: 'Even the players were counting along. “I think in the seventh inning I’m counting them down a little bit,” infielder Caleb Durbin said during the run. “You look back at it and think about where you’re doing it and how long this franchise has existed. It’s been incredible.”',
      },
      {
        type: 'paragraph',
        text: 'Tracy, for his part, knew exactly whose record he was chasing. “I’ve read some stuff. I know Ted Williams was around back then, so I’m aware of the year and how long it’s been,” he said. “It’s cool that they’ve accomplished something great.”',
      },
      {
        type: 'paragraph',
        text: 'The other dugout tipped its cap, too. “It’s tough to win one game in the big leagues and them going 15 straight, it’s really impressive,” Orioles manager Craig Albernaz said.',
      },
      { type: 'heading', text: 'The numbers behind it' },
      {
        type: 'paragraph',
        text: 'The pitching staff posted a 1.98 ERA over the 15 games, including three shutouts. The offense hit .255/.341/.461 with 22 home runs and averaged 5.9 runs per game, up from 4.0 before the streak began. Sonny Gray has pitched like an ace all season, sitting at 12-1 with a 2.48 ERA.',
      },
      {
        type: 'paragraph',
        text: 'Boston now sits at 55-50, third in the AL East behind Tampa Bay and New York.',
      },
      { type: 'heading', text: 'So now what?' },
      {
        type: 'paragraph',
        text: 'A month ago the only question at the deadline was which veterans the front office would move. The streak flipped it: this roster just spent three weeks proving it can win without three of its best players, and selling out from a playoff spot is the kind of decision a fan base doesn’t forgive.',
      },
      {
        type: 'paragraph',
        text: 'The honest read is that the streak didn’t fix the flaws: the power shortage is real, and the rotation is thin behind Gray until Crochet returns. But it changed the math. Getting Crochet, Story and Anthony back in August is its own version of buying at the deadline, and even a modest addition (a bat with some pop, a reliable arm) now reads as investment rather than desperation.',
      },
      {
        type: 'paragraph',
        text: 'The schedule will tell us quickly whether this is real. The Red Sox open a series against the Los Angeles Dodgers on July 31, then return to Fenway on Aug. 4 to face the Chicago White Sox. Ask me in two weeks whether the streak was a mirage. Right now, meaningful baseball in August is enough.',
      },
      { type: 'heading', text: 'Sources' },
      {
        type: 'list',
        items: [
          'AP, “Red Sox match club record of 15 straight wins, then lose nightcap of doubleheader” (July 23, 2026) (all quotes)',
          'Yahoo Sports, “Red Sox’s win streak ends at 15 games with 5-1 loss to Orioles” (July 2026)',
          'MLB.com, “Red Sox’s winning streak snapped at 15,” Ian Browne (July 23, 2026)',
          'ESPN, Red Sox win streak analysis, David Schoenfield',
          'Standings via MLB, as of July 2026',
        ],
      },
    ],
  },
];
