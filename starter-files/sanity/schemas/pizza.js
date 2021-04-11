import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon: () => '🍕',

  fields: [
    {
      name: 'name',
      title: 'Pizza name',
      type: 'string',
      description: 'The name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'The price of pizza in cents',
      inputComponent: PriceInput,
      validation: (Rules) => Rules.min(1000),
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'toppings' }] }],
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      const tops = Object.values(toppings).filter(Boolean);

      return {
        title,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
