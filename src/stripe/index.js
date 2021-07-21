import { loadStripe } from '@stripe/stripe-js'
// const stripePromise = loadStripe
//   ('pk_live_51HQG9oIoNlWUceTmNxEZquYelS9K1AQld6RqFVfMW0cPfGcdjQ1GnloLyo5KQFks9ZAz5B8lILrp4LmAugnOVDVX00HLaiC2rv')
const stripePromise = loadStripe
  ('pk_test_51HQG9oIoNlWUceTmmGUR9agNzvFIxwhftbEjMm2fnjhSwwICsSo5uzLuAZdLEWq934UtDvN1IZQCjGw3NcgefgaK00aFGgW5tp')

export const stripeCheckout = async () => {
  const stripe = await stripePromise
  const response = await fetch('/v1/stripe/create-session', {
    method: 'POST',
  })
  const session = await response.json()
  const result = await stripe.redirectToCheckout({
    sessionId: session.id,
  })
  if (result.error) {
    console.log('Stripe Network Error')
  }
}