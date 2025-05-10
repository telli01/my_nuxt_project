export default defineEventHandler(async (event) => {
  await requireUserSession(event, {statusCode: 401, message: 'Unauthorized'})
  return {
    message: 'Secret data',
  }
})