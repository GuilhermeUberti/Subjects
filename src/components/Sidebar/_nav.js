export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Assuntos',
      url: '/subject',
      icon: 'icon-speedometer',
      children: [
        {
          name: 'Lista',
          url: '/subject/list',
          icon: 'icon-speedometer'
        },
        {
          name: 'Adicionar',
          url: '/subject/new',
          icon: 'icon-speedometer'
        }        
      ]
    }
  ]
};
