export default defineEventHandler(async (event) => {

  const session = await setUserSession(event, {
    user: 'Max Mustermann',
    email: 'max@mail.com'
  })

  return {
    message: 'Login successful',
    session: session
  }
})