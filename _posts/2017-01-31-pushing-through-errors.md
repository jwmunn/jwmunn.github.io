---
layout: post
title:  "Pushing Through Errors"
date:   2017-01-31 12:00:00
permalink: blog/pushing-through-errors/
tags: [programming]
archive-img: "/images/pushing-through-errors/three-fingers-thumb.jpg"
excerpt: After finishing the Muir Words app I tried to update the gemfile to Rails 5. I try to go through a checklist to combat the errors. Check for typos, check for
bg: "#D1913C;
background: -webkit-linear-gradient(to top, rgba(247,169,79,.6) , rgba(247,169,79,0.9)), url('/images/pushing-through-errors/three-fingers.jpg') no-repeat center bottom;
background: linear-gradient(to top, rgba(247,169,79,.6), rgba(247,169,79,0.9)), url('/images/pushing-through-errors/three-fingers.jpg') no-repeat center bottom; background-size: cover;"
---

## Firehose Project: Week 2

- I began work on a yelp clone called Nomster. 
- I had my first mentor Skype session with Ash. We pair programmed through a ruby challenge. I can already tell he will be a great learning catalyst in my coding journey.
- Upgraded my previous [Muir Words](https://muir-words-justin-munn.herokuapp.com/) to Rails 5 & Bootstrap 4

## Upgrading to Rails 5 & Bootstrap 4

After finishing the Muir Words app I tried to update the gemfile to Rails 5. I try to go through a checklist to combat the errors. Check for typos, check for syntax error, check install documentation, restart the server. But I received constant error messages so I ended up rebasing to the last working version of the app. I knew the next app would be a fresh install with Rails 5 so I moved on, hoping to gain knowledge and revisit.

Then it hit me, **keep it chunky**. I&rsquo;ve been coding HTML emails for the last 4 years and the table based code and deep nesting can get pretty messy. One thing it taught me was to break chunks of code until I find the problem. Replace it with working chunks of code and finesse my way to a solution. Now I had a working gemfile for a Rails 5/Bootstrap 4 app. I compared the differences to the gem file in my Rails 4 app using a [diff tool](https://www.diffchecker.com/diff). It wasn&rsquo;t the install files that created the errors as I suspected. It was dependent gems that needed updating too.

**Chunk by chunk** I updated the dependent gems until I was error free. The site was back up and running on my local server but the layout was off. A quick inspect element and Bootstrap 4 documentation reference later, I realized I had to rewrite most of the grid classes. Bootstrap rewrote their grid class syntax so my legacy classes failed. Luckily this is a simple site with only a few pages. I could see how updating class names across a more complex site would turn into it&rsquo;s own project. I guess that&rsquo;s the downside of frameworks. They let you create sites quickly, but if the syntax changes your success or failure it tied to re-learning the new documentation.

## Customizing will_paginate gem

Another challenge for the week was to implement pagination functionality into the new yelp clone app *Nomster*. I&rsquo;m calling mine [Brewster](https://nomster-justin-munn.herokuapp.com). After getting the [will_paginate](https://github.com/mislav/will_paginate) gem implemented I wanted to change the output to integrate better with Bootstrap. I was chatting with another student and realized that there were other gems that tied into will_paginate to do just that. Since *“Good Artists copy; Great Artists steal”*, I decided to use the open-sourced work of others as a jumping board. This openness is what I love about the web.

> &ldquo;If you see a great master, you will always find that he used what was good in his predecessors, and that it was this which made him great.&rdquo; &mdash;T.S. Eliot

There was an existing gem that integrated with Bootstrap 4&rsquo;s syntax online created by [Ivan Palamarchuk](https://github.com/delef/will_paginate-bootstrap4). This was a great start but I wanted to take advantage of a few other Bootstrap classes not implemented. I saw in the `will_paginate` HTML renderer docs that the magic happened in the `initializers/will_paginate.rb`. Reverting back to my chunky iteration, I created a copy in my app that matched the `will_paginate-bootstrap4` initializer. I commented out everything I didn&rsquo;t want to change. Drop in the desired extra Bootstrap classes to the element and *voilà*: Beautiful customized Bootstrap pagination.

![Bootstrap Pagination](/images/pushing-through-errors/brewster-paginate.jpg)
<figcaption>See the live work-in-progress <a href="https://nomster-justin-munn.herokuapp.com">here</a>.</figcaption>

## Contemplating Complexity

My final thought of the second week is a higher level one brought up by my mentor. He introduced the idea of *Complexity* in computer science. He encouraged thinking about it as I come up with solutions. Decreasing complexity can improve the performance of my functions and apps. I&rsquo;ll be reading more on the subject and applying it to come up with a better solution to this reverse array challenge. One goal this week is to manipulate the original array instead of increasing complexity by creating a new array like my current solution:

{% highlight ruby %}
# Looking for ways to reduce complexity in this solution
array = [1,2,3,4,5]

def reverse_array(array)
    new_array = []
    
    array.length.times do |n|
        i = array.length -1 -n
        new_array << array[i]
    end
    
    return new_array
end
{% endhighlight %}

As I begin to dive into algorithms and more complex apps this will be a constant point of thought and opportunity for improvement. Until next week.