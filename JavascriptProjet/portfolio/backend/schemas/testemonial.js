export default {
  name: 'testemonials',
  title: 'Testemonials',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'company',
      title: 'Company',
      type: 'string',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'imagurl',
      title: 'ImgUrl',
      type: 'string',
    },
    {
      name: 'feedback',
      title: 'Feedback',
      type: 'string',
    },
  ],
};
