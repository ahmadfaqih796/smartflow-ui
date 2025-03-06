import { useMediaQuery } from '@mui/material'

const useResponsive = () => {
  const isMobile = useMediaQuery("(max-width:720px)")

  return { isMobile }
}

export default useResponsive