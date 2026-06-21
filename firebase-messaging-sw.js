importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.0.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey: "AIzaSyCUA3_DAh195VCu4HbezZ1Aa1pz_zj8SLY",
  authDomain: "awesome-ca9f4.firebaseapp.com",
  projectId: "awesome-ca9f4",
  storageBucket: "awesome-ca9f4.firebasestorage.app",
  messagingSenderId: "43126791101",
  appId: "1:43126791101:web:2176d0fa29311edab210d4"
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  const { title, body } = payload.notification || {}
  if (title) {
    self.registration.showNotification(title, {
      body: body || '',
      icon: '/icons/icon-192.png',
      badge: '/icons/icon-192.png'
    })
  }
})
