export interface Section {
  meta: {
    title: string,
    description?: string,
    location?: string,
    heroImage?: string,
  }
  type: string,
  content?: object[],
  action?: {
    title: string,
    url: string,
  }
}