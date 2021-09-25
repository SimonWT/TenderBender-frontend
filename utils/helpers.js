export function setCookie(token) {
  const expirationDate = '2040-10-02T14:29:31.100Z'
  window.document.cookie = `TBtoken=${token}; expires=${expirationDate}; path=/`
}
