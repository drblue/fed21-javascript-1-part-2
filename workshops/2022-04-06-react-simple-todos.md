# Workshop 2022-04-06

Sätt upp en helt ny React-app med hjälp av `create-react-app`.

I appen ska det finnas en lista på alla todos där man enkelt ser om den är avklarad eller ej. Varje todo ska kunna ha en titel och en flagga för om den är avklarad eller ej.

Man ska kunna lägga till en todo genom ett input-fält och när man klickar på "Lägg till" så ska todo:n dyka upp i listan.

När man klickar på en todo ska den växla mellan avklarad/ej avklarad.

Någonstans på sidan ska det gå att se hur många todos som är avklarade, samt det totala antalet todos. T.ex. "4 av 6 todos avklarade."

## 🌟

Man ska kunna ta bort en todo. Om det inte finns några todos kvar i listan så ska listan inte renderas och man istället får ett meddelande om att det inte finns några todos.

### 🌟🌟

Det ska finnas två listor, en för saker man har kvar att göra och en för saker som är klara. När man klickar på en todo så renderas de två listorna om direkt.

Alla todos ska (oavsett om de är avklarade eller ej) lagras i **samma** state.
