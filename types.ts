export interface UserData {
  avatar: string
  full_name: string
  about: string
  profession: string[]
  phone_number: string
  email: string
  address: string
  cv: string
}

export interface AboutInfo
  extends Pick<UserData, 'full_name' | 'about' | 'profession' | 'cv'> {}

export interface WhatIDO {
  icon: string
  title: string
  text: string
}

export interface Testimonial {
  image: string
  full_name: string
  about: string
  profession: string
}

export interface Technology {
  name: string
  logo: string
}

export interface Occupation {
  period: string
  title: string
  sub_title: string
  text: string
}

export interface Experience extends Occupation {
  image: string
}

export interface Hobby {
  icon: string
  title: string
}

export interface Social {
  name: string
  url: string
  icon: string
}

export interface ProjectThumb {
  slug: string
  title: string
  preview_image: string
  technologies: Technology[]
  tag: string[]
}

export interface Project extends ProjectThumb {
  site_url?: string
  created_date: String
  description: string
  gallery: GalleryImage[]
}

export interface GalleryImage {
  image: string
}
