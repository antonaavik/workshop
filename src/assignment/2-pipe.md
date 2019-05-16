# Est Day pipe tutorial
You will make estday  pipe that will take in Date object and translate into weekday string in estonian

1.  Open terminal and move to `/src/app/pipes`
2.  Generate `estday` pipe
>  [ng generate documentation](https://angular.io/cli/generate)
3. Set value type to Date object, that way IDLE will help you with auto-complete
4. Get the day of the week (0-6)  from the value and save it to constant.
> Date object [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) <br />
> NOTE: Sunday - Saturday : 0 - 6
5. Use `switch` or `if/else` statement to return day name in estonian string.
5. Make sure `EstdayPipe` is imported and added to declarations in `app.module.ts`
6. Try to use it in `app.component.ts`
> For example try to add this to template: `<p>Tänane päev on {{today | estday}}</p>` <br/>
> Note: Today is already declared for you in class
7. Check the outcome in browser!

> Tip: If in trouble try to cheat from reverse directive <br />
> Best tip ever: Google is your friend

## Bonus assignment
Use angular common date pipe to get the same result in english.
> [Documentation for date pipe](https://angular.io/api/common/DatePipe)
 ## Bonus 2
 Try to format like this: Fri 12 PM / May 17, 2019
