Feature: Submit a gig

Scenario: import an event from facebook from the url
  Given A facebook event with url "https://www.facebook.com/events/1382376191811273/"
  When I submit the facebook event
  Then the event has been successfully imported
