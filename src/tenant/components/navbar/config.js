export const appBarStyles = {
  background: '#FFF',
  boxShadow: '0px 1px 4px 0px rgba(0, 0, 0, 0.05)',
  borderBottom: '1px solid #ccc',
  height: '7vh',
  display: 'flex',
  position: 'fixed',
  py: 'auto',
  px: 'auto',
  width: '100%',
  zIndex: '100',
  justifyContent: 'space-between',
  '.logo': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'auto',
    img: {
      height: '100%',
      width: 'auto',
    },
  },
  '.menu': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'auto',
    '.menu-item': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: 'auto',
      mx: '10px',
      cursor: 'pointer',
      '&:hover': {
        color: '#1890ff',
      },
    },
  },
  '.user': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: 'auto',
    '.user-item': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: 'auto',
      mx: '10px',
      cursor: 'pointer',
      '&:hover': {
        color: '#1890ff',
      },
    },
  },
};