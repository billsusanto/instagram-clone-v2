export const COLORS = {
  primary: '#0095F6',
  primaryHover: '#1877F2',
  primaryLight: '#E0F1FF',
  secondary: '#8E8E8E',
  bgPrimary: '#FAFAFA',
  bgSecondary: '#FFFFFF',
  bgTertiary: '#F5F5F5',
  textPrimary: '#262626',
  textSecondary: '#8E8E8E',
  textTertiary: '#B2B2B2',
  border: '#DBDBDB',
  borderLight: '#EFEFEF',
  error: '#ED4956',
  success: '#4CAF50',
} as const

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
} as const

export const SPACING = {
  containerMaxWidth: '935px',
  postMaxWidth: '614px',
  sidebarWidth: '244px',
  sidebarCollapsedWidth: '72px',
} as const