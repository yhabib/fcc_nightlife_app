# FCC - Nightlife App

## User Stories:
* As an unauthenticated user, I can view all bars in my area.
* As an authenticated user, I can add myself to a bar to indicate I am going there tonight.
* As an authenticated user, I can remove myself from a bar if I no longer want to go there.
* As an unauthenticated user, when I login I should not have to search again.

&nbsp;

## Architecture:

1. **Schema:**
```javascript 
{
    _id: {
        type: ObjectId,
        required: true
    }, 
    placeId: {
        type: String,
        required
    },
    visitors: {
        type: Number,
        required
    }

}
```

&nbsp;
2. **API points:**
* __/__
    * Asks about location of the user
    * Shows all bars in the regio (Yelp API)
    * Links to:
        * Login Page
        * 
        * New Poll Page (authenticated)
* __/new-poll__(authenticated)
    * POST
    * Create a new poll with:
        * Title or question
        * Option 1 and Option 2(required)
        * More options
    * Links to:
        * Home page
        * Poll page (authenticated)
        * My Polls Page (authenticated)
* __/my-polls__(authenticated):
    * Shows all my polls
    * Links to:
        * Home page
        * Poll page (authenticated)
        * New Poll Page (authenticated
* __/poll/${id}__
    * User can vote - POST
    * After it (or as a logged user that has alread voted) user can see results

&nbsp;
3. **Specifications:**

* Front End:
    * jQuery
    * Skeleton
* Back End:
    * NodeJS
    * Express
* Testing(Backend:
    * Mocha
    * Supertest
* Other
    * MongoDB + mLab
    * Heroku
    
---
## To Do's

# propulsion_academy-pre_workout
