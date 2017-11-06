Feature: Submit a gig

Scenario: import an event from facebook from the url
  Given I'm in "http://qhacemos.herokuapp.com/conciertos/new_from_fb"
  And I put "https://www.facebook.com/events/1382376191811273/" in "#event_url"
  And I click in "Crear el concierto desde facebook"
  When I click in "Enviar el concierto"
  Then I see "Muchas gracias por enviarnos tu concierto"
