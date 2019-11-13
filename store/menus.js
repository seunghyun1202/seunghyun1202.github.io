export const state = () => ({
  menuList: [
    {
      title: 'Home',
      to: { name: 'home' }
    },
    {
      title: 'Workspace',
      to: { name: 'workspace' }
    },
    // {
    //   title: 'Project',
    //   to: { name: 'project' }
    // },
    {
      title: 'Service',
      to: { name: 'service' }
    },
    {
      title: 'About',
      to: { name: 'about' }
    }
  ]
});
