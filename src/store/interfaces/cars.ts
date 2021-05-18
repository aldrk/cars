export type CarItem = {
  id: number,
  code: string,
  brand: string,
  model: string,
  color: string,
  type: string,
  count: number,
  url: string
  engineVolume: string
}

export type CarsState = {
  isLoading: boolean
  items: Array<CarItem>
}

export type NewCarFields = {
  Code: string,
  Brand: string,
  Model: string,
  Color: string,
  Type: string,
  Count: number,
  Url: string
  EngineVolume: string
}