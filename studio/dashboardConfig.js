export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebd18220210296e61008071',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-dy64jhmy',
                  apiId: '7763d997-1152-4dcb-b09a-a579c6097a2c'
                },
                {
                  buildHookId: '5ebd1822551cb5b935dc3940',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-f74q85km',
                  apiId: '955d15df-7cd7-4b49-9ffa-32f52751eeeb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eyoba/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-f74q85km.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
