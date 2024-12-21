import type { BlogPost } from '../../types/blog';

export const posts: BlogPost[] = [
  {
    title: "How Often Should You Service Your AC?",
    description: "Learn about the recommended maintenance schedule for your air conditioning system and why regular service is important.",
    publishDate: new Date('2024-01-15'),
    category: "Maintenance",
    slug: "ac-service-frequency",
    featured: true,
    content: `
# How Often Should You Service Your AC?

Regular maintenance is crucial for keeping your air conditioning system running efficiently and preventing costly breakdowns. Here's what you need to know about AC service frequency:

## Recommended Service Schedule

- **Residential Systems**: Schedule maintenance once per year, ideally in spring before the cooling season
- **Commercial Systems**: Bi-annual maintenance is recommended
- **Heavy Usage Systems**: Consider quarterly inspections

## Why Regular Service Matters

1. Extends system lifespan
2. Improves energy efficiency
3. Prevents unexpected breakdowns
4. Maintains warranty coverage

Contact us today to schedule your AC maintenance appointment!
    `
  },
  {
    title: "Signs Your Furnace Needs Replacement",
    description: "Discover the key indicators that it's time to replace your aging furnace with a new, energy-efficient model.",
    publishDate: new Date('2024-01-10'),
    category: "Heating",
    slug: "furnace-replacement-signs",
    content: `
# Signs Your Furnace Needs Replacement

Is your furnace showing signs of age? Here are key indicators that it might be time for a replacement:

## Common Warning Signs

1. Age over 15 years
2. Frequent repairs
3. Rising energy bills
4. Uneven heating
5. Strange noises

Learn more about our furnace replacement services!
    `
  }
];