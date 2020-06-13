export interface Section {
  meta: {
    title: string,
    description?: string,
    location?: string,
    heroImage?: string,
  }
  type: string,
  content?: [{
    title: string,
    url: string,
  }],
  action?: {
    title: string,
    url: string,
  }
}