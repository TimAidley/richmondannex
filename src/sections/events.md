---
title: "Meetings & Events"
order: 1
---

# Upcoming Meetings

{% assign today = "now" | date: "%Y%m%d" %}
{% assign sorted_events = collections.events | sort: "date" %}
{% for event in sorted_events %}
    {% assign event_date = event.date | date: "%Y%m%d" %}
    {% if event_date >= today %}
        <article>
            <h3>{{ event.data.title }}</h3>
            <p><strong>Date:</strong> {{ event.date | formatDate }}</p>
            <p>{{ event.templateContent | strip_html | truncatewords: 25 }}</p>
            <a href="{{ event.url }}" role="button">Read More</a>
        </article>
    {% endif %}
{% endfor %}