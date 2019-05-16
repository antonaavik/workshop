# Uppercase directive
Uppercase directive takes native element and makes element inner text uppercase.

1.  Open terminal and move to `/src/app/directives`
2.  Generate uppercase directive
> Tip: To generate directive use syntax: `ng generate directive <name>` <br/>
> [Docs](https://angular.io/cli/generate#directive-command) <br />
3. Add element reference to constructor
4. Make element text upperCase
> Tip: You can do it by adding style `textTranform` to `uppercase` <br />
5. Make sure `UppercaseDirective` is imported and added to directives in `app.module.ts`
6. Try to use it in `app.component.ts`
7. Check the outcome in browser!

> Tip: If in trouble try to cheat from highlight directive

## Bonus assignment
Add code to the the same directive, so when user clicks on that element browser opens alert with your name in uppercase.
