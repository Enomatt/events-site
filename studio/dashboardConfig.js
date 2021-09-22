export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'events-site-studio',
                  apiId: 'd46d6aa0-93a0-43f5-af7f-0f35c8983a4a'
                },
                {
                  buildHookId: '614b1d2fda0f94c84eaaf2aa',
                  title: 'Events Website',
                  name: 'events-site',
                  apiId: '78abba78-58f4-4d13-8652-b4edf38316ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Enomatt/events-site',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://events-site.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
