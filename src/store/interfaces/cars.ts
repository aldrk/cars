export type CarItem = {
  id: number,
  code: string,
  brand: string,
  model: string,
  color: string,
  type: string,
  count: number,
  img?: string
  engineVolume: string
}

export type CarsState = {
  isLoading: boolean
  items: Array<CarItem>
}

export type NewCarFields = {
  code: string,
  brand: string,
  model: string,
  color: string,
  type: string,
  count: number,
  img?: string
  engineVolume: string
}