---
layout: layouts/base.liquid
title: Home
---

# Welcome to the Richmond Annex Neighborhood Council

Your central hub for community updates, local resources, and civic action.

<hr>

<!-- THE TIMELY CONTENT GRID (Split Section) -->
<div class="grid">

  <!-- Left Column: The Practical Hero (Next Meeting) -->
  <div>
    <article>
      <header><strong>Next Upcoming Meeting</strong></header>

      <!-- Liquid logic to grab the most recent meeting from your collection -->
      {% assign next_meeting = collections.meetings | reverse | first %}
      
      {% if next_meeting %}
        <h3>{{ next_meeting.data.title }}</h3>
        <p><strong>Date:</strong> {{ next_meeting.data.date | date: "%B %d, %Y" }}</p>
        <p><strong>Location:</strong> {{ next_meeting.data.location }}</p>
        <a href="{{ next_meeting.url }}" role="button">View Details & Agenda</a>
      {% else %}
        <p><em>No upcoming meetings scheduled at this time. Check back soon!</em></p>
      {% endif %}
    </article>
  </div>

  <!-- Right Column: The Noticeboard (Latest News) -->
  <div>
    <h2>Latest News</h2>

    <!-- Grab the 3 most recent news posts -->
    {% assign recent_news = collections.news | reverse | slice: 0, 3 %}
    
    <ul>
    {% for post in recent_news %}
      <li>
        <a href="{{ post.url }}"><strong>{{ post.data.title }}</strong></a> <br>
        <small>{{ post.data.date | date: "%b %d, %Y" }}</small>
      </li>
    {% endfor %}
    </ul>
    
    <a href="/news/">View all news announcements &rarr;</a>
  </div>

</div>

<hr>

## The Civic Hub

<!-- THE CARD GRID: Quick links to evergreen content -->
<div class="grid">
  <article>
    <h4>Resources</h4>
    <p>Find local guidelines, neighborhood maps, and utility contacts.</p>
    <a href="/resources/" class="secondary">View Resources</a>
  </article>

  <article>
    <h4>Projects</h4>
    <p>Learn about ongoing park restorations and local improvement campaigns.</p>
    <a href="/projects/" class="secondary">View Projects</a>
  </article>

  <article>
    <h4>About Us</h4>
    <p>Meet the council members and learn how to get involved in the neighborhood.</p>
    <a href="/about/" class="secondary">Meet the Council</a>
  </article>
</div>