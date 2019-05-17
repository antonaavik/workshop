# Make your own feature module

You will make news feed. Where you copy data from `4-news.ts` and add it to your container component(view). In the container component you should go throught news list and output presentational component about every news story. Output should have the news story card where title/date/author/tags/image is added.

> Make it look nice! Maybe even use css?

Try to make your own service, where you get all the news and maybe even you can add news?

Looking for challenge? Try to add commenting feature!

> When in trouble seek help from events feature module ir ask for help.(from google or in person)

## Create your own very first feature module

The feature this time is going to be a News section in our web application. (You can use events feature module as reference)

1. Create the News feature module using `ng generate`
2. Create container component and create news property by add data from `4-news.ts`.
3. In this feature module make container component public
4. Add news module to app module and add news container element to AppComponent (Now you should see news container HTML now)
5. Create presentational component (news-list) that lists out all the news items.
6. Create presentational component that goes into (news-list) component and will look similar to the screenshot provided with this assignment `4-news-example.png`.

## Bonus assignment

Based on Events module, create service that will store and provide data to news container.

## Bonus assignment 2

Based on Events module, create news detailed container (news-article-view) and make it accessible with routing

about routing: [https://angular.io/guide/router](https://angular.io/guide/router)

## Bonus assignment 3

Extend the current news data in service with comments and create comments components for news module to display it's contents in news article component.
