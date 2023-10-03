export const API_BASE_URL = '/api'

export const ApiEndpoints = {
  FREELANCER_INFO: `${API_BASE_URL}/freelancer/`,
  FREELANCER_AVATAR: `${API_BASE_URL}/freelancer/avatar.jpg`,
  WHAT_I_DO: `${API_BASE_URL}/what_i_do/`,
  TESTIMONIALS: `${API_BASE_URL}/testimonials/`,
  TECHNOLOGIES: `${API_BASE_URL}/technologies/`,
  HOBBIES: `${API_BASE_URL}/hobbies/`,
  EXPERIENCE: `${API_BASE_URL}/experiences/`,
  EDUCATION: `${API_BASE_URL}/education/`,
  SOCIAL_LINKS: `${API_BASE_URL}/social_links/`,
  PROJECTS_LIST: `${API_BASE_URL}/projects/`,
  GET_PROJECT: (slug: string) => `${API_BASE_URL}/project/${slug}/`,
  GET_SEO: `${API_BASE_URL}/seo/`,
  GET_IN_TOUCH: `${API_BASE_URL}/get_in_touch/`,
  VISIT: `${API_BASE_URL}/visit/`,
}
