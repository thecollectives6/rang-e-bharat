# Rang-e-Bharat Data Editing Guide

## The rule from this version onward

There are **no auto-generated cultural/festival/place detail cards**.

A visible detail card must come from an explicit record in one of these files:

- `src/data/cultureData.ts` — Dance, Music, Art, Handicrafts, Clothing, Food, Traditions, etc.
- `src/data/festivalsData.ts` — Festival records.
- `src/data/placesData.ts` — Famous places, monuments, temples, forts, natural attractions and UNESCO records.
- `src/data/stateGalleryData.ts` — State-level gallery photographs with title/caption/image URL.
- `src/data/indiaData.ts` — State-level facts only (name, capital, history, culture summary, geography, languages, nature facts, etc.). It is NOT the source for detailed culture/festival/place cards.

## Example: changing a dance image

Open `src/data/cultureData.ts`, find the dance object, and change:

```ts
imageUrl: 'YOUR_IMAGE_URL_HERE',
```

The same object contains its name, description, significance, metadata and image. There is no hidden generated record.

## Important

Do **not** add a dance/food/clothing/festival/place name to `indiaData.ts` expecting the site to automatically create a detail card. That automatic extraction system was intentionally removed.

If a new item is added, create a complete record in the appropriate dedicated dataset instead. This prevents generic descriptions and unrelated placeholder images from appearing.
