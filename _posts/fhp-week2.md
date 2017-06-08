---
layout: post
title:  "All In: 2017"
date:   2017-01-24 12:00:00
permalink: blog/all-in-2017/
tags: [life]
archive-img: "/images/all-in-2017/mt-hood-thumb.jpg"
excerpt: 2016 was a year full of politics, saying goodbye to heroes, and personal growth. Going into the new year, it was time to stop dipping my toe in and go for it
bg: "#D1913C;
background: -webkit-linear-gradient(to top, rgba(0,0,0,.5) , rgba(0,0,0,0)), url('/images/all-in-2017/mt-hood.jpg') no-repeat center top;
background: linear-gradient(to top, rgba(0,0,0,.5), rgba(0,0,0,0)), url('/images/all-in-2017/mt-hood.jpg') no-repeat center top; background-size: cover;"
---

2016 was a year full of politics, saying goodbye to heroes, and [personal&nbsp;growth](http://justinmunn.co/blog/2016-year-in-review). Going into the new year, it was time to stop dipping my toe in and go for it.  Time is fleeting and it’s time to carpe that fucking diem. While I was in NC for the holidays, I was able to spend a couple days with my co-founder Dave for a [Pathfinder](http://pathfinderhikes) hackathon. We’ve been working on it for a while and are excited to release the beta in the next few months. I&rsquo;d spent years of self-teaching code through [free](https://www.codecademy.com/jwmunn) or [inexpensive](https://teamtreehouse.com/justinmunn) resources. The final leap was here, I decided to enroll into [The Firehose Project](http://www.thefirehoseproject.com/) coding bootcamp.


{% highlight ruby %}
# My Foobar solution to get accepted into The Firehose Project
puts "How many items do you want to see?"
items = gets.to_i
foobar_pattern = []

items.times do |item|
  item = item + 1
  if item % 3 == 0 && item % 5 == 0
    foobar_pattern << ("Foobar")
  elsif item % 3 == 0
    foobar_pattern << ("Foo")
  elsif item % 5 == 0
    foobar_pattern << ("Bar")
  else
    foobar_pattern << ("#{n}")
  end
end

puts foobar_pattern
{% endhighlight %}

## Why The Firehose Project

The Firehose Project hit the sweet spot of accessibility and quality. I work remotely as a web designer full-time and move about every 4 months for my wife’s job contracts. Quitting my job and staying in one location for 6 or more months wouldn’t work for me. Going $40-$60k more in debt for grad school wasn&rsquo;t happening either.  After attending [Epicurrence](blog/epicurrenc) this past March, talking to lots of developers there and talking to Dave a theme started to emerge: Webapps, Ruby and Javascript. Looking at TFP programming&rsquo;s focus on those languages, algorithms and a final complicated group project using AGILE development. I decided to give it a shot. After completing the 2 week intro course to get accepted I was sold. Getting personalized feedback on coding challenges with elegant refactor advice felt incredible. The timing was good enough so I decided to [jump](https://medium.com/@elleluna/the-crossroads-of-should-and-must-90c75eb7c5b0).

![Jumping](/images/all-in-2017/jumping-loop2.gif)
<figcaption>Glacial lakes feel glacial.</figcaption>

## 1 week in

`rails new`

During the first week of the course I built a web app using Ruby on Rails. It&rsquo;s for a random quote generator that also takes user input. This was a great review of the Model View Controller format of Rails and how to navigate, create and modify routes, controllers and views. `Rake routes` *all the things.* One lesson I picked up last week was maintaining 2 different databases in my local development and production heroku environments. Another was learning about how HTTP requests are handled + how to generate the appropriate assets to `GET`, `POST`, or use the `def resources` action to allow you to Create, Remove, Update, and Detroy data. Using this CRUD framework made managing the database of quotes in this app much easier.

## Muir Words, my first web app

When I visited the Muir Woods National Monument a couple years ago it became one of my favorite places. When I started reading his writings I couldn’t get enough. I wanted to create a website to catalog his writings online but never followed through with it. When I saw the first FHP app was a quote generator it seemed a fitting start. One day I’ll try to flesh it out to that catalog level. (Also I couldn’t help myself from throwing a quick logo together so I could mess with styling an svg.)

Check it out [live](https://muir-words-justin-munn.herokuapp.com/), and feel free to add your favorite John Muir quote if you don’t see it listed!

<div class="row">
    <figure class="half">
        <img src="/images/all-in-2017/muir-woods.jpg" alt="Muir Woods" />
    </figure>
    <div class="half">
        <a href="https://muir-words-justin-munn.herokuapp.com/"><img src="/images/all-in-2017/muir-words.jpg" alt="Muir Words Quote Generator" /></a>
        <figcaption><a href="https://muir-words-justin-munn.herokuapp.com/">https://muir-words-justin-munn.herokuapp.com/</a></figcaption>
    </div>
</div>

## Moving forward

After years of telling myself I could do it but didn’t have the money it feels weird to finally be here. Like drinking an excitement and anxiety smootie. After years of talk, I have to prove it. With the second week ramping up I&rsquo;m confident with the decision to jump. I’ll do my best to catalog the journey every week. Cheers to working hard and designing the life you want.


