# Expressions tutorial

1. Open `app.component.ts` and make sure `AppComponent` is set as bootstrap in `app.module.ts`
2. Look up hero object and change it to match your favorite superhero information.
   > Note: [How to set date](https://www.w3schools.com/js/js_dates.asp)
3. Print out your hero name and birthday to browser
4. Make function that takes hero object as input and return string of shortcut name.
   > Shortcut name can be first letter of name in uppercase. For example `K` <br />
   > Or if you want harder variant try to return first letter of name and birthday year ex. `K-1997`
5. Print out your hero shortcut name to browser, use the function you created in last step.
6. Make function that changes your hero birthday to todays date. Name it `revive`
7. Add button with text "revive" to template and add `revive` function as click event binding to it.
   > Note: If your shortcut name had birthday year in it, it changed after button click!<br />
   > Note: Refresh page to get the initial state
8. Add input under button that changes the hero name
9. Add button that hides your hero information
> Tip: You need new boolean constant for that