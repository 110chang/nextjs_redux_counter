export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'

export const increment = () => {
  return {
    type: COUNTER_INCREMENT
  }
}
export const decrement = () => {
  return {
    type: COUNTER_DECREMENT
  }
}
