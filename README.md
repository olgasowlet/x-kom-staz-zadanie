# Zadanie Rekrutacyjne Staż X-kom

Aplikacja służąca do rezerwacji miejsc w kinie. Dane o miejscach (pozycji i statusie rezerwacji) pobierane są z API. 
Uzytkownik może:
- wybrać ilość miejsc
- określić, czy miejsca mają być obok siebie

Po zatwierdzeniu formularza uzytkownikowi wyświetla się widok sali. W tym momencie może zdecydować, które miejsca wybrać. Jeśli użytkownik zaznaczył, że miejsca mają być obok siebie to za pomocą jednego kliknięcia automatycznie podświetlą się miejsca dostępne obok. Jeżeli użytkownik wybierze miejsce, które obok siebie nie ma dostępnych miejsc to pokaże się komunikat z prośbą o wybranie innego miejsca.

Po kliknięciu w "Rezerwuj" użytkownik zostanie przeniesiony do podsumowania.

![gif](https://raw.githubusercontent.com/olgasowlet/x-kom-staz-zadanie/main/src/images/intro.gif)

## Co bym jeszcze dopracowała?

- Walidacje - Uzytkonik musi wybrać ilość miejsc wiekszą od 0
- Poprawa intuicyjności wyboru miejsc - obecnie, aby wybrać nowe miejsca nalezy "odkliknąć" miejsca już wybrane, lepiej by było, zeby klikając na dowolne inne miejsce automatycznie te poprzednio wybrane się usuwały
- Lepsze powiadomienia o ewentualnych niepowodzeniach w wyborze miejsc

## Opis wykonania zadania

Pracę rozpoczęłam od uporządkowania kodu wygenerowanego przez create-react-app. Następnie zabrałam się za tworzenie pierwszego widoku z formularzem rejestracji miejsc. Do stylowania używam Styled-Components. Następnie zaczęłam pracę nad widokiem sali i pobieraniem danych z API - wykorzystałam do tego axiosa. Kolejnym krokiem było stworzenie stanu aplikacji oraz sagi. Najwięcej czasu zajęło mi stworzenie funkcji, która weryfikowała, czy obok wybranego miejsca nie ma pustej przestrzeni ani zajetego już miejsca. Chętnie więcej o mich wrażeniach opowiem na rozmowie rekrutacyjnej bo zdecydowanie wolę opowiadać niż opisywać :D 

## Czego nowego się nauczyłam?
Już przy tworzeniu widoku formularza nauczyłam się jak stylować checkboxa ponieważ nigdy do tej pory tego nie robiłam. W ogóle całe to ćwiczenie było dla mnie super do obycia się bardziej z Redux i Redux Saga. Jednak chyba najwięcej nauczyłam się przy pracy na tablicach i obiektach, obyłam się bardziej z różnymi metodami z którymi wcześniej nie miałam okazji się zakolegować :D

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm run api`

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

