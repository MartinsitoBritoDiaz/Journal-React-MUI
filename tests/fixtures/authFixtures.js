export const initialState = {
    status: 'checking', // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  }

 export const authenticatedState = {
    status: 'authenticated', // 'not-authenticated', 'authenticated'
    uid: '123ABC',
    email: 'manolo@gmail.com',
    displayName: 'Manolo',
    photoURL: 'htts://demo.jpg',
    errorMessage: null,
  }

  export const notAuthenticatedState = {
    status: 'not-authenticated', // 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: undefined,
  }

  export const demoUser = {
    uid: 'ABD123',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'htts://demo.jpg',
  }