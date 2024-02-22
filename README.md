# Dokumentations Rapport

## Projekt titel:

Terminsprøve Trainer App

## Projekt beskrivelse:

Dette projekt er en terminsprøve som skal teste mig i at lave en React app fra bunden. Appen skal kunne vise en liste af trænere og aktiviteter, og brugeren skal kunne søge efter trænere og aktiviteter. Derudover skal appen også kunne vise detaljer om en træner eller en aktivitet, når brugeren klikker på en træner eller en aktivitet.

## Tech-stack:

axios
lucide-react
react
react-burger-menu
react-hook-form
react-icons
react router
tailwindcss

## Teknisk Dokumentation:

React, fordi det er så nemt at arbejde med. Jeg elsker, hvordan det lader mig opdele min app i små bider kaldet komponenter. Det gør min kode super organiseret og nem at holde styr på.

Jeg er hoppet med på Tailwind CSS-toget, fordi det giver mig mulighed for at lave mine egne designs uden at skulle kæmpe med CSS-kode. De færdiglavede CSS-klasser gør det hurtigt og nemt at style mine komponenter præcis som jeg vil have dem.

React Router til at håndtere routing i appen. Det gør det nemt at navigere mellem side

axios til at hente data fra en API. Det gør det nemt at hente data fra en ekstern kilde og bruge de

react-hook-form til at håndtere formularer i appen. Det gør det nemt at håndtere formularer og valideri

lucide-react til at tilføje ikoner til appen. Det gør det nemt at tilføje ikoner til appen uden at skulle downloade og importere ikoner

react-icons til at tilføje ikoner til appen. Det gør det nemt at tilføje ikoner til appen uden at skulle downloade og importere ikoner

tailwindcss til at style appen. Det gør det nemt at style appen uden at skulle skrive en masse CSS-kode

## Kode til Særlig Gennemgang:

SearchPage.jsx - Her er koden, der håndterer søgefunktionen i appen.

```jsx
// Function to handle search query change
const handleSearchChange = (event) => {
  const { value } = event.target;
  setSearchQuery(value); // Update searchQuery state with the entered value
};

// Filter activities based on search query
const filteredActivities = searchQuery
  ? activities.filter((activity) =>
      activity.className.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : activities;

// Filter trainers based on search query
const filteredTrainers = searchQuery
  ? popularTrainers.filter((trainer) =>
      trainer.trainerName.toLowerCase().includes(searchQuery.toLowerCase())
    )
  : popularTrainers;
```

## Valgfri Opgave:

## Refleksion:

Jeg skal bruge mere tid på at strukturere min kode, så den er nemmere at forstå så snart projekter bliver større og svære at finde rundt i. Jeg vil også gerne blive bedre til at skrive mere uddybende kommentarer, så det er nemmere at forstå, hvad der foregår i min kode.
